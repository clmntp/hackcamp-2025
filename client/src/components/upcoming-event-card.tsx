import { MapPin } from "lucide-react"

type UpcomingEventCardProps = {
    date: string
    title: string
    location: string
  }
  
  export default function UpcomingEventCard({
    date,
    title,
    location
  }: UpcomingEventCardProps) {
    return (
      <div className="flex flex-col p-4 border rounded h-min w-full">
        <p className="text-muted-foreground text-sm">{date}</p>
        <h2 className="text-xl font-medium mb-1">{title}</h2>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <p className="text-muted-foreground text-sm">{location}</p>
        </div>
      </div>
    )
  }