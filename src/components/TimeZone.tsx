import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TimeZone: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-medium tracking-tight text-primary lg:text-6xl">
          Time Zone
        </CardTitle>
      </CardHeader>
      <CardContent className="p-1">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow justify-items-center"
        />
      </CardContent>
    </Card>
  );
};

export default TimeZone;
