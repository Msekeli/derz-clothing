import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SiteSection({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return <section className={cn("derz-section", className)} {...props} />;
}
