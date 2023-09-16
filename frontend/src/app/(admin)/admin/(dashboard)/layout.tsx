import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Reviews",
  description: "My Project Reviews description",
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      admin layout
      {children}
    </div>
  );
}
