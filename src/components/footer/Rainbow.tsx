import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Rainbow({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delayDuration={0}>
      <UITooltip>
        <TooltipTrigger aria-label="toggle tooltip">{children}</TooltipTrigger>
        <TooltipContent>
          We proudly support the rainbow community
        </TooltipContent>
      </UITooltip>
    </TooltipProvider>
  );
}
