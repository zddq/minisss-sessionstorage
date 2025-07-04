# @minisss/sessionstorage

@minisss/sessionstorage 是一个专为浏览器环境设计的轻量级本地存储库，旨在简化对 sessionstorage 的操作，同时提供丰富的功能和更好的开发体验。

- ✅ 支持对象存储
- ✅ 支持过期机制
- ✅ 自定义前缀
- ✅ 友好的 TS 类型提示(全局定义 IMSSessionStorageData 定义即可)
- ✅ 支持 ESM CJS UMD
- 🤡 支持广泛浏览器

## 安装方式

```bash
# pnpm
pnpm i @minisss/sessionstorage

# yarn
yarn add @minisss/sessionstorage

# npm
npm install @minisss/sessionstorage

# bun
bun install @minisss/sessionstorage
```

## 使用方式

### ESM

```js
import MLS from "@minisss/sessionstorage";
MLS.set("key", "val");
console.log(MLS.get("key"));
```

### CJS

```js
const MLS = require("@minisss/sessionstorage");
MLS.set("key", "val");
console.log(MLS.get("key"));
```

### UMD xxx.html 普通 script 直接导入 -> 访问全局变量 MLS

```html
// UMD
<script src="https://unpkg.com/@minisss/sessionstorage@1.0.5"></script>
<script>
  console.log("MLS 包对象: ", MLS) MLS.set('key', 'val');
  console.log(MLS.get('key')) console.log(MLS.has('key'));
</script>
```

### UMD xxx.html script type module 模块化内部引入方式

```html
<script type="module">
  import MLS from "https://unpkg.com/@minisss/sessionstorage@1.0.5/out/index.esm.js";
  console.log("MLS 包对象: ", MLS) MLS.set('key', 'val');
  console.log(MLS.get('key')) console.log(MLS.del('key'));
  console.log(MLS.has('key'));
</script>
```

## API 及实例对象(实例对象无 create 方法)

| 名称      | 描述           | 参数                                     | 返回值    |
| --------- | -------------- | ---------------------------------------- | --------- |
| VERSION   | 版本信息       |                                          | string    |
| length    | 据项数量       |                                          | number    |
| isSupport | 是否支持       |                                          | boolean   |
| key       | 获取 key       | key(idx:number)                          | any       |
| get       | 获取           | get(key:string, config?:Config)          | any       |
| set       | 设置           | set(key:string, val:any, config?:Config) | undefined |
| del       | 删除           | del(key:string, config?:Config)          | undefined |
| clear     | 清除本地数据   | clear()                                  | undefined |
| has       | 判断           | has(key:string, config?:Config)          | boolean   |
| create    | 创建实例(推荐) | create(config?:Config)                   | 实例对象  |

## Config

| 名称    | 描述                         | 数据类型 | 默认值    |
| ------- | ---------------------------- | -------- | --------- |
| maxAge  | 过期时间，单位为秒           | number   | undefined |
| expires | 过期时间(maxAge会覆盖此参数) | Date     | undefined |
| prefix  | 自定义 key 前缀              | string   | ''        |

## 覆写 IMSSessionStorageData 类型接口y已支持 TS 类型提示(可选)

```js
// 例如: 在 types/xxx.d.ts | global.d.ts 或某个 .d.ts 文件中定义 IMSSessionStorageData 类型接口
interface IMSSessionStorageData {
  name:string
  age:number
}
// 将 types/xxx.d.ts 加入到 tsconfig.json includes 中即可获得自定义类型提示功能
```
