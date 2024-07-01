import { menuLinks } from "@/lib/links.tsx";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileNavigation() {
  return (
    <ul tabIndex={-1} className={"mt-6 font-extrabold"}>
      <li tabIndex={0} className={"py-2"}>
        <a href="/" className={"block"}>
          Home
        </a>
      </li>

      <Accordion type="single" collapsible>
        {Object.keys(menuLinks).map((menu) => (
          <AccordionItem value={menu} key={menu}>
            <AccordionTrigger>{menu}</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 py-2">
                {menuLinks[menu].map((link) => (
                  <li key={link.title} title={link.title}>
                    <a href={link.href} className="block p-1">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <li>
        <a href="/contact/" className={"block py-2"}>
          Contact
        </a>
      </li>
      <li>
        <a href="/donate/" className={"block py-2"}>
          Donate
        </a>
      </li>
    </ul>
  );
}
