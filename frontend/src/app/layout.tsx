import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/redux/Reduxprovider";
import SessionProviderWrapper from "@/lib/SessionProviderWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Reviews",
  description: "My Project Reviews description",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper session={session}>
          <ReduxProvider>{children}</ReduxProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
