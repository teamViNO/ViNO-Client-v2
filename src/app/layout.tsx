import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GlobalProvider from "@/layout/GlobalProvider";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vi.NO",
  description: "영상보다 글이 편한 당신을 위한 영상 블로그화 솔루션, <Vi.NO>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
