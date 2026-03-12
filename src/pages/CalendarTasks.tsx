import React from "react";
import { Text } from "../components/common/text";

const BigCalendar = React.lazy(() =>
  import("../components/calendar/calendar-tasks").then((module) => ({
    default: module.BigCalendar,
  })),
);

export default function CalendarTasks() {
  return (
    <div className="flex flex-col space-y-7">
      <Text
        as="h1"
        variant="muted"
        className=" font-bold text-4xl text-muted-foreground"
      >
        Calendar
      </Text>
      <BigCalendar />
    </div>
  );
}
