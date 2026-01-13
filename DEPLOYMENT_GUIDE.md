# Deployment Guide for BANcat on cPanel

This guide provides step-by-step instructions for deploying the BANcat project (Frontend, Admin Panel, and Backend) to a cPanel hosting environment.

## 1. Architecture Overview

The project consists of three separate components that need to be deployed:

1. **Backend (Laravel)**: The API and database logic.
2. **Frontend (React/Vite)**: The main user-facing website.
3. **Admin Panel (React/Vite)**: The administrative dashboard.

## 2. Recommended Domain Structure

For the best security and ease of maintenance, we recommend using separate subdomains or a clean structure:

* **Main Site**: `subdomain.yourdomain.com` (Frontend)
* **API**: `api.subdomain.yourdomain.com` (Backend)
* **Admin**: `admin.subdomain.yourdomain.com` (Admin Panel)

*Alternatively*, if you only have one subdomain (e.g., `new.mysite.com`):

* Frontend: `new.mysite.com`
* Backend: `new.mysite.com/api` (Requires complex configuration, **not recommended** for beginners).
* Admin: `new.mysite.com/admin`

**This guide follows the Recommended Structure (Separate Subdomains) as it is the standard for modern web apps.**

---

## 3. Backend Deployment (Laravel)

### Step 3.1: Prepare the Files

1. On your local machine, navigate to the `backend` folder.
2. Run `composer install --optimize-autoloader --no-dev` (if you have PHP/Composer locally). If not, you can run this via SSH on cPanel later, or skip if you upload `vendor`.
3. Zip the entire `backend` contents (excluding `.git`, `node_modules`, `tests`).

### Step 3.2: Upload to cPanel

1. Log in to cPanel -> **File Manager**.
2. Create a folder *outside* `public_html` if possible, e.g., `bancat-api`. If you must use `public_html`, create `public_html/api-core`.
3. Upload and extract your zip file into this folder.

### 6. Deployment Helper

The `setup_deployment.php` script handles extraction and migration.

**After Uploading:**

1. Visit `yourdomain.com/deployment/setup_deployment.php`
2. This will:
   * Extract the zip files
   * Boot Laravel and migrate database
   * Link storage
   * Clear caches
3. **IMPORTANT**: After setup, you must manually:
   * Copy `deployment/frontend_htaccess` to root `.htaccess`
   * Copy `deployment/admin_htaccess` to `admin/.htaccess`
   * Delete `setup_deployment.php` and zip files for security.

### Step 3.3: Configure Database

1. Go to cPanel -> **MySQL® Database Wizard**.
2. Create a new Database (e.g., `bancat_db`).
3. Create a new User and assign it to the database with ALL PRIVILEGES.
4. Note down the Database Name, User, and Password.
5. In **File Manager**, rename `.env.example` to `.env` in your uploaded backend folder.
6. Edit `.env` and update:

    ```env
    APP_ENV=production
    APP_DEBUG=false
    APP_URL=https://api.subdomain.yourdomain.com
    
    DB_DATABASE=your_db_name
    DB_USERNAME=your_db_user
    DB_PASSWORD=your_db_password
    ```

### Step 3.4: Point Subdomain

1. Go to cPanel -> **Domains** or **Subdomains**.
2. Create `api.subdomain.yourdomain.com`.
3. Set the **Document Root** to the `public` folder of your uploaded backend (e.g., `bancat-api/public`).
4. **Important**: Ensure `storage` and `bootstrap/cache` directories are writable (Permissions 775).

### Step 3.5: Run Migrations

1. If you have **Terminal** access in cPanel:
    * `cd` to your backend folder.
    * Run `php artisan migrate --force`.
    * Run `php artisan storage:link`.
2. If *no* Terminal access:
    * You may need to upload a route definition to trigger `Artisan::call('migrate')` temporarily (be careful with security).

---

## 4. Frontend Deployment (React)

### Step 4.1: Configure for Production

1. In `frontend`, create a file named `.env.production`.
2. Add your API URL (from Step 3):

    ```env
    VITE_API_URL=https://api.subdomain.yourdomain.com/api/v1
    ```

### Step 4.2: Build

1. Run `npm install` (if not done).
2. Run `npm run build`.
3. This creates a `dist` folder.

### Step 4.3: Upload

1. Go to cPanel -> **Domains**.
2. Create `subdomain.yourdomain.com`.
3. Note the Document Root (usually `public_html/subdomain`).
4. Upload the **contents** of the `frontend/dist` folder to this Document Root.

### Step 4.4: Fix Routing (.htaccess)

Since this is a Single Page Application (SPA), you need to tell the server to redirect all requests to `index.html`.

1. In the frontend Document Root, create a new file named `.htaccess`.
2. Add:

    ```apache
    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule . /index.html [L]
    </IfModule>
    ```

---

## 5. Admin Panel Deployment

Follow the same steps as the Frontend:

1. Create `.env.production` in `admin` folder with the same `VITE_API_URL`.
2. Run `npm run build` in `admin`.
3. Create subdomain `admin.subdomain.yourdomain.com`.
4. Upload `admin/dist` contents to the new subdomain's folder.
5. Add the same `.htaccess` file.

---

## Summary Checklist

* [ ] Database credentials configured in Backend `.env`

* [ ] Backend migrations run
* [ ] Backend `storage` permissions set to 775
* [ ] Frontend `.env.production` points to HTTPS API URL
* [ ] Frontend built and uploaded
* [ ] Frontend `.htaccess` created
