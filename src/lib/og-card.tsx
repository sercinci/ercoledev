export const ogSize = { width: 1200, height: 630 };

type OgCardProps = {
  badge: string;
  subtitle: string;
  url: string;
  note: string;
};

/** Shared layout for the generated Open Graph cards. Inline styles only: Satori supports no CSS files. */
export const OgCard = ({ badge, subtitle, url, note }: OgCardProps) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "#0a0a0a",
      padding: "72px",
      fontFamily: "sans-serif",
    }}
  >
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          color: "#86efac",
          fontSize: 26,
          padding: "10px 22px",
          borderRadius: 999,
          border: "1px solid rgba(134,239,172,0.3)",
          background: "rgba(134,239,172,0.1)",
          marginBottom: 36,
        }}
      >
        {badge}
      </div>
      <div style={{ display: "flex", fontSize: 82, fontWeight: 700, color: "#fafafa" }}>
        Federico&nbsp;<span style={{ color: "#86efac" }}>Ercole</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 33,
          color: "#a1a1aa",
          marginTop: 24,
          maxWidth: 950,
          lineHeight: 1.4,
        }}
      >
        {subtitle}
      </div>
    </div>

    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", fontSize: 30, color: "#fafafa", fontWeight: 600 }}>{url}</div>
      <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>{note}</div>
    </div>
  </div>
);
