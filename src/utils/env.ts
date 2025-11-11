export const isClient = typeof window !== "undefined";
export const isProd = process.env.NODE_ENV === "production";