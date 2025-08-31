import { Dice1 } from 'lucide-react';
import Image from 'next/image'

interface Department {
  name: string;
  englishName: string;
}

interface FacultyCardProps {
  facultyName: string;
  facultyDescription: string;
  FacultyImage: string;
  departments: Department[];
}

export default function FacultyCard({ 
  facultyName, 
  facultyDescription, 
  FacultyImage, 
  departments 
}: FacultyCardProps) {
  return (
    <div className=" w-3/5 bg-white rounded-lg shadow-lg">
      {/* デスクトップ：横並び、モバイル：縦並び */}
      <div className="flex flex-col lg:flex-row">
        {/* カード内容（左側） */}
        <div className="bg-blue-200 w-full lg:w-96 p-6 lg:p-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 ">
            {facultyName}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {facultyDescription}
          </p>
        </div>
      </div>
        {/* 写真と学科一覧（右側） */}
        <div className="w-full lg:w-96 flex-shrink-0 p-6"> 
          {/* 写真コンポーネント */}
          <div className="relative h-48 w-full mb-4">
            <Image 
              src={FacultyImage} 
              alt={facultyName}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1024px) 100vw, 384px"
            />
          </div>
          
          {/* 学科一覧 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              学科一覧
            </h3>
            {departments.map((dept, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-3 py-1">
                <div className="font-medium text-gray-800">
                  {dept.name}
                </div>
                <div className="text-sm text-gray-500 break-words leading-relaxed">
                  {dept.englishName}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}