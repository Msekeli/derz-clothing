import Image from "next/image";
import { AppLink } from "@/components/shared/app-link";

export function BrandLogo() {
  return (
    <AppLink href="/" className="block w-fit shrink-0" aria-label="DERZ home">
      <span className="block dark:hidden">
        <Image
          src="/light-logo.webp"
          alt="DERZ"
          width={240}
          height={80}
          className="h-auto w-40 sm:w-48 lg:w-56"
          priority
        />
      </span>

      <span className="hidden dark:block">
        <Image
          src="/dark-logo.webp"
          alt="DERZ"
          width={240}
          height={80}
          className="h-auto w-40 sm:w-48 lg:w-56"
          priority
        />
      </span>
    </AppLink>
  );
}
