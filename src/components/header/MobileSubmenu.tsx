import "./MobileSubmenu.styles.css";

import { useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileSubmenu({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger
        className={"flex w-full items-center justify-between p-1"}
        aria-label="toggle submenu"
      >
        {name}
        <ChevronDown
          strokeWidth={3}
          className={cn(
            "h-3.5 w-3.5 transition duration-200",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </CollapsibleTrigger>
      <CollapsibleContent className={"CollapsibleContent"}>
        <ul className="my-2 ml-4 mr-0.5 space-y-3">{children}</ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
