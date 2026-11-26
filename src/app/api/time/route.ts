import { NextResponse } from 'next/server';
import { UNLOCK_TIMESTAMP, isTimeUnlocked } from '@/lib/timeConstants';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  let serverTime = Date.now();

  // Development-only testing parameter: strictly disabled in production
  if (process.env.NODE_ENV !== 'production') {
    const { searchParams } = new URL(request.url);
    const testTime = searchParams.get('testTime');
    const testOffsetSeconds = searchParams.get('testOffset');
    if (testTime) {
      serverTime = parseInt(testTime, 10) || serverTime;
    } else if (testOffsetSeconds) {
      serverTime = UNLOCK_TIMESTAMP + parseInt(testOffsetSeconds, 10) * 1000;
    }
  }

  const unlocked = isTimeUnlocked(serverTime);
  const remainingMs = Math.max(0, UNLOCK_TIMESTAMP - serverTime);

  return NextResponse.json(
    {
      serverTime,
      unlockTime: UNLOCK_TIMESTAMP,
      isUnlocked: unlocked,
      remainingMs,
      timezone: 'Asia/Kolkata (IST)',
      targetIso: '2026-11-27T00:00:00+05:30',
    },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
    }
  );
}
