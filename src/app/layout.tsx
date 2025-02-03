import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Event Lister",
  description: "Event Lister web app",
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
