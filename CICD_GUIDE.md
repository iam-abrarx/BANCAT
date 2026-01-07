# GitHub Actions CI/CD Setup Guide

This guide explains how to configure your GitHub repository to automatically deploy your BANcat project to cPanel whenever you push code.

## 1. Prerequisites (What you must do manually)

I have created the workflow files for you, but for security reasons, **I cannot access your GitHub repository settings**. You must perform this step yourself:

1. Go to your GitHub Repository -> **Settings**.
2. On the left sidebar, click **Secrets and variables** -> **Actions**.
3. Click **New repository secret** (Green button).
4. Add the following three secrets:

| Name | Value |
| :--- | :--- |
| `FTP_SERVER` | `ftp.bancat.org.bd` |
| `FTP_USERNAME` | `bancatorg@new.bancat.org.bd` |
| `FTP_PASSWORD` | *(Paste the password you have)* |

---

## 2. Customize Deployment Paths

By default, I have set placeholder paths in the workflow files. You **MUST** update these to match your actual cPanel folder structure.

### 2.1 Backend (`.github/workflows/deploy-backend.yml`)

- Open the file.
- Look for `server-dir: bancat-api/`.
- Change `bancat-api/` to the actual folder name where you uploaded your backend (e.g., `api-core/` or `bancat-api/`). **Ensure it ends with a slash `/`**.

### 2.2 Frontend (`.github/workflows/deploy-frontend.yml`)

- Open the file.
- Look for `server-dir: public_html/frontend/`.
- Change this to the `public_html/subdomain/` folder for your frontend site.

### 2.3 Admin Panel (`.github/workflows/deploy-admin.yml`)

- Open the file.
- Look for `server-dir: public_html/admin/`.
- Change this to the `public_html/subdomain/` folder for your admin site.

---

## 3. How It Works

- **Frontend/Admin**: When you push changes to the `frontend` or `admin` folders, GitHub will build the React app and upload the `dist` folder to your server.
- **Backend**: When you push changes to `backend`, GitHub will install PHP dependencies and upload the files to your server.

> [!IMPORTANT]
> The first deployment might take a few minutes as it uploads all files. Subsequent deployments will only upload changed files.
