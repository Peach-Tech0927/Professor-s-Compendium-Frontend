import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AppSidebar() {
  const faculties = [
    { name: "経済学部", color: "#D6EFF9" },
    { name: "経営学部", color: "#D2C7E0" },
    { name: "法学部", color: "#D9E8A5" },
    { name: "文学部", color: "#F3D0D1" },
    { name: "国際共創学部", color: "#E8A8B1" },
    { name: "理工学部", color: "#FDF0D6" },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-center p-4">
          <div className="flex flex-col items-center">
            <Image
              src="/KariPeachKun.png"
              width={100}
              height={100}
              alt="ピーチくん"
              className="mb-2"
            />
            <h1 className="text-2xl font-bold mb-2">
              成蹊大学
              <br />
              教授図鑑
            </h1>
            <p className="text-xs text-center">
              SEIKEI UNIVERSITY
              <br />
              PROFESSOR CATALOG
            </p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="w-full space-y-3">
            {faculties.map((faculty) => (
              <Button
                key={faculty.name}
                variant="outline"
                className="relative w-full h-12 text-black rounded-sm shadow-md"
                style={{ backgroundColor: faculty.color }}
              >
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                  {faculty.name}
                </span>
                <Link
                  href={`/faculty/${faculty.name}`}
                  className="absolute inset-0 z-10"
                />
              </Button>
            ))}
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="relative w-full h-35 flex items-center justify-center overflow-hidden">
          {/* ピンクの丸背景 */}
          <div className="absolute -bottom-12 -left-6 w-32 h-32 bg-pink-100 rounded-full" />
          <div className="absolute -bottom-20 left-15 w-50 h-50 bg-pink-100 rounded-full" />
          <div className="absolute top-5 left-12 w-6 h-6 bg-pink-100 rounded-full" />
          {/* テキスト */}
          <p className="text-xs font-bold text-center text-black drop-shadow-md mt-10">
            欅プロジェクト-2025
            <br />
            3S, Peach.Tech
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
