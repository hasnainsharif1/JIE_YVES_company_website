import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { site } from "../data/site";

const inputClasses =
  "w-full border border-mist rounded px-4 py-3 text-ink placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-red focus:border-red transition-colors";

const labelClasses = "block text-ink text-sm font-medium mb-2";

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.48 17.52 2 12 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function DetailRow({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-red-tint flex items-center justify-center flex-shrink-0">
        <Icon className="text-red" size={18} strokeWidth={2} />
      </div>
      <div>
        <p className="text-steel uppercase text-xs font-medium tracking-wide mb-1">{label}</p>
        <div className="text-ink font-medium">{children}</div>
      </div>
    </div>
  );
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

    const subject = encodeURIComponent(form.subject || `Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.phone ? `Phone: ${form.phone}` : null,
        "",
        form.message,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk"
        subtitle="Reach out and our team will get back to you."
        image="/images/contact_page_hero_section.png"
      />

      <Section bg="white" pattern>
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading eyebrow="Get In Touch" title="Contact Information" align="left" />
              <div className="flex flex-col gap-6">
                <Reveal delay={0}>
                  <DetailRow icon={MapPin} label="Address">
                    {site.contact.address}
                  </DetailRow>
                </Reveal>
                <Reveal delay={90}>
                  <DetailRow icon={Phone} label="Phone">
                    <div className="flex flex-col gap-1">
                      {site.contact.phones.map((phone) => (
                        <a key={phone} href={telHref(phone)} className="hover:text-red transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </DetailRow>
                </Reveal>
                <Reveal delay={180}>
                  <DetailRow icon={Mail} label="Email">
                    <a href={`mailto:${site.contact.email}`} className="hover:text-red transition-colors">
                      {site.contact.email}
                    </a>
                  </DetailRow>
                </Reveal>
                <Reveal delay={270}>
                  <DetailRow icon={MessageCircle} label="WhatsApp">
                    <a
                      href={site.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red transition-colors"
                    >
                      Chat with us
                    </a>
                  </DetailRow>
                </Reveal>
                {site.contact.hours && (
                  <Reveal delay={360}>
                    <DetailRow icon={Clock} label="Working Hours">
                      {site.contact.hours}
                    </DetailRow>
                  </Reveal>
                )}
              </div>

              <div className="flex items-center gap-3 mt-8">
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jie Yves on Facebook"
                  className="w-10 h-10 rounded-full border border-mist flex items-center justify-center text-graphite hover:border-red hover:text-red transition-colors"
                >
                  <FacebookIcon size={18} />
                </a>
              </div>
            </div>

            <div className="bg-white border border-mist rounded p-8">
              <h3 className="text-ink mb-6">Send Us A Message</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className={labelClasses}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClasses}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </div>
              </form>
              <p className="text-steel text-sm mt-6">
                Or reach us directly on{" "}
                <a
                  href={site.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red font-medium hover:text-red-dark transition-colors"
                >
                  WhatsApp
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section bg="cloud">
        <Reveal>
          <SectionHeading eyebrow="Find Us" title="Our Location" align="center" />
          <div className="rounded overflow-hidden border border-mist h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28859.592778176397!2d51.521714039550794!3d25.289111199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c58cafe7e373%3A0x5dd3b1e719039838!2sJYCT%20Qatar!5e0!3m2!1sen!2sin!4v1613535397411!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JYCT Qatar location map"
            />
          </div>
        </Reveal>
      </Section>

      <Section bg="graphite">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-8">We're ready when you are</h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8">
              {site.contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={telHref(phone)}
                  className="font-display text-2xl md:text-3xl font-semibold text-white hover:text-red transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
            <Button href={site.contact.whatsapp} variant="primary">
              WhatsApp Us
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
