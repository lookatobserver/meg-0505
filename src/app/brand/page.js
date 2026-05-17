"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const awards = [
  {
    year: "2024",
    category: "PATENT",
    title: "미생물 배양 기술\n특허 출원",
    body: "악취 유발 분자를 화학 성분 없이 분해하는 독자적 EM 기술이 특허청에 정식 출원되었습니다.",
    badge: "출원번호 10-2024-0123764",
    accent: "#2d6a4f",
  },
  {
    year: "2023",
    category: "CERTIFICATION",
    title: "미국 FDA\n성분 등록",
    body: "맑음수의 핵심 원료인 유용미생물(EM) 4종이 미국 FDA 등록을 완료하며 안전성을 국제적으로 검증받았습니다.",
    badge: "FDA REGISTERED",
    accent: "#1b4332",
  },
  {
    year: "2023",
    category: "CERTIFICATION",
    title: "KC 안전 인증\n획득",
    body: "친환경 무소음 탈취기가 국내 전기용품안전관리법에 따른 KC 인증을 취득, 전기 안전성을 공식 인정받았습니다.",
    badge: "KC CERTIFIED",
    accent: "#4a5568",
  },
  {
    year: "2022",
    category: "RESEARCH",
    title: "1년 연구 개발\n착수",
    body: "자연 유래 미생물만으로 99% 악취 원인을 제거하는 제품을 만들기 위해, 독자적 R&D 프로젝트를 시작했습니다.",
    badge: "R&D LAUNCHED",
    accent: "#744210",
  },
];

const values = [
  {
    num: "01",
    title: "근본 제거",
    desc: "냄새를 덮는 것이 아니라, 악취를 일으키는 분자 자체를 분해합니다. MEG의 유용미생물(EM)은 원인부터 없앱니다.",
  },
  {
    num: "02",
    title: "자연 성분",
    desc: "화학 첨가물, 합성 향료, 파라벤 제로. 자연이 만든 미생물의 힘만으로 공기를 정화합니다.",
  },
  {
    num: "03",
    title: "과학적 증명",
    desc: "특허 기술과 국제 인증으로 뒷받침된 성분. 주장이 아닌 데이터로 신뢰를 쌓습니다.",
  },
  {
    num: "04",
    title: "지속 가능성",
    desc: "생분해 가능한 원료와 무소음 자연 증발 방식으로 환경 부담을 최소화합니다.",
  },
];

