/**
 * 根据locale返回相应的方向。
 * 如果locale是阿拉伯语，则返回'rtl'，否则返回'ltr'。
 * @param {string} locale - 要获取方向的locale。
 * @returns {string} locale的方向。
 */
export const RTL_LANGS = new Set(["ar", "he", "fa", "ur", "ps", "sd", "dv", "ckb"]);
export function getDir(locale: string) {
  return RTL_LANGS.has(locale) ? "rtl" : "ltr";
}

/**
 * 检查给定的locale是否为从右到左（RTL）语言。
 * @returns {boolean} 如果locale是RTL语言，则返回true，否则返回false。
 */
export function isRTL(locale: string) {
  return RTL_LANGS.has(locale);
}