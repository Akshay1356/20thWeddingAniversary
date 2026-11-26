/**
 * Absolute Unlock Timestamp:
 * 27 November 2026, 12:00:00 AM Indian Standard Time (IST)
 * ISO 8601: 2026-11-27T00:00:00+05:30
 * UTC: 2026-11-26T18:30:00Z
 * Unix Epoch (ms): 1795717800000
 */
export const UNLOCK_TIMESTAMP = 1795717800000;

export function isTimeUnlocked(currentMs?: number): boolean {
  const now = typeof currentMs === 'number' ? currentMs : Date.now();
  return now >= UNLOCK_TIMESTAMP;
}
