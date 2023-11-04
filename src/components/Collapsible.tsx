import { useState } from "react";

import {
  Collapsible as UICollapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Collapsible({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <UICollapsible open={open} onOpenChange={setOpen}>
      <CollapsibleContent>{children}</CollapsibleContent>
      <CollapsibleTrigger
        className={"shadow-button mx-auto !block bg-gray-600 !p-1.5"}
        aria-label={"toggle content"}
      >
        <ArrowDown
          strokeWidth={3}
          className={cn("h-5 w-5", open && "-rotate-180")}
        />
      </CollapsibleTrigger>
    </UICollapsible>
  );
}
