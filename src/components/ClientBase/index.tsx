"use client";
import "@ant-design/v5-patch-for-react-19";
import { useEffect } from "react";
let hsRun = false;
export default function () {
  useEffect(() => {
    if (hsRun) return;
    hsRun = true;

    console.log("🌐 全局只执行一次", new Date().getTime());
    // 初始化 SDK
  }, []);
  return <></>;
}
