import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { fetchQuery } from 'convex/nextjs';
import { NextResponse } from 'next/server';
import { api } from './convex/_generated/api';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

export default clerkMiddleware(async (auth, req) => {

  if (process.env.NODE_ENV === 'development') {
    console.log('Middleware: Connecting to Convex at', process.env.NEXT_PUBLIC_CONVEX_URL);
  }

  const token = (await (await auth()).getToken({ template: "convex" })) || undefined;

  let hasActiveSubscription = false;
  try {
    const result = await fetchQuery(api.subscriptions.getUserSubscriptionStatus, {}, {
      token,
    });
    hasActiveSubscription = result.hasActiveSubscription;
  } catch (error) {
    console.error("Middleware: Failed to fetch subscription status", error);
    // Default to false or handle accordingly
  }

  const isDashboard = req.nextUrl.href.includes(`/dashboard`)

  if (isDashboard && !hasActiveSubscription) {
    const pricingUrl = new URL('/pricing', req.nextUrl.origin)
    // Redirect to the pricing page
    return NextResponse.redirect(pricingUrl);
  }

  if (isProtectedRoute(req)) await auth.protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}