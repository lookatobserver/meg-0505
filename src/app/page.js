import Link from "next/link";
import Image from "next/image";

/* ── Navigation data ──────────────────────────────── */

const gnbItems = [
  { label: "전체 상품", href: "/shop" },
  { label: "베스트", href: "/best" },
  { label: "신상품", href: "/new" },
  { label: "성분 분석", href: "/lab" },
  { label: "이벤트", href: "/events" },
  { label: "고객 후기", href: "/reviews" },
];

const products = [
  {
    badge: "최고 평점",
    name: "Verveine No. 9",
    desc: "시트러스, 바질, 베티버",
    price: "₩58,000",
    image: "/product1.png",
    imagePadding: true,
  },
  {
    badge: "신상품",
    name: "Santal Mist",
    desc: "크리미 우드, 앰버, 모스",
    price: "₩68,000",
    image: "/product2.png",
    imagePadding: true,
  },
  {
    badge: "베스트셀러",
    name: "Oud & Herb",
    desc: "다크 레진, 세이지, 타임",
    price: "₩76,000",
    image: "/product3.png",
    imagePadding: true,
  },
];

const stats = [
  { value: "0%", label: "알루미늄 / 파라벤" },
  { value: "24h", label: "냄새 중화 지속" },
  { value: "12+", label: "식물성 추출물" },
  { value: "98%", label: "생체흡수 포뮬러" },
];

/* ── SVG: product illustration (tube) ─────────────── */
function ProductTube({ color = "#7b8bb2", lightColor = "#a0afc8" }) {
  return (
    <svg
      viewBox="0 0 120 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", maxWidth: 110 }}
    >
      <rect x="30" y="40" width="60" height="200" rx="30" fill={color} />
      <rect x="35" y="45" width="25" height="190" rx="12" fill={lightColor} opacity="0.3" />
      <rect x="40" y="20" width="40" height="28" rx="6" fill={color} />
      <rect x="48" y="8" width="24" height="16" rx="4" fill={color} />
      <rect x="42" y="120" width="36" height="1.5" rx="1" fill="white" opacity="0.5" />
      <rect x="42" y="130" width="28" height="1" rx="0.5" fill="white" opacity="0.3" />
      <rect x="42" y="138" width="32" height="1" rx="0.5" fill="white" opacity="0.3" />
    </svg>
  );
}

/* ── SVG: spray bottle ────────────────────────────── */
function SprayBottle() {
  return (
    <svg
      viewBox="0 0 120 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", maxWidth: 100 }}
    >
      <rect x="35" y="80" width="55" height="160" rx="8" fill="#b0bec5" />
      <rect x="35" y="80" width="55" height="160" rx="8" fill="url(#spray-grad)" />
      <rect x="40" y="50" width="30" height="40" rx="4" fill="#90a4ae" />
      <rect x="68" y="55" width="25" height="8" rx="3" fill="#90a4ae" />
      <rect x="88" y="46" width="8" height="12" rx="2" fill="#78909c" />
      <defs>
        <linearGradient id="spray-grad" x1="35" y1="80" x2="90" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#b0bec5" />
          <stop offset="40%" stopColor="#cfd8dc" />
          <stop offset="100%" stopColor="#90a4ae" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── SVG: amber bottle ────────────────────────────── */
function AmberBottle() {
  return (
    <svg
      viewBox="0 0 120 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", maxWidth: 90 }}
    >
      <rect x="38" y="90" width="44" height="150" rx="6" fill="#c8a06a" />
      <rect x="40" y="92" width="16" height="146" rx="3" fill="white" opacity="0.15" />
      <rect x="42" y="60" width="36" height="38" rx="4" fill="#b8905a" />
      <rect x="50" y="44" width="20" height="20" rx="3" fill="#a88048" />
      <rect x="53" y="36" width="14" height="10" rx="2" fill="#987038" />
      <rect x="44" y="150" width="32" height="1.5" rx="0.5" fill="white" opacity="0.4" />
      <rect x="44" y="160" width="24" height="1" rx="0.5" fill="white" opacity="0.25" />
    </svg>
  );
}

