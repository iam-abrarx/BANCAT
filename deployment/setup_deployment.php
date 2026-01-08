<?php

// Define the path to the Laravel application core
// Based on deployment structure: /public_html/bancat-api-core/
$basePath = __DIR__ . '/bancat-api-core';

if (!file_exists($basePath . '/vendor/autoload.php')) {
    die("Error: Could not find autoloader at $basePath/vendor/autoload.php. <br>Please verify the path or upload location.");
}

require $basePath . '/vendor/autoload.php';
$app = require_once $basePath . '/bootstrap/app.php';

use Illuminate\Support\Facades\Artisan;
use Illuminate\Contracts\Console\Kernel;

// Bootstrap the application
$app->make(Kernel::class)->bootstrap();

echo "<h1>Deployment Setup Utility</h1>";
echo "<pre>";

try {
    // 1. Run Migrations
    echo "<h2>Running Migrations...</h2>";
    Artisan::call('migrate', ['--force' => true]);
    echo Artisan::output();
    echo "<span style='color:green'>Done.</span>\n";

    // 2. Link Storage
    echo "<h2>Linking Storage...</h2>";
    // Traditional storage:link might fail if symlink() is disabled or paths are weird.
    // We try the command first.
    try {
        Artisan::call('storage:link');
        echo Artisan::output();
    } catch (\Exception $e) {
        echo "Standard storage:link failed: " . $e->getMessage() . "\n";
        echo "Attempting manual symlink...\n";
        
        $target = $basePath . '/storage/app/public';
        $shortcut = __DIR__ . '/api/storage'; // Assuming /api/ folder exists as per public deployment

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

    // 3. Clear Caches
    echo "<h2>Clearing Caches...</h2>";
    Artisan::call('config:clear');
    echo Artisan::output();
    Artisan::call('cache:clear');
    echo Artisan::output();
    Artisan::call('route:clear');
    echo Artisan::output();
    echo "<span style='color:green'>Done.</span>\n";

} catch (\Exception $e) {
    echo "<h2 style='color:red'>Error:</h2>";
    echo $e->getMessage();
    echo "\n" . $e->getTraceAsString();
}

echo "</pre>";
echo "<hr><h3><strong style='color:red'>IMPORTANT: Delete this file (setup_deployment.php) from your server immediately after use!</strong></h3>";
