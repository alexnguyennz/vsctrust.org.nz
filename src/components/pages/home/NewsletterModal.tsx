import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils.ts";

interface NewsletterModalProps {
  children: React.ReactNode;
}

export const NewsletterModal = ({ children }: NewsletterModalProps) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (nextOpen: boolean) => {
    // Set the newsletter modal as dismissed when modal is closed
    if (!nextOpen) {
      localStorage.setItem("newsletter-modal", "true");
    }
    setOpen(nextOpen);
  };

  // Show modal after 5 seconds if not already open, and the user hasn't dismissed or submitted
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!localStorage.getItem("newsletter-modal")) setOpen(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="shadow-button relative inline-block w-full rounded-md border border-black bg-gray-600 px-4 py-2 font-semibold tracking-wide text-white no-underline hover:no-underline active:shadow-none">
          Subscribe to our newsletter
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe to our newsletter</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
