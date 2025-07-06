import {
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
  Take10Auckland,
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
      title: "The Team",
      href: "/team/",
      description: "Meet the team",
      icon: PersonStanding,
    },
    {
      title: "The Trust",
      href: "/trust/",
      description: "Our people behind the scenes",
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
      title: "Take 10 Auckland",
      href: "/take10-auckland/",
      description: "Late-night safe zone",
      icon: Take10Auckland,
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
      description: "Support what we do",
      icon: HandCoins,
    },
    {
      title: "Volunteer",
      href: "/volunteer/",
      description: "How you can help out",
      icon: HeartHandshake,
    },
    {
      title: "Sponsor a School",
      href: "/sponsor-a-school/",
      description: "Help a school or kindergarten",
      icon: IconBackpack,
    },
  ],
};
