import ClubCard from '@/components/club-card'
import { Select, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectContent } from '@radix-ui/react-select'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/_app-layout/clubs')({
  component: RouteComponent,
})

type Club = {
    title: string
    category: string
    image: string
    description: string
}

function RouteComponent() {

    const clubs: Club[] = [
        {
          "title": "Muay Thai Club",
          "category": "Sports",
          "image": "https://bounce.photos/events/6797f6eacdb832966a64ea3e/cover-1738012417067.jpg",
          "description": "A community for students to train, spar, and learn the art of Muay Thai."
        },
        {
          "title": "Boxing Club",
          "category": "Sports",
          "image": "https://amsclubs.ca/boxing-club/wp-content/uploads/sites/405/2024/04/Club-Logo.jpg",
          "description": "A club focused on boxing technique, conditioning, and friendly sparring."
        },
        {
          "title": "Accounting Club",
          "category": "Academic",
          "image": "https://scontent-sea5-1.xx.fbcdn.net/v/t51.82787-15/582842972_18083033990091976_4962078095855600514_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qpzxoHsQ0VYQ7kNvwEIu0Ro&_nc_oc=AdkoKzURr_9syW7AsbxWx_vel_rfdgqlKTcq8flhhfBipEleoJ1aZosyD5gSc-ZCEXo&_nc_zt=23&_nc_ht=scontent-sea5-1.xx&_nc_gid=4rUUNl4IMe-LcEskAG2IhA&oh=00_AfiKkebGTLn5NziVUYBRWMZicxlaPuGisxzwkpESA2EGPg&oe=691F81DD",
          "description": "A group supporting students interested in accounting through workshops and networking."
        },
        {
          "title": "Running Club",
          "category": "Sports",
          "image": "https://runvan.org/wp-content/uploads/2018/07/18-2018-BMOVM.M.OutandBack-36.StunningRunning-BMOVancouverMarathon.RUNVAN%C2%AE.JeffBell.jpg",
          "description": "A club for runners of all levels to train together and join weekly runs."
        },
        {
          "title": "Computer Science Student Society",
          "category": "Academic",
          "image": "https://linktr.ee/og/image/ubc_csss.jpg",
          "description": "A student-led society offering events, resources, and support for CS students."
        },
        {
          "title": "Chinese Student Association",
          "category": "National",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVtp9e_tacBmmTwE6gjQGLcwpLPWS9KzqrQ&s",
          "description": "A cultural club celebrating Chinese heritage through social and community events."
        },
        {
          "title": "Outdoor Club",
          "category": "Sports",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vlaJcrM0hSzUs_l_SMmmYuGoY5fmH4ToRg&s",
          "description": "A group for students who enjoy hiking, camping, climbing, and outdoor adventures."
        },
        {
          "title": "Civil Engineering Club",
          "category": "Academic",
          "image": "https://ce-civil-2020.sites.olt.ubc.ca/files/2021/08/civil-club.jpg",
          "description": "A club providing academic support, industry connections, and social events for civil engineering students."
        },
        {
          "title": "Bike Club",
          "category": "Sports",
          "image": "https://recreation.ubc.ca/wp-content/uploads/2016/07/Cycling-3.png",
          "description": "A community for cyclists who enjoy group rides, bike maintenance, and exploring the city."
        }
      ]

      const [filter, setFilter] = useState("all")

      const filtered = clubs.filter(c =>
        filter === "all" ? true : c.category === filter
      )

    return (
        <div>
            <div className="p-4 flex w-full gap-8">
                <div>
                    <h1 className="text-2xl font-semibold">Clubs</h1>
                    <p className="text-muted-foreground">The world is your oyster.</p>
                </div>
                <Select value={filter} onValueChange={value => setFilter(value)}>
                    <SelectTrigger className="mt-2 w-[180px]">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent className='w-[180px] bg-white border rounded' position="popper">
                        <SelectGroup>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="Sports">Sports</SelectItem>
                            <SelectItem value="Academic">Academic</SelectItem>
                            <SelectItem value="National">International</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="pt-0 p-4 gap-4 flex flex-wrap h-screen w-full">
            {filtered.map((club, i) => (
                <ClubCard
                key={i}
                title={club.title}
                image={club.image}
                description={club.description}
                />
            ))}
            </div>
        </div>
    )
}
