import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AppLink } from "@/components/shared/app-link";
import { SiteContainer } from "@/components/shared/site-container";
import type { StorefrontDepartment } from "../types";

type DepartmentsSectionProps = {
  departments: StorefrontDepartment[];
};

export function DepartmentsSection({ departments }: DepartmentsSectionProps) {
  return (
    <section>
      <SiteContainer className="py-16 sm:py-20 lg:py-24">
        <div className="mb-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--derz-orange)] sm:text-sm">
            Shop DERZ
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Find your fit.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {departments.map((department) => (
            <AppLink
              key={department.id}
              href={department.href}
              className="group relative aspect-[4/5] overflow-hidden bg-muted sm:aspect-[3/4]"
            >
              <Image
                src={department.image}
                alt={department.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-6">
                <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {department.name}
                </h3>

                <span className="flex size-10 items-center justify-center rounded-full border border-white/60 bg-black/10 backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[var(--derz-brown)]">
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </div>
            </AppLink>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
