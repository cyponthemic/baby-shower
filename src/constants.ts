export const EVENT = {
  hosts: {
    first: "Belle",
    second: "Alex",
    full: "Belle & Alex",
  },
  title: "PARENT PICNIC",
  tagline: "bring a camping chair or a picnic rug, and come send us off to parenthood",
  date: {
    day: "Saturday",
    dayNumber: 13,
    month: "December",
    monthNumber: 12,
    year: 2025,
    time: "10:30 a.m",
    timeFormatted: "10:30.a.m",
    // For ICS file
    startTime: "20251213T103000",
    endTime: "20251213T143000",
  },
  location: "Edinburgh Gardens",
  formName: "baby-shower-rsvp",
} as const;

function getOrdinalSuffix(n: number): string {
  const j = n % 10;
  const k = n % 100;
  if (j === 1 && k !== 11) return "st";
  if (j === 2 && k !== 12) return "nd";
  if (j === 3 && k !== 13) return "rd";
  return "th";
}

export const COPY = {
  invitation: {
    hostsLine: `${EVENT.hosts.full} are throwing a`,
    title: EVENT.title,
    tagline: EVENT.tagline,
    dateLine: `${EVENT.date.day.toLowerCase()}, ${EVENT.date.month.toLowerCase()} ${EVENT.date.dayNumber}${getOrdinalSuffix(EVENT.date.dayNumber)},`,
    timeLocationLine: `${EVENT.date.timeFormatted}, ${EVENT.location.toLowerCase()}`,
  },
  form: {
    dateLabel: "Date:",
    dateValue: `${EVENT.date.day} ${EVENT.date.dayNumber} ${EVENT.date.month}, ${EVENT.date.time}`,
    locationLabel: "Location:",
    locationValue: EVENT.location,
  },
  thanks: {
    title: "Thanks for your RSVP 💌",
    message: "We've received your details and can't wait to see you at the parent picnic.",
    calendarPrompt: "Add it to your calendar so you don't forget:",
    calendarButton: "Add to calendar",
    dateLine: `${EVENT.date.day} ${EVENT.date.dayNumber} ${EVENT.date.month}, ${EVENT.date.time}`,
    locationLine: EVENT.location,
  },
} as const;

