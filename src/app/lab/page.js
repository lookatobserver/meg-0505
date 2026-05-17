import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/Logo";

export default function LabPage() {
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
        <div style={{
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
      <section style={{
        backgroundColor: "#111",
        padding: "100px 56px",
        textAlign: "center",
      }}>
        <p style={{ fontSize: 10, letterSpacing: "0.26em", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>
          INGREDIENT ANALYSIS
        </p>
        <h1 style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(40px, 5vw, 72px)",
          fontWeight: 400,
          color: "white",
          lineHeight: 1.15,
          marginBottom: 24,
          letterSpacing: "0.01em",
        }}>
          1년을 길러낸 결과,<br />
          <em style={{ color: "#4ade80", fontStyle: "italic" }}>특허로 증명했습니다.</em>
        </h1>
        <p style={{
          fontSize: 15,
          lineHeight: 1.9,
          color: "rgba(255,255,255,0.5)",
          maxWidth: 600,
          margin: "0 auto",
          fontWeight: 300,
        }}>
          공기 중 악취는 물론 유해물질까지 근본부터 분해해 제거하는<br />
          MEG만의 차별화된 기술력, 특허 출원 중인 미생물 배양 기술입니다.
        </p>
      </section>

      {/* ── Patent Section ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 56px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}>
          {/* Image */}
          <div style={{
            position: "relative",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(0,0,0,0.10)",
          }}>
            <Image
              src="/m01.jpg"
              alt="MEG 특허 증명"
              width={600}
              height={900}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Text */}
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.24em", color: "#bbb", marginBottom: 20 }}>
              PATENT TECHNOLOGY
            </p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(30px, 3.5vw, 46px)",
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: 28,
            }}>
              특허 출원 중인<br />미생물 배양 기술
            </h2>
            <p style={{
              fontSize: 14,
              lineHeight: 1.9,
              color: "#777",
              fontWeight: 300,
              marginBottom: 48,
            }}>
              MEG의 미생물 배양 기술은 단순한 탈취를 넘어, 악취와
              유해물질의 원인 분자를 미생물이 직접 분해합니다.
              화학 성분 없이 자연의 힘만으로 공기를 정화하는
              이 기술은 1년 이상의 연구 끝에 특허 출원되었습니다.
            </p>

            {/* Key points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
              {[
                { icon: "01", title: "근본적 원인 제거", desc: "악취 유발 분자를 미생물이 직접 분해하여 재발을 막습니다." },
                { icon: "02", title: "100% 자연 유래 성분", desc: "화학 첨가물 없이 유용미생물(EM) 성분만을 사용합니다." },
                { icon: "03", title: "특허청 출원 완료", desc: "출원번호 10-2024-0123764, 특허청 공식 출원 완료 상태입니다." },
              ].map((item) => (
                <div key={item.icon} style={{
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                  padding: "20px 24px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #ebebeb",
                  borderRadius: 8,
                }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#2d6a4f",
                    letterSpacing: "0.08em",
                    minWidth: 24,
                    paddingTop: 2,
                  }}>
                    {item.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a", marginBottom: 4, letterSpacing: "0.03em" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 13, color: "#999", lineHeight: 1.7, fontWeight: 300 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PDF Download */}
            <a
              href="/m02.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                backgroundColor: "#1b4332",
                color: "white",
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: "0.12em",
                borderRadius: 2,
                fontFamily: "var(--font-sans)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="12" y2="18" />
                <line x1="15" y1="15" x2="12" y2="18" />
              </svg>
              성분 분석 보고서 다운로드 (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
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
            { value: "99%", label: "악취 원인 제거율" },
            { value: "0", label: "화학 첨가물" },
            { value: "1년+", label: "연구 개발 기간" },
            { value: "FDA", label: "미국 등록 성분" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: 48,
                fontWeight: 300,
                color: "white",
                lineHeight: 1,
                marginBottom: 10,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.45)",
              }}>
                {stat.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "100px 56px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.24em", color: "#bbb", marginBottom: 16 }}>
            HOW IT WORKS
          </p>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 400,
            color: "#1a1a1a",
            letterSpacing: "0.01em",
          }}>
            미생물 분해의 원리
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { step: "STEP 1", title: "미생물 활성화", desc: "MEG의 유용미생물(EM)이 공기 중에 분사되어 활성화됩니다." },
            { step: "STEP 2", title: "악취 분자 포착", desc: "활성화된 미생물이 악취를 유발하는 분자를 인식하고 포착합니다." },
            { step: "STEP 3", title: "분해 및 무해화", desc: "포착된 분자를 미생물이 직접 분해하여 무해한 물질로 전환합니다." },
            { step: "STEP 4", title: "청정 공기 유지", desc: "원인이 제거된 공간은 지속적으로 청정 상태를 유지합니다." },
          ].map((item, i, arr) => (
            <div key={item.step} style={{
              display: "flex",
              gap: 40,
              alignItems: "flex-start",
              padding: "36px 0",
              borderBottom: i < arr.length - 1 ? "1px solid #ebebeb" : "none",
            }}>
              <div style={{ minWidth: 80 }}>
                <span style={{
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  color: "#2d6a4f",
                  fontWeight: 600,
                }}>
                  {item.step}
                </span>
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 22,
                  fontWeight: 400,
                  color: "#1a1a1a",
                  marginBottom: 8,
                }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 14, color: "#888", lineHeight: 1.75, fontWeight: 300 }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
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
