import { AlignJustify } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

// const MenuIcon = () => {
//   return (
//     <>
//       <AlignJustify style={{ position: "fixed", top: 10, left: 10 }} />
//     </>
//   );
// };

// export default MenuIcon;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent />
    </Sidebar>
  );
}