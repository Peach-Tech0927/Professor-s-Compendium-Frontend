"use client";
import HeadLine from "@/components/HeadLine";
import Image from "next/image";
import { IdCard } from "lucide-react";
import { text } from "stream/consumers";


//パーソナル情報の各項目コンポーネント

type PersonalItemProps = {
  title: string;
  text: string;
  photo: string;
};

const PersonalItem: React.FC<PersonalItemProps> = ({ title, text, photo }: PersonalItemProps) => {
  return (
    <div className="p-4 m-4 max-w-md">
      <div className="flex items-center mb-2 text-[#FF8888]">
        <span className="text-xl mr-2">◆</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">{text}</p>
      <div className="w-full max-w-lg mx-auto">
        <Image
        /*一時的に画像を/ProfileExample.pngに変更*/
          /*src="/ProfileExample.png"*/
          src={photo}
          alt={`${title}の画像`}
          width={500}
          height={500}
        className="rounded-lg object-cover w-full h-auto"
      />
      </div>
    </div>
  );
};

//パーソナル情報の型定義

type PersonalItemData = {
  text: string;
  photo: string;
};

export type ProfessorPersonalData = {
  hobby: PersonalItemData;
  occupationalHazard: PersonalItemData;
  favoriteFood: PersonalItemData;
  personality: PersonalItemData;
  StudentDays: PersonalItemData;
  youtubeUrl?: string;
};

type ProfessorPersonalViewsProps = {
  personalData: ProfessorPersonalData;
}

const itemTitles:{[key:string]:string} = {
  hobby: "趣味",
  occupationalHazard: "職業病",
  favoriteFood: "好きな食べ物",
  personality: "性格",
  StudentDays: "学生時代"
};


//パーソナル情報view

const ProfessorPersonalView:React.FC<ProfessorPersonalViewsProps> = ({personalData})=>{
  const displayItems = Object.entries(personalData).filter(
    (entry):entry is [string, PersonalItemData] =>
      typeof entry[1] === "object" && entry[1] !== null && !!itemTitles[entry[0]]
  );

  return(
    <div className="mt-10">
      <HeadLine
        icon={<IdCard className="w-10 h-10"/>}
        title="パーソナル情報"
      />
      <div className="flex justify-center">
        <div className="mt-8 grid grid-cols-2 md:grid-cols-2 pl-6">
        {displayItems.length > 0 ? (
          displayItems.map(([key, value]) => (
            <PersonalItem
              key={key}
              title={itemTitles[key]}
              text={value.text}
              photo={value.photo}
            />
          ))
        ) : (
          <div className="flex-1 lg:pr-50 space-y-4 order-1 lg:order-2 px-6 lg:px-0">
            <p className="leading-loose">パーソナル情報がありません</p>
          </div>
          
        )}
        </div>
      </div>
      </div>
  );
};

export default ProfessorPersonalView;