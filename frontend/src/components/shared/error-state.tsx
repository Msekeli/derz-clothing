import { AlertCircle } from "lucide-react";
import type { ReactNode } from "react";

type ErrorStateProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
};

export function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this content. Please try again.",
  action,
}: ErrorStateProps) {
  return (
    <div
      className="derz-center min-h-48 flex-col gap-3 text-center"
      role="alert"
    >
      <AlertCircle className="size-6" aria-hidden="true" />

      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="derz-content-narrow text-muted-foreground">{description}</p>

      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
