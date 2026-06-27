"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const certs = [
  { file: "상표등록증(보이수).pdf",                                               thumb: "상표등록증(보이수)-1.png",                                               name: "상표등록증",               category: "상표" },
  { file: "식물영양재  특허증.pdf",                                               thumb: "식물영양재  특허증-1.png",                                               name: "식물영양재 특허증",          category: "특허" },
  { file: "엠이지발효연구원_벤처기업인증 완료_인증서 (2).pdf",                    thumb: "엠이지발효연구원_벤처기업인증 완료_인증서 (2)-1.png",                    name: "벤처기업 인증서",            category: "인증" },
  { file: "토양개선재 특허증.pdf",                                                thumb: "토양개선재 특허증-1.png",                                                name: "토양개선재 특허증",          category: "특허" },
  { file: "안전기준 적합확인 신고증명서.pdf",                                     thumb: "안전기준 적합확인 신고증명서-1.png",                                     name: "안전기준 적합확인 신고증명서", category: "인증" },
  { file: "연구전담부서 인증서.pdf",                                              thumb: "연구전담부서 인증서-1.png",                                              name: "연구전담부서 인증서",        category: "인증" },
  { file: "KATRM 2025 05 16 탈취성적서_(한국어).pdf",                            thumb: "KATRM 2025 05 16 탈취성적서_(한국어)-1.png",                            name: "탈취 성적서",               category: "성적서" },
  { file: "분석성적서_엠이지발효연구원_MEG잘자라수_2025-06-E002.pdf",             thumb: "분석성적서_엠이지발효연구원_MEG잘자라수_2025-06-E002-1.png",             name: "분석 성적서",               category: "성적서" },
  { file: "잔류농약성적서_엠이지발효연구원_MEG잘자라수_HN25-10-179.pdf",          thumb: "잔류농약성적서_엠이지발효연구원_MEG잘자라수_HN25-10-179-1.png",          name: "잔류농약 성적서",            category: "성적서" },
  { file: "목원대학교 식물실험 자료.pdf",                                         thumb: "목원대학교 식물실험 자료-01.png",                                        name: "목원대학교 식물실험 자료",   category: "연구자료" },
];

const categoryColor = {
  "상표":   { bg: "#e8f4f0", text: "#1b4332" },
  "특허":   { bg: "#e8eef8", text: "#1a3a6b" },
  "인증":   { bg: "#f5f0e8", text: "#6b4a1a" },
  "성적서": { bg: "#f0e8f5", text: "#4a1a6b" },
  "연구자료":{ bg: "#f0f5e8", text: "#3a6b1a" },
};

export default function CertPage() {
  const [selected, setSelected] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div style={{ backgroundColor: "#f8f8f6", minHeight: "100vh", fontFamily: "var(--font-sans)" }}>

      {/* ── Header ── */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(248,248,246,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e8e8e4",
      }}>
        <div className="header-inner" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 56px",
          maxWidth: 1280,
          margin: "0 auto",
        }}>
          <Logo />
          <Link href="/" style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            letterSpacing: "0.08em",
            color: "#888",
            textDecoration: "none",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            메인으로
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="rsp-pad" style={{ textAlign: "center", padding: "72px 40px 56px" }}>
        <p style={{ fontSize: 10, letterSpacing: "0.26em", color: "#bbb", marginBottom: 20, textTransform: "uppercase" }}>
          Patents &amp; Certifications
        </p>
        <h1 style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 400,
          color: "#1a1a1a",
          lineHeight: 1.15,
          marginBottom: 20,
          letterSpacing: "0.01em",
        }}>
          특허·증명
        </h1>
        <p style={{ fontSize: 14, color: "#aaa", fontWeight: 300, lineHeight: 1.8, maxWidth: 480, margin: "0 auto" }}>
          MEG의 기술력과 안전성을 공인 기관이 증명합니다.<br />
          모든 문서를 클릭하면 전체 내용을 확인할 수 있습니다.
        </p>
      </section>

      {/* ── Grid ── */}
      <main className="rsp-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 120px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 28,
        }}>
          {certs.map((cert, i) => {
            const colors = categoryColor[cert.category] || { bg: "#f0f0ee", text: "#555" };
            const isHovered = hoveredIdx === i;
            return (
              <button
                key={i}
                onClick={() => setSelected(cert)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#ffffff",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: isHovered ? "1px solid #c8d8cc" : "1px solid #ebebeb",
                  boxShadow: isHovered ? "0 8px 32px rgba(27,67,50,0.10)" : "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.2s, border-color 0.2s, transform 0.2s",
                  transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                }}
              >
                {/* PDF 썸네일 */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: 300,
                  overflow: "hidden",
                  backgroundColor: "#f5f5f3",
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/cert-thumb/${encodeURIComponent(cert.thumb)}`}
                    alt={cert.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                  {/* 호버 오버레이 */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: isHovered ? "rgba(27,67,50,0.12)" : "transparent",
                    transition: "background-color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {isHovered && (
                      <div style={{
                        backgroundColor: "rgba(27,67,50,0.88)",
                        color: "#fff",
                        fontSize: 11,
                        letterSpacing: "0.12em",
                        padding: "8px 18px",
                        borderRadius: 20,
                      }}>
                        클릭하여 확대 보기
                      </div>
                    )}
                  </div>
                </div>

                {/* 카드 하단 정보 */}
                <div style={{ padding: "16px 18px 18px" }}>
                  <span style={{
                    display: "inline-block",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    color: colors.text,
                    backgroundColor: colors.bg,
                    padding: "3px 9px",
                    borderRadius: 10,
                    marginBottom: 8,
                    fontWeight: 500,
                  }}>
                    {cert.category}
                  </span>
                  <p style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#1a1a1a",
                    lineHeight: 1.5,
                    margin: 0,
                    letterSpacing: "0.02em",
                  }}>
                    {cert.name}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </main>

      {/* ── Lightbox ── */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 860,
              height: "90vh",
              backgroundColor: "#ffffff",
              borderRadius: 12,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* 모달 헤더 */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 20px",
              borderBottom: "1px solid #ebebeb",
              flexShrink: 0,
            }}>
              <div>
                <span style={{
                  fontSize: 9,
                  letterSpacing: "0.14em",
                  color: categoryColor[selected.category]?.text || "#555",
                  backgroundColor: categoryColor[selected.category]?.bg || "#f0f0ee",
                  padding: "2px 8px",
                  borderRadius: 8,
                  marginRight: 10,
                  fontWeight: 500,
                }}>
                  {selected.category}
                </span>
                <span style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a", letterSpacing: "0.02em" }}>
                  {selected.name}
                </span>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: "#f5f5f3",
                  color: "#555",
                  fontSize: 18,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>
            {/* PDF 뷰어 */}
            <iframe
              src={`/cert/${encodeURIComponent(selected.file)}`}
              style={{ flex: 1, border: "none", width: "100%" }}
              title={selected.name}
            />
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#ffffff", borderTop: "1px solid #ebebeb" }}>
        <div className="rsp-pad rsp-footer-bottom" style={{
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
