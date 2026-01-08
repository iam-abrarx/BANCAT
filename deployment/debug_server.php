<?php

// Define the path to the Laravel application core
$basePath = __DIR__ . '/bancat-api-core';

// ENABLE DEBUGGING FOR THIS SCRIPT
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

echo "<h1>Server Debugger</h1>";
echo "<pre>";

if (!file_exists($basePath . '/vendor/autoload.php')) {
    die("Error: Could not find autoloader at $basePath/vendor/autoload.php.");
}

require $basePath . '/vendor/autoload.php';
$app = require_once $basePath . '/bootstrap/app.php';

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Contracts\Console\Kernel;

try {
    // Bootstrap
    $app->make(Kernel::class)->bootstrap();
    
    echo "<h2>1. Environment Check</h2>";
    echo "Laravel Version: " . app()->version() . "\n";
    
    $key = env('APP_KEY');
    if (empty($key)) {
        echo "<span style='color:red'>[CRITICAL] APP_KEY is MISSING or EMPTY!</span>\n";
        echo "The GitHub Secret 'ENV_FILE' was likely not updated.\n";
    } else {
        echo "<span style='color:green'>[OK] APP_KEY is set (Length: " . strlen($key) . ")</span>\n";
    }

    echo "App URL: " . config('app.url') . "\n";
    echo "App Debug: " . (config('app.debug') ? 'true' : 'false') . "\n";

    echo "<h2>2. Database Check</h2>";
    try {
        DB::connection()->getPdo();
        echo "<span style='color:green'>[OK] Connected to Database: " . DB::connection()->getDatabaseName() . "</span>\n";
    } catch (\Exception $e) {
         echo "<span style='color:red'>[ERROR] Database Connection Failed: " . $e->getMessage() . "</span>\n";
    }

    echo "<h2>3. Recent Log Entries (storage/logs/laravel.log)</h2>";
    $logFile = $basePath . '/storage/logs/laravel.log';
    
    if (file_exists($logFile)) {
        $lines = file($logFile);
        $lines = array_slice($lines, -50); // Get last 50 lines
        foreach ($lines as $line) {
            echo htmlspecialchars($line);
        }
    } else {
        echo "Log file not found at $logFile\n";
    }

} catch (\Exception $e) {
    echo "<h2 style='color:red'>Bootstrap Error:</h2>";
    echo $e->getMessage();
    echo "\n" . $e->getTraceAsString();
}

echo "</pre>";
