import Navbar from '@/components/navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="100vw h-screen">
            <Navbar/>
            <div className="flex pl-6 pt-48 h-full">
                <h1 className="text-6xl font-medium">The app that unifies it all.</h1>
            </div>
        </div>
    )
}