const timeline = [
  { year: "2022", event: "MEG 창립 · R&D 착수", detail: "미생물 기반 탈취 기술 연구 시작" },
  { year: "2023", event: "FDA 등록 · KC 인증", detail: "핵심 원료 및 제품 안전성 국제 검증" },
  { year: "2024", event: "특허 출원 · 정식 출시", detail: "특허 기술 탑재 제품 국내 런칭" },
  { year: "2025", event: "글로벌 확장 준비", detail: "일본·동남아 시장 진출 준비 중" },
  { year: "2026", event: "프리미엄 라인 론칭", detail: "보태니컬 케어 풀 라인업 공개" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function BrandPage() {
  const [activeAward, setActiveAward] = useState(null);

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
          <Link href="/" style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.3em",
            color: "#1a1a1a",
            textDecoration: "none",
          }}>
            MEG
          </Link>
          <nav style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {[
              { label: "성분 분석", href: "/lab" },
              { label: "브랜드 스토리", href: "/brand", active: true },
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
        position: "relative",
        backgroundColor: "#0d0d0d",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}>
        {/* Background image */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
        }}>
          <Image
            src="/hero.png"
            alt="MEG 브랜드"
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.85) 100%)",
        }} />

        {/* Top label */}
        <div style={{
          position: "absolute",
          top: 56,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 10,
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.35)",
          textAlign: "center",
        }}>
          BRAND STORY — SINCE 2022
        </div>

        {/* Hero content */}
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 56px 120px",
          width: "100%",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "flex-end",
          }}>
            <div>
              <p style={{
                fontSize: 10,
                letterSpacing: "0.26em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 24,
              }}>
                OUR STORY
              </p>
              <h1 style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(35px, 3.97vw, 61px)",
                fontWeight: 400,
                color: "white",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                marginBottom: 0,
              }}>
                자연의 힘으로<br />
                <em style={{ color: "#4ade80", fontStyle: "italic", whiteSpace: "nowrap" }}>청정함을 증명하다.</em>
              </h1>
            </div>
            <div style={{ paddingBottom: 8 }}>
              <p style={{
                fontSize: 15,
                lineHeight: 2,
                color: "rgba(255,255,255,0.55)",
                fontWeight: 300,
                marginBottom: 32,
              }}>
                MEG는 "냄새를 가리는 것이 아니라 원인을 없앤다"는
                단 하나의 신념에서 출발했습니다. 유용미생물(EM)과
                특허 기술이 만나, 자연이 스스로 공기를 정화하는
                새로운 기준을 만들어갑니다.
              </p>
              <div style={{ display: "flex", gap: 40 }}>
                {[
                  { v: "99%", l: "악취 원인 제거율" },
                  { v: "0", l: "화학 첨가물" },
                  { v: "4종", l: "핵심 유익균" },
                ].map((s) => (
                  <div key={s.l}>
                    <div style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: 36,
                      fontWeight: 300,
                      color: "white",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}>{s.v}</div>
                    <div style={{ fontSize: 10, letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)" }}>
                      {s.l.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.4,
        }}>
          <div style={{ width: 1, height: 48, backgroundColor: "white" }} />
          <span style={{ fontSize: 9, letterSpacing: "0.22em", color: "white" }}>SCROLL</span>
        </div>
      </section>

      {/* ── Awards & Recognition ── */}
      <section style={{ padding: "120px 56px", maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <p style={{ fontSize: 10, letterSpacing: "0.26em", color: "#bbb", marginBottom: 16 }}>
              AWARDS & RECOGNITION
            </p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(34px, 4vw, 58px)",
              fontWeight: 400,
              color: "#1a1a1a",
              letterSpacing: "0.01em",
              lineHeight: 1.15,
            }}>
              기술로 증명한<br />신뢰의 기록.
            </h2>
          </div>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 24,
        }}>
          {awards.map((award, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                onMouseEnter={() => setActiveAward(i)}
                onMouseLeave={() => setActiveAward(null)}
                style={{
                  position: "relative",
                  backgroundColor: activeAward === i ? "#1a1a1a" : "#ffffff",
                  border: `1px solid ${activeAward === i ? "#1a1a1a" : "#e8e8e4"}`,
                  borderRadius: 4,
                  padding: "44px 48px",
                  cursor: "default",
                  transition: "background-color 0.3s, border-color 0.3s",
                  overflow: "hidden",
                }}
              >
                {/* Year accent line */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 4,
                  height: "100%",
                  backgroundColor: award.accent,
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                  <div>
                    <span style={{
                      fontSize: 9,
                      letterSpacing: "0.22em",
                      color: activeAward === i ? "rgba(255,255,255,0.35)" : "#bbb",
                      display: "block",
                      marginBottom: 6,
                      transition: "color 0.3s",
                    }}>{award.category}</span>
                    <span style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: 56,
                      fontWeight: 300,
                      color: activeAward === i ? "rgba(255,255,255,0.12)" : "#f0f0ee",
                      lineHeight: 1,
                      transition: "color 0.3s",
                    }}>{award.year}</span>
                  </div>
                  <span style={{
                    fontSize: 9,
                    letterSpacing: "0.16em",
                    color: activeAward === i ? "rgba(255,255,255,0.5)" : award.accent,
                    border: `1px solid ${activeAward === i ? "rgba(255,255,255,0.2)" : award.accent}`,
                    padding: "5px 10px",
                    borderRadius: 2,
                    transition: "color 0.3s, border-color 0.3s",
                  }}>
                    {award.badge}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 28,
                  fontWeight: 400,
                  color: activeAward === i ? "white" : "#1a1a1a",
                  lineHeight: 1.3,
                  marginBottom: 16,
                  whiteSpace: "pre-line",
                  transition: "color 0.3s",
                }}>
                  {award.title}
                </h3>
                <p style={{
                  fontSize: 13,
                  lineHeight: 1.85,
                  color: activeAward === i ? "rgba(255,255,255,0.5)" : "#888",
                  fontWeight: 300,
                  transition: "color 0.3s",
                }}>
                  {award.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Pull Quote ── */}
      <section style={{
        backgroundColor: "#1b4332",
        padding: "120px 56px",
        textAlign: "center",
      }}>
        <FadeIn>
          <p style={{ fontSize: 10, letterSpacing: "0.26em", color: "rgba(255,255,255,0.3)", marginBottom: 36 }}>
            OUR PHILOSOPHY
          </p>
          <blockquote style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(28px, 4vw, 54px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "white",
            lineHeight: 1.4,
            maxWidth: 860,
            margin: "0 auto 48px",
            letterSpacing: "0.01em",
          }}>
            "자연은 이미 완벽한 정화 시스템을 가지고 있다.<br />
            우리는 그것을 찾아내 담았을 뿐이다."
          </blockquote>
          <p style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.35)",
          }}>
            — MEG 창립자
          </p>
        </FadeIn>
      </section>

      {/* ── Brand Values ── */}
      <section style={{ padding: "120px 56px", maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 80 }}>
            <p style={{ fontSize: 10, letterSpacing: "0.26em", color: "#bbb", marginBottom: 16 }}>
              BRAND VALUES
            </p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(34px, 4vw, 56px)",
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.15,
              maxWidth: 500,
            }}>
              MEG가 지키는<br />네 가지 원칙.
            </h2>
          </div>
        </FadeIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "0",
        }}>
          {values.map((v, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{
                padding: "48px 56px",
                borderTop: "1px solid #e8e8e4",
                borderRight: i % 2 === 0 ? "1px solid #e8e8e4" : "none",
                borderBottom: i < 2 ? "none" : "1px solid #e8e8e4",
              }}>
                <div style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 64,
                  fontWeight: 300,
                  color: "#ebebeb",
                  lineHeight: 1,
                  marginBottom: 20,
                }}>
                  {v.num}
                </div>
                <h3 style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#1a1a1a",
                  letterSpacing: "0.04em",
                  marginBottom: 14,
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: "#888",
                  fontWeight: 300,
                  maxWidth: 340,
                }}>
                  {v.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Visual Feature: Patent Document ── */}
      <section style={{ backgroundColor: "#111", padding: "120px 56px" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}>
          <FadeIn>
            <div style={{
              position: "relative",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            }}>
              <Image
                src="/m01.jpg"
                alt="MEG 특허 문서"
                width={560}
                height={760}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "30%",
                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
              }} />
              <div style={{
                position: "absolute",
                bottom: 28,
                left: 28,
                fontSize: 10,
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.7)",
              }}>
                특허 출원번호 10-2024-0123764
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p style={{ fontSize: 10, letterSpacing: "0.26em", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}>
              PATENT TECHNOLOGY
            </p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(30px, 3.5vw, 50px)",
              fontWeight: 400,
              color: "white",
              lineHeight: 1.2,
              marginBottom: 28,
            }}>
              자연으로 만든 기술,<br />
              특허로 증명한 신뢰.
            </h2>
            <p style={{
              fontSize: 14,
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.45)",
              fontWeight: 300,
              marginBottom: 48,
            }}>
              1년 이상의 연구 끝에 완성된 MEG의 미생물 배양 기술은
              단순한 탈취를 넘어, 악취와 유해물질의 원인 분자를
              미생물이 직접 분해합니다. 화학 성분 하나 없이
              자연의 힘만으로 만들어낸 이 기술은 특허청에 정식 출원되었습니다.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { label: "연구 개발 기간", value: "1년 이상" },
                { label: "핵심 미생물", value: "4종 유용미생물(EM)" },
                { label: "화학 첨가물", value: "0 — 완전 무첨가" },
                { label: "국제 인증", value: "미국 FDA 등록" },
              ].map((row, i, arr) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>
                    {row.label}
                  </span>
                  <span style={{ fontSize: 13, color: "white", fontWeight: 500, letterSpacing: "0.04em" }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48 }}>
              <Link href="/lab" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                backgroundColor: "#2d6a4f",
                color: "white",
                textDecoration: "none",
                fontSize: 11,
                letterSpacing: "0.14em",
                borderRadius: 2,
              }}>
                성분 분석 상세 보기
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ padding: "120px 56px", maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <p style={{ fontSize: 10, letterSpacing: "0.26em", color: "#bbb", marginBottom: 16 }}>
              MILESTONES
            </p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.15,
            }}>
              MEG의 발자국.
            </h2>
          </div>
        </FadeIn>

        <div style={{ position: "relative" }}>
          {/* Center line */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            backgroundColor: "#e8e8e4",
            transform: "translateX(-50%)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0,
                  padding: "40px 0",
                  position: "relative",
                }}>
                  {/* Dot */}
                  <div style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#2d6a4f",
                    border: "3px solid #f8f8f6",
                    zIndex: 1,
                  }} />

                  {i % 2 === 0 ? (
                    <>
                      <div style={{ textAlign: "right", paddingRight: 56 }}>
                        <div style={{
                          fontFamily: "var(--font-cormorant), Georgia, serif",
                          fontSize: 42,
                          fontWeight: 300,
                          color: "#ebebeb",
                          lineHeight: 1,
                          marginBottom: 6,
                        }}>{item.year}</div>
                        <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 6, letterSpacing: "0.02em" }}>
                          {item.event}
                        </div>
                        <div style={{ fontSize: 13, color: "#aaa", fontWeight: 300 }}>
                          {item.detail}
                        </div>
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div style={{ paddingLeft: 56 }}>
                        <div style={{
                          fontFamily: "var(--font-cormorant), Georgia, serif",
                          fontSize: 42,
                          fontWeight: 300,
                          color: "#ebebeb",
                          lineHeight: 1,
                          marginBottom: 6,
                        }}>{item.year}</div>
                        <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 6, letterSpacing: "0.02em" }}>
                          {item.event}
                        </div>
                        <div style={{ fontSize: 13, color: "#aaa", fontWeight: 300 }}>
                          {item.detail}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products CTA ── */}
      <section style={{
        backgroundColor: "#f0f0ee",
        borderTop: "1px solid #e8e8e4",
        padding: "100px 56px",
        textAlign: "center",
      }}>
        <FadeIn>
          <p style={{ fontSize: 10, letterSpacing: "0.26em", color: "#bbb", marginBottom: 20 }}>
            OUR PRODUCTS
          </p>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(30px, 4vw, 52px)",
            fontWeight: 400,
            color: "#1a1a1a",
            lineHeight: 1.2,
            marginBottom: 20,
          }}>
            기술을 담은 제품을<br />직접 경험하세요.
          </h2>
          <p style={{
            fontSize: 14,
            lineHeight: 1.9,
            color: "#888",
            maxWidth: 460,
            margin: "0 auto 48px",
            fontWeight: 300,
          }}>
            특허 기술과 FDA 등록 성분이 담긴 MEG의 제품들.
            청정한 공기와 자연의 향을 집으로 들여보세요.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Link href="/lab" style={{
              display: "inline-block",
              padding: "13px 36px",
              backgroundColor: "#1b4332",
              color: "white",
              fontSize: 11,
              letterSpacing: "0.18em",
              textDecoration: "none",
              borderRadius: 2,
              fontWeight: 500,
            }}>
              성분 분석 보기
            </Link>
            <Link href="/" style={{
              display: "inline-block",
              padding: "13px 36px",
              backgroundColor: "transparent",
              color: "#1a1a1a",
              fontSize: 11,
              letterSpacing: "0.18em",
              textDecoration: "none",
              borderRadius: 2,
              border: "1px solid #1a1a1a",
              fontWeight: 500,
            }}>
              메인으로 돌아가기
            </Link>
          </div>
        </FadeIn>
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
