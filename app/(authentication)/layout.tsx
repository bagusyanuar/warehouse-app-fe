import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory | Login",
  description: "inventory application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
