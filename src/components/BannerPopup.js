"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div style={{
        width: "min(400px, 96vw)",
        maxHeight: "94vh",
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* 이미지 — 버튼 높이 뺀 나머지 공간 채움 */}
        <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
          <Image
            src="/banner.png"
            alt="팝업 배너"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            priority
          />
        </div>

        {/* 버튼 — 이미지 바로 아래 */}
        <div style={{ display: "flex", flexShrink: 0 }}>
          <button
            onClick={closeForWeek}
            style={{
              flex: 1,
              padding: "13px 0",
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
              padding: "13px 0",
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
    </div>
  );
}
