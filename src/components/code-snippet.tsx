import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CodeSnippet({
  title,
  language,
  description,
  code,
}: {
  title: string;
  language: string;
  description?: string;
  code: string;
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-base">{title}</CardTitle>
          <Badge variant="secondary">{language}</Badge>
        </div>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </CardHeader>

      <CardContent className="pt-0">
        <pre className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm leading-relaxed">
          <code>{code}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
