# Production Deployment Guide

## 1. Prepare Files

The `deployment` folder now contains:

- **`frontend`**: The production build of the website.
- **`admin`**: The production build of the admin panel.
- **`backend`**: The backend code (excluding dependencies).
- **`backend/env.production`**: A pre-filled environment file with your production credentials.

## 2. Upload Backend (FTP)

1. Connect to FTP `ftp.bancat.org.bd` using `bf_ftp@new.bancat.org.bd`.
2. Upload contents of `deployment/backend` to the root `public_html` (or create a separate folder like `api` if you prefer).
3. **Important:** Rename `env.production` to `.env` on the server.
4. Run `composer install --no-dev` on the server (via SSH or cPanel Terminal).
5. Run `php artisan storage:link`.
6. Run `php artisan migrate --force` to set up the database.

## 3. Upload Frontend & Admin

1. Upload contents of `deployment/frontend` to `public_html` (for the main site).
2. Upload contents of `deployment/admin` to `public_html/admin` (create the folder first).

## 4. Final Keys

1. Generate a new app key: `php artisan key:generate`
2. Optimize cache: `php artisan optimize`

Your localhost environment is still running on:

- Frontend: <http://localhost:5173>
- Admin: <http://localhost:5174>
- Backend: <http://127.0.0.1:8000>
