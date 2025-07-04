/// <reference path="./global.d.ts" />

/**
 * MSLocalStorage本地存储封装
 * @description 推荐使用 MSSessionStorage.create 方法创建实例, 便于后期统一维护管理
 */
declare const MSSessionStorage: IMSSessionStorageStatic<IMSSessionStorageData>;
export default MSSessionStorage;
