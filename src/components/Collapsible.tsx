import { useState } from "react";

import {
  Collapsible as UICollapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Collapsible({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <UICollapsible open={open} onOpenChange={setOpen}>
      <CollapsibleContent className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden">
        {children}
      </CollapsibleContent>
      <CollapsibleTrigger
        className={"mx-auto block p-3"}
        aria-label={"toggle content"}
      >
        <ChevronDown
          size={20}
          strokeWidth={3}
          className={cn("transition", open && "rotate-180")}
        />
      </CollapsibleTrigger>
    </UICollapsible>
  );
}
