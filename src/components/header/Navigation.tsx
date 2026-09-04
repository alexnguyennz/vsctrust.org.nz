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
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/"
            className={cn(
              navigationMenuTriggerStyle(),
              "hover:bg-white/10 focus:bg-white/10",
              pathname === "/" && "bg-white/10",
            )}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
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
              "hover:bg-stone-100 focus:bg-stone-100",
              pathname === "/contact/" && "bg-stone-100",
            )}
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/volunteer/" className={cn(navigationMenuTriggerStyle(), "relative inline-block rounded-full border border-orange-500 bg-white px-4 py-2 font-semibold tracking-wide text-orange-500 no-underline transition-all hover:bg-orange-50 hover:no-underline focus:text-orange-500")}>Volunteer</a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/support-us/" className={cn(navigationMenuTriggerStyle(), "relative inline-block rounded-full bg-orange-500 px-4 py-2 font-semibold tracking-wide text-white no-underline transition-all hover:bg-orange-600 hover:no-underline focus:text-white")}>Donate</a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends ComponentPropsWithoutRef<"a"> {
  Icon: LucideIcon | Icon | (() => JSX.Element);
  pathname: string;
  title: string;
}

const ListItem = forwardRef<ElementRef<"a">, ListItemProps>(
  ({ className, title, children, href, pathname, Icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          
            ref={ref}
            href={href}
            className={cn(
              "group flex select-none items-center gap-3 space-y-1 rounded-md px-3 py-1.5 no-underline outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100",
              className,
              href && pathname.startsWith(href) && "bg-stone-100",
            )}
            rel="prefetch"
            {...props}
          >
            <Icon className={"size-6"} />
            <div>
              <div className="font-semibold leading-none">{title}</div>
              <span className="text-base">{children}</span>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";