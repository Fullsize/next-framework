import localforage from "localforage";
import { encrypt, decrypt } from './crypto'
// 配置 localforage 实例
const storage = localforage.createInstance({
  name: "default-storage-",
});

// 泛型化 getItem，提高类型安全
async function getItem<T>(key: string): Promise<T | null> {
  try {
    const value = await storage.getItem<string>(key);
    return value ? JSON.parse(decrypt(value)) as T : null;
  } catch (error) {
    console.error(`Failed to get item "${key}" from storage`, error);
    return null;
  }
}

async function setItem<T>(key: string, value: T): Promise<void> {
  try {
    await storage.setItem(key, encrypt(JSON.stringify(value)));
  } catch (error) {
    console.error(`Failed to set item "${key}" in storage`, error);
  }
}

async function removeItem(key: string): Promise<void> {
  try {
    await storage.removeItem(key);
  } catch (error) {
    console.error(`Failed to remove item "${key}" from storage`, error);
  }
}

// 导出接口
export default {
  getItem,
  setItem,
  removeItem,
};
