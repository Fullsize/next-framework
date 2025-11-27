import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ['en', 'zh', 'ja', 'ko', 'de', 'ar'],
  defaultLocale: "en",
  localePrefix: 'as-needed',
});

// export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
