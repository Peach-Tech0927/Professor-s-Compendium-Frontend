import HeadLine from "@/components/HeadLine";
import Image from "next/image";
import { User } from "lucide-react";

const ProfileView = () => {
  return (
    <div className="mt-10">
      <HeadLine
        icon={<User className="w-10 h-10 " fill="black" />}
        title="プロフィール"
      />
      <div className="flex gap-10 mt-5">
        <div className="flex-shrink-0">
          <div className="ml-50">
            <Image
              src="/ProfileExample.png"
              alt="profile"
              width={500}
              height={400}
            />
          </div>
          <div className="flex gap-1 ml-50 mt-2 mb-5">
            <Image
              src="/ProfileExample.png"
              alt="profile"
              width={248.5}
              height={200}
            />
            <Image
              src="/ProfileExample.png"
              alt="profile"
              width={248.5}
              height={200}
            />
          </div>
        </div>
        <div className="flex-1 pr-50 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            2015年から近世文学のゼミを担当しています。芭蕉とその弟子たちの活躍した元禄・宝永期の俳諧を中心に研究しています。『元禄江戸俳壇の研究―蕉風と元禄諸派の俳諧』（ぺりかん社、2015年）
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
