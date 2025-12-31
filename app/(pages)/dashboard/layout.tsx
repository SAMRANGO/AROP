import { ReactNode } from "react";
import DashboardSideBar from "./_components/dashboard-side-bar";
import DashboardTopNav from "./_components/dashbord-top-nav";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { getToken } = await auth();
  const token = await getToken({ template: "convex" }) ?? undefined;

  let hasActiveSubscription = false;
  try {
    const result = await fetchQuery(api.subscriptions.getUserSubscriptionStatus, {}, {
      token,
    });
    hasActiveSubscription = result.hasActiveSubscription;
  } catch (error) {
    console.warn("Failed to fetch subscription status:", error);
  }

  if (!hasActiveSubscription) {
    redirect("/pricing");
  }

  return (
    <div className="flex h-screen overflow-hidden w-full">
      <DashboardSideBar />
      <main className="flex-1 overflow-y-auto">
        <DashboardTopNav>{children}</DashboardTopNav>
      </main>

    </div>
  );
}
