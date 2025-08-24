import HeadLine from "@/components/HeadLine";
import Image from "next/image";
import { User } from "lucide-react";

interface ProfileViewProps {
  profileText: string;
  profileImages: string[];
}

const ProfileView = ({ profileText, profileImages }: ProfileViewProps) => {
  return (
    <div className="mt-10">
      <HeadLine
        icon={<User className="w-10 h-10 " fill="black" />}
        title="プロフィール"
      />
      <div className="flex gap-10 mt-5">
        <div className="flex-shrink-0">
          {profileImages && profileImages.length > 0 && (
            <>
              <div className="ml-50">
                <Image
                  src={profileImages[0]}
                  alt="profile"
                  width={500}
                  height={400}
                  className="object-cover"
                />
              </div>
              {profileImages.length > 1 && (
                <div className="flex gap-1 ml-50 mt-2 mb-5">
                  {profileImages.slice(1, 3).map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`profile-${index + 2}`}
                      width={248.5}
                      height={200}
                      className="object-cover"
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        <div className="flex-1 pr-50 space-y-4">
          <p className="leading-loose">
            {profileText || "プロフィール情報がありません"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
