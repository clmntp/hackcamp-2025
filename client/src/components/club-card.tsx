type ClubCardProps = {
    title: string
    image: string
    description: string
}

export default function ClubCard({ title, image, description }: ClubCardProps) {

    return (
        <div className="flex flex-col p-4 border rounded h-min gap-2 w-56">
            <img src={image}
            className="w-full aspect-2/3 rounded"
            />
            <h2 className="text-xl font-medium mt-1">{title}</h2>   
            <p className="text-muted-foreground text-sm -mt-2">{description}</p>
        </div>
    )
}