import { MapPin } from "lucide-react"

type EventCardProps = {
  date: string
  title: string
  location: string
  image: string
}

export default function EventCard({
  date,
  title,
  location,
  image
}: EventCardProps) {
  return (
    <div className="flex flex-col p-4 border rounded h-min w-full">
      <img
        src={image}
        className="w-full h-32 object-cover rounded mb-4"
      />
      <p className="text-muted-foreground text-sm">{date}</p>
      <h2 className="text-xl font-medium mb-1">{title}</h2>
      <div className="flex items-center gap-1">
        <MapPin className="w-4 h-4" />
        <p className="text-muted-foreground text-sm">{location}</p>
      </div>
    </div>
  )
}