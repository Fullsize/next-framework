"use client";
import React, { useEffect } from "react";
import { useSetState } from "react-use";
import useBearStore from "@/store/useGobal";
import { Button } from "antd";
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
    console.log(16, hydrated);
  }, [hydrated]);
  return (
    <div>
      <div>{bears}</div>
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
