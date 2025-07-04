/** 本地存储数据结构 */
interface IMSSessionStorageStore {
  /** 存储值 */
  data: any;
  /** 有效日期时长(ms) */
  maxAge?: number;
}

/** 配置 */
interface IMSSessionStorageConfig {
  /**
   * 最大存活时间(秒)
   * @description 当 maxAge 大于 0 时，expires 值会被忽略
   * @default 0
   */
  maxAge?: number;
  /**
   * 失效日期(Date)
   * @default null
   */
  expires?: Date;
  /**
   * 自定义前缀
   * @description 建议使用 create 方法创建实例时 传入自定义前缀(避免单独使用-不方便后期维护)
   * @default ""
   */
  prefix?: string;
}

/** 类型实例 */
interface IMSSessionStorageInstance<O> {
  /** 当前包版本信息 */
  readonly VERSION: string;
  /** 返回 Storage 数据项数量 */
  readonly length: number;
  /** 判断当前环境是否支持 sessionstorage */
  readonly isSupport: boolean;

  /**
   * 获取指定 index key 值
   * @param {number} idx
   * @returns {any} any
   */
  key(idx: number): any;
  /**
   * 获取指定 key 值
   * @param {K} key 键
   * @param {IMSSessionStorageConfig} config 配置
   * @returns {O[K]} 返回指定 key 的 val
   */
  get<K extends keyof O>(key: K, config?: IMSSessionStorageConfig): O[K];
  /**
   * 设置指定 key 的 val
   * @param {K} key 键
   * @param {V} val 值
   * @param {IMSSessionStorageConfig} config 配置
   * @returns undefined
   */
  set<K extends keyof O, V extends O[K]>(key: K, val: V, config?: IMSSessionStorageConfig): boolean;
  /**
   * 删除指定 key
   * @param {K} key 键
   * @param {IMSSessionStorageConfig} config 配置
   * @requires undefined
   */
  del<K extends keyof O>(key: K, config?: IMSSessionStorageConfig): boolean;
  /**
   * 清除所有键名
   * @requires undefined
   */
  clear(): void;
  /**
   * 判断指定 key 是否存在
   * @param {K} key 键
   * @param {IMSSessionStorageConfig} config 配置
   * @returns {boolean} boolean
   */
  has<K extends keyof O>(key: K, config?: IMSSessionStorageConfig): boolean;
}

/** 包静态属性及方法 */
interface IMSSessionStorageStatic<O> extends IMSSessionStorageInstance<O> {
  /**
   * 创建一个 MSSessionStorage 实例
   * @example const MLS = MSSessionStorage.create({ prefix: "custom_prefix_" });
   * @returns {IMSSessionStorageInstance} MSSessionStorage Instance
   */
  create<OO extends O>(config?: Partial<IMSSessionStorageConfig>): IMSSessionStorageInstance<OO>;
}

/** @minisss/sessionstorage 本地对象 TS 类型提示定义 */
interface IMSSessionStorageData {}
