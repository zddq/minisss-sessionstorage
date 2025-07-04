import { isSupport } from "./tool";

/**
 * 获取当前存储 key 的数量
 * @returns {number} number
 */
export default function () {
  if (!isSupport()) throw new Error("@minisss/sessionstorage is muse run in browser");

  return sessionStorage.length;
}
