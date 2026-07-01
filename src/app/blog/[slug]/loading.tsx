// src/app/blog/[slug]/loading.tsx

export default function Loading() {
  return (
    <main className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="animate-pulse space-y-6">
          <div className="h-6 w-40 rounded bg-muted" />

          <div className="h-12 w-3/4 rounded bg-muted" />

          <div className="aspect-video w-full rounded-3xl bg-muted" />

          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-full rounded bg-muted" />
            <div className="h-4 w-5/6 rounded bg-muted" />
          </div>
        </div>
      </div>
    </main>
  );
}
