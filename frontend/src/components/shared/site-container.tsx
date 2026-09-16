import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SiteContainer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("derz-container", className)} {...props} />;
}
