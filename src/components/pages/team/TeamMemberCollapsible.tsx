import { useState } from "react";

import {
  Collapsible as UICollapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible.tsx";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils.ts";

export function TeamMemberCollapsible({
  name,
  position,
  image,
  contact,
  excerpt,
  children,
}: {
  name: string;
  position: string;
  image?: React.ReactNode;
  contact?: React.ReactNode;
  excerpt: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <UICollapsible
      open={open}
      onOpenChange={setOpen}
      className={"flex flex-1 flex-col gap-4"}
    >
      {image}

      <div className={"text-center"}>
        <h2 className="text-lg font-bold">
          {name} {contact}
        </h2>
        <h3 className="text-center">{position}</h3>
      </div>

      <p className={"mb-0"}>{excerpt}</p>

      <CollapsibleContent
        className={
          "data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden"
        }
      >
        {children}
      </CollapsibleContent>
      <CollapsibleTrigger
        className={"mx-auto mt-auto block p-3"}
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
