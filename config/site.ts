export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Tasks",
      href: "/tasks",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  links: {
    twitter: "",
    github: "",
    docs: "",
  },
}
