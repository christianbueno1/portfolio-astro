import { datetimeFormatOptions, localesLanguage } from "./constants";

export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

// get the time of a country formatted
export function getCountryTime(): string {
  const time = new Intl.DateTimeFormat(localesLanguage, datetimeFormatOptions).format(new Date());
  return time;
}


export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
