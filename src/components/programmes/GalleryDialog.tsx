import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Image } from "astro:assets";

export function GalleryDialog({
  fullImage,
  children,
}: {
  fullImage?: typeof Image;
  children?: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger className="group">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription className="p-4">{fullImage}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
