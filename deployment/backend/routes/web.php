<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// TEMPORARY: Route to run migrations (Delete this after deployment!)
Route::get('/migrate-db', function () {
    try {
        Illuminate\Support\Facades\Artisan::call('migrate --force');
        return 'Migration completed successfully!<br>' . nl2br(Illuminate\Support\Facades\Artisan::output());
    } catch (\Exception $e) {
        return 'Error: ' . $e->getMessage();
    }
});
