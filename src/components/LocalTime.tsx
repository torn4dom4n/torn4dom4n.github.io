import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

      const vnTime = new Date(
        new Intl.DateTimeFormat("en-CA", {
          timeZone: "Asia/Ho_Chi_Minh",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(now),
      );

      setDate((prevDate) => {
        if (!prevDate || prevDate.toDateString() !== vnTime.toDateString()) {
          return vnTime;
        }
        return prevDate;
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-normal tracking-tight text-primary md:text-4xl lg:text-6xl">
          Local time
        </CardTitle>
      </CardHeader>

      <CardContent className="p-1 flex flex-col items-center">
        <div className="flex justify-center items-center space-x-3 p-4 text-base w-full">
          <p className="font-medium">Ha Noi, VN</p>
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-white" />
          </span>
          <p className="text-muted-foreground">{currentTime}</p>
        </div>

        <div className="flex justify-center w-full overflow-hidden">
          <Calendar
            mode="single"
            selected={date}
            onSelect={() => {}}
            className="rounded-md border shadow"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default LocalTime;
