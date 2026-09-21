import { ImageResponse } from "next/og";
import { site } from "@/lib/constants";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social share card. Uses ImageResponse (flexbox subset only).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0d0f",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div style={{ width: "48px", height: "2px", background: "#c99b52" }} />
          <div
            style={{
              color: "#c99b52",
              fontSize: "24px",
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            {site.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f4f1ea",
              fontSize: "104px",
              fontWeight: 600,
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              color: "#a5a29a",
              fontSize: "34px",
              marginTop: "24px",
              maxWidth: "900px",
            }}
          >
            Java · Kotlin · Spring · Next.js · TypeScript
          </div>
        </div>

        <div style={{ display: "flex", color: "#807d76", fontSize: "26px" }}>
          {site.githubUrl.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
