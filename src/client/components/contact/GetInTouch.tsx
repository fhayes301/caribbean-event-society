import { Container } from "@/client/components/ui/Container";
import { CtaLink } from "@/client/components/ui/CtaLink";
import { IconTile } from "@/client/components/ui/IconTile";
import { SectionHeading } from "@/client/components/ui/SectionHeading";
import { CONTACT_METHODS } from "./contact-content";
import ContactForm from "./ContactForm";

/** The "We're Here to Help" section — contact form alongside other ways to reach us. */
export default function GetInTouch() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="grid max-w-7xl gap-10 sm:grid-cols-2 sm:gap-12">
        <div className="min-w-0">
          <SectionHeading eyebrow="GET IN TOUCH" headline="We're Here to Help" />
          <p className="mt-6 font-body text-base text-taupe">
            Whether you&rsquo;re an event professional, a potential member, a partner, or simply
            want to learn more about CES, use the form and a member of our team will get back to
            you as soon as possible.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div className="min-w-0">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
            OTHER WAYS TO REACH US
          </p>
          <ul className="mt-6 flex flex-col gap-8">
            {CONTACT_METHODS.map((method) => (
              <li key={method.id}>
                <IconTile
                  Icon={method.Icon}
                  label={method.label}
                  description={method.description}
                  align="left"
                >
                  <CtaLink
                    href={`mailto:${method.email}`}
                    showIcon={false}
                    className="mt-2 min-w-0 wrap-anywhere normal-case tracking-normal"
                  >
                    {method.email}
                  </CtaLink>
                </IconTile>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
