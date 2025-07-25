import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Footer from "./components/Footer";
import CallMobileButton from "./components/Widgets/CallMobileButton";
// import ContactInfo from "@/components/Content/ContactInfo.json";

import contactContent from "@/app/Data/content";

const ContactInfo: any = contactContent.contactContent;
const inter = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={ContactInfo.favicon} />
      </head>
      <GoogleAnalytics gaId={ContactInfo.googleAnalytics} />
      {/* <GoogleTagManager gtmId="" /> */}
      <body className={`mx-auto w-full max-w-screen-2xl ${inter.className}`}>
        <div className="bg-white">{children}</div>
        <CallMobileButton />
        <Footer />
      </body>
    </html>
  );
}
