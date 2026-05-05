import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "AETHER — 프리미엄 보태니컬 케어",
  description:
    "냉압착 식물성 원료와 미네랄 추출물로 만든 프리미엄 향 케어 브랜드. 아이더는 웰니스와 명료함의 의식으로서 개인 향을 재창조합니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
