import FacultyCard from "./_component/FacultyCard"

export default function LandingPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto">
        <FacultyCard 
          facultyName="経済学部"
          facultyDescription="現代社会の経済を多角的に学ぶ。"
          FacultyImage="https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop"
          departments={[
            {
              name: "経済経営学科",
              englishName: "Department of Economics and Management"
            },
            {
              name: "経済ファイナンス学科",
              englishName: "Department of Economics and Finance"
            },
            {
              name: "経済マネジメント学科",
              englishName: "Department of Economics and Management"
            },
            {
              name: "経済経済学科",
              englishName: "Department of Economics and Management"
            }
          ]}
        />
      </div>
    </div>
  )
}