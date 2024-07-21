import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "modafaku",
  DESCRIPTION: "where my thoughts can play",
  AUTHOR: "fongu modafaku",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "home", 
    HREF: "/", 
  },
  { 
    TEXT: "history", 
    HREF: "/work", 
  },
  { 
    TEXT: "guide", 
    HREF: "/blog", 
  },
  { 
    TEXT: "projects", 
    HREF: "/projects", 
  },
  { 
    TEXT: "blog", 
    HREF: "/ghost", 
  },  
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "email",
    ICON: "email", 
    TEXT: "modafaku@gmail.com",
    HREF: "mailto:modafaku@gmail.com",
  },
  { 
    NAME: "github",
    ICON: "github",
    TEXT: "modafaku",
    HREF: "https://github.com/modafaku"
  },
  { 
    NAME: "linkedin",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },
  { 
    NAME: "twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },
]
