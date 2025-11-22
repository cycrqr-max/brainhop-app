// utils/pcloudClient.ts

// Public base URL of your helper backend
// (Render, or your local IP during dev)
const BACKEND_BASE =
  process.env.EXPO_PUBLIC_PCLOUD_BACKEND_URL ??
  'https://brainhop-app-backend.onrender.com';

/**
 * Build the streaming URL for a given *pCloud path*.
 * Example path:
 *   /0-21-Tage-Programm/TAG-1_8vw-moderiert-(BM1)/Tag1-8erLauf-MachMit.mp4
 */
export function buildPcloudStreamUrl(path: string): string {
  const params = new URLSearchParams({ path });
  // Trim possible trailing slash on BACKEND_BASE
  const base = BACKEND_BASE.replace(/\/$/, '');
  return `${base}/pcloud/stream?${params.toString()}`;
}
