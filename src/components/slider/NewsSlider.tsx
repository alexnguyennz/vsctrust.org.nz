import "blaze-slider/dist/blaze.css";
import base from "./slider.base.module.css";
import styles from "./news.module.css";

import { useBlazeSlider } from "@/components/slider/useBlazeSlider";

import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsSlider({ children }: { children: React.ReactNode }) {
  const elRef = useBlazeSlider({
    all: {
      slidesToScroll: 5,
      slidesToShow: 5,
      slideGap: "2.5rem",
      loop: false,
      draggable: true,
      enableAutoplay: false,
      stopAutoplayOnInteraction: false,
      autoplayInterval: 3000,
      enablePagination: true,
      transitionDuration: 500,
      transitionTimingFunction: "ease",
    },
    "(max-width: 1280px)": {
      slidesToScroll: 4,
      slidesToShow: 4,
    },
    "(max-width: 1024px)": {
      slideGap: "1.5rem",
      slidesToScroll: 3,
      slidesToShow: 3,
    },
    "(max-width: 768px)": {
      slidesToScroll: 2,
      slidesToShow: 2,
    },
    "(max-width: 640px)": {
      slidesToScroll: 1,
      slidesToShow: 1,
    },
  });

  return (
    <div
      className={cn(
        "blaze-slider",
        base["blaze-slider"],
        styles["blaze-slider"],
      )}
      ref={elRef}
    >
      <div className="blaze-container">
        <div className="blaze-track-container">{children}</div>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button
          className={cn("blaze-prev transition-opacity")}
          aria-label={"previous items"}
        >
          <ArrowLeft strokeWidth={3} className={"h-6 w-6"} />
        </button>
        <button
          className={cn("blaze-next transition-opacity")}
          aria-label={"next items"}
        >
          <ArrowLeft strokeWidth={3} className={"h-6 w-6 rotate-180"} />
        </button>
      </div>
    </div>
  );
}
