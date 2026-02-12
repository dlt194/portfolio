import { contact } from "@/data/contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function normalisePhoneForTel(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

function normalisePhoneForWhatsApp(phone: string) {
  return phone.replace(/[^\d]/g, "");
}

export default function ContactPage() {
  const tel = `tel:${normalisePhoneForTel(contact.phone)}`;
  const whatsapp = `https://wa.me/${normalisePhoneForWhatsApp(contact.phone)}`;
  const mailto = `mailto:${contact.email}`;

  return (
    <main className="min-h-screen">
      <section className="mx-auto w-full max-w-5xl px-6 py-4 sm:py-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Contact
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            If you want to chat about roles, contracts, or collaboration, the
            fastest way is email.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="secondary">{contact.location}</Badge>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">{contact.email}</p>
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <a href={mailto}>
                    <i className="fa-solid fa-at"></i>
                    Email me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">{contact.phone}</p>
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <a href={tel}>Call</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={whatsapp} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-phone"></i>
                    <i className="fa-solid fa-message"></i>
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
