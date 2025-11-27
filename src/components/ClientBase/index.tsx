"use client";
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
