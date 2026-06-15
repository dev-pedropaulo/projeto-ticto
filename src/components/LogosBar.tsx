export function LogosBar({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 441 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ticto Master Partner | Ebulição"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Logo Ticto */}
      <image href="/logo-ticto.png" x="0" y="4" width="153" height="44" />

      {/* Divisor */}
      <rect x="198" y="10" width="1" height="32" fill="#FFFFFF" />

      {/* Logo Ebulição */}
      <image href="/logo-ebulicao.png" x="244" y="0" width="197" height="52" />
    </svg>
  );
}
