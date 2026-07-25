import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSliderProps {
  images: string[];
  interval?: number;
  children: ReactNode;
}

export default function HeroSlider({ images, interval = 4000, children }: HeroSliderProps) {
  const [active, setActive] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (prefersReducedMotion || images.length <= 1) return;

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active, prefersReducedMotion, images.length, interval]);

  const goTo = (index: number) => setActive(index);
  const goPrev = () => goTo((active - 1 + images.length) % images.length);
  const goNext = () => goTo((active + 1) % images.length);

  return (
    <section className="relative flex items-center min-h-[85vh] overflow-hidden bg-graphite">
      {images.map((image, i) => (
        <div
          key={image}
          aria-hidden={i !== active}
          className={`absolute -inset-2 scale-105 blur-[1.5px] transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "linear-gradient(to bottom right, rgba(47,49,51,0.65), rgba(47,49,51,0.45))" }}
      />

      <div className="relative z-10 w-full">{children}</div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm items-center justify-center text-white hover:bg-white/15 hover:border-white/50 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm items-center justify-center text-white hover:bg-white/15 hover:border-white/50 transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-5 md:bottom-8 left-0 right-0 z-10 flex justify-center gap-2.5">
            {images.map((image, i) => (
              <button
                key={image}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-7 bg-red" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
