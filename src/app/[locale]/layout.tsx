import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import ClientBase from "@/components/ClientBase";
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
  // side is the easiest way to get started. NEXT_LOCALE
  // const messages = await getMessages();
  return (
    <html lang={locale} dir="" style={{ fontSize: 20 }}>
      <body>
        <div className="w-full h-full absolute top-0 left-0">
          <ClientBase />
          <AntdRegistry>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </AntdRegistry>
        </div>
      </body>
    </html>
  );
}
