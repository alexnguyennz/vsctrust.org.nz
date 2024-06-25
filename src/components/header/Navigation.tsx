"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { aboutUsLinks, ourWorkLinks, getInvolvedLinks } from "@/lib/links";

export function Navigation({ pathname }: { pathname: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[250px] p-3">
              {aboutUsLinks.map((link) => (
                <ListItem
                  key={link.title}
                  title={link.title}
                  href={link.href}
                  pathname={pathname}
                >
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[250px] p-3">
              {ourWorkLinks.map((link) => (
                <ListItem
                  key={link.title}
                  title={link.title}
                  href={link.href}
                  pathname={pathname}
                >
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[250px] p-3">
              {getInvolvedLinks.map((link) => (
                <ListItem
                  key={link.title}
                  title={link.title}
                  href={link.href}
                  pathname={pathname}
                >
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
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
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            href="/donate/"
            className={cn(
              navigationMenuTriggerStyle(),
              "shadow-button bg-red-600 text-red-50 hover:text-red-50 focus:text-red-50",
            )}
            rel="prefetch"
          >
            Donate
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { pathname: string }
>(({ className, title, children, href, pathname, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 no-underline outline-none transition-colors hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
            className,
            href && pathname.startsWith(href) && "active-link",
          )}
          rel="prefetch"
          {...props}
        >
          <div className="font-extrabold leading-none">{title}</div>
          <p className={"text-sm"}>{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
