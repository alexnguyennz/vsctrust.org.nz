import { useRef, useEffect } from "react";
import BlazeSlider, { type BlazeConfig } from "blaze-slider";

export function useBlazeSlider(config?: BlazeConfig) {
  const sliderRef = useRef<BlazeSlider>();
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sliderRef.current && elRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config);
    }
  }, []);

  return elRef;
}
