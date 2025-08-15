"use client";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProfessorCard = () => {
  return (
    <div>
      <div className="flex max-w-lg rounded-lg border shadow-md relative">
        {/* プロフィール画像欄 */}
        <div className="w-40 flex-shrink-0">
          <AspectRatio ratio={9 / 16} className="bg-muted-519 bg-rose-300 rounded-lg border shadow-md m-2">
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
          <h3 className="text-sm font-semibold text-gray-500">名前</h3>
          <div><h4 className="text-lg font-semibold">藤井エレナ - Fuji Elena</h4></div>
        </div>
          <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-500">在籍</h3>
        <div><h4 className="text-lg font-semibold">現代社会学科</h4></div>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-500">研究テーマ</h3>
          <div><h4 className="text-lg font-semibold">ナラティブ・サイコロジー</h4></div>
        </div>
        {/* 研究室No */}
        <div className="absolute bottom-2 right-2 flex-1 flex-col items-end mix-blend-difference">
            <span className="text-base text-gray-500 font-semibold" style={{ writingMode: 'vertical-rl' }}>研究室</span>
            <span className="text-5xl text-gray-500 font-semibold">1014</span>
          </div>
      </div>
    </div>
    </div>
  );
};

export default ProfessorCard;
