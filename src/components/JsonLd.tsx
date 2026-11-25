export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Content is built from static, trusted config only. "<" is escaped defensively.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
