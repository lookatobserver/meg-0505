"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { products } from "@/lib/products";
import Logo from "@/components/Logo";

const gnbItems = [
  { label: "브랜드 스토리", href: "/brand", accent: true },
  { label: "ABOUT", href: "/about" },
  { label: "성분 분석", href: "/lab" },
  { label: "이벤트", href: "/events" },
  { label: "고객 후기", href: "/reviews" },
];

const features = [
  { title: "식물성 추출물", desc: "12종 냉압착 원료로 피부 자극 없이 향을 전달합니다." },
  { title: "휘발성 유기화합물 0%", desc: "엄격한 분자 분석으로 유해 성분을 완전히 배제합니다." },
  { title: "24시간 지속 포뮬러", desc: "생체흡수 기술로 체온에 반응해 향이 오래 지속됩니다." },
];

export default function Home() {
  const [btnState, setBtnState] = useState({});
  const router = useRouter();

  return (
    <div
      style={{ backgroundColor: "#f8f8f6", minHeight: "100vh", fontFamily: "var(--font-sans)" }}
      onClickCapture={(e) => {
        const anchor = e.target.closest("a");
        if (anchor) {
          const href = anchor.getAttribute("href");
          if (href !== "/" && href !== "/lab" && href !== "/brand" && href !== "/about") {
            e.preventDefault();
            e.stopPropagation();
            alert("준비중입니다.");
          }
        }
      }}
    >

      {/* ── Header ── */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(248,248,246,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e8e8e4",
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 56px",
          maxWidth: 1280,
          margin: "0 auto",
        }}>
          {/* Logo */}
          <Logo />

          {/* GNB */}
          <nav style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {gnbItems.map((item) => (
              item.accent ? (
                <Link key={item.href} href={item.href} style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: "#fff",
                  textDecoration: "none",
                  backgroundColor: "#1b4332",
                  padding: "6px 14px",
                  borderRadius: 2,
                  fontWeight: 500,
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#2d6a4f"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#1b4332"}
                >
                  {item.label}
                </Link>
              ) : (
                <Link key={item.href} href={item.href} style={{
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  color: "#555",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#1a1a1a"}
                onMouseLeave={e => e.currentTarget.style.color = "#555"}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Link href="/cart" style={{
              fontSize: 12,
              letterSpacing: "0.08em",
              color: "#1a1a1a",
              textDecoration: "none",
              fontWeight: 500,
            }}>
              장바구니 (0)
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ textAlign: "center", padding: "80px 40px 60px" }}>
        <p style={{
          fontSize: 11,
          letterSpacing: "0.22em",
          color: "#aaa",
          marginBottom: 28,
          textTransform: "uppercase",
        }}>
          프리미엄 보태니컬 케어
        </p>
        <h1 style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(48px, 7vw, 96px)",
          fontWeight: 400,
          lineHeight: 1.1,
          color: "#1a1a1a",
          letterSpacing: "-0.01em",
          maxWidth: 760,
          margin: "0 auto 20px",
        }}>
          자연이 주는<br />
          <em style={{ color: "#2d6a4f" }}>완벽한 조화.</em>
        </h1>

        {/* Hero image */}
        <div style={{
          width: "100%",
          maxWidth: 900,
          margin: "48px auto 40px",
          position: "relative",
          aspectRatio: "16 / 11",
          borderRadius: 32,
          overflow: "hidden",
          boxShadow: "0 24px 72px rgba(0,0,0,0.10)",
        }}>
          <Image src="/hero.png" alt="MEG 제품" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <p style={{
          fontSize: 14,
          lineHeight: 1.8,
          color: "#888",
          maxWidth: 480,
          margin: "0 auto",
          fontWeight: 300,
        }}>
          냉압착 식물성 원료와 미네랄 추출물로 탄생한 MEG.
          개인 향을 웰니스와 명료함의 의식으로 재창조합니다.
        </p>

      </section>

      {/* ── Products ── */}
      <section style={{ padding: "80px 56px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.22em", color: "#bbb", marginBottom: 10 }}>
            SELECTION 2026
          </p>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(32px, 3.5vw, 50px)",
            fontWeight: 400,
            color: "#1a1a1a",
            letterSpacing: "0.01em",
          }}>
            베스트 초이스
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}>
          {products.map((product, i) => {
            const state = btnState[i];
            const isActive = state === "active";
            const isHover = state === "hover";
            return (
            <div key={product.name} style={{
              backgroundColor: "#ffffff",
              border: "1px solid #ebebeb",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ height: 280, position: "relative", backgroundColor: product.cardBg ?? "#f4f4f2" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain", padding: "28px" }}
                />
                <span style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  fontSize: 9,
                  letterSpacing: "0.14em",
                  color: "#999",
                  backgroundColor: "rgba(255,255,255,0.85)",
                  padding: "3px 8px",
                }}>
                  {product.badge}
                </span>
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <h3 style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 21,
                  fontWeight: 400,
                  color: "#1a1a1a",
                  marginBottom: 5,
                }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: 12, color: "#aaa", marginBottom: 12, letterSpacing: "0.04em" }}>
                  {product.shortDesc}
                </p>
                <p style={{ fontSize: 15, fontWeight: 500, color: "#1a1a1a", marginBottom: 18 }}>
                  {product.price}
                </p>
                <button
                  onClick={() => router.push(`/product/${product.slug}`)}
                  onMouseEnter={() => setBtnState(s => ({ ...s, [i]: "hover" }))}
                  onMouseLeave={() => setBtnState(s => ({ ...s, [i]: null }))}
                  onMouseDown={() => setBtnState(s => ({ ...s, [i]: "active" }))}
                  onMouseUp={() => setBtnState(s => ({ ...s, [i]: "hover" }))}
                  style={{
                    width: "100%",
                    padding: "11px 0",
                    backgroundColor: isActive ? "#333" : isHover ? "#1a1a1a" : "transparent",
                    color: (isHover || isActive) ? "white" : "#1a1a1a",
                    border: "1px solid #1a1a1a",
                    fontSize: 16,
                    letterSpacing: "0.14em",
                    cursor: "pointer",
                    transition: "background-color 0.18s, color 0.18s, transform 0.1s",
                    transform: isActive ? "scale(0.97)" : "scale(1)",
                  }}
                >
                  제품 상세
                </button>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* ── What we capture ── */}
      <section style={{
        backgroundColor: "#111",
        padding: "100px 56px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          maxWidth: 1080,
          margin: "0 auto",
          alignItems: "center",
        }}>
          {/* Circular image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 480,
              height: 480,
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#fff",
              boxShadow: "0 0 80px rgba(45,106,79,0.25)",
            }}>
              <Image src="/new01.png" alt="제품 구성" fill style={{ objectFit: "contain", padding: "24px" }} />
            </div>
          </div>

          {/* Text */}
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.22em", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
              순수함의 과학
            </p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(34px, 4vw, 54px)",
              fontWeight: 400,
              color: "white",
              marginBottom: 48,
              lineHeight: 1.15,
            }}>
              무엇을 담았나.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "rgba(45,106,79,0.4)",
                    flexShrink: 0,
                    marginTop: 2,
                  }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "white", marginBottom: 4, letterSpacing: "0.04em" }}>
                      {f.title}
                    </div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontWeight: 300 }}>
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin ── */}
      <section style={{ padding: "100px 40px", textAlign: "center", backgroundColor: "#f8f8f6" }}>
        <p style={{ fontSize: 10, letterSpacing: "0.22em", color: "#bbb", marginBottom: 20 }}>
          THE ORIGIN
        </p>
        <h2 style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(30px, 4vw, 52px)",
          fontWeight: 400,
          color: "#1a1a1a",
          maxWidth: 680,
          margin: "0 auto 20px",
          lineHeight: 1.2,
        }}>
          자연에서 태어나,<br />과학으로 완성된 향.
        </h2>
        <p style={{
          fontSize: 14,
          lineHeight: 1.9,
          color: "#888",
          maxWidth: 520,
          margin: "0 auto 48px",
          fontWeight: 300,
        }}>
          MEG는 순수한 식물 유래 분자만이 피부에 닿을 수 있도록
          엄격한 다단계 분석을 거칩니다. 자연과 과학의 교차점에서 탄생한 브랜드입니다.
        </p>
        <div style={{
          width: 260,
          height: 260,
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto",
          position: "relative",
          boxShadow: "0 16px 48px rgba(0,0,0,0.1)",
        }}>
          <Image src="/product2.png" alt="브랜드 원료" fill style={{ objectFit: "cover" }} />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#ffffff", borderTop: "1px solid #ebebeb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 56px 36px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr",
            gap: 48,
            marginBottom: 48,
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "0.25em",
                color: "#1a1a1a",
                marginBottom: 14,
              }}>MEG</div>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: "#aaa", fontWeight: 300, maxWidth: 200 }}>
                신체와 대지를 기리는 의미 있는 향 의식을 만듭니다.
              </p>
            </div>
            {[
              { title: "고객 지원", links: [{ label: "공지사항", href: "/notice" }, { label: "자주 묻는 질문", href: "/faq" }, { label: "1:1 문의", href: "/qna" }, { label: "배송 안내", href: "/shipping" }] },
              { title: "회사 정보", links: [{ label: "브랜드 소개", href: "/brand" }, { label: "연구 일지", href: "/lab-journal" }, { label: "지속가능성", href: "/sustainability" }, { label: "문의하기", href: "/contact" }] },
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{ fontSize: 11, letterSpacing: "0.14em", color: "#1a1a1a", marginBottom: 18, fontWeight: 600 }}>
                  {col.title}
                </h4>
                {col.links.map((link) => (
                  <div key={link.href} style={{ marginBottom: 9 }}>
                    <Link href={link.href} style={{ fontSize: 13, color: "#aaa", textDecoration: "none", fontWeight: 300 }}>
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
            <div>
              <h4 style={{ fontSize: 11, letterSpacing: "0.14em", color: "#1a1a1a", marginBottom: 18, fontWeight: 600 }}>
                뉴스레터
              </h4>
              <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.7, marginBottom: 14, fontWeight: 300 }}>
                식물성 인사이트와 독점 얼리 액세스를 위한 이너 서클에 합류하세요.
              </p>
              <div style={{ display: "flex" }}>
                <input type="email" placeholder="이메일 주소" style={{
                  flex: 1, padding: "10px 14px", border: "1px solid #e0e0e0",
                  backgroundColor: "#f8f8f6", fontSize: 13, outline: "none",
                }} />
                <button style={{
                  padding: "10px 16px", backgroundColor: "#1b4332", color: "white",
                  border: "none", fontSize: 11, letterSpacing: "0.1em", cursor: "pointer",
                }}>구독</button>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: "1px solid #ebebeb",
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <p style={{ fontSize: 11, color: "#ccc" }}>© 2026 MEG Botanical Ltd. All Rights Reserved.</p>
            <div style={{ display: "flex", gap: 20 }}>
              {[{ label: "이용약관", href: "/terms" }, { label: "개인정보처리방침", href: "/privacy" }].map((item) => (
                <Link key={item.href} href={item.href} style={{ fontSize: 11, color: "#ccc", textDecoration: "none" }}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
