import { useState } from "react";

const rackets = [
  {
    id: 1,
    name: "Adidas Metalbone 3.4",
    sub: "Ale Galán 2025",
    shape: "Dijamant",
    core: "EVA HRB",
    face: "Carbon 12K",
    balance: "Visok",
    hardness: 8,
    verdict: "skip",
    verdictLabel: "❌ Preskoči",
    scores: { kontrola: 6, snaga: 9, sweetSpot: 6, mreza: 6, stabilnost: 8, izlaz: 9, spin: 8, tolerancija: 5, komfor: 5, value: 6 },
    idealFor: "Napredni / profesionalni igrači koji traže maksimalnu snagu i agresivnu igru s osnovne linije.",
    pros: ["Iznimna snaga i eksplozivan izlaz lopte", "Vrhunski spin potencijal", "Visoka stabilnost pri jakim udarcima"],
    cons: ["Malen sweet spot — kažnjava greške", "Dijamant balans otežava igru na mreži", "Tvrd i nepopustljiv za ruku"],
    armRisk: "🔴 VISOK — Tvrd EVA HRB core + dijamant balans = maksimalan stres na lakat i rame. Za tebe je ovo loš izbor.",
    price: "~185 €",
  },
  {
    id: 2,
    name: "Bullpadel Vertex 04",
    sub: "Juan Tello 2025",
    shape: "Dijamant",
    core: "Multiglass + HR3",
    face: "Carbon 18K",
    balance: "Visok",
    hardness: 9,
    verdict: "skip",
    verdictLabel: "❌ Preskoči",
    scores: { kontrola: 5, snaga: 10, sweetSpot: 5, mreza: 5, stabilnost: 9, izlaz: 10, spin: 9, tolerancija: 4, komfor: 4, value: 5 },
    idealFor: "Profesionalni igrači poput Tella — agresivna osnovna linija, maksimalna snaga.",
    pros: ["Eksplozivna snaga — Top tier", "Carbon 18K za vrhunski spin", "Iznimna stabilnost"],
    cons: ["Izuzetno tvrd — pro-level alat", "Malen sweet spot kažnjava svaki netačan udarac", "Najgori od svih za ruku"],
    armRisk: "🔴🔴 KRITIČNO — Najtvrđi reket na listi. Multiglass + HR3 core + dijamant = gotovo zajamčena bol u laktu za rekreativce. Bježi od ovog.",
    price: "~190 €",
  },
  {
    id: 3,
    name: "Nox Quantum Carbon 12K",
    sub: "2025",
    shape: "Okrugao",
    core: "EVA Soft",
    face: "Carbon 12K",
    balance: "Nizak",
    hardness: 6,
    verdict: "consider",
    verdictLabel: "⚠️ Samo ako...",
    scores: { kontrola: 8, snaga: 7, sweetSpot: 8, mreza: 9, stabilnost: 7, izlaz: 7, spin: 7, tolerancija: 8, komfor: 8, value: 8 },
    idealFor: "Rekreativni do intermedijarni igrači koji vole mrežu i kontrolu s elementima snage.",
    pros: ["EVA Soft = komforan za ruku", "Okrugao oblik → veliki sweet spot", "Odličan manevar na mreži", "Solidan balans snage i kontrole"],
    cons: ["Carbon 12K može biti malo tvrd na rubovima", "Snaga ispod dijamant reketa", "Manje spin potencijala vs carbon competition"],
    armRisk: "🟡 NIZAK-SREDNJI — EVA Soft core štiti ruku. Pazi na tehniku — greške s rubom mogu prenijeti vibracije.",
    price: "~175 €",
  },
  {
    id: 4,
    name: "Bullpadel Vertex 04",
    sub: "2024",
    shape: "Dijamant",
    core: "Multieva HR3",
    face: "Carbon 18K",
    balance: "Visok",
    hardness: 8,
    verdict: "skip",
    verdictLabel: "❌ Preskoči",
    scores: { kontrola: 6, snaga: 9, sweetSpot: 5, mreza: 5, stabilnost: 8, izlaz: 9, spin: 8, tolerancija: 5, komfor: 5, value: 7 },
    idealFor: "Napredni igrači koji žele pro performansu s nešto boljim value vs 2025 verziji.",
    pros: ["Odlična snaga", "Nešto povoljniji od 2025 verzije", "Vrhunski carbon"],
    cons: ["Dijamant balans — loš za mrežu", "Tvrd core — ne tolerira greške", "Stariji model — manja dostupnost"],
    armRisk: "🔴 VISOK — Isti problemi kao 2025, možda nešto blaže ali i dalje loš za osetljivo rame/lakat.",
    price: "~155–170 €",
  },
  {
    id: 5,
    name: "Head Extreme One X",
    sub: "2025",
    shape: "Teardrop / Híbrid",
    core: "Softeva",
    face: "Fiberglass + Carbon",
    balance: "Srednji",
    hardness: 5,
    verdict: "buy",
    verdictLabel: "✅ Kupi",
    scores: { kontrola: 8, snaga: 7, sweetSpot: 9, mreza: 9, stabilnost: 7, izlaz: 7, spin: 7, tolerancija: 9, komfor: 9, value: 9 },
    idealFor: "Rekreativni igrači koji igraju 1–3x nedeljno, idu na mrežu, žele komfor i balans bez rizika za ruku.",
    pros: ["Softeva core — arm-friendly #1 na listi", "Hybrid oblik = velik sweet spot + kontrola", "Srednji balans savršen za voleje i smash", "Iznimna tolerancija grešaka"],
    cons: ["Manje eksplozivna snaga od dijamant reketa", "Fiberglass je manje 'sexy' od full carbon", "Nije za agresivne power igrače"],
    armRisk: "🟢 NIZAK — Softeva je najblažiji core. Idealno za osetljivo rame i lakat. Topla preporuka.",
    price: "~160–180 €",
  },
  {
    id: 6,
    name: "Adidas Metalbone CTRL 3.4",
    sub: "2025",
    shape: "Teardrop / Híbrid",
    core: "EVA Medium",
    face: "Carbon 12K",
    balance: "Srednji-niski",
    hardness: 6,
    verdict: "consider",
    verdictLabel: "⚠️ Samo ako...",
    scores: { kontrola: 9, snaga: 7, sweetSpot: 8, mreza: 8, stabilnost: 7, izloz: 7, spin: 7, tolerancija: 8, komfor: 7, value: 8 },
    idealFor: "Rekreativni do intermedijarni igrači koji žele preciznost i kontrolu s elementima snage i Adidas brendom.",
    pros: ["Vrhunska kontrola — CTRL u imenu nije slučajan", "Carbon 12K za dobar spin", "Híbrid oblik = dobar sweet spot", "Komfor bolji od standardnog Metalbonea"],
    cons: ["EVA Medium može biti iritirajuć za osetljivi lakat dugoročno", "Skuplje od Head Extreme za slične karakteristike", "Manje snage od originalnog Metalbonea"],
    armRisk: "🟡 SREDNJI — EVA Medium nije loš, ali nije ni Softeva. Ako je rame problematično, Head Extreme je sigurniji.",
    price: "~175–195 €",
  },
];

const categories = [
  { key: "kontrola", label: "Kontrola" },
  { key: "snaga", label: "Snaga" },
  { key: "sweetSpot", label: "Sweet Spot" },
  { key: "mreza", label: "Mreža" },
  { key: "stabilnost", label: "Stabilnost" },
  { key: "izlaz", label: "Izlaz lopte" },
  { key: "spin", label: "Spin" },
  { key: "tolerancija", label: "Tolerancija" },
  { key: "komfor", label: "Komfor/Arm" },
  { key: "value", label: "Value €" },
];

const top3 = [
  {
    rank: 1,
    id: 5,
    name: "Head Extreme One X 2025",
    why: "Savršen fit za tvoj profil. Softeva core štiti osetljivo rame i lakat, híbrid oblik daje velik sweet spot za rekreativne greške, srednji balans idealan za voleje na mreži. Blagi prioritet snage zadovoljen kroz carbon površinu. Ovo je jedini reket na listi koji ispunjava SVE tvoje zahtjeve bez kompromisa.",
    badge: "🥇 Naša preporuka",
    color: "#FFD700",
  },
  {
    rank: 2,
    id: 3,
    name: "Nox Quantum Carbon 12K 2025",
    why: "Okrugli oblik s EVA Soft corom — komforan za ruku i odličan na mreži. Daje ti kontrolu i manevarnost uz pristojan izlaz lopte. Jedini minus: malo manje snage od Head Extreme kombinirane s manjom tolerancijom grešaka na rubovima.",
    badge: "🥈 Solidan izbor",
    color: "#C0C0C0",
  },
  {
    rank: 3,
    id: 6,
    name: "Adidas Metalbone CTRL 3.4",
    why: "Odlična kontrola i prepoznatljiv brend, ali EVA Medium core je blagi rizik za tvoje rame dugoročno. Vrijedi razmotriti ako je kontrola apsolutni prioritet iznad svega — ali prati reakciju ruke prvih 3-4 sedmice.",
    badge: "🥉 Ako voliš Adidas",
    color: "#CD7F32",
  },
];

const alternatives = [
  { name: "Babolat Air Vertuo 2024", price: "~140 €", why: "Lak, híbrid, arm-friendly. Idealan starter za mrežu.", armRisk: "🟢" },
  { name: "Wilson Bela Pro V2.0", price: "~165 €", why: "Balans snage i kontrole, srednji balans, EVA soft varijanta.", armRisk: "🟡" },
  { name: "Bullpadel Hack 04 Control", price: "~150 €", why: "Bullpadel u kontrolnoj verziji — dijamant ali mekan, bolja opcija od Vertexa.", armRisk: "🟡" },
];

const checklist = [
  { icon: "✋", text: "Održi reket u ruci 30 sekundi — da li ti je zglob opušten ili napet? Težak reket = više stresa na rame." },
  { icon: "⚖️", text: "Provjeri balans: stavi prst na sredinu drške. Prebacuje li se prema glavi (visok balans = snaga ali teže na mreži)?" },
  { icon: "🎯", text: "Udari loptu sredinom i rubom — da li vibracija ide u ruku? Ako da, core je pretvrд za tebe." },
  { icon: "🌐", text: "Simuliraj volej: drži reket kratko i napravi brzi blok. Da li je reket manevrabilan ili 'visi'?" },
  { icon: "💶", text: "Ako je cijena iznad 180 €, pitaj: što dobivam više vs jeftinijeg modela? Za rekreativca razlika je često minimalna." },
];

const ScoreBar = ({ value }) => {
  const color = value >= 8 ? "#4ade80" : value >= 6 ? "#facc15" : "#f87171";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ flex: 1, background: "#1e2a3a", borderRadius: 4, height: 8, overflow: "hidden" }}>
        <div style={{ width: `${value * 10}%`, background: color, height: "100%", borderRadius: 4, transition: "width 0.6s ease" }} />
      </div>
      <span style={{ fontSize: 12, fontWeight: 700, color, minWidth: 16 }}>{value}</span>
    </div>
  );
};

export default function PadelAnalysis() {
  const [selected, setSelected] = useState(5);
  const [activeTab, setActiveTab] = useState("overview");

  const racket = rackets.find(r => r.id === selected);

  const verdictColor = {
    buy: "#4ade80",
    consider: "#facc15",
    skip: "#f87171",
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: "linear-gradient(135deg, #0a0f1a 0%, #0d1829 50%, #0a1520 100%)",
      minHeight: "100vh",
      color: "#e2e8f0",
      padding: "0 0 40px",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
        padding: "32px 24px 24px",
        borderBottom: "2px solid #1e3a5f",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -40, right: -40,
          width: 200, height: 200,
          background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 32 }}>🏓</span>
            <div>
              <h1 style={{ margin: 0, fontSize: 24, fontWeight: 900, letterSpacing: -0.5, color: "#fff" }}>
                Padel Reket Analiza
              </h1>
              <p style={{ margin: 0, fontSize: 13, color: "#94a3b8" }}>
                Personalizovano za tvoj profil · Rekreativac · Mreža orijentisan · Budget €200
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
            {[
              { label: "👤 M, 173cm, 84kg", bg: "#1e3a5f" },
              { label: "🎯 1–3x nedeljno", bg: "#1e3a5f" },
              { label: "🌐 Mreža + blagi power", bg: "#1e3a5f" },
              { label: "⚠️ Osetljivo rame/lakat", bg: "#3b1a1a" },
            ].map(t => (
              <span key={t.label} style={{
                background: t.bg, padding: "4px 12px", borderRadius: 20,
                fontSize: 12, fontWeight: 600, color: "#cbd5e1",
              }}>{t.label}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px 16px" }}>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: "#0d1829", borderRadius: 12, padding: 4, flexWrap: "wrap" }}>
          {[
            { key: "overview", label: "📊 Tabela" },
            { key: "detail", label: "🔍 Detalji" },
            { key: "top3", label: "🏆 Top 3 za tebe" },
            { key: "checklist", label: "✅ Checklist" },
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
              flex: 1, padding: "10px 16px", borderRadius: 8, border: "none", cursor: "pointer",
              background: activeTab === tab.key ? "#1e40af" : "transparent",
              color: activeTab === tab.key ? "#fff" : "#64748b",
              fontWeight: 700, fontSize: 13, transition: "all 0.2s",
              minWidth: 100,
            }}>{tab.label}</button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
                <thead>
                  <tr style={{ background: "#0d1829" }}>
                    <th style={{ padding: "12px 8px", textAlign: "left", fontSize: 12, color: "#64748b", fontWeight: 700, borderBottom: "2px solid #1e3a5f", minWidth: 160 }}>REKET</th>
                    {categories.map(c => (
                      <th key={c.key} style={{ padding: "12px 6px", textAlign: "center", fontSize: 11, color: "#64748b", fontWeight: 700, borderBottom: "2px solid #1e3a5f", minWidth: 60 }}>{c.label.toUpperCase()}</th>
                    ))}
                    <th style={{ padding: "12px 8px", textAlign: "center", fontSize: 11, color: "#64748b", fontWeight: 700, borderBottom: "2px solid #1e3a5f" }}>UKUPNO</th>
                    <th style={{ padding: "12px 8px", textAlign: "center", fontSize: 11, color: "#64748b", fontWeight: 700, borderBottom: "2px solid #1e3a5f" }}>VERDIKT</th>
                  </tr>
                </thead>
                <tbody>
                  {rackets.map((r, i) => {
                    const vals = Object.values(r.scores);
                    const avg = (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
                    const isHighlighted = r.id === 5;
                    return (
                      <tr key={r.id} style={{
                        background: isHighlighted ? "rgba(30,64,175,0.15)" : i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                        borderLeft: isHighlighted ? "3px solid #3b82f6" : "3px solid transparent",
                        cursor: "pointer",
                      }} onClick={() => { setSelected(r.id); setActiveTab("detail"); }}>
                        <td style={{ padding: "12px 8px" }}>
                          <div style={{ fontWeight: 700, fontSize: 13, color: isHighlighted ? "#93c5fd" : "#e2e8f0" }}>{r.name}</div>
                          <div style={{ fontSize: 11, color: "#64748b" }}>{r.sub} · {r.price}</div>
                        </td>
                        {categories.map(c => {
                          const val = r.scores[c.key] || 0;
                          const col = val >= 8 ? "#4ade80" : val >= 6 ? "#facc15" : "#f87171";
                          return (
                            <td key={c.key} style={{ padding: "8px 4px", textAlign: "center" }}>
                              <span style={{
                                background: `${col}22`, color: col, borderRadius: 6,
                                padding: "3px 7px", fontWeight: 800, fontSize: 13,
                              }}>{val}</span>
                            </td>
                          );
                        })}
                        <td style={{ padding: "8px", textAlign: "center" }}>
                          <span style={{ fontWeight: 900, fontSize: 16, color: "#fff" }}>{avg}</span>
                        </td>
                        <td style={{ padding: "8px", textAlign: "center" }}>
                          <span style={{
                            background: `${verdictColor[r.verdict]}22`,
                            color: verdictColor[r.verdict],
                            padding: "4px 10px", borderRadius: 20,
                            fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
                          }}>{r.verdictLabel}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ color: "#64748b", fontSize: 12, marginTop: 12, textAlign: "center" }}>
              Klikni na reket za detaljnu analizu →
            </p>
          </div>
        )}

        {/* DETAIL TAB */}
        {activeTab === "detail" && racket && (
          <div>
            {/* Racket selector */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {rackets.map(r => (
                <button key={r.id} onClick={() => setSelected(r.id)} style={{
                  padding: "8px 14px", borderRadius: 8, border: `2px solid ${r.id === selected ? verdictColor[r.verdict] : "#1e3a5f"}`,
                  background: r.id === selected ? `${verdictColor[r.verdict]}22` : "transparent",
                  color: r.id === selected ? verdictColor[r.verdict] : "#64748b",
                  fontSize: 12, fontWeight: 700, cursor: "pointer",
                }}>
                  {r.name.split(" ").slice(0,3).join(" ")}
                </button>
              ))}
            </div>

            {/* Detail card */}
            <div style={{
              background: "linear-gradient(135deg, #0d1829 0%, #0f2035 100%)",
              borderRadius: 16, padding: 24, border: `1px solid #1e3a5f`,
              borderTop: `3px solid ${verdictColor[racket.verdict]}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
                <div>
                  <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900, color: "#fff" }}>{racket.name}</h2>
                  <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: 14 }}>{racket.sub} · {racket.price}</p>
                </div>
                <span style={{
                  background: `${verdictColor[racket.verdict]}22`,
                  color: verdictColor[racket.verdict],
                  padding: "8px 20px", borderRadius: 30, fontSize: 15, fontWeight: 900,
                }}>{racket.verdictLabel}</span>
              </div>

              {/* Specs strip */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                {[
                  { l: "Oblik", v: racket.shape },
                  { l: "Core", v: racket.core },
                  { l: "Face", v: racket.face },
                  { l: "Balans", v: racket.balance },
                  { l: "Tvrdoća", v: `${racket.hardness}/10` },
                ].map(s => (
                  <div key={s.l} style={{ background: "#1a2744", padding: "6px 12px", borderRadius: 8 }}>
                    <div style={{ fontSize: 10, color: "#64748b", fontWeight: 700 }}>{s.l}</div>
                    <div style={{ fontSize: 13, color: "#e2e8f0", fontWeight: 700 }}>{s.v}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
                {/* Scores */}
                <div>
                  <h3 style={{ margin: "0 0 12px", fontSize: 14, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Ocjene</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {categories.map(c => (
                      <div key={c.key} style={{ display: "grid", gridTemplateColumns: "90px 1fr", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 12, color: "#94a3b8" }}>{c.label}</span>
                        <ScoreBar value={racket.scores[c.key] || 0} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 style={{ margin: "0 0 8px", fontSize: 13, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>🎯 Idealan za</h3>
                    <p style={{ margin: 0, fontSize: 13, color: "#e2e8f0", lineHeight: 1.5 }}>{racket.idealFor}</p>
                  </div>
                  <div>
                    <h3 style={{ margin: "0 0 8px", fontSize: 13, color: "#4ade80", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>✅ Prednosti</h3>
                    <ul style={{ margin: 0, paddingLeft: 16 }}>
                      {racket.pros.map((p, i) => <li key={i} style={{ fontSize: 13, color: "#e2e8f0", marginBottom: 4, lineHeight: 1.4 }}>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 style={{ margin: "0 0 8px", fontSize: 13, color: "#f87171", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>❌ Mane</h3>
                    <ul style={{ margin: 0, paddingLeft: 16 }}>
                      {racket.cons.map((c, i) => <li key={i} style={{ fontSize: 13, color: "#e2e8f0", marginBottom: 4, lineHeight: 1.4 }}>{c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arm risk */}
              <div style={{
                background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
                borderRadius: 10, padding: "14px 16px",
              }}>
                <h3 style={{ margin: "0 0 6px", fontSize: 13, color: "#fca5a5", fontWeight: 700, textTransform: "uppercase" }}>💪 Rizik za lakat/rame</h3>
                <p style={{ margin: 0, fontSize: 13, color: "#e2e8f0", lineHeight: 1.5 }}>{racket.armRisk}</p>
              </div>
            </div>
          </div>
        )}

        {/* TOP 3 TAB */}
        {activeTab === "top3" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {top3.map(t => {
                const r = rackets.find(x => x.id === t.id);
                return (
                  <div key={t.rank} style={{
                    background: "linear-gradient(135deg, #0d1829 0%, #0f2035 100%)",
                    borderRadius: 16, padding: 20,
                    borderLeft: `4px solid ${t.color}`,
                    border: `1px solid #1e3a5f`,
                    borderLeftColor: t.color,
                  }}>
                    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{
                        width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                        background: `${t.color}22`, display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 24,
                      }}>{t.badge.split(" ")[0]}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 6 }}>
                          <span style={{ fontWeight: 900, fontSize: 16, color: "#fff" }}>{t.name}</span>
                          <span style={{ color: t.color, fontSize: 12, fontWeight: 700, background: `${t.color}22`, padding: "2px 10px", borderRadius: 20 }}>{t.badge.split(" ").slice(1).join(" ")}</span>
                        </div>
                        <p style={{ margin: "0 0 10px", fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>{t.why}</p>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                          <span style={{ background: "#1e3a5f", color: "#93c5fd", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{r.price}</span>
                          <span style={{ background: "#1e3a5f", color: "#93c5fd", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{r.shape}</span>
                          <span style={{ background: "#1e3a5f", color: "#93c5fd", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{r.core}</span>
                          <span style={{ color: verdictColor[r.verdict], background: `${verdictColor[r.verdict]}22`, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{r.verdictLabel}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Alternatives */}
            <div style={{
              background: "#0d1829", borderRadius: 16, padding: 20, border: "1px solid #1e3a5f",
            }}>
              <h3 style={{ margin: "0 0 16px", fontSize: 14, color: "#f59e0b", fontWeight: 900, textTransform: "uppercase", letterSpacing: 1 }}>
                🔄 Ako nijedan nije fit — Alternative do 200 €
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {alternatives.map((a, i) => (
                  <div key={i} style={{
                    background: "#0f2035", borderRadius: 10, padding: "12px 16px",
                    display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap",
                  }}>
                    <span style={{ fontSize: 18 }}>{a.armRisk}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: "#e2e8f0", fontSize: 14 }}>{a.name}</div>
                      <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{a.why}</div>
                    </div>
                    <span style={{ background: "#1e3a5f", color: "#93c5fd", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{a.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CHECKLIST TAB */}
        {activeTab === "checklist" && (
          <div>
            <div style={{ background: "#0d1829", borderRadius: 16, padding: 24, border: "1px solid #1e3a5f", marginBottom: 20 }}>
              <h2 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 900, color: "#fff" }}>Decision Checklist</h2>
              <p style={{ margin: "0 0 20px", color: "#64748b", fontSize: 13 }}>5 stvari koje provjeri kad testiraš reket uživo</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {checklist.map((c, i) => (
                  <div key={i} style={{
                    background: "#0f2035", borderRadius: 12, padding: "16px 20px",
                    display: "flex", gap: 14, alignItems: "flex-start",
                    borderLeft: "3px solid #1e40af",
                  }}>
                    <span style={{ fontSize: 24, flexShrink: 0 }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: 11, color: "#4ade80", fontWeight: 700, marginBottom: 4 }}>KORAK {i + 1}</div>
                      <p style={{ margin: 0, fontSize: 14, color: "#e2e8f0", lineHeight: 1.6 }}>{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final verdict summary */}
            <div style={{ background: "#0d1829", borderRadius: 16, padding: 20, border: "1px solid #1e3a5f" }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 900, color: "#fff", textTransform: "uppercase", letterSpacing: 1 }}>Kratki verdikt za svakog</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {rackets.map(r => (
                  <div key={r.id} style={{
                    display: "flex", gap: 10, alignItems: "center",
                    padding: "8px 12px", background: "#0f2035", borderRadius: 8,
                    flexWrap: "wrap",
                  }}>
                    <span style={{
                      color: verdictColor[r.verdict], background: `${verdictColor[r.verdict]}22`,
                      padding: "2px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700, minWidth: 110,
                    }}>{r.verdictLabel}</span>
                    <span style={{ fontWeight: 700, fontSize: 13, color: "#e2e8f0" }}>{r.name}</span>
                    <span style={{ fontSize: 12, color: "#64748b" }}>{r.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}