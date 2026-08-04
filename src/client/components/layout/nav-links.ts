export interface NavLink {
  id: string;
  label: string;
  href: string;
}

const ABOUT: NavLink = { id: "about", label: "About", href: "/about" };
const MEMBERSHIP: NavLink = {
  id: "membership",
  label: "Membership",
  href: "#",
};
const DIRECTORY: NavLink = {
  id: "directory",
  label: "Directory",
  href: "/directory",
};
const EVENTS: NavLink = { id: "events", label: "Events", href: "/events" };
const RESOURCES: NavLink = { id: "resources", label: "Resources", href: "#" };
const CONTACT: NavLink = {
  id: "contact",
  label: "Contact",
  href: "/contact",
};

// The wordmark links home, so the nav itself starts at "About".
export const HEADER_NAV_LINKS: NavLink[] = [
  ABOUT,
  MEMBERSHIP,
  DIRECTORY,
  EVENTS,
  RESOURCES,
  CONTACT,
];
