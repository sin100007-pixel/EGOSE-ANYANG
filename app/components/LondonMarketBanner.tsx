// app/components/LondonMarketBanner.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LondonMarketBanner() {
  const router = useRouter();
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => {
      const next = prev + 1;

      // 10번 클릭되면 /admin/dashboard 로 이동
      if (next >= 10) {
        router.push("/admin/dashboard");
        return 0; // 이동 후 카운트 리셋
      }

      return next;
    });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9",
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",

        // ✅ 모바일에서 파란 클릭 하이라이트 제거
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
      }}
    >
      {/* 🌅 해(뒤) - 안산점과 동일한 "반쯤 걸친" 떠오르는 애니메이션 */}
      <div className="sun-half-rise" aria-hidden="true" />

      <Image
        src="/london-market-hero.png"
        alt="LONDON MARKET"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: 2 }}
      />

      {/* ✅ 문구(앞) */}
      <div className="year-message" aria-label="연말 인사 문구">
        <div>2025년 노고에 감사드립니다.</div>
        <div>2026년도 최선을 다하겠습니다.</div>
      </div>

      <style jsx>{`
        .sun-half-rise {
          position: absolute;
          left: 50%;
          bottom: -20%;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 170, 110, 1) 0%,
            rgba(255, 120, 85, 0.95) 26%,
            rgba(255, 90, 70, 0.75) 46%,
            rgba(255, 90, 70, 0.38) 62%,
            rgba(255, 90, 70, 0.16) 72%,
            rgba(255, 90, 70, 0) 80%
          );
          filter: blur(0.6px);

          /* ✅ 시작: 윗부분만 살짝 보이게(없다가 떠오르는 느낌) */
          transform: translateX(-50%) translateY(210px) scale(0.93);

          /* ✅ 총 5초: 0~1초(20%) 정지 -> 이후 서서히 상승 */
          animation: sunHalfRise 5s ease-out forwards;
          z-index: 1;
        }

        @keyframes sunHalfRise {
          0%,
          20% {
            transform: translateX(-50%) translateY(210px) scale(0.93);
          }
          100% {
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }

        .year-message {
          position: absolute;
          left: 50%;
          bottom: max(12px, env(safe-area-inset-bottom));
          transform: translateX(-50%);
          z-index: 3;
          text-align: center;
          font-weight: 800;
          letter-spacing: -0.01em;
          line-height: 1.25;
          font-size: 14px;
          color: rgba(243, 222, 198, 0.95);
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.12);
          opacity: 0;
          animation: msgFadeIn 900ms ease-out forwards;
          animation-delay: 1.6s;
          pointer-events: none;
        }

        @keyframes msgFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @media (max-width: 480px) {
          .sun-half-rise {
            width: 200px;
            height: 200px;
            bottom: -56%;
            transform: translateX(-50%) translateY(190px) scale(0.95);
          }

          .year-message {
            bottom: 8%;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}
