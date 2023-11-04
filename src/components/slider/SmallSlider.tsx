import "blaze-slider/dist/blaze.css";
import base from "./slider.base.module.css";
import styles from "./small.slider.module.css";

import { useBlazeSlider } from "@/components/slider/useBlazeSlider";
import { cn } from "@/lib/utils";

export function SmallSlider({ children }: { children: React.ReactNode }) {
  const elRef = useBlazeSlider({
    all: {
      slidesToScroll: 1,
      slidesToShow: 4,
      slideGap: "2.5rem",
      loop: true,
      draggable: true,
      enableAutoplay: true,
      stopAutoplayOnInteraction: false,
      autoplayInterval: 3000,
      enablePagination: true,
      transitionDuration: 500,
      transitionTimingFunction: "ease",
    },
    "(max-width: 1024px)": {
      slideGap: "1.5rem",
      slidesToShow: 4,
    },
    "(max-width: 768px)": {
      slidesToShow: 3,
    },
    "(max-width: 640px)": {
      slidesToShow: 2,
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
    </div>
  );
}
