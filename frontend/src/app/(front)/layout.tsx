import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Reviews",
  description: "My Project Reviews description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      home layout
      {children}
    </div>
  );
}
