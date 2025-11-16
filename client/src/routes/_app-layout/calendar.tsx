import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app-layout/calendar')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app-layout/calendar"!</div>
}
