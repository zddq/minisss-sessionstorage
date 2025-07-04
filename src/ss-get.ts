import del from "./ss-del";
import { getFullKeyStr, isSupport } from "./tool";

/**
 * 获取指定 key 值
 * @param {string} key 键
 * @param {IMSSessionStorageConfig} config 配置
 * @returns {any} any
 */
export default function (key: string, config?: IMSSessionStorageConfig) {
  if (!isSupport()) throw new Error("@minisss/sessionstorage is muse run in browser");

  const tmpVal = sessionStorage.getItem(getFullKeyStr(key, config));
  if (!tmpVal) return tmpVal;

  try {
    const res: IMSSessionStorageStore = JSON.parse(tmpVal);
    if (!res) return null;
    // 校验数据时间有效性
    if (res.maxAge && res.maxAge <= Date.now()) return del(key, config);
    return res.data;
  } catch (error) {
    return tmpVal;
  }
}
