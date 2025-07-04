import PKG from "../package.json";

import key from "./ss-key";
import get from "./ss-get";
import set from "./ss-set";
import del from "./ss-del";
import clear from "./ss-clear";
import has from "./ss-has";
import len from "./ss-len";

import { isSupport } from "./tool";

/**
 * 创建实例
 * @param {IMSSessionStorageConfig} initConfig 初始化配置
 * @returns {IMSSessionStorageInstance} MSSessionStorage instance
 */
export default function create(initConfig: IMSSessionStorageConfig = {}) {
  const instance = Object.create(null);
  instance.VERSION = PKG.version;
  instance.key = function (index: number) {
    return key(index);
  };
  instance.get = function (key: string, config: IMSSessionStorageConfig = {}) {
    return get(key, { ...initConfig, ...config });
  };
  instance.set = function (key: string, data: any, config: IMSSessionStorageConfig = {}) {
    return set(key, data, { ...initConfig, ...config });
  };
  instance.del = function (key: string, config: IMSSessionStorageConfig = {}) {
    return del(key, { ...initConfig, ...config });
  };
  instance.clear = function () {
    return clear();
  };
  instance.has = function (key: string, config: IMSSessionStorageConfig = {}) {
    return has(key, { ...initConfig, ...config });
  };
  return new Proxy(instance, {
    get(target, key) {
      if (key === "length") return len();
      if (key === "isSupport") return isSupport();
      return target[key];
    },
  });
}
