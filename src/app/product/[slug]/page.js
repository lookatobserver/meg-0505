import Link from "next/link";
import Image from "next/image";
import { getProductBySlug, products } from "@/lib/products";
import { notFound } from "next/navigation";
import CtaButtons from "./CtaButtons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

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
            목록으로
          </Link>
        </div>
      </header>

      {/* ── Product Detail ── */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 56px 120px" }}>

        {/* Top: image + info */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "flex-start",
          marginBottom: 100,
        }}>

          {/* Image */}
          <div style={{
            backgroundColor: "#f0f0ee",
            borderRadius: 20,
            overflow: "hidden",
            position: "relative",
            aspectRatio: "1 / 1",
          }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: "contain", padding: "48px" }}
              priority
            />
            <span style={{
              position: "absolute",
              top: 20,
              left: 20,
              fontSize: 9,
              letterSpacing: "0.14em",
              color: "#999",
              backgroundColor: "rgba(255,255,255,0.85)",
              padding: "4px 10px",
            }}>
              {product.badge}
            </span>
          </div>

          {/* Info */}
          <div style={{ paddingTop: 12 }}>
            <p style={{ fontSize: 10, letterSpacing: "0.22em", color: "#bbb", marginBottom: 16 }}>
              MEG COLLECTION
            </p>
            <h1 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(32px, 3.5vw, 50px)",
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.15,
              marginBottom: 16,
              letterSpacing: "0.01em",
            }}>
              {product.name}
            </h1>
            <p style={{ fontSize: 13, color: "#aaa", letterSpacing: "0.06em", marginBottom: 28 }}>
              {product.shortDesc}
            </p>
            <p style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: 36,
              fontWeight: 400,
              color: "#1a1a1a",
              marginBottom: 32,
              letterSpacing: "0.02em",
            }}>
              {product.price}
            </p>

            <p style={{
              fontSize: 14,
              lineHeight: 1.85,
              color: "#777",
              fontWeight: 300,
              marginBottom: 44,
              maxWidth: 420,
            }}>
              {product.longDesc}
            </p>

            {/* CTA buttons */}
            <CtaButtons />
          </div>
        </div>

        {/* Specs + Features */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
        }}>

          {/* Specs */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: 28,
              fontWeight: 400,
              color: "#1a1a1a",
              marginBottom: 32,
              letterSpacing: "0.02em",
            }}>
              제품 사양
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.label} style={{ borderBottom: "1px solid #ebebeb" }}>
                    <td style={{
                      padding: "14px 0",
                      fontSize: 12,
                      letterSpacing: "0.06em",
                      color: "#aaa",
                      width: "45%",
                    }}>
                      {spec.label}
                    </td>
                    <td style={{
                      padding: "14px 0",
                      fontSize: 13,
                      color: "#1a1a1a",
                      fontWeight: 400,
                    }}>
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Features */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: 28,
              fontWeight: 400,
              color: "#1a1a1a",
              marginBottom: 32,
              letterSpacing: "0.02em",
            }}>
              주요 특징
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {product.features.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "rgba(27,67,50,0.12)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    fontSize: 12,
                    color: "#1b4332",
                    fontWeight: 600,
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a", marginBottom: 5, letterSpacing: "0.04em" }}>
                      {f.title}
                    </div>
                    <div style={{ fontSize: 13, color: "#999", lineHeight: 1.7, fontWeight: 300 }}>
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

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
          <p style={{ fontSize: 11, color: "#ccc", fontFamily: "var(--font-sans)" }}>
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
