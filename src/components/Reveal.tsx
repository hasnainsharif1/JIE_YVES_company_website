import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function Reveal({ children, className = "", delay = 0, duration = 700 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const transformClasses = prefersReducedMotion ? "" : isVisible ? "translate-y-0" : "translate-y-4";

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? "opacity-100" : "opacity-0"} ${transformClasses} ${className}`}
      style={{ transitionDuration: `${duration}ms`, ...(delay ? { transitionDelay: `${delay}ms` } : {}) }}
    >
      {children}
    </div>
  );
}
