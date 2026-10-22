// Assinatura completa (master v1.2). Brand book: nunca abaixo de 120 px de largura.
const RATIO = 1545 / 1430;

export default function Logo({
  variant = "master",
  width = 120,
}: {
  variant?: "master" | "negative";
  width?: number;
}) {
  const w = Math.max(width, 120);
  return (
    <img
      src={variant === "master" ? "/logo-full.svg" : "/logo-full-negative.svg"}
      alt="IN Process Safety"
      width={w}
      height={Math.round(w * RATIO)}
      className="logo"
    />
  );
}
