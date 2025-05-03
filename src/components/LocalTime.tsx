import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as React from "react";

const LocalTime: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [currentTime, setCurrentTime] = React.useState<string>("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Ho_Chi_Minh",
      }).format(now);
      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-medium tracking-tight text-primary lg:text-6xl">
          Local time
        </CardTitle>
      </CardHeader>
      <CardContent className="p-1">
        <div className="flex items-center space-x-2 p-4 text-base">
          <p className="font-medium">Ha Noi, VN</p>
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-white" />
          </span>
          <p className="text-muted-foreground">{currentTime}</p>
        </div>

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

export default LocalTime;
