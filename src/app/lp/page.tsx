import FacultyGrid from "./_component/FacultyGrid"

export default function LandingPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Faculty Members</h1>
        <FacultyGrid />
      </div>
    </div>
  )
}