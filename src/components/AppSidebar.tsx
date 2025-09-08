import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function AppSidebar() {
  const faculties = [
    { name: "経済学部", color: "#5BA7E5" },
    { name: "経営学部", color: "#7B59A3" }, 
    { name: "法学部", color: "#9CC715" },
    { name: "文学部", color: "#E88E91" },
    { name: "国際文化共創学部", color: "#C62F3E" },
    { name: "理工学部", color: "#F4A000" }
  ];

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
      <SidebarContent>
        <SidebarGroup>
          <div className="w-full space-y-4">
            {faculties.map((faculty) => (
              <button
                key={faculty.name}
                className="w-full hover:opacity-90 transition-opacity duration-200 rounded-lg px-6 py-4 flex items-center justify-center text-white font-bold"
                style={{ 
                  backgroundColor: faculty.color,
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)'
                }}
              >
                <span className="text-lg">{faculty.name}</span>
              </button>
            ))}
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
