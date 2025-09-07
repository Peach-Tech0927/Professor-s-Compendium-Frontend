"use client";
import Image from "next/image";

type ProfessorCardProps = {
  professorName: string;
  professorNameRoma: string;
  department: string;
  researchTheme: string;
  officeLocation: string;
}

export default function ProfessorCard({
  professorName,
  professorNameRoma,
  department,
  researchTheme,
  officeLocation,
}: ProfessorCardProps) {
  return (
    <div className="w-full sm:w-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex flex-row rounded-lg h-full">
        {/* プロフィール画像欄 */}
        <div className="bg-muted-519 bg-[#f3c7c8] w-40 flex-shrink-0 rounded-lg">
          <div className="relative h-48 w-full mt-4">
            <Image 
              src={"/ElenaFuji.png"} 
              alt={`${professorName}のプロフィール写真`} 
              className="object-contain rounded-lg"
              fill
              sizes="160px"
            />
          </div>
        </div>
        {/* プロフィールテキスト欄 */}
        <div className="flex-1 ml-4 lg: mt-10 p-4 relative">
          <div className="mb-4">
            <h3 className="text-sm text-[#000]/70">名前</h3>
            <div><h4 className="text-lg">{professorName} - {professorNameRoma}</h4></div>
          </div>  
          <div className="mb-4">
            <h3 className="text-sm text-[#000]/70">在籍</h3>
            <div><h4 className="text-lg">{department}</h4></div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-[#000]/70">研究テーマ</h3>
            <div><h4 className="text-lg">{researchTheme}</h4></div>
          </div>
          {/* 研究室No */}
          <div className="flex flex-row items-end justify-end text-[#bfbfbf] w-full "
            style={{ minHeight: '3.5rem' }}
          >
            <span
              className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold mr-1"
              style={{ writingMode: 'vertical-rl' }}
            >
              研究室
            </span>
            <span className="text-xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold">
              {officeLocation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


