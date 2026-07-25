import { useState } from "react";

interface PersonPhotoProps {
  photo: string;
  name: string;
  size?: number;
}

export default function PersonPhoto({ photo, name, size = 80 }: PersonPhotoProps) {
  const [hasError, setHasError] = useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (hasError) {
    return (
      <div
        className="rounded-full bg-graphite text-white flex items-center justify-center font-display font-semibold flex-shrink-0"
        style={{ width: size, height: size, fontSize: size * 0.35 }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={name}
      onError={() => setHasError(true)}
      className="rounded-full object-cover flex-shrink-0"
      style={{ width: size, height: size }}
    />
  );
}