/* ── SVG: science circle diagram ──────────────────── */
function BatchCircle() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 320 }}
    >
      <circle cx="160" cy="160" r="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="160" cy="160" r="110" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <circle cx="160" cy="160" r="70" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="2 6" />
      <line x1="10" y1="160" x2="310" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1="160" y1="10" x2="160" y2="310" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle cx="160" cy="160" r="4" fill="rgba(255,255,255,0.4)" />
      <circle cx="160" cy="50" r="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="160" cy="270" r="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="50" cy="160" r="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="270" cy="160" r="3" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}

/* ── SVG: decorative wave ─────────────────────────── */
function WaveDivider() {
  return (
    <svg
      viewBox="0 0 1200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", display: "block", marginTop: -1 }}
      preserveAspectRatio="none"
    >
      <path
        d="M0 30 C150 0, 300 60, 450 30 S750 0, 900 30 S1100 60, 1200 30"
        stroke="#c4b89a"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

/* ── Icon: Cart ───────────────────────────────────── */
function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

/* ── Icon: User ───────────────────────────────────── */
function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

/* ── Icon: Social ─────────────────────────────────── */
function SocialIcon({ type }) {
  if (type === "instagram")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  if (type === "youtube")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
      </svg>
    );
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 2a4.48 4.48 0 00-4.48 4.48v1A10.66 10.66 0 013 3s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════ */
/*  Page                                              */
/* ══════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f4f0e6", minHeight: "100vh" }}>

      {/* ── Announcement bar ── */}
      <div
        style={{
          backgroundColor: "#1b4332",
          color: "rgba(255,255,255,0.85)",
          textAlign: "center",
          padding: "8px 16px",
          fontSize: 12,
          letterSpacing: "0.08em",
          fontFamily: "var(--font-sans)",
        }}
      >
        ✦ &nbsp;무료배송 50,000원 이상 구매 시&nbsp; ✦ &nbsp;신규 회원 첫 주문 10% 할인&nbsp; ✦
      </div>

      {/* ── Header ── */}
      <header
        style={{
          backgroundColor: "#f4f0e6",
          borderBottom: "1px solid #ddd8cc",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {/* Utility bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 20,
            padding: "6px 48px",
            borderBottom: "1px solid #ece7db",
            fontSize: 11,
            letterSpacing: "0.06em",
            color: "#666",
          }}
        >
          {[
            { label: "회원가입 / 로그인", href: "/login" },
            { label: "마이페이지", href: "/mypage" },
            { label: "주문조회", href: "/order" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="util-link"
              style={{ color: "#666", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/cart"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              color: "#1b4332",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            <CartIcon />
            <span>장바구니 (0)</span>
          </Link>
        </div>

        {/* Main nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 48px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: "0.25em",
              color: "#1a1a1a",
              textDecoration: "none",
              minWidth: 140,
            }}
          >
            <span className="meg-letter">M</span><span className="meg-letter">E</span><span className="meg-letter">G</span>
          </Link>

          {/* GNB links */}
          <ul
            style={{
              display: "flex",
              gap: 32,
              listStyle: "none",
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            {gnbItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="gnb-link"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 20,
                    letterSpacing: "0.1em",
                    color: "#1a1a1a",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Brand story — right aligned, distinct */}
          <Link
            href="/brand"
            className="gnb-link"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              letterSpacing: "0.1em",
              color: "#1a1a1a",
              textDecoration: "none",
              minWidth: 140,
              textAlign: "right",
            }}
          >
            브랜드 스토리
          </Link>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "85vh",
          overflow: "hidden",
        }}
      >
        {/* Left: text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 64px 80px 80px",
            backgroundColor: "#f4f0e6",
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "#888",
              textTransform: "uppercase",
              marginBottom: 24,
              fontFamily: "var(--font-sans)",
            }}
          >
            ★ 프리미엄 보태니컬 케어
          </p>

          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 400,
              lineHeight: 1.05,
              marginBottom: 0,
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(56px, 7vw, 88px)",
                color: "#1a1a1a",
                letterSpacing: "-0.01em",
              }}
            >
              Perfect
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(56px, 7vw, 88px)",
                color: "#c4916a",
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              Symphony
            </span>
          </h1>

          <p
            style={{
              marginTop: 28,
              maxWidth: 340,
              fontSize: 15,
              lineHeight: 1.75,
              color: "#666",
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
            }}
          >
            냉압착 식물성 원료와 미네랄 추출물로 탄생한 아이더.
            <br />
            개인 향을 웰니스와 명료함의 의식으로 재창조합니다.
          </p>

          <Link
            href="/shop"
            style={{
              display: "inline-block",
              marginTop: 40,
              padding: "14px 32px",
              backgroundColor: "#1b4332",
              color: "white",
              fontSize: 11,
              letterSpacing: "0.18em",
              textDecoration: "none",
              borderRadius: 2,
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              alignSelf: "flex-start",
            }}
          >
            컬렉션 보러가기
          </Link>
        </div>

        {/* Right: hero image area */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src="/product.png"
            alt="MEG 대표 제품"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />

          {/* "100% Natural" badge */}
          <div
            style={{
              position: "absolute",
              top: "28%",
              left: "22%",
              border: "1.5px solid rgba(255,255,255,0.6)",
              borderRadius: 2,
              padding: "10px 14px",
              textAlign: "center",
              backgroundColor: "rgba(244,240,230,0.7)",
              backdropFilter: "blur(4px)",
              zIndex: 2,
            }}
          >
            <div style={{ fontSize: 9, letterSpacing: "0.15em", color: "#888", fontFamily: "var(--font-sans)" }}>
              100%
            </div>
            <div style={{ fontSize: 11, letterSpacing: "0.12em", color: "#555", fontFamily: "var(--font-sans)" }}>
              NATURAL
            </div>
          </div>
        </div>
      </section>

      {/* Wave decoration */}
      <div style={{ backgroundColor: "#f4f0e6", padding: "16px 0 0" }}>
        <WaveDivider />
      </div>

      {/* ── Top Products ── */}
      <section style={{ backgroundColor: "#f4f0e6", padding: "80px 80px 100px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "#aaa",
              marginBottom: 12,
              fontFamily: "var(--font-sans)",
            }}
          >
            SELECTION 2026
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 400,
              color: "#1a1a1a",
              letterSpacing: "0.02em",
            }}
          >
            베스트 초이스
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            maxWidth: 1080,
            margin: "0 auto",
          }}
        >
          {products.map((product, i) => (
            <div
              key={product.name}
              style={{
                backgroundColor: "#f9f7f3",
                border: "1px solid #e8e3d8",
                padding: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Product image area */}
              <div
                style={{
                  height: 260,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#eceae4",
                  padding: product.imagePadding ? "24px" : 0,
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{
                    objectFit: product.imagePadding ? "contain" : "cover",
                    objectPosition: "center",
                    padding: product.imagePadding ? "24px" : 0,
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    fontSize: 9,
                    letterSpacing: "0.15em",
                    color: "#888",
                    backgroundColor: "rgba(255,255,255,0.7)",
                    padding: "4px 8px",
                    fontFamily: "var(--font-sans)",
                    zIndex: 1,
                  }}
                >
                  {product.badge}
                </span>
              </div>

              {/* Product info */}
              <div style={{ padding: "24px 24px 28px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 22,
                    fontWeight: 400,
                    color: "#1a1a1a",
                    marginBottom: 6,
                    letterSpacing: "0.01em",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    color: "#999",
                    marginBottom: 14,
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {product.desc}
                </p>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#1a1a1a",
                    marginBottom: 20,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {product.price}
                </p>
                <button
                  style={{
                    width: "100%",
                    padding: "11px 0",
                    backgroundColor: "#1b4332",
                    color: "white",
                    border: "none",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    cursor: "pointer",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                  }}
                >
                  장바구니 담기
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Molecular Transparency ── */}
      <section
        style={{
          backgroundColor: "#1b4332",
          color: "white",
          padding: "100px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            maxWidth: 1080,
            margin: "0 auto",
            alignItems: "center",
          }}
        >
          {/* Left: circle diagram */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, position: "relative" }}>
            <BatchCircle />
            <div style={{ textAlign: "center", marginTop: -40 }}>
              <div
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 18,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Batch #092
              </div>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 4,
                  fontFamily: "var(--font-sans)",
                }}
              >
                VERIFIED ANALYSIS
              </div>
            </div>
          </div>

          {/* Right: text + stats */}
          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.5)",
                marginBottom: 16,
                fontFamily: "var(--font-sans)",
              }}
            >
              순수함의 과학
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(34px, 4vw, 52px)",
                fontWeight: 400,
                color: "white",
                marginBottom: 24,
                letterSpacing: "0.01em",
                lineHeight: 1.1,
              }}
            >
              분자 투명성
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 48,
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                maxWidth: 420,
              }}
            >
              모든 아이더 배치는 엄격한 다단계 테스트를 거칩니다. 가장 순수한
              식물 유래 분자만이 피부에 닿을 수 있도록 휘발성 유기 화합물을 정밀
              분석합니다.
            </p>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px 48px",
                marginBottom: 48,
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: 40,
                      fontWeight: 300,
                      color: "white",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {stat.label.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/lab"
              style={{
                display: "inline-block",
                padding: "13px 32px",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "white",
                fontSize: 11,
                letterSpacing: "0.18em",
                textDecoration: "none",
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
              }}
            >
              성분 분석 결과 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#f9f7f3", borderTop: "1px solid #e8e3d8" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "64px 80px 40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr",
              gap: 48,
              marginBottom: 56,
            }}
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 26,
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  color: "#1a1a1a",
                  marginBottom: 16,
                }}
              >
                MEG
              </div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: "#888",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  maxWidth: 220,
                }}
              >
                신체와 대지를 기리는 의미 있는 향 의식을 만듭니다. 과학과 자연의 교차점.
              </p>
            </div>

            {/* Customer Center */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "#1a1a1a",
                  marginBottom: 20,
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                }}
              >
                고객 지원 센터
              </h4>
              {[
                { label: "공지사항", href: "/notice" },
                { label: "자주 묻는 질문", href: "/faq" },
                { label: "1:1 문의", href: "/qna" },
                { label: "배송 안내", href: "/shipping" },
              ].map((item) => (
                <div key={item.href} style={{ marginBottom: 10 }}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: 13,
                      color: "#888",
                      textDecoration: "none",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                    }}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Company */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "#1a1a1a",
                  marginBottom: 20,
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                }}
              >
                회사 정보
              </h4>
              {[
                { label: "브랜드 소개", href: "/brand" },
                { label: "연구 일지", href: "/lab-journal" },
                { label: "지속가능성", href: "/sustainability" },
                { label: "문의하기", href: "/contact" },
              ].map((item) => (
                <div key={item.href} style={{ marginBottom: 10 }}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: 13,
                      color: "#888",
                      textDecoration: "none",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                    }}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h4
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "#1a1a1a",
                  marginBottom: 20,
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                }}
              >
                뉴스레터
              </h4>
              <p
                style={{
                  fontSize: 13,
                  color: "#888",
                  lineHeight: 1.7,
                  marginBottom: 16,
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                }}
              >
                식물성 인사이트와 독점 얼리 액세스를 위한 이너 서클에 합류하세요.
              </p>
              <div style={{ display: "flex", gap: 0 }}>
                <input
                  type="email"
                  placeholder="이메일 주소"
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    border: "1px solid #ddd8cc",
                    backgroundColor: "white",
                    fontSize: 13,
                    outline: "none",
                    fontFamily: "var(--font-sans)",
                    color: "#1a1a1a",
                  }}
                />
                <button
                  style={{
                    padding: "10px 16px",
                    backgroundColor: "#1b4332",
                    color: "white",
                    border: "none",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  구독
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid #e8e3d8",
              paddingTop: 24,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 16 }}>
              {[
                { type: "instagram", href: "/" },
                { type: "youtube", href: "/" },
                { type: "twitter", href: "/" },
              ].map((s) => (
                <Link
                  key={s.type}
                  href={s.href}
                  style={{
                    color: "#aaa",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SocialIcon type={s.type} />
                </Link>
              ))}
            </div>

            <p
              style={{
                fontSize: 11,
                color: "#bbb",
                fontFamily: "var(--font-sans)",
              }}
            >
              © 2026 MEG Botanical Ltd. All Rights Reserved.
            </p>

            <div style={{ display: "flex", gap: 20 }}>
              {[
                { label: "이용약관", href: "/terms" },
                { label: "개인정보처리방침", href: "/privacy" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontSize: 11,
                    color: "#aaa",
                    textDecoration: "none",
                    fontFamily: "var(--font-sans)",
                  }}
                >
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
