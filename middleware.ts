import { clerkMiddleware } from "@clerk/nextjs/server";
export default clerkMiddleware({
  // "/" will be accessible to all users
  authorizedParties: ["/api/webhooks/clerk"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};