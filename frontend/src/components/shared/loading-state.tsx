import { Skeleton } from "@/components/ui/skeleton";

type LoadingStateProps = {
  rows?: number;
};

export function LoadingState({ rows = 3 }: LoadingStateProps) {
  return (
    <div className="derz-stack-md w-full" role="status" aria-label="Loading">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex items-center gap-4">
          <Skeleton className="size-12 rounded-md" />

          <div className="derz-stack-xs flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
