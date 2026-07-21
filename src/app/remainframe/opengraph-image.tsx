import { ImageResponse } from "next/og";

export const alt = "RemainFrame, a custom AI secretary for the work that keeps piling up";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#141512",
          color: "#f3efe5",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 36,
            display: "flex",
            border: "1px solid rgba(243,239,229,.2)",
          }}
        />
        <div
          style={{
            width: "72%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, letterSpacing: -1.5 }}>
            Remain<span style={{ color: "#ee402f" }}>Frame</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", color: "#ee402f", fontSize: 22, fontWeight: 700, letterSpacing: 2.5 }}>
              CUSTOM AI HELP FOR SMALL BUSINESS
            </div>
            <div style={{ display: "flex", marginTop: 18, fontSize: 68, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3.5 }}>
              A custom AI secretary for the work that keeps piling up.
            </div>
          </div>
        </div>
        <div
          style={{
            width: "28%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div style={{ width: 250, height: 310, display: "flex", position: "absolute", background: "#ee402f", transform: "rotate(5deg)" }} />
          <div style={{ width: 250, height: 310, display: "flex", position: "relative", border: "34px solid #f3efe5", background: "#141512" }} />
        </div>
      </div>
    ),
    size,
  );
}
