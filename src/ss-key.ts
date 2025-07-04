import { isSupport } from "./tool";

/**
 * 获取指定 index key 值
 * @param {number} index
 * @returns {any} any
 */
export default function (index: number) {
  if (!isSupport()) throw new Error("@minisss/sessionstorage is muse run in browser");

  return sessionStorage.key(index);
}
