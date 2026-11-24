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
          background: "#111111",
          color: "#a3a3a3",
          padding: "72px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: "28px", color: "#ededed" }}>
          semih<span style={{ color: "#f5a524" }}>@</span>sahinoglu:<span style={{ color: "#e8d5a8" }}>~</span>$
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#f5a524", fontSize: "30px" }}>$ whoami</div>
          <div style={{ display: "flex", color: "#ededed", fontSize: "92px", fontWeight: 700, marginTop: "16px" }}>
            {site.name}
          </div>
          <div style={{ display: "flex", color: "#e8d5a8", fontSize: "38px", marginTop: "16px" }}>
            &gt; {site.role}
          </div>
        </div>
        <div style={{ display: "flex", color: "#f5a524", fontSize: "26px" }}>
          java kotlin spring-boot kafka redis next.js
        </div>
      </div>
    ),
    { ...size }
  );
}
