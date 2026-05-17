"use client";

export default function CtaButtons() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <button
        onClick={() => alert("준비중입니다.")}
        style={{
          width: "100%",
          padding: "15px 0",
          backgroundColor: "#1b4332",
          color: "white",
          border: "none",
          fontSize: 12,
          letterSpacing: "0.16em",
          cursor: "pointer",
          borderRadius: 2,
          fontFamily: "var(--font-sans)",
        }}
      >
        장바구니 담기
      </button>
      <button
        onClick={() => alert("준비중입니다.")}
        style={{
          width: "100%",
          padding: "15px 0",
          backgroundColor: "transparent",
          color: "#1a1a1a",
          border: "1px solid #1a1a1a",
          fontSize: 12,
          letterSpacing: "0.16em",
          cursor: "pointer",
          borderRadius: 2,
          fontFamily: "var(--font-sans)",
        }}
      >
        바로 구매
      </button>
    </div>
  );
}
