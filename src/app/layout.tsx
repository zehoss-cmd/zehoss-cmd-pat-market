import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R&D–IP Intelligence Platform",
  description: "R&D 프로젝트와 특허개발 활동을 연결하는 사내 업무 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
