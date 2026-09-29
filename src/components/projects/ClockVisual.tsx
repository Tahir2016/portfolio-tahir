"use client";

import { useEffect, useState } from "react";

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const pad = (value: number) => String(value).padStart(2, "0");

const ClockVisual = () => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const time = now
    ? `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
    : "--:--:--";

  const date = now
    ? `${WEEKDAYS[now.getDay()]} · ${pad(now.getDate())} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`
    : "· · · · · · · · ·";

  return (
    <div aria-hidden className="rounded-lg border border-border bg-code px-6 py-10 text-center">
      <p className="font-mono text-4xl font-semibold tabular-nums tracking-tight text-foreground sm:text-5xl">
        {time}
      </p>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[12px]">
        {date}
      </p>
    </div>
  );
};

export default ClockVisual;