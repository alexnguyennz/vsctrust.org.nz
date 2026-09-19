import {
  Fragment,
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
              <ul className={cn("dropdown-panel w-max space-y-1.5 p-3")}>
                {menuLinks[menu].map((link) => (
                  <Fragment key={link.title}>
                    <ListItem
                      title={link.title}
                      href={link.href}
                      pathname={pathname}
                      Icon={link.icon}
                    >
                      {link.description}
                    </ListItem>
                    {link.children?.map((child) => (
                      <ListItem
                        key={child.title}
                        title={child.title}
                        href={child.href}
                        pathname={pathname}
                        Icon={child.icon}
                        className="ml-9 border-l border-stone-200 py-1 pl-3"
                      >
                        {child.description}
                      </ListItem>
                    ))}
                  </Fragment>
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
          <a href="/volunteer/" className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 px-2 text-center text-xs font-bold uppercase leading-tight text-white no-underline transition-all hover:scale-105 hover:bg-orange-600">Become a Volunteer</a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/support-us/" className="flex h-20 w-20 items-center justify-center rounded-full bg-stone-900 px-2 text-center text-xs font-bold uppercase leading-tight text-white no-underline transition-all hover:scale-105 hover:bg-stone-800">Make a Donation</a>
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

const ListItem = forwardRef<ElementRef<"a">, ListItemProps>(({ className, title, children, href, pathname, Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} href={href} className={cn("group flex select-none items-center gap-3 space-y-1 rounded-md px-3 py-1.5 no-underline outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100", className, href && pathname.startsWith(href) && "bg-stone-100")} rel="prefetch" {...props}>
          <Icon className={"size-6"} />
          <div>
            <div className="font-semibold leading-none">{title}</div>
            <span className="text-base">{children}</span>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
