import { getFullKeyStr, isSupport } from "./tool";

/**
 * 判断指定 key 是否存在
 * @param {string} key 键
 * @param {IMSSessionStorageConfig} config 配置
 * @returns {boolean} boolean
 */
export default function (key: string, config: IMSSessionStorageConfig = {}) {
  if (!isSupport()) throw new Error("@minisss/sessionstorage is muse run in browser");

  const len = sessionStorage.length;
  const keys = [];
  for (let i = 0; i < len; i++) {
    keys.push(sessionStorage.key(i));
  }
  return keys.some(keyStr => keyStr === getFullKeyStr(key, config));
}
