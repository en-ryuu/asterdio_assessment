import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Event Planner",
  description: "Event planner asterdio assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
