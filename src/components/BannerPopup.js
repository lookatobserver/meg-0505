"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function BannerPopup() {
  const [visible, setVisible] = useState(false);
  const [noShow, setNoShow] = useState(false);

  useEffect(() => {
    const expiry = localStorage.getItem("bannerHideUntil");
    if (expiry && Date.now() < Number(expiry)) return;
    setVisible(true);
  }, []);

  function close() {
    if (noShow) {
      localStorage.setItem("bannerHideUntil", Date.now() + 7 * 24 * 60 * 60 * 1000);
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.55)",
      }}
      onClick={close}
    >
      <div
        style={{
          position: "relative",
          width: "min(420px, 92vw)",
          backgroundColor: "#fff",
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.28)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 배너 이미지 */}
        <Image
          src="/banner.png"
          alt="팝업 배너"
          width={420}
          height={600}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />

        {/* 하단 바 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            backgroundColor: "#222",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              color: "#ccc",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <input
              type="checkbox"
              checked={noShow}
              onChange={(e) => setNoShow(e.target.checked)}
              style={{ width: 15, height: 15, cursor: "pointer", accentColor: "#4ecdc4" }}
            />
            일주일 동안 보지 않기
          </label>

          <button
            onClick={close}
            style={{
              fontSize: 13,
              color: "#aaa",
              background: "none",
              border: "1px solid #555",
              borderRadius: 4,
              padding: "5px 16px",
              cursor: "pointer",
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
