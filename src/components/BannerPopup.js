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
      {/* 이미지 비율(575:1318) 그대로 유지, 뷰포트에 맞게 축소 */}
      <div style={{
        position: "relative",
        width: "min(575px, 96vw, calc(94vh * 575 / 1318))",
        aspectRatio: "575 / 1318",
        overflow: "hidden",
        borderRadius: 8,
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      }}>
        <Image
          src="/banner.png"
          alt="팝업 배너"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* 버튼 — 이미지 맨 아래 오버레이 */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
        }}>
          <button
            onClick={closeForWeek}
            style={{
              flex: 1,
              padding: "13px 0",
              fontSize: 13,
              color: "#ccc",
              background: "rgba(0,0,0,0.75)",
              border: "none",
              borderRight: "1px solid rgba(255,255,255,0.15)",
              cursor: "pointer",
              backdropFilter: "blur(4px)",
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
              background: "rgba(0,0,0,0.75)",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              backdropFilter: "blur(4px)",
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
