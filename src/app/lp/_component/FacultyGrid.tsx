import FacultyCard from "./FacultyCard"

const facultyData = [
  {
    title: "教授 1",
    description: "専門分野についての説明文がここに入ります。研究内容や経歴などの詳細な情報を記載できます。",
    imageSrc: "/faculty1.jpg",
    imageAlt: "教授1の写真"
  },
  {
    title: "教授 2", 
    description: "専門分野についての説明文がここに入ります。研究内容や経歴などの詳細な情報を記載できます。",
    imageSrc: "/faculty2.jpg",
    imageAlt: "教授2の写真"
  },
  {
    title: "教授 3",
    description: "専門分野についての説明文がここに入ります。研究内容や経歴などの詳細な情報を記載できます。",
    imageSrc: "/faculty3.jpg", 
    imageAlt: "教授3の写真"
  },
  {
    title: "教授 4",
    description: "専門分野についての説明文がここに入ります。研究内容や経歴などの詳細な情報を記載できます。",
    imageSrc: "/faculty4.jpg",
    imageAlt: "教授4の写真"
  },
  {
    title: "教授 5",
    description: "専門分野についての説明文がここに入ります。研究内容や経歴などの詳細な情報を記載できます。",
    imageSrc: "/faculty5.jpg",
    imageAlt: "教授5の写真"
  }
]

export default function FacultyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[88px] md:gap-y-6 max-w-6xl mx-auto p-6">
      {facultyData.map((faculty, index) => (
        <FacultyCard
          key={index}
          title={faculty.title}
          description={faculty.description}
          imageSrc={faculty.imageSrc}
          imageAlt={faculty.imageAlt}
        />
      ))}
    </div>
  )
}