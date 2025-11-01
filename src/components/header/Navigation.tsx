import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { type LucideIcon } from "lucide-react";
import { type Icon } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { menuLinks } from "@/lib/links.tsx";

export function Navigation({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.keys(menuLinks).map((menu) => (
          <NavigationMenuItem key={menu}>
            <NavigationMenuTrigger>{menu}</NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className={cn("w-max space-y-1.5 p-3")}>
                {menuLinks[menu].map((link) => (
                  <ListItem
                    key={link.title}
                    title={link.title}
                    href={link.href}
                    pathname={pathname}
                    Icon={link.icon}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact/"
            className={cn(
              navigationMenuTriggerStyle(),
              "hover:bg-gray-200 focus:bg-gray-200",
              pathname === "/contact/" && "bg-gray-200",
            )}
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            href="/donate/"
            className={cn(
              navigationMenuTriggerStyle(),
              "shadow-button relative inline-block rounded-md border border-black bg-blue-500 px-4 py-2 font-semibold tracking-wide text-white no-underline transition-all hover:bg-opacity-90 hover:no-underline focus:text-white active:translate-x-1 active:translate-y-1 active:shadow-none",
            )}
          >
            Donate
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a"> & {
    Icon: LucideIcon | Icon | (() => JSX.Element);
    pathname: string;
  }
>(({ className, title, children, href, pathname, Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "group flex select-none items-center gap-3 space-y-1 rounded-md px-3 py-1.5 no-underline outline-none transition-colors hover:bg-gray-200 focus:bg-gray-200",
            className,
            href && pathname.startsWith(href) && "bg-gray-200",
          )}
          rel="prefetch"
          {...props}
        >
          <Icon className={"size-6"} />
          <div>
            <div className="font-semibold leading-none">{title}</div>
            <span className="text-sm">{children}</span>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
