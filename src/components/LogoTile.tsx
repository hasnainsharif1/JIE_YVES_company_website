import { useState } from "react";

interface LogoTileProps {
  name: string;
  logo: string;
  className?: string;
}

export default function LogoTile({ name, logo, className = "" }: LogoTileProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`border border-mist rounded p-6 aspect-square bg-white flex items-center justify-center ${className}`}
    >
      {hasError ? (
        <span className="font-display uppercase text-graphite text-sm text-center leading-tight">{name}</span>
      ) : (
        <img
          src={logo}
          alt={name}
          onError={() => setHasError(true)}
          className="max-h-14 max-w-full"
        />
      )}
    </div>
  );
}
