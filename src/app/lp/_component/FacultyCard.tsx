
import Image from 'next/image'

type Department = {
  name: string;
  englishName: string;
}

type FacultyCardProps = {
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
    <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-lg">
      <div className=" flex flex-col lg:flex-row rounded-lg">
        <div className=" bg-[#5BA7E5] w-full lg:w-96 p-6 lg:p-8 flex items-center rounded-lg">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2 text-white">
            {facultyName}
          </h2>
          <p className="leading-relaxed text-white">
            {facultyDescription}
          </p>
        </div>
      </div>
        <div className="w-full lg:w-96 flex-shrink-0 p-6"> 
          <div className="relative h-48 w-full mb-4">
            <Image 
              src={FacultyImage} 
              alt={facultyName}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1024px) 100vw, 384px"
            />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-2">
              学科一覧
            </h3>
            <div className="space-y-2">
              {departments.map((dept, index) => (
                <div key={index} className="border-l-4 border-[#5BA7E5] pl-3 py-1">
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
    </div>
    
  )
}