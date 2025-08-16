"use client";
import { useParams } from "next/navigation";
import mockData from "@/data/mock-db.json";
import Image from "next/image";
import { BookOpen, FlaskConical, Users, Award } from "lucide-react";
import Link from "next/link";

export default function ProfessorPage() {
  const params = useParams();
  const professorId = params.name as string;

  // mockdataから教授の基本情報を取得
  const basicInfo = mockData.find(
    (item) =>
      item.PK?.startsWith("FACULTY#") && item.SK === `PROF#${professorId}`
  );

  // メタデータを取得
  const metadata = mockData.find(
    (item) => item.PK === `PROF#${professorId}` && item.SK === "METADATA"
  );

  // 研究会情報を取得
  const seminar = mockData.find(
    (item) => item.PK === `PROF#${professorId}` && item.SK === "SEMINAR"
  );

  if (!basicInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">教授が見つかりませんでした</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center m-20">
      <div className="flex border-1 border-[#D5A5A5] rounded-2xl overflow-hidden relative">
        <Link href={metadata?.socialLinks?.x || ""}>
          <Image
            src={"/xIcon.png"}
            alt={"xのアイコン"}
            width={28}
            height={28}
            className="absolute bottom-5 right-8"
          />
        </Link>
        <Link href={metadata?.socialLinks?.facebook || ""}>
          <Image
            src={"/facebookIcon.png"}
            alt={"facebookのアイコン"}
            width={32}
            height={34}
            className="absolute bottom-4 right-19"
          />
        </Link>
        <div className="bg-[#f3c4c5] px-10 py-3">
          <Image
            src={basicInfo.mainPhoto || ""}
            alt={basicInfo.professorName || ""}
            width={125}
            height={300}
          />
        </div>
        <div className="bg-[#fffafa] py-4 pl-20 pr-80 py-10">
          <p className="text-6xl mt-7">{metadata?.professorName}</p>
          <p
            className="text-4xl mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-roboto-slab)" }}
          >
            {metadata?.professorNameRoma}
          </p>
          <div className="flex flex-col gap-2">
            {/*TODO: 学部情報をデータから持ってくる*/}
            <div className="flex gap-2 mt-4">
              <BookOpen className="w-6 h-6 stroke-1" />
              <p>文学部</p>
            </div>
            <div className="flex gap-2">
              <FlaskConical className="w-6 h-6 stroke-1" />
              <p>{seminar?.seminarName || "研究会情報なし"}</p>
            </div>
            <div className="flex gap-2">
              <Users className="w-6 h-6 fill-black stroke-1" />
              <p>{metadata?.post}</p>
            </div>
            <div className="flex gap-2">
              <Award className="w-6 h-6 stroke-1" />
              <p>{metadata?.ResearchField}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
