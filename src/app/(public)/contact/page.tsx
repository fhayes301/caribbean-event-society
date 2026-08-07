import type { Metadata } from "next";
import GetInTouch from "@/client/components/contact/GetInTouch";
import Hero from "@/client/components/contact/Hero";
import JoinTheMovement from "@/client/components/contact/JoinTheMovement";
import VisitUs from "@/client/components/contact/VisitUs";

export const metadata: Metadata = {
  title: "Contact | Caribbean Event Society",
  description:
    "Reach out to Caribbean Event Society for general enquiries, membership questions, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <GetInTouch />
      <VisitUs />
      <JoinTheMovement />
    </>
  );
}
