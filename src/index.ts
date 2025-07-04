import PKG from "../package.json";

import key from "./ss-key";
import get from "./ss-get";
import set from "./ss-set";
import del from "./ss-del";
import clear from "./ss-clear";
import has from "./ss-has";
import len from "./ss-len";
import create from "./ss-create";

import { isSupport } from "./tool";

export default {
  get VERSION() {
    return PKG.version;
  },
  get length() {
    return len();
  },
  get isSupport() {
    return isSupport();
  },

  key,
  get,
  set,
  del,
  clear,
  has,
  create,
};
