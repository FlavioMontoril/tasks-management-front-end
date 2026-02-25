import { BigCalendar } from "../Components/calendar/calendar-tasks"
import { Text } from "../Components/common/text"

export default function CalendarTasks() {
    console.log("Calendar")
    return (
        <div className="flex flex-col space-y-20 h-200">
            <Text
                as="h1"
                variant="muted"
                className=" font-bold text-4xl text-muted-foreground"
            >
                Calendar
            </Text>
            <BigCalendar />
        </div>
    )
}