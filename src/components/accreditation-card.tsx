import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Accreditation } from "@/data/accreditations";

function formatDate(input?: string) {
  if (!input) return "";
  const [y, m] = input.split("-");
  if (!y) return input;
  if (!m) return y;
  const month = new Date(Number(y), Number(m) - 1, 1).toLocaleString("en-GB", {
    month: "short",
  });
  return `${month} ${y}`;
}

export function AccreditationCard({ item }: { item: Accreditation }) {
  const issued = formatDate(item.dateIssued);
  const expires = formatDate(item.expires);

  return (
    <Card className="h-full">
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={item.featured ? "default" : "secondary"}>
            {item.type}
          </Badge>
          <Badge variant="outline">{item.issuer}</Badge>
          {item.expires ? (
            <Badge variant="destructive">Expires {expires}</Badge>
          ) : null}
        </div>

        <CardTitle className="text-pretty text-lg">{item.title}</CardTitle>

        <p className="text-sm text-muted-foreground">
          {issued ? `Issued ${issued}` : "Issued date not set"}
          {item.credentialId ? ` • ID: ${item.credentialId}` : ""}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {item.skills?.length ? (
          <div className="flex flex-wrap gap-2">
            {item.skills.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
          </div>
        ) : null}

        {item.url ? (
          <Link
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm underline underline-offset-4"
          >
            View credential
          </Link>
        ) : (
          <p className="text-sm text-muted-foreground">
            No verification link added yet.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
