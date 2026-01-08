<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "<h1>Storage Symlink Fix</h1>";
echo "<pre>";

$target = __DIR__ . '/bancat-api-core/storage/app/public';
$link = __DIR__ . '/api/storage';

echo "Target: $target\n";
echo "Link: $link\n\n";

// Remove existing if it's broken
if (file_exists($link) && !is_link($link)) {
    echo "Removing existing non-symlink file/directory...\n";
    if (is_dir($link)) {
        rmdir($link);
    } else {
        unlink($link);
    }
}

// Remove broken symlink
if (is_link($link) && !file_exists($link)) {
    echo "Removing broken symlink...\n";
    unlink($link);
}

// Create symlink
if (!file_exists($link)) {
    echo "Creating symlink...\n";
    if (symlink($target, $link)) {
        echo "<span style='color:green'>✓ Symlink created successfully!</span>\n";
    } else {
        echo "<span style='color:red'>✗ Failed to create symlink</span>\n";
        echo "Error: " . error_get_last()['message'] . "\n";
    }
} else {
    echo "<span style='color:green'>✓ Symlink already exists</span>\n";
}

echo "\n<h2>Verification</h2>";
echo "Symlink exists: " . (file_exists($link) ? "YES" : "NO") . "\n";
echo "Is link: " . (is_link($link) ? "YES" : "NO") . "\n";
if (is_link($link)) {
    echo "Points to: " . readlink($link) . "\n";
}

echo "\n<h2>Test Image Access</h2>";
$testImage = $link . '/team-members/trustee_1.jpg';
echo "Test file: $testImage\n";
echo "Accessible: " . (file_exists($testImage) ? "<span style='color:green'>YES ✓</span>" : "<span style='color:red'>NO ✗</span>") . "\n";

if (file_exists($testImage)) {
    echo "\n<span style='color:green; font-weight:bold'>SUCCESS! Images should now be visible on the website.</span>\n";
    echo "Test URL: https://new.bancat.org.bd/api/storage/team-members/trustee_1.jpg\n";
}

echo "</pre>";
