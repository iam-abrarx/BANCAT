import asyncio
import os
from playwright.async_api import async_playwright

async def run():
    # Read URLs
    with open('urls.txt', 'r') as f:
        urls = [line.strip() for line in f if line.strip()]

    # Create output dir
    output_dir = 'jpgs'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Create context once
        context = await browser.new_context(viewport={"width": 1920, "height": 1080})

        # Capture Loading Screen (Once)
        page = await context.new_page()
        print("Capturing Loading Screen...")
        try:
             await page.goto(urls[0])
             await page.wait_for_timeout(500)
             await page.screenshot(path=os.path.join(output_dir, "loading_screen.jpg"), full_page=True, type='jpeg', quality=80)
             print("Saved: loading_screen.jpg")
        except:
             pass
        await page.close()

        # Parallel processing
        sem = asyncio.Semaphore(5)

        async def process_url(url):
            async with sem:
                page = await context.new_page()
                try:
                    print(f"Processing: {url}")
                    await page.goto(url, wait_until="domcontentloaded", timeout=60000)
                    
                    # Wait for footer
                    try:
                        await page.wait_for_selector("footer", timeout=15000)
                        await page.wait_for_timeout(2000)
                    except Exception:
                         print(f"Timeout waiting for footer on {url}")

                    # Filename
                    clean_name = url.replace('https://', '').replace('http://', '').replace('/', '_').replace('?', '_').replace('=', '_')
                    if clean_name.endswith('_'):
                        clean_name = clean_name[:-1]
                    
                    output_path = os.path.join(output_dir, f"{clean_name}.jpg")
                    
                    await page.screenshot(
                        path=output_path, 
                        full_page=True,
                        type='jpeg',
                        quality=80
                    )
                    print(f"Saved: {output_path}")
                except Exception as e:
                    print(f"Failed {url}: {e}")
                finally:
                    await page.close()

        tasks = [process_url(url) for url in urls]
        await asyncio.gather(*tasks)

        await browser.close()

if __name__ == '__main__':
    asyncio.run(run())
