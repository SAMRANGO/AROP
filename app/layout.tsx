import Provider from "@/app/provider";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://arop.vercel.app/"),
  title: {
    default: 'AROP',
    template: `%s | AROP`
  },
  description:
    "Agricultural Resource Optimization Platform for maximizing farm productivity and efficiency.",
  openGraph: {
    description:
      "Agricultural Resource Optimization Platform for maximizing farm productivity and efficiency.",
    images: [
      "https://y7wjirhcap.ufs.sh/f/Z6H5NLvckVbTa5cGbhHVqklDuajgUhJ4XGn5rbSTKWQeBOLy",
    ],
    url: "https://arop.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AROP",
    description:
      "Agricultural Resource Optimization Platform for maximizing farm productivity and efficiency.",
    siteId: "",
    creator: "@SamwelMmari40705",
    creatorId: "",
    images: [
      "https://y7wjirhcap.ufs.sh/f/Z6H5NLvckVbTa5cGbhHVqklDuajgUhJ4XGn5rbSTKWQeBOLy",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider dynamic>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
