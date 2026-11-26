import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UNLOCK_TIMESTAMP, isTimeUnlocked } from '@/lib/timeConstants';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Intercept requests to private anniversary images before unlock time
  if (pathname.startsWith('/images/')) {
    let now = Date.now();

    // Dev-only override for local testing if explicitly provided
    if (process.env.NODE_ENV !== 'production') {
      const devTestOffset = searchParams.get('testOffset');
      const devTestTime = searchParams.get('testTime');
      if (devTestTime) {
        now = parseInt(devTestTime, 10) || now;
      } else if (devTestOffset) {
        now = UNLOCK_TIMESTAMP + parseInt(devTestOffset, 10) * 1000;
      }
    }

    if (!isTimeUnlocked(now)) {
      return new NextResponse(
        JSON.stringify({
          error: 'Access restricted.',
          message: 'This cherished anniversary photograph unlocks on 27 November 2026, 12:00:00 AM IST.',
          unlockTimeIST: '2026-11-27T00:00:00+05:30',
        }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate',
          },
        }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/images/:path*'],
};
