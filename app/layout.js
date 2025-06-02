import { Toaster } from "sonner";
import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";
import Provider from "./provider";

export const metadata = {
  title: "Nova.ai",
  description: "Generate Websites with thought",
  icons: {
    icon: "/logo-mini.png",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className="min-h-screen flex flex-col">
        <ConvexClientProvider>
          <Provider>
            <main className="flex-1 flex flex-col">
              {children}
            </main>
          </Provider>
          <Toaster position="top-center" />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
