export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {index} — {children}
    </span>
  );
}
