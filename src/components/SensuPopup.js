"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SensuPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expiry = localStorage.getItem("sensuHideUntil");
    if (expiry && Date.now() < Number(expiry)) return;
    setVisible(true);
  }, []);

  function closeForWeek() {
    localStorage.setItem("sensuHideUntil", Date.now() + 7 * 24 * 60 * 60 * 1000);
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
      zIndex: 9997,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.6)",
    }}>
      <div style={{
        width: "min(360px, 88vw)",
        maxHeight: "88vh",
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}>

        <div style={{ overflow: "hidden" }}>
          <Image
            src="/sensu.png"
            alt="2026 아시안게임 레슬링선수들을 응원합니다"
            width={1024}
            height={1535}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "calc(88vh - 52px)",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
            }}
            priority
            unoptimized
          />
        </div>

        {/* 하단 버튼 */}
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
    </div>
  );
}
