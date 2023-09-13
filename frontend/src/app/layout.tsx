import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "@/lib/ApolloWrapper";
import ReduxProvider from "@/redux/Reduxprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ReduxProvider>
          <ApolloWrapper>{children}</ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}