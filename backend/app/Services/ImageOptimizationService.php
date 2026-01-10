<?php

namespace App\Services;

use Intervention\Image\Laravel\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

class ImageOptimizationService
{
    /**
     * Optimize and store an uploaded image with multiple sizes
     *
     * @param UploadedFile $file
     * @param string $directory
     * @param array $sizes ['thumbnail' => 150, 'medium' => 500, 'large' => 1200]
     * @return array Paths to optimized images
     */
    public function optimizeAndStore(UploadedFile $file, string $directory, array $sizes = []): array
    {
        $defaultSizes = [
            'thumbnail' => 150,
            'medium' => 500,
            'large' => 1200,
        ];

        $sizes = array_merge($defaultSizes, $sizes);
        $filename = time() . '_' . uniqid() . '.webp';
        $paths = [];

        foreach ($sizes as $sizeName => $maxWidth) {
            $image = Image::read($file);
            
            // Resize maintaining aspect ratio
            $image->scale(width: $maxWidth);
            
            // Convert to WebP for better compression
            $webpPath = "{$directory}/{$sizeName}_{$filename}";
            
            // Save to storage
            Storage::disk('public')->put(
                $webpPath,
                $image->toWebp(quality: 85)->toString()
            );
            
            $paths[$sizeName] = '/storage/' . $webpPath;
        }

        return $paths;
    }

    /**
     * Optimize a single image
     *
     * @param UploadedFile $file
     * @param string $directory
     * @param int $maxWidth
     * @param int $quality
     * @return string Path to optimized image
     */
    public function optimizeSingle(
        UploadedFile $file,
        string $directory,
        int $maxWidth = 1200,
        int $quality = 85
    ): string {
        $filename = time() . '_' . uniqid() . '.webp';
        $image = Image::read($file);
        
        // Resize maintaining aspect ratio
        $image->scale(width: $maxWidth);
        
        $path = "{$directory}/{$filename}";
        
        // Save to storage as WebP
        Storage::disk('public')->put(
            $path,
            $image->toWebp(quality: $quality)->toString()
        );
        
        return '/storage/' . $path;
    }

    /**
     * Delete all image sizes
     *
     * @param array $paths
     * @return void
     */
    public function deleteImages(array $paths): void
    {
        foreach ($paths as $path) {
            $storagePath = str_replace('/storage/', '', $path);
            Storage::disk('public')->delete($storagePath);
        }
    }
}
