import { HandshakeIcon, MailIcon, PersonIcon } from "@/client/components/layout/icons";
import type { ContactMethod } from "@/types/contact.types";

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "general",
    label: "General Enquiries",
    description: "For general questions about Caribbean Event Society.",
    email: "hello@caribbeaneventsociety.com",
    Icon: MailIcon,
  },
  {
    id: "membership",
    label: "Membership Enquiries",
    description: "Questions about membership, the application process, or benefits.",
    email: "membership@caribbeaneventsociety.com",
    Icon: PersonIcon,
  },
  {
    id: "partnerships",
    label: "Partnerships & Collaborations",
    description: "For partnership opportunities, sponsorships, and collaborations.",
    email: "partnerships@caribbeaneventsociety.com",
    Icon: HandshakeIcon,
  },
];

// Placeholder copy — swap for client-provided subject options.
export const CONTACT_SUBJECT_OPTIONS: string[] = [
  "General Enquiry",
  "Membership Enquiry",
  "Partnership & Collaboration",
  "Press & Media",
  "Other",
];
