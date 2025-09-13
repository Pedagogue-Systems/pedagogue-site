export default function Page() {
  const items = [
    { title: "Cassion", blurb: "System-of-record data platform with APIs, migration, and analytics." },
    { title: "Almanak", blurb: "Mobile app that evolves from daily insights to workforce development." },
    { title: "Maimonides", blurb: "Next-gen matching engine with safe, explainable AI." },
  ];
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(i => (
          <div key={i.title} className="rounded-xl border p-4">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="text-sm text-smokey mt-1">{i.blurb}</p>
          </div>
        ))}
      </div>
    </>
  );
}