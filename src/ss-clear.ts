import { isSupport } from "./tool";

/**
 * 清除本地存储
 */
export default function () {
  if (!isSupport()) throw new Error("@minisss/sessionstorage is muse run in browser");

  return sessionStorage.clear();
}
