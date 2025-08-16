
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface FacultyCardProps {
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
}

export default function FacultyCard({ 
  title = "タイトル", 
  description = "ここにテキストの内容が入ります。画像と横並びで表示されます。長いテキストでも適切に調整されます。",
  imageSrc = "/your-image.jpg",
  imageAlt = "説明画像"
}: FacultyCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
        
        <div className="flex-shrink-0 w-[20vw] min-w-[150px] max-w-[250px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={200}
            height={150}
            className="rounded-lg w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </Card>
  )
}