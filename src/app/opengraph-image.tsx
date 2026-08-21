import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Carlos David Duarte — Senior Software Engineer & Technical Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0F172A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#0078D4",
          }}
        />

        {/* Domain */}
        <div
          style={{
            fontSize: "16px",
            color: "#0078D4",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "24px",
            display: "flex",
          }}
        >
          davdav.tech
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#F8FAFC",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "20px",
            display: "flex",
          }}
        >
          Carlos David Duarte
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "24px",
            color: "#94A3B8",
            fontWeight: 400,
            display: "flex",
          }}
        >
          Senior Software Engineer · Technical Lead · Application Owner
        </div>

        {/* Tag row */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["Java", "Spring Boot", "Azure", "DevOps"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(0,120,212,0.15)",
                border: "1px solid rgba(0,120,212,0.3)",
                borderRadius: "6px",
                padding: "6px 14px",
                fontSize: "14px",
                color: "#38BDF8",
                fontWeight: 500,
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "#1E293B",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
