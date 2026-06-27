"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function NavHeader({ navItems = [], rightContent = null }) {
  const [open, setOpen] = useState(false);
  const hasNav = navItems.length > 0;

  return (
    <header className="page-header">
      <div className="header-inner">
        <Logo />

        {hasNav && (
          <nav className="gnb-nav">
            {navItems.map((item) =>
              item.accent ? (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "#fff",
                    textDecoration: "none",
                    backgroundColor: "#1b4332",
                    padding: "6px 14px",
                    borderRadius: 2,
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="gnb-link"
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.08em",
                    color: item.active ? "#1a1a1a" : "#555",
                    textDecoration: "none",
                    fontWeight: item.active ? 500 : 400,
                    borderBottom: item.active ? "1px solid #1a1a1a" : "none",
                    paddingBottom: item.active ? 2 : 0,
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        )}

        <div className={hasNav ? "header-right header-right-with-nav" : "header-right"}>
          {rightContent}
        </div>

        {hasNav && (
          <button
            className="hamburger-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label="메뉴"
          >
            <span className={`hamburger-bar bar-top${open ? " open" : ""}`} />
            <span className={`hamburger-bar bar-mid${open ? " open" : ""}`} />
            <span className={`hamburger-bar bar-bot${open ? " open" : ""}`} />
          </button>
        )}
      </div>

      {hasNav && (
        <div className={`mobile-menu${open ? " open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-menu-link${item.accent ? " accent" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {rightContent && (
            <>
              <hr className="mobile-menu-divider" />
              <div style={{ padding: "4px 8px" }} onClick={() => setOpen(false)}>
                {rightContent}
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
}
