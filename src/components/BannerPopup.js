"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BannerPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expiry = localStorage.getItem("bannerHideUntil");
    if (expiry && Date.now() < Number(expiry)) return;
    setVisible(true);
  }, []);

  function closeForWeek() {
    localStorage.setItem("bannerHideUntil", Date.now() + 7 * 24 * 60 * 60 * 1000);
    setVisible(false);
  }

  function close() {
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.6)",
    }}>
      <div className="banner-popup-box" style={{
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* 이미지 — 버튼 높이(52px) 뺀 나머지 최대 높이로 표시 */}
        <Link href="/product/deodorizer" onClick={close} style={{ display: "block", overflow: "hidden" }}>
          <Image
            src="/banner.png"
            alt="친환경 저소음 탈취기"
            width={260}
            height={779}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "calc(94vh - 52px)",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
            }}
            priority
            unoptimized
          />
        </Link>

        {/* 버튼 — 항상 하단에 고정 */}
        <div style={{ display: "flex", flexShrink: 0 }}>
          <button
            onClick={closeForWeek}
            style={{
              flex: 1,
              padding: "14px 0",
              fontSize: 13,
              color: "#888",
              background: "#f0f0f0",
              border: "none",
              borderRight: "1px solid #ddd",
              cursor: "pointer",
            }}
          >
            일주일 동안 보지 않기
          </button>
          <button
            onClick={close}
            style={{
              flex: 1,
              padding: "14px 0",
              fontSize: 13,
              color: "#fff",
              background: "#222",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            닫기
          </button>
        </div>
      </div>
      <style jsx>{`
        .banner-popup-box {
          width: min(480px, 94vw);
          max-height: 94vh;
        }
        @media (min-width: 768px) {
          .banner-popup-box {
            width: min(960px, 94vw);
            max-height: 94vh;
          }
        }
      `}</style>
    </div>
  );
}
