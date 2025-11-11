// utils/aes-client.ts
import CryptoJS from 'crypto-js';
import { isProd } from './env'
const KEY_STR = '12345678901234567890123456789012'; // 32 字节
const KEY = CryptoJS.enc.Utf8.parse(KEY_STR);

/**
 * AES 加密，返回 Hex 字符串（前 32 字符是 IV）
 */
export function encrypt(text: string): string {
  if (!isProd) return text
  // 生成随机 IV
  const iv = CryptoJS.lib.WordArray.random(16);
  const encrypted = CryptoJS.AES.encrypt(text, KEY, { iv, mode: CryptoJS.mode.CBC });

  // 拼接 IV + 密文
  return iv.toString(CryptoJS.enc.Hex) + encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}

/**
 * AES 解密 Hex 字符串
 */
export function decrypt(data: string): string {
  if (!isProd) return data
  const ivHex = data.slice(0, 32);
  const encryptedHex = data.slice(32);

  const iv = CryptoJS.enc.Hex.parse(ivHex);
  const encrypted = CryptoJS.enc.Hex.parse(encryptedHex);
  const cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: encrypted });

  const decrypted = CryptoJS.AES.decrypt(cipherParams, KEY, { iv, mode: CryptoJS.mode.CBC });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

/**
 * 转 Base64（可选）
 */
export function toBase64(str: string): string {
  if (!isProd) return str
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
}
