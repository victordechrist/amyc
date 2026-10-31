import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/forms/ContactForm";
import { SOCIAL_LINKS } from "@/lib/data";
import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Adaobi Muonago Youth Center",
  description:
    "Get in touch with Adaobi Muonago Youth Center. Ask questions about admissions, mentorship, partnerships, or donations.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <Section padding="none">
        <SectionHeading
          kicker="Connect With Us"
          title="Contact Adaobi Muonago Youth Center"
          description="Have questions about our tech bootcamps, mentorship opportunities, or corporate partnerships? We are here to help."
        />
      </Section>

      {/* Main Content Grid */}
      <Section padding="none">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Contact Info & Details */}
          <div className="space-y-6 lg:col-span-5">
            <div className="space-y-6 rounded-2xl border border-border bg-card p-6 md:p-8">
              <h3 className="font-heading text-lg font-bold text-foreground">
                Get in Touch
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent/20 dark:text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email Us</p>
                    <a
                      href="mailto:contact@amycenter.org"
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      contact@amycenter.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent/20 dark:text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent/20 dark:text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      Tech Innovation Center, Suite 400
                      <br />
                      Dallas, TX 75201
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent/20 dark:text-accent">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Office Hours
                    </p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM CST
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/60 pt-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Follow & Connect
                </p>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-border bg-accent/10 p-6">
              <MessageSquare className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
              <div>
                <h4 className="text-sm font-bold text-foreground">
                  Quick Response Promise
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">
                  All admissions inquiries and mentor applications receive a
                  response within 24-48 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
