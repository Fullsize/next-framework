import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import "normalize.css";
import "../globals.css";
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const awaitedParams = await params;
  const locale = awaitedParams.locale;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  // const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <div className="absolute left-0 top-0 w-full h-full flex flex-col">
          <Header />
          <div className="flex-1">
            <AntdRegistry>
              <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </AntdRegistry>
          </div>
        </div>
      </body>
    </html>
  );
}
