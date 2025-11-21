"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Toast, type ToastState } from "primereact/toast";
import { Button } from "primereact/button";
import { ButtonGroup } from "primereact/buttongroup";
import { useCallback, useRef, useState } from "react";
import { useCounter } from "primereact/hooks";
export default function () {
  const { count, increment, decrement, reset } = useCounter(0, {
    min: 0,
    max: 10,
    step: 1,
  });
  const queryClient = useQueryClient();
  const totalRef = useRef<Toast>(null);
  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["test", count],
    enabled: count != undefined,
    queryFn: async ({ queryKey }) => {
      const [_key, stateValue] = queryKey;
      if (stateValue === undefined) {
        throw new Error("stateValue cannot be undefined");
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve("test count: " + stateValue);
          } catch (error) {
            reject(error);
          }
        }, 1000);
      });
    },
  });
  const mutation = useMutation({
    mutationFn: async () => {
      await queryClient.invalidateQueries({ queryKey: ["test"] });
    },
    onSuccess: () => {
      successShow();
    },
  });
  const successShow = useCallback(() => {
    totalRef.current?.show({
      severity: "success",
      summary: "Success",
      detail: "刷新成功",
      life: 3000,
    });
  }, [totalRef.current]);
  // if (isLoading || isFetching) {
  //   return <div>loading...</div>;
  // }
  return (
    <div className="w-4/12 mx-auto mt-3">
      <Toast ref={totalRef} position="top-right" />
      <div>显示测试内容：{isFetching ? "loading..." : "" + data}</div>
      <ButtonGroup>
        <Button onClick={increment} raised>
          增加
        </Button>
        <Button onClick={decrement} severity="danger" raised>
          减少
        </Button>
        <Button onClick={() => mutation.mutate()} raised>
          重新请求(可追踪)
        </Button>
        <Button
          onClick={() => queryClient.invalidateQueries({ queryKey: ["test"] })}
          raised
        >
          重新请求
        </Button>
      </ButtonGroup>
    </div>
  );
}
