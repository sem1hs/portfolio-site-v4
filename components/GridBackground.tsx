const mask = "radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 78%)";

export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
        backgroundSize: "52px 52px",
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}
