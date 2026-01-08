"use client";

import React, { useMemo, useState } from "react";
import ProductPreview from "@/app/product-preview";

type ProductToggleProps = {
  /** 부모(DashboardClient 등)에서 버튼 스타일을 주입하고 싶을 때 사용 */
  buttonStyle?: React.CSSProperties;
};

export default function ProductToggle({ buttonStyle }: ProductToggleProps) {
  const [open, setOpen] = useState(false);

  // 기존 기본 버튼 스타일 (백업본과 동일)
  const defaultButtonStyle: React.CSSProperties = useMemo(
    () => ({
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      padding: 12,
      margin: "0 0 12px 0",
      borderRadius: 12,
      border: "1px solid transparent",
      background: "#0019C9", // ✅ 로그인/다른 버튼들과 동일한 파란색
      color: "#ffffff",
      fontWeight: 700,
      fontSize: 16, // ✅ 글자 크기 통일
      textAlign: "center",
      cursor: "pointer",
    }),
    []
  );

  // 부모가 스타일을 넘기면 기본 스타일 위에 덮어쓰기
  const mergedButtonStyle: React.CSSProperties = useMemo(
    () => ({ ...defaultButtonStyle, ...(buttonStyle ?? {}) }),
    [defaultButtonStyle, buttonStyle]
  );

  return (
    <div>
      {/* 부모 토글 버튼 (여기서만 인터랙션) */}
      <button
        type="button"
        style={mergedButtonStyle}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={(e) => {
          // hover: 부모에서 background를 줬더라도, 기존 동작 유지
          (e.currentTarget as HTMLButtonElement).style.background = "#1326D9";
        }}
        onMouseLeave={(e) => {
          // leave: 부모에서 background를 줬다면 그 값으로, 아니면 기본값으로 복귀
          const bg =
            (buttonStyle && (buttonStyle as React.CSSProperties).background) ||
            defaultButtonStyle.background ||
            "#0019C9";
          (e.currentTarget as HTMLButtonElement).style.background = String(bg);
        }}
      >
        {open ? "상품 사진 닫기(확대해서 보세요.)" : "판매중인 상품 보기"}
      </button>

      {/* 열렸을 때만 이미지, 내부 토글/힌트는 숨김(중복 방지) */}
      {open && (
        <div style={{ marginTop: 12 }}>
          <ProductPreview showToggle={false} />
          {/* ✅ 힌트는 여기서만 1회 출력 */}
          <p style={{ color: "#ef4444", marginTop: 8, fontSize: 14 }}>
            이미지를 확대 할 수 있습니다.
          </p>
        </div>
      )}
    </div>
  );
}
