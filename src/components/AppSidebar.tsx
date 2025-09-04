import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-center p-4">
          <div className="flex flex-col items-center">
            <img
              src="/KariPeachKun.png"
              alt="ピーチくん"
              className="mb-2"
              style={{ width: "75%" }}
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