import { useT } from "@/hooks";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog",
  description: "...",
};
export async function generateStaticParams() {
  // 👇 这里返回的 locale 会用来静态生成 en 和 zh 的页面
  return [{ locale: "en" }, { locale: "zh" }];
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const t = useT();

  return (
    <div>
      <h1>{t("title")}</h1>
      <Image src="/next.svg" width={200} height={80} alt="logo" />
      <p>当前语言：{params.locale}</p>
    </div>
  );
}
