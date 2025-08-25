import { Card, CardContent } from "@/components/ui/card";

const FacultyPage = () => {
  return(
    <>
      <div className="relative w-full bg-cover bg-center"
           style={{ backgroundImage: "url('/faculty_header.png')" }}>

        <div className="absolute inset-0 bg-white/60" />

        <div className="relative flex items-center flex-col">
          <h1 className="text-[5.5rem] font-bold">文学部</h1>
          <p className="mt-1 font-bold text-2xl font-serif tracking-tight">Faculty of Humanities</p>
          <p className="mt-10 font-normal max-w-2xl mb-10">説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文</p>
        </div>
      </div>
    </>
  );
};

export default FacultyPage;


//ここは学部ページ /faculty/nameでアクセスできる