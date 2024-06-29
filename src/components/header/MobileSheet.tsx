import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import { MobileNavigation } from "@/components/header/MobileNavigation";

export function MobileSheet() {
  return (
    <Sheet>
      <SheetTrigger aria-label={"toggle mobile menu"}>
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <MobileNavigation />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
