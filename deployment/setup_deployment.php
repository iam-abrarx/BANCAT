<?php

echo "<h1>Deployment Setup Utility</h1>";
echo "<pre>";

// Define the path to the Laravel application core
$basePath = __DIR__ . '/bancat-api-core';

// --- PHASE 1: UNLINK & EXTRACT ---
try {
    echo "<h2>1. Extracting Files...</h2>";
    
    // Check if zip extension is loaded
    if (!class_exists('ZipArchive')) {
        die("<span style='color:red'>Error: PHP Zip extension is not installed. Contact your host.</span>");
    }

    $zips = [
        'frontend.zip' => __DIR__ . '/',
        'admin.zip' => __DIR__ . '/admin/',
        'backend.zip' => $basePath . '/',
        'backend_public.zip' => __DIR__ . '/api/',
    ];

    foreach ($zips as $zipFile => $extractTo) {
        $fullZipPath = __DIR__ . '/' . $zipFile;
        // Only extract if zip exists
        if (file_exists($fullZipPath)) {
            echo "Found $zipFile. Extracting to $extractTo... ";
            
            // Create directory if not exists
            if (!file_exists($extractTo)) {
                if (!mkdir($extractTo, 0755, true)) {
                     echo "<span style='color:red'>Failed to create dir $extractTo</span>\n";
                     continue;
                }
            }

            $zip = new ZipArchive;
            if ($zip->open($fullZipPath) === TRUE) {
                $zip->extractTo($extractTo);
                $zip->close();
                echo "<span style='color:green'>Success!</span>\n";
            } else {
                echo "<span style='color:red'>Failed to open zip.</span>\n";
            }
        } else {
            echo "Skipping $zipFile (not found - maybe already extracted?)\n";
        }
    }
} catch (\Exception $e) {
    echo "<span style='color:red'>Extraction Error: " . $e->getMessage() . "</span>\n";
}

// --- PHASE 2: BOOT LARAVEL & MIGRATE ---
echo "<h2>2. Booting Laravel...</h2>";

if (!file_exists($basePath . '/vendor/autoload.php')) {
    die("Error: Could not find autoloader at $basePath/vendor/autoload.php after extraction. <br>Please check if backend.zip was uploaded.");
}

require $basePath . '/vendor/autoload.php';
$app = require_once $basePath . '/bootstrap/app.php';

use Illuminate\Support\Facades\Artisan;
use Illuminate\Contracts\Console\Kernel;

try {
    // Bootstrap the application
    $app->make(Kernel::class)->bootstrap();
    echo "<span style='color:green'>Laravel Booted.</span>\n";

    // 3. Run Migrations
    echo "<h2>3. Running Migrations...</h2>";
    Artisan::call('migrate', ['--force' => true]);
    echo Artisan::output();
    echo "<span style='color:green'>Done.</span>\n";

    // 4. Link Storage
    echo "<h2>4. Linking Storage...</h2>";
    try {
        Artisan::call('storage:link');
        echo Artisan::output();
    } catch (\Exception $e) {
        echo "Standard storage:link failed: " . $e->getMessage() . "\n";
        echo "Attempting manual symlink...\n";
        
        $target = $basePath . '/storage/app/public';
        $shortcut = __DIR__ . '/api/storage'; 

        if (!file_exists($shortcut)) {
            if (symlink($target, $shortcut)) {
                echo "Manual symlink created successfully at $shortcut.\n";
            } else {
                echo "Failed to create manual symlink.\n";
            }
        } else {
            echo "Link already exists at $shortcut.\n";
        }
    }
    echo "<span style='color:green'>Done.</span>\n";

    // 5. Clear Caches
    echo "<h2>5. Clearing Caches...</h2>";
    Artisan::call('config:clear');
    Artisan::call('cache:clear');
    Artisan::call('route:clear');
    echo "<span style='color:green'>Caches Cleared.</span>\n";

} catch (\Exception $e) {
    echo "<h2 style='color:red'>Application Error:</h2>";
    echo $e->getMessage();
    echo "\n" . $e->getTraceAsString();
}

echo "</pre>";
echo "<hr><h3><strong style='color:red'>IMPORTANT: Delete this file (setup_deployment.php) and the .zip files from your server immediately!</strong></h3>";

