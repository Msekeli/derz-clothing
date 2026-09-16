"use client";

import { ErrorState } from "@/components/shared/error-state";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="derz-container derz-section">
      <ErrorState
        title="Something went wrong"
        description="We couldn't load this page. Please try again."
        action={<Button onClick={() => reset()}>Try again</Button>}
      />
    </div>
  );
}
