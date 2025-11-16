import { createFileRoute } from '@tanstack/react-router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SignupFormStudent } from '@/components/signup-form-account'
import { SignupFormClub } from '@/components/signup-form-club'

export const Route = createFileRoute('/signup/account')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Tabs defaultValue="student">
                    <TabsList className="mb-4 self-center">
                        <TabsTrigger value="student">Student</TabsTrigger>
                        <TabsTrigger value="club-organizer">Club Organizer</TabsTrigger>
                    </TabsList>
                    <TabsContent value="student">
                        <SignupFormStudent/>
                    </TabsContent>
                    <TabsContent value="club-organizer">
                        <SignupFormClub/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
