import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-center p-4">
          <div className="flex flex-col items-center">
            <Image
              src="/KariPeachKun.png"
              width={150}
              height={150}
              alt="ピーチくん"
              className="mb-2"
            />
            <h1 className="text-3xl font-bold mb-2">
              成蹊大学
              <br />
              教授図鑑
            </h1>
            <p className="text-s text-center">
              SEIKEI UNIVERSITY
              <br />
              PROFESSOR CATALOG
            </p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent />
    </Sidebar>
  );
}
