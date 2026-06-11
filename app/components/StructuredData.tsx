type StructuredDataProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Injecte du JSON-LD schema.org (SEO) — un script par graphe */
export default function StructuredData({ data }: StructuredDataProps) {
  const graphs = Array.isArray(data) ? data : [data];
  return (
    <>
      {graphs.map((graph, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
    </>
  );
}
