import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';



const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

export default clerkMiddleware(async (auth, req) => {

  if (process.env.NODE_ENV === 'development') {
    console.log('Middleware: Connecting to Convex at', process.env.NEXT_PUBLIC_CONVEX_URL);
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