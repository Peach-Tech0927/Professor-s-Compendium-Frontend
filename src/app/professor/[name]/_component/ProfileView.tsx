import HeadLine from "@/components/HeadLine";
import Image from "next/image";
import { User, History } from "lucide-react";
import { CareerTimeline } from "../_component/CareerTimeline";

type ProfileViewProps = {
  profileText: string;
  profileImages: string[];
  careerHistory: {
    year: string;
    event: string;
    photo: string | null;
  }[];
};

const ProfileView = ({ profileText, profileImages, careerHistory }: ProfileViewProps) => {
  return (
    <>
      <div className="mt-10">
        <HeadLine
          icon={<User className="w-10 h-10 " fill="black" />}
          title="プロフィール"
        />
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-5">
          <div className="flex-shrink-0 order-2 lg:order-1">
            {profileImages && (
              <>
                <div className="lg:ml-50">
                  <Image
                    src={profileImages[0]}
                    alt="profile"
                    width={500}
                    height={400}
                    className="object-cover w-full max-w-[300px] lg:max-w-[500px] h-[240px] mx-auto lg:mx-0"
                  />
                </div>
                {profileImages.length > 1 && (
                  <div className="flex gap-1 lg:ml-50 mt-2 mb-5 justify-center lg:justify-start">
                    {profileImages.slice(1, 3).map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`profile-${index + 2}`}
                        width={248.5}
                        height={200}
                        className="object-cover w-full max-w-[145px] lg:max-w-[248.5px] h-[120px]"
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
          <div className="flex-1 lg:pr-50 space-y-4 order-1 lg:order-2 px-6 lg:px-0">
            <p className="leading-loose">
              {profileText || "プロフィール情報がありません"}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <HeadLine icon={<History className="w-9 h-9 " />} title="経歴" />
        <div className="mt-30">
          <CareerTimeline careerHistory={careerHistory} />
        </div>
      </div>
    </>
  );
};

export default ProfileView;
