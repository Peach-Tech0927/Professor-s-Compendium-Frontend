// components/SeminarAppealPoint.tsx
import React from 'react';
import Image from 'next/image'; // Next.jsのImageコンポーネントを使用

interface SeminarAppealPointProps {
  appealPointText: string;
  appealPointImages: string[];
}

const SeminarAppealPoint: React.FC<SeminarAppealPointProps> = ({
  appealPointText,
  appealPointImages,
}) => {
  return (
    <section className="py-1">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* 左側のテキスト部分 */}
        <div className="md:w-1/2 leading-relaxed mb-8 md:mb-0">
          {appealPointText.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* 右側の画像部分 */}
        <div className="md:w-1/2 flex flex-col space-y-1">
          {appealPointImages.map((imageSrc, index) => (
            <div key={index} className={`relative ${appealPointImages.length === 1 ? 'self-center' : (index % 2 === 0 ? 'self-start' : 'self-end')}`}>
              <Image
                src={imageSrc}
                alt="Seminar Appeal Point Image"
                width={appealPointImages.length === 1 ? 500 : 300}
                height={appealPointImages.length === 1 ? 400 : 200}
                className={`object-cover ${appealPointImages.length === 1 ? '' : (index % 2 === 0 ? 'rotate-5' : '-rotate-5')}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeminarAppealPoint;