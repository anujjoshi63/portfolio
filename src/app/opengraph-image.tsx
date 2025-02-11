import { ImageResponse } from "next/og"

export const alt = "Anuj Joshi - Full-stack Developer"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"
export default async function Image() {
  try {
    const interMedium = await fetch(
      new URL(
        "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZJhjp-Ek-_0ew.woff2"
      )
    ).then((res) => res.arrayBuffer())

    const interBold = await fetch(
      new URL(
        "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZJhjp-Ek-_0ew.woff2"
      )
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
      (
        <div
          style={{
            background: "#0A0A0B",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "80px",
            fontFamily: "Inter",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 42,
              color: "#666",
              fontWeight: 500,
            }}
          >
            🚀 Available for SDE Roles - May 2025
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              background: "linear-gradient(90deg, #fff 40%, #666)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Anuj Joshi
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#888",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            2x SDE Intern at AI startups
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#666",
              marginTop: "12px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ color: "#888" }}>React</span>
            <span>•</span>
            <span style={{ color: "#888" }}>Next.js</span>
            <span>•</span>
            <span style={{ color: "#888" }}>TypeScript</span>
            <span>•</span>
            <span style={{ color: "#888" }}>Python</span>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: "Inter",
            data: interMedium,
            style: "normal",
            weight: 500,
          },
          {
            name: "Inter",
            data: interBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    )
  } catch (e) {
    console.log(`Failed to generate image`, e)
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
