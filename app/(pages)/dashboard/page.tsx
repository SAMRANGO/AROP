import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Code, Star, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";
import { FileUpload } from "./_components/file-upload";

export default async function Dashboard() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your dashboard overview.
        </p>
      </div>

      {/* Quick Stats Row */}
      <div className="max-w-xl mx-auto">
        <FileUpload
          maxFiles={5}
          maxSize={10 * 1024 * 1024} // 10MB
          accept={{
            "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
            "application/pdf": [".pdf"],
            "application/msword": [".doc", ".docx"],
            "text/plain": [".txt"],
          }}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button asChild variant="outline" className="w-full justify-start gap-2">
              <Link href="/dashboard/projects">
                <Code className="h-4 w-4" />
                New Project
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start gap-2">
              <Link href="/dashboard/finance">
                <TrendingUp className="h-4 w-4" />
                View Analytics
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start gap-2">
              <Link href="/dashboard/settings">
                <Users className="h-4 w-4" />
                Invite Team
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Latest Updates</CardTitle>
            <CardDescription>Recent changes and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "New Feature Released",
                  description: "Enhanced project analytics and reporting tools are now available.",
                  time: "2 hours ago"
                },
                {
                  title: "System Update",
                  description: "Performance improvements and bug fixes deployed.",
                  time: "5 hours ago"
                },
                {
                  title: "Community Milestone",
                  description: "I'm an IT student from Arusha Technical College, currently working on my AROP project!",
                  time: "1 day ago"
                }
              ].map((update, i) => (
                <div key={i} className="flex justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">{update.title}</p>
                    <p className="text-sm text-muted-foreground">{update.description}</p>
                  </div>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">{update.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full">View All Updates</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
