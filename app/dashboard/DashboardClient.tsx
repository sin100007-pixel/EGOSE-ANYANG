"use client";

import React from "react";
import InstallButton from "@/app/components/InstallButton";
import ProductToggle from "@/app/components/ProductToggle";
import LondonMarketBanner from "@/app/components/LondonMarketBanner";
import Snowfall from "@/app/components/Snowfall";

type Props = {
  name: string;
  phoneLast4: string;
  qrUrl: string;
};

export default function DashboardClient({ name, phoneLast4, qrUrl }: Props) {
  // ✅ 버튼 글자는 항상 흰색 고정
  const btnStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    border: "none",
    background: "var(--btn-bg)",
    color: "#ffffff",
    fontWeight: 700,
    cursor: "pointer",
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <>
      {/* 눈은 항상 맨 위 */}
      <Snowfall count={90} opacity={0.85} zIndex={9999} />

      <main className="dash-root">
        {/* ✅ 남색 background 위로 올라오는 밝아짐 오버레이 */}
        <div className="brightOverlay" aria-hidden />

        <div className="content">
          <LondonMarketBanner />

          <h2 className="info-text title">{name}님의 QR</h2>

          <div className="row">
            <img src={qrUrl} alt="QR" className="qr" />
            <p className="info-text">전화번호 뒷자리: {phoneLast4}</p>
          </div>

          <section style={{ marginTop: 24 }}>
            <a href="/ledger" style={linkStyle}>
              <button type="button" style={btnStyle}>
                거래내역 보기
              </button>
            </a>

            {/* ✅ 안양점: 출고내용남기기 */}
            <a
              href="http://pf.kakao.com/_MbLSG/chat"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              <button type="button" style={btnStyle}>
                출고내용남기기
              </button>
            </a>

            <InstallButton style={btnStyle}>앱 설치</InstallButton>

            <ProductToggle buttonStyle={btnStyle} />
          </section>

          {/* ✅ 안양점 회사 정보 + 로그아웃 */}
          <div className="footer info-text">
            <div>삼성필름 이고세</div>
            <div>경기도 안양시 호계동 경수대로602</div>
            <div>Tel. 031-427-6254</div>
          </div>

          <form action="/api/logout" method="POST" className="logoutForm">
            <button type="submit" className="logoutLink info-text">
              로그아웃
            </button>
          </form>
        </div>

        <style jsx>{`
          .dash-root {
            min-height: 100svh;
            min-height: 100dvh;

            padding: 24px 16px max(80px, env(safe-area-inset-bottom));
            background: #0f0c2e;

            /* 색상 변수 */
            --info-fg: #ffffff;
            --btn-bg: #1739f7;

            position: relative;
            overflow: hidden;
          }

          /* ✅ 남색 배경 위로 올라오는 “흰색 밝아짐 레이어” */
          .brightOverlay {
            position: fixed;
            inset: 0;
            background: #ffffff;
            opacity: 0;
            pointer-events: none;

            z-index: 1;

            animation: brightOverlay 4s ease-in-out forwards;
            animation-delay: 1s;
          }

          @keyframes brightOverlay {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .content {
            position: relative;
            z-index: 2;
            max-width: 1100px;
            margin: 0 auto;
          }

          .info-text {
            color: var(--info-fg);
            transition: color 300ms ease;
          }

          .info-text.title {
            font-size: 28px;
            font-weight: 800;
            margin: 16px 0;
          }

          .row {
            display: flex;
            gap: 24px;
            align-items: center;
            flex-wrap: wrap;
          }

          .qr {
            width: 240px;
            height: auto;
            display: block;
            border-radius: 12px;
          }

          .footer {
            margin-top: 24px;
            padding-top: 8px;
            border-top: 1px solid rgba(0, 0, 0, 0.08);
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            opacity: 0.85;
          }

          .logoutForm {
            margin-top: 8px;
            text-align: center;
          }

          .logoutLink {
            font-size: 12px;
            line-height: 18px;
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            text-decoration: underline;
          }

          /* 텍스트/버튼 색 변화(오버레이 타이밍과 동일) */
          .dash-root {
            animation: themeShift 4s ease-in-out forwards;
            animation-delay: 1s;
          }

          @keyframes themeShift {
            0% {
              --info-fg: #ffffff;
              --btn-bg: #1739f7;
            }
            40% {
              --info-fg: #666666;
              --btn-bg: #ff7a55;
            }
            100% {
              --info-fg: #111111;
              --btn-bg: #ff936e;
            }
          }
        `}</style>
      </main>
    </>
  );
}
