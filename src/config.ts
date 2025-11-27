export default {
  isClient: typeof window !== "undefined",
  isProd: process.env.NODE_ENV === "production",
}