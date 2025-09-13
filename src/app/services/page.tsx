export default function Page() {
  const services = [
    { title: "Needs Assessment", blurb: "Current-state review and prioritized recommendations." },
    { title: "Strategic Roadmap & Playbook", blurb: "Clear sequencing, governance, and value tracking." },
    { title: "Strategic Realization Office (SRO)", blurb: "Drive execution, dependencies, and outcomes." },
  ];
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map(s => (
          <div key={s.title} className="rounded-xl border p-4">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-smokey mt-1">{s.blurb}</p>
          </div>
        ))}
      </div>
    </>
  );
}