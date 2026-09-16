import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="derz-center min-h-48 flex-col gap-3 text-center">
      <h2 className="text-xl font-semibold">{title}</h2>

      {description ? (
        <p className="derz-content-narrow text-muted-foreground">
          {description}
        </p>
      ) : null}

      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
