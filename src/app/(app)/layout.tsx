"use client";
import BreadcrumbComponent from "@/components/common/BreadcrumbComponent";
import ContainerComponent from "@/components/common/ContainerCompoennt";
import Header from "@/components/common/Header";
import { usePathname } from "next/navigation";
export default function AppLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const segments = pathName.split("/").filter((segment) => segment);
  return (
    <Header>
      <ContainerComponent>
        <BreadcrumbComponent segments={segments} />
        {children}
      </ContainerComponent>
    </Header>
  );
}
