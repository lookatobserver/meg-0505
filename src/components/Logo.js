import Link from "next/link";

export default function Logo({ dark = false }) {
  const textColor = dark ? "rgba(255,255,255,0.9)" : "#555";
  const subColor = dark ? "rgba(255,255,255,0.4)" : "#aaa";

  return (
    <Link href="/" style={{ textDecoration: "none", display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
      <span style={{
        fontFamily: "var(--font-barlow), 'Arial Black', sans-serif",
        fontSize: 34,
        fontWeight: 800,
        color: textColor,
        letterSpacing: "0.04em",
        lineHeight: 1,
        textTransform: "uppercase",
      }}>
        MEG
      </span>
      <span style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: 8.5,
        fontWeight: 300,
        color: subColor,
        letterSpacing: "0.18em",
        lineHeight: 1,
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}>
        Microbial Eco Guardians
      </span>
    </Link>
  );
}
