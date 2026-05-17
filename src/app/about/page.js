import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";
import CeoCaricature from "@/components/CeoCaricature";

export const metadata = {
  title: "ABOUT — MEG Microbial Eco Guardians",
  description: "MEG 발효연구원장 안성순 인삿말 및 브랜드 소개",
};

const ceoMessage = [
  {
    type: "greeting",
    text: "안녕하십니까, 안성순 발효연구원장입니다.",
  },
  {
    type: "body",
    text: "MEG(Microbial Eco Guardians)를 찾아주신 여러분께 진심으로 감사드립니다. 저는 한서대학교산학연구원에서 미생물 발효 기술을 연구해 오며, 오랫동안 한 가지 질문을 붙들고 있었습니다.",
  },
  {
    type: "quote",
    text: "\"왜 탈취제는 냄새를 잠시 억누를 뿐, 원인을 없애지 못할까?\"",
  },
  {
    type: "body",
    text: "강한 화학 성분으로 냄새를 덮는 방식은 근본적인 해결이 아닙니다. 악취를 일으키는 균과 유기 분자 자체를 제거하지 않는 한, 문제는 반드시 되돌아옵니다.",
  },
  {
    type: "heading",
    text: "자연에서 찾은 답",
  },
  {
    type: "body",
    text: "수질 정화에서 토양 복원까지, 자연은 이미 완벽한 정화 시스템을 갖추고 있습니다. 그 핵심이 바로 유용미생물(EM)입니다. 유산균·락토바실러스·비피더스균·바실러스균, 이 네 가지 살아있는 균이 악취의 원인 분자를 직접 분해하고 유해균의 증식을 억제합니다. 독소 없이, 인공 성분 없이, 오직 자연의 힘만으로.",
  },
  {
    type: "body",
    text: "1년 이상의 연구 끝에 이 기술을 MEG 제품에 담아냈습니다. 미국 FDA에 등록된 성분과 특허청 정식 출원 기술 — 이것은 자랑이 아닌, 여러분의 공간에 들어오는 제품이 마땅히 갖춰야 할 최소한의 책임입니다.",
  },
  {
    type: "closing",
    text: "자기 환경을 생각하는 기술, 자연에서 답을 찾는 연구. MEG는 그 신념 위에 서 있습니다.\n당신의 공간이 다시 숨 쉬기를 바랍니다.",
  },
  {
    type: "sign",
    text: "감사합니다.",
  },
];

