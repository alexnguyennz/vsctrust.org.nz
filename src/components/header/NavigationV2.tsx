import { useEffect, useState } from "react";
import {
  NavbarMenuListItem,
  NavbarMenu,
  NavbarMenuList,
} from "../ui/navbar-menu";

import { menuLinks } from "@/lib/links";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu.tsx";
import * as React from "react";

export function Navigation({ pathname }: { pathname: string }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    setActive(null);
  }, [pathname]);

  return (
    <NavbarMenu setActive={setActive}>
      {Object.keys(menuLinks).map((menu) => (
        <NavbarMenuList
          setActive={setActive}
          active={active}
          menu={menu}
          key={menu}
        >
          {menuLinks[menu].map((link) => (
            <NavbarMenuListItem
              key={link.name}
              href={link.href}
              title={link.name}
              pathname={pathname}
            >
              {link.description}
            </NavbarMenuListItem>
          ))}
        </NavbarMenuList>
      ))}
      <a
        href="/contact/"
        className={cn(
          navigationMenuTriggerStyle(),
          "hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
          (pathname === "/contact" || pathname === "/contact/") &&
            "active-link",
        )}
        rel="prefetch"
      >
        Contact
      </a>
    </NavbarMenu>
  );
}
