"use client";

import { aboutUsLinks, ourWorkLinks, getInvolvedLinks } from "@/lib/links.tsx";
import { MobileSubmenu } from "@/components/header/MobileSubmenu";

export function MobileNavigation() {
  return (
    <ul className={"mt-4 space-y-4 font-extrabold"}>
      <li tabIndex={0}>
        <a href="/" className={"block p-1"} rel="prefetch-intent" tabIndex={1}>
          Home
        </a>
      </li>
      <MobileSubmenu name={"About Us"}>
        {aboutUsLinks.map((link) => (
          <li key={link.title} title={link.title}>
            <a href={link.href} className="block p-1" rel="prefetch">
              {link.title}
            </a>
          </li>
        ))}
      </MobileSubmenu>
      <MobileSubmenu name={"Our Work"}>
        {ourWorkLinks.map((link) => (
          <li key={link.title} title={link.title}>
            <a href={link.href} className="block p-1" rel="prefetch">
              {link.title}
            </a>
          </li>
        ))}
      </MobileSubmenu>
      <MobileSubmenu name={"Get Involved"}>
        {getInvolvedLinks.map((link) => (
          <li key={link.title} title={link.title}>
            <a href={link.href} className="block p-1" rel="prefetch">
              {link.title}
            </a>
          </li>
        ))}
      </MobileSubmenu>
      <li>
        <a href="/contact/" className={"block p-1"} rel="prefetch">
          Contact
        </a>
      </li>
      <li>
        <a href="/donate/" className={"block p-1"} rel="prefetch">
          Donate
        </a>
      </li>
    </ul>
  );
}
