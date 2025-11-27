import { useT } from "@/hooks";
import "normalize.css";
import "./globals.scss";
export default function () {
  const t = useT();
  return (
    <div>
      <h1 className="text-[red]">{t("title")}</h1>
      <h1>404</h1>
      <a href="/">
        <h1>返回首页</h1>
      </a>
    </div>
  );
}
