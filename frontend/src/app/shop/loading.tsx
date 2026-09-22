import { Skeleton } from "@/components/ui/skeleton";

export default function ShopLoading() {
  return (
    <main>
      <div className="derz-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="space-y-5">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="space-y-3">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-28" />
                </div>
              ))}
            </div>
          </aside>

          <section className="min-w-0">
            <div className="flex items-center justify-between border-b border-border/70 py-3">
              <div className="space-y-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-3 w-20" />
              </div>

              <div className="flex gap-2">
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-28" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-7 pt-5 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="space-y-3">
                  <Skeleton className="aspect-[3/4] w-full" />
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
