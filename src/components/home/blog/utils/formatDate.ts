// app/blog/utils/formatDate.ts

const DEFAULT_LOCALE = "id-ID";

interface FormatDateOptions {
  locale?: string;
  options?: Intl.DateTimeFormatOptions;
}

export function formatDate(date: string | Date, config?: FormatDateOptions) {
  const locale = config?.locale ?? DEFAULT_LOCALE;

  const options: Intl.DateTimeFormatOptions = config?.options ?? {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
}
