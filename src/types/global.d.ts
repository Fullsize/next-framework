declare global {
  type pageProps = {
    params: Promise<{ locale: string;[key: string]: string; }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
}
// 必须添加这行，使文件被识别为模块扩展
export { };