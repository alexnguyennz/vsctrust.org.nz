interface MenuLinks {
  [key: string]: {
    name: string;
    href: string;
    description: string;
  }[];
}

export const menuLinks: MenuLinks = {
  "About Us": [
    {
      name: "Who We Are",
      href: "/who-we-are/",
      description: "More about us",
    },
    {
      name: "The Team",
      href: "/team/",
      description: "Our team",
    },
    {
      name: "The Trust",
      href: "/trust/",
      description: "Our trustees",
    },
    {
      name: "News",
      href: "/news/",
      description: "Stay up-to-date",
    },
    {
      name: "Media",
      href: "/media/",
      description: "Our media coverage",
    },
  ],
  "Our Work": [
    {
      name: "Do Some Good",
      href: "/dosomegood/",
      description: "Helping tamariki in need",
    },
    {
      name: "Take 10",
      href: "/take10/",
      description: "Late-night safe zone",
    },
    {
      name: "Take 10 Arvo's",
      href: "/take10-arvos/",
      description: "After-school youth zone",
    },
    {
      name: "Generation Link",
      href: "/gen-link/",
      description: "Connect kids with elders",
    },
  ],
  "Get Involved": [
    {
      name: "Donate",
      href: "/donate/",
      description: "Support our work",
    },
    {
      name: "Volunteer",
      href: "/volunteer/",
      description: "How you can help out",
    },
    {
      name: "Sponsor a School",
      href: "/sponsor-a-school/",
      description: "Partner with a school",
    },
  ],
};

export const aboutUsLinks: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Who We Are",
    href: "/who-we-are/",
    description: "More about us",
  },
  {
    title: "The Team",
    href: "/team/",
    description: "Our team",
  },
  {
    title: "The Trust",
    href: "/trust/",
    description: "Our trustees",
  },
  {
    title: "News",
    href: "/news/",
    description: "Stay up-to-date",
  },
  {
    title: "Media",
    href: "/media/",
    description: "Our media coverage",
  },
];

export const ourWorkLinks: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Do Some Good",
    href: "/dosomegood/",
    description: "Helping tamariki in need",
  },
  {
    title: "Take 10",
    href: "/take10/",
    description: "Late-night safe zone",
  },
  {
    title: "Take 10 Arvo's",
    href: "/take10-arvos/",
    description: "After-school youth zone",
  },
  {
    title: "Generation Link",
    href: "/gen-link/",
    description: "Connect kids with elders",
  },
];

export const getInvolvedLinks: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Donate",
    href: "/donate/",
    description: "Support our work",
  },
  {
    title: "Volunteer",
    href: "/volunteer/",
    description: "How you can help out",
  },
  {
    title: "Sponsor a School",
    href: "/sponsor-a-school/",
    description: "Partner with a school",
  },
];
