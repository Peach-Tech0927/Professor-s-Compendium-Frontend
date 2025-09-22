import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import {Button} from "@/components/ui/button"
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  const faculties = [
    { name: "経済学部", color: "#D6EFF9" },
    { name: "経営学部", color: "#D2C7E0" }, 
    { name: "法学部", color: "#D9E8A5" },
    { name: "文学部", color: "#F3D0D1" },
    { name: "国際文化共創学部", color: "#E8A8B1" },
    { name: "理工学部", color: "#FDF0D6" }
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
                <Button
                    key={faculty.name}
                    variant="outline"
                    className="relative w-full h-14 text-black rounded-sm shadow-md"
                    style={{ backgroundColor: faculty.color }}>
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold">{faculty.name}</span>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2"/>
                    <Link href={`/faculty/${faculty.name}`} className="absolute inset-0 z-10" />
                </Button>
            ))}
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
