import { useT } from "@/hooks";
import Image from "next/image";
import type { Metadata } from "next";
import React from "react";
import { Link } from "@/i18n/navigation";
export const metadata: Metadata = {
  title: "home",
  description: "...",
};
export async function generateStaticParams() {
  // 👇 这里返回的 locale 会用来静态生成 en 和 zh 的页面
  return [{ locale: "en" }, { locale: "zh" }];
}

export default function HomePage(props: pageProps) {
  const { params } = props;
  const t = useT();
  const { locale } = React.use(params);
  const a = React.use(props.searchParams);
  console.log(21, a);
  return (
    <>
      <h1 className="text-[red]">{t("title")}</h1>
      <p>当前语言：{locale}</p>
      <Link href={"/test"}> 1313131</Link>
    </>
  );
}
