"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function UusPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expiry = localStorage.getItem("uusHideUntil");
    if (expiry && Date.now() < Number(expiry)) return;
    setVisible(true);
  }, []);

  function closeForWeek() {
    localStorage.setItem("uusHideUntil", Date.now() + 7 * 24 * 60 * 60 * 1000);
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
      zIndex: 9998,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.6)",
    }}>
      <div style={{
        width: "min(480px, 94vw)",
        maxHeight: "94vh",
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}>

        {/* 이미지 + 상단 텍스트 오버레이 */}
        <div style={{ position: "relative", overflow: "hidden", flexShrink: 1 }}>
          <Image
            src="/uus.png"
            alt="냄새엔 맑음수짱 킁킁탈짱"
            width={600}
            height={800}
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
          {/* 상단 텍스트 */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            padding: "18px 16px 32px",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)",
            textAlign: "center",
          }}>
            <p style={{
              margin: 0,
              fontSize: 20,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "0.02em",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              lineHeight: 1.4,
            }}>
              냄새엔 맑음수짱! 킁킁탈짱!!!
            </p>
          </div>
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
            일주일 보지 않기
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
