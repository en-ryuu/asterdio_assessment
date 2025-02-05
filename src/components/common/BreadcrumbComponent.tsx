import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "@/components/ui/breadcrumb";
import { navigationRoutes } from "@/config/navigationroutes";
import { decodeSlug } from "@/utils/slugGenerator";
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

  const breadcrumbSegments = segments.length > 0 ? segments : [];

  return (
    <BreadcrumbRoot size={"sm"}>
      {/* Always include "Home" breadcrumb as the root */}
      {segments.length > 0 ? (
        <BreadcrumbCurrentLink>Home</BreadcrumbCurrentLink>
      ) : (
        <BreadcrumbLink key="home" as={Link} href={navigationRoutes.home}>
          Home
        </BreadcrumbLink>
      )}

      {breadcrumbSegments.map((segment, index) => {
        const href = `/${breadcrumbSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === breadcrumbSegments.length - 1;
        const decodedSegment =
          segment.includes("_") || segment.includes("%")
            ? decodeSlug(segment)
            : segment;

        const formattedSegment = formatSegment(decodedSegment);
        return isLast ? (
          <BreadcrumbCurrentLink key={href}>
            {formattedSegment}
          </BreadcrumbCurrentLink>
        ) : (
          <BreadcrumbLink key={href} as={Link} href={href}>
            {formattedSegment}
          </BreadcrumbLink>
        );
      })}
    </BreadcrumbRoot>
  );
}
