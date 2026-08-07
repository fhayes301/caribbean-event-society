export interface NavLink {
  id: string;
  label: string;
  href: string;
}

const ABOUT: NavLink = { id: "about", label: "About", href: "/about" };
const DIRECTORY: NavLink = {
  id: "directory",
  label: "Directory",
  href: "/directory",
};
const EVENTS: NavLink = { id: "events", label: "Events", href: "/events" };
const CONTACT: NavLink = {
  id: "contact",
  label: "Contact",
  href: "/contact",
};

// The wordmark links home, so the nav itself starts at "About".
// Membership and Resources are left out until those pages exist —
// re-add them here once they have real routes.
export const HEADER_NAV_LINKS: NavLink[] = [ABOUT, DIRECTORY, EVENTS, CONTACT];
