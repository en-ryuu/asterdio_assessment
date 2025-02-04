"use client";
import BreadcrumbComponent from "@/components/common/BreadcrumbComponent";
import AppLayoutWrapper from "@/components/layouts/AppLayoutWrapper";
import ContainerComponent from "@/components/layouts/ContainerCompoennt";
import { usePathname } from "next/navigation";
export default function AppLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const segments = pathName.split("/").filter((segment) => segment);
  return (
    <AppLayoutWrapper>
      <ContainerComponent>
        <BreadcrumbComponent segments={segments} />
        {children}
      </ContainerComponent>
    </AppLayoutWrapper>
  );
}
