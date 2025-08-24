import { Card, CardContent } from "@/components/ui/card";

const FacultyPage = () => {
  return(
    <>
      <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/faculty_header.png')" }}
      >

        {/* 背景半透明 */}
        <div className="absolute inset-0 bg-white/40" />

        {/* 文章部分 */}
        <div className="relative flex items-center flex-col">
          <h1 className="text-[5.5rem] font-bold mt-20">文学部</h1>
          <p className="mt-1 font-bold text-2xl font-serif tracking-tight">Faculty of Humanities</p>
          <p className="mt-10 font-medium max-w-2xl">説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文</p>
        </div>
      </div>
    </>
  );
};

export default FacultyPage;


//ここは学部ページ /faculty/nameでアクセスできる