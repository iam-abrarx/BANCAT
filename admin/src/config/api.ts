// CRITICAL: Fail fast if env is missing in production
if (import.meta.env.PROD && !import.meta.env.VITE_API_URL) {
    throw new Error("CRITICAL CONFIGURATION ERROR: VITE_API_URL is missing in Production environment variables. The app cannot function.");
}

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/v1';

// Remove /api/v1 AND any trailing slashes to get the pure base URL
export const BASE_URL = API_BASE_URL.replace(/\/api\/v1\/?$/, '').replace(/\/$/, '');

/**
 * Helper to get the full URL for an asset (image, etc.)
 * Handles absolute URLs (starting with http) and relative paths.
 * Prevents double slashes if backend returns optional leading slash.
 */
export const getAssetUrl = (path: string | null | undefined): string | undefined => {
    if (!path) return undefined;
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${BASE_URL}${cleanPath}`;
};
