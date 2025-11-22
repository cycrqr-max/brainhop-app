// utils/pcloudClient.ts

const PCLOUD_API_BASE = 'https://eapi.pcloud.com';

/**
 * Extracts the "code" from either:
 *  - "https://u.pcloud.link/publink/show?code=XXXX"
 *  - or a raw "XXXX"
 */
function normalizePublinkCode(input: string): string {
  // Full URL?
  const match = input.match(/[?&]code=([^&]+)/);
  if (match) return match[1];

  // Already looks like a code
  return input.trim();
}

/**
 * Get a temporary direct download/stream URL from a *public link* code.
 *
 * Uses pCloud's public-link API:
 *   GET /getpublinkdownload?code=...
 *
 * This does NOT need auth or credentials.
 */
export async function getPcloudFileUrlFromPublink(
  publinkOrCode: string,
): Promise<string> {
  const code = normalizePublinkCode(publinkOrCode);

  const params = new URLSearchParams({ code });
  const res = await fetch(
    `${PCLOUD_API_BASE}/getpublinkdownload?${params.toString()}`,
  );
  const json = await res.json();

  if (json.result !== 0) {
    console.warn('pCloud getpublinkdownload error:', json);
    throw new Error('Fehler beim Laden des Videos von pCloud');
  }

  // The response shape for public download links is usually similar
  // to getfilelink: { hosts: ["..."], path: "/getpublinkdownload?..." }
  const host = Array.isArray(json.hosts) ? json.hosts[0] : json.hosts;
  const filePath = json.path || json.downloadlink;

  if (!host || !filePath) {
    console.warn('Unexpected getpublinkdownload response:', json);
    throw new Error('Ungültige Antwort von pCloud');
  }

  // Build absolute https URL
  const url = host.startsWith('http')
    ? `${host}${filePath}`
    : `https://${host}${filePath}`;

  return url;
}