const milestones = [
  { year: "2022", text: "MEG 창립 및 유용미생물(EM) 기반 탈취 기술 연구 착수" },
  { year: "2023", text: "미국 FDA 핵심 성분 등록 완료 · KC 전기 안전 인증 획득" },
  { year: "2024", text: "미생물 배양 기술 특허 출원 (10-2024-0123764) · 제품 공식 출시" },
  { year: "2025", text: "일본·동남아 시장 진출 준비 · 제품 라인 확장" },
  { year: "2026", text: "프리미엄 보태니컬 케어 풀 라인업 공개" },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#f8f8f6", minHeight: "100vh" }}>

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
          <Logo />
          <nav style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {[
              { label: "브랜드 스토리", href: "/brand" },
              { label: "ABOUT", href: "/about", active: true },
              { label: "성분 분석", href: "/lab" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                fontSize: 12,
                letterSpacing: "0.08em",
                color: item.active ? "#1a1a1a" : "#888",
                textDecoration: "none",
                fontWeight: item.active ? 500 : 400,
                borderBottom: item.active ? "1px solid #1a1a1a" : "none",
                paddingBottom: item.active ? 2 : 0,
              }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/" style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            letterSpacing: "0.08em",
            color: "#888",
            textDecoration: "none",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            메인으로
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{
        backgroundColor: "#111",
        padding: "110px 56px 100px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Faint background texture */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.08,
        }}>
          <Image src="/product1.png" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontSize: 10,
            letterSpacing: "0.32em",
            color: "rgba(255,255,255,0.3)",
            marginBottom: 28,
          }}>
            CEO MESSAGE
          </p>
          <h1 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(36px, 4.5vw, 68px)",
            fontWeight: 400,
            color: "white",
            lineHeight: 1.15,
            letterSpacing: "0.01em",
            marginBottom: 28,
          }}>
            자연의 이치를 담아,<br />
            <em style={{ color: "#4ade80", fontStyle: "italic" }}>더 나은 일상을 만듭니다.</em>
          </h1>
          <p style={{
            fontSize: 13,
            lineHeight: 1.9,
            color: "rgba(255,255,255,0.4)",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}>
            자기 환경을 생각하는 기술 — 자연에서 답을 찾다
          </p>
        </div>
      </section>

      {/* ── CEO Message ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 56px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          gap: 80,
          alignItems: "flex-start",
        }}>

          {/* Left: CEO caricature */}
          <div style={{ position: "sticky", top: 120 }}>
            {/* Caricature card */}
            <div style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e8e8e4",
              borderRadius: 8,
              padding: "20px 20px 0",
              marginBottom: 20,
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
              overflow: "hidden",
            }}>
              <CeoCaricature width={300} height={400} />
            </div>

            {/* Name card */}
            <div style={{
              padding: "20px 24px",
              borderLeft: "3px solid #2d6a4f",
              backgroundColor: "#ffffff",
              borderRadius: "0 4px 4px 0",
            }}>
              <div style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: 22,
                fontWeight: 400,
                color: "#1a1a1a",
                marginBottom: 4,
                letterSpacing: "0.04em",
              }}>
                안성순
              </div>
              <div style={{ fontSize: 10, letterSpacing: "0.14em", color: "#aaa", marginBottom: 12 }}>
                발효연구원장 · 한서대학교산학연구원
              </div>
              <div style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  backgroundColor: "#2d6a4f",
                }} />
                <span style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em" }}>
                  MEG Microbial Eco Guardians
                </span>
              </div>
            </div>
          </div>

          {/* Right: Message text */}
          <div>
            <p style={{
              fontSize: 10,
              letterSpacing: "0.26em",
              color: "#bbb",
              marginBottom: 36,
            }}>
              GREETING
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {ceoMessage.map((para, i) => {
                if (para.type === "greeting") return (
                  <p key={i} style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 26,
                    fontWeight: 400,
                    color: "#1a1a1a",
                    lineHeight: 1.4,
                    letterSpacing: "0.02em",
                    marginBottom: 28,
                  }}>{para.text}</p>
                );
                if (para.type === "quote") return (
                  <p key={i} style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 19,
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "#2d6a4f",
                    lineHeight: 1.6,
                    borderLeft: "3px solid #2d6a4f",
                    paddingLeft: 20,
                    marginTop: 4,
                    marginBottom: 24,
                  }}>{para.text}</p>
                );
                if (para.type === "heading") return (
                  <p key={i} style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    color: "#1a1a1a",
                    marginTop: 12,
                    marginBottom: 16,
                    textTransform: "uppercase",
                  }}>{para.text}</p>
                );
                if (para.type === "closing") return (
                  <p key={i} style={{
                    fontSize: 15,
                    fontWeight: 300,
                    lineHeight: 2,
                    color: "#444",
                    marginTop: 12,
                    marginBottom: 8,
                    whiteSpace: "pre-line",
                  }}>{para.text}</p>
                );
                if (para.type === "sign") return (
                  <p key={i} style={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#1a1a1a",
                    marginTop: 8,
                    marginBottom: 0,
                  }}>{para.text}</p>
                );
                // body (default)
                return (
                  <p key={i} style={{
                    fontSize: 15,
                    fontWeight: 300,
                    lineHeight: 1.95,
                    color: "#555",
                    marginBottom: 20,
                    letterSpacing: "0.01em",
                  }}>{para.text}</p>
                );
              })}
            </div>

            {/* Signature */}
            <div style={{
              marginTop: 56,
              paddingTop: 40,
              borderTop: "1px solid #e8e8e4",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "#1b4332",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 20,
                  color: "white",
                  fontWeight: 400,
                }}>M</span>
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#1a1a1a",
                  marginBottom: 2,
                }}>
                  안성순 발효연구원장
                </div>
                <div style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.1em" }}>
                  MEG · 한서대학교산학연구원
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider Quote ── */}
      <section style={{
        borderTop: "1px solid #e8e8e4",
        borderBottom: "1px solid #e8e8e4",
        padding: "72px 56px",
        textAlign: "center",
        backgroundColor: "#ffffff",
      }}>
        <p style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(20px, 2.5vw, 34px)",
          fontWeight: 400,
          fontStyle: "italic",
          color: "#2d6a4f",
          lineHeight: 1.6,
          maxWidth: 720,
          margin: "0 auto",
          letterSpacing: "0.01em",
        }}>
          "당신의 공간을 다시 숨 쉬게, MEG가 만드는 일상."
        </p>
        <p style={{ fontSize: 10, letterSpacing: "0.2em", color: "#ccc", marginTop: 20 }}>
          MEG FOUNDING PRINCIPLE
        </p>
      </section>

      {/* ── Company Milestones ── */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "100px 56px" }}>
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.26em", color: "#bbb", marginBottom: 16 }}>
            COMPANY HISTORY
          </p>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(28px, 3vw, 44px)",
            fontWeight: 400,
            color: "#1a1a1a",
            lineHeight: 1.2,
          }}>
            MEG의 걸어온 길.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {milestones.map((m, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr",
              gap: 32,
              padding: "28px 0",
              borderBottom: i < milestones.length - 1 ? "1px solid #ebebeb" : "none",
              alignItems: "flex-start",
            }}>
              <div style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: 28,
                fontWeight: 300,
                color: "#d0d0cc",
                lineHeight: 1,
                paddingTop: 2,
              }}>
                {m.year}
              </div>
              <div style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "#555",
                fontWeight: 300,
                paddingTop: 4,
              }}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values Stats ── */}
      <section style={{ backgroundColor: "#1b4332", padding: "80px 56px" }}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 40,
          textAlign: "center",
        }}>
          {[
            { value: "2022", label: "설립 연도" },
            { value: "99%", label: "악취 원인 제거율" },
            { value: "4종", label: "핵심 유용미생물" },
            { value: "FDA", label: "미국 등록 성분" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: 48,
                fontWeight: 300,
                color: "white",
                lineHeight: 1,
                marginBottom: 12,
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: 10,
                letterSpacing: "0.16em",
                color: "rgba(255,255,255,0.4)",
              }}>
                {s.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "90px 56px",
        textAlign: "center",
        backgroundColor: "#f8f8f6",
      }}>
        <p style={{ fontSize: 10, letterSpacing: "0.26em", color: "#bbb", marginBottom: 20 }}>
          EXPLORE MEG
        </p>
        <h2 style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(26px, 3vw, 42px)",
          fontWeight: 400,
          color: "#1a1a1a",
          marginBottom: 20,
          lineHeight: 1.2,
        }}>
          MEG의 기술과 철학을<br />더 알아보세요.
        </h2>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 36 }}>
          <Link href="/brand" style={{
            display: "inline-block",
            padding: "13px 36px",
            backgroundColor: "#1b4332",
            color: "white",
            fontSize: 11,
            letterSpacing: "0.16em",
            textDecoration: "none",
            borderRadius: 2,
            fontWeight: 500,
          }}>
            브랜드 스토리
          </Link>
          <Link href="/lab" style={{
            display: "inline-block",
            padding: "13px 36px",
            backgroundColor: "transparent",
            color: "#1a1a1a",
            fontSize: 11,
            letterSpacing: "0.16em",
            textDecoration: "none",
            borderRadius: 2,
            border: "1px solid #1a1a1a",
            fontWeight: 500,
          }}>
            성분 분석
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#ffffff", borderTop: "1px solid #ebebeb" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "28px 56px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <p style={{ fontSize: 11, color: "#ccc" }}>
            © 2026 MEG Botanical Ltd. All Rights Reserved.
          </p>
          <Link href="/" style={{ fontSize: 11, color: "#aaa", textDecoration: "none", letterSpacing: "0.08em" }}>
            메인으로 돌아가기
          </Link>
        </div>
      </footer>

    </div>
  );
}
