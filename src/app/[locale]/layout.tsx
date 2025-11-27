import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import QueryClientProvider from "@/components/QueryClientProvider";
import ClientBase from "@/components/ClientBase";
import { getDir } from "@/utils/lang";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "normalize.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "../globals.css";
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: pageProps["params"];
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
    <html lang={locale} dir={getDir(locale)}>
      <body>
        <div className="w-full h-full absolute top-0 left-0">
          {/* 用于一次处理 */}
          <ClientBase />
          <AntdRegistry>
            <NextIntlClientProvider>
              <PrimeReactProvider>
                <QueryClientProvider>{children}</QueryClientProvider>
              </PrimeReactProvider>
            </NextIntlClientProvider>
          </AntdRegistry>
        </div>
      </body>
    </html>
  );
}
