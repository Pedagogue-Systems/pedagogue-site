export default function Page() {
  const items = [
    { name: "AI Matching Consistency Eval", url: "https://github.com/Pedagogue-Systems/ai-matching-consistency-eval" },
  ];
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">GitHub Projects</h1>
      <ul className="space-y-2">
        {items.map(p => (
          <li key={p.url}>
            <a className="underline" href={p.url} target="_blank" rel="noreferrer">{p.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
