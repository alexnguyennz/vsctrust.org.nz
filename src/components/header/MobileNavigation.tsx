import { menuLinks } from "@/lib/links.tsx";
import { MobileSubmenu } from "@/components/header/MobileSubmenu";

export function MobileNavigation() {
  return (
    <ul className={"mt-4 space-y-4 font-bold"}>
      <li tabIndex={0}>
        <a href="/" className={"block p-1"}>
          Home
        </a>
      </li>

      {Object.keys(menuLinks).map((menu) => (
        <MobileSubmenu name={menu}>
          {menuLinks[menu].map((link) => (
            <li key={link.title} title={link.title}>
              <a href={link.href} className="block p-1" rel="prefetch">
                {link.title}
              </a>
            </li>
          ))}
        </MobileSubmenu>
      ))}

      <li>
        <a href="/contact/" className={"block p-1"}>
          Contact
        </a>
      </li>
      <li>
        <a href="/donate/" className={"block p-1"}>
          Donate
        </a>
      </li>
    </ul>
  );
}
