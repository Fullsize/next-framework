"use client";
import React, { useEffect } from "react";
import { useSetState } from "react-use";
export default function Page({
  params,
}: {
  params: Promise<{ locale: string; level: string }>;
}) {
  const { locale, level } = React.use(params);
  const [state, setState] = useSetState({
    a: 1,
  });
  useEffect(() => {
    console.log(state.a);
  }, []);
  return (
    <div>
      {locale}
      {level}
    </div>
  );
}
