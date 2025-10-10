// utils/useTClient.ts
import { useTranslations } from "next-intl";

export function useT() {
  // 强制类型转换为 TFunction
  return useTranslations();
}