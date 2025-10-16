"use client";
import React, { useEffect } from "react";
import { useSetState } from "react-use";
import useBearStore from "@/store/useGobal";
import { Button } from "antd";
import styles from "./index.module.css";
export default function Page({
  params,
}: {
  params: Promise<{ locale: string; level: string }>;
}) {
  // const { bears, setState, hydrated } = useBearStore();
  const bears = useBearStore((state) => state.bears);
  const hydrated = useBearStore((state) => state.hydrated);
  const setState = useBearStore((state) => state.setState);
  useEffect(() => {
    if (hydrated) {
      console.log(hydrated);
    }
  }, [hydrated]);
  return (
    <div>
      <div>{bears}</div>
      <div className={"w-[200px]"}>111111</div>
      <Button
        onClick={() => {
          setState((prev) => ({ bears: prev.bears + 1 }));
        }}
      >
        增加
      </Button>
    </div>
  );
}
