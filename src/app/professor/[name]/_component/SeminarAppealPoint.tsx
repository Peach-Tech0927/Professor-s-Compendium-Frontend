// components/SeminarAppealPoint.tsx
import React from 'react';
import Image from 'next/image'; // Next.jsのImageコンポーネントを使用

interface SeminarAppealPointProps {
  description: string;
  images: string[];
}

const SeminarAppealPoint: React.FC<SeminarAppealPointProps> = ({
  description,
  images,
}) => {
  return (
    <section className="container mx-auto px-4 py-16">

      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* 左側のテキスト部分 */}
        <div className="md:w-1/2 text-lg leading-relaxed mb-8 md:mb-0">
          {description.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* 右側の画像部分 */}
        <div className="md:w-1/2 flex flex-col space-y-1">
          {images.map((imageSrc, index) => (
            <div key={index} className={`relative ${index % 2 === 0 ? 'self-start' : 'self-end'}`}>
              <Image
                src={imageSrc}
                alt="Seminar Appeal Point Image"
                width={300}
                height={200}
                className={`object-cover ${index % 2 === 0 ? 'rotate-5' : '-rotate-5'}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeminarAppealPoint;