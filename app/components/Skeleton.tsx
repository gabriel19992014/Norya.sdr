"use client";

export function SectionSkeleton() {
  return (
    <div className="section-shell py-20 animate-pulse">
      <div className="grid gap-6 lg:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="h-10 w-2/3 rounded bg-norya-mist" />
            <div className="space-y-2">
              <div className="h-4 rounded bg-norya-mist" />
              <div className="h-4 w-5/6 rounded bg-norya-mist" />
              <div className="h-4 w-4/6 rounded bg-norya-mist" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
