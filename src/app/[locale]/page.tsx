"use client";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const i18n = useTranslations();

  return (
    <div>
      <h1>{i18n("title")}</h1>
    </div>
  );
}
