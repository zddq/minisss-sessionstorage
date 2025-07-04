import { getFullKeyStr, isSupport } from "./tool";

/**
 * 删除指定 key 值
 * @param {string} key 键
 * @param {IMSSessionStorageConfig} config 配置
 * @returns void
 */
export default function (key: string, config: IMSSessionStorageConfig = {}) {
  if (!isSupport()) throw new Error("@minisss/sessionstorage is muse run in browser");

  return sessionStorage.removeItem(getFullKeyStr(key, config));
}
