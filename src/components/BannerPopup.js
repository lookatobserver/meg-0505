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
        width: "min(400px, 90vw)",
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
      }}>

        {/* 배너 이미지 */}
        <Image
          src="/banner.png"
          alt="팝업 배너"
          width={400}
          height={570}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />

        {/* 버튼 영역 */}
        <div style={{
          display: "flex",
          borderTop: "1px solid #e0e0e0",
        }}>
          <button
            onClick={closeForWeek}
            style={{
              flex: 1,
              padding: "14px 0",
              fontSize: 13,
              color: "#888",
              background: "#f5f5f5",
              border: "none",
              borderRight: "1px solid #e0e0e0",
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
              fontWeight: 500,
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
