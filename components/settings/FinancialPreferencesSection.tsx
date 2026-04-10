import SectionHeader from "@/components/global/SectionHeader";

export default function FinancialPreferencesSection() {
  return (
    <section
      className="rounded-2xl p-5 md:p-6 border"
      style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
      <SectionHeader
        title="Financial Preferences"
        subtitle="Set your default currency"
      />

      <select className="mt-4 w- px-4 py-2.5 rounded-xl ">
        <option>NGN (₦)</option>
        <option>USD ($)</option>
      </select>
    </section>
  );
}
