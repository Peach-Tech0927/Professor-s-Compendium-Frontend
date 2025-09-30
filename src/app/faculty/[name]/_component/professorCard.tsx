"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type ProfessorCardProps = {
  professorName: string;
  professorNameRoma: string;
  department: string;
  researchTheme: string;
  officeLocation: string;
  mainPhoto: string;
  hoverPhoto: string;
}

export default function ProfessorCard({
  professorName,
  professorNameRoma,
  department,
  researchTheme,
  officeLocation,
  mainPhoto,
  hoverPhoto,
}: ProfessorCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <div className="w-full sm:w-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex flex-row rounded-lg h-full">
        <div className="bg-muted-519 bg-[#f3c7c8] w-40 flex-shrink-0 rounded-lg pl-7  ">
          <div
            className="relative h-48 w-full pt-2"
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
          >
          <Image
        src={
       isHovered && !isMobile
        ? hoverPhoto ?? mainPhoto ?? '/ProfileExample.png'
         : mainPhoto ?? '/ProfileExample.png'
    }
    alt={`${professorName ?? "不明"}のプロフィール写真`}
    className="rounded-lg transition-all duration-300"
    width={isHovered && !isMobile ? 120 : 100}
    height={isHovered && !isMobile ? 120 : 100}
  />

          </div>
        </div>
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
          <div className="flex flex-row items-end justify-end text-[#bfbfbf] w-full "
            style={{ minHeight: '3.5rem' }}
          >
            <span
              className="text-xs sm:text-sm md:text-sm lg:text-lg font-semibold mr-1"
              style={{ writingMode: 'vertical-rl' }}
            >
              研究室
            </span>
            <span className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold">
              {officeLocation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


