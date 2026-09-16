import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function AppLink({ className, href, ...props }: AppLinkProps) {
  return (
    <Link href={href} className={cn("derz-focus-ring", className)} {...props} />
  );
}
