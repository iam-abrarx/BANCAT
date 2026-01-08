<?php

$basePath = __DIR__ . '/bancat-api-core';

ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "<h1>Image Storage Diagnostic</h1>";
echo "<pre>";

if (!file_exists($basePath . '/vendor/autoload.php')) {
    die("Error: Could not find autoloader.");
}

require $basePath . '/vendor/autoload.php';
$app = require_once $basePath . '/bootstrap/app.php';

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Console\Kernel;

try {
    $app->make(Kernel::class)->bootstrap();
    
    echo "<h2>1. Storage Path Check</h2>";
    $storagePath = $basePath . '/storage/app/public/team-members';
    echo "Storage path: $storagePath\n";
    echo "Exists: " . (file_exists($storagePath) ? "YES" : "NO") . "\n";
    
    if (file_exists($storagePath)) {
        $files = scandir($storagePath);
        echo "Files in directory: " . count($files) . "\n";
        foreach ($files as $file) {
            if ($file != '.' && $file != '..') {
                $size = filesize($storagePath . '/' . $file);
                echo "  - $file (" . round($size/1024, 2) . " KB)\n";
            }
        }
    }
    
    echo "\n<h2>2. Symlink Check</h2>";
    $symlinkPath = __DIR__ . '/api/storage';
    echo "Symlink path: $symlinkPath\n";
    echo "Exists: " . (file_exists($symlinkPath) ? "YES" : "NO") . "\n";
    echo "Is link: " . (is_link($symlinkPath) ? "YES" : "NO") . "\n";
    if (is_link($symlinkPath)) {
        echo "Points to: " . readlink($symlinkPath) . "\n";
    }
    
    echo "\n<h2>3. Database Check</h2>";
    $members = DB::table('team_members')->limit(5)->get(['id', 'name_en', 'photo']);
    echo "Sample team members:\n";
    foreach ($members as $member) {
        echo "  - {$member->name_en}: {$member->photo}\n";
    }
    
    echo "\n<h2>4. Test Image URL</h2>";
    if (count($members) > 0) {
        $testPhoto = $members[0]->photo;
        echo "First member photo: $testPhoto\n";
        
        if (strpos($testPhoto, '/storage/') === 0) {
            $fullPath = __DIR__ . '/api' . $testPhoto;
            echo "Full server path: $fullPath\n";
            echo "File exists: " . (file_exists($fullPath) ? "YES" : "NO") . "\n";
            
            $publicUrl = "https://new.bancat.org.bd/api" . $testPhoto;
            echo "Public URL: $publicUrl\n";
        } else {
            echo "Photo is external URL: $testPhoto\n";
        }
    }
    
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage();
}

echo "</pre>";
