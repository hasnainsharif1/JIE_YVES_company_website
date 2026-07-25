interface BracketProps {
  size?: number;
  className?: string;
  light?: boolean;
}

export function Bracket({ size = 16, className = "", light = false }: BracketProps) {
  const cornerColor = light ? "border-white" : "border-graphite";

  return (
    <span className={`relative inline-block flex-shrink-0 ${className}`} style={{ width: size, height: size }}>
      <span className={`absolute top-0 left-0 w-2/3 h-2/3 border-t-2 border-l-2 ${cornerColor}`} />
      <span className="absolute bottom-0 right-0 w-2/3 h-2/3 border-b-2 border-r-2 border-red" />
    </span>
  );
}

interface CornerBracketsProps {
  size?: number;
  hoverOnly?: boolean;
}

export function CornerBrackets({ size = 28, hoverOnly = false }: CornerBracketsProps) {
  const visibility = hoverOnly ? "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100" : "";

  return (
    <>
      <span
        className={`pointer-events-none absolute -top-px -left-px border-t-2 border-l-2 border-graphite transition-all duration-300 ${visibility}`}
        style={{ width: size, height: size }}
      />
      <span
        className={`pointer-events-none absolute -bottom-px -right-px border-b-2 border-r-2 border-red transition-all duration-300 ${visibility}`}
        style={{ width: size, height: size }}
      />
    </>
  );
}
