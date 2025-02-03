import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function BreadcrumbComponent({
  segments,
}: {
  segments: string[];
}) {
  const formatSegment = (segment: string): string =>
    segment
      .replace(/-/g, " ") // Replace dashes with spaces
      .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize each word

  const breadcrumbSegments = segments.length > 0 ? segments : ["home"];

  return (
    <BreadcrumbRoot size={"sm"}>
      {/* Always include "Home" breadcrumb as the root */}
      <BreadcrumbLink key="home" as={Link} href="/">
        Home
      </BreadcrumbLink>

      {breadcrumbSegments.map((segment, index) => {
        const href = `/${breadcrumbSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === breadcrumbSegments.length - 1;

        return isLast ? (
          <BreadcrumbCurrentLink key={href}>
            {formatSegment(segment)}
          </BreadcrumbCurrentLink>
        ) : (
          <BreadcrumbLink key={href} as={Link} href={href}>
            {formatSegment(segment)}
          </BreadcrumbLink>
        );
      })}
    </BreadcrumbRoot>
  );
}
