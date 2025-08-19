"use client";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProfessorCard = () => {
  return (
    <div>
      <div className="flex max-w-lg rounded-lg border shadow-md relative">
        {/* プロフィール画像欄 */}
        <div className="w-40 flex-shrink-0">
          <AspectRatio ratio={9 / 16} className="bg-muted-519 bg-[#f3c7c8] rounded-lg border shadow-md m-2">
          <Image 
            src="/ElenaFuji.png" 
            alt="プロフィール写真" 
            className="rounded-md object-contain"
            fill
          />
          </AspectRatio>
        </div>
       {/* プロフィールテキスト欄 */}
        <div className="flex-1 p-4">
        <div className="mb-4">
          <h3 className="text-sm text-[#000]/70">名前</h3>
          <div><h4 className="text-lg">藤井エレナ - Fuji Elena</h4></div>
        </div>
          <div className="mb-4">
          <h3 className="text-sm text-[#000]/70">在籍</h3>
        <div><h4 className="text-lg">現代社会学科</h4></div>
        </div>
        <div className="mb-4">
          <h3 className="text-sm text-[#000]/70">研究テーマ</h3>
          <div><h4 className="text-lg">ナラティブ・サイコロジー</h4></div>
        </div>
        {/* 研究室No */}
        <div className="absolute bottom-2 right-2 flex-1 flex-col items-end text-[#bfbfbf]">
            <span className="text-base font-semibold" style={{ writingMode: 'vertical-rl' }}>研究室</span>
            <span className="text-5xl font-semibold">1014</span>
          </div>
      </div>
    </div>
    </div>
  );
};

export default ProfessorCard;
