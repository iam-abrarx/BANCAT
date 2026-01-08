<?php

// Define the path to the Laravel application core
$basePath = __DIR__ . '/bancat-api-core';

// ENABLE DEBUGGING
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (!file_exists($basePath . '/vendor/autoload.php')) {
    die("Error: Could not find autoloader at $basePath/vendor/autoload.php.");
}

require $basePath . '/vendor/autoload.php';
$app = require_once $basePath . '/bootstrap/app.php';

use Illuminate\Support\Facades\Artisan;
use Illuminate\Contracts\Console\Kernel;

// Bootstrap the application
$app->make(Kernel::class)->bootstrap();

// FORCE DEBUG MODE for this script
config(['app.debug' => true]);

echo "<h1>Database Seeder Utility</h1>";
echo "<pre>";

try {
    echo "<h2>Running Database Seeder...</h2>";
    
    // Run the db:seed command with force flag for production
    Artisan::call('db:seed', ['--force' => true]);
    
    echo Artisan::output();
    echo "<span style='color:green'>Seeding Completed Successfully.</span>\n";

} catch (\Exception $e) {
    echo "<h2 style='color:red'>Error:</h2>";
    echo $e->getMessage();
    echo "\n" . $e->getTraceAsString();
}

echo "</pre>";
echo "<hr><h3><strong style='color:red'>IMPORTANT: Delete this file (seed_database.php) immediately after use!</strong></h3>";
