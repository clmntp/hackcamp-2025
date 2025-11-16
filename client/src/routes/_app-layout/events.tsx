import EventCard from '@/components/event-card'
import UpcomingEventCard from '@/components/upcoming-event-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app-layout/events')({
  component: RouteComponent,
})

type UpcomingEvent = {
    date: string
    title: string
    location: string
  }

  type Event = {
    date: string
    title: string
    location: string
    image: string
  }

function RouteComponent() {

    const upcomingEvents: UpcomingEvent[] = [
        {
          date: "Sunday, Nov 16",
          title: "nwPlus HackCamp",
          location: "Sauder Building"
        },
        {
          date: "Monday, Nov 17",
          title: "UBC Wellness Fair",
          location: "Nest Great Hall"
        },
        {
          date: "Tuesday, Nov 18",
          title: "Engineers Without Borders Meetup",
          location: "CEME Atrium"
        },
        {
          date: "Wednesday, Nov 19",
          title: "AMS Clubs Social Night",
          location: "The Pit Lounge"
        }
      ]

      const events: Event[] = [
        {
          date: "Sunday, Nov 16",
          title: "nwPlus HackCamp",
          location: "Sauder Building",
          image:
            "https://hackcamp.nwplus.io/assets/hero/mobile/mobile-back2.png"
        },
        {
          date: "Monday, Nov 17",
          title: "UBC Sustainability Expo",
          location: "The Nest Atrium",
          image: "https://pecb.com/wp-content/uploads/2025/07/green-sustainability.png"
        },
        {
          date: "Tuesday, Nov 18",
          title: "Business Networking Night",
          location: "Henry Angus 098",
          image: "https://sc-cms-prod103-cdn-dsb5cvath4adbgd0.z01.azurefd.net/-/media/images/astoncarter/insights/articles/benefits_of_networking_article_image-jpg.jpg?rev=d62d8ede82884f01a87392d384fc6808"
        }
      ]
    
    return (
        <div className="w-full flex">
            <div className="pt-0 p-4 flex flex-col gap-4 h-screen w-8/12">
                <div className="p-4 pl-2 pb-0">
                    <h1 className="text-2xl font-semibold">Events</h1>
                    <p className="text-muted-foreground">All the events at UBC.</p>
                </div>
                {events.map((e, i) => (
                    <EventCard
                    key={i}
                    date={e.date}
                    title={e.title}
                    location={e.location}
                    image={e.image}
                    />
                ))}
            </div>
            <div className="pt-0 -ml-2 p-4 flex flex-col gap-4 h-screen w-4/12">
                <div className="p-4 pl-2 pb-0">
                    <h1 className="text-2xl font-semibold">Your Upcoming Events</h1>
                    <p className="text-muted-foreground">Events happening soon for you.</p>
                </div>
                {upcomingEvents.map((event, i) => (
                    <UpcomingEventCard
                    key={i}
                    date={event.date}
                    title={event.title}
                    location={event.location}
                    />
                ))}
            </div>
        </div>
    )
}
