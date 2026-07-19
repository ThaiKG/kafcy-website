import DimensionStat from "./DimensionStat.jsx";

const stats = [
  { value: "6 Trades", label: "One Team, Design to Construction" },
  { value: "Katy, TX", label: "+ Fulshear & Cypress Service Area" },
  { value: "Architect-Led", label: "Founded by Architects, Engineers & Builders" },
  { value: "4 Sectors", label: "Community, Industrial & Commercial Work" },
];

export default function TrustBar() {
  return (
    <section className="bg-espresso">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8">
        {stats.map((s) => (
          <DimensionStat key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  );
}
