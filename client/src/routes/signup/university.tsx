import { createFileRoute } from '@tanstack/react-router'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/signup/university')({
  component: UniversityComponent,
})

export default function UniversityComponent() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">Select your institution.</CardTitle>
                        <CardDescription>
                            Choose one of the institutions listed that you attend.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-6">
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select an institution." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="ubc">University of British Columbia</SelectItem>
                                    <SelectItem value="ubc">University of Toronto </SelectItem>
                                    <SelectItem value="ubc">McGill University</SelectItem>
                                    <SelectItem value="ubc">University of Alberta</SelectItem>
                                    <SelectItem value="ubc">McMaster University</SelectItem>
                                    <SelectItem value="ubc">University of Waterloo</SelectItem>
                                    <SelectItem value="ubc">Queen’s University</SelectItem>
                                    <SelectItem value="ubc">Western University</SelectItem>
                                    <SelectItem value="ubc">University of Calgary</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Button asChild className="text-sm">
                            <a href="/signup/account">Next</a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}