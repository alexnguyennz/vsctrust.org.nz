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
      <SheetTrigger
        className={"shadow-button bg-gray-600 !p-1.5"}
        aria-label={"toggle mobile menu"}
      >
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <MobileNavigation />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
