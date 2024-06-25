import React, { forwardRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const NavbarMenu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center"
    >
      {children}
    </nav>
  );
};

export const NavbarMenuList = ({
  setActive,
  active,
  menu,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  menu: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(menu)}
      className="relative hidden lg:block"
    >
      <button
        className={cn(
          "inline-flex items-center px-3 py-1.5 font-extrabold",
          className,
        )}
      >
        {menu}
        <ChevronDown
          size={14}
          strokeWidth={4}
          className={cn(
            "relative top-[1px] ml-1 transition duration-200",
            active === menu && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            key={menu}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {active === menu && (
              <div className="absolute left-1/2 -translate-x-1/2 transform pt-2">
                <motion.div
                  key="menu"
                  transition={{ duration: 0.2 }}
                  layoutId="active"
                  className="overflow-hidden rounded-md border bg-white shadow-lg"
                >
                  <motion.div
                    layout
                    className="flex w-max min-w-[250px] flex-col gap-2 p-3"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const NavbarMenuListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { pathname: string }
>(({ className, title, children, href, pathname }, ref) => {
  return (
    <a
      href={href!}
      className={cn(
        "group space-y-1 rounded-md p-3 outline-none transition-colors hover:bg-gray-900 hover:text-white",
        pathname === href && "bg-gray-900 text-white",
        className,
      )}
    >
      <div>
        <div className="flex items-center gap-1 font-extrabold leading-none">
          <span>{title}</span>
        </div>
        <span className="test-sm mt-1 line-clamp-2 leading-snug">
          {children}
        </span>
      </div>
    </a>
  );
});

NavbarMenuListItem.displayName = "MenuListItem";
