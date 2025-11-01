import { menuLinks } from "@/lib/links.tsx";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileNavigation() {
  return (
    <ul className="mt-6 font-semibold">
      <li>
        <a href="/" className="block py-2">
          Home
        </a>
      </li>

      <li>
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
      </li>

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
