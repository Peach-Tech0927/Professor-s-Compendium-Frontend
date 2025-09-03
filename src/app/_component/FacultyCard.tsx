
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
  cardColor: string;
}

export default function FacultyCard({ 
  facultyName, 
  facultyDescription, 
  FacultyImage, 
  departments,
  cardColor
}: FacultyCardProps) {
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-lg h-full">
      <div className=" flex flex-col lg:flex-row rounded-lg">
      <div className="w-full lg:w-96 p-6 lg:p-8 flex items-center rounded-lg lg:h-86" 
  style={{ backgroundColor: cardColor }}
>
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
          
          <div>
            <div className="border-l-4 pl-3 py-1" style={{ borderLeftColor: cardColor }}>
              <div className="font-medium text-gray-800">
                {departments.map(d => d.name).join(' / ')}
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
    
  )
}