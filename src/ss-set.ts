import { getFullKeyStr, isSupport } from "./tool";

/**
 * 保存指定 key 的 data 数据到本地存储
 * @returns void
 */
export default function (key: string, data: any, config: IMSSessionStorageConfig = {}) {
  if (!isSupport()) throw new Error("@minisss/sessionstorage is muse run in browser");

  const { maxAge, expires } = config ?? {};

  // 设置有效时长(秒数)
  if (typeof maxAge === "number" && maxAge <= 0) throw new Error("maxAge must be greater than 0");
  // 设置有效终止日期
  if (!!expires && Object.prototype.toString.call(expires) === "[object Date]") throw new Error("expires must be greater than now");

  const tmpMaxAgeObj: Partial<IMSSessionStorageStore> = maxAge ? { maxAge: Date.now() + maxAge * 1000 } : expires ? { maxAge: expires.getTime() } : {};
  return sessionStorage.setItem(getFullKeyStr(key, config), JSON.stringify({ ...tmpMaxAgeObj, data } as IMSSessionStorageStore));
}
