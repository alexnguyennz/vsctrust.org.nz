import {
  Info,
  PersonStanding,
  HeartHandshake,
  HandCoins,
  Newspaper,
  type LucideIcon,
} from "lucide-react";
import {
  IconBackpack,
  IconFriends,
  IconWriting,
  type Icon,
} from "@tabler/icons-react";
import {
  DoSomeGood,
  GenLink,
  Take10,
  Take10Arvos,
} from "@/components/ProgrammeLogos.tsx";

interface MenuLinks {
  [key: string]: {
    title: string;
    href: string;
    description: string;
    icon: LucideIcon | Icon | (() => JSX.Element);
  }[];
}

export const menuLinks: MenuLinks = {
  "About Us": [
    {
      title: "Who We Are",
      href: "/who-we-are/",
      description: "More about us",
      icon: Info,
    },
    {
      title: "The Team",
      href: "/team/",
      description: "Our team",
      icon: PersonStanding,
    },
    {
      title: "The Trust",
      href: "/trust/",
      description: "Our trustees",
      icon: IconFriends,
    },
    {
      title: "News",
      href: "/news/",
      description: "Stay up-to-date",
      icon: IconWriting,
    },
    {
      title: "Media",
      href: "/media/",
      description: "Our media coverage",
      icon: Newspaper,
    },
  ],
  "Our Work": [
    {
      title: "Do Some Good",
      href: "/dosomegood/",
      description: "Helping tamariki in need",
      icon: DoSomeGood,
    },
    {
      title: "Take 10",
      href: "/take10/",
      description: "Late-night safe zone",
      icon: Take10,
    },
    {
      title: "Take 10 Arvo's",
      href: "/take10-arvos/",
      description: "After-school youth zone",
      icon: Take10Arvos,
    },
    {
      title: "Generation Link",
      href: "/gen-link/",
      description: "Connecting kids with elders",
      icon: GenLink,
    },
  ],
  "Get Involved": [
    {
      title: "Donate",
      href: "/donate/",
      description: "Support our work",
      icon: HandCoins,
    },
    {
      title: "Volunteer",
      href: "/volunteer/",
      description: "How you can help",
      icon: HeartHandshake,
    },
    {
      title: "Sponsor a School",
      href: "/sponsor-a-school/",
      description: "Partner with a school",
      icon: IconBackpack,
    },
  ],
};
