import Image from "next/image";
import { BookOpen, FlaskConical, Users, Award } from "lucide-react";
import Link from "next/link";

type ProfessorProfileCardProps = {
  xLink: string;
  facebookLink: string;
  professorName: string;
  professorNameRoma: string;
  faculty: string;
  seminarName: string;
  post: string;
  researchField: string;
  mainPhotoUrl: string;
};

const ProfessorProfileCard: React.FC<ProfessorProfileCardProps> = ({
  xLink,
  facebookLink,
  professorName,
  professorNameRoma,
  faculty,
  seminarName,
  post,
  researchField,
  mainPhotoUrl,
}) => {
  return (
    <div className="flex justify-center m-20">
      <div className="flex border-1 border-[#D5A5A5] rounded-2xl overflow-hidden relative">
        <Link href={xLink}>
          <Image
            src={"/xIcon.png"}
            alt={"xのアイコン"}
            width={28}
            height={28}
            className="absolute bottom-5 right-8"
          />
        </Link>
        <Link href={facebookLink}>
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
            src={mainPhotoUrl}
            alt={professorName}
            width={125}
            height={300}
          />
        </div>
        <div className="bg-[#fffafa] py-4 pl-20 pr-80 py-10">
          <p className="text-6xl mt-7">{professorName}</p>
          <p
            className="text-4xl mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-roboto-slab)" }}
          >
            {professorNameRoma}
          </p>
          <div className="flex flex-col gap-2">
            {/*TODO: 学部情報をデータから持ってくる*/}
            <div className="flex gap-2 mt-4">
              <BookOpen className="w-6 h-6 stroke-1" />
              <p>{faculty}</p>
            </div>
            <div className="flex gap-2">
              <FlaskConical className="w-6 h-6 stroke-1" />
              <p>{seminarName || "研究室情報なし"}</p>
            </div>
            <div className="flex gap-2">
              <Users className="w-6 h-6 fill-black stroke-1" />
              <p>{post}</p>
            </div>
            <div className="flex gap-2">
              <Award className="w-6 h-6 stroke-1" />
              <p>{researchField}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorProfileCard;
