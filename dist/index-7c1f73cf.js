var lu = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var vt = (t, e, r) => (lu(t, e, "read from private field"), r ? r.call(t) : e.get(t)), sr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Yt = (t, e, r, n) => (lu(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import * as Wt from "react";
import dn, { useEffect as At, useState as ji, useRef as xp } from "react";
const Op = Symbol(), fu = Object.getPrototypeOf, _a = /* @__PURE__ */ new WeakMap(), Dp = (t) => t && (_a.has(t) ? _a.get(t) : fu(t) === Object.prototype || fu(t) === Array.prototype), Ip = (t) => Dp(t) && t[Op] || null, hu = (t, e = !0) => {
  _a.set(t, e);
}, Wo = (t) => typeof t == "object" && t !== null, rn = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakSet(), Cp = (t = Object.is, e = (c, f) => new Proxy(c, f), r = (c) => Wo(c) && !Fs.has(c) && (Array.isArray(c) || !(Symbol.iterator in c)) && !(c instanceof WeakMap) && !(c instanceof WeakSet) && !(c instanceof Error) && !(c instanceof Number) && !(c instanceof Date) && !(c instanceof String) && !(c instanceof RegExp) && !(c instanceof ArrayBuffer), n = (c) => {
  switch (c.status) {
    case "fulfilled":
      return c.value;
    case "rejected":
      throw c.reason;
    default:
      throw c;
  }
}, i = /* @__PURE__ */ new WeakMap(), s = (c, f, d = n) => {
  const p = i.get(c);
  if ((p == null ? void 0 : p[0]) === f)
    return p[1];
  const m = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c));
  return hu(m, !0), i.set(c, [f, m]), Reflect.ownKeys(c).forEach((v) => {
    if (Object.getOwnPropertyDescriptor(m, v))
      return;
    const E = Reflect.get(c, v), S = {
      value: E,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Fs.has(E))
      hu(E, !1);
    else if (E instanceof Promise)
      delete S.value, S.get = () => d(E);
    else if (rn.has(E)) {
      const [P, w] = rn.get(
        E
      );
      S.value = s(
        P,
        w(),
        d
      );
    }
    Object.defineProperty(m, v, S);
  }), Object.preventExtensions(m);
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], u = (c) => {
  if (!Wo(c))
    throw new Error("object required");
  const f = a.get(c);
  if (f)
    return f;
  let d = o[0];
  const p = /* @__PURE__ */ new Set(), m = (C, T = ++o[0]) => {
    d !== T && (d = T, p.forEach((U) => U(C, T)));
  };
  let v = o[1];
  const E = (C = ++o[1]) => (v !== C && !p.size && (v = C, P.forEach(([T]) => {
    const U = T[1](C);
    U > d && (d = U);
  })), d), S = (C) => (T, U) => {
    const B = [...T];
    B[1] = [C, ...B[1]], m(B, U);
  }, P = /* @__PURE__ */ new Map(), w = (C, T) => {
    if (p.size) {
      const U = T[3](S(C));
      P.set(C, [T, U]);
    } else
      P.set(C, [T]);
  }, O = (C) => {
    var T;
    const U = P.get(C);
    U && (P.delete(C), (T = U[1]) == null || T.call(U));
  }, b = (C) => (p.add(C), p.size === 1 && P.forEach(([U, B], G) => {
    const R = U[3](S(G));
    P.set(G, [U, R]);
  }), () => {
    p.delete(C), p.size === 0 && P.forEach(([U, B], G) => {
      B && (B(), P.set(G, [U]));
    });
  }), x = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c)), l = e(x, {
    deleteProperty(C, T) {
      const U = Reflect.get(C, T);
      O(T);
      const B = Reflect.deleteProperty(C, T);
      return B && m(["delete", [T], U]), B;
    },
    set(C, T, U, B) {
      const G = Reflect.has(C, T), R = Reflect.get(C, T, B);
      if (G && (t(R, U) || a.has(U) && t(R, a.get(U))))
        return !0;
      O(T), Wo(U) && (U = Ip(U) || U);
      let L = U;
      if (U instanceof Promise)
        U.then((Q) => {
          U.status = "fulfilled", U.value = Q, m(["resolve", [T], Q]);
        }).catch((Q) => {
          U.status = "rejected", U.reason = Q, m(["reject", [T], Q]);
        });
      else {
        !rn.has(U) && r(U) && (L = u(U));
        const Q = !Fs.has(L) && rn.get(L);
        Q && w(T, Q);
      }
      return Reflect.set(C, T, L, B), m(["set", [T], U, R]), !0;
    }
  });
  a.set(c, l);
  const y = [
    x,
    E,
    s,
    b
  ];
  return rn.set(l, y), Reflect.ownKeys(c).forEach((C) => {
    const T = Object.getOwnPropertyDescriptor(
      c,
      C
    );
    "value" in T && (l[C] = c[C], delete T.value, delete T.writable), Object.defineProperty(x, C, T);
  }), l;
}) => [
  // public functions
  u,
  // shared state
  rn,
  Fs,
  // internal things
  t,
  e,
  r,
  n,
  i,
  s,
  a,
  o
], [Rp] = Cp();
function pn(t = {}) {
  return Rp(t);
}
function Mn(t, e, r) {
  const n = rn.get(t);
  let i;
  const s = [], a = n[3];
  let o = !1;
  const c = a((f) => {
    if (s.push(f), r) {
      e(s.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, o && e(s.splice(0));
    }));
  });
  return o = !0, () => {
    o = !1, c();
  };
}
function Tp(t, e) {
  const r = rn.get(t), [n, i, s] = r;
  return s(n, i(), e);
}
const St = pn({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Pf = { state: St, subscribe(t) {
  return Mn(St, () => t(St));
}, push(t, e) {
  t !== St.view && (St.view = t, e && (St.data = e), St.history.push(t));
}, reset(t) {
  St.view = t, St.history = [t];
}, replace(t) {
  St.history.length > 1 && (St.history[St.history.length - 1] = t, St.view = t);
}, goBack() {
  if (St.history.length > 1) {
    St.history.pop();
    const [t] = St.history.slice(-1);
    St.view = t;
  }
}, setData(t) {
  St.data = t;
} }, $t = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return $t.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return $t.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if ($t.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let n = t;
  n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(e);
  return `${n}wc?uri=${i}`;
}, formatUniversalUrl(t, e, r) {
  if (!$t.isHttpUrl(t))
    return this.formatNativeUrl(t, e, r);
  let n = t;
  n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(e);
  return `${n}wc?uri=${i}`;
}, async wait(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}, openHref(t, e) {
  window.open(t, e, "noreferrer noopener");
}, setWalletConnectDeepLink(t, e) {
  try {
    localStorage.setItem($t.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem($t.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem($t.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem($t.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = Pf.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Ap = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Ft = pn({ enabled: Ap, userSessionId: "", events: [], connectedWalletId: void 0 }), Pp = { state: Ft, subscribe(t) {
  return Mn(Ft.events, () => t(Tp(Ft.events[Ft.events.length - 1])));
}, initialize() {
  Ft.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (Ft.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  Ft.connectedWalletId = t;
}, click(t) {
  if (Ft.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: Ft.userSessionId, timestamp: Date.now(), data: t };
    Ft.events.push(e);
  }
}, track(t) {
  if (Ft.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: Ft.userSessionId, timestamp: Date.now(), data: t };
    Ft.events.push(e);
  }
}, view(t) {
  if (Ft.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: Ft.userSessionId, timestamp: Date.now(), data: t };
    Ft.events.push(e);
  }
} }, Rr = pn({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), wr = { state: Rr, subscribe(t) {
  return Mn(Rr, () => t(Rr));
}, setChains(t) {
  Rr.chains = t;
}, setWalletConnectUri(t) {
  Rr.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  Rr.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  Rr.isCustomMobile = t;
}, setIsDataLoaded(t) {
  Rr.isDataLoaded = t;
}, setIsUiLoaded(t) {
  Rr.isUiLoaded = t;
}, setIsAuth(t) {
  Rr.isAuth = t;
} }, Ms = pn({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), ai = { state: Ms, subscribe(t) {
  return Mn(Ms, () => t(Ms));
}, setConfig(t) {
  var e, r;
  Pp.initialize(), wr.setChains(t.chains), wr.setIsAuth(!!t.enableAuthMode), wr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), wr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), $t.setModalVersionInStorage(), Object.assign(Ms, t);
} };
var Np = Object.defineProperty, du = Object.getOwnPropertySymbols, Lp = Object.prototype.hasOwnProperty, Fp = Object.prototype.propertyIsEnumerable, pu = (t, e, r) => e in t ? Np(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Mp = (t, e) => {
  for (var r in e || (e = {}))
    Lp.call(e, r) && pu(t, r, e[r]);
  if (du)
    for (var r of du(e))
      Fp.call(e, r) && pu(t, r, e[r]);
  return t;
};
const Ea = "https://explorer-api.walletconnect.com", Sa = "wcm", xa = "js-2.6.2";
async function Us(t, e) {
  const r = Mp({ sdkType: Sa, sdkVersion: xa }, e), n = new URL(t, Ea);
  return n.searchParams.append("projectId", ai.state.projectId), Object.entries(r).forEach(([i, s]) => {
    s && n.searchParams.append(i, String(s));
  }), (await fetch(n)).json();
}
const vn = { async getDesktopListings(t) {
  return Us("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return Us("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return Us("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return Us("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${Ea}/w3m/v1/getWalletImage/${t}?projectId=${ai.state.projectId}&sdkType=${Sa}&sdkVersion=${xa}`;
}, getAssetImageUrl(t) {
  return `${Ea}/w3m/v1/getAssetImage/${t}?projectId=${ai.state.projectId}&sdkType=${Sa}&sdkVersion=${xa}`;
} };
var Up = Object.defineProperty, gu = Object.getOwnPropertySymbols, jp = Object.prototype.hasOwnProperty, $p = Object.prototype.propertyIsEnumerable, yu = (t, e, r) => e in t ? Up(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, kp = (t, e) => {
  for (var r in e || (e = {}))
    jp.call(e, r) && yu(t, r, e[r]);
  if (gu)
    for (var r of gu(e))
      $p.call(e, r) && yu(t, r, e[r]);
  return t;
};
const mu = $t.isMobile(), Tr = pn({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), DO = { state: Tr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = ai.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Tr.recomendedWallets;
  if ($t.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await vn.getAllListings(r), i = Object.values(n);
    i.sort((s, a) => {
      const o = t.indexOf(s.id), u = t.indexOf(a.id);
      return o - u;
    }), Tr.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: n } = wr.state, i = r == null ? void 0 : r.join(","), s = $t.isArray(e), a = { page: 1, sdks: n ? "auth_v1" : void 0, entries: $t.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: s ? e.join(",") : void 0 }, { listings: o } = mu ? await vn.getMobileListings(a) : await vn.getDesktopListings(a);
    Tr.recomendedWallets = Object.values(o);
  }
  return Tr.recomendedWallets;
}, async getWallets(t) {
  const e = kp({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = ai.state, { recomendedWallets: i } = Tr;
  if (n === "ALL")
    return Tr.wallets;
  i.length ? e.excludedIds = i.map((d) => d.id).join(",") : $t.isArray(r) && (e.excludedIds = r.join(",")), $t.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), wr.state.isAuth && (e.sdks = "auth_v1");
  const { page: s, search: a } = t, { listings: o, total: u } = mu ? await vn.getMobileListings(e) : await vn.getDesktopListings(e), c = Object.values(o), f = a ? "search" : "wallets";
  return Tr[f] = { listings: [...Tr[f].listings, ...c], total: u, page: s ?? 1 }, { listings: c, total: u };
}, getWalletImageUrl(t) {
  return vn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return vn.getAssetImageUrl(t);
}, resetSearch() {
  Tr.search = { listings: [], total: 0, page: 1 };
} }, Bn = pn({ open: !1 }), Go = { state: Bn, subscribe(t) {
  return Mn(Bn, () => t(Bn));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = wr.state;
    if ($t.removeWalletConnectDeepLink(), wr.setWalletConnectUri(t == null ? void 0 : t.uri), wr.setChains(t == null ? void 0 : t.chains), Pf.reset("ConnectWallet"), r && n)
      Bn.open = !0, e();
    else {
      const i = setInterval(() => {
        const s = wr.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(i), Bn.open = !0, e());
      }, 200);
    }
  });
}, close() {
  Bn.open = !1;
} };
var qp = Object.defineProperty, vu = Object.getOwnPropertySymbols, Bp = Object.prototype.hasOwnProperty, zp = Object.prototype.propertyIsEnumerable, bu = (t, e, r) => e in t ? qp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Vp = (t, e) => {
  for (var r in e || (e = {}))
    Bp.call(e, r) && bu(t, r, e[r]);
  if (vu)
    for (var r of vu(e))
      zp.call(e, r) && bu(t, r, e[r]);
  return t;
};
function Kp() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Ei = pn({ themeMode: Kp() ? "dark" : "light" }), wu = { state: Ei, subscribe(t) {
  return Mn(Ei, () => t(Ei));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Ei.themeMode = e), r && (Ei.themeVariables = Vp({}, r));
} }, bn = pn({ open: !1, message: "", variant: "success" }), IO = { state: bn, subscribe(t) {
  return Mn(bn, () => t(bn));
}, openToast(t, e) {
  bn.open = !0, bn.message = t, bn.variant = e;
}, closeToast() {
  bn.open = !1;
} };
let Hp = class {
  constructor(e) {
    this.openModal = Go.open, this.closeModal = Go.close, this.subscribeModal = Go.subscribe, this.setTheme = wu.setThemeConfig, wu.setThemeConfig(e), ai.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-3ece4ae3.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), wr.setIsUiLoaded(!0);
    }
  }
};
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Do(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function _c(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Ec = { exports: {} }, Yn = typeof Reflect == "object" ? Reflect : null, _u = Yn && typeof Yn.apply == "function" ? Yn.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
}, Gs;
Yn && typeof Yn.ownKeys == "function" ? Gs = Yn.ownKeys : Object.getOwnPropertySymbols ? Gs = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Gs = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Wp(t) {
  console && console.warn && console.warn(t);
}
var Nf = Number.isNaN || function(e) {
  return e !== e;
};
function Ke() {
  Ke.init.call(this);
}
Ec.exports = Ke;
Ec.exports.once = Yp;
Ke.EventEmitter = Ke;
Ke.prototype._events = void 0;
Ke.prototype._eventsCount = 0;
Ke.prototype._maxListeners = void 0;
var Eu = 10;
function Io(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Ke, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Eu;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || Nf(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Eu = t;
  }
});
Ke.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ke.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Nf(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function Lf(t) {
  return t._maxListeners === void 0 ? Ke.defaultMaxListeners : t._maxListeners;
}
Ke.prototype.getMaxListeners = function() {
  return Lf(this);
};
Ke.prototype.emit = function(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var i = e === "error", s = this._events;
  if (s !== void 0)
    i = i && s.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var a;
    if (r.length > 0 && (a = r[0]), a instanceof Error)
      throw a;
    var o = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
    throw o.context = a, o;
  }
  var u = s[e];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    _u(u, this, r);
  else
    for (var c = u.length, f = $f(u, c), n = 0; n < c; ++n)
      _u(f[n], this, r);
  return !0;
};
function Ff(t, e, r, n) {
  var i, s, a;
  if (Io(r), s = t._events, s === void 0 ? (s = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), s = t._events), a = s[e]), a === void 0)
    a = s[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = s[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), i = Lf(t), i > 0 && a.length > i && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, Wp(o);
  }
  return t;
}
Ke.prototype.addListener = function(e, r) {
  return Ff(this, e, r, !1);
};
Ke.prototype.on = Ke.prototype.addListener;
Ke.prototype.prependListener = function(e, r) {
  return Ff(this, e, r, !0);
};
function Gp() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Mf(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, i = Gp.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
Ke.prototype.once = function(e, r) {
  return Io(r), this.on(e, Mf(this, e, r)), this;
};
Ke.prototype.prependOnceListener = function(e, r) {
  return Io(r), this.prependListener(e, Mf(this, e, r)), this;
};
Ke.prototype.removeListener = function(e, r) {
  var n, i, s, a, o;
  if (Io(r), i = this._events, i === void 0)
    return this;
  if (n = i[e], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (s = -1, a = n.length - 1; a >= 0; a--)
      if (n[a] === r || n[a].listener === r) {
        o = n[a].listener, s = a;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? n.shift() : Qp(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, o || r);
  }
  return this;
};
Ke.prototype.off = Ke.prototype.removeListener;
Ke.prototype.removeAllListeners = function(e) {
  var r, n, i;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var s = Object.keys(n), a;
    for (i = 0; i < s.length; ++i)
      a = s[i], a !== "removeListener" && this.removeAllListeners(a);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--)
      this.removeListener(e, r[i]);
  return this;
};
function Uf(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var i = n[e];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Zp(i) : $f(i, i.length);
}
Ke.prototype.listeners = function(e) {
  return Uf(this, e, !0);
};
Ke.prototype.rawListeners = function(e) {
  return Uf(this, e, !1);
};
Ke.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : jf.call(t, e);
};
Ke.prototype.listenerCount = jf;
function jf(t) {
  var e = this._events;
  if (e !== void 0) {
    var r = e[t];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
Ke.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Gs(this._events) : [];
};
function $f(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function Qp(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function Zp(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function Yp(t, e) {
  return new Promise(function(r, n) {
    function i(a) {
      t.removeListener(e, s), n(a);
    }
    function s() {
      typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments));
    }
    kf(t, e, s, { once: !0 }), e !== "error" && Jp(t, i, { once: !0 });
  });
}
function Jp(t, e, r) {
  typeof t.on == "function" && kf(t, "error", e, r);
}
function kf(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(s) {
      n.once && t.removeEventListener(e, i), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var pr = Ec.exports;
const ps = /* @__PURE__ */ Do(pr), Xp = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, eg = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, tg = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function rg(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    ng(t);
    return;
  }
  return e;
}
function ng(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function js(t, e = {}) {
  if (typeof t != "string")
    return t;
  const r = t.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    t[0] === '"' && t.at(-1) === '"' && !t.includes("\\")
  )
    return r.slice(1, -1);
  if (r.length <= 9) {
    const n = r.toLowerCase();
    if (n === "true")
      return !0;
    if (n === "false")
      return !1;
    if (n === "undefined")
      return;
    if (n === "null")
      return null;
    if (n === "nan")
      return Number.NaN;
    if (n === "infinity")
      return Number.POSITIVE_INFINITY;
    if (n === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!tg.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (Xp.test(t) || eg.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, rg);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function ig(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function xt(t, ...e) {
  try {
    return ig(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function sg(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function og(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function Qs(t) {
  if (sg(t))
    return String(t);
  if (og(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return Qs(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function qf() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Oa = "base64:";
function ag(t) {
  if (typeof t == "string")
    return t;
  qf();
  const e = Buffer.from(t).toString("base64");
  return Oa + e;
}
function cg(t) {
  return typeof t != "string" || !t.startsWith(Oa) ? t : (qf(), Buffer.from(t.slice(Oa.length), "base64"));
}
function Xt(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function ug(...t) {
  return Xt(t.join(":"));
}
function $s(t) {
  return t = Xt(t), t ? t + ":" : "";
}
const lg = "memory", fg = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: lg,
    options: {},
    hasItem(e) {
      return t.has(e);
    },
    getItem(e) {
      return t.get(e) ?? null;
    },
    getItemRaw(e) {
      return t.get(e) ?? null;
    },
    setItem(e, r) {
      t.set(e, r);
    },
    setItemRaw(e, r) {
      t.set(e, r);
    },
    removeItem(e) {
      t.delete(e);
    },
    getKeys() {
      return Array.from(t.keys());
    },
    clear() {
      t.clear();
    },
    dispose() {
      t.clear();
    }
  };
};
function hg(t = {}) {
  const e = {
    mounts: { "": t.driver || fg() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (c) => {
    for (const f of e.mountpoints)
      if (c.startsWith(f))
        return {
          base: f,
          relativeKey: c.slice(f.length),
          driver: e.mounts[f]
        };
    return {
      base: "",
      relativeKey: c,
      driver: e.mounts[""]
    };
  }, n = (c, f) => e.mountpoints.filter(
    (d) => d.startsWith(c) || f && c.startsWith(d)
  ).map((d) => ({
    relativeBase: c.length > d.length ? c.slice(d.length) : void 0,
    mountpoint: d,
    driver: e.mounts[d]
  })), i = (c, f) => {
    if (e.watching) {
      f = Xt(f);
      for (const d of e.watchListeners)
        d(c, f);
    }
  }, s = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const c in e.mounts)
        e.unwatch[c] = await Su(
          e.mounts[c],
          i,
          c
        );
    }
  }, a = async () => {
    if (e.watching) {
      for (const c in e.unwatch)
        await e.unwatch[c]();
      e.unwatch = {}, e.watching = !1;
    }
  }, o = (c, f, d) => {
    const p = /* @__PURE__ */ new Map(), m = (v) => {
      let E = p.get(v.base);
      return E || (E = {
        driver: v.driver,
        base: v.base,
        items: []
      }, p.set(v.base, E)), E;
    };
    for (const v of c) {
      const E = typeof v == "string", S = Xt(E ? v : v.key), P = E ? void 0 : v.value, w = E || !v.options ? f : { ...f, ...v.options }, O = r(S);
      m(O).items.push({
        key: S,
        value: P,
        relativeKey: O.relativeKey,
        options: w
      });
    }
    return Promise.all([...p.values()].map((v) => d(v))).then(
      (v) => v.flat()
    );
  }, u = {
    // Item
    hasItem(c, f = {}) {
      c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      return xt(p.hasItem, d, f);
    },
    getItem(c, f = {}) {
      c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      return xt(p.getItem, d, f).then(
        (m) => js(m)
      );
    },
    getItems(c, f) {
      return o(c, f, (d) => d.driver.getItems ? xt(
        d.driver.getItems,
        d.items.map((p) => ({
          key: p.relativeKey,
          options: p.options
        })),
        f
      ).then(
        (p) => p.map((m) => ({
          key: ug(d.base, m.key),
          value: js(m.value)
        }))
      ) : Promise.all(
        d.items.map((p) => xt(
          d.driver.getItem,
          p.relativeKey,
          p.options
        ).then((m) => ({
          key: p.key,
          value: js(m)
        })))
      ));
    },
    getItemRaw(c, f = {}) {
      c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      return p.getItemRaw ? xt(p.getItemRaw, d, f) : xt(p.getItem, d, f).then(
        (m) => cg(m)
      );
    },
    async setItem(c, f, d = {}) {
      if (f === void 0)
        return u.removeItem(c);
      c = Xt(c);
      const { relativeKey: p, driver: m } = r(c);
      m.setItem && (await xt(m.setItem, p, Qs(f), d), m.watch || i("update", c));
    },
    async setItems(c, f) {
      await o(c, f, async (d) => {
        d.driver.setItems && await xt(
          d.driver.setItems,
          d.items.map((p) => ({
            key: p.relativeKey,
            value: Qs(p.value),
            options: p.options
          })),
          f
        ), d.driver.setItem && await Promise.all(
          d.items.map((p) => xt(
            d.driver.setItem,
            p.relativeKey,
            Qs(p.value),
            p.options
          ))
        );
      });
    },
    async setItemRaw(c, f, d = {}) {
      if (f === void 0)
        return u.removeItem(c, d);
      c = Xt(c);
      const { relativeKey: p, driver: m } = r(c);
      if (m.setItemRaw)
        await xt(m.setItemRaw, p, f, d);
      else if (m.setItem)
        await xt(m.setItem, p, ag(f), d);
      else
        return;
      m.watch || i("update", c);
    },
    async removeItem(c, f = {}) {
      typeof f == "boolean" && (f = { removeMeta: f }), c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      p.removeItem && (await xt(p.removeItem, d, f), (f.removeMeta || f.removeMata) && await xt(p.removeItem, d + "$", f), p.watch || i("remove", c));
    },
    // Meta
    async getMeta(c, f = {}) {
      typeof f == "boolean" && (f = { nativeOnly: f }), c = Xt(c);
      const { relativeKey: d, driver: p } = r(c), m = /* @__PURE__ */ Object.create(null);
      if (p.getMeta && Object.assign(m, await xt(p.getMeta, d, f)), !f.nativeOnly) {
        const v = await xt(
          p.getItem,
          d + "$",
          f
        ).then((E) => js(E));
        v && typeof v == "object" && (typeof v.atime == "string" && (v.atime = new Date(v.atime)), typeof v.mtime == "string" && (v.mtime = new Date(v.mtime)), Object.assign(m, v));
      }
      return m;
    },
    setMeta(c, f, d = {}) {
      return this.setItem(c + "$", f, d);
    },
    removeMeta(c, f = {}) {
      return this.removeItem(c + "$", f);
    },
    // Keys
    async getKeys(c, f = {}) {
      c = $s(c);
      const d = n(c, !0);
      let p = [];
      const m = [];
      for (const v of d) {
        const S = (await xt(
          v.driver.getKeys,
          v.relativeBase,
          f
        )).map((P) => v.mountpoint + Xt(P)).filter((P) => !p.some((w) => P.startsWith(w)));
        m.push(...S), p = [
          v.mountpoint,
          ...p.filter((P) => !P.startsWith(v.mountpoint))
        ];
      }
      return c ? m.filter((v) => v.startsWith(c) && !v.endsWith("$")) : m.filter((v) => !v.endsWith("$"));
    },
    // Utils
    async clear(c, f = {}) {
      c = $s(c), await Promise.all(
        n(c, !1).map(async (d) => {
          if (d.driver.clear)
            return xt(d.driver.clear, d.relativeBase, f);
          if (d.driver.removeItem) {
            const p = await d.driver.getKeys(d.relativeBase || "", f);
            return Promise.all(
              p.map((m) => d.driver.removeItem(m, f))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((c) => xu(c))
      );
    },
    async watch(c) {
      return await s(), e.watchListeners.push(c), async () => {
        e.watchListeners = e.watchListeners.filter(
          (f) => f !== c
        ), e.watchListeners.length === 0 && await a();
      };
    },
    async unwatch() {
      e.watchListeners = [], await a();
    },
    // Mount
    mount(c, f) {
      if (c = $s(c), c && e.mounts[c])
        throw new Error(`already mounted at ${c}`);
      return c && (e.mountpoints.push(c), e.mountpoints.sort((d, p) => p.length - d.length)), e.mounts[c] = f, e.watching && Promise.resolve(Su(f, i, c)).then((d) => {
        e.unwatch[c] = d;
      }).catch(console.error), u;
    },
    async unmount(c, f = !0) {
      c = $s(c), !(!c || !e.mounts[c]) && (e.watching && c in e.unwatch && (e.unwatch[c](), delete e.unwatch[c]), f && await xu(e.mounts[c]), e.mountpoints = e.mountpoints.filter((d) => d !== c), delete e.mounts[c]);
    },
    getMount(c = "") {
      c = Xt(c) + ":";
      const f = r(c);
      return {
        driver: f.driver,
        base: f.base
      };
    },
    getMounts(c = "", f = {}) {
      return c = Xt(c), n(c, f.parents).map((p) => ({
        driver: p.driver,
        base: p.mountpoint
      }));
    }
  };
  return u;
}
function Su(t, e, r) {
  return t.watch ? t.watch((n, i) => e(n, r + i)) : () => {
  };
}
async function xu(t) {
  typeof t.dispose == "function" && await xt(t.dispose);
}
function Un(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function Bf(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = Un(r);
  return (i, s) => n.then((a) => s(a.transaction(e, i).objectStore(e)));
}
let Qo;
function gs() {
  return Qo || (Qo = Bf("keyval-store", "keyval")), Qo;
}
function Ou(t, e = gs()) {
  return e("readonly", (r) => Un(r.get(t)));
}
function dg(t, e, r = gs()) {
  return r("readwrite", (n) => (n.put(e, t), Un(n.transaction)));
}
function pg(t, e = gs()) {
  return e("readwrite", (r) => (r.delete(t), Un(r.transaction)));
}
function gg(t = gs()) {
  return t("readwrite", (e) => (e.clear(), Un(e.transaction)));
}
function yg(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, Un(t.transaction);
}
function mg(t = gs()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return Un(e.getAllKeys());
    const r = [];
    return yg(e, (n) => r.push(n.key)).then(() => r);
  });
}
const vg = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), bg = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function Co(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return bg(t);
  } catch {
    return t;
  }
}
function ys(t) {
  return typeof t == "string" ? t : vg(t) || "";
}
const wg = "idb-keyval";
var _g = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (i) => e + i;
  let n;
  return t.dbName && t.storeName && (n = Bf(t.dbName, t.storeName)), { name: wg, options: t, async hasItem(i) {
    return !(typeof await Ou(r(i), n) > "u");
  }, async getItem(i) {
    return await Ou(r(i), n) ?? null;
  }, setItem(i, s) {
    return dg(r(i), s, n);
  }, removeItem(i) {
    return pg(r(i), n);
  }, getKeys() {
    return mg(n);
  }, clear() {
    return gg(n);
  } };
};
const Eg = "WALLET_CONNECT_V2_INDEXED_DB", Sg = "keyvaluestorage";
let xg = class {
  constructor() {
    this.indexedDb = hg({ driver: _g({ dbName: Eg, storeName: Sg }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [e.key, e.value]);
  }
  async getItem(e) {
    const r = await this.indexedDb.getItem(e);
    if (r !== null)
      return r;
  }
  async setItem(e, r) {
    await this.indexedDb.setItem(e, ys(r));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var Zo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Zs = { exports: {} };
(function() {
  let t;
  function e() {
  }
  t = e, t.prototype.getItem = function(r) {
    return this.hasOwnProperty(r) ? String(this[r]) : null;
  }, t.prototype.setItem = function(r, n) {
    this[r] = String(n);
  }, t.prototype.removeItem = function(r) {
    delete this[r];
  }, t.prototype.clear = function() {
    const r = this;
    Object.keys(r).forEach(function(n) {
      r[n] = void 0, delete r[n];
    });
  }, t.prototype.key = function(r) {
    return r = r || 0, Object.keys(this)[r];
  }, t.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof Zo < "u" && Zo.localStorage ? Zs.exports = Zo.localStorage : typeof window < "u" && window.localStorage ? Zs.exports = window.localStorage : Zs.exports = new e();
})();
function Og(t) {
  var e;
  return [t[0], Co((e = t[1]) != null ? e : "")];
}
class Dg {
  constructor() {
    this.localStorage = Zs.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Og);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return Co(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, ys(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const Ig = "wc_storage_version", Du = 1, Cg = async (t, e, r) => {
  const n = Ig, i = await e.getItem(n);
  if (i && i >= Du) {
    r(e);
    return;
  }
  const s = await t.getKeys();
  if (!s.length) {
    r(e);
    return;
  }
  const a = [];
  for (; s.length; ) {
    const o = s.shift();
    if (!o)
      continue;
    const u = o.toLowerCase();
    if (u.includes("wc@") || u.includes("walletconnect") || u.includes("wc_") || u.includes("wallet_connect")) {
      const c = await t.getItem(o);
      await e.setItem(o, c), a.push(o);
    }
  }
  await e.setItem(n, Du), r(e), Rg(t, a);
}, Rg = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let Tg = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const e = new Dg();
    this.storage = e;
    try {
      const r = new xg();
      Cg(e, r, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, r) {
    return await this.initialize(), this.storage.setItem(e, r);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized || await new Promise((e) => {
      const r = setInterval(() => {
        this.initialized && (clearInterval(r), e());
      }, 20);
    });
  }
};
var di = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Da = function(t, e) {
  return Da = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, Da(t, e);
};
function Ag(t, e) {
  Da(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Ia = function() {
  return Ia = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Ia.apply(this, arguments);
};
function Pg(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function Ng(t, e, r, n) {
  var i = arguments.length, s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, n);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (s = (i < 3 ? a(s) : i > 3 ? a(e, r, s) : a(e, r)) || s);
  return i > 3 && s && Object.defineProperty(e, r, s), s;
}
function Lg(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function Fg(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Mg(t, e, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(a) {
      a(s);
    });
  }
  return new (r || (r = Promise))(function(s, a) {
    function o(f) {
      try {
        c(n.next(f));
      } catch (d) {
        a(d);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (d) {
        a(d);
      }
    }
    function c(f) {
      f.done ? s(f.value) : i(f.value).then(o, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function Ug(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, a;
  return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = c;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(c);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (f) {
        c = [6, f], i = 0;
      } finally {
        n = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function jg(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function $g(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Ca(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function zf(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}
function kg() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(zf(arguments[e]));
  return t;
}
function qg() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), i = 0, e = 0; e < r; e++)
    for (var s = arguments[e], a = 0, o = s.length; a < o; a++, i++)
      n[i] = s[a];
  return n;
}
function Bi(t) {
  return this instanceof Bi ? (this.v = t, this) : new Bi(t);
}
function Bg(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), i, s = [];
  return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(p) {
    n[p] && (i[p] = function(m) {
      return new Promise(function(v, E) {
        s.push([p, m, v, E]) > 1 || o(p, m);
      });
    });
  }
  function o(p, m) {
    try {
      u(n[p](m));
    } catch (v) {
      d(s[0][3], v);
    }
  }
  function u(p) {
    p.value instanceof Bi ? Promise.resolve(p.value.v).then(c, f) : d(s[0][2], p);
  }
  function c(p) {
    o("next", p);
  }
  function f(p) {
    o("throw", p);
  }
  function d(p, m) {
    p(m), s.shift(), s.length && o(s[0][0], s[0][1]);
  }
}
function zg(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(i, s) {
    e[i] = t[i] ? function(a) {
      return (r = !r) ? { value: Bi(t[i](a)), done: i === "return" } : s ? s(a) : a;
    } : s;
  }
}
function Vg(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Ca == "function" ? Ca(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = t[s] && function(a) {
      return new Promise(function(o, u) {
        a = t[s](a), i(o, u, a.done, a.value);
      });
    };
  }
  function i(s, a, o, u) {
    Promise.resolve(u).then(function(c) {
      s({ value: c, done: o });
    }, a);
  }
}
function Kg(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function Hg(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function Wg(t) {
  return t && t.__esModule ? t : { default: t };
}
function Gg(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function Qg(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const Zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Ia;
  },
  __asyncDelegator: zg,
  __asyncGenerator: Bg,
  __asyncValues: Vg,
  __await: Bi,
  __awaiter: Mg,
  __classPrivateFieldGet: Gg,
  __classPrivateFieldSet: Qg,
  __createBinding: jg,
  __decorate: Ng,
  __exportStar: $g,
  __extends: Ag,
  __generator: Ug,
  __importDefault: Wg,
  __importStar: Hg,
  __makeTemplateObject: Kg,
  __metadata: Fg,
  __param: Lg,
  __read: zf,
  __rest: Pg,
  __spread: kg,
  __spreadArrays: qg,
  __values: Ca
}, Symbol.toStringTag, { value: "Module" })), jr = /* @__PURE__ */ _c(Zg);
var Si = {}, ie = {}, Yo = {}, xi = {}, Iu;
function Yg() {
  if (Iu)
    return xi;
  Iu = 1, Object.defineProperty(xi, "__esModule", { value: !0 }), xi.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return xi.delay = t, xi;
}
var wn = {}, Jo = {}, _n = {}, Cu;
function Jg() {
  return Cu || (Cu = 1, Object.defineProperty(_n, "__esModule", { value: !0 }), _n.ONE_THOUSAND = _n.ONE_HUNDRED = void 0, _n.ONE_HUNDRED = 100, _n.ONE_THOUSAND = 1e3), _n;
}
var Xo = {}, Ru;
function Xg() {
  return Ru || (Ru = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(Xo)), Xo;
}
var Tu;
function Vf() {
  return Tu || (Tu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = jr;
    e.__exportStar(Jg(), t), e.__exportStar(Xg(), t);
  }(Jo)), Jo;
}
var Au;
function ey() {
  if (Au)
    return wn;
  Au = 1, Object.defineProperty(wn, "__esModule", { value: !0 }), wn.fromMiliseconds = wn.toMiliseconds = void 0;
  const t = Vf();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  wn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return wn.fromMiliseconds = r, wn;
}
var Pu;
function ty() {
  return Pu || (Pu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = jr;
    e.__exportStar(Yg(), t), e.__exportStar(ey(), t);
  }(Yo)), Yo;
}
var zn = {}, Nu;
function ry() {
  if (Nu)
    return zn;
  Nu = 1, Object.defineProperty(zn, "__esModule", { value: !0 }), zn.Watch = void 0;
  class t {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(r) {
      if (this.timestamps.has(r))
        throw new Error(`Watch already started for label: ${r}`);
      this.timestamps.set(r, { started: Date.now() });
    }
    stop(r) {
      const n = this.get(r);
      if (typeof n.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${r}`);
      const i = Date.now() - n.started;
      this.timestamps.set(r, { started: n.started, elapsed: i });
    }
    get(r) {
      const n = this.timestamps.get(r);
      if (typeof n > "u")
        throw new Error(`No timestamp found for label: ${r}`);
      return n;
    }
    elapsed(r) {
      const n = this.get(r);
      return n.elapsed || Date.now() - n.started;
    }
  }
  return zn.Watch = t, zn.default = t, zn;
}
var ea = {}, Oi = {}, Lu;
function ny() {
  if (Lu)
    return Oi;
  Lu = 1, Object.defineProperty(Oi, "__esModule", { value: !0 }), Oi.IWatch = void 0;
  class t {
  }
  return Oi.IWatch = t, Oi;
}
var Fu;
function iy() {
  return Fu || (Fu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), jr.__exportStar(ny(), t);
  }(ea)), ea;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = jr;
  e.__exportStar(ty(), t), e.__exportStar(ry(), t), e.__exportStar(iy(), t), e.__exportStar(Vf(), t);
})(ie);
var ta = {}, Di = {};
let jn = class {
};
const sy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: jn
}, Symbol.toStringTag, { value: "Module" })), oy = /* @__PURE__ */ _c(sy);
var Mu;
function ay() {
  if (Mu)
    return Di;
  Mu = 1, Object.defineProperty(Di, "__esModule", { value: !0 }), Di.IHeartBeat = void 0;
  const t = oy;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return Di.IHeartBeat = e, Di;
}
var Uu;
function Kf() {
  return Uu || (Uu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), jr.__exportStar(ay(), t);
  }(ta)), ta;
}
var ra = {}, En = {}, ju;
function cy() {
  if (ju)
    return En;
  ju = 1, Object.defineProperty(En, "__esModule", { value: !0 }), En.HEARTBEAT_EVENTS = En.HEARTBEAT_INTERVAL = void 0;
  const t = ie;
  return En.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, En.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, En;
}
var $u;
function Hf() {
  return $u || ($u = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), jr.__exportStar(cy(), t);
  }(ra)), ra;
}
var ku;
function uy() {
  if (ku)
    return Si;
  ku = 1, Object.defineProperty(Si, "__esModule", { value: !0 }), Si.HeartBeat = void 0;
  const t = jr, e = pr, r = ie, n = Kf(), i = Hf();
  class s extends n.IHeartBeat {
    constructor(o) {
      super(o), this.events = new e.EventEmitter(), this.interval = i.HEARTBEAT_INTERVAL, this.interval = (o == null ? void 0 : o.interval) || i.HEARTBEAT_INTERVAL;
    }
    static init(o) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const u = new s(o);
        return yield u.init(), u;
      });
    }
    init() {
      return t.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(o, u) {
      this.events.on(o, u);
    }
    once(o, u) {
      this.events.once(o, u);
    }
    off(o, u) {
      this.events.off(o, u);
    }
    removeListener(o, u) {
      this.events.removeListener(o, u);
    }
    initialize() {
      return t.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(i.HEARTBEAT_EVENTS.pulse);
    }
  }
  return Si.HeartBeat = s, Si;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = jr;
  e.__exportStar(uy(), t), e.__exportStar(Kf(), t), e.__exportStar(Hf(), t);
})(di);
var $e = {}, na, qu;
function ly() {
  if (qu)
    return na;
  qu = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  na = e;
  function e(r, n, i) {
    var s = i && i.stringify || t, a = 1;
    if (typeof r == "object" && r !== null) {
      var o = n.length + a;
      if (o === 1)
        return r;
      var u = new Array(o);
      u[0] = s(r);
      for (var c = 1; c < o; c++)
        u[c] = s(n[c]);
      return u.join(" ");
    }
    if (typeof r != "string")
      return r;
    var f = n.length;
    if (f === 0)
      return r;
    for (var d = "", p = 1 - a, m = -1, v = r && r.length || 0, E = 0; E < v; ) {
      if (r.charCodeAt(E) === 37 && E + 1 < v) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(E + 1)) {
          case 100:
          case 102:
            if (p >= f || n[p] == null)
              break;
            m < E && (d += r.slice(m, E)), d += Number(n[p]), m = E + 2, E++;
            break;
          case 105:
            if (p >= f || n[p] == null)
              break;
            m < E && (d += r.slice(m, E)), d += Math.floor(Number(n[p])), m = E + 2, E++;
            break;
          case 79:
          case 111:
          case 106:
            if (p >= f || n[p] === void 0)
              break;
            m < E && (d += r.slice(m, E));
            var S = typeof n[p];
            if (S === "string") {
              d += "'" + n[p] + "'", m = E + 2, E++;
              break;
            }
            if (S === "function") {
              d += n[p].name || "<anonymous>", m = E + 2, E++;
              break;
            }
            d += s(n[p]), m = E + 2, E++;
            break;
          case 115:
            if (p >= f)
              break;
            m < E && (d += r.slice(m, E)), d += String(n[p]), m = E + 2, E++;
            break;
          case 37:
            m < E && (d += r.slice(m, E)), d += "%", m = E + 2, E++, p--;
            break;
        }
        ++p;
      }
      ++E;
    }
    return m === -1 ? r : (m < v && (d += r.slice(m)), d);
  }
  return na;
}
var ia, Bu;
function fy() {
  if (Bu)
    return ia;
  Bu = 1;
  const t = ly();
  ia = i;
  const e = x().console || {}, r = {
    mapHttpRequest: v,
    mapHttpResponse: v,
    wrapRequestSerializer: E,
    wrapResponseSerializer: E,
    wrapErrorSerializer: E,
    req: v,
    res: v,
    err: p
  };
  function n(g, l) {
    return Array.isArray(g) ? g.filter(function(C) {
      return C !== "!stdSerializers.err";
    }) : g === !0 ? Object.keys(l) : !1;
  }
  function i(g) {
    g = g || {}, g.browser = g.browser || {};
    const l = g.browser.transmit;
    if (l && typeof l.send != "function")
      throw Error("pino: transmit option must have a send function");
    const y = g.browser.write || e;
    g.browser.write && (g.browser.asObject = !0);
    const C = g.serializers || {}, T = n(g.browser.serialize, C);
    let U = g.browser.serialize;
    Array.isArray(g.browser.serialize) && g.browser.serialize.indexOf("!stdSerializers.err") > -1 && (U = !1);
    const B = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof y == "function" && (y.error = y.fatal = y.warn = y.info = y.debug = y.trace = y), g.enabled === !1 && (g.level = "silent");
    const G = g.level || "info", R = Object.create(y);
    R.log || (R.log = S), Object.defineProperty(R, "levelVal", {
      get: Q
    }), Object.defineProperty(R, "level", {
      get: V,
      set: k
    });
    const L = {
      transmit: l,
      serialize: T,
      asObject: g.browser.asObject,
      levels: B,
      timestamp: m(g)
    };
    R.levels = i.levels, R.level = G, R.setMaxListeners = R.getMaxListeners = R.emit = R.addListener = R.on = R.prependListener = R.once = R.prependOnceListener = R.removeListener = R.removeAllListeners = R.listeners = R.listenerCount = R.eventNames = R.write = R.flush = S, R.serializers = C, R._serialize = T, R._stdErrSerialize = U, R.child = z, l && (R._logEvent = d());
    function Q() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function V() {
      return this._level;
    }
    function k($) {
      if ($ !== "silent" && !this.levels.values[$])
        throw Error("unknown level " + $);
      this._level = $, s(L, R, "error", "log"), s(L, R, "fatal", "error"), s(L, R, "warn", "error"), s(L, R, "info", "log"), s(L, R, "debug", "log"), s(L, R, "trace", "log");
    }
    function z($, K) {
      if (!$)
        throw new Error("missing bindings for child Pino");
      K = K || {}, T && $.serializers && (K.serializers = $.serializers);
      const fe = K.serializers;
      if (T && fe) {
        var H = Object.assign({}, C, fe), ae = g.browser.serialize === !0 ? Object.keys(H) : T;
        delete $.serializers, u([$], ae, H, this._stdErrSerialize);
      }
      function te(oe) {
        this._childLevel = (oe._childLevel | 0) + 1, this.error = c(oe, $, "error"), this.fatal = c(oe, $, "fatal"), this.warn = c(oe, $, "warn"), this.info = c(oe, $, "info"), this.debug = c(oe, $, "debug"), this.trace = c(oe, $, "trace"), H && (this.serializers = H, this._serialize = ae), l && (this._logEvent = d(
          [].concat(oe._logEvent.bindings, $)
        ));
      }
      return te.prototype = this, new te(this);
    }
    return R;
  }
  i.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: P, epochTime: w, unixTime: O, isoTime: b });
  function s(g, l, y, C) {
    const T = Object.getPrototypeOf(l);
    l[y] = l.levelVal > l.levels.values[y] ? S : T[y] ? T[y] : e[y] || e[C] || S, a(g, l, y);
  }
  function a(g, l, y) {
    !g.transmit && l[y] === S || (l[y] = function(C) {
      return function() {
        const U = g.timestamp(), B = new Array(arguments.length), G = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var R = 0; R < B.length; R++)
          B[R] = arguments[R];
        if (g.serialize && !g.asObject && u(B, this._serialize, this.serializers, this._stdErrSerialize), g.asObject ? C.call(G, o(this, y, B, U)) : C.apply(G, B), g.transmit) {
          const L = g.transmit.level || l.level, Q = i.levels.values[L], V = i.levels.values[y];
          if (V < Q)
            return;
          f(this, {
            ts: U,
            methodLevel: y,
            methodValue: V,
            transmitLevel: L,
            transmitValue: i.levels.values[g.transmit.level || l.level],
            send: g.transmit.send,
            val: l.levelVal
          }, B);
        }
      };
    }(l[y]));
  }
  function o(g, l, y, C) {
    g._serialize && u(y, g._serialize, g.serializers, g._stdErrSerialize);
    const T = y.slice();
    let U = T[0];
    const B = {};
    C && (B.time = C), B.level = i.levels.values[l];
    let G = (g._childLevel | 0) + 1;
    if (G < 1 && (G = 1), U !== null && typeof U == "object") {
      for (; G-- && typeof T[0] == "object"; )
        Object.assign(B, T.shift());
      U = T.length ? t(T.shift(), T) : void 0;
    } else
      typeof U == "string" && (U = t(T.shift(), T));
    return U !== void 0 && (B.msg = U), B;
  }
  function u(g, l, y, C) {
    for (const T in g)
      if (C && g[T] instanceof Error)
        g[T] = i.stdSerializers.err(g[T]);
      else if (typeof g[T] == "object" && !Array.isArray(g[T]))
        for (const U in g[T])
          l && l.indexOf(U) > -1 && U in y && (g[T][U] = y[U](g[T][U]));
  }
  function c(g, l, y) {
    return function() {
      const C = new Array(1 + arguments.length);
      C[0] = l;
      for (var T = 1; T < C.length; T++)
        C[T] = arguments[T - 1];
      return g[y].apply(this, C);
    };
  }
  function f(g, l, y) {
    const C = l.send, T = l.ts, U = l.methodLevel, B = l.methodValue, G = l.val, R = g._logEvent.bindings;
    u(
      y,
      g._serialize || Object.keys(g.serializers),
      g.serializers,
      g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize
    ), g._logEvent.ts = T, g._logEvent.messages = y.filter(function(L) {
      return R.indexOf(L) === -1;
    }), g._logEvent.level.label = U, g._logEvent.level.value = B, C(U, g._logEvent, G), g._logEvent = d(R);
  }
  function d(g) {
    return {
      ts: 0,
      messages: [],
      bindings: g || [],
      level: { label: "", value: 0 }
    };
  }
  function p(g) {
    const l = {
      type: g.constructor.name,
      msg: g.message,
      stack: g.stack
    };
    for (const y in g)
      l[y] === void 0 && (l[y] = g[y]);
    return l;
  }
  function m(g) {
    return typeof g.timestamp == "function" ? g.timestamp : g.timestamp === !1 ? P : w;
  }
  function v() {
    return {};
  }
  function E(g) {
    return g;
  }
  function S() {
  }
  function P() {
    return !1;
  }
  function w() {
    return Date.now();
  }
  function O() {
    return Math.round(Date.now() / 1e3);
  }
  function b() {
    return new Date(Date.now()).toISOString();
  }
  function x() {
    function g(l) {
      return typeof l < "u" && l;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return g(self) || g(window) || g(this) || {};
    }
  }
  return ia;
}
var Sn = {}, zu;
function Wf() {
  return zu || (zu = 1, Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.PINO_CUSTOM_CONTEXT_KEY = Sn.PINO_LOGGER_DEFAULTS = void 0, Sn.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Sn.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Sn;
}
var zt = {}, Vu;
function hy() {
  if (Vu)
    return zt;
  Vu = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.generateChildLogger = zt.formatChildLoggerContext = zt.getLoggerContext = zt.setBrowserLoggerContext = zt.getBrowserLoggerContext = zt.getDefaultLoggerOptions = void 0;
  const t = Wf();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  zt.getDefaultLoggerOptions = e;
  function r(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[u] || "";
  }
  zt.getBrowserLoggerContext = r;
  function n(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[c] = u, o;
  }
  zt.setBrowserLoggerContext = n;
  function i(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    let c = "";
    return typeof o.bindings > "u" ? c = r(o, u) : c = o.bindings().context || "", c;
  }
  zt.getLoggerContext = i;
  function s(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(o, c);
    return f.trim() ? `${f}/${u}` : u;
  }
  zt.formatChildLoggerContext = s;
  function a(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(o, u, c), d = o.child({ context: f });
    return n(d, f, c);
  }
  return zt.generateChildLogger = a, zt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = jr, r = e.__importDefault(fy());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Wf(), t), e.__exportStar(hy(), t);
})($e);
let dy = class extends jn {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, NO = class {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}, py = class extends jn {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, gy = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, yy = class extends jn {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, my = class extends jn {
  constructor(e) {
    super();
  }
}, vy = class {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}, kO = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
};
class by extends jn {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
let BO = class {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
};
class wy extends jn {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
let VO = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, _y = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, WO = class extends ps {
  constructor() {
    super();
  }
}, Ey = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, ZO = class extends pr.EventEmitter {
  constructor() {
    super();
  }
}, Sy = class {
  constructor(e) {
    this.client = e;
  }
};
var Sc = {}, pi = {}, Ro = {}, To = {};
Object.defineProperty(To, "__esModule", { value: !0 });
To.BrowserRandomSource = void 0;
const Ku = 65536;
class xy {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += Ku)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, Ku)));
    return r;
  }
}
To.BrowserRandomSource = xy;
function Oy(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ao = {}, ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
function Dy(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
ar.wipe = Dy;
const Iy = {}, Cy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Iy
}, Symbol.toStringTag, { value: "Module" })), Ry = /* @__PURE__ */ _c(Cy);
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.NodeRandomSource = void 0;
const Ty = ar;
class Ay {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Oy < "u") {
      const e = Ry;
      e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let r = this._crypto.randomBytes(e);
    if (r.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const n = new Uint8Array(e);
    for (let i = 0; i < n.length; i++)
      n[i] = r[i];
    return (0, Ty.wipe)(r), n;
  }
}
Ao.NodeRandomSource = Ay;
Object.defineProperty(Ro, "__esModule", { value: !0 });
Ro.SystemRandomSource = void 0;
const Py = To, Ny = Ao;
class Ly {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Py.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Ny.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Node";
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
Ro.SystemRandomSource = Ly;
var me = {}, Gf = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(o, u) {
    var c = o >>> 16 & 65535, f = o & 65535, d = u >>> 16 & 65535, p = u & 65535;
    return f * p + (c * p + f * d << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(o, u) {
    return o + u | 0;
  }
  t.add = r;
  function n(o, u) {
    return o - u | 0;
  }
  t.sub = n;
  function i(o, u) {
    return o << u | o >>> 32 - u;
  }
  t.rotl = i;
  function s(o, u) {
    return o << 32 - u | o >>> u;
  }
  t.rotr = s;
  function a(o) {
    return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  }
  t.isInteger = Number.isInteger || a, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(o) {
    return t.isInteger(o) && o >= -t.MAX_SAFE_INTEGER && o <= t.MAX_SAFE_INTEGER;
  };
})(Gf);
Object.defineProperty(me, "__esModule", { value: !0 });
var Qf = Gf;
function Fy(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
me.readInt16BE = Fy;
function My(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
me.readUint16BE = My;
function Uy(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
me.readInt16LE = Uy;
function jy(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
me.readUint16LE = jy;
function Zf(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
me.writeUint16BE = Zf;
me.writeInt16BE = Zf;
function Yf(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
me.writeUint16LE = Yf;
me.writeInt16LE = Yf;
function Ra(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
me.readInt32BE = Ra;
function Ta(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
me.readUint32BE = Ta;
function Aa(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
me.readInt32LE = Aa;
function Pa(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
me.readUint32LE = Pa;
function ro(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
me.writeUint32BE = ro;
me.writeInt32BE = ro;
function no(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
me.writeUint32LE = no;
me.writeInt32LE = no;
function $y(t, e) {
  e === void 0 && (e = 0);
  var r = Ra(t, e), n = Ra(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
me.readInt64BE = $y;
function ky(t, e) {
  e === void 0 && (e = 0);
  var r = Ta(t, e), n = Ta(t, e + 4);
  return r * 4294967296 + n;
}
me.readUint64BE = ky;
function qy(t, e) {
  e === void 0 && (e = 0);
  var r = Aa(t, e), n = Aa(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
me.readInt64LE = qy;
function By(t, e) {
  e === void 0 && (e = 0);
  var r = Pa(t, e), n = Pa(t, e + 4);
  return n * 4294967296 + r;
}
me.readUint64LE = By;
function Jf(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), ro(t / 4294967296 >>> 0, e, r), ro(t >>> 0, e, r + 4), e;
}
me.writeUint64BE = Jf;
me.writeInt64BE = Jf;
function Xf(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), no(t >>> 0, e, r), no(t / 4294967296 >>> 0, e, r + 4), e;
}
me.writeUint64LE = Xf;
me.writeInt64LE = Xf;
function zy(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = t / 8 + r - 1; s >= r; s--)
    n += e[s] * i, i *= 256;
  return n;
}
me.readUintBE = zy;
function Vy(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = r; s < r + t / 8; s++)
    n += e[s] * i, i *= 256;
  return n;
}
me.readUintLE = Vy;
function Ky(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Qf.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, s = t / 8 + n - 1; s >= n; s--)
    r[s] = e / i & 255, i *= 256;
  return r;
}
me.writeUintBE = Ky;
function Hy(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Qf.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, s = n; s < n + t / 8; s++)
    r[s] = e / i & 255, i *= 256;
  return r;
}
me.writeUintLE = Hy;
function Wy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
me.readFloat32BE = Wy;
function Gy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
me.readFloat32LE = Gy;
function Qy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
me.readFloat64BE = Qy;
function Zy(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
me.readFloat64LE = Zy;
function Yy(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
me.writeFloat32BE = Yy;
function Jy(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
me.writeFloat32LE = Jy;
function Xy(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
me.writeFloat64BE = Xy;
function em(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
me.writeFloat64LE = em;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Ro, r = me, n = ar;
  t.defaultRandomSource = new e.SystemRandomSource();
  function i(c, f = t.defaultRandomSource) {
    return f.randomBytes(c);
  }
  t.randomBytes = i;
  function s(c = t.defaultRandomSource) {
    const f = i(4, c), d = (0, r.readUint32LE)(f);
    return (0, n.wipe)(f), d;
  }
  t.randomUint32 = s;
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(c, f = a, d = t.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let p = "";
    const m = f.length, v = 256 - 256 % m;
    for (; c > 0; ) {
      const E = i(Math.ceil(c * 256 / v), d);
      for (let S = 0; S < E.length && c > 0; S++) {
        const P = E[S];
        P < v && (p += f.charAt(P % m), c--);
      }
      (0, n.wipe)(E);
    }
    return p;
  }
  t.randomString = o;
  function u(c, f = a, d = t.defaultRandomSource) {
    const p = Math.ceil(c / (Math.log(f.length) / Math.LN2));
    return o(p, f, d);
  }
  t.randomStringForEntropy = u;
})(pi);
var eh = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = me, r = ar;
  t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
  var n = (
    /** @class */
    function() {
      function o() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return o.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, o.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, o.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
      }, o.prototype.update = function(u, c) {
        if (c === void 0 && (c = u.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += c, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && c > 0; )
            this._buffer[this._bufferLength++] = u[f++], c--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (c >= this.blockSize && (f = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, u, f, c), c %= this.blockSize); c > 0; )
          this._buffer[this._bufferLength++] = u[f++], c--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var c = this._bytesHashed, f = this._bufferLength, d = c / 536870912 | 0, p = c << 3, m = c % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var v = f + 1; v < m - 8; v++)
            this._buffer[v] = 0;
          e.writeUint32BE(d, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var v = 0; v < this.digestLength / 8; v++)
          e.writeUint32BE(this._stateHi[v], u, v * 8), e.writeUint32BE(this._stateLo[v], u, v * 8 + 4);
        return this;
      }, o.prototype.digest = function() {
        var u = new Uint8Array(this.digestLength);
        return this.finish(u), u;
      }, o.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, o.prototype.restoreState = function(u) {
        return this._stateHi.set(u.stateHi), this._stateLo.set(u.stateLo), this._bufferLength = u.bufferLength, u.buffer && this._buffer.set(u.buffer), this._bytesHashed = u.bytesHashed, this._finished = !1, this;
      }, o.prototype.cleanSavedState = function(u) {
        r.wipe(u.stateHi), r.wipe(u.stateLo), u.buffer && r.wipe(u.buffer), u.bufferLength = 0, u.bytesHashed = 0;
      }, o;
    }()
  );
  t.SHA512 = n;
  var i = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function s(o, u, c, f, d, p, m) {
    for (var v = c[0], E = c[1], S = c[2], P = c[3], w = c[4], O = c[5], b = c[6], x = c[7], g = f[0], l = f[1], y = f[2], C = f[3], T = f[4], U = f[5], B = f[6], G = f[7], R, L, Q, V, k, z, $, K; m >= 128; ) {
      for (var fe = 0; fe < 16; fe++) {
        var H = 8 * fe + p;
        o[fe] = e.readUint32BE(d, H), u[fe] = e.readUint32BE(d, H + 4);
      }
      for (var fe = 0; fe < 80; fe++) {
        var ae = v, te = E, oe = S, M = P, F = w, A = O, h = b, I = x, Z = g, X = l, De = y, Ie = C, we = T, Fe = U, Je = B, He = G;
        if (R = x, L = G, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = (w >>> 14 | T << 32 - 14) ^ (w >>> 18 | T << 32 - 18) ^ (T >>> 41 - 32 | w << 32 - (41 - 32)), L = (T >>> 14 | w << 32 - 14) ^ (T >>> 18 | w << 32 - 18) ^ (w >>> 41 - 32 | T << 32 - (41 - 32)), k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, R = w & O ^ ~w & b, L = T & U ^ ~T & B, k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, R = i[fe * 2], L = i[fe * 2 + 1], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, R = o[fe % 16], L = u[fe % 16], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, Q = $ & 65535 | K << 16, V = k & 65535 | z << 16, R = Q, L = V, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = (v >>> 28 | g << 32 - 28) ^ (g >>> 34 - 32 | v << 32 - (34 - 32)) ^ (g >>> 39 - 32 | v << 32 - (39 - 32)), L = (g >>> 28 | v << 32 - 28) ^ (v >>> 34 - 32 | g << 32 - (34 - 32)) ^ (v >>> 39 - 32 | g << 32 - (39 - 32)), k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, R = v & E ^ v & S ^ E & S, L = g & l ^ g & y ^ l & y, k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, I = $ & 65535 | K << 16, He = k & 65535 | z << 16, R = M, L = Ie, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = Q, L = V, k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, M = $ & 65535 | K << 16, Ie = k & 65535 | z << 16, E = ae, S = te, P = oe, w = M, O = F, b = A, x = h, v = I, l = Z, y = X, C = De, T = Ie, U = we, B = Fe, G = Je, g = He, fe % 16 === 15)
          for (var H = 0; H < 16; H++)
            R = o[H], L = u[H], k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = o[(H + 9) % 16], L = u[(H + 9) % 16], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, Q = o[(H + 1) % 16], V = u[(H + 1) % 16], R = (Q >>> 1 | V << 32 - 1) ^ (Q >>> 8 | V << 32 - 8) ^ Q >>> 7, L = (V >>> 1 | Q << 32 - 1) ^ (V >>> 8 | Q << 32 - 8) ^ (V >>> 7 | Q << 32 - 7), k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, Q = o[(H + 14) % 16], V = u[(H + 14) % 16], R = (Q >>> 19 | V << 32 - 19) ^ (V >>> 61 - 32 | Q << 32 - (61 - 32)) ^ Q >>> 6, L = (V >>> 19 | Q << 32 - 19) ^ (Q >>> 61 - 32 | V << 32 - (61 - 32)) ^ (V >>> 6 | Q << 32 - 6), k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, o[H] = $ & 65535 | K << 16, u[H] = k & 65535 | z << 16;
      }
      R = v, L = g, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[0], L = f[0], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[0] = v = $ & 65535 | K << 16, f[0] = g = k & 65535 | z << 16, R = E, L = l, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[1], L = f[1], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[1] = E = $ & 65535 | K << 16, f[1] = l = k & 65535 | z << 16, R = S, L = y, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[2], L = f[2], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[2] = S = $ & 65535 | K << 16, f[2] = y = k & 65535 | z << 16, R = P, L = C, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[3], L = f[3], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[3] = P = $ & 65535 | K << 16, f[3] = C = k & 65535 | z << 16, R = w, L = T, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[4], L = f[4], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[4] = w = $ & 65535 | K << 16, f[4] = T = k & 65535 | z << 16, R = O, L = U, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[5], L = f[5], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[5] = O = $ & 65535 | K << 16, f[5] = U = k & 65535 | z << 16, R = b, L = B, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[6], L = f[6], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[6] = b = $ & 65535 | K << 16, f[6] = B = k & 65535 | z << 16, R = x, L = G, k = L & 65535, z = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[7], L = f[7], k += L & 65535, z += L >>> 16, $ += R & 65535, K += R >>> 16, z += k >>> 16, $ += z >>> 16, K += $ >>> 16, c[7] = x = $ & 65535 | K << 16, f[7] = G = k & 65535 | z << 16, p += 128, m -= 128;
    }
    return p;
  }
  function a(o) {
    var u = new n();
    u.update(o);
    var c = u.digest();
    return u.clean(), c;
  }
  t.hash = a;
})(eh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = pi, r = eh, n = ar;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function i(M) {
    const F = new Float64Array(16);
    if (M)
      for (let A = 0; A < M.length; A++)
        F[A] = M[A];
    return F;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const a = i(), o = i([1]), u = i([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]), c = i([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]), f = i([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]), d = i([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]), p = i([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function m(M, F) {
    for (let A = 0; A < 16; A++)
      M[A] = F[A] | 0;
  }
  function v(M) {
    let F = 1;
    for (let A = 0; A < 16; A++) {
      let h = M[A] + F + 65535;
      F = Math.floor(h / 65536), M[A] = h - F * 65536;
    }
    M[0] += F - 1 + 37 * (F - 1);
  }
  function E(M, F, A) {
    const h = ~(A - 1);
    for (let I = 0; I < 16; I++) {
      const Z = h & (M[I] ^ F[I]);
      M[I] ^= Z, F[I] ^= Z;
    }
  }
  function S(M, F) {
    const A = i(), h = i();
    for (let I = 0; I < 16; I++)
      h[I] = F[I];
    v(h), v(h), v(h);
    for (let I = 0; I < 2; I++) {
      A[0] = h[0] - 65517;
      for (let X = 1; X < 15; X++)
        A[X] = h[X] - 65535 - (A[X - 1] >> 16 & 1), A[X - 1] &= 65535;
      A[15] = h[15] - 32767 - (A[14] >> 16 & 1);
      const Z = A[15] >> 16 & 1;
      A[14] &= 65535, E(h, A, 1 - Z);
    }
    for (let I = 0; I < 16; I++)
      M[2 * I] = h[I] & 255, M[2 * I + 1] = h[I] >> 8;
  }
  function P(M, F) {
    let A = 0;
    for (let h = 0; h < 32; h++)
      A |= M[h] ^ F[h];
    return (1 & A - 1 >>> 8) - 1;
  }
  function w(M, F) {
    const A = new Uint8Array(32), h = new Uint8Array(32);
    return S(A, M), S(h, F), P(A, h);
  }
  function O(M) {
    const F = new Uint8Array(32);
    return S(F, M), F[0] & 1;
  }
  function b(M, F) {
    for (let A = 0; A < 16; A++)
      M[A] = F[2 * A] + (F[2 * A + 1] << 8);
    M[15] &= 32767;
  }
  function x(M, F, A) {
    for (let h = 0; h < 16; h++)
      M[h] = F[h] + A[h];
  }
  function g(M, F, A) {
    for (let h = 0; h < 16; h++)
      M[h] = F[h] - A[h];
  }
  function l(M, F, A) {
    let h, I, Z = 0, X = 0, De = 0, Ie = 0, we = 0, Fe = 0, Je = 0, He = 0, Ne = 0, Te = 0, _e = 0, Se = 0, Ee = 0, ge = 0, pe = 0, ce = 0, xe = 0, Ce = 0, he = 0, Ae = 0, Me = 0, ke = 0, qe = 0, Ue = 0, nr = 0, cr = 0, Ir = 0, Ct = 0, Cr = 0, ur = 0, Yr = 0, Xe = A[0], Qe = A[1], ot = A[2], rt = A[3], at = A[4], Ze = A[5], ft = A[6], pt = A[7], gt = A[8], ht = A[9], yt = A[10], dt = A[11], ct = A[12], We = A[13], D = A[14], j = A[15];
    h = F[0], Z += h * Xe, X += h * Qe, De += h * ot, Ie += h * rt, we += h * at, Fe += h * Ze, Je += h * ft, He += h * pt, Ne += h * gt, Te += h * ht, _e += h * yt, Se += h * dt, Ee += h * ct, ge += h * We, pe += h * D, ce += h * j, h = F[1], X += h * Xe, De += h * Qe, Ie += h * ot, we += h * rt, Fe += h * at, Je += h * Ze, He += h * ft, Ne += h * pt, Te += h * gt, _e += h * ht, Se += h * yt, Ee += h * dt, ge += h * ct, pe += h * We, ce += h * D, xe += h * j, h = F[2], De += h * Xe, Ie += h * Qe, we += h * ot, Fe += h * rt, Je += h * at, He += h * Ze, Ne += h * ft, Te += h * pt, _e += h * gt, Se += h * ht, Ee += h * yt, ge += h * dt, pe += h * ct, ce += h * We, xe += h * D, Ce += h * j, h = F[3], Ie += h * Xe, we += h * Qe, Fe += h * ot, Je += h * rt, He += h * at, Ne += h * Ze, Te += h * ft, _e += h * pt, Se += h * gt, Ee += h * ht, ge += h * yt, pe += h * dt, ce += h * ct, xe += h * We, Ce += h * D, he += h * j, h = F[4], we += h * Xe, Fe += h * Qe, Je += h * ot, He += h * rt, Ne += h * at, Te += h * Ze, _e += h * ft, Se += h * pt, Ee += h * gt, ge += h * ht, pe += h * yt, ce += h * dt, xe += h * ct, Ce += h * We, he += h * D, Ae += h * j, h = F[5], Fe += h * Xe, Je += h * Qe, He += h * ot, Ne += h * rt, Te += h * at, _e += h * Ze, Se += h * ft, Ee += h * pt, ge += h * gt, pe += h * ht, ce += h * yt, xe += h * dt, Ce += h * ct, he += h * We, Ae += h * D, Me += h * j, h = F[6], Je += h * Xe, He += h * Qe, Ne += h * ot, Te += h * rt, _e += h * at, Se += h * Ze, Ee += h * ft, ge += h * pt, pe += h * gt, ce += h * ht, xe += h * yt, Ce += h * dt, he += h * ct, Ae += h * We, Me += h * D, ke += h * j, h = F[7], He += h * Xe, Ne += h * Qe, Te += h * ot, _e += h * rt, Se += h * at, Ee += h * Ze, ge += h * ft, pe += h * pt, ce += h * gt, xe += h * ht, Ce += h * yt, he += h * dt, Ae += h * ct, Me += h * We, ke += h * D, qe += h * j, h = F[8], Ne += h * Xe, Te += h * Qe, _e += h * ot, Se += h * rt, Ee += h * at, ge += h * Ze, pe += h * ft, ce += h * pt, xe += h * gt, Ce += h * ht, he += h * yt, Ae += h * dt, Me += h * ct, ke += h * We, qe += h * D, Ue += h * j, h = F[9], Te += h * Xe, _e += h * Qe, Se += h * ot, Ee += h * rt, ge += h * at, pe += h * Ze, ce += h * ft, xe += h * pt, Ce += h * gt, he += h * ht, Ae += h * yt, Me += h * dt, ke += h * ct, qe += h * We, Ue += h * D, nr += h * j, h = F[10], _e += h * Xe, Se += h * Qe, Ee += h * ot, ge += h * rt, pe += h * at, ce += h * Ze, xe += h * ft, Ce += h * pt, he += h * gt, Ae += h * ht, Me += h * yt, ke += h * dt, qe += h * ct, Ue += h * We, nr += h * D, cr += h * j, h = F[11], Se += h * Xe, Ee += h * Qe, ge += h * ot, pe += h * rt, ce += h * at, xe += h * Ze, Ce += h * ft, he += h * pt, Ae += h * gt, Me += h * ht, ke += h * yt, qe += h * dt, Ue += h * ct, nr += h * We, cr += h * D, Ir += h * j, h = F[12], Ee += h * Xe, ge += h * Qe, pe += h * ot, ce += h * rt, xe += h * at, Ce += h * Ze, he += h * ft, Ae += h * pt, Me += h * gt, ke += h * ht, qe += h * yt, Ue += h * dt, nr += h * ct, cr += h * We, Ir += h * D, Ct += h * j, h = F[13], ge += h * Xe, pe += h * Qe, ce += h * ot, xe += h * rt, Ce += h * at, he += h * Ze, Ae += h * ft, Me += h * pt, ke += h * gt, qe += h * ht, Ue += h * yt, nr += h * dt, cr += h * ct, Ir += h * We, Ct += h * D, Cr += h * j, h = F[14], pe += h * Xe, ce += h * Qe, xe += h * ot, Ce += h * rt, he += h * at, Ae += h * Ze, Me += h * ft, ke += h * pt, qe += h * gt, Ue += h * ht, nr += h * yt, cr += h * dt, Ir += h * ct, Ct += h * We, Cr += h * D, ur += h * j, h = F[15], ce += h * Xe, xe += h * Qe, Ce += h * ot, he += h * rt, Ae += h * at, Me += h * Ze, ke += h * ft, qe += h * pt, Ue += h * gt, nr += h * ht, cr += h * yt, Ir += h * dt, Ct += h * ct, Cr += h * We, ur += h * D, Yr += h * j, Z += 38 * xe, X += 38 * Ce, De += 38 * he, Ie += 38 * Ae, we += 38 * Me, Fe += 38 * ke, Je += 38 * qe, He += 38 * Ue, Ne += 38 * nr, Te += 38 * cr, _e += 38 * Ir, Se += 38 * Ct, Ee += 38 * Cr, ge += 38 * ur, pe += 38 * Yr, I = 1, h = Z + I + 65535, I = Math.floor(h / 65536), Z = h - I * 65536, h = X + I + 65535, I = Math.floor(h / 65536), X = h - I * 65536, h = De + I + 65535, I = Math.floor(h / 65536), De = h - I * 65536, h = Ie + I + 65535, I = Math.floor(h / 65536), Ie = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = Fe + I + 65535, I = Math.floor(h / 65536), Fe = h - I * 65536, h = Je + I + 65535, I = Math.floor(h / 65536), Je = h - I * 65536, h = He + I + 65535, I = Math.floor(h / 65536), He = h - I * 65536, h = Ne + I + 65535, I = Math.floor(h / 65536), Ne = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = Se + I + 65535, I = Math.floor(h / 65536), Se = h - I * 65536, h = Ee + I + 65535, I = Math.floor(h / 65536), Ee = h - I * 65536, h = ge + I + 65535, I = Math.floor(h / 65536), ge = h - I * 65536, h = pe + I + 65535, I = Math.floor(h / 65536), pe = h - I * 65536, h = ce + I + 65535, I = Math.floor(h / 65536), ce = h - I * 65536, Z += I - 1 + 37 * (I - 1), I = 1, h = Z + I + 65535, I = Math.floor(h / 65536), Z = h - I * 65536, h = X + I + 65535, I = Math.floor(h / 65536), X = h - I * 65536, h = De + I + 65535, I = Math.floor(h / 65536), De = h - I * 65536, h = Ie + I + 65535, I = Math.floor(h / 65536), Ie = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = Fe + I + 65535, I = Math.floor(h / 65536), Fe = h - I * 65536, h = Je + I + 65535, I = Math.floor(h / 65536), Je = h - I * 65536, h = He + I + 65535, I = Math.floor(h / 65536), He = h - I * 65536, h = Ne + I + 65535, I = Math.floor(h / 65536), Ne = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = Se + I + 65535, I = Math.floor(h / 65536), Se = h - I * 65536, h = Ee + I + 65535, I = Math.floor(h / 65536), Ee = h - I * 65536, h = ge + I + 65535, I = Math.floor(h / 65536), ge = h - I * 65536, h = pe + I + 65535, I = Math.floor(h / 65536), pe = h - I * 65536, h = ce + I + 65535, I = Math.floor(h / 65536), ce = h - I * 65536, Z += I - 1 + 37 * (I - 1), M[0] = Z, M[1] = X, M[2] = De, M[3] = Ie, M[4] = we, M[5] = Fe, M[6] = Je, M[7] = He, M[8] = Ne, M[9] = Te, M[10] = _e, M[11] = Se, M[12] = Ee, M[13] = ge, M[14] = pe, M[15] = ce;
  }
  function y(M, F) {
    l(M, F, F);
  }
  function C(M, F) {
    const A = i();
    let h;
    for (h = 0; h < 16; h++)
      A[h] = F[h];
    for (h = 253; h >= 0; h--)
      y(A, A), h !== 2 && h !== 4 && l(A, A, F);
    for (h = 0; h < 16; h++)
      M[h] = A[h];
  }
  function T(M, F) {
    const A = i();
    let h;
    for (h = 0; h < 16; h++)
      A[h] = F[h];
    for (h = 250; h >= 0; h--)
      y(A, A), h !== 1 && l(A, A, F);
    for (h = 0; h < 16; h++)
      M[h] = A[h];
  }
  function U(M, F) {
    const A = i(), h = i(), I = i(), Z = i(), X = i(), De = i(), Ie = i(), we = i(), Fe = i();
    g(A, M[1], M[0]), g(Fe, F[1], F[0]), l(A, A, Fe), x(h, M[0], M[1]), x(Fe, F[0], F[1]), l(h, h, Fe), l(I, M[3], F[3]), l(I, I, c), l(Z, M[2], F[2]), x(Z, Z, Z), g(X, h, A), g(De, Z, I), x(Ie, Z, I), x(we, h, A), l(M[0], X, De), l(M[1], we, Ie), l(M[2], Ie, De), l(M[3], X, we);
  }
  function B(M, F, A) {
    for (let h = 0; h < 4; h++)
      E(M[h], F[h], A);
  }
  function G(M, F) {
    const A = i(), h = i(), I = i();
    C(I, F[2]), l(A, F[0], I), l(h, F[1], I), S(M, h), M[31] ^= O(A) << 7;
  }
  function R(M, F, A) {
    m(M[0], a), m(M[1], o), m(M[2], o), m(M[3], a);
    for (let h = 255; h >= 0; --h) {
      const I = A[h / 8 | 0] >> (h & 7) & 1;
      B(M, F, I), U(F, M), U(M, M), B(M, F, I);
    }
  }
  function L(M, F) {
    const A = [i(), i(), i(), i()];
    m(A[0], f), m(A[1], d), m(A[2], o), l(A[3], f, d), R(M, A, F);
  }
  function Q(M) {
    if (M.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const F = (0, r.hash)(M);
    F[0] &= 248, F[31] &= 127, F[31] |= 64;
    const A = new Uint8Array(32), h = [i(), i(), i(), i()];
    L(h, F), G(A, h);
    const I = new Uint8Array(64);
    return I.set(M), I.set(A, 32), {
      publicKey: A,
      secretKey: I
    };
  }
  t.generateKeyPairFromSeed = Q;
  function V(M) {
    const F = (0, e.randomBytes)(32, M), A = Q(F);
    return (0, n.wipe)(F), A;
  }
  t.generateKeyPair = V;
  function k(M) {
    if (M.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(M.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = k;
  const z = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function $(M, F) {
    let A, h, I, Z;
    for (h = 63; h >= 32; --h) {
      for (A = 0, I = h - 32, Z = h - 12; I < Z; ++I)
        F[I] += A - 16 * F[h] * z[I - (h - 32)], A = Math.floor((F[I] + 128) / 256), F[I] -= A * 256;
      F[I] += A, F[h] = 0;
    }
    for (A = 0, I = 0; I < 32; I++)
      F[I] += A - (F[31] >> 4) * z[I], A = F[I] >> 8, F[I] &= 255;
    for (I = 0; I < 32; I++)
      F[I] -= A * z[I];
    for (h = 0; h < 32; h++)
      F[h + 1] += F[h] >> 8, M[h] = F[h] & 255;
  }
  function K(M) {
    const F = new Float64Array(64);
    for (let A = 0; A < 64; A++)
      F[A] = M[A];
    for (let A = 0; A < 64; A++)
      M[A] = 0;
    $(M, F);
  }
  function fe(M, F) {
    const A = new Float64Array(64), h = [i(), i(), i(), i()], I = (0, r.hash)(M.subarray(0, 32));
    I[0] &= 248, I[31] &= 127, I[31] |= 64;
    const Z = new Uint8Array(64);
    Z.set(I.subarray(32), 32);
    const X = new r.SHA512();
    X.update(Z.subarray(32)), X.update(F);
    const De = X.digest();
    X.clean(), K(De), L(h, De), G(Z, h), X.reset(), X.update(Z.subarray(0, 32)), X.update(M.subarray(32)), X.update(F);
    const Ie = X.digest();
    K(Ie);
    for (let we = 0; we < 32; we++)
      A[we] = De[we];
    for (let we = 0; we < 32; we++)
      for (let Fe = 0; Fe < 32; Fe++)
        A[we + Fe] += Ie[we] * I[Fe];
    return $(Z.subarray(32), A), Z;
  }
  t.sign = fe;
  function H(M, F) {
    const A = i(), h = i(), I = i(), Z = i(), X = i(), De = i(), Ie = i();
    return m(M[2], o), b(M[1], F), y(I, M[1]), l(Z, I, u), g(I, I, M[2]), x(Z, M[2], Z), y(X, Z), y(De, X), l(Ie, De, X), l(A, Ie, I), l(A, A, Z), T(A, A), l(A, A, I), l(A, A, Z), l(A, A, Z), l(M[0], A, Z), y(h, M[0]), l(h, h, Z), w(h, I) && l(M[0], M[0], p), y(h, M[0]), l(h, h, Z), w(h, I) ? -1 : (O(M[0]) === F[31] >> 7 && g(M[0], a, M[0]), l(M[3], M[0], M[1]), 0);
  }
  function ae(M, F, A) {
    const h = new Uint8Array(32), I = [i(), i(), i(), i()], Z = [i(), i(), i(), i()];
    if (A.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (H(Z, M))
      return !1;
    const X = new r.SHA512();
    X.update(A.subarray(0, 32)), X.update(M), X.update(F);
    const De = X.digest();
    return K(De), R(I, Z, De), L(Z, A.subarray(32)), U(I, Z), G(h, I), !P(A, h);
  }
  t.verify = ae;
  function te(M) {
    let F = [i(), i(), i(), i()];
    if (H(F, M))
      throw new Error("Ed25519: invalid public key");
    let A = i(), h = i(), I = F[1];
    x(A, o, I), g(h, o, I), C(h, h), l(A, A, h);
    let Z = new Uint8Array(32);
    return S(Z, A), Z;
  }
  t.convertPublicKeyToX25519 = te;
  function oe(M) {
    const F = (0, r.hash)(M.subarray(0, 32));
    F[0] &= 248, F[31] &= 127, F[31] |= 64;
    const A = new Uint8Array(F.subarray(0, 32));
    return (0, n.wipe)(F), A;
  }
  t.convertSecretKeyToX25519 = oe;
})(Sc);
const tm = "EdDSA", rm = "JWT", th = ".", rh = "base64url", nm = "utf8", im = "utf8", sm = ":", om = "did", am = "key", Hu = "base58btc", cm = "z", um = "K36", lm = 32;
function xc(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function nh(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? xc(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Na(t, e) {
  e || (e = t.reduce((i, s) => i + s.length, 0));
  const r = nh(e);
  let n = 0;
  for (const i of t)
    r.set(i, n), n += i.length;
  return xc(r);
}
function fm(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), a = s.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[a] = i;
  }
  var o = t.length, u = t.charAt(0), c = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var E = 0, S = 0, P = 0, w = v.length; P !== w && v[P] === 0; )
      P++, E++;
    for (var O = (w - P) * f + 1 >>> 0, b = new Uint8Array(O); P !== w; ) {
      for (var x = v[P], g = 0, l = O - 1; (x !== 0 || g < S) && l !== -1; l--, g++)
        x += 256 * b[l] >>> 0, b[l] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      S = g, P++;
    }
    for (var y = O - S; y !== O && b[y] === 0; )
      y++;
    for (var C = u.repeat(E); y < O; ++y)
      C += t.charAt(b[y]);
    return C;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var E = 0;
    if (v[E] !== " ") {
      for (var S = 0, P = 0; v[E] === u; )
        S++, E++;
      for (var w = (v.length - E) * c + 1 >>> 0, O = new Uint8Array(w); v[E]; ) {
        var b = r[v.charCodeAt(E)];
        if (b === 255)
          return;
        for (var x = 0, g = w - 1; (b !== 0 || x < P) && g !== -1; g--, x++)
          b += o * O[g] >>> 0, O[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        P = x, E++;
      }
      if (v[E] !== " ") {
        for (var l = w - P; l !== w && O[l] === 0; )
          l++;
        for (var y = new Uint8Array(S + (w - l)), C = S; l !== w; )
          y[C++] = O[l++];
        return y;
      }
    }
  }
  function m(v) {
    var E = p(v);
    if (E)
      return E;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: d,
    decodeUnsafe: p,
    decode: m
  };
}
var hm = fm, dm = hm;
const pm = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, gm = (t) => new TextEncoder().encode(t), ym = (t) => new TextDecoder().decode(t);
class mm {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class vm {
  constructor(e, r, n) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = n;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return ih(this, e);
  }
}
class bm {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return ih(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const ih = (t, e) => new bm({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class wm {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new mm(e, r, n), this.decoder = new vm(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Po = ({ name: t, prefix: e, encode: r, decode: n }) => new wm(t, e, r, n), ms = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = dm(r, e);
  return Po({
    prefix: t,
    name: e,
    encode: n,
    decode: (s) => pm(i(s))
  });
}, _m = (t, e, r, n) => {
  const i = {};
  for (let f = 0; f < e.length; ++f)
    i[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const a = new Uint8Array(s * r / 8 | 0);
  let o = 0, u = 0, c = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, a[c++] = 255 & u >> o);
  }
  if (o >= r || 255 & u << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Em = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", a = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], a += 8; a > r; )
      a -= r, s += e[i & o >> a];
  if (a && (s += e[i & o << r - a]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, Pt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Po({
  prefix: e,
  name: t,
  encode(i) {
    return Em(i, n, r);
  },
  decode(i) {
    return _m(i, n, r, t);
  }
}), Sm = Po({
  prefix: "\0",
  name: "identity",
  encode: (t) => ym(t),
  decode: (t) => gm(t)
}), xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Sm
}, Symbol.toStringTag, { value: "Module" })), Om = Pt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Dm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Om
}, Symbol.toStringTag, { value: "Module" })), Im = Pt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Cm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Im
}, Symbol.toStringTag, { value: "Module" })), Rm = ms({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Tm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Rm
}, Symbol.toStringTag, { value: "Module" })), Am = Pt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Pm = Pt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Am,
  base16upper: Pm
}, Symbol.toStringTag, { value: "Module" })), Lm = Pt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Fm = Pt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Mm = Pt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Um = Pt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), jm = Pt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), $m = Pt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), km = Pt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), qm = Pt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Bm = Pt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Lm,
  base32hex: jm,
  base32hexpad: km,
  base32hexpadupper: qm,
  base32hexupper: $m,
  base32pad: Mm,
  base32padupper: Um,
  base32upper: Fm,
  base32z: Bm
}, Symbol.toStringTag, { value: "Module" })), Vm = ms({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Km = ms({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Hm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Vm,
  base36upper: Km
}, Symbol.toStringTag, { value: "Module" })), Wm = ms({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Gm = ms({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), Qm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Wm,
  base58flickr: Gm
}, Symbol.toStringTag, { value: "Module" })), Zm = Pt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Ym = Pt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Jm = Pt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), Xm = Pt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), ev = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Zm,
  base64pad: Ym,
  base64url: Jm,
  base64urlpad: Xm
}, Symbol.toStringTag, { value: "Module" })), sh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), tv = sh.reduce((t, e, r) => (t[r] = e, t), []), rv = sh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function nv(t) {
  return t.reduce((e, r) => (e += tv[r], e), "");
}
function iv(t) {
  const e = [];
  for (const r of t) {
    const n = rv[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const sv = Po({
  prefix: "🚀",
  name: "base256emoji",
  encode: nv,
  decode: iv
}), ov = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: sv
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Wu = {
  ...xm,
  ...Dm,
  ...Cm,
  ...Tm,
  ...Nm,
  ...zm,
  ...Hm,
  ...Qm,
  ...ev,
  ...ov
};
function oh(t, e, r, n) {
  return {
    name: t,
    prefix: e,
    encoder: {
      name: t,
      prefix: e,
      encode: r
    },
    decoder: { decode: n }
  };
}
const Gu = oh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), sa = oh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = nh(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), ah = {
  utf8: Gu,
  "utf-8": Gu,
  hex: Wu.base16,
  latin1: sa,
  ascii: sa,
  binary: sa,
  ...Wu
};
function Qt(t, e = "utf8") {
  const r = ah[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function tr(t, e = "utf8") {
  const r = ah[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? xc(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function io(t) {
  return Qt(tr(ys(t), nm), rh);
}
function ch(t) {
  const e = tr(um, Hu), r = cm + Qt(Na([e, t]), Hu);
  return [om, am, r].join(sm);
}
function av(t) {
  return Qt(t, rh);
}
function cv(t) {
  return tr([io(t.header), io(t.payload)].join(th), im);
}
function uv(t) {
  return [
    io(t.header),
    io(t.payload),
    av(t.signature)
  ].join(th);
}
function Qu(t = pi.randomBytes(lm)) {
  return Sc.generateKeyPairFromSeed(t);
}
async function lv(t, e, r, n, i = ie.fromMiliseconds(Date.now())) {
  const s = { alg: tm, typ: rm }, a = ch(n.publicKey), o = i + r, u = { iss: a, sub: t, aud: e, iat: i, exp: o }, c = cv({ header: s, payload: u }), f = Sc.sign(n.secretKey, c);
  return uv({ header: s, payload: u, signature: f });
}
var Oc = {}, No = {};
Object.defineProperty(No, "__esModule", { value: !0 });
var Mt = me, La = ar, fv = 20;
function hv(t, e, r) {
  for (var n = 1634760805, i = 857760878, s = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], u = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], c = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], v = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], E = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], S = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], P = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], w = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], O = n, b = i, x = s, g = a, l = o, y = u, C = c, T = f, U = d, B = p, G = m, R = v, L = E, Q = S, V = P, k = w, z = 0; z < fv; z += 2)
    O = O + l | 0, L ^= O, L = L >>> 32 - 16 | L << 16, U = U + L | 0, l ^= U, l = l >>> 32 - 12 | l << 12, b = b + y | 0, Q ^= b, Q = Q >>> 32 - 16 | Q << 16, B = B + Q | 0, y ^= B, y = y >>> 32 - 12 | y << 12, x = x + C | 0, V ^= x, V = V >>> 32 - 16 | V << 16, G = G + V | 0, C ^= G, C = C >>> 32 - 12 | C << 12, g = g + T | 0, k ^= g, k = k >>> 32 - 16 | k << 16, R = R + k | 0, T ^= R, T = T >>> 32 - 12 | T << 12, x = x + C | 0, V ^= x, V = V >>> 32 - 8 | V << 8, G = G + V | 0, C ^= G, C = C >>> 32 - 7 | C << 7, g = g + T | 0, k ^= g, k = k >>> 32 - 8 | k << 8, R = R + k | 0, T ^= R, T = T >>> 32 - 7 | T << 7, b = b + y | 0, Q ^= b, Q = Q >>> 32 - 8 | Q << 8, B = B + Q | 0, y ^= B, y = y >>> 32 - 7 | y << 7, O = O + l | 0, L ^= O, L = L >>> 32 - 8 | L << 8, U = U + L | 0, l ^= U, l = l >>> 32 - 7 | l << 7, O = O + y | 0, k ^= O, k = k >>> 32 - 16 | k << 16, G = G + k | 0, y ^= G, y = y >>> 32 - 12 | y << 12, b = b + C | 0, L ^= b, L = L >>> 32 - 16 | L << 16, R = R + L | 0, C ^= R, C = C >>> 32 - 12 | C << 12, x = x + T | 0, Q ^= x, Q = Q >>> 32 - 16 | Q << 16, U = U + Q | 0, T ^= U, T = T >>> 32 - 12 | T << 12, g = g + l | 0, V ^= g, V = V >>> 32 - 16 | V << 16, B = B + V | 0, l ^= B, l = l >>> 32 - 12 | l << 12, x = x + T | 0, Q ^= x, Q = Q >>> 32 - 8 | Q << 8, U = U + Q | 0, T ^= U, T = T >>> 32 - 7 | T << 7, g = g + l | 0, V ^= g, V = V >>> 32 - 8 | V << 8, B = B + V | 0, l ^= B, l = l >>> 32 - 7 | l << 7, b = b + C | 0, L ^= b, L = L >>> 32 - 8 | L << 8, R = R + L | 0, C ^= R, C = C >>> 32 - 7 | C << 7, O = O + y | 0, k ^= O, k = k >>> 32 - 8 | k << 8, G = G + k | 0, y ^= G, y = y >>> 32 - 7 | y << 7;
  Mt.writeUint32LE(O + n | 0, t, 0), Mt.writeUint32LE(b + i | 0, t, 4), Mt.writeUint32LE(x + s | 0, t, 8), Mt.writeUint32LE(g + a | 0, t, 12), Mt.writeUint32LE(l + o | 0, t, 16), Mt.writeUint32LE(y + u | 0, t, 20), Mt.writeUint32LE(C + c | 0, t, 24), Mt.writeUint32LE(T + f | 0, t, 28), Mt.writeUint32LE(U + d | 0, t, 32), Mt.writeUint32LE(B + p | 0, t, 36), Mt.writeUint32LE(G + m | 0, t, 40), Mt.writeUint32LE(R + v | 0, t, 44), Mt.writeUint32LE(L + E | 0, t, 48), Mt.writeUint32LE(Q + S | 0, t, 52), Mt.writeUint32LE(V + P | 0, t, 56), Mt.writeUint32LE(k + w | 0, t, 60);
}
function uh(t, e, r, n, i) {
  if (i === void 0 && (i = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, a;
  if (i === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    s = new Uint8Array(16), a = s.length - e.length, s.set(e, a);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    s = e, a = i;
  }
  for (var o = new Uint8Array(64), u = 0; u < r.length; u += 64) {
    hv(o, s, t);
    for (var c = u; c < u + 64 && c < r.length; c++)
      n[c] = r[c] ^ o[c - u];
    pv(s, 0, a);
  }
  return La.wipe(o), i === 0 && La.wipe(s), n;
}
No.streamXOR = uh;
function dv(t, e, r, n) {
  return n === void 0 && (n = 0), La.wipe(r), uh(t, e, r, r, n);
}
No.stream = dv;
function pv(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var lh = {}, gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
function gv(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
gn.select = gv;
function yv(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
gn.lessOrEqual = yv;
function fh(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
gn.compare = fh;
function mv(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : fh(t, e) !== 0;
}
gn.equal = mv;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = gn, r = ar;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function a(o) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var u = o[0] | o[1] << 8;
        this._r[0] = u & 8191;
        var c = o[2] | o[3] << 8;
        this._r[1] = (u >>> 13 | c << 3) & 8191;
        var f = o[4] | o[5] << 8;
        this._r[2] = (c >>> 10 | f << 6) & 7939;
        var d = o[6] | o[7] << 8;
        this._r[3] = (f >>> 7 | d << 9) & 8191;
        var p = o[8] | o[9] << 8;
        this._r[4] = (d >>> 4 | p << 12) & 255, this._r[5] = p >>> 1 & 8190;
        var m = o[10] | o[11] << 8;
        this._r[6] = (p >>> 14 | m << 2) & 8191;
        var v = o[12] | o[13] << 8;
        this._r[7] = (m >>> 11 | v << 5) & 8065;
        var E = o[14] | o[15] << 8;
        this._r[8] = (v >>> 8 | E << 8) & 8191, this._r[9] = E >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return a.prototype._blocks = function(o, u, c) {
        for (var f = this._fin ? 0 : 2048, d = this._h[0], p = this._h[1], m = this._h[2], v = this._h[3], E = this._h[4], S = this._h[5], P = this._h[6], w = this._h[7], O = this._h[8], b = this._h[9], x = this._r[0], g = this._r[1], l = this._r[2], y = this._r[3], C = this._r[4], T = this._r[5], U = this._r[6], B = this._r[7], G = this._r[8], R = this._r[9]; c >= 16; ) {
          var L = o[u + 0] | o[u + 1] << 8;
          d += L & 8191;
          var Q = o[u + 2] | o[u + 3] << 8;
          p += (L >>> 13 | Q << 3) & 8191;
          var V = o[u + 4] | o[u + 5] << 8;
          m += (Q >>> 10 | V << 6) & 8191;
          var k = o[u + 6] | o[u + 7] << 8;
          v += (V >>> 7 | k << 9) & 8191;
          var z = o[u + 8] | o[u + 9] << 8;
          E += (k >>> 4 | z << 12) & 8191, S += z >>> 1 & 8191;
          var $ = o[u + 10] | o[u + 11] << 8;
          P += (z >>> 14 | $ << 2) & 8191;
          var K = o[u + 12] | o[u + 13] << 8;
          w += ($ >>> 11 | K << 5) & 8191;
          var fe = o[u + 14] | o[u + 15] << 8;
          O += (K >>> 8 | fe << 8) & 8191, b += fe >>> 5 | f;
          var H = 0, ae = H;
          ae += d * x, ae += p * (5 * R), ae += m * (5 * G), ae += v * (5 * B), ae += E * (5 * U), H = ae >>> 13, ae &= 8191, ae += S * (5 * T), ae += P * (5 * C), ae += w * (5 * y), ae += O * (5 * l), ae += b * (5 * g), H += ae >>> 13, ae &= 8191;
          var te = H;
          te += d * g, te += p * x, te += m * (5 * R), te += v * (5 * G), te += E * (5 * B), H = te >>> 13, te &= 8191, te += S * (5 * U), te += P * (5 * T), te += w * (5 * C), te += O * (5 * y), te += b * (5 * l), H += te >>> 13, te &= 8191;
          var oe = H;
          oe += d * l, oe += p * g, oe += m * x, oe += v * (5 * R), oe += E * (5 * G), H = oe >>> 13, oe &= 8191, oe += S * (5 * B), oe += P * (5 * U), oe += w * (5 * T), oe += O * (5 * C), oe += b * (5 * y), H += oe >>> 13, oe &= 8191;
          var M = H;
          M += d * y, M += p * l, M += m * g, M += v * x, M += E * (5 * R), H = M >>> 13, M &= 8191, M += S * (5 * G), M += P * (5 * B), M += w * (5 * U), M += O * (5 * T), M += b * (5 * C), H += M >>> 13, M &= 8191;
          var F = H;
          F += d * C, F += p * y, F += m * l, F += v * g, F += E * x, H = F >>> 13, F &= 8191, F += S * (5 * R), F += P * (5 * G), F += w * (5 * B), F += O * (5 * U), F += b * (5 * T), H += F >>> 13, F &= 8191;
          var A = H;
          A += d * T, A += p * C, A += m * y, A += v * l, A += E * g, H = A >>> 13, A &= 8191, A += S * x, A += P * (5 * R), A += w * (5 * G), A += O * (5 * B), A += b * (5 * U), H += A >>> 13, A &= 8191;
          var h = H;
          h += d * U, h += p * T, h += m * C, h += v * y, h += E * l, H = h >>> 13, h &= 8191, h += S * g, h += P * x, h += w * (5 * R), h += O * (5 * G), h += b * (5 * B), H += h >>> 13, h &= 8191;
          var I = H;
          I += d * B, I += p * U, I += m * T, I += v * C, I += E * y, H = I >>> 13, I &= 8191, I += S * l, I += P * g, I += w * x, I += O * (5 * R), I += b * (5 * G), H += I >>> 13, I &= 8191;
          var Z = H;
          Z += d * G, Z += p * B, Z += m * U, Z += v * T, Z += E * C, H = Z >>> 13, Z &= 8191, Z += S * y, Z += P * l, Z += w * g, Z += O * x, Z += b * (5 * R), H += Z >>> 13, Z &= 8191;
          var X = H;
          X += d * R, X += p * G, X += m * B, X += v * U, X += E * T, H = X >>> 13, X &= 8191, X += S * C, X += P * y, X += w * l, X += O * g, X += b * x, H += X >>> 13, X &= 8191, H = (H << 2) + H | 0, H = H + ae | 0, ae = H & 8191, H = H >>> 13, te += H, d = ae, p = te, m = oe, v = M, E = F, S = A, P = h, w = I, O = Z, b = X, u += 16, c -= 16;
        }
        this._h[0] = d, this._h[1] = p, this._h[2] = m, this._h[3] = v, this._h[4] = E, this._h[5] = S, this._h[6] = P, this._h[7] = w, this._h[8] = O, this._h[9] = b;
      }, a.prototype.finish = function(o, u) {
        u === void 0 && (u = 0);
        var c = new Uint16Array(10), f, d, p, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += f, f = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, c[0] = this._h[0] + 5, f = c[0] >>> 13, c[0] &= 8191, m = 1; m < 10; m++)
          c[m] = this._h[m] + f, f = c[m] >>> 13, c[m] &= 8191;
        for (c[9] -= 8192, d = (f ^ 1) - 1, m = 0; m < 10; m++)
          c[m] &= d;
        for (d = ~d, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & d | c[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, p = this._h[0] + this._pad[0], this._h[0] = p & 65535, m = 1; m < 8; m++)
          p = (this._h[m] + this._pad[m] | 0) + (p >>> 16) | 0, this._h[m] = p & 65535;
        return o[u + 0] = this._h[0] >>> 0, o[u + 1] = this._h[0] >>> 8, o[u + 2] = this._h[1] >>> 0, o[u + 3] = this._h[1] >>> 8, o[u + 4] = this._h[2] >>> 0, o[u + 5] = this._h[2] >>> 8, o[u + 6] = this._h[3] >>> 0, o[u + 7] = this._h[3] >>> 8, o[u + 8] = this._h[4] >>> 0, o[u + 9] = this._h[4] >>> 8, o[u + 10] = this._h[5] >>> 0, o[u + 11] = this._h[5] >>> 8, o[u + 12] = this._h[6] >>> 0, o[u + 13] = this._h[6] >>> 8, o[u + 14] = this._h[7] >>> 0, o[u + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, a.prototype.update = function(o) {
        var u = 0, c = o.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > c && (f = c);
          for (var d = 0; d < f; d++)
            this._buffer[this._leftover + d] = o[u + d];
          if (c -= f, u += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (c >= 16 && (f = c - c % 16, this._blocks(o, u, f), u += f, c -= f), c) {
          for (var d = 0; d < c; d++)
            this._buffer[this._leftover + d] = o[u + d];
          this._leftover += c;
        }
        return this;
      }, a.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var o = new Uint8Array(16);
        return this.finish(o), o;
      }, a.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, a;
    }()
  );
  t.Poly1305 = n;
  function i(a, o) {
    var u = new n(a);
    u.update(o);
    var c = u.digest();
    return u.clean(), c;
  }
  t.oneTimeAuth = i;
  function s(a, o) {
    return a.length !== t.DIGEST_LENGTH || o.length !== t.DIGEST_LENGTH ? !1 : e.equal(a, o);
  }
  t.equal = s;
})(lh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = No, r = lh, n = ar, i = me, s = gn;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var a = new Uint8Array(16), o = (
    /** @class */
    function() {
      function u(c) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, c.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(c);
      }
      return u.prototype.seal = function(c, f, d, p) {
        if (c.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(c, m.length - c.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var E = f.length + this.tagLength, S;
        if (p) {
          if (p.length !== E)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          S = p;
        } else
          S = new Uint8Array(E);
        return e.streamXOR(this._key, m, f, S, 4), this._authenticate(S.subarray(S.length - this.tagLength, S.length), v, S.subarray(0, S.length - this.tagLength), d), n.wipe(m), S;
      }, u.prototype.open = function(c, f, d, p) {
        if (c.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(c, m.length - c.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var E = new Uint8Array(this.tagLength);
        if (this._authenticate(E, v, f.subarray(0, f.length - this.tagLength), d), !s.equal(E, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var S = f.length - this.tagLength, P;
        if (p) {
          if (p.length !== S)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          P = p;
        } else
          P = new Uint8Array(S);
        return e.streamXOR(this._key, m, f.subarray(0, f.length - this.tagLength), P, 4), n.wipe(m), P;
      }, u.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, u.prototype._authenticate = function(c, f, d, p) {
        var m = new r.Poly1305(f);
        p && (m.update(p), p.length % 16 > 0 && m.update(a.subarray(p.length % 16))), m.update(d), d.length % 16 > 0 && m.update(a.subarray(d.length % 16));
        var v = new Uint8Array(8);
        p && i.writeUint64LE(p.length, v), m.update(v), i.writeUint64LE(d.length, v), m.update(v);
        for (var E = m.digest(), S = 0; S < E.length; S++)
          c[S] = E[S];
        m.clean(), n.wipe(E), n.wipe(v);
      }, u;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(Oc);
var hh = {}, vs = {}, Dc = {};
Object.defineProperty(Dc, "__esModule", { value: !0 });
function vv(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
Dc.isSerializableHash = vv;
Object.defineProperty(vs, "__esModule", { value: !0 });
var Ar = Dc, bv = gn, wv = ar, dh = (
  /** @class */
  function() {
    function t(e, r) {
      this._finished = !1, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var n = new Uint8Array(this.blockSize);
      r.length > this.blockSize ? this._inner.update(r).finish(n).clean() : n.set(r);
      for (var i = 0; i < n.length; i++)
        n[i] ^= 54;
      this._inner.update(n);
      for (var i = 0; i < n.length; i++)
        n[i] ^= 106;
      this._outer.update(n), Ar.isSerializableHash(this._inner) && Ar.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), wv.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!Ar.isSerializableHash(this._inner) || !Ar.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      Ar.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Ar.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!Ar.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!Ar.isSerializableHash(this._inner) || !Ar.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!Ar.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
vs.HMAC = dh;
function _v(t, e, r) {
  var n = new dh(t, e);
  n.update(r);
  var i = n.digest();
  return n.clean(), i;
}
vs.hmac = _v;
vs.equal = bv.equal;
Object.defineProperty(hh, "__esModule", { value: !0 });
var Zu = vs, Yu = ar, Ev = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
      var s = Zu.hmac(this._hash, n, r);
      this._hmac = new Zu.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return t.prototype._fillBuffer = function() {
      this._counter[0]++;
      var e = this._counter[0];
      if (e === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, t.prototype.expand = function(e) {
      for (var r = new Uint8Array(e), n = 0; n < r.length; n++)
        this._bufpos === this._buffer.length && this._fillBuffer(), r[n] = this._buffer[this._bufpos++];
      return r;
    }, t.prototype.clean = function() {
      this._hmac.clean(), Yu.wipe(this._buffer), Yu.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Sv = hh.HKDF = Ev, Lo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = me, r = ar;
  t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
  var n = (
    /** @class */
    function() {
      function o() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return o.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, o.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, o.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._temp), this.reset();
      }, o.prototype.update = function(u, c) {
        if (c === void 0 && (c = u.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += c, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && c > 0; )
            this._buffer[this._bufferLength++] = u[f++], c--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (c >= this.blockSize && (f = s(this._temp, this._state, u, f, c), c %= this.blockSize); c > 0; )
          this._buffer[this._bufferLength++] = u[f++], c--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var c = this._bytesHashed, f = this._bufferLength, d = c / 536870912 | 0, p = c << 3, m = c % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var v = f + 1; v < m - 8; v++)
            this._buffer[v] = 0;
          e.writeUint32BE(d, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), s(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
        }
        for (var v = 0; v < this.digestLength / 4; v++)
          e.writeUint32BE(this._state[v], u, v * 4);
        return this;
      }, o.prototype.digest = function() {
        var u = new Uint8Array(this.digestLength);
        return this.finish(u), u;
      }, o.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, o.prototype.restoreState = function(u) {
        return this._state.set(u.state), this._bufferLength = u.bufferLength, u.buffer && this._buffer.set(u.buffer), this._bytesHashed = u.bytesHashed, this._finished = !1, this;
      }, o.prototype.cleanSavedState = function(u) {
        r.wipe(u.state), u.buffer && r.wipe(u.buffer), u.bufferLength = 0, u.bytesHashed = 0;
      }, o;
    }()
  );
  t.SHA256 = n;
  var i = new Int32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  function s(o, u, c, f, d) {
    for (; d >= 64; ) {
      for (var p = u[0], m = u[1], v = u[2], E = u[3], S = u[4], P = u[5], w = u[6], O = u[7], b = 0; b < 16; b++) {
        var x = f + b * 4;
        o[b] = e.readUint32BE(c, x);
      }
      for (var b = 16; b < 64; b++) {
        var g = o[b - 2], l = (g >>> 17 | g << 32 - 17) ^ (g >>> 19 | g << 32 - 19) ^ g >>> 10;
        g = o[b - 15];
        var y = (g >>> 7 | g << 32 - 7) ^ (g >>> 18 | g << 32 - 18) ^ g >>> 3;
        o[b] = (l + o[b - 7] | 0) + (y + o[b - 16] | 0);
      }
      for (var b = 0; b < 64; b++) {
        var l = (((S >>> 6 | S << 26) ^ (S >>> 11 | S << 21) ^ (S >>> 25 | S << 7)) + (S & P ^ ~S & w) | 0) + (O + (i[b] + o[b] | 0) | 0) | 0, y = ((p >>> 2 | p << 32 - 2) ^ (p >>> 13 | p << 32 - 13) ^ (p >>> 22 | p << 32 - 22)) + (p & m ^ p & v ^ m & v) | 0;
        O = w, w = P, P = S, S = E + l | 0, E = v, v = m, m = p, p = l + y | 0;
      }
      u[0] += p, u[1] += m, u[2] += v, u[3] += E, u[4] += S, u[5] += P, u[6] += w, u[7] += O, f += 64, d -= 64;
    }
    return f;
  }
  function a(o) {
    var u = new n();
    u.update(o);
    var c = u.digest();
    return u.clean(), c;
  }
  t.hash = a;
})(Lo);
var Ic = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = pi, r = ar;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(b) {
    const x = new Float64Array(16);
    if (b)
      for (let g = 0; g < b.length; g++)
        x[g] = b[g];
    return x;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const s = n([56129, 1]);
  function a(b) {
    let x = 1;
    for (let g = 0; g < 16; g++) {
      let l = b[g] + x + 65535;
      x = Math.floor(l / 65536), b[g] = l - x * 65536;
    }
    b[0] += x - 1 + 37 * (x - 1);
  }
  function o(b, x, g) {
    const l = ~(g - 1);
    for (let y = 0; y < 16; y++) {
      const C = l & (b[y] ^ x[y]);
      b[y] ^= C, x[y] ^= C;
    }
  }
  function u(b, x) {
    const g = n(), l = n();
    for (let y = 0; y < 16; y++)
      l[y] = x[y];
    a(l), a(l), a(l);
    for (let y = 0; y < 2; y++) {
      g[0] = l[0] - 65517;
      for (let T = 1; T < 15; T++)
        g[T] = l[T] - 65535 - (g[T - 1] >> 16 & 1), g[T - 1] &= 65535;
      g[15] = l[15] - 32767 - (g[14] >> 16 & 1);
      const C = g[15] >> 16 & 1;
      g[14] &= 65535, o(l, g, 1 - C);
    }
    for (let y = 0; y < 16; y++)
      b[2 * y] = l[y] & 255, b[2 * y + 1] = l[y] >> 8;
  }
  function c(b, x) {
    for (let g = 0; g < 16; g++)
      b[g] = x[2 * g] + (x[2 * g + 1] << 8);
    b[15] &= 32767;
  }
  function f(b, x, g) {
    for (let l = 0; l < 16; l++)
      b[l] = x[l] + g[l];
  }
  function d(b, x, g) {
    for (let l = 0; l < 16; l++)
      b[l] = x[l] - g[l];
  }
  function p(b, x, g) {
    let l, y, C = 0, T = 0, U = 0, B = 0, G = 0, R = 0, L = 0, Q = 0, V = 0, k = 0, z = 0, $ = 0, K = 0, fe = 0, H = 0, ae = 0, te = 0, oe = 0, M = 0, F = 0, A = 0, h = 0, I = 0, Z = 0, X = 0, De = 0, Ie = 0, we = 0, Fe = 0, Je = 0, He = 0, Ne = g[0], Te = g[1], _e = g[2], Se = g[3], Ee = g[4], ge = g[5], pe = g[6], ce = g[7], xe = g[8], Ce = g[9], he = g[10], Ae = g[11], Me = g[12], ke = g[13], qe = g[14], Ue = g[15];
    l = x[0], C += l * Ne, T += l * Te, U += l * _e, B += l * Se, G += l * Ee, R += l * ge, L += l * pe, Q += l * ce, V += l * xe, k += l * Ce, z += l * he, $ += l * Ae, K += l * Me, fe += l * ke, H += l * qe, ae += l * Ue, l = x[1], T += l * Ne, U += l * Te, B += l * _e, G += l * Se, R += l * Ee, L += l * ge, Q += l * pe, V += l * ce, k += l * xe, z += l * Ce, $ += l * he, K += l * Ae, fe += l * Me, H += l * ke, ae += l * qe, te += l * Ue, l = x[2], U += l * Ne, B += l * Te, G += l * _e, R += l * Se, L += l * Ee, Q += l * ge, V += l * pe, k += l * ce, z += l * xe, $ += l * Ce, K += l * he, fe += l * Ae, H += l * Me, ae += l * ke, te += l * qe, oe += l * Ue, l = x[3], B += l * Ne, G += l * Te, R += l * _e, L += l * Se, Q += l * Ee, V += l * ge, k += l * pe, z += l * ce, $ += l * xe, K += l * Ce, fe += l * he, H += l * Ae, ae += l * Me, te += l * ke, oe += l * qe, M += l * Ue, l = x[4], G += l * Ne, R += l * Te, L += l * _e, Q += l * Se, V += l * Ee, k += l * ge, z += l * pe, $ += l * ce, K += l * xe, fe += l * Ce, H += l * he, ae += l * Ae, te += l * Me, oe += l * ke, M += l * qe, F += l * Ue, l = x[5], R += l * Ne, L += l * Te, Q += l * _e, V += l * Se, k += l * Ee, z += l * ge, $ += l * pe, K += l * ce, fe += l * xe, H += l * Ce, ae += l * he, te += l * Ae, oe += l * Me, M += l * ke, F += l * qe, A += l * Ue, l = x[6], L += l * Ne, Q += l * Te, V += l * _e, k += l * Se, z += l * Ee, $ += l * ge, K += l * pe, fe += l * ce, H += l * xe, ae += l * Ce, te += l * he, oe += l * Ae, M += l * Me, F += l * ke, A += l * qe, h += l * Ue, l = x[7], Q += l * Ne, V += l * Te, k += l * _e, z += l * Se, $ += l * Ee, K += l * ge, fe += l * pe, H += l * ce, ae += l * xe, te += l * Ce, oe += l * he, M += l * Ae, F += l * Me, A += l * ke, h += l * qe, I += l * Ue, l = x[8], V += l * Ne, k += l * Te, z += l * _e, $ += l * Se, K += l * Ee, fe += l * ge, H += l * pe, ae += l * ce, te += l * xe, oe += l * Ce, M += l * he, F += l * Ae, A += l * Me, h += l * ke, I += l * qe, Z += l * Ue, l = x[9], k += l * Ne, z += l * Te, $ += l * _e, K += l * Se, fe += l * Ee, H += l * ge, ae += l * pe, te += l * ce, oe += l * xe, M += l * Ce, F += l * he, A += l * Ae, h += l * Me, I += l * ke, Z += l * qe, X += l * Ue, l = x[10], z += l * Ne, $ += l * Te, K += l * _e, fe += l * Se, H += l * Ee, ae += l * ge, te += l * pe, oe += l * ce, M += l * xe, F += l * Ce, A += l * he, h += l * Ae, I += l * Me, Z += l * ke, X += l * qe, De += l * Ue, l = x[11], $ += l * Ne, K += l * Te, fe += l * _e, H += l * Se, ae += l * Ee, te += l * ge, oe += l * pe, M += l * ce, F += l * xe, A += l * Ce, h += l * he, I += l * Ae, Z += l * Me, X += l * ke, De += l * qe, Ie += l * Ue, l = x[12], K += l * Ne, fe += l * Te, H += l * _e, ae += l * Se, te += l * Ee, oe += l * ge, M += l * pe, F += l * ce, A += l * xe, h += l * Ce, I += l * he, Z += l * Ae, X += l * Me, De += l * ke, Ie += l * qe, we += l * Ue, l = x[13], fe += l * Ne, H += l * Te, ae += l * _e, te += l * Se, oe += l * Ee, M += l * ge, F += l * pe, A += l * ce, h += l * xe, I += l * Ce, Z += l * he, X += l * Ae, De += l * Me, Ie += l * ke, we += l * qe, Fe += l * Ue, l = x[14], H += l * Ne, ae += l * Te, te += l * _e, oe += l * Se, M += l * Ee, F += l * ge, A += l * pe, h += l * ce, I += l * xe, Z += l * Ce, X += l * he, De += l * Ae, Ie += l * Me, we += l * ke, Fe += l * qe, Je += l * Ue, l = x[15], ae += l * Ne, te += l * Te, oe += l * _e, M += l * Se, F += l * Ee, A += l * ge, h += l * pe, I += l * ce, Z += l * xe, X += l * Ce, De += l * he, Ie += l * Ae, we += l * Me, Fe += l * ke, Je += l * qe, He += l * Ue, C += 38 * te, T += 38 * oe, U += 38 * M, B += 38 * F, G += 38 * A, R += 38 * h, L += 38 * I, Q += 38 * Z, V += 38 * X, k += 38 * De, z += 38 * Ie, $ += 38 * we, K += 38 * Fe, fe += 38 * Je, H += 38 * He, y = 1, l = C + y + 65535, y = Math.floor(l / 65536), C = l - y * 65536, l = T + y + 65535, y = Math.floor(l / 65536), T = l - y * 65536, l = U + y + 65535, y = Math.floor(l / 65536), U = l - y * 65536, l = B + y + 65535, y = Math.floor(l / 65536), B = l - y * 65536, l = G + y + 65535, y = Math.floor(l / 65536), G = l - y * 65536, l = R + y + 65535, y = Math.floor(l / 65536), R = l - y * 65536, l = L + y + 65535, y = Math.floor(l / 65536), L = l - y * 65536, l = Q + y + 65535, y = Math.floor(l / 65536), Q = l - y * 65536, l = V + y + 65535, y = Math.floor(l / 65536), V = l - y * 65536, l = k + y + 65535, y = Math.floor(l / 65536), k = l - y * 65536, l = z + y + 65535, y = Math.floor(l / 65536), z = l - y * 65536, l = $ + y + 65535, y = Math.floor(l / 65536), $ = l - y * 65536, l = K + y + 65535, y = Math.floor(l / 65536), K = l - y * 65536, l = fe + y + 65535, y = Math.floor(l / 65536), fe = l - y * 65536, l = H + y + 65535, y = Math.floor(l / 65536), H = l - y * 65536, l = ae + y + 65535, y = Math.floor(l / 65536), ae = l - y * 65536, C += y - 1 + 37 * (y - 1), y = 1, l = C + y + 65535, y = Math.floor(l / 65536), C = l - y * 65536, l = T + y + 65535, y = Math.floor(l / 65536), T = l - y * 65536, l = U + y + 65535, y = Math.floor(l / 65536), U = l - y * 65536, l = B + y + 65535, y = Math.floor(l / 65536), B = l - y * 65536, l = G + y + 65535, y = Math.floor(l / 65536), G = l - y * 65536, l = R + y + 65535, y = Math.floor(l / 65536), R = l - y * 65536, l = L + y + 65535, y = Math.floor(l / 65536), L = l - y * 65536, l = Q + y + 65535, y = Math.floor(l / 65536), Q = l - y * 65536, l = V + y + 65535, y = Math.floor(l / 65536), V = l - y * 65536, l = k + y + 65535, y = Math.floor(l / 65536), k = l - y * 65536, l = z + y + 65535, y = Math.floor(l / 65536), z = l - y * 65536, l = $ + y + 65535, y = Math.floor(l / 65536), $ = l - y * 65536, l = K + y + 65535, y = Math.floor(l / 65536), K = l - y * 65536, l = fe + y + 65535, y = Math.floor(l / 65536), fe = l - y * 65536, l = H + y + 65535, y = Math.floor(l / 65536), H = l - y * 65536, l = ae + y + 65535, y = Math.floor(l / 65536), ae = l - y * 65536, C += y - 1 + 37 * (y - 1), b[0] = C, b[1] = T, b[2] = U, b[3] = B, b[4] = G, b[5] = R, b[6] = L, b[7] = Q, b[8] = V, b[9] = k, b[10] = z, b[11] = $, b[12] = K, b[13] = fe, b[14] = H, b[15] = ae;
  }
  function m(b, x) {
    p(b, x, x);
  }
  function v(b, x) {
    const g = n();
    for (let l = 0; l < 16; l++)
      g[l] = x[l];
    for (let l = 253; l >= 0; l--)
      m(g, g), l !== 2 && l !== 4 && p(g, g, x);
    for (let l = 0; l < 16; l++)
      b[l] = g[l];
  }
  function E(b, x) {
    const g = new Uint8Array(32), l = new Float64Array(80), y = n(), C = n(), T = n(), U = n(), B = n(), G = n();
    for (let V = 0; V < 31; V++)
      g[V] = b[V];
    g[31] = b[31] & 127 | 64, g[0] &= 248, c(l, x);
    for (let V = 0; V < 16; V++)
      C[V] = l[V];
    y[0] = U[0] = 1;
    for (let V = 254; V >= 0; --V) {
      const k = g[V >>> 3] >>> (V & 7) & 1;
      o(y, C, k), o(T, U, k), f(B, y, T), d(y, y, T), f(T, C, U), d(C, C, U), m(U, B), m(G, y), p(y, T, y), p(T, C, B), f(B, y, T), d(y, y, T), m(C, y), d(T, U, G), p(y, T, s), f(y, y, U), p(T, T, y), p(y, U, G), p(U, C, l), m(C, B), o(y, C, k), o(T, U, k);
    }
    for (let V = 0; V < 16; V++)
      l[V + 16] = y[V], l[V + 32] = T[V], l[V + 48] = C[V], l[V + 64] = U[V];
    const R = l.subarray(32), L = l.subarray(16);
    v(R, R), p(L, L, R);
    const Q = new Uint8Array(32);
    return u(Q, L), Q;
  }
  t.scalarMult = E;
  function S(b) {
    return E(b, i);
  }
  t.scalarMultBase = S;
  function P(b) {
    if (b.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const x = new Uint8Array(b);
    return {
      publicKey: S(x),
      secretKey: x
    };
  }
  t.generateKeyPairFromSeed = P;
  function w(b) {
    const x = (0, e.randomBytes)(32, b), g = P(x);
    return (0, r.wipe)(x), g;
  }
  t.generateKeyPair = w;
  function O(b, x, g = !1) {
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (x.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const l = E(b, x);
    if (g) {
      let y = 0;
      for (let C = 0; C < l.length; C++)
        y |= l[C];
      if (y === 0)
        throw new Error("X25519: invalid shared key");
    }
    return l;
  }
  t.sharedKey = O;
})(Ic);
var Ju = globalThis && globalThis.__spreadArray || function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}, xv = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Ov = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Dv = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.name = e, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return t;
  }()
), Iv = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Cv = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Rv = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Tv = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Xu = 3, Av = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", Rv]
], el = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function Pv(t) {
  return t ? tl(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Cv() : typeof navigator < "u" ? tl(navigator.userAgent) : Fv();
}
function Nv(t) {
  return t !== "" && Av.reduce(function(e, r) {
    var n = r[0], i = r[1];
    if (e)
      return e;
    var s = i.exec(t);
    return !!s && [n, s];
  }, !1);
}
function tl(t) {
  var e = Nv(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Iv();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Xu && (i = Ju(Ju([], i, !0), Mv(Xu - i.length), !0)) : i = [];
  var s = i.join("."), a = Lv(t), o = Tv.exec(t);
  return o && o[1] ? new Dv(r, s, a, o[1]) : new xv(r, s, a);
}
function Lv(t) {
  for (var e = 0, r = el.length; e < r; e++) {
    var n = el[e], i = n[0], s = n[1], a = s.exec(t);
    if (a)
      return i;
  }
  return null;
}
function Fv() {
  var t = typeof process < "u" && process.version;
  return t ? new Ov(process.version.slice(1)) : null;
}
function Mv(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.getLocalStorage = Ge.getLocalStorageOrThrow = Ge.getCrypto = Ge.getCryptoOrThrow = gh = Ge.getLocation = Ge.getLocationOrThrow = Cc = Ge.getNavigator = Ge.getNavigatorOrThrow = ph = Ge.getDocument = Ge.getDocumentOrThrow = Ge.getFromWindowOrThrow = Ge.getFromWindow = void 0;
function $n(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Ge.getFromWindow = $n;
function gi(t) {
  const e = $n(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Ge.getFromWindowOrThrow = gi;
function Uv() {
  return gi("document");
}
Ge.getDocumentOrThrow = Uv;
function jv() {
  return $n("document");
}
var ph = Ge.getDocument = jv;
function $v() {
  return gi("navigator");
}
Ge.getNavigatorOrThrow = $v;
function kv() {
  return $n("navigator");
}
var Cc = Ge.getNavigator = kv;
function qv() {
  return gi("location");
}
Ge.getLocationOrThrow = qv;
function Bv() {
  return $n("location");
}
var gh = Ge.getLocation = Bv;
function zv() {
  return gi("crypto");
}
Ge.getCryptoOrThrow = zv;
function Vv() {
  return $n("crypto");
}
Ge.getCrypto = Vv;
function Kv() {
  return gi("localStorage");
}
Ge.getLocalStorageOrThrow = Kv;
function Hv() {
  return $n("localStorage");
}
Ge.getLocalStorage = Hv;
var Rc = {};
Object.defineProperty(Rc, "__esModule", { value: !0 });
var yh = Rc.getWindowMetadata = void 0;
const rl = Ge;
function Wv() {
  let t, e;
  try {
    t = rl.getDocumentOrThrow(), e = rl.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = t.getElementsByTagName("link"), p = [];
    for (let m = 0; m < d.length; m++) {
      const v = d[m], E = v.getAttribute("rel");
      if (E && E.toLowerCase().indexOf("icon") > -1) {
        const S = v.getAttribute("href");
        if (S)
          if (S.toLowerCase().indexOf("https:") === -1 && S.toLowerCase().indexOf("http:") === -1 && S.indexOf("//") !== 0) {
            let P = e.protocol + "//" + e.host;
            if (S.indexOf("/") === 0)
              P += S;
            else {
              const w = e.pathname.split("/");
              w.pop();
              const O = w.join("/");
              P += O + "/" + S;
            }
            p.push(P);
          } else if (S.indexOf("//") === 0) {
            const P = e.protocol + S;
            p.push(P);
          } else
            p.push(S);
      }
    }
    return p;
  }
  function n(...d) {
    const p = t.getElementsByTagName("meta");
    for (let m = 0; m < p.length; m++) {
      const v = p[m], E = ["itemprop", "property", "name"].map((S) => v.getAttribute(S)).filter((S) => S ? d.includes(S) : !1);
      if (E.length && E) {
        const S = v.getAttribute("content");
        if (S)
          return S;
      }
    }
    return "";
  }
  function i() {
    let d = n("name", "og:site_name", "og:title", "twitter:title");
    return d || (d = t.title), d;
  }
  function s() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const a = i(), o = s(), u = e.origin, c = r();
  return {
    description: o,
    url: u,
    icons: c,
    name: a
  };
}
yh = Rc.getWindowMetadata = Wv;
var zi = {}, Gv = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), mh = "%[a-f0-9]{2}", nl = new RegExp("(" + mh + ")|([^%]+?)", "gi"), il = new RegExp("(" + mh + ")+", "gi");
function Fa(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], Fa(r), Fa(n));
}
function Qv(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(nl) || [], r = 1; r < e.length; r++)
      t = Fa(e, r).join(""), e = t.match(nl) || [];
    return t;
  }
}
function Zv(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = il.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = Qv(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = il.exec(t);
  }
  e["%C2"] = "�";
  for (var i = Object.keys(e), s = 0; s < i.length; s++) {
    var a = i[s];
    t = t.replace(new RegExp(a, "g"), e[a]);
  }
  return t;
}
var Yv = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return Zv(t);
  }
}, Jv = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, Xv = function(t, e) {
  for (var r = {}, n = Object.keys(t), i = Array.isArray(e), s = 0; s < n.length; s++) {
    var a = n[s], o = t[a];
    (i ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = Gv, r = Yv, n = Jv, i = Xv, s = (w) => w == null, a = Symbol("encodeFragmentIdentifier");
  function o(w) {
    switch (w.arrayFormat) {
      case "index":
        return (O) => (b, x) => {
          const g = b.length;
          return x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, [f(O, w), "[", g, "]"].join("")] : [
            ...b,
            [f(O, w), "[", f(g, w), "]=", f(x, w)].join("")
          ];
        };
      case "bracket":
        return (O) => (b, x) => x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, [f(O, w), "[]"].join("")] : [...b, [f(O, w), "[]=", f(x, w)].join("")];
      case "colon-list-separator":
        return (O) => (b, x) => x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, [f(O, w), ":list="].join("")] : [...b, [f(O, w), ":list=", f(x, w)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const O = w.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (x, g) => g === void 0 || w.skipNull && g === null || w.skipEmptyString && g === "" ? x : (g = g === null ? "" : g, x.length === 0 ? [[f(b, w), O, f(g, w)].join("")] : [[x, f(g, w)].join(w.arrayFormatSeparator)]);
      }
      default:
        return (O) => (b, x) => x === void 0 || w.skipNull && x === null || w.skipEmptyString && x === "" ? b : x === null ? [...b, f(O, w)] : [...b, [f(O, w), "=", f(x, w)].join("")];
    }
  }
  function u(w) {
    let O;
    switch (w.arrayFormat) {
      case "index":
        return (b, x, g) => {
          if (O = /\[(\d*)\]$/.exec(b), b = b.replace(/\[\d*\]$/, ""), !O) {
            g[b] = x;
            return;
          }
          g[b] === void 0 && (g[b] = {}), g[b][O[1]] = x;
        };
      case "bracket":
        return (b, x, g) => {
          if (O = /(\[\])$/.exec(b), b = b.replace(/\[\]$/, ""), !O) {
            g[b] = x;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [x];
            return;
          }
          g[b] = [].concat(g[b], x);
        };
      case "colon-list-separator":
        return (b, x, g) => {
          if (O = /(:list)$/.exec(b), b = b.replace(/:list$/, ""), !O) {
            g[b] = x;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [x];
            return;
          }
          g[b] = [].concat(g[b], x);
        };
      case "comma":
      case "separator":
        return (b, x, g) => {
          const l = typeof x == "string" && x.includes(w.arrayFormatSeparator), y = typeof x == "string" && !l && d(x, w).includes(w.arrayFormatSeparator);
          x = y ? d(x, w) : x;
          const C = l || y ? x.split(w.arrayFormatSeparator).map((T) => d(T, w)) : x === null ? x : d(x, w);
          g[b] = C;
        };
      case "bracket-separator":
        return (b, x, g) => {
          const l = /(\[\])$/.test(b);
          if (b = b.replace(/\[\]$/, ""), !l) {
            g[b] = x && d(x, w);
            return;
          }
          const y = x === null ? [] : x.split(w.arrayFormatSeparator).map((C) => d(C, w));
          if (g[b] === void 0) {
            g[b] = y;
            return;
          }
          g[b] = [].concat(g[b], y);
        };
      default:
        return (b, x, g) => {
          if (g[b] === void 0) {
            g[b] = x;
            return;
          }
          g[b] = [].concat(g[b], x);
        };
    }
  }
  function c(w) {
    if (typeof w != "string" || w.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(w, O) {
    return O.encode ? O.strict ? e(w) : encodeURIComponent(w) : w;
  }
  function d(w, O) {
    return O.decode ? r(w) : w;
  }
  function p(w) {
    return Array.isArray(w) ? w.sort() : typeof w == "object" ? p(Object.keys(w)).sort((O, b) => Number(O) - Number(b)).map((O) => w[O]) : w;
  }
  function m(w) {
    const O = w.indexOf("#");
    return O !== -1 && (w = w.slice(0, O)), w;
  }
  function v(w) {
    let O = "";
    const b = w.indexOf("#");
    return b !== -1 && (O = w.slice(b)), O;
  }
  function E(w) {
    w = m(w);
    const O = w.indexOf("?");
    return O === -1 ? "" : w.slice(O + 1);
  }
  function S(w, O) {
    return O.parseNumbers && !Number.isNaN(Number(w)) && typeof w == "string" && w.trim() !== "" ? w = Number(w) : O.parseBooleans && w !== null && (w.toLowerCase() === "true" || w.toLowerCase() === "false") && (w = w.toLowerCase() === "true"), w;
  }
  function P(w, O) {
    O = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, O), c(O.arrayFormatSeparator);
    const b = u(O), x = /* @__PURE__ */ Object.create(null);
    if (typeof w != "string" || (w = w.trim().replace(/^[?#&]/, ""), !w))
      return x;
    for (const g of w.split("&")) {
      if (g === "")
        continue;
      let [l, y] = n(O.decode ? g.replace(/\+/g, " ") : g, "=");
      y = y === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(O.arrayFormat) ? y : d(y, O), b(d(l, O), y, x);
    }
    for (const g of Object.keys(x)) {
      const l = x[g];
      if (typeof l == "object" && l !== null)
        for (const y of Object.keys(l))
          l[y] = S(l[y], O);
      else
        x[g] = S(l, O);
    }
    return O.sort === !1 ? x : (O.sort === !0 ? Object.keys(x).sort() : Object.keys(x).sort(O.sort)).reduce((g, l) => {
      const y = x[l];
      return y && typeof y == "object" && !Array.isArray(y) ? g[l] = p(y) : g[l] = y, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = E, t.parse = P, t.stringify = (w, O) => {
    if (!w)
      return "";
    O = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, O), c(O.arrayFormatSeparator);
    const b = (y) => O.skipNull && s(w[y]) || O.skipEmptyString && w[y] === "", x = o(O), g = {};
    for (const y of Object.keys(w))
      b(y) || (g[y] = w[y]);
    const l = Object.keys(g);
    return O.sort !== !1 && l.sort(O.sort), l.map((y) => {
      const C = w[y];
      return C === void 0 ? "" : C === null ? f(y, O) : Array.isArray(C) ? C.length === 0 && O.arrayFormat === "bracket-separator" ? f(y, O) + "[]" : C.reduce(x(y), []).join("&") : f(y, O) + "=" + f(C, O);
    }).filter((y) => y.length > 0).join("&");
  }, t.parseUrl = (w, O) => {
    O = Object.assign({
      decode: !0
    }, O);
    const [b, x] = n(w, "#");
    return Object.assign(
      {
        url: b.split("?")[0] || "",
        query: P(E(w), O)
      },
      O && O.parseFragmentIdentifier && x ? { fragmentIdentifier: d(x, O) } : {}
    );
  }, t.stringifyUrl = (w, O) => {
    O = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, O);
    const b = m(w.url).split("?")[0] || "", x = t.extract(w.url), g = t.parse(x, { sort: !1 }), l = Object.assign(g, w.query);
    let y = t.stringify(l, O);
    y && (y = `?${y}`);
    let C = v(w.url);
    return w.fragmentIdentifier && (C = `#${O[a] ? f(w.fragmentIdentifier, O) : w.fragmentIdentifier}`), `${b}${y}${C}`;
  }, t.pick = (w, O, b) => {
    b = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, b);
    const { url: x, query: g, fragmentIdentifier: l } = t.parseUrl(w, b);
    return t.stringifyUrl({
      url: x,
      query: i(g, O),
      fragmentIdentifier: l
    }, b);
  }, t.exclude = (w, O, b) => {
    const x = Array.isArray(O) ? (g) => !O.includes(g) : (g, l) => !O(g, l);
    return t.pick(w, x, b);
  };
})(zi);
const e0 = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe"
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe"
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe"
  }
};
function vh(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const bh = "base10", Gt = "base16", Ma = "base64pad", Tc = "utf8", wh = 0, kn = 1, t0 = 0, sl = 1, Ua = 12, Ac = 32;
function r0() {
  const t = Ic.generateKeyPair();
  return { privateKey: Qt(t.secretKey, Gt), publicKey: Qt(t.publicKey, Gt) };
}
function ja() {
  const t = pi.randomBytes(Ac);
  return Qt(t, Gt);
}
function n0(t, e) {
  const r = Ic.sharedKey(tr(t, Gt), tr(e, Gt), !0), n = new Sv(Lo.SHA256, r).expand(Ac);
  return Qt(n, Gt);
}
function i0(t) {
  const e = Lo.hash(tr(t, Gt));
  return Qt(e, Gt);
}
function Jn(t) {
  const e = Lo.hash(tr(t, Tc));
  return Qt(e, Gt);
}
function s0(t) {
  return tr(`${t}`, bh);
}
function bs(t) {
  return Number(Qt(t, bh));
}
function o0(t) {
  const e = s0(typeof t.type < "u" ? t.type : wh);
  if (bs(e) === kn && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? tr(t.senderPublicKey, Gt) : void 0, n = typeof t.iv < "u" ? tr(t.iv, Gt) : pi.randomBytes(Ua), i = new Oc.ChaCha20Poly1305(tr(t.symKey, Gt)).seal(n, tr(t.message, Tc));
  return c0({ type: e, sealed: i, iv: n, senderPublicKey: r });
}
function a0(t) {
  const e = new Oc.ChaCha20Poly1305(tr(t.symKey, Gt)), { sealed: r, iv: n } = so(t.encoded), i = e.open(n, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return Qt(i, Tc);
}
function c0(t) {
  if (bs(t.type) === kn) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Qt(Na([t.type, t.senderPublicKey, t.iv, t.sealed]), Ma);
  }
  return Qt(Na([t.type, t.iv, t.sealed]), Ma);
}
function so(t) {
  const e = tr(t, Ma), r = e.slice(t0, sl), n = sl;
  if (bs(r) === kn) {
    const o = n + Ac, u = o + Ua, c = e.slice(n, o), f = e.slice(o, u), d = e.slice(u);
    return { type: r, sealed: d, iv: f, senderPublicKey: c };
  }
  const i = n + Ua, s = e.slice(n, i), a = e.slice(i);
  return { type: r, sealed: a, iv: s };
}
function u0(t, e) {
  const r = so(t);
  return _h({ type: bs(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Qt(r.senderPublicKey, Gt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function _h(t) {
  const e = (t == null ? void 0 : t.type) || wh;
  if (e === kn) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function ol(t) {
  return t.type === kn && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var l0 = Object.defineProperty, al = Object.getOwnPropertySymbols, f0 = Object.prototype.hasOwnProperty, h0 = Object.prototype.propertyIsEnumerable, cl = (t, e, r) => e in t ? l0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ul = (t, e) => {
  for (var r in e || (e = {}))
    f0.call(e, r) && cl(t, r, e[r]);
  if (al)
    for (var r of al(e))
      h0.call(e, r) && cl(t, r, e[r]);
  return t;
};
const d0 = "ReactNative", or = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, p0 = "js";
function Pc() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function yi() {
  return !ph() && !!Cc() && navigator.product === d0;
}
function mi() {
  return !Pc() && !!Cc();
}
function ws() {
  return yi() ? or.reactNative : Pc() ? or.node : mi() ? or.browser : or.unknown;
}
function g0() {
  var t;
  try {
    return yi() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function y0(t, e) {
  let r = zi.parse(t);
  return r = ul(ul({}, r), e), t = zi.stringify(r), t;
}
function m0() {
  return yh() || { name: "", description: "", url: "", icons: [""] };
}
function v0() {
  if (ws() === or.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = Pv();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function b0() {
  var t;
  const e = ws();
  return e === or.browser ? [e, ((t = gh()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function w0(t, e, r) {
  const n = v0(), i = b0();
  return [[t, e].join("-"), [p0, r].join("-"), n, i].join("/");
}
function _0({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: a, bundleId: o }) {
  const u = r.split("?"), c = w0(t, e, n), f = { auth: i, ua: c, projectId: s, useOnCloseEvent: a || void 0, origin: o || void 0 }, d = y0(u[1] || "", f);
  return u[0] + "?" + d;
}
function In(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Eh(t) {
  return Object.fromEntries(t.entries());
}
function Sh(t) {
  return new Map(Object.entries(t));
}
function Kn(t = ie.FIVE_MINUTES, e) {
  const r = ie.toMiliseconds(t || ie.FIVE_MINUTES);
  let n, i, s;
  return { resolve: (a) => {
    s && n && (clearTimeout(s), n(a));
  }, reject: (a) => {
    s && i && (clearTimeout(s), i(a));
  }, done: () => new Promise((a, o) => {
    s = setTimeout(() => {
      o(new Error(e));
    }, r), n = a, i = o;
  }) };
}
function Vi(t, e, r) {
  return new Promise(async (n, i) => {
    const s = setTimeout(() => i(new Error(r)), e);
    try {
      const a = await t;
      n(a);
    } catch (a) {
      i(a);
    }
    clearTimeout(s);
  });
}
function xh(t, e) {
  if (typeof e == "string" && e.startsWith(`${t}:`))
    return e;
  if (t.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function E0(t) {
  return xh("topic", t);
}
function S0(t) {
  return xh("id", t);
}
function Oh(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function vr(t, e) {
  return ie.fromMiliseconds((e || Date.now()) + ie.toMiliseconds(t));
}
function nn(t) {
  return Date.now() >= ie.toMiliseconds(t);
}
function bt(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function x0({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let i = n == null ? void 0 : n.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const s = `${i}/wc?requestId=${t}&sessionTopic=${e}`, a = ws();
    a === or.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : a === or.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (n) {
    console.error(n);
  }
}
async function O0(t, e) {
  try {
    return await t.getItem(e) || (mi() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const D0 = "irn";
function $a(t) {
  return (t == null ? void 0 : t.relay) || { protocol: D0 };
}
function Ys(t) {
  const e = e0[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var I0 = Object.defineProperty, ll = Object.getOwnPropertySymbols, C0 = Object.prototype.hasOwnProperty, R0 = Object.prototype.propertyIsEnumerable, fl = (t, e, r) => e in t ? I0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, T0 = (t, e) => {
  for (var r in e || (e = {}))
    C0.call(e, r) && fl(t, r, e[r]);
  if (ll)
    for (var r of ll(e))
      R0.call(e, r) && fl(t, r, e[r]);
  return t;
};
function A0(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((i) => {
    if (i.startsWith(n)) {
      const s = i.replace(n, ""), a = t[i];
      r[s] = a;
    }
  }), r;
}
function hl(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), i = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", a = zi.parse(s);
  return { protocol: n, topic: P0(i[0]), version: parseInt(i[1], 10), symKey: a.symKey, relay: A0(a) };
}
function P0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function N0(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((i) => {
    const s = r + e + i;
    t[i] && (n[s] = t[i]);
  }), n;
}
function L0(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + zi.stringify(T0({ symKey: t.symKey }, N0(t.relay)));
}
function vi(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, i] = r.split(":");
    e.push(`${n}:${i}`);
  }), e;
}
function F0(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...vi(r.accounts));
  }), e;
}
function M0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    vi(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function U0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    vi(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
function j0(t, e) {
  const r = Js(t, e);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [i, s] of Object.entries(t))
    n[i] = { methods: s.methods, events: s.events, chains: s.accounts.map((a) => `${a.split(":")[0]}:${a.split(":")[1]}`) };
  return n;
}
const $0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, k0 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Y(t, e) {
  const { message: r, code: n } = k0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function wt(t, e) {
  const { message: r, code: n } = $0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function _s(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function $i(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Kt(t) {
  return typeof t > "u";
}
function Dt(t, e) {
  return e && Kt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Nc(t, e) {
  return e && Kt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function q0(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), i = Object.keys(r);
  let s = !0;
  return In(i, n) ? (n.forEach((a) => {
    const { accounts: o, methods: u, events: c } = t.namespaces[a], f = vi(o), d = r[a];
    (!In(vh(a, d), f) || !In(d.methods, u) || !In(d.events, c)) && (s = !1);
  }), s) : !1;
}
function oo(t) {
  return Dt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function B0(t) {
  if (Dt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && oo(r);
    }
  }
  return !1;
}
function z0(t) {
  if (Dt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function V0(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function K0(t) {
  return t == null ? void 0 : t.topic;
}
function H0(t, e) {
  let r = null;
  return Dt(t == null ? void 0 : t.publicKey, !1) || (r = Y("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function dl(t) {
  let e = !0;
  return _s(t) ? t.length && (e = t.every((r) => Dt(r, !1))) : e = !1, e;
}
function W0(t, e, r) {
  let n = null;
  return _s(e) && e.length ? e.forEach((i) => {
    n || oo(i) || (n = wt("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : oo(t) || (n = wt("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function G0(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([i, s]) => {
    if (n)
      return;
    const a = W0(i, vh(i, s), `${e} ${r}`);
    a && (n = a);
  }), n;
}
function Q0(t, e) {
  let r = null;
  return _s(t) ? t.forEach((n) => {
    r || B0(n) || (r = wt("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = wt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Z0(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = Q0(n == null ? void 0 : n.accounts, `${e} namespace`);
    i && (r = i);
  }), r;
}
function Y0(t, e) {
  let r = null;
  return dl(t == null ? void 0 : t.methods) ? dl(t == null ? void 0 : t.events) || (r = wt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = wt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Dh(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = Y0(n, `${e}, namespace`);
    i && (r = i);
  }), r;
}
function J0(t, e, r) {
  let n = null;
  if (t && $i(t)) {
    const i = Dh(t, e);
    i && (n = i);
    const s = G0(t, e, r);
    s && (n = s);
  } else
    n = Y("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function Js(t, e) {
  let r = null;
  if (t && $i(t)) {
    const n = Dh(t, e);
    n && (r = n);
    const i = Z0(t, e);
    i && (r = i);
  } else
    r = Y("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Ih(t) {
  return Dt(t.protocol, !0);
}
function X0(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && _s(t) && t.length && t.forEach((n) => {
    r = Ih(n);
  }), r;
}
function eb(t) {
  return typeof t == "number";
}
function er(t) {
  return typeof t < "u" && typeof t !== null;
}
function tb(t) {
  return !(!t || typeof t != "object" || !t.code || !Nc(t.code, !1) || !t.message || !Dt(t.message, !1));
}
function rb(t) {
  return !(Kt(t) || !Dt(t.method, !1));
}
function nb(t) {
  return !(Kt(t) || Kt(t.result) && Kt(t.error) || !Nc(t.id, !1) || !Dt(t.jsonrpc, !1));
}
function ib(t) {
  return !(Kt(t) || !Dt(t.name, !1));
}
function pl(t, e) {
  return !(!oo(e) || !F0(t).includes(e));
}
function sb(t, e, r) {
  return Dt(r, !1) ? M0(t, e).includes(r) : !1;
}
function ob(t, e, r) {
  return Dt(r, !1) ? U0(t, e).includes(r) : !1;
}
function gl(t, e, r) {
  let n = null;
  const i = ab(t), s = cb(e), a = Object.keys(i), o = Object.keys(s), u = yl(Object.keys(t)), c = yl(Object.keys(e)), f = u.filter((d) => !c.includes(d));
  return f.length && (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(e).toString()}`)), In(a, o) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((d) => {
    if (!d.includes(":") || n)
      return;
    const p = vi(e[d].accounts);
    p.includes(d) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${p.toString()}`));
  }), a.forEach((d) => {
    n || (In(i[d].methods, s[d].methods) ? In(i[d].events, s[d].events) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${d}`)) : n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${d}`));
  }), n;
}
function ab(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((i) => {
      e[i] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function yl(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function cb(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = vi(t[r].accounts);
      n == null || n.forEach((i) => {
        e[i] = { accounts: t[r].accounts.filter((s) => s.includes(`${i}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function ub(t, e) {
  return Nc(t, !1) && t <= e.max && t >= e.min;
}
function ml() {
  const t = ws();
  return new Promise((e) => {
    switch (t) {
      case or.browser:
        e(lb());
        break;
      case or.reactNative:
        e(fb());
        break;
      case or.node:
        e(hb());
        break;
      default:
        e(!0);
    }
  });
}
function lb() {
  return mi() && (navigator == null ? void 0 : navigator.onLine);
}
async function fb() {
  if (yi() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function hb() {
  return !0;
}
function db(t) {
  switch (ws()) {
    case or.browser:
      pb(t);
      break;
    case or.reactNative:
      gb(t);
      break;
  }
}
function pb(t) {
  !yi() && mi() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function gb(t) {
  yi() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const oa = {};
let ks = class {
  static get(e) {
    return oa[e];
  }
  static set(e, r) {
    oa[e] = r;
  }
  static delete(e) {
    delete oa[e];
  }
};
const yb = "PARSE_ERROR", mb = "INVALID_REQUEST", vb = "METHOD_NOT_FOUND", bb = "INVALID_PARAMS", Ch = "INTERNAL_ERROR", Lc = "SERVER_ERROR", wb = [-32700, -32600, -32601, -32602, -32603], ki = {
  [yb]: { code: -32700, message: "Parse error" },
  [mb]: { code: -32600, message: "Invalid Request" },
  [vb]: { code: -32601, message: "Method not found" },
  [bb]: { code: -32602, message: "Invalid params" },
  [Ch]: { code: -32603, message: "Internal error" },
  [Lc]: { code: -32e3, message: "Server error" }
}, Rh = Lc;
function _b(t) {
  return wb.includes(t);
}
function vl(t) {
  return Object.keys(ki).includes(t) ? ki[t] : ki[Rh];
}
function Eb(t) {
  const e = Object.values(ki).find((r) => r.code === t);
  return e || ki[Rh];
}
function Sb(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Th = {}, kr = {}, bl;
function xb() {
  if (bl)
    return kr;
  bl = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.isBrowserCryptoAvailable = kr.getSubtleCrypto = kr.getBrowerCrypto = void 0;
  function t() {
    return (Lr == null ? void 0 : Lr.crypto) || (Lr == null ? void 0 : Lr.msCrypto) || {};
  }
  kr.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  kr.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return kr.isBrowserCryptoAvailable = r, kr;
}
var qr = {}, wl;
function Ob() {
  if (wl)
    return qr;
  wl = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.isBrowser = qr.isNode = qr.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  qr.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  qr.isNode = e;
  function r() {
    return !t() && !e();
  }
  return qr.isBrowser = r, qr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = jr;
  e.__exportStar(xb(), t), e.__exportStar(Ob(), t);
})(Th);
function Fc(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Ah(t = 6) {
  return BigInt(Fc(t));
}
function Xn(t, e, r) {
  return {
    id: r || Fc(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Mc(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Uc(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Db(e, r)
  };
}
function Db(t, e) {
  return typeof t > "u" ? vl(Ch) : (typeof t == "string" && (t = Object.assign(Object.assign({}, vl(Lc)), { message: t })), typeof e < "u" && (t.data = e), _b(t.code) && (t = Eb(t.code)), t);
}
class Ib {
}
class Cb extends Ib {
  constructor() {
    super();
  }
}
class Rb extends Cb {
  constructor(e) {
    super();
  }
}
const Tb = "^wss?:";
function Ab(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function Pb(t, e) {
  const r = Ab(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function _l(t) {
  return Pb(t, Tb);
}
function Nb(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Ph(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function jc(t) {
  return Ph(t) && "method" in t;
}
function Fo(t) {
  return Ph(t) && (Vr(t) || br(t));
}
function Vr(t) {
  return "result" in t;
}
function br(t) {
  return "error" in t;
}
class Lb extends Rb {
  constructor(e) {
    super(e), this.events = new pr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async request(e, r) {
    return this.requestStrict(Xn(e.method, e.params || [], e.id || Ah().toString()), r);
  }
  async requestStrict(e, r) {
    return new Promise(async (n, i) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (s) {
          i(s);
        }
      this.events.on(`${e.id}`, (s) => {
        br(s) ? i(s.error) : n(s.result);
      });
      try {
        await this.connection.send(e, r);
      } catch (s) {
        i(s);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), Fo(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
      type: e.method,
      data: e.params
    });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
const Fb = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), Mb = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", El = (t) => t.split("?")[0], Sl = 10, Ub = Fb();
class jb {
  constructor(e) {
    if (this.url = e, this.events = new pr.EventEmitter(), this.registering = !1, !_l(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n) => {
        this.onClose(n), e();
      }, this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(ys(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!_l(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((n, i) => {
        this.events.once("register_error", (s) => {
          this.resetMaxListeners(), i(s);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return i(new Error("WebSocket connection is missing or invalid"));
          n(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((r, n) => {
      const i = new URLSearchParams(e).get("origin"), s = Th.isReactNative() ? { headers: { origin: i } } : { rejectUnauthorized: !Nb(e) }, a = new Ub(e, [], s);
      Mb() ? a.onerror = (o) => {
        const u = o;
        n(this.emitError(u.error));
      } : a.on("error", (o) => {
        n(this.emitError(o));
      }), a.onopen = () => {
        this.onOpen(a), r(a);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (r) => this.onPayload(r), e.onclose = (r) => this.onClose(r), this.socket = e, this.registering = !1, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u")
      return;
    const r = typeof e.data == "string" ? Co(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), i = n.message || n.toString(), s = Uc(e, i);
    this.events.emit("payload", s);
  }
  parseError(e, r = this.url) {
    return Sb(e, El(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Sl && this.events.setMaxListeners(Sl);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${El(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var ao = { exports: {} };
ao.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, s = 2, a = 9007199254740991, o = "[object Arguments]", u = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", p = "[object Error]", m = "[object Function]", v = "[object GeneratorFunction]", E = "[object Map]", S = "[object Number]", P = "[object Null]", w = "[object Object]", O = "[object Promise]", b = "[object Proxy]", x = "[object RegExp]", g = "[object Set]", l = "[object String]", y = "[object Symbol]", C = "[object Undefined]", T = "[object WeakMap]", U = "[object ArrayBuffer]", B = "[object DataView]", G = "[object Float32Array]", R = "[object Float64Array]", L = "[object Int8Array]", Q = "[object Int16Array]", V = "[object Int32Array]", k = "[object Uint8Array]", z = "[object Uint8ClampedArray]", $ = "[object Uint16Array]", K = "[object Uint32Array]", fe = /[\\^$.*+?()[\]{}|]/g, H = /^\[object .+?Constructor\]$/, ae = /^(?:0|[1-9]\d*)$/, te = {};
  te[G] = te[R] = te[L] = te[Q] = te[V] = te[k] = te[z] = te[$] = te[K] = !0, te[o] = te[u] = te[U] = te[f] = te[B] = te[d] = te[p] = te[m] = te[E] = te[S] = te[w] = te[x] = te[g] = te[l] = te[T] = !1;
  var oe = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, M = typeof self == "object" && self && self.Object === Object && self, F = oe || M || Function("return this")(), A = e && !e.nodeType && e, h = A && !0 && t && !t.nodeType && t, I = h && h.exports === A, Z = I && oe.process, X = function() {
    try {
      return Z && Z.binding && Z.binding("util");
    } catch {
    }
  }(), De = X && X.isTypedArray;
  function Ie(_, N) {
    for (var q = -1, ne = _ == null ? 0 : _.length, Ye = 0, ve = []; ++q < ne; ) {
      var lt = _[q];
      N(lt, q, _) && (ve[Ye++] = lt);
    }
    return ve;
  }
  function we(_, N) {
    for (var q = -1, ne = N.length, Ye = _.length; ++q < ne; )
      _[Ye + q] = N[q];
    return _;
  }
  function Fe(_, N) {
    for (var q = -1, ne = _ == null ? 0 : _.length; ++q < ne; )
      if (N(_[q], q, _))
        return !0;
    return !1;
  }
  function Je(_, N) {
    for (var q = -1, ne = Array(_); ++q < _; )
      ne[q] = N(q);
    return ne;
  }
  function He(_) {
    return function(N) {
      return _(N);
    };
  }
  function Ne(_, N) {
    return _.has(N);
  }
  function Te(_, N) {
    return _ == null ? void 0 : _[N];
  }
  function _e(_) {
    var N = -1, q = Array(_.size);
    return _.forEach(function(ne, Ye) {
      q[++N] = [Ye, ne];
    }), q;
  }
  function Se(_, N) {
    return function(q) {
      return _(N(q));
    };
  }
  function Ee(_) {
    var N = -1, q = Array(_.size);
    return _.forEach(function(ne) {
      q[++N] = ne;
    }), q;
  }
  var ge = Array.prototype, pe = Function.prototype, ce = Object.prototype, xe = F["__core-js_shared__"], Ce = pe.toString, he = ce.hasOwnProperty, Ae = function() {
    var _ = /[^.]+$/.exec(xe && xe.keys && xe.keys.IE_PROTO || "");
    return _ ? "Symbol(src)_1." + _ : "";
  }(), Me = ce.toString, ke = RegExp(
    "^" + Ce.call(he).replace(fe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), qe = I ? F.Buffer : void 0, Ue = F.Symbol, nr = F.Uint8Array, cr = ce.propertyIsEnumerable, Ir = ge.splice, Ct = Ue ? Ue.toStringTag : void 0, Cr = Object.getOwnPropertySymbols, ur = qe ? qe.isBuffer : void 0, Yr = Se(Object.keys, Object), Xe = qn(F, "DataView"), Qe = qn(F, "Map"), ot = qn(F, "Promise"), rt = qn(F, "Set"), at = qn(F, "WeakMap"), Ze = qn(Object, "create"), ft = yn(Xe), pt = yn(Qe), gt = yn(ot), ht = yn(rt), yt = yn(at), dt = Ue ? Ue.prototype : void 0, ct = dt ? dt.valueOf : void 0;
  function We(_) {
    var N = -1, q = _ == null ? 0 : _.length;
    for (this.clear(); ++N < q; ) {
      var ne = _[N];
      this.set(ne[0], ne[1]);
    }
  }
  function D() {
    this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
  }
  function j(_) {
    var N = this.has(_) && delete this.__data__[_];
    return this.size -= N ? 1 : 0, N;
  }
  function J(_) {
    var N = this.__data__;
    if (Ze) {
      var q = N[_];
      return q === n ? void 0 : q;
    }
    return he.call(N, _) ? N[_] : void 0;
  }
  function ue(_) {
    var N = this.__data__;
    return Ze ? N[_] !== void 0 : he.call(N, _);
  }
  function je(_, N) {
    var q = this.__data__;
    return this.size += this.has(_) ? 0 : 1, q[_] = Ze && N === void 0 ? n : N, this;
  }
  We.prototype.clear = D, We.prototype.delete = j, We.prototype.get = J, We.prototype.has = ue, We.prototype.set = je;
  function Pe(_) {
    var N = -1, q = _ == null ? 0 : _.length;
    for (this.clear(); ++N < q; ) {
      var ne = _[N];
      this.set(ne[0], ne[1]);
    }
  }
  function Le() {
    this.__data__ = [], this.size = 0;
  }
  function Re(_) {
    var N = this.__data__, q = Ts(N, _);
    if (q < 0)
      return !1;
    var ne = N.length - 1;
    return q == ne ? N.pop() : Ir.call(N, q, 1), --this.size, !0;
  }
  function Rt(_) {
    var N = this.__data__, q = Ts(N, _);
    return q < 0 ? void 0 : N[q][1];
  }
  function nt(_) {
    return Ts(this.__data__, _) > -1;
  }
  function ut(_, N) {
    var q = this.__data__, ne = Ts(q, _);
    return ne < 0 ? (++this.size, q.push([_, N])) : q[ne][1] = N, this;
  }
  Pe.prototype.clear = Le, Pe.prototype.delete = Re, Pe.prototype.get = Rt, Pe.prototype.has = nt, Pe.prototype.set = ut;
  function mt(_) {
    var N = -1, q = _ == null ? 0 : _.length;
    for (this.clear(); ++N < q; ) {
      var ne = _[N];
      this.set(ne[0], ne[1]);
    }
  }
  function Jr() {
    this.size = 0, this.__data__ = {
      hash: new We(),
      map: new (Qe || Pe)(),
      string: new We()
    };
  }
  function Cs(_) {
    var N = As(this, _).delete(_);
    return this.size -= N ? 1 : 0, N;
  }
  function gr(_) {
    return As(this, _).get(_);
  }
  function Gd(_) {
    return As(this, _).has(_);
  }
  function Qd(_, N) {
    var q = As(this, _), ne = q.size;
    return q.set(_, N), this.size += q.size == ne ? 0 : 1, this;
  }
  mt.prototype.clear = Jr, mt.prototype.delete = Cs, mt.prototype.get = gr, mt.prototype.has = Gd, mt.prototype.set = Qd;
  function Rs(_) {
    var N = -1, q = _ == null ? 0 : _.length;
    for (this.__data__ = new mt(); ++N < q; )
      this.add(_[N]);
  }
  function Zd(_) {
    return this.__data__.set(_, n), this;
  }
  function Yd(_) {
    return this.__data__.has(_);
  }
  Rs.prototype.add = Rs.prototype.push = Zd, Rs.prototype.has = Yd;
  function Xr(_) {
    var N = this.__data__ = new Pe(_);
    this.size = N.size;
  }
  function Jd() {
    this.__data__ = new Pe(), this.size = 0;
  }
  function Xd(_) {
    var N = this.__data__, q = N.delete(_);
    return this.size = N.size, q;
  }
  function ep(_) {
    return this.__data__.get(_);
  }
  function tp(_) {
    return this.__data__.has(_);
  }
  function rp(_, N) {
    var q = this.__data__;
    if (q instanceof Pe) {
      var ne = q.__data__;
      if (!Qe || ne.length < r - 1)
        return ne.push([_, N]), this.size = ++q.size, this;
      q = this.__data__ = new mt(ne);
    }
    return q.set(_, N), this.size = q.size, this;
  }
  Xr.prototype.clear = Jd, Xr.prototype.delete = Xd, Xr.prototype.get = ep, Xr.prototype.has = tp, Xr.prototype.set = rp;
  function np(_, N) {
    var q = Ps(_), ne = !q && vp(_), Ye = !q && !ne && Ho(_), ve = !q && !ne && !Ye && cu(_), lt = q || ne || Ye || ve, Et = lt ? Je(_.length, String) : [], Tt = Et.length;
    for (var it in _)
      (N || he.call(_, it)) && !(lt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (it == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Ye && (it == "offset" || it == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ve && (it == "buffer" || it == "byteLength" || it == "byteOffset") || // Skip index properties.
      dp(it, Tt))) && Et.push(it);
    return Et;
  }
  function Ts(_, N) {
    for (var q = _.length; q--; )
      if (iu(_[q][0], N))
        return q;
    return -1;
  }
  function ip(_, N, q) {
    var ne = N(_);
    return Ps(_) ? ne : we(ne, q(_));
  }
  function wi(_) {
    return _ == null ? _ === void 0 ? C : P : Ct && Ct in Object(_) ? fp(_) : mp(_);
  }
  function eu(_) {
    return _i(_) && wi(_) == o;
  }
  function tu(_, N, q, ne, Ye) {
    return _ === N ? !0 : _ == null || N == null || !_i(_) && !_i(N) ? _ !== _ && N !== N : sp(_, N, q, ne, tu, Ye);
  }
  function sp(_, N, q, ne, Ye, ve) {
    var lt = Ps(_), Et = Ps(N), Tt = lt ? u : en(_), it = Et ? u : en(N);
    Tt = Tt == o ? w : Tt, it = it == o ? w : it;
    var ir = Tt == w, yr = it == w, Lt = Tt == it;
    if (Lt && Ho(_)) {
      if (!Ho(N))
        return !1;
      lt = !0, ir = !1;
    }
    if (Lt && !ir)
      return ve || (ve = new Xr()), lt || cu(_) ? ru(_, N, q, ne, Ye, ve) : up(_, N, Tt, q, ne, Ye, ve);
    if (!(q & i)) {
      var lr = ir && he.call(_, "__wrapped__"), fr = yr && he.call(N, "__wrapped__");
      if (lr || fr) {
        var tn = lr ? _.value() : _, $r = fr ? N.value() : N;
        return ve || (ve = new Xr()), Ye(tn, $r, q, ne, ve);
      }
    }
    return Lt ? (ve || (ve = new Xr()), lp(_, N, q, ne, Ye, ve)) : !1;
  }
  function op(_) {
    if (!au(_) || gp(_))
      return !1;
    var N = su(_) ? ke : H;
    return N.test(yn(_));
  }
  function ap(_) {
    return _i(_) && ou(_.length) && !!te[wi(_)];
  }
  function cp(_) {
    if (!yp(_))
      return Yr(_);
    var N = [];
    for (var q in Object(_))
      he.call(_, q) && q != "constructor" && N.push(q);
    return N;
  }
  function ru(_, N, q, ne, Ye, ve) {
    var lt = q & i, Et = _.length, Tt = N.length;
    if (Et != Tt && !(lt && Tt > Et))
      return !1;
    var it = ve.get(_);
    if (it && ve.get(N))
      return it == N;
    var ir = -1, yr = !0, Lt = q & s ? new Rs() : void 0;
    for (ve.set(_, N), ve.set(N, _); ++ir < Et; ) {
      var lr = _[ir], fr = N[ir];
      if (ne)
        var tn = lt ? ne(fr, lr, ir, N, _, ve) : ne(lr, fr, ir, _, N, ve);
      if (tn !== void 0) {
        if (tn)
          continue;
        yr = !1;
        break;
      }
      if (Lt) {
        if (!Fe(N, function($r, mn) {
          if (!Ne(Lt, mn) && (lr === $r || Ye(lr, $r, q, ne, ve)))
            return Lt.push(mn);
        })) {
          yr = !1;
          break;
        }
      } else if (!(lr === fr || Ye(lr, fr, q, ne, ve))) {
        yr = !1;
        break;
      }
    }
    return ve.delete(_), ve.delete(N), yr;
  }
  function up(_, N, q, ne, Ye, ve, lt) {
    switch (q) {
      case B:
        if (_.byteLength != N.byteLength || _.byteOffset != N.byteOffset)
          return !1;
        _ = _.buffer, N = N.buffer;
      case U:
        return !(_.byteLength != N.byteLength || !ve(new nr(_), new nr(N)));
      case f:
      case d:
      case S:
        return iu(+_, +N);
      case p:
        return _.name == N.name && _.message == N.message;
      case x:
      case l:
        return _ == N + "";
      case E:
        var Et = _e;
      case g:
        var Tt = ne & i;
        if (Et || (Et = Ee), _.size != N.size && !Tt)
          return !1;
        var it = lt.get(_);
        if (it)
          return it == N;
        ne |= s, lt.set(_, N);
        var ir = ru(Et(_), Et(N), ne, Ye, ve, lt);
        return lt.delete(_), ir;
      case y:
        if (ct)
          return ct.call(_) == ct.call(N);
    }
    return !1;
  }
  function lp(_, N, q, ne, Ye, ve) {
    var lt = q & i, Et = nu(_), Tt = Et.length, it = nu(N), ir = it.length;
    if (Tt != ir && !lt)
      return !1;
    for (var yr = Tt; yr--; ) {
      var Lt = Et[yr];
      if (!(lt ? Lt in N : he.call(N, Lt)))
        return !1;
    }
    var lr = ve.get(_);
    if (lr && ve.get(N))
      return lr == N;
    var fr = !0;
    ve.set(_, N), ve.set(N, _);
    for (var tn = lt; ++yr < Tt; ) {
      Lt = Et[yr];
      var $r = _[Lt], mn = N[Lt];
      if (ne)
        var uu = lt ? ne(mn, $r, Lt, N, _, ve) : ne($r, mn, Lt, _, N, ve);
      if (!(uu === void 0 ? $r === mn || Ye($r, mn, q, ne, ve) : uu)) {
        fr = !1;
        break;
      }
      tn || (tn = Lt == "constructor");
    }
    if (fr && !tn) {
      var Ns = _.constructor, Ls = N.constructor;
      Ns != Ls && "constructor" in _ && "constructor" in N && !(typeof Ns == "function" && Ns instanceof Ns && typeof Ls == "function" && Ls instanceof Ls) && (fr = !1);
    }
    return ve.delete(_), ve.delete(N), fr;
  }
  function nu(_) {
    return ip(_, _p, hp);
  }
  function As(_, N) {
    var q = _.__data__;
    return pp(N) ? q[typeof N == "string" ? "string" : "hash"] : q.map;
  }
  function qn(_, N) {
    var q = Te(_, N);
    return op(q) ? q : void 0;
  }
  function fp(_) {
    var N = he.call(_, Ct), q = _[Ct];
    try {
      _[Ct] = void 0;
      var ne = !0;
    } catch {
    }
    var Ye = Me.call(_);
    return ne && (N ? _[Ct] = q : delete _[Ct]), Ye;
  }
  var hp = Cr ? function(_) {
    return _ == null ? [] : (_ = Object(_), Ie(Cr(_), function(N) {
      return cr.call(_, N);
    }));
  } : Ep, en = wi;
  (Xe && en(new Xe(new ArrayBuffer(1))) != B || Qe && en(new Qe()) != E || ot && en(ot.resolve()) != O || rt && en(new rt()) != g || at && en(new at()) != T) && (en = function(_) {
    var N = wi(_), q = N == w ? _.constructor : void 0, ne = q ? yn(q) : "";
    if (ne)
      switch (ne) {
        case ft:
          return B;
        case pt:
          return E;
        case gt:
          return O;
        case ht:
          return g;
        case yt:
          return T;
      }
    return N;
  });
  function dp(_, N) {
    return N = N ?? a, !!N && (typeof _ == "number" || ae.test(_)) && _ > -1 && _ % 1 == 0 && _ < N;
  }
  function pp(_) {
    var N = typeof _;
    return N == "string" || N == "number" || N == "symbol" || N == "boolean" ? _ !== "__proto__" : _ === null;
  }
  function gp(_) {
    return !!Ae && Ae in _;
  }
  function yp(_) {
    var N = _ && _.constructor, q = typeof N == "function" && N.prototype || ce;
    return _ === q;
  }
  function mp(_) {
    return Me.call(_);
  }
  function yn(_) {
    if (_ != null) {
      try {
        return Ce.call(_);
      } catch {
      }
      try {
        return _ + "";
      } catch {
      }
    }
    return "";
  }
  function iu(_, N) {
    return _ === N || _ !== _ && N !== N;
  }
  var vp = eu(function() {
    return arguments;
  }()) ? eu : function(_) {
    return _i(_) && he.call(_, "callee") && !cr.call(_, "callee");
  }, Ps = Array.isArray;
  function bp(_) {
    return _ != null && ou(_.length) && !su(_);
  }
  var Ho = ur || Sp;
  function wp(_, N) {
    return tu(_, N);
  }
  function su(_) {
    if (!au(_))
      return !1;
    var N = wi(_);
    return N == m || N == v || N == c || N == b;
  }
  function ou(_) {
    return typeof _ == "number" && _ > -1 && _ % 1 == 0 && _ <= a;
  }
  function au(_) {
    var N = typeof _;
    return _ != null && (N == "object" || N == "function");
  }
  function _i(_) {
    return _ != null && typeof _ == "object";
  }
  var cu = De ? He(De) : ap;
  function _p(_) {
    return bp(_) ? np(_) : cp(_);
  }
  function Ep() {
    return [];
  }
  function Sp() {
    return !1;
  }
  t.exports = wp;
})(ao, ao.exports);
var $b = ao.exports;
const kb = /* @__PURE__ */ Do($b);
function qb(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), a = s.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[a] = i;
  }
  var o = t.length, u = t.charAt(0), c = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var E = 0, S = 0, P = 0, w = v.length; P !== w && v[P] === 0; )
      P++, E++;
    for (var O = (w - P) * f + 1 >>> 0, b = new Uint8Array(O); P !== w; ) {
      for (var x = v[P], g = 0, l = O - 1; (x !== 0 || g < S) && l !== -1; l--, g++)
        x += 256 * b[l] >>> 0, b[l] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      S = g, P++;
    }
    for (var y = O - S; y !== O && b[y] === 0; )
      y++;
    for (var C = u.repeat(E); y < O; ++y)
      C += t.charAt(b[y]);
    return C;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var E = 0;
    if (v[E] !== " ") {
      for (var S = 0, P = 0; v[E] === u; )
        S++, E++;
      for (var w = (v.length - E) * c + 1 >>> 0, O = new Uint8Array(w); v[E]; ) {
        var b = r[v.charCodeAt(E)];
        if (b === 255)
          return;
        for (var x = 0, g = w - 1; (b !== 0 || x < P) && g !== -1; g--, x++)
          b += o * O[g] >>> 0, O[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        P = x, E++;
      }
      if (v[E] !== " ") {
        for (var l = w - P; l !== w && O[l] === 0; )
          l++;
        for (var y = new Uint8Array(S + (w - l)), C = S; l !== w; )
          y[C++] = O[l++];
        return y;
      }
    }
  }
  function m(v) {
    var E = p(v);
    if (E)
      return E;
    throw new Error(`Non-${e} character`);
  }
  return { encode: d, decodeUnsafe: p, decode: m };
}
var Bb = qb, zb = Bb;
const Nh = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Vb = (t) => new TextEncoder().encode(t), Kb = (t) => new TextDecoder().decode(t);
class Hb {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Wb {
  constructor(e, r, n) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = n;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Lh(this, e);
  }
}
class Gb {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Lh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Lh = (t, e) => new Gb({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class Qb {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new Hb(e, r, n), this.decoder = new Wb(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Mo = ({ name: t, prefix: e, encode: r, decode: n }) => new Qb(t, e, r, n), Es = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = zb(r, e);
  return Mo({ prefix: t, name: e, encode: n, decode: (s) => Nh(i(s)) });
}, Zb = (t, e, r, n) => {
  const i = {};
  for (let f = 0; f < e.length; ++f)
    i[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const a = new Uint8Array(s * r / 8 | 0);
  let o = 0, u = 0, c = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, a[c++] = 255 & u >> o);
  }
  if (o >= r || 255 & u << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Yb = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", a = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], a += 8; a > r; )
      a -= r, s += e[i & o >> a];
  if (a && (s += e[i & o << r - a]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, Nt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Mo({ prefix: e, name: t, encode(i) {
  return Yb(i, n, r);
}, decode(i) {
  return Zb(i, n, r, t);
} }), Jb = Mo({ prefix: "\0", name: "identity", encode: (t) => Kb(t), decode: (t) => Vb(t) });
var Xb = Object.freeze({ __proto__: null, identity: Jb });
const ew = Nt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var tw = Object.freeze({ __proto__: null, base2: ew });
const rw = Nt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var nw = Object.freeze({ __proto__: null, base8: rw });
const iw = Es({ prefix: "9", name: "base10", alphabet: "0123456789" });
var sw = Object.freeze({ __proto__: null, base10: iw });
const ow = Nt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), aw = Nt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var cw = Object.freeze({ __proto__: null, base16: ow, base16upper: aw });
const uw = Nt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), lw = Nt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), fw = Nt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), hw = Nt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), dw = Nt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), pw = Nt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), gw = Nt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), yw = Nt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), mw = Nt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var vw = Object.freeze({ __proto__: null, base32: uw, base32upper: lw, base32pad: fw, base32padupper: hw, base32hex: dw, base32hexupper: pw, base32hexpad: gw, base32hexpadupper: yw, base32z: mw });
const bw = Es({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), ww = Es({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var _w = Object.freeze({ __proto__: null, base36: bw, base36upper: ww });
const Ew = Es({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Sw = Es({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var xw = Object.freeze({ __proto__: null, base58btc: Ew, base58flickr: Sw });
const Ow = Nt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Dw = Nt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Iw = Nt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Cw = Nt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Rw = Object.freeze({ __proto__: null, base64: Ow, base64pad: Dw, base64url: Iw, base64urlpad: Cw });
const Fh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Tw = Fh.reduce((t, e, r) => (t[r] = e, t), []), Aw = Fh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Pw(t) {
  return t.reduce((e, r) => (e += Tw[r], e), "");
}
function Nw(t) {
  const e = [];
  for (const r of t) {
    const n = Aw[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Lw = Mo({ prefix: "🚀", name: "base256emoji", encode: Pw, decode: Nw });
var Fw = Object.freeze({ __proto__: null, base256emoji: Lw }), Mw = Mh, xl = 128, Uw = 127, jw = ~Uw, $w = Math.pow(2, 31);
function Mh(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= $w; )
    e[r++] = t & 255 | xl, t /= 128;
  for (; t & jw; )
    e[r++] = t & 255 | xl, t >>>= 7;
  return e[r] = t | 0, Mh.bytes = r - n + 1, e;
}
var kw = ka, qw = 128, Ol = 127;
function ka(t, n) {
  var r = 0, n = n || 0, i = 0, s = n, a, o = t.length;
  do {
    if (s >= o)
      throw ka.bytes = 0, new RangeError("Could not decode varint");
    a = t[s++], r += i < 28 ? (a & Ol) << i : (a & Ol) * Math.pow(2, i), i += 7;
  } while (a >= qw);
  return ka.bytes = s - n, r;
}
var Bw = Math.pow(2, 7), zw = Math.pow(2, 14), Vw = Math.pow(2, 21), Kw = Math.pow(2, 28), Hw = Math.pow(2, 35), Ww = Math.pow(2, 42), Gw = Math.pow(2, 49), Qw = Math.pow(2, 56), Zw = Math.pow(2, 63), Yw = function(t) {
  return t < Bw ? 1 : t < zw ? 2 : t < Vw ? 3 : t < Kw ? 4 : t < Hw ? 5 : t < Ww ? 6 : t < Gw ? 7 : t < Qw ? 8 : t < Zw ? 9 : 10;
}, Jw = { encode: Mw, decode: kw, encodingLength: Yw }, Uh = Jw;
const Dl = (t, e, r = 0) => (Uh.encode(t, e, r), e), Il = (t) => Uh.encodingLength(t), qa = (t, e) => {
  const r = e.byteLength, n = Il(t), i = n + Il(r), s = new Uint8Array(i + r);
  return Dl(t, s, 0), Dl(r, s, n), s.set(e, i), new Xw(t, r, e, s);
};
class Xw {
  constructor(e, r, n, i) {
    this.code = e, this.size = r, this.digest = n, this.bytes = i;
  }
}
const jh = ({ name: t, code: e, encode: r }) => new e_(t, e, r);
class e_ {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? qa(this.code, r) : r.then((n) => qa(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const $h = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), t_ = jh({ name: "sha2-256", code: 18, encode: $h("SHA-256") }), r_ = jh({ name: "sha2-512", code: 19, encode: $h("SHA-512") });
var n_ = Object.freeze({ __proto__: null, sha256: t_, sha512: r_ });
const kh = 0, i_ = "identity", qh = Nh, s_ = (t) => qa(kh, qh(t)), o_ = { code: kh, name: i_, encode: qh, digest: s_ };
var a_ = Object.freeze({ __proto__: null, identity: o_ });
new TextEncoder(), new TextDecoder();
const Cl = { ...Xb, ...tw, ...nw, ...sw, ...cw, ...vw, ..._w, ...xw, ...Rw, ...Fw };
({ ...n_, ...a_ });
function Bh(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function c_(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Bh(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function zh(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const Rl = zh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), aa = zh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = c_(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), u_ = { utf8: Rl, "utf-8": Rl, hex: Cl.base16, latin1: aa, ascii: aa, binary: aa, ...Cl };
function l_(t, e = "utf8") {
  const r = u_[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Bh(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Vh = "wc", f_ = 2, $c = "core", cn = `${Vh}@2:${$c}:`, h_ = { name: $c, logger: "error" }, d_ = { database: ":memory:" }, p_ = "crypto", Tl = "client_ed25519_seed", g_ = ie.ONE_DAY, y_ = "keychain", m_ = "0.3", v_ = "messages", b_ = "0.3", w_ = ie.SIX_HOURS, __ = "publisher", Kh = "irn", E_ = "error", Hh = "wss://relay.walletconnect.com", Al = "wss://relay.walletconnect.org", S_ = "relayer", kt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, x_ = "_subscription", Br = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, O_ = ie.ONE_SECOND, D_ = "2.10.6", I_ = 1e4, C_ = "0.3", R_ = "WALLETCONNECT_CLIENT_ID", mr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, T_ = "subscription", A_ = "0.3", P_ = ie.FIVE_SECONDS * 1e3, N_ = "pairing", L_ = "0.3", Ii = { wc_pairingDelete: { req: { ttl: ie.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ie.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ie.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ie.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ie.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ie.ONE_DAY, prompt: !1, tag: 0 } } }, Ni = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Pr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, F_ = "history", M_ = "0.3", U_ = "expirer", hr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, j_ = "0.3", ca = "verify-api", Gn = "https://verify.walletconnect.com", Ba = "https://verify.walletconnect.org", $_ = [Gn, Ba];
class k_ {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = y_, this.version = m_, this.initialized = !1, this.storagePrefix = cn, this.init = async () => {
      if (!this.initialized) {
        const n = await this.getKeyChain();
        typeof n < "u" && (this.keychain = n), this.initialized = !0;
      }
    }, this.has = (n) => (this.isInitialized(), this.keychain.has(n)), this.set = async (n, i) => {
      this.isInitialized(), this.keychain.set(n, i), await this.persist();
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.keychain.get(n);
      if (typeof i > "u") {
        const { message: s } = Y("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(s);
      }
      return i;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = e, this.logger = $e.generateChildLogger(r, this.name);
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Eh(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Sh(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class q_ {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = p_, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), s = Qu(i);
      return ch(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = r0();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const s = await this.getClientSeed(), a = Qu(s), o = ja();
      return await lv(o, i, g_, a);
    }, this.generateSharedKey = (i, s, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(i), u = n0(o, s);
      return this.setSymKey(u, a);
    }, this.setSymKey = async (i, s) => {
      this.isInitialized();
      const a = s || i0(i);
      return await this.keychain.set(a, i), a;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, s, a) => {
      this.isInitialized();
      const o = _h(a), u = ys(s);
      if (ol(o)) {
        const p = o.senderPublicKey, m = o.receiverPublicKey;
        i = await this.generateSharedKey(p, m);
      }
      const c = this.getSymKey(i), { type: f, senderPublicKey: d } = o;
      return o0({ type: f, symKey: c, message: u, senderPublicKey: d });
    }, this.decode = async (i, s, a) => {
      this.isInitialized();
      const o = u0(s, a);
      if (ol(o)) {
        const u = o.receiverPublicKey, c = o.senderPublicKey;
        i = await this.generateSharedKey(u, c);
      }
      try {
        const u = this.getSymKey(i), c = a0({ symKey: u, encoded: s });
        return Co(c);
      } catch (u) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(u);
      }
    }, this.getPayloadType = (i) => {
      const s = so(i);
      return bs(s.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const s = so(i);
      return s.senderPublicKey ? Qt(s.senderPublicKey, Gt) : void 0;
    }, this.core = e, this.logger = $e.generateChildLogger(r, this.name), this.keychain = n || new k_(this.core, this.logger);
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, r) {
    return await this.keychain.set(e, r), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(Tl);
    } catch {
      e = ja(), await this.keychain.set(Tl, e);
    }
    return l_(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class B_ extends gy {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = v_, this.version = b_, this.initialized = !1, this.storagePrefix = cn, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const n = await this.getRelayerMessages();
          typeof n < "u" && (this.messages = n), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (n) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(n);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (n, i) => {
      this.isInitialized();
      const s = Jn(i);
      let a = this.messages.get(n);
      return typeof a > "u" && (a = {}), typeof a[s] < "u" || (a[s] = i, this.messages.set(n, a), await this.persist()), s;
    }, this.get = (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (n, i) => {
      this.isInitialized();
      const s = this.get(n), a = Jn(i);
      return typeof s[a] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = $e.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Eh(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Sh(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class z_ extends yy {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new pr.EventEmitter(), this.name = __, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ie.toMiliseconds(ie.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, i, s) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      try {
        const o = (s == null ? void 0 : s.ttl) || w_, u = $a(s), c = (s == null ? void 0 : s.prompt) || !1, f = (s == null ? void 0 : s.tag) || 0, d = (s == null ? void 0 : s.id) || Ah().toString(), p = { topic: n, message: i, opts: { ttl: o, relay: u, prompt: c, tag: f, id: d } }, m = setTimeout(() => this.queue.set(d, p), this.publishTimeout);
        try {
          await await Vi(this.rpcPublish(n, i, o, u, c, f, d), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(d), this.relayer.events.emit(kt.publish, p);
        } catch (v) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (a = s == null ? void 0 : s.internal) != null && a.throwOnFailedPublish)
            throw this.removeRequestFromQueue(d), v;
          return;
        } finally {
          clearTimeout(m);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      } catch (o) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(o), o;
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.relayer = e, this.logger = $e.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, i, s, a, o) {
    var u, c, f, d;
    const p = { method: Ys(i.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: s, tag: a }, id: o };
    return Kt((u = p.params) == null ? void 0 : u.prompt) && ((c = p.params) == null || delete c.prompt), Kt((f = p.params) == null ? void 0 : f.tag) && ((d = p.params) == null || delete d.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p }), this.relayer.request(p);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: r, message: n, opts: i } = e;
      await this.publish(r, n, i);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(di.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(kt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(kt.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class V_ {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, r) => {
      const n = this.get(e);
      this.exists(e, r) || this.map.set(e, [...n, r]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, r) => this.get(e).includes(r), this.delete = (e, r) => {
      if (typeof r > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const n = this.get(e);
      if (!this.exists(e, r))
        return;
      const i = n.filter((s) => s !== r);
      if (!i.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, i);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var K_ = Object.defineProperty, H_ = Object.defineProperties, W_ = Object.getOwnPropertyDescriptors, Pl = Object.getOwnPropertySymbols, G_ = Object.prototype.hasOwnProperty, Q_ = Object.prototype.propertyIsEnumerable, Nl = (t, e, r) => e in t ? K_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ci = (t, e) => {
  for (var r in e || (e = {}))
    G_.call(e, r) && Nl(t, r, e[r]);
  if (Pl)
    for (var r of Pl(e))
      Q_.call(e, r) && Nl(t, r, e[r]);
  return t;
}, ua = (t, e) => H_(t, W_(e));
class Z_ extends by {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new V_(), this.events = new pr.EventEmitter(), this.name = T_, this.version = A_, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = cn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const s = $a(i), a = { topic: n, relay: s };
        this.pending.set(n, a);
        const o = await this.rpcSubscribe(n, s);
        return this.onSubscribe(o, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } }), o;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(n, i.id, i) : await this.unsubscribeByTopic(n, i);
    }, this.isSubscribed = async (n) => this.topics.includes(n) ? !0 : await new Promise((i, s) => {
      const a = new ie.Watch();
      a.start(this.pendingSubscriptionWatchLabel);
      const o = setInterval(() => {
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), i(!0)), a.elapsed(this.pendingSubscriptionWatchLabel) >= P_ && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = $e.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, r) {
    let n = !1;
    try {
      n = this.getSubscription(e).topic === r;
    } catch {
    }
    return n;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, r) {
    const n = this.topicMap.get(e);
    await Promise.all(n.map(async (i) => await this.unsubscribeById(e, i, r)));
  }
  async unsubscribeById(e, r, n) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    try {
      const i = $a(n);
      await this.rpcUnsubscribe(e, r, i);
      const s = wt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: Ys(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await Vi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(kt.connection_stalled);
    }
    return Jn(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: Ys(r.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await Vi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(kt.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const i = { method: Ys(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, ua(Ci({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Ci({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(e, r, n) {
    this.events.removeAllListeners(r), this.hasSubscription(r, e) && this.deleteSubscription(r, n), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, r) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: r }), this.addSubscription(e, r));
  }
  addSubscription(e, r) {
    this.subscriptions.set(e, Ci({}, r)), this.topicMap.set(r.topic, e), this.events.emit(mr.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const n = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(mr.deleted, ua(Ci({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(mr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(mr.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const r = await this.rpcBatchSubscribe(e);
    _s(r) && this.onBatchSubscribe(r.map((n, i) => ua(Ci({}, e[i]), { id: n })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed)
      return;
    const e = [];
    this.pending.forEach((r) => {
      e.push(r);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(di.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(kt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(kt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(mr.created, async (e) => {
      const r = mr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(mr.deleted, async (e) => {
      const r = mr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const r = setInterval(() => {
        this.restartInProgress || (clearInterval(r), e());
      }, this.pollingInterval);
    });
  }
}
var Y_ = Object.defineProperty, Ll = Object.getOwnPropertySymbols, J_ = Object.prototype.hasOwnProperty, X_ = Object.prototype.propertyIsEnumerable, Fl = (t, e, r) => e in t ? Y_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, e1 = (t, e) => {
  for (var r in e || (e = {}))
    J_.call(e, r) && Fl(t, r, e[r]);
  if (Ll)
    for (var r of Ll(e))
      X_.call(e, r) && Fl(t, r, e[r]);
  return t;
};
class t1 extends my {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new pr.EventEmitter(), this.name = S_, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(kt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(kt.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(Br.payload, this.onPayloadHandler), this.provider.on(Br.connect, this.onConnectHandler), this.provider.on(Br.disconnect, this.onDisconnectHandler), this.provider.on(Br.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? $e.generateChildLogger(e.logger, this.name) : $e.pino($e.getDefaultLoggerOptions({ level: e.logger || E_ })), this.messages = new B_(this.logger, e.core), this.subscriber = new Z_(this, this.logger), this.publisher = new z_(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Hh, this.projectId = e.projectId, this.bundleId = g0(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Al}...`), await this.restartTransport(Al);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, I_);
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, r, n) {
    this.isInitialized(), await this.publisher.publish(e, r, n), await this.recordMessageEvent({ topic: e, message: r, publishedAt: Date.now() });
  }
  async subscribe(e, r) {
    var n;
    this.isInitialized();
    let i = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "";
    if (i)
      return i;
    let s;
    const a = (o) => {
      o.topic === e && (this.subscriber.off(mr.created, a), s());
    };
    return await Promise.all([new Promise((o) => {
      s = o, this.subscriber.on(mr.created, a);
    }), new Promise(async (o) => {
      i = await this.subscriber.subscribe(e, r), o();
    })]), i;
  }
  async unsubscribe(e, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, r);
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Vi(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(mr.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await Vi(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (i) {
            n(i);
            return;
          }
          r();
        })]);
      } catch (r) {
        this.logger.error(r);
        const n = r;
        if (!this.isConnectionStalled(n.message))
          throw r;
        this.provider.events.emit(Br.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await ml())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Lb(new jb(_0({ sdkVersion: D_, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: r, message: n } = e;
    await this.messages.set(r, n);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: r, message: n } = e;
    if (!n || n.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${n}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const i = this.messages.has(r, n);
    return i && this.logger.debug(`Ignoring duplicate message: ${n}`), i;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), jc(e)) {
      if (!e.method.endsWith(x_))
        return;
      const r = e.params, { topic: n, message: i, publishedAt: s } = r.data, a = { topic: n, message: i, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(e1({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      Fo(e) && this.events.emit(kt.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(kt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = Mc(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Br.payload, this.onPayloadHandler), this.provider.off(Br.connect, this.onConnectHandler), this.provider.off(Br.disconnect, this.onDisconnectHandler), this.provider.off(Br.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(kt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await ml();
    db(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(kt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ie.toMiliseconds(O_)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var r1 = Object.defineProperty, Ml = Object.getOwnPropertySymbols, n1 = Object.prototype.hasOwnProperty, i1 = Object.prototype.propertyIsEnumerable, Ul = (t, e, r) => e in t ? r1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, jl = (t, e) => {
  for (var r in e || (e = {}))
    n1.call(e, r) && Ul(t, r, e[r]);
  if (Ml)
    for (var r of Ml(e))
      i1.call(e, r) && Ul(t, r, e[r]);
  return t;
};
class Uo extends vy {
  constructor(e, r, n, i = cn, s = void 0) {
    super(e, r, n, i), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = C_, this.cached = [], this.initialized = !1, this.storagePrefix = cn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !Kt(a) ? this.map.set(this.getKey(a), a) : V0(a) ? this.map.set(a.id, a) : K0(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((u) => kb(o[u], a[u]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const u = jl(jl({}, this.getData(a)), o);
      this.map.set(a, u), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a, reason: o }), this.map.delete(a), await this.persist());
    }, this.logger = $e.generateChildLogger(r, this.name), this.storagePrefix = i, this.getKey = s;
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const r = this.map.get(e);
    if (!r) {
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class s1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = N_, this.version = L_, this.events = new ps(), this.initialized = !1, this.storagePrefix = cn, this.ignoredPayloadTypes = [kn], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = ja(), i = await this.core.crypto.setSymKey(n), s = vr(ie.FIVE_MINUTES), a = { protocol: Kh }, o = { topic: i, expiry: s, relay: a, active: !1 }, u = L0({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: n, relay: a });
      return await this.pairings.set(i, o), await this.core.relayer.subscribe(i), this.core.expirer.set(i, s), { topic: i, uri: u };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: i, symKey: s, relay: a } = hl(n.uri);
      let o;
      if (this.pairings.keys.includes(i) && (o = this.pairings.get(i), o.active))
        throw new Error(`Pairing already exists: ${i}. Please try again with a new connection URI.`);
      const u = vr(ie.FIVE_MINUTES), c = { topic: i, relay: a, expiry: u, active: !1 };
      return await this.pairings.set(i, c), this.core.expirer.set(i, u), n.activatePairing && await this.activate({ topic: i }), this.events.emit(Ni.create, c), this.core.crypto.keychain.has(i) || (await this.core.crypto.setSymKey(s, i), await this.core.relayer.subscribe(i, { relay: a })), c;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const i = vr(ie.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: i }), this.core.expirer.set(n, i);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_pairingPing", {}), { done: a, resolve: o, reject: u } = Kn();
        this.events.once(bt("pairing_ping", s), ({ error: c }) => {
          c ? u(c) : o();
        }), await a();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: i });
    }, this.updateMetadata = async ({ topic: n, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: i } = n;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", wt("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (n, i, s) => {
      const a = Xn(i, s), o = await this.core.crypto.encode(n, a), u = Ii[i].req;
      return await this.core.history.set(n, a), this.core.relayer.publish(n, o, u), a.id;
    }, this.sendResult = async (n, i, s) => {
      const a = Mc(n, s), o = await this.core.crypto.encode(i, a), u = await this.core.history.get(i, n), c = Ii[u.request.method].res;
      await this.core.relayer.publish(i, o, c), await this.core.history.resolve(a);
    }, this.sendError = async (n, i, s) => {
      const a = Uc(n, s), o = await this.core.crypto.encode(i, a), u = await this.core.history.get(i, n), c = Ii[u.request.method] ? Ii[u.request.method].res : Ii.unregistered_method.res;
      await this.core.relayer.publish(i, o, c), await this.core.history.resolve(a);
    }, this.deletePairing = async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, wt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((i) => nn(i.expiry));
      await Promise.all(n.map((i) => this.deletePairing(i.topic)));
    }, this.onRelayEventRequest = (n) => {
      const { topic: i, payload: s } = n;
      switch (s.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(i, s);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(i, s);
        default:
          return this.onUnknownRpcMethodRequest(i, s);
      }
    }, this.onRelayEventResponse = async (n) => {
      const { topic: i, payload: s } = n, a = (await this.core.history.get(i, s.id)).request.method;
      switch (a) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, s);
        default:
          return this.onUnknownRpcMethodResponse(a);
      }
    }, this.onPairingPingRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(s, n, !0), this.events.emit(Ni.ping, { id: s, topic: n });
      } catch (a) {
        await this.sendError(s, n, a), this.logger.error(a);
      }
    }, this.onPairingPingResponse = (n, i) => {
      const { id: s } = i;
      setTimeout(() => {
        Vr(i) ? this.events.emit(bt("pairing_ping", s), {}) : br(i) && this.events.emit(bt("pairing_ping", s), { error: i.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit(Ni.delete, { id: s, topic: n });
      } catch (a) {
        await this.sendError(s, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodRequest = async (n, i) => {
      const { id: s, method: a } = i;
      try {
        if (this.registeredMethods.includes(a))
          return;
        const o = wt("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(s, n, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(s, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(wt("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      var i;
      if (!er(n)) {
        const { message: a } = Y("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(a);
      }
      if (!z0(n.uri)) {
        const { message: a } = Y("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(a);
      }
      const s = hl(n.uri);
      if (!((i = s == null ? void 0 : s.relay) != null && i.protocol)) {
        const { message: a } = Y("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(a);
      }
      if (!(s != null && s.symKey)) {
        const { message: a } = Y("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(a);
      }
    }, this.isValidPing = async (n) => {
      if (!er(n)) {
        const { message: s } = Y("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (n) => {
      if (!er(n)) {
        const { message: s } = Y("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidPairingTopic = async (n) => {
      if (!Dt(n, !1)) {
        const { message: i } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: i } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(i);
      }
      if (nn(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: i } = Y("EXPIRED", `pairing topic: ${n}`);
        throw new Error(i);
      }
    }, this.core = e, this.logger = $e.generateChildLogger(r, this.name), this.pairings = new Uo(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(kt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const i = await this.core.crypto.decode(r, n);
      try {
        jc(i) ? (await this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Fo(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(hr.expired, async (e) => {
      const { topic: r } = Oh(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Ni.expire, { topic: r }));
    });
  }
}
class o1 extends py {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new pr.EventEmitter(), this.name = F_, this.version = M_, this.cached = [], this.initialized = !1, this.storagePrefix = cn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, i, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: s }), this.records.has(i.id))
        return;
      const a = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: s, expiry: vr(ie.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(Pr.created, a);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = br(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.events.emit(Pr.updated, i));
    }, this.get = async (n, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: i }), await this.getRecord(i)), this.delete = (n, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((s) => {
        if (s.topic === n) {
          if (typeof i < "u" && s.id !== i)
            return;
          this.records.delete(s.id), this.events.emit(Pr.deleted, s);
        }
      });
    }, this.exists = async (n, i) => (this.isInitialized(), this.records.has(i) ? (await this.getRecord(i)).topic === n : !1), this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.logger = $e.generateChildLogger(r, this.name);
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((r) => {
      if (typeof r.response < "u")
        return;
      const n = { topic: r.topic, request: Xn(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return e.push(n);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const r = this.records.get(e);
    if (!r) {
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Pr.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Pr.created, (e) => {
      const r = Pr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Pr.updated, (e) => {
      const r = Pr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Pr.deleted, (e) => {
      const r = Pr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(di.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        ie.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class a1 extends wy {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new pr.EventEmitter(), this.name = U_, this.version = j_, this.cached = [], this.initialized = !1, this.storagePrefix = cn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (n) => {
      try {
        const i = this.formatTarget(n);
        return typeof this.getExpiration(i) < "u";
      } catch {
        return !1;
      }
    }, this.set = (n, i) => {
      this.isInitialized();
      const s = this.formatTarget(n), a = { target: s, expiry: i };
      this.expirations.set(s, a), this.checkExpiry(s, a), this.events.emit(hr.created, { target: s, expiration: a });
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.formatTarget(n);
      return this.getExpiration(i);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const i = this.formatTarget(n), s = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(hr.deleted, { target: i, expiration: s });
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.logger = $e.generateChildLogger(r, this.name);
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return E0(e);
    if (typeof e == "number")
      return S0(e);
    const { message: r } = Y("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(hr.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const r = this.expirations.get(e);
    if (!r) {
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: n } = r;
    ie.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(hr.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(di.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(hr.created, (e) => {
      const r = hr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(hr.expired, (e) => {
      const r = hr.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(hr.deleted, (e) => {
      const r = hr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class c1 extends _y {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = ca, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || yi() || !mi())
        return;
      const i = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      this.verifyUrl !== i && this.removeIframe(), this.verifyUrl = i;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Ba;
        try {
          await this.createIframe();
        } catch (s) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(s), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (n) => {
      this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId), await this.init());
    }, this.resolve = async (n) => {
      if (this.isDevEnv)
        return "";
      const i = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      let s;
      try {
        s = await this.fetchAttestation(n.attestationId, i);
      } catch (a) {
        this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${i}`), this.logger.info(a), s = await this.fetchAttestation(n.attestationId, Ba);
      }
      return s;
    }, this.fetchAttestation = async (n, i) => {
      this.logger.info(`resolving attestation: ${n} from url: ${i}`);
      const s = this.startAbortTimer(ie.ONE_SECOND * 2), a = await fetch(`${i}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(s), a.status === 200 ? await a.json() : void 0;
    }, this.addToQueue = (n) => {
      this.queue.push(n);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((n) => this.sendPost(n)), this.queue = []);
    }, this.sendPost = (n) => {
      var i;
      try {
        if (!this.iframe)
          return;
        (i = this.iframe.contentWindow) == null || i.postMessage(n, "*"), this.logger.info(`postMessage sent: ${n} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let n;
      const i = (s) => {
        s.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", i), n());
      };
      await Promise.race([new Promise((s) => {
        if (document.getElementById(ca))
          return s();
        window.addEventListener("message", i);
        const a = document.createElement("iframe");
        a.id = ca, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, n = s;
      }), new Promise((s, a) => setTimeout(() => {
        window.removeEventListener("message", i), a("verify iframe load timeout");
      }, ie.toMiliseconds(ie.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (n) => {
      let i = n || Gn;
      return $_.includes(i) || (this.logger.info(`verify url: ${i}, not included in trusted list, assigning default: ${Gn}`), i = Gn), i;
    }, this.logger = $e.generateChildLogger(r, this.name), this.verifyUrl = Gn, this.abortController = new AbortController(), this.isDevEnv = Pc() && process.env.IS_VITEST;
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ie.toMiliseconds(e));
  }
}
var u1 = Object.defineProperty, $l = Object.getOwnPropertySymbols, l1 = Object.prototype.hasOwnProperty, f1 = Object.prototype.propertyIsEnumerable, kl = (t, e, r) => e in t ? u1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ql = (t, e) => {
  for (var r in e || (e = {}))
    l1.call(e, r) && kl(t, r, e[r]);
  if ($l)
    for (var r of $l(e))
      f1.call(e, r) && kl(t, r, e[r]);
  return t;
};
class kc extends dy {
  constructor(e) {
    super(e), this.protocol = Vh, this.version = f_, this.name = $c, this.events = new pr.EventEmitter(), this.initialized = !1, this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Hh, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : $e.pino($e.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || h_.logger }));
    this.logger = $e.generateChildLogger(r, this.name), this.heartbeat = new di.HeartBeat(), this.crypto = new q_(this, this.logger, e == null ? void 0 : e.keychain), this.history = new o1(this, this.logger), this.expirer = new a1(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Tg(ql(ql({}, d_), e == null ? void 0 : e.storageOptions)), this.relayer = new t1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new s1(this, this.logger), this.verify = new c1(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new kc(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(R_, n), r;
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
}
const h1 = kc, Wh = "wc", Gh = 2, Qh = "client", qc = `${Wh}@${Gh}:${Qh}:`, la = { name: Qh, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Bl = "WALLETCONNECT_DEEPLINK_CHOICE", d1 = "proposal", p1 = "Proposal expired", g1 = "session", qs = ie.SEVEN_DAYS, y1 = "engine", Ri = { wc_sessionPropose: { req: { ttl: ie.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ie.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ie.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ie.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ie.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ie.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ie.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ie.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ie.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ie.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ie.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ie.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ie.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ie.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ie.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ie.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, fa = { min: ie.FIVE_MINUTES, max: ie.SEVEN_DAYS }, zr = { idle: "IDLE", active: "ACTIVE" }, m1 = "request", v1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var b1 = Object.defineProperty, w1 = Object.defineProperties, _1 = Object.getOwnPropertyDescriptors, zl = Object.getOwnPropertySymbols, E1 = Object.prototype.hasOwnProperty, S1 = Object.prototype.propertyIsEnumerable, Vl = (t, e, r) => e in t ? b1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Jt = (t, e) => {
  for (var r in e || (e = {}))
    E1.call(e, r) && Vl(t, r, e[r]);
  if (zl)
    for (var r of zl(e))
      S1.call(e, r) && Vl(t, r, e[r]);
  return t;
}, Ti = (t, e) => w1(t, _1(e));
class x1 extends Sy {
  constructor(e) {
    super(e), this.name = y1, this.events = new ps(), this.initialized = !1, this.ignoredPayloadTypes = [kn], this.requestQueue = { state: zr.idle, queue: [] }, this.sessionRequestQueue = { state: zr.idle, queue: [] }, this.requestQueueDelay = ie.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(Ri) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ie.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = Ti(Jt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: a, sessionProperties: o, relays: u } = n;
      let c = i, f, d = !1;
      if (c && (d = this.client.core.pairing.pairings.get(c).active), !c || !d) {
        const { topic: O, uri: b } = await this.client.core.pairing.create();
        c = O, f = b;
      }
      const p = await this.client.core.crypto.generateKeyPair(), m = Jt({ requiredNamespaces: s, optionalNamespaces: a, relays: u ?? [{ protocol: Kh }], proposer: { publicKey: p, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: v, resolve: E, done: S } = Kn(ie.FIVE_MINUTES, p1);
      if (this.events.once(bt("session_connect"), async ({ error: O, session: b }) => {
        if (O)
          v(O);
        else if (b) {
          b.self.publicKey = p;
          const x = Ti(Jt({}, b), { requiredNamespaces: b.requiredNamespaces, optionalNamespaces: b.optionalNamespaces });
          await this.client.session.set(b.topic, x), await this.setExpiry(b.topic, b.expiry), c && await this.client.core.pairing.updateMetadata({ topic: c, metadata: b.peer.metadata }), E(x);
        }
      }), !c) {
        const { message: O } = Y("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
        throw new Error(O);
      }
      const P = await this.sendRequest({ topic: c, method: "wc_sessionPropose", params: m }), w = vr(ie.FIVE_MINUTES);
      return await this.setProposal(P, Jt({ id: P, expiry: w }, m)), { uri: f, approval: S };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: i, namespaces: s, sessionProperties: a } = r, o = this.client.proposal.get(n);
      let { pairingTopic: u, proposer: c, requiredNamespaces: f, optionalNamespaces: d } = o;
      u = u || "", $i(f) || (f = j0(s, "approve()"));
      const p = await this.client.core.crypto.generateKeyPair(), m = c.publicKey, v = await this.client.core.crypto.generateSharedKey(p, m);
      u && n && (await this.client.core.pairing.updateMetadata({ topic: u, metadata: c.metadata }), await this.sendResult({ id: n, topic: u, result: { relay: { protocol: i ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, wt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }));
      const E = Jt({ relay: { protocol: i ?? "irn" }, namespaces: s, requiredNamespaces: f, optionalNamespaces: d, pairingTopic: u, controller: { publicKey: p, metadata: this.client.metadata }, expiry: vr(qs) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(v), await this.sendRequest({ topic: v, method: "wc_sessionSettle", params: E, throwOnFailedPublish: !0 });
      const S = Ti(Jt({}, E), { topic: v, pairingTopic: u, acknowledged: !1, self: E.controller, peer: { publicKey: c.publicKey, metadata: c.metadata }, controller: p });
      return await this.client.session.set(v, S), await this.setExpiry(v, vr(qs)), { topic: v, acknowledged: () => new Promise((P) => setTimeout(() => P(this.client.session.get(v)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: i } = r, { pairingTopic: s } = this.client.proposal.get(n);
      s && (await this.sendError(n, s, i), await this.client.proposal.delete(n, wt("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: i } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: i } }), { done: a, resolve: o, reject: u } = Kn();
      return this.events.once(bt("session_update", s), ({ error: c }) => {
        c ? u(c) : o();
      }), await this.client.session.update(n, { namespaces: i }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: s, resolve: a, reject: o } = Kn();
      return this.events.once(bt("session_extend", i), ({ error: u }) => {
        u ? o(u) : a();
      }), await this.setExpiry(n, vr(qs)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: i, topic: s, expiry: a } = r, o = Fc(), { done: u, resolve: c, reject: f } = Kn(a, "Request expired. Please try again.");
      return this.events.once(bt("session_request", o), ({ error: d, result: p }) => {
        d ? f(d) : c(p);
      }), await Promise.all([new Promise(async (d) => {
        await this.sendRequest({ clientRpcId: o, topic: s, method: "wc_sessionRequest", params: { request: i, chainId: n }, expiry: a, throwOnFailedPublish: !0 }).catch((p) => f(p)), this.client.events.emit("session_request_sent", { topic: s, request: i, chainId: n, id: o }), d();
      }), new Promise(async (d) => {
        const p = await O0(this.client.core.storage, Bl);
        x0({ id: o, topic: s, wcDeepLink: p }), d();
      }), u()]).then((d) => d[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: i } = r, { id: s } = i;
      Vr(i) ? await this.sendResult({ id: s, topic: n, result: i.result, throwOnFailedPublish: !0 }) : br(i) && await this.sendError(s, n, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: s, resolve: a, reject: o } = Kn();
        this.events.once(bt("session_ping", i), ({ error: u }) => {
          u ? o(u) : a();
        }), await s();
      } else
        this.client.core.pairing.pairings.keys.includes(n) && await this.client.core.pairing.ping({ topic: n });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: n, event: i, chainId: s } = r;
      await this.sendRequest({ topic: n, method: "wc_sessionEvent", params: { event: i, chainId: s } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: n } = r;
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: wt("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => q0(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((s) => {
            var a, o;
            return ((a = s.peerMetadata) == null ? void 0 : a.url) && ((o = s.peerMetadata) == null ? void 0 : o.url) === r.peer.metadata.url && s.topic && s.topic !== n.topic;
          });
          if (i.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r, n) => {
      const { self: i } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, wt("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Bl).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, wt("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), i && (this.sessionRequestQueue.state = zr.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = Ri.wc_sessionRequest.req.ttl, { id: i, topic: s, params: a, verifyContext: o } = r;
      await this.client.pendingRequest.set(i, { id: i, topic: s, params: a, verifyContext: o }), n && this.client.core.expirer.set(i, vr(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: i, params: s, expiry: a, relayRpcId: o, clientRpcId: u, throwOnFailedPublish: c } = r, f = Xn(i, s, u);
      if (mi() && v1.includes(i)) {
        const m = Jn(JSON.stringify(f));
        this.client.core.verify.register({ attestationId: m });
      }
      const d = await this.client.core.crypto.encode(n, f), p = Ri[i].req;
      return a && (p.ttl = a), o && (p.id = o), this.client.core.history.set(n, f), c ? (p.internal = Ti(Jt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, d, p)) : this.client.core.relayer.publish(n, d, p).catch((m) => this.client.logger.error(m)), f.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: i, result: s, throwOnFailedPublish: a } = r, o = Mc(n, s), u = await this.client.core.crypto.encode(i, o), c = await this.client.core.history.get(i, n), f = Ri[c.request.method].res;
      a ? (f.internal = Ti(Jt({}, f.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, u, f)) : this.client.core.relayer.publish(i, u, f).catch((d) => this.client.logger.error(d)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, n, i) => {
      const s = Uc(r, i), a = await this.client.core.crypto.encode(n, s), o = await this.client.core.history.get(n, r), u = Ri[o.request.method].res;
      this.client.core.relayer.publish(n, a, u), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((i) => {
        nn(i.expiry) && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        nn(i.expiry) && n.push(i.id);
      }), await Promise.all([...r.map((i) => this.deleteSession(i)), ...n.map((i) => this.deleteProposal(i))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === zr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = zr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = zr.idle;
    }, this.processRequest = (r) => {
      const { topic: n, payload: i } = r, s = i.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(n, i);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(n, i);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(n, i);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(n, i);
        case "wc_sessionPing":
          return this.onSessionPingRequest(n, i);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(n, i);
        case "wc_sessionRequest":
          return this.onSessionRequest(n, i);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(n, i);
        default:
          return this.client.logger.info(`Unsupported request method ${s}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: n, payload: i } = r, s = (await this.client.core.history.get(n, i.id)).request.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(n, i);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(n, i);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(n, i);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(n, i);
        case "wc_sessionPing":
          return this.onSessionPingResponse(n, i);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(n, i);
        default:
          return this.client.logger.info(`Unsupported response method ${s}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: n } = r, { message: i } = Y("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(i);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        this.isValidConnect(Jt({}, n.params));
        const a = vr(ie.FIVE_MINUTES), o = Jt({ id: s, pairingTopic: r, expiry: a }, i);
        await this.setProposal(s, o);
        const u = Jn(JSON.stringify(n)), c = await this.getVerifyContext(u, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: o, verifyContext: c });
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: i } = n;
      if (Vr(n)) {
        const { result: s } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const a = this.client.proposal.get(i);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: a });
        const o = a.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const u = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: u });
        const c = await this.client.core.crypto.generateSharedKey(o, u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c });
        const f = await this.client.core.relayer.subscribe(c);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: f }), await this.client.core.pairing.activate({ topic: r });
      } else
        br(n) && (await this.client.proposal.delete(i, wt("USER_DISCONNECTED")), this.events.emit(bt("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: a, controller: o, expiry: u, namespaces: c, requiredNamespaces: f, optionalNamespaces: d, sessionProperties: p, pairingTopic: m } = n.params, v = Jt({ topic: r, relay: a, expiry: u, namespaces: c, acknowledged: !0, pairingTopic: m, requiredNamespaces: f, optionalNamespaces: d, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, p && { sessionProperties: p });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(bt("session_connect"), { session: v }), this.cleanupDuplicatePairings(v);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: i } = n;
      Vr(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(bt("session_approve", i), {})) : br(n) && (await this.client.session.delete(r, wt("USER_DISCONNECTED")), this.events.emit(bt("session_approve", i), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        const a = `${r}_session_update`, o = ks.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(Jt({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: i }), ks.set(a, s);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: i } = n;
      Vr(n) ? this.events.emit(bt("session_update", i), {}) : br(n) && this.events.emit(bt("session_update", i), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, vr(qs)), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: i } = n;
      Vr(n) ? this.events.emit(bt("session_extend", i), {}) : br(n) && this.events.emit(bt("session_extend", i), { error: n.error });
    }, this.onSessionPingRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionPingResponse = (r, n) => {
      const { id: i } = n;
      setTimeout(() => {
        Vr(n) ? this.events.emit(bt("session_ping", i), {}) : br(n) && this.events.emit(bt("session_ping", i), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(kt.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult({ id: i, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: i, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidRequest(Jt({ topic: r }, s));
        const a = Jn(JSON.stringify(Xn("wc_sessionRequest", s, i))), o = this.client.session.get(r), u = await this.getVerifyContext(a, o.peer.metadata), c = { id: i, topic: r, params: s, verifyContext: u };
        await this.setPendingSessionRequest(c), this.addSessionRequestToSessionRequestQueue(c), this.processSessionRequestQueue();
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: i } = n;
      Vr(n) ? this.events.emit(bt("session_request", i), { result: n.result }) : br(n) && this.events.emit(bt("session_request", i), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        const a = `${r}_session_event_${s.event.name}`, o = ks.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(Jt({ topic: r }, s)), this.client.events.emit("session_event", { id: i, topic: r, params: s }), ks.set(a, i);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = zr.idle, this.processSessionRequestQueue();
      }, ie.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === zr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = zr.active, this.client.events.emit("session_request", r);
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const n = this.client.proposal.getAll().find((i) => i.pairingTopic === r.topic);
      n && this.onSessionProposeRequest(r.topic, Xn("wc_sessionPropose", { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer, sessionProperties: n.sessionProperties }, n.id));
    }, this.isValidConnect = async (r) => {
      if (!er(r)) {
        const { message: u } = Y("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(u);
      }
      const { pairingTopic: n, requiredNamespaces: i, optionalNamespaces: s, sessionProperties: a, relays: o } = r;
      if (Kt(n) || await this.isValidPairingTopic(n), !X0(o, !0)) {
        const { message: u } = Y("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(u);
      }
      !Kt(i) && $i(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !Kt(s) && $i(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), Kt(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const i = J0(r, "connect()", n);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!er(r))
        throw new Error(Y("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: i, relayProtocol: s, sessionProperties: a } = r;
      await this.isValidProposalId(n);
      const o = this.client.proposal.get(n), u = Js(i, "approve()");
      if (u)
        throw new Error(u.message);
      const c = gl(o.requiredNamespaces, i, "approve()");
      if (c)
        throw new Error(c.message);
      if (!Dt(s, !0)) {
        const { message: f } = Y("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(f);
      }
      Kt(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!er(r)) {
        const { message: s } = Y("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: n, reason: i } = r;
      if (await this.isValidProposalId(n), !tb(i)) {
        const { message: s } = Y("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!er(r)) {
        const { message: c } = Y("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(c);
      }
      const { relay: n, controller: i, namespaces: s, expiry: a } = r;
      if (!Ih(n)) {
        const { message: c } = Y("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c);
      }
      const o = H0(i, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const u = Js(s, "onSessionSettleRequest()");
      if (u)
        throw new Error(u.message);
      if (nn(a)) {
        const { message: c } = Y("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c);
      }
    }, this.isValidUpdate = async (r) => {
      if (!er(r)) {
        const { message: u } = Y("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, namespaces: i } = r;
      await this.isValidSessionTopic(n);
      const s = this.client.session.get(n), a = Js(i, "update()");
      if (a)
        throw new Error(a.message);
      const o = gl(s.requiredNamespaces, i, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!er(r)) {
        const { message: i } = Y("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!er(r)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, request: i, chainId: s, expiry: a } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!pl(o, s)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(u);
      }
      if (!rb(i)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(u);
      }
      if (!sb(o, s, i.method)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(u);
      }
      if (a && !ub(a, fa)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${fa.min} and ${fa.max}`);
        throw new Error(u);
      }
    }, this.isValidRespond = async (r) => {
      if (!er(r)) {
        const { message: s } = Y("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n, response: i } = r;
      if (await this.isValidSessionTopic(n), !nb(i)) {
        const { message: s } = Y("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!er(r)) {
        const { message: i } = Y("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!er(r)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(o);
      }
      const { topic: n, event: i, chainId: s } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!pl(a, s)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(o);
      }
      if (!ib(i)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
      if (!ob(a, s, i.name)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!er(r)) {
        const { message: i } = Y("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const i = { verified: { verifyUrl: n.verifyUrl || Gn, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        s && (i.verified.origin = s.origin, i.verified.isScam = s.isScam, i.verified.validation = s.origin === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.info(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`), i;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((i) => {
        if (!Dt(i, !1)) {
          const { message: s } = Y("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(i)}`);
          throw new Error(s);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(kt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const i = await this.client.core.crypto.decode(r, n);
      try {
        jc(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Fo(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
      } catch (s) {
        this.client.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(hr.expired, async (e) => {
      const { topic: r, id: n } = Oh(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, Y("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Ni.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!Dt(e, !1)) {
      const { message: r } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (nn(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = Y("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!Dt(e, !1)) {
      const { message: r } = Y("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (nn(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: r } = Y("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Dt(e, !1)) {
      const { message: r } = Y("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = Y("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!eb(e)) {
      const { message: r } = Y("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (nn(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = Y("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class O1 extends Uo {
  constructor(e, r) {
    super(e, r, d1, qc), this.core = e, this.logger = r;
  }
}
class D1 extends Uo {
  constructor(e, r) {
    super(e, r, g1, qc), this.core = e, this.logger = r;
  }
}
class I1 extends Uo {
  constructor(e, r) {
    super(e, r, m1, qc, (n) => n.id), this.core = e, this.logger = r;
  }
}
class Bc extends Ey {
  constructor(e) {
    super(e), this.protocol = Wh, this.version = Gh, this.name = la.name, this.events = new pr.EventEmitter(), this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
      try {
        return await this.engine.connect(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.pair = async (n) => {
      try {
        return await this.engine.pair(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.approve = async (n) => {
      try {
        return await this.engine.approve(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.reject = async (n) => {
      try {
        return await this.engine.reject(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.update = async (n) => {
      try {
        return await this.engine.update(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.extend = async (n) => {
      try {
        return await this.engine.extend(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.request = async (n) => {
      try {
        return await this.engine.request(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.respond = async (n) => {
      try {
        return await this.engine.respond(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.ping = async (n) => {
      try {
        return await this.engine.ping(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.emit = async (n) => {
      try {
        return await this.engine.emit(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.disconnect = async (n) => {
      try {
        return await this.engine.disconnect(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.find = (n) => {
      try {
        return this.engine.find(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.name = (e == null ? void 0 : e.name) || la.name, this.metadata = (e == null ? void 0 : e.metadata) || m0();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : $e.pino($e.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || la.logger }));
    this.core = (e == null ? void 0 : e.core) || new h1(e), this.logger = $e.generateChildLogger(r, this.name), this.session = new D1(this.core, this.logger), this.proposal = new O1(this.core, this.logger), this.pendingRequest = new I1(this.core, this.logger), this.engine = new x1(this);
  }
  static async init(e) {
    const r = new Bc(e);
    return await r.initialize(), r;
  }
  get context() {
    return $e.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
}
var C1 = Object.defineProperty, R1 = Object.defineProperties, T1 = Object.getOwnPropertyDescriptors, Kl = Object.getOwnPropertySymbols, A1 = Object.prototype.hasOwnProperty, P1 = Object.prototype.propertyIsEnumerable, Hl = (t, e, r) => e in t ? C1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, N1 = (t, e) => {
  for (var r in e || (e = {}))
    A1.call(e, r) && Hl(t, r, e[r]);
  if (Kl)
    for (var r of Kl(e))
      P1.call(e, r) && Hl(t, r, e[r]);
  return t;
}, L1 = (t, e) => R1(t, T1(e)), zc = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, et = (t, e, r) => (zc(t, e, "read from private field"), r ? r.call(t) : e.get(t)), xn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, co = (t, e, r, n) => (zc(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Ut = (t, e, r) => (zc(t, e, "access private method"), r), On, Hn, Li, Ot, za, Zh, jt, Vt, Va, Wl;
let F1 = class {
  constructor(e) {
    xn(this, za), xn(this, jt), xn(this, Va), xn(this, On, void 0), xn(this, Hn, void 0), xn(this, Li, void 0), xn(this, Ot, void 0), co(this, On, e), co(this, Hn, Ut(this, za, Zh).call(this)), Ut(this, jt, Vt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (i, s) => {
      await Ut(this, jt, Vt).call(this);
      const a = et(this, Hn).subscribeModal((c) => {
        c.open || (a(), s(new Error("Modal closed")));
      }), { uri: o, approval: u } = await et(this, Ot).connect(e);
      if (o) {
        const c = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((d) => c.add(d));
        }), n && Object.values(n).forEach(({ chains: f }) => {
          f && f.forEach((d) => c.add(d));
        }), await et(this, Hn).openModal({ uri: o, chains: Array.from(c) });
      }
      try {
        const c = await u();
        i(c);
      } catch (c) {
        s(c);
      } finally {
        a(), et(this, Hn).closeModal();
      }
    });
  }
  async disconnect(e) {
    await Ut(this, jt, Vt).call(this), await et(this, Ot).disconnect(e);
  }
  async request(e) {
    return await Ut(this, jt, Vt).call(this), await et(this, Ot).request(e);
  }
  async getSessions() {
    return await Ut(this, jt, Vt).call(this), et(this, Ot).session.getAll();
  }
  async getSession() {
    return await Ut(this, jt, Vt).call(this), et(this, Ot).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).on("session_event", e);
  }
  async offSessionEvent(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).off("session_update", e);
  }
  async onSessionDelete(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await Ut(this, jt, Vt).call(this), et(this, Ot).off("session_expire", e);
  }
};
On = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Li = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), za = /* @__PURE__ */ new WeakSet(), Zh = function() {
  const { modalOptions: t, projectId: e } = et(this, On);
  return new Hp(L1(N1({}, t), { projectId: e }));
}, jt = /* @__PURE__ */ new WeakSet(), Vt = async function() {
  return et(this, Ot) ? !0 : (!et(this, Li) && typeof window < "u" && co(this, Li, Ut(this, Va, Wl).call(this)), et(this, Li));
}, Va = /* @__PURE__ */ new WeakSet(), Wl = async function() {
  co(this, Ot, await Bc.init({ metadata: et(this, On).metadata, projectId: et(this, On).projectId, relayUrl: et(this, On).relayUrl }));
  const t = await et(this, Ot).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Vc = [
  "decrypt",
  "disconnect",
  "getSelectedAccount",
  "getBalance",
  "getRecords",
  "requestCreateEvent",
  "getEvent",
  "getEvents",
  "createSharedState",
  "importSharedState",
  "requestSignature"
], jo = ["aleo:1"], Kc = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], M1 = "f0aaeffe71b636da453fce042d79d723", U1 = {
  standaloneChains: jo,
  enableExplorer: !1,
  enableAccountView: !0,
  enableNetworkView: !0,
  enableStandaloneMode: !0,
  mobileWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "puzzleapp://",
        universal: ""
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: "https://walletconnect.puzzle.online/"
      }
    }
  ],
  walletImages: {
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, tD = {
  requiredNamespaces: {
    aleo: {
      methods: Vc,
      chains: jo,
      events: Kc
    }
  }
}, ci = new ps();
let Fi;
function j1(t) {
  Fi = new F1({
    projectId: M1,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...U1 }
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function tt() {
  return new Promise((t) => {
    if (Fi)
      t(Fi);
    else {
      const e = setInterval(() => {
        Fi && (clearInterval(e), t(Fi));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
var ze;
(function(t) {
  t.assertEqual = (i) => i;
  function e(i) {
  }
  t.assertIs = e;
  function r(i) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (i) => {
    const s = {};
    for (const a of i)
      s[a] = a;
    return s;
  }, t.getValidEnumValues = (i) => {
    const s = t.objectKeys(i).filter((o) => typeof i[i[o]] != "number"), a = {};
    for (const o of s)
      a[o] = i[o];
    return t.objectValues(a);
  }, t.objectValues = (i) => t.objectKeys(i).map(function(s) {
    return i[s];
  }), t.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const s = [];
    for (const a in i)
      Object.prototype.hasOwnProperty.call(i, a) && s.push(a);
    return s;
  }, t.find = (i, s) => {
    for (const a of i)
      if (s(a))
        return a;
  }, t.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function n(i, s = " | ") {
    return i.map((a) => typeof a == "string" ? `'${a}'` : a).join(s);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (i, s) => typeof s == "bigint" ? s.toString() : s;
})(ze || (ze = {}));
var Ka;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Ka || (Ka = {}));
const ee = ze.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), on = (t) => {
  switch (typeof t) {
    case "undefined":
      return ee.undefined;
    case "string":
      return ee.string;
    case "number":
      return isNaN(t) ? ee.nan : ee.number;
    case "boolean":
      return ee.boolean;
    case "function":
      return ee.function;
    case "bigint":
      return ee.bigint;
    case "symbol":
      return ee.symbol;
    case "object":
      return Array.isArray(t) ? ee.array : t === null ? ee.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? ee.promise : typeof Map < "u" && t instanceof Map ? ee.map : typeof Set < "u" && t instanceof Set ? ee.set : typeof Date < "u" && t instanceof Date ? ee.date : ee.object;
    default:
      return ee.unknown;
  }
}, W = ze.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), $1 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Er extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r = e || function(s) {
      return s.message;
    }, n = { _errors: [] }, i = (s) => {
      for (const a of s.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(i);
        else if (a.code === "invalid_return_type")
          i(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          i(a.argumentsError);
        else if (a.path.length === 0)
          n._errors.push(r(a));
        else {
          let o = n, u = 0;
          for (; u < a.path.length; ) {
            const c = a.path[u];
            u === a.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(r(a))) : o[c] = o[c] || { _errors: [] }, o = o[c], u++;
          }
        }
    };
    return i(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ze.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, n = [];
    for (const i of this.issues)
      i.path.length > 0 ? (r[i.path[0]] = r[i.path[0]] || [], r[i.path[0]].push(e(i))) : n.push(e(i));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Er.create = (t) => new Er(t);
const Ki = (t, e) => {
  let r;
  switch (t.code) {
    case W.invalid_type:
      t.received === ee.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case W.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, ze.jsonStringifyReplacer)}`;
      break;
    case W.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${ze.joinValues(t.keys, ", ")}`;
      break;
    case W.invalid_union:
      r = "Invalid input";
      break;
    case W.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${ze.joinValues(t.options)}`;
      break;
    case W.invalid_enum_value:
      r = `Invalid enum value. Expected ${ze.joinValues(t.options)}, received '${t.received}'`;
      break;
    case W.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case W.invalid_return_type:
      r = "Invalid function return type";
      break;
    case W.invalid_date:
      r = "Invalid date";
      break;
    case W.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : ze.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case W.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case W.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case W.custom:
      r = "Invalid input";
      break;
    case W.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case W.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case W.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, ze.assertNever(t);
  }
  return { message: r };
};
let Yh = Ki;
function k1(t) {
  Yh = t;
}
function uo() {
  return Yh;
}
const lo = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: i } = t, s = [...r, ...i.path || []], a = {
    ...i,
    path: s
  };
  let o = "";
  const u = n.filter((c) => !!c).slice().reverse();
  for (const c of u)
    o = c(a, { data: e, defaultError: o }).message;
  return {
    ...i,
    path: s,
    message: i.message || o
  };
}, q1 = [];
function re(t, e) {
  const r = lo({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      uo(),
      Ki
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class Bt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const n = [];
    for (const i of r) {
      if (i.status === "aborted")
        return de;
      i.status === "dirty" && e.dirty(), n.push(i.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const i of r)
      n.push({
        key: await i.key,
        value: await i.value
      });
    return Bt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const i of r) {
      const { key: s, value: a } = i;
      if (s.status === "aborted" || a.status === "aborted")
        return de;
      s.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), (typeof a.value < "u" || i.alwaysSet) && (n[s.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const de = Object.freeze({
  status: "aborted"
}), Jh = (t) => ({ status: "dirty", value: t }), Zt = (t) => ({ status: "valid", value: t }), Ha = (t) => t.status === "aborted", Wa = (t) => t.status === "dirty", fo = (t) => t.status === "valid", ho = (t) => typeof Promise < "u" && t instanceof Promise;
var se;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(se || (se = {}));
class Fr {
  constructor(e, r, n, i) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Gl = (t, e) => {
  if (fo(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Er(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function be(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: i } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (a, o) => a.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: r ?? o.defaultError }, description: i };
}
class Oe {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return on(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: on(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Bt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: on(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (ho(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const n = this.safeParse(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, r) {
    var n;
    const i = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: on(e)
    }, s = this._parseSync({ data: e, path: i.path, parent: i });
    return Gl(i, s);
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: on(e)
    }, i = this._parse({ data: e, path: n.path, parent: n }), s = await (ho(i) ? i : Promise.resolve(i));
    return Gl(n, s);
  }
  refine(e, r) {
    const n = (i) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(i) : r;
    return this._refinement((i, s) => {
      const a = e(i), o = () => s.addIssue({
        code: W.custom,
        ...n(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((u) => u ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, i) => e(n) ? !0 : (i.addIssue(typeof r == "function" ? r(n, i) : r), !1));
  }
  _refinement(e) {
    return new xr({
      schema: this,
      typeName: le.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Hr.create(this, this._def);
  }
  nullable() {
    return Fn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Sr.create(this, this._def);
  }
  promise() {
    return li.create(this, this._def);
  }
  or(e) {
    return Qi.create([this, e], this._def);
  }
  and(e) {
    return Zi.create(this, e, this._def);
  }
  transform(e) {
    return new xr({
      ...be(this._def),
      schema: this,
      typeName: le.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ts({
      ...be(this._def),
      innerType: this,
      defaultValue: r,
      typeName: le.ZodDefault
    });
  }
  brand() {
    return new ed({
      typeName: le.ZodBranded,
      type: this,
      ...be(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new mo({
      ...be(this._def),
      innerType: this,
      catchValue: r,
      typeName: le.ZodCatch
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Ss.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const B1 = /^c[^\s-]{8,}$/i, z1 = /^[a-z][a-z0-9]*$/, V1 = /[0-9A-HJKMNP-TV-Z]{26}/, K1 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, H1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, W1 = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, G1 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Q1 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Z1 = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Y1(t, e) {
  return !!((e === "v4" || !e) && G1.test(t) || (e === "v6" || !e) && Q1.test(t));
}
class _r extends Oe {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((i) => e.test(i), {
      validation: r,
      code: W.invalid_string,
      ...se.errToObj(n)
    }), this.nonempty = (e) => this.min(1, se.errToObj(e)), this.trim = () => new _r({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new _r({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new _r({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ee.string) {
      const s = this._getOrReturnCtx(e);
      return re(
        s,
        {
          code: W.invalid_type,
          expected: ee.string,
          received: s.parsedType
        }
        //
      ), de;
    }
    const n = new Bt();
    let i;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (i = this._getOrReturnCtx(e, i), re(i, {
          code: W.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (i = this._getOrReturnCtx(e, i), re(i, {
          code: W.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), n.dirty());
      else if (s.kind === "length") {
        const a = e.data.length > s.value, o = e.data.length < s.value;
        (a || o) && (i = this._getOrReturnCtx(e, i), a ? re(i, {
          code: W.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : o && re(i, {
          code: W.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), n.dirty());
      } else if (s.kind === "email")
        H1.test(e.data) || (i = this._getOrReturnCtx(e, i), re(i, {
          validation: "email",
          code: W.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "emoji")
        W1.test(e.data) || (i = this._getOrReturnCtx(e, i), re(i, {
          validation: "emoji",
          code: W.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "uuid")
        K1.test(e.data) || (i = this._getOrReturnCtx(e, i), re(i, {
          validation: "uuid",
          code: W.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid")
        B1.test(e.data) || (i = this._getOrReturnCtx(e, i), re(i, {
          validation: "cuid",
          code: W.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "cuid2")
        z1.test(e.data) || (i = this._getOrReturnCtx(e, i), re(i, {
          validation: "cuid2",
          code: W.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "ulid")
        V1.test(e.data) || (i = this._getOrReturnCtx(e, i), re(i, {
          validation: "ulid",
          code: W.invalid_string,
          message: s.message
        }), n.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), re(i, {
            validation: "url",
            code: W.invalid_string,
            message: s.message
          }), n.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), re(i, {
          validation: "regex",
          code: W.invalid_string,
          message: s.message
        }), n.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i), re(i, {
          code: W.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), n.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i), re(i, {
          code: W.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i), re(i, {
          code: W.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), n.dirty()) : s.kind === "datetime" ? Z1(s).test(e.data) || (i = this._getOrReturnCtx(e, i), re(i, {
          code: W.invalid_string,
          validation: "datetime",
          message: s.message
        }), n.dirty()) : s.kind === "ip" ? Y1(e.data, s.version) || (i = this._getOrReturnCtx(e, i), re(i, {
          validation: "ip",
          code: W.invalid_string,
          message: s.message
        }), n.dirty()) : ze.assertNever(s);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new _r({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...se.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...se.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...se.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...se.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...se.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...se.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...se.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...se.errToObj(e) });
  }
  datetime(e) {
    var r;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : !1,
      ...se.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...se.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...se.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...se.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...se.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...se.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...se.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...se.errToObj(r)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
_r.create = (t) => {
  var e;
  return new _r({
    checks: [],
    typeName: le.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...be(t)
  });
};
function J1(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, i = r > n ? r : n, s = parseInt(t.toFixed(i).replace(".", "")), a = parseInt(e.toFixed(i).replace(".", ""));
  return s % a / Math.pow(10, i);
}
class un extends Oe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ee.number) {
      const s = this._getOrReturnCtx(e);
      return re(s, {
        code: W.invalid_type,
        expected: ee.number,
        received: s.parsedType
      }), de;
    }
    let n;
    const i = new Bt();
    for (const s of this._def.checks)
      s.kind === "int" ? ze.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? J1(e.data, s.value) !== 0 && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.not_finite,
        message: s.message
      }), i.dirty()) : ze.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, se.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, se.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, se.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, se.toString(r));
  }
  setLimit(e, r, n, i) {
    return new un({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: se.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new un({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: se.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: se.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: se.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: se.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: se.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: se.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: se.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: se.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: se.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && ze.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
un.create = (t) => new un({
  checks: [],
  typeName: le.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...be(t)
});
class ln extends Oe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== ee.bigint) {
      const s = this._getOrReturnCtx(e);
      return re(s, {
        code: W.invalid_type,
        expected: ee.bigint,
        received: s.parsedType
      }), de;
    }
    let n;
    const i = new Bt();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), i.dirty()) : ze.assertNever(s);
    return { status: i.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, se.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, se.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, se.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, se.toString(r));
  }
  setLimit(e, r, n, i) {
    return new ln({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: se.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new ln({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: se.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: se.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: se.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: se.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: se.toString(r)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
ln.create = (t) => {
  var e;
  return new ln({
    checks: [],
    typeName: le.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...be(t)
  });
};
class Hi extends Oe {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ee.boolean) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.boolean,
        received: n.parsedType
      }), de;
    }
    return Zt(e.data);
  }
}
Hi.create = (t) => new Hi({
  typeName: le.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...be(t)
});
class Nn extends Oe {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ee.date) {
      const s = this._getOrReturnCtx(e);
      return re(s, {
        code: W.invalid_type,
        expected: ee.date,
        received: s.parsedType
      }), de;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return re(s, {
        code: W.invalid_date
      }), de;
    }
    const n = new Bt();
    let i;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i), re(i, {
        code: W.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), n.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i), re(i, {
        code: W.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), n.dirty()) : ze.assertNever(s);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Nn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: se.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: se.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
Nn.create = (t) => new Nn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: le.ZodDate,
  ...be(t)
});
class po extends Oe {
  _parse(e) {
    if (this._getType(e) !== ee.symbol) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.symbol,
        received: n.parsedType
      }), de;
    }
    return Zt(e.data);
  }
}
po.create = (t) => new po({
  typeName: le.ZodSymbol,
  ...be(t)
});
class Wi extends Oe {
  _parse(e) {
    if (this._getType(e) !== ee.undefined) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.undefined,
        received: n.parsedType
      }), de;
    }
    return Zt(e.data);
  }
}
Wi.create = (t) => new Wi({
  typeName: le.ZodUndefined,
  ...be(t)
});
class Gi extends Oe {
  _parse(e) {
    if (this._getType(e) !== ee.null) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.null,
        received: n.parsedType
      }), de;
    }
    return Zt(e.data);
  }
}
Gi.create = (t) => new Gi({
  typeName: le.ZodNull,
  ...be(t)
});
class ui extends Oe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Zt(e.data);
  }
}
ui.create = (t) => new ui({
  typeName: le.ZodAny,
  ...be(t)
});
class Tn extends Oe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Zt(e.data);
  }
}
Tn.create = (t) => new Tn({
  typeName: le.ZodUnknown,
  ...be(t)
});
class Gr extends Oe {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return re(r, {
      code: W.invalid_type,
      expected: ee.never,
      received: r.parsedType
    }), de;
  }
}
Gr.create = (t) => new Gr({
  typeName: le.ZodNever,
  ...be(t)
});
class go extends Oe {
  _parse(e) {
    if (this._getType(e) !== ee.undefined) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.void,
        received: n.parsedType
      }), de;
    }
    return Zt(e.data);
  }
}
go.create = (t) => new go({
  typeName: le.ZodVoid,
  ...be(t)
});
class Sr extends Oe {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), i = this._def;
    if (r.parsedType !== ee.array)
      return re(r, {
        code: W.invalid_type,
        expected: ee.array,
        received: r.parsedType
      }), de;
    if (i.exactLength !== null) {
      const a = r.data.length > i.exactLength.value, o = r.data.length < i.exactLength.value;
      (a || o) && (re(r, {
        code: a ? W.too_big : W.too_small,
        minimum: o ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), n.dirty());
    }
    if (i.minLength !== null && r.data.length < i.minLength.value && (re(r, {
      code: W.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), n.dirty()), i.maxLength !== null && r.data.length > i.maxLength.value && (re(r, {
      code: W.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, o) => i.type._parseAsync(new Fr(r, a, r.path, o)))).then((a) => Bt.mergeArray(n, a));
    const s = [...r.data].map((a, o) => i.type._parseSync(new Fr(r, a, r.path, o)));
    return Bt.mergeArray(n, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Sr({
      ...this._def,
      minLength: { value: e, message: se.toString(r) }
    });
  }
  max(e, r) {
    return new Sr({
      ...this._def,
      maxLength: { value: e, message: se.toString(r) }
    });
  }
  length(e, r) {
    return new Sr({
      ...this._def,
      exactLength: { value: e, message: se.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Sr.create = (t, e) => new Sr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: le.ZodArray,
  ...be(e)
});
function Wn(t) {
  if (t instanceof st) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = Hr.create(Wn(n));
    }
    return new st({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Sr ? new Sr({
      ...t._def,
      type: Wn(t.element)
    }) : t instanceof Hr ? Hr.create(Wn(t.unwrap())) : t instanceof Fn ? Fn.create(Wn(t.unwrap())) : t instanceof Mr ? Mr.create(t.items.map((e) => Wn(e))) : t;
}
class st extends Oe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = ze.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== ee.object) {
      const c = this._getOrReturnCtx(e);
      return re(c, {
        code: W.invalid_type,
        expected: ee.object,
        received: c.parsedType
      }), de;
    }
    const { status: n, ctx: i } = this._processInputParams(e), { shape: s, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Gr && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        a.includes(c) || o.push(c);
    const u = [];
    for (const c of a) {
      const f = s[c], d = i.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: f._parse(new Fr(i, d, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof Gr) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const f of o)
          u.push({
            key: { status: "valid", value: f },
            value: { status: "valid", value: i.data[f] }
          });
      else if (c === "strict")
        o.length > 0 && (re(i, {
          code: W.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const f of o) {
        const d = i.data[f];
        u.push({
          key: { status: "valid", value: f },
          value: c._parse(
            new Fr(i, d, i.path, f)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: f in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const f of u) {
        const d = await f.key;
        c.push({
          key: d,
          value: await f.value,
          alwaysSet: f.alwaysSet
        });
      }
      return c;
    }).then((c) => Bt.mergeObjectSync(n, c)) : Bt.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return se.errToObj, new st({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var i, s, a, o;
          const u = (a = (s = (i = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(i, r, n).message) !== null && a !== void 0 ? a : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = se.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new st({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new st({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new st({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new st({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: le.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new st({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return ze.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new st({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return ze.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new st({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Wn(this);
  }
  partial(e) {
    const r = {};
    return ze.objectKeys(this.shape).forEach((n) => {
      const i = this.shape[n];
      e && !e[n] ? r[n] = i : r[n] = i.optional();
    }), new st({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return ze.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let s = this.shape[n];
        for (; s instanceof Hr; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new st({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Xh(ze.objectKeys(this.shape));
  }
}
st.create = (t, e) => new st({
  shape: () => t,
  unknownKeys: "strip",
  catchall: Gr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
st.strictCreate = (t, e) => new st({
  shape: () => t,
  unknownKeys: "strict",
  catchall: Gr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
st.lazycreate = (t, e) => new st({
  shape: t,
  unknownKeys: "strip",
  catchall: Gr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
class Qi extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function i(s) {
      for (const o of s)
        if (o.result.status === "valid")
          return o.result;
      for (const o of s)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = s.map((o) => new Er(o.ctx.common.issues));
      return re(r, {
        code: W.invalid_union,
        unionErrors: a
      }), de;
    }
    if (r.common.async)
      return Promise.all(n.map(async (s) => {
        const a = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: r.data,
            path: r.path,
            parent: a
          }),
          ctx: a
        };
      })).then(i);
    {
      let s;
      const a = [];
      for (const u of n) {
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, f = u._parseSync({
          data: r.data,
          path: r.path,
          parent: c
        });
        if (f.status === "valid")
          return f;
        f.status === "dirty" && !s && (s = { result: f, ctx: c }), c.common.issues.length && a.push(c.common.issues);
      }
      if (s)
        return r.common.issues.push(...s.ctx.common.issues), s.result;
      const o = a.map((u) => new Er(u));
      return re(r, {
        code: W.invalid_union,
        unionErrors: o
      }), de;
    }
  }
  get options() {
    return this._def.options;
  }
}
Qi.create = (t, e) => new Qi({
  options: t,
  typeName: le.ZodUnion,
  ...be(e)
});
const Xs = (t) => t instanceof Ji ? Xs(t.schema) : t instanceof xr ? Xs(t.innerType()) : t instanceof Xi ? [t.value] : t instanceof fn ? t.options : t instanceof es ? Object.keys(t.enum) : t instanceof ts ? Xs(t._def.innerType) : t instanceof Wi ? [void 0] : t instanceof Gi ? [null] : null;
class $o extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.object)
      return re(r, {
        code: W.invalid_type,
        expected: ee.object,
        received: r.parsedType
      }), de;
    const n = this.discriminator, i = r.data[n], s = this.optionsMap.get(i);
    return s ? r.common.async ? s._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : s._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (re(r, {
      code: W.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), de);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, r, n) {
    const i = /* @__PURE__ */ new Map();
    for (const s of r) {
      const a = Xs(s.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (i.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        i.set(o, s);
      }
    }
    return new $o({
      typeName: le.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...be(n)
    });
  }
}
function Ga(t, e) {
  const r = on(t), n = on(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === ee.object && n === ee.object) {
    const i = ze.objectKeys(e), s = ze.objectKeys(t).filter((o) => i.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of s) {
      const u = Ga(t[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      a[o] = u.data;
    }
    return { valid: !0, data: a };
  } else if (r === ee.array && n === ee.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const a = t[s], o = e[s], u = Ga(a, o);
      if (!u.valid)
        return { valid: !1 };
      i.push(u.data);
    }
    return { valid: !0, data: i };
  } else
    return r === ee.date && n === ee.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Zi extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = (s, a) => {
      if (Ha(s) || Ha(a))
        return de;
      const o = Ga(s.value, a.value);
      return o.valid ? ((Wa(s) || Wa(a)) && r.dirty(), { status: r.value, value: o.data }) : (re(n, {
        code: W.invalid_intersection_types
      }), de);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([s, a]) => i(s, a)) : i(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
Zi.create = (t, e, r) => new Zi({
  left: t,
  right: e,
  typeName: le.ZodIntersection,
  ...be(r)
});
class Mr extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.array)
      return re(n, {
        code: W.invalid_type,
        expected: ee.array,
        received: n.parsedType
      }), de;
    if (n.data.length < this._def.items.length)
      return re(n, {
        code: W.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), de;
    !this._def.rest && n.data.length > this._def.items.length && (re(n, {
      code: W.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((a, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new Fr(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(s).then((a) => Bt.mergeArray(r, a)) : Bt.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Mr({
      ...this._def,
      rest: e
    });
  }
}
Mr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Mr({
    items: t,
    typeName: le.ZodTuple,
    rest: null,
    ...be(e)
  });
};
class Yi extends Oe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.object)
      return re(n, {
        code: W.invalid_type,
        expected: ee.object,
        received: n.parsedType
      }), de;
    const i = [], s = this._def.keyType, a = this._def.valueType;
    for (const o in n.data)
      i.push({
        key: s._parse(new Fr(n, o, n.path, o)),
        value: a._parse(new Fr(n, n.data[o], n.path, o))
      });
    return n.common.async ? Bt.mergeObjectAsync(r, i) : Bt.mergeObjectSync(r, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Oe ? new Yi({
      keyType: e,
      valueType: r,
      typeName: le.ZodRecord,
      ...be(n)
    }) : new Yi({
      keyType: _r.create(),
      valueType: e,
      typeName: le.ZodRecord,
      ...be(r)
    });
  }
}
class yo extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.map)
      return re(n, {
        code: W.invalid_type,
        expected: ee.map,
        received: n.parsedType
      }), de;
    const i = this._def.keyType, s = this._def.valueType, a = [...n.data.entries()].map(([o, u], c) => ({
      key: i._parse(new Fr(n, o, n.path, [c, "key"])),
      value: s._parse(new Fr(n, u, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of a) {
          const c = await u.key, f = await u.value;
          if (c.status === "aborted" || f.status === "aborted")
            return de;
          (c.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(c.value, f.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of a) {
        const c = u.key, f = u.value;
        if (c.status === "aborted" || f.status === "aborted")
          return de;
        (c.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(c.value, f.value);
      }
      return { status: r.value, value: o };
    }
  }
}
yo.create = (t, e, r) => new yo({
  valueType: e,
  keyType: t,
  typeName: le.ZodMap,
  ...be(r)
});
class Ln extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.set)
      return re(n, {
        code: W.invalid_type,
        expected: ee.set,
        received: n.parsedType
      }), de;
    const i = this._def;
    i.minSize !== null && n.data.size < i.minSize.value && (re(n, {
      code: W.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), r.dirty()), i.maxSize !== null && n.data.size > i.maxSize.value && (re(n, {
      code: W.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), r.dirty());
    const s = this._def.valueType;
    function a(u) {
      const c = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f.status === "aborted")
          return de;
        f.status === "dirty" && r.dirty(), c.add(f.value);
      }
      return { status: r.value, value: c };
    }
    const o = [...n.data.values()].map((u, c) => s._parse(new Fr(n, u, n.path, c)));
    return n.common.async ? Promise.all(o).then((u) => a(u)) : a(o);
  }
  min(e, r) {
    return new Ln({
      ...this._def,
      minSize: { value: e, message: se.toString(r) }
    });
  }
  max(e, r) {
    return new Ln({
      ...this._def,
      maxSize: { value: e, message: se.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ln.create = (t, e) => new Ln({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: le.ZodSet,
  ...be(e)
});
class ei extends Oe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.function)
      return re(r, {
        code: W.invalid_type,
        expected: ee.function,
        received: r.parsedType
      }), de;
    function n(o, u) {
      return lo({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          uo(),
          Ki
        ].filter((c) => !!c),
        issueData: {
          code: W.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function i(o, u) {
      return lo({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          uo(),
          Ki
        ].filter((c) => !!c),
        issueData: {
          code: W.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof li ? Zt(async (...o) => {
      const u = new Er([]), c = await this._def.args.parseAsync(o, s).catch((p) => {
        throw u.addIssue(n(o, p)), u;
      }), f = await a(...c);
      return await this._def.returns._def.type.parseAsync(f, s).catch((p) => {
        throw u.addIssue(i(f, p)), u;
      });
    }) : Zt((...o) => {
      const u = this._def.args.safeParse(o, s);
      if (!u.success)
        throw new Er([n(o, u.error)]);
      const c = a(...u.data), f = this._def.returns.safeParse(c, s);
      if (!f.success)
        throw new Er([i(c, f.error)]);
      return f.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new ei({
      ...this._def,
      args: Mr.create(e).rest(Tn.create())
    });
  }
  returns(e) {
    return new ei({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, n) {
    return new ei({
      args: e || Mr.create([]).rest(Tn.create()),
      returns: r || Tn.create(),
      typeName: le.ZodFunction,
      ...be(n)
    });
  }
}
class Ji extends Oe {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Ji.create = (t, e) => new Ji({
  getter: t,
  typeName: le.ZodLazy,
  ...be(e)
});
class Xi extends Oe {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return re(r, {
        received: r.data,
        code: W.invalid_literal,
        expected: this._def.value
      }), de;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Xi.create = (t, e) => new Xi({
  value: t,
  typeName: le.ZodLiteral,
  ...be(e)
});
function Xh(t, e) {
  return new fn({
    values: t,
    typeName: le.ZodEnum,
    ...be(e)
  });
}
class fn extends Oe {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return re(r, {
        expected: ze.joinValues(n),
        received: r.parsedType,
        code: W.invalid_type
      }), de;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return re(r, {
        received: r.data,
        code: W.invalid_enum_value,
        options: n
      }), de;
    }
    return Zt(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  extract(e) {
    return fn.create(e);
  }
  exclude(e) {
    return fn.create(this.options.filter((r) => !e.includes(r)));
  }
}
fn.create = Xh;
class es extends Oe {
  _parse(e) {
    const r = ze.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== ee.string && n.parsedType !== ee.number) {
      const i = ze.objectValues(r);
      return re(n, {
        expected: ze.joinValues(i),
        received: n.parsedType,
        code: W.invalid_type
      }), de;
    }
    if (r.indexOf(e.data) === -1) {
      const i = ze.objectValues(r);
      return re(n, {
        received: n.data,
        code: W.invalid_enum_value,
        options: i
      }), de;
    }
    return Zt(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
es.create = (t, e) => new es({
  values: t,
  typeName: le.ZodNativeEnum,
  ...be(e)
});
class li extends Oe {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.promise && r.common.async === !1)
      return re(r, {
        code: W.invalid_type,
        expected: ee.promise,
        received: r.parsedType
      }), de;
    const n = r.parsedType === ee.promise ? r.data : Promise.resolve(r.data);
    return Zt(n.then((i) => this._def.type.parseAsync(i, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
li.create = (t, e) => new li({
  type: t,
  typeName: le.ZodPromise,
  ...be(e)
});
class xr extends Oe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === le.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), i = this._def.effect || null;
    if (i.type === "preprocess") {
      const a = i.transform(n.data);
      return n.common.async ? Promise.resolve(a).then((o) => this._def.schema._parseAsync({
        data: o,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: a,
        path: n.path,
        parent: n
      });
    }
    const s = {
      addIssue: (a) => {
        re(n, a), a.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), i.type === "refinement") {
      const a = (o) => {
        const u = i.refinement(o, s);
        if (n.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? de : (o.status === "dirty" && r.dirty(), a(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? de : (o.status === "dirty" && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (i.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!fo(a))
          return a;
        const o = i.transform(a.value, s);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => fo(a) ? Promise.resolve(i.transform(a.value, s)).then((o) => ({ status: r.value, value: o })) : a);
    ze.assertNever(i);
  }
}
xr.create = (t, e, r) => new xr({
  schema: t,
  typeName: le.ZodEffects,
  effect: e,
  ...be(r)
});
xr.createWithPreprocess = (t, e, r) => new xr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: le.ZodEffects,
  ...be(r)
});
class Hr extends Oe {
  _parse(e) {
    return this._getType(e) === ee.undefined ? Zt(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Hr.create = (t, e) => new Hr({
  innerType: t,
  typeName: le.ZodOptional,
  ...be(e)
});
class Fn extends Oe {
  _parse(e) {
    return this._getType(e) === ee.null ? Zt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Fn.create = (t, e) => new Fn({
  innerType: t,
  typeName: le.ZodNullable,
  ...be(e)
});
class ts extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === ee.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ts.create = (t, e) => new ts({
  innerType: t,
  typeName: le.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...be(e)
});
class mo extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return ho(i) ? i.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Er(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Er(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
mo.create = (t, e) => new mo({
  innerType: t,
  typeName: le.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...be(e)
});
class vo extends Oe {
  _parse(e) {
    if (this._getType(e) !== ee.nan) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.nan,
        received: n.parsedType
      }), de;
    }
    return { status: "valid", value: e.data };
  }
}
vo.create = (t) => new vo({
  typeName: le.ZodNaN,
  ...be(t)
});
const X1 = Symbol("zod_brand");
class ed extends Oe {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ss extends Oe {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? de : s.status === "dirty" ? (r.dirty(), Jh(s.value)) : this._def.out._parseAsync({
          data: s.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return i.status === "aborted" ? de : i.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, r) {
    return new Ss({
      in: e,
      out: r,
      typeName: le.ZodPipeline
    });
  }
}
const td = (t, e = {}, r) => t ? ui.create().superRefine((n, i) => {
  var s, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, u = (a = (s = o.fatal) !== null && s !== void 0 ? s : r) !== null && a !== void 0 ? a : !0, c = typeof o == "string" ? { message: o } : o;
    i.addIssue({ code: "custom", ...c, fatal: u });
  }
}) : ui.create(), eE = {
  object: st.lazycreate
};
var le;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(le || (le = {}));
const tE = (t, e = {
  message: `Input not instance of ${t.name}`
}) => td((r) => r instanceof t, e), rd = _r.create, nd = un.create, rE = vo.create, nE = ln.create, id = Hi.create, iE = Nn.create, sE = po.create, oE = Wi.create, aE = Gi.create, cE = ui.create, uE = Tn.create, lE = Gr.create, fE = go.create, hE = Sr.create, dE = st.create, pE = st.strictCreate, gE = Qi.create, yE = $o.create, mE = Zi.create, vE = Mr.create, bE = Yi.create, wE = yo.create, _E = Ln.create, EE = ei.create, SE = Ji.create, xE = Xi.create, OE = fn.create, DE = es.create, IE = li.create, Ql = xr.create, CE = Hr.create, RE = Fn.create, TE = xr.createWithPreprocess, AE = Ss.create, PE = () => rd().optional(), NE = () => nd().optional(), LE = () => id().optional(), FE = {
  string: (t) => _r.create({ ...t, coerce: !0 }),
  number: (t) => un.create({ ...t, coerce: !0 }),
  boolean: (t) => Hi.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => ln.create({ ...t, coerce: !0 }),
  date: (t) => Nn.create({ ...t, coerce: !0 })
}, ME = de;
var Or = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ki,
  setErrorMap: k1,
  getErrorMap: uo,
  makeIssue: lo,
  EMPTY_PATH: q1,
  addIssueToContext: re,
  ParseStatus: Bt,
  INVALID: de,
  DIRTY: Jh,
  OK: Zt,
  isAborted: Ha,
  isDirty: Wa,
  isValid: fo,
  isAsync: ho,
  get util() {
    return ze;
  },
  get objectUtil() {
    return Ka;
  },
  ZodParsedType: ee,
  getParsedType: on,
  ZodType: Oe,
  ZodString: _r,
  ZodNumber: un,
  ZodBigInt: ln,
  ZodBoolean: Hi,
  ZodDate: Nn,
  ZodSymbol: po,
  ZodUndefined: Wi,
  ZodNull: Gi,
  ZodAny: ui,
  ZodUnknown: Tn,
  ZodNever: Gr,
  ZodVoid: go,
  ZodArray: Sr,
  ZodObject: st,
  ZodUnion: Qi,
  ZodDiscriminatedUnion: $o,
  ZodIntersection: Zi,
  ZodTuple: Mr,
  ZodRecord: Yi,
  ZodMap: yo,
  ZodSet: Ln,
  ZodFunction: ei,
  ZodLazy: Ji,
  ZodLiteral: Xi,
  ZodEnum: fn,
  ZodNativeEnum: es,
  ZodPromise: li,
  ZodEffects: xr,
  ZodTransformer: xr,
  ZodOptional: Hr,
  ZodNullable: Fn,
  ZodDefault: ts,
  ZodCatch: mo,
  ZodNaN: vo,
  BRAND: X1,
  ZodBranded: ed,
  ZodPipeline: Ss,
  custom: td,
  Schema: Oe,
  ZodSchema: Oe,
  late: eE,
  get ZodFirstPartyTypeKind() {
    return le;
  },
  coerce: FE,
  any: cE,
  array: hE,
  bigint: nE,
  boolean: id,
  date: iE,
  discriminatedUnion: yE,
  effect: Ql,
  enum: OE,
  function: EE,
  instanceof: tE,
  intersection: mE,
  lazy: SE,
  literal: xE,
  map: wE,
  nan: rE,
  nativeEnum: DE,
  never: lE,
  null: aE,
  nullable: RE,
  number: nd,
  object: dE,
  oboolean: LE,
  onumber: NE,
  optional: CE,
  ostring: PE,
  pipeline: AE,
  preprocess: TE,
  promise: IE,
  record: bE,
  set: _E,
  strictObject: pE,
  string: rd,
  symbol: sE,
  transformer: Ql,
  tuple: vE,
  undefined: oE,
  union: gE,
  unknown: uE,
  void: fE,
  NEVER: ME,
  ZodIssueCode: W,
  quotelessJson: $1,
  ZodError: Er
});
const Hc = /^aleo1.{58}$/i, UE = /^AViewKey1.{44}$/i, jE = /^APrivateKey1.{47}$/i, $E = /^at1.{60}$/i, kE = /^\d+field$/, qE = /^\d+u32$/, BE = /^\d+u64$/, rD = Or.string().regex(Hc), nD = Or.string().regex(UE), iD = Or.string().regex(jE), sD = Or.string().regex($E), oD = Or.string().regex(kE), aD = Or.string().regex(qE), cD = Or.string().regex(BE);
var Qa;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Qa || (Qa = {}));
var Za;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Za || (Za = {}));
var Ya;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Ya || (Ya = {}));
var Ja;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(Ja || (Ja = {}));
var Zl;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Zl || (Zl = {}));
const uD = Or.nativeEnum(Qa), lD = Or.nativeEnum(Za), fD = Or.nativeEnum(Ja), hD = Or.nativeEnum(Ya);
function sd(t) {
  At(() => (tt().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    tt().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function zE(t) {
  At(() => (tt().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    tt().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function od(t) {
  At(() => (tt().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    tt().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Dr() {
  const [t, e] = ji(void 0);
  return sd((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), od((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, i = { ...t, namespaces: n };
      e(i);
    }
  }), zE((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), At(() => {
    async function r() {
      const i = await (await tt()).getSession();
      e(i);
    }
    return r(), ci.on("session_change", r), () => {
      ci.off("session_change", r);
    };
  }, []), t;
}
function xs(t) {
  At(() => (tt().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    tt().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
const Yl = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (u, c) => {
    const f = typeof u == "function" ? u(e) : u;
    if (!Object.is(f, e)) {
      const d = e;
      e = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, e, f), r.forEach((p) => p(e, d));
    }
  }, i = () => e, o = { setState: n, getState: i, subscribe: (u) => (r.add(u), () => r.delete(u)), destroy: () => {
    r.clear();
  } };
  return e = t(n, i, o), o;
}, VE = (t) => t ? Yl(t) : Yl;
var Xa = { exports: {} }, ha = {}, Bs = { exports: {} }, da = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jl;
function KE() {
  if (Jl)
    return da;
  Jl = 1;
  var t = dn;
  function e(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, i = t.useEffect, s = t.useLayoutEffect, a = t.useDebugValue;
  function o(d, p) {
    var m = p(), v = n({ inst: { value: m, getSnapshot: p } }), E = v[0].inst, S = v[1];
    return s(function() {
      E.value = m, E.getSnapshot = p, u(E) && S({ inst: E });
    }, [d, m, p]), i(function() {
      return u(E) && S({ inst: E }), d(function() {
        u(E) && S({ inst: E });
      });
    }, [d]), a(m), m;
  }
  function u(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var m = p();
      return !r(d, m);
    } catch {
      return !0;
    }
  }
  function c(d, p) {
    return p();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : o;
  return da.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, da;
}
var pa = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xl;
function HE() {
  return Xl || (Xl = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = dn, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(O) {
      {
        for (var b = arguments.length, x = new Array(b > 1 ? b - 1 : 0), g = 1; g < b; g++)
          x[g - 1] = arguments[g];
        n("error", O, x);
      }
    }
    function n(O, b, x) {
      {
        var g = e.ReactDebugCurrentFrame, l = g.getStackAddendum();
        l !== "" && (b += "%s", x = x.concat([l]));
        var y = x.map(function(C) {
          return String(C);
        });
        y.unshift("Warning: " + b), Function.prototype.apply.call(console[O], console, y);
      }
    }
    function i(O, b) {
      return O === b && (O !== 0 || 1 / O === 1 / b) || O !== O && b !== b;
    }
    var s = typeof Object.is == "function" ? Object.is : i, a = t.useState, o = t.useEffect, u = t.useLayoutEffect, c = t.useDebugValue, f = !1, d = !1;
    function p(O, b, x) {
      f || t.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var g = b();
      if (!d) {
        var l = b();
        s(g, l) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var y = a({
        inst: {
          value: g,
          getSnapshot: b
        }
      }), C = y[0].inst, T = y[1];
      return u(function() {
        C.value = g, C.getSnapshot = b, m(C) && T({
          inst: C
        });
      }, [O, g, b]), o(function() {
        m(C) && T({
          inst: C
        });
        var U = function() {
          m(C) && T({
            inst: C
          });
        };
        return O(U);
      }, [O]), c(g), g;
    }
    function m(O) {
      var b = O.getSnapshot, x = O.value;
      try {
        var g = b();
        return !s(x, g);
      } catch {
        return !0;
      }
    }
    function v(O, b, x) {
      return b();
    }
    var E = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", S = !E, P = S ? v : p, w = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : P;
    pa.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), pa;
}
var ef;
function Wc() {
  return ef || (ef = 1, process.env.NODE_ENV === "production" ? Bs.exports = KE() : Bs.exports = HE()), Bs.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tf;
function WE() {
  if (tf)
    return ha;
  tf = 1;
  var t = dn, e = Wc();
  function r(c, f) {
    return c === f && (c !== 0 || 1 / c === 1 / f) || c !== c && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
  return ha.useSyncExternalStoreWithSelector = function(c, f, d, p, m) {
    var v = s(null);
    if (v.current === null) {
      var E = { hasValue: !1, value: null };
      v.current = E;
    } else
      E = v.current;
    v = o(function() {
      function P(g) {
        if (!w) {
          if (w = !0, O = g, g = p(g), m !== void 0 && E.hasValue) {
            var l = E.value;
            if (m(l, g))
              return b = l;
          }
          return b = g;
        }
        if (l = b, n(O, g))
          return l;
        var y = p(g);
        return m !== void 0 && m(l, y) ? l : (O = g, b = y);
      }
      var w = !1, O, b, x = d === void 0 ? null : d;
      return [function() {
        return P(f());
      }, x === null ? void 0 : function() {
        return P(x());
      }];
    }, [f, d, p, m]);
    var S = i(c, v[0], v[1]);
    return a(function() {
      E.hasValue = !0, E.value = S;
    }, [S]), u(S), S;
  }, ha;
}
var ga = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rf;
function GE() {
  return rf || (rf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = dn, e = Wc();
    function r(f, d) {
      return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
    function c(f, d, p, m, v) {
      var E = s(null), S;
      E.current === null ? (S = {
        hasValue: !1,
        value: null
      }, E.current = S) : S = E.current;
      var P = o(function() {
        var x = !1, g, l, y = function(B) {
          if (!x) {
            x = !0, g = B;
            var G = m(B);
            if (v !== void 0 && S.hasValue) {
              var R = S.value;
              if (v(R, G))
                return l = R, R;
            }
            return l = G, G;
          }
          var L = g, Q = l;
          if (n(L, B))
            return Q;
          var V = m(B);
          return v !== void 0 && v(Q, V) ? Q : (g = B, l = V, V);
        }, C = p === void 0 ? null : p, T = function() {
          return y(d());
        }, U = C === null ? void 0 : function() {
          return y(C());
        };
        return [T, U];
      }, [d, p, m, v]), w = P[0], O = P[1], b = i(f, w, O);
      return a(function() {
        S.hasValue = !0, S.value = b;
      }, [b]), u(b), b;
    }
    ga.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ga;
}
process.env.NODE_ENV === "production" ? Xa.exports = WE() : Xa.exports = GE();
var QE = Xa.exports;
const ZE = /* @__PURE__ */ Do(QE), { useDebugValue: YE } = dn, { useSyncExternalStoreWithSelector: JE } = ZE;
function XE(t, e = t.getState, r) {
  const n = JE(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return YE(n), n;
}
const nf = (t) => {
  const e = typeof t == "function" ? VE(t) : t, r = (n, i) => XE(e, n, i);
  return Object.assign(r, e), r;
}, eS = (t) => t ? nf(t) : nf;
function tS(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var s;
      const a = (u) => u === null ? null : JSON.parse(u, e == null ? void 0 : e.reviver), o = (s = r.getItem(i)) != null ? s : null;
      return o instanceof Promise ? o.then(a) : a(o);
    },
    setItem: (i, s) => r.setItem(
      i,
      JSON.stringify(s, e == null ? void 0 : e.replacer)
    ),
    removeItem: (i) => r.removeItem(i)
  };
}
const rs = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return rs(n)(r);
      },
      catch(n) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(n) {
        return this;
      },
      catch(n) {
        return rs(n)(r);
      }
    };
  }
}, rS = (t, e) => (r, n, i) => {
  let s = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (S) => S,
    version: 0,
    merge: (S, P) => ({
      ...P,
      ...S
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let c;
  try {
    c = s.getStorage();
  } catch {
  }
  if (!c)
    return t(
      (...S) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...S);
      },
      n,
      i
    );
  const f = rs(s.serialize), d = () => {
    const S = s.partialize({ ...n() });
    let P;
    const w = f({ state: S, version: s.version }).then(
      (O) => c.setItem(s.name, O)
    ).catch((O) => {
      P = O;
    });
    if (P)
      throw P;
    return w;
  }, p = i.setState;
  i.setState = (S, P) => {
    p(S, P), d();
  };
  const m = t(
    (...S) => {
      r(...S), d();
    },
    n,
    i
  );
  let v;
  const E = () => {
    var S;
    if (!c)
      return;
    a = !1, o.forEach((w) => w(n()));
    const P = ((S = s.onRehydrateStorage) == null ? void 0 : S.call(s, n())) || void 0;
    return rs(c.getItem.bind(c))(s.name).then((w) => {
      if (w)
        return s.deserialize(w);
    }).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== s.version) {
          if (s.migrate)
            return s.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var O;
      return v = s.merge(
        w,
        (O = n()) != null ? O : m
      ), r(v, !0), d();
    }).then(() => {
      P == null || P(v, void 0), a = !0, u.forEach((w) => w(v));
    }).catch((w) => {
      P == null || P(void 0, w);
    });
  };
  return i.persist = {
    setOptions: (S) => {
      s = {
        ...s,
        ...S
      }, S.getStorage && (c = S.getStorage());
    },
    clearStorage: () => {
      c == null || c.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => E(),
    hasHydrated: () => a,
    onHydrate: (S) => (o.add(S), () => {
      o.delete(S);
    }),
    onFinishHydration: (S) => (u.add(S), () => {
      u.delete(S);
    })
  }, E(), v || m;
}, nS = (t, e) => (r, n, i) => {
  let s = {
    storage: tS(() => localStorage),
    partialize: (E) => E,
    version: 0,
    merge: (E, S) => ({
      ...S,
      ...E
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let c = s.storage;
  if (!c)
    return t(
      (...E) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...E);
      },
      n,
      i
    );
  const f = () => {
    const E = s.partialize({ ...n() });
    return c.setItem(s.name, {
      state: E,
      version: s.version
    });
  }, d = i.setState;
  i.setState = (E, S) => {
    d(E, S), f();
  };
  const p = t(
    (...E) => {
      r(...E), f();
    },
    n,
    i
  );
  let m;
  const v = () => {
    var E, S;
    if (!c)
      return;
    a = !1, o.forEach((w) => {
      var O;
      return w((O = n()) != null ? O : p);
    });
    const P = ((S = s.onRehydrateStorage) == null ? void 0 : S.call(s, (E = n()) != null ? E : p)) || void 0;
    return rs(c.getItem.bind(c))(s.name).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== s.version) {
          if (s.migrate)
            return s.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var O;
      return m = s.merge(
        w,
        (O = n()) != null ? O : p
      ), r(m, !0), f();
    }).then(() => {
      P == null || P(m, void 0), m = n(), a = !0, u.forEach((w) => w(m));
    }).catch((w) => {
      P == null || P(void 0, w);
    });
  };
  return i.persist = {
    setOptions: (E) => {
      s = {
        ...s,
        ...E
      }, E.storage && (c = E.storage);
    },
    clearStorage: () => {
      c == null || c.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => v(),
    hasHydrated: () => a,
    onHydrate: (E) => (o.add(E), () => {
      o.delete(E);
    }),
    onFinishHydration: (E) => (u.add(E), () => {
      u.delete(E);
    })
  }, s.skipHydration || v(), m || p;
}, iS = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? rS(t, e) : nS(t, e), sS = iS, Qr = eS()(
  sS((t, e) => ({
    account: void 0,
    chainId: "aleo:1",
    // todo - figure out how to populate this from useConnect
    setAccount: (r) => {
      t({ account: r });
    },
    setChainId: (r) => {
      t({ chainId: r });
    },
    onDisconnect: () => {
      t({
        account: void 0,
        chainId: void 0
      });
    }
  }), {
    name: "puzzle-wallet-store"
  })
);
class Os {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    const r = {
      listener: e
    };
    return this.listeners.add(r), this.onSubscribe(), () => {
      this.listeners.delete(r), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const ns = typeof window > "u" || "Deno" in window;
function dr() {
}
function oS(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function ec(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function ad(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Mi(t, e, r) {
  return ko(t) ? typeof e == "function" ? {
    ...r,
    queryKey: t,
    queryFn: e
  } : {
    ...e,
    queryKey: t
  } : t;
}
function sn(t, e, r) {
  return ko(t) ? [{
    ...e,
    queryKey: t
  }, r] : [t || {}, e];
}
function sf(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: i,
    predicate: s,
    queryKey: a,
    stale: o
  } = t;
  if (ko(a)) {
    if (n) {
      if (e.queryHash !== Gc(a, e.options))
        return !1;
    } else if (!Qn(e.queryKey, a))
      return !1;
  }
  if (r !== "all") {
    const u = e.isActive();
    if (r === "active" && !u || r === "inactive" && u)
      return !1;
  }
  return !(typeof o == "boolean" && e.isStale() !== o || typeof i < "u" && i !== e.state.fetchStatus || s && !s(e));
}
function of(t, e) {
  const {
    exact: r,
    fetching: n,
    predicate: i,
    mutationKey: s
  } = t;
  if (ko(s)) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (Cn(e.options.mutationKey) !== Cn(s))
        return !1;
    } else if (!Qn(e.options.mutationKey, s))
      return !1;
  }
  return !(typeof n == "boolean" && e.state.status === "loading" !== n || i && !i(e));
}
function Gc(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Cn)(t);
}
function Cn(t) {
  return JSON.stringify(t, (e, r) => rc(r) ? Object.keys(r).sort().reduce((n, i) => (n[i] = r[i], n), {}) : r);
}
function Qn(t, e) {
  return cd(t, e);
}
function cd(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !cd(t[r], e[r])) : !1;
}
function ud(t, e) {
  if (t === e)
    return t;
  const r = af(t) && af(e);
  if (r || rc(t) && rc(e)) {
    const n = r ? t.length : Object.keys(t).length, i = r ? e : Object.keys(e), s = i.length, a = r ? [] : {};
    let o = 0;
    for (let u = 0; u < s; u++) {
      const c = r ? u : i[u];
      a[c] = ud(t[c], e[c]), a[c] === t[c] && o++;
    }
    return n === s && o === n ? t : a;
  }
  return e;
}
function tc(t, e) {
  if (t && !e || e && !t)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function af(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function rc(t) {
  if (!cf(t))
    return !1;
  const e = t.constructor;
  if (typeof e > "u")
    return !0;
  const r = e.prototype;
  return !(!cf(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function cf(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function ko(t) {
  return Array.isArray(t);
}
function ld(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function uf(t) {
  ld(0).then(t);
}
function aS() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function nc(t, e, r) {
  return r.isDataEqual != null && r.isDataEqual(t, e) ? t : typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? ud(t, e) : e;
}
class cS extends Os {
  constructor() {
    super(), this.setup = (e) => {
      if (!ns && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), window.addEventListener("focus", r, !1), () => {
          window.removeEventListener("visibilitychange", r), window.removeEventListener("focus", r);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var r;
    this.setup = e, (r = this.cleanup) == null || r.call(this), this.cleanup = e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    });
  }
  setFocused(e) {
    this.focused !== e && (this.focused = e, this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({
      listener: e
    }) => {
      e();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const bo = new cS(), lf = ["online", "offline"];
class uS extends Os {
  constructor() {
    super(), this.setup = (e) => {
      if (!ns && window.addEventListener) {
        const r = () => e();
        return lf.forEach((n) => {
          window.addEventListener(n, r, !1);
        }), () => {
          lf.forEach((n) => {
            window.removeEventListener(n, r);
          });
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var r;
    this.setup = e, (r = this.cleanup) == null || r.call(this), this.cleanup = e((n) => {
      typeof n == "boolean" ? this.setOnline(n) : this.onOnline();
    });
  }
  setOnline(e) {
    this.online !== e && (this.online = e, this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({
      listener: e
    }) => {
      e();
    });
  }
  isOnline() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }
}
const is = new uS();
function lS(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function qo(t) {
  return (t ?? "online") === "online" ? is.isOnline() : !0;
}
class fd {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function eo(t) {
  return t instanceof fd;
}
function hd(t) {
  let e = !1, r = 0, n = !1, i, s, a;
  const o = new Promise((S, P) => {
    s = S, a = P;
  }), u = (S) => {
    n || (m(new fd(S)), t.abort == null || t.abort());
  }, c = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, d = () => !bo.isFocused() || t.networkMode !== "always" && !is.isOnline(), p = (S) => {
    n || (n = !0, t.onSuccess == null || t.onSuccess(S), i == null || i(), s(S));
  }, m = (S) => {
    n || (n = !0, t.onError == null || t.onError(S), i == null || i(), a(S));
  }, v = () => new Promise((S) => {
    i = (P) => {
      const w = n || !d();
      return w && S(P), w;
    }, t.onPause == null || t.onPause();
  }).then(() => {
    i = void 0, n || t.onContinue == null || t.onContinue();
  }), E = () => {
    if (n)
      return;
    let S;
    try {
      S = t.fn();
    } catch (P) {
      S = Promise.reject(P);
    }
    Promise.resolve(S).then(p).catch((P) => {
      var w, O;
      if (n)
        return;
      const b = (w = t.retry) != null ? w : 3, x = (O = t.retryDelay) != null ? O : lS, g = typeof x == "function" ? x(r, P) : x, l = b === !0 || typeof b == "number" && r < b || typeof b == "function" && b(r, P);
      if (e || !l) {
        m(P);
        return;
      }
      r++, t.onFail == null || t.onFail(r, P), ld(g).then(() => {
        if (d())
          return v();
      }).then(() => {
        e ? m(P) : E();
      });
    });
  };
  return qo(t.networkMode) ? E() : v().then(E), {
    promise: o,
    cancel: u,
    continue: () => (i == null ? void 0 : i()) ? o : Promise.resolve(),
    cancelRetry: c,
    continueRetry: f
  };
}
const Qc = console;
function fS() {
  let t = [], e = 0, r = (f) => {
    f();
  }, n = (f) => {
    f();
  };
  const i = (f) => {
    let d;
    e++;
    try {
      d = f();
    } finally {
      e--, e || o();
    }
    return d;
  }, s = (f) => {
    e ? t.push(f) : uf(() => {
      r(f);
    });
  }, a = (f) => (...d) => {
    s(() => {
      f(...d);
    });
  }, o = () => {
    const f = t;
    t = [], f.length && uf(() => {
      n(() => {
        f.forEach((d) => {
          r(d);
        });
      });
    });
  };
  return {
    batch: i,
    batchCalls: a,
    schedule: s,
    setNotifyFunction: (f) => {
      r = f;
    },
    setBatchNotifyFunction: (f) => {
      n = f;
    }
  };
}
const _t = fS();
class dd {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), ec(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (ns ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class hS extends dd {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || Qc, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || dS(this.options), this.state = this.initialState, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this);
  }
  setData(e, r) {
    const n = nc(this.state.data, e, this.options);
    return this.dispatch({
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(e, r) {
    this.dispatch({
      type: "setState",
      state: e,
      setStateOptions: r
    });
  }
  cancel(e) {
    var r;
    const n = this.promise;
    return (r = this.retryer) == null || r.cancel(e), n ? n.then(dr).catch(dr) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({
      silent: !0
    });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((e) => e.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((e) => e.getCurrentResult().isStale);
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !ad(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var e;
    const r = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    r && r.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  onOnline() {
    var e;
    const r = this.observers.find((n) => n.shouldFetchOnReconnect());
    r && r.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((r) => r !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: e
    }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }
  fetch(e, r) {
    var n, i;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && r != null && r.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var s;
        return (s = this.retryer) == null || s.continueRetry(), this.promise;
      }
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const m = this.observers.find((v) => v.options.queryFn);
      m && this.setOptions(m.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
    const a = aS(), o = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, u = (m) => {
      Object.defineProperty(m, "signal", {
        enumerable: !0,
        get: () => {
          if (a)
            return this.abortSignalConsumed = !0, a.signal;
        }
      });
    };
    u(o);
    const c = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), f = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: c
    };
    if (u(f), (n = this.options.behavior) == null || n.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = f.fetchOptions) == null ? void 0 : i.meta)) {
      var d;
      this.dispatch({
        type: "fetch",
        meta: (d = f.fetchOptions) == null ? void 0 : d.meta
      });
    }
    const p = (m) => {
      if (eo(m) && m.silent || this.dispatch({
        type: "error",
        error: m
      }), !eo(m)) {
        var v, E, S, P;
        (v = (E = this.cache.config).onError) == null || v.call(E, m, this), (S = (P = this.cache.config).onSettled) == null || S.call(P, this.state.data, m, this), process.env.NODE_ENV !== "production" && this.logger.error(m);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = hd({
      fn: f.fetchFn,
      abort: a == null ? void 0 : a.abort.bind(a),
      onSuccess: (m) => {
        var v, E, S, P;
        if (typeof m > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), p(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(m), (v = (E = this.cache.config).onSuccess) == null || v.call(E, m, this), (S = (P = this.cache.config).onSettled) == null || S.call(P, m, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: p,
      onFail: (m, v) => {
        this.dispatch({
          type: "failed",
          failureCount: m,
          error: v
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: f.options.retry,
      retryDelay: f.options.retryDelay,
      networkMode: f.options.networkMode
    }), this.promise = this.retryer.promise, this.promise;
  }
  dispatch(e) {
    const r = (n) => {
      var i, s;
      switch (e.type) {
        case "failed":
          return {
            ...n,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...n,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...n,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...n,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (i = e.meta) != null ? i : null,
            fetchStatus: qo(this.options.networkMode) ? "fetching" : "paused",
            ...!n.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...n,
            data: e.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: (s = e.dataUpdatedAt) != null ? s : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const a = e.error;
          return eo(a) && a.revert && this.revertState ? {
            ...this.revertState,
            fetchStatus: "idle"
          } : {
            ...n,
            error: a,
            errorUpdateCount: n.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: n.fetchFailureCount + 1,
            fetchFailureReason: a,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...n,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...n,
            ...e.state
          };
      }
    };
    this.state = r(this.state), _t.batch(() => {
      this.observers.forEach((n) => {
        n.onQueryUpdate(e);
      }), this.cache.notify({
        query: this,
        type: "updated",
        action: e
      });
    });
  }
}
function dS(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, r = typeof e < "u", n = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "loading",
    fetchStatus: "idle"
  };
}
class pS extends Os {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, r, n) {
    var i;
    const s = r.queryKey, a = (i = r.queryHash) != null ? i : Gc(s, r);
    let o = this.get(a);
    return o || (o = new hS({
      cache: this,
      logger: e.getLogger(),
      queryKey: s,
      queryHash: a,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(e) {
    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const r = this.queriesMap[e.queryHash];
    r && (e.destroy(), this.queries = this.queries.filter((n) => n !== e), r === e && delete this.queriesMap[e.queryHash], this.notify({
      type: "removed",
      query: e
    }));
  }
  clear() {
    _t.batch(() => {
      this.queries.forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.queriesMap[e];
  }
  getAll() {
    return this.queries;
  }
  find(e, r) {
    const [n] = sn(e, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((i) => sf(n, i));
  }
  findAll(e, r) {
    const [n] = sn(e, r);
    return Object.keys(n).length > 0 ? this.queries.filter((i) => sf(n, i)) : this.queries;
  }
  notify(e) {
    _t.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(e);
      });
    });
  }
  onFocus() {
    _t.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    _t.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class gS extends dd {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || Qc, this.observers = [], this.state = e.state || yS(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(e) {
    this.dispatch({
      type: "setState",
      state: e
    });
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers = this.observers.filter((r) => r !== e), this.scheduleGc(), this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var e, r;
    return (e = (r = this.retryer) == null ? void 0 : r.continue()) != null ? e : this.execute();
  }
  async execute() {
    const e = () => {
      var l;
      return this.retryer = hd({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (y, C) => {
          this.dispatch({
            type: "failed",
            failureCount: y,
            error: C
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: (l = this.options.retry) != null ? l : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, r = this.state.status === "loading";
    try {
      var n, i, s, a, o, u, c, f;
      if (!r) {
        var d, p, m, v;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((d = (p = this.mutationCache.config).onMutate) == null ? void 0 : d.call(p, this.state.variables, this));
        const y = await ((m = (v = this.options).onMutate) == null ? void 0 : m.call(v, this.state.variables));
        y !== this.state.context && this.dispatch({
          type: "loading",
          context: y,
          variables: this.state.variables
        });
      }
      const l = await e();
      return await ((n = (i = this.mutationCache.config).onSuccess) == null ? void 0 : n.call(i, l, this.state.variables, this.state.context, this)), await ((s = (a = this.options).onSuccess) == null ? void 0 : s.call(a, l, this.state.variables, this.state.context)), await ((o = (u = this.mutationCache.config).onSettled) == null ? void 0 : o.call(u, l, null, this.state.variables, this.state.context, this)), await ((c = (f = this.options).onSettled) == null ? void 0 : c.call(f, l, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: l
      }), l;
    } catch (l) {
      try {
        var E, S, P, w, O, b, x, g;
        throw await ((E = (S = this.mutationCache.config).onError) == null ? void 0 : E.call(S, l, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(l), await ((P = (w = this.options).onError) == null ? void 0 : P.call(w, l, this.state.variables, this.state.context)), await ((O = (b = this.mutationCache.config).onSettled) == null ? void 0 : O.call(b, void 0, l, this.state.variables, this.state.context, this)), await ((x = (g = this.options).onSettled) == null ? void 0 : x.call(g, void 0, l, this.state.variables, this.state.context)), l;
      } finally {
        this.dispatch({
          type: "error",
          error: l
        });
      }
    }
  }
  dispatch(e) {
    const r = (n) => {
      switch (e.type) {
        case "failed":
          return {
            ...n,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...n,
            isPaused: !0
          };
        case "continue":
          return {
            ...n,
            isPaused: !1
          };
        case "loading":
          return {
            ...n,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !qo(this.options.networkMode),
            status: "loading",
            variables: e.variables
          };
        case "success":
          return {
            ...n,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...n,
            data: void 0,
            error: e.error,
            failureCount: n.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error"
          };
        case "setState":
          return {
            ...n,
            ...e.state
          };
      }
    };
    this.state = r(this.state), _t.batch(() => {
      this.observers.forEach((n) => {
        n.onMutationUpdate(e);
      }), this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }
}
function yS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
class mS extends Os {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, r, n) {
    const i = new gS({
      mutationCache: this,
      logger: e.getLogger(),
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(r),
      state: n,
      defaultOptions: r.mutationKey ? e.getMutationDefaults(r.mutationKey) : void 0
    });
    return this.add(i), i;
  }
  add(e) {
    this.mutations.push(e), this.notify({
      type: "added",
      mutation: e
    });
  }
  remove(e) {
    this.mutations = this.mutations.filter((r) => r !== e), this.notify({
      type: "removed",
      mutation: e
    });
  }
  clear() {
    _t.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((r) => of(e, r));
  }
  findAll(e) {
    return this.mutations.filter((r) => of(e, r));
  }
  notify(e) {
    _t.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(e);
      });
    });
  }
  resumePausedMutations() {
    var e;
    return this.resuming = ((e = this.resuming) != null ? e : Promise.resolve()).then(() => {
      const r = this.mutations.filter((n) => n.state.isPaused);
      return _t.batch(() => r.reduce((n, i) => n.then(() => i.continue().catch(dr)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function vS() {
  return {
    onFetch: (t) => {
      t.fetchFn = () => {
        var e, r, n, i, s, a;
        const o = (e = t.fetchOptions) == null || (r = e.meta) == null ? void 0 : r.refetchPage, u = (n = t.fetchOptions) == null || (i = n.meta) == null ? void 0 : i.fetchMore, c = u == null ? void 0 : u.pageParam, f = (u == null ? void 0 : u.direction) === "forward", d = (u == null ? void 0 : u.direction) === "backward", p = ((s = t.state.data) == null ? void 0 : s.pages) || [], m = ((a = t.state.data) == null ? void 0 : a.pageParams) || [];
        let v = m, E = !1;
        const S = (g) => {
          Object.defineProperty(g, "signal", {
            enumerable: !0,
            get: () => {
              var l;
              if ((l = t.signal) != null && l.aborted)
                E = !0;
              else {
                var y;
                (y = t.signal) == null || y.addEventListener("abort", () => {
                  E = !0;
                });
              }
              return t.signal;
            }
          });
        }, P = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")), w = (g, l, y, C) => (v = C ? [l, ...v] : [...v, l], C ? [y, ...g] : [...g, y]), O = (g, l, y, C) => {
          if (E)
            return Promise.reject("Cancelled");
          if (typeof y > "u" && !l && g.length)
            return Promise.resolve(g);
          const T = {
            queryKey: t.queryKey,
            pageParam: y,
            meta: t.options.meta
          };
          S(T);
          const U = P(T);
          return Promise.resolve(U).then((G) => w(g, y, G, C));
        };
        let b;
        if (!p.length)
          b = O([]);
        else if (f) {
          const g = typeof c < "u", l = g ? c : ff(t.options, p);
          b = O(p, g, l);
        } else if (d) {
          const g = typeof c < "u", l = g ? c : bS(t.options, p);
          b = O(p, g, l, !0);
        } else {
          v = [];
          const g = typeof t.options.getNextPageParam > "u";
          b = (o && p[0] ? o(p[0], 0, p) : !0) ? O([], g, m[0]) : Promise.resolve(w([], m[0], p[0]));
          for (let y = 1; y < p.length; y++)
            b = b.then((C) => {
              if (o && p[y] ? o(p[y], y, p) : !0) {
                const U = g ? m[y] : ff(t.options, C);
                return O(C, g, U);
              }
              return Promise.resolve(w(C, m[y], p[y]));
            });
        }
        return b.then((g) => ({
          pages: g,
          pageParams: v
        }));
      };
    }
  };
}
function ff(t, e) {
  return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e);
}
function bS(t, e) {
  return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e);
}
class wS {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new pS(), this.mutationCache = e.mutationCache || new mS(), this.logger = e.logger || Qc, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = bo.subscribe(() => {
      bo.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = is.subscribe(() => {
      is.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, r;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (r = this.unsubscribeOnline) == null || r.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, r) {
    const [n] = sn(e, r);
    return n.fetchStatus = "fetching", this.queryCache.findAll(n).length;
  }
  isMutating(e) {
    return this.mutationCache.findAll({
      ...e,
      fetching: !0
    }).length;
  }
  getQueryData(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e, r, n) {
    const i = Mi(e, r, n), s = this.getQueryData(i.queryKey);
    return s ? Promise.resolve(s) : this.fetchQuery(i);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({
      queryKey: r,
      state: n
    }) => {
      const i = n.data;
      return [r, i];
    });
  }
  setQueryData(e, r, n) {
    const i = this.queryCache.find(e), s = i == null ? void 0 : i.state.data, a = oS(r, s);
    if (typeof a > "u")
      return;
    const o = Mi(e), u = this.defaultQueryOptions(o);
    return this.queryCache.build(this, u).setData(a, {
      ...n,
      manual: !0
    });
  }
  setQueriesData(e, r, n) {
    return _t.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: i
    }) => [i, this.setQueryData(i, r, n)]));
  }
  getQueryState(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state;
  }
  removeQueries(e, r) {
    const [n] = sn(e, r), i = this.queryCache;
    _t.batch(() => {
      i.findAll(n).forEach((s) => {
        i.remove(s);
      });
    });
  }
  resetQueries(e, r, n) {
    const [i, s] = sn(e, r, n), a = this.queryCache, o = {
      type: "active",
      ...i
    };
    return _t.batch(() => (a.findAll(i).forEach((u) => {
      u.reset();
    }), this.refetchQueries(o, s)));
  }
  cancelQueries(e, r, n) {
    const [i, s = {}] = sn(e, r, n);
    typeof s.revert > "u" && (s.revert = !0);
    const a = _t.batch(() => this.queryCache.findAll(i).map((o) => o.cancel(s)));
    return Promise.all(a).then(dr).catch(dr);
  }
  invalidateQueries(e, r, n) {
    const [i, s] = sn(e, r, n);
    return _t.batch(() => {
      var a, o;
      if (this.queryCache.findAll(i).forEach((c) => {
        c.invalidate();
      }), i.refetchType === "none")
        return Promise.resolve();
      const u = {
        ...i,
        type: (a = (o = i.refetchType) != null ? o : i.type) != null ? a : "active"
      };
      return this.refetchQueries(u, s);
    });
  }
  refetchQueries(e, r, n) {
    const [i, s] = sn(e, r, n), a = _t.batch(() => this.queryCache.findAll(i).filter((u) => !u.isDisabled()).map((u) => {
      var c;
      return u.fetch(void 0, {
        ...s,
        cancelRefetch: (c = s == null ? void 0 : s.cancelRefetch) != null ? c : !0,
        meta: {
          refetchPage: i.refetchPage
        }
      });
    }));
    let o = Promise.all(a).then(dr);
    return s != null && s.throwOnError || (o = o.catch(dr)), o;
  }
  fetchQuery(e, r, n) {
    const i = Mi(e, r, n), s = this.defaultQueryOptions(i);
    typeof s.retry > "u" && (s.retry = !1);
    const a = this.queryCache.build(this, s);
    return a.isStaleByTime(s.staleTime) ? a.fetch(s) : Promise.resolve(a.state.data);
  }
  prefetchQuery(e, r, n) {
    return this.fetchQuery(e, r, n).then(dr).catch(dr);
  }
  fetchInfiniteQuery(e, r, n) {
    const i = Mi(e, r, n);
    return i.behavior = vS(), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(e, r, n) {
    return this.fetchInfiniteQuery(e, r, n).then(dr).catch(dr);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(e) {
    this.defaultOptions = e;
  }
  setQueryDefaults(e, r) {
    const n = this.queryDefaults.find((i) => Cn(e) === Cn(i.queryKey));
    n ? n.defaultOptions = r : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: r
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const r = this.queryDefaults.find((n) => Qn(e, n.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((i) => Qn(e, i.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(e, r) {
    const n = this.mutationDefaults.find((i) => Cn(e) === Cn(i.mutationKey));
    n ? n.defaultOptions = r : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: r
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const r = this.mutationDefaults.find((n) => Qn(e, n.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((i) => Qn(e, i.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), r == null ? void 0 : r.defaultOptions;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const r = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(e == null ? void 0 : e.queryKey),
      ...e,
      _defaulted: !0
    };
    return !r.queryHash && r.queryKey && (r.queryHash = Gc(r.queryKey, r)), typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"), typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense), r;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(e == null ? void 0 : e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class _S extends Os {
  constructor(e, r) {
    super(), this.client = e, this.options = r, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), hf(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ic(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return ic(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, i = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(e), process.env.NODE_ENV !== "production" && typeof (e == null ? void 0 : e.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), tc(n, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
    const s = this.hasListeners();
    s && df(this.currentQuery, i, this.options, n) && this.executeFetch(), this.updateResult(r), s && (this.currentQuery !== i || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && this.updateStaleTimeout();
    const a = this.computeRefetchInterval();
    s && (this.currentQuery !== i || this.options.enabled !== n.enabled || a !== this.currentRefetchInterval) && this.updateRefetchInterval(a);
  }
  getOptimisticResult(e) {
    const r = this.client.getQueryCache().build(this.client, e), n = this.createResult(r, e);
    return SS(this, n, e) && (this.currentResult = n, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), n;
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(e) {
    const r = {};
    return Object.keys(e).forEach((n) => {
      Object.defineProperty(r, n, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackedProps.add(n), e[n])
      });
    }), r;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage: e,
    ...r
  } = {}) {
    return this.fetch({
      ...r,
      meta: {
        refetchPage: e
      }
    });
  }
  fetchOptimistic(e) {
    const r = this.client.defaultQueryOptions(e), n = this.client.getQueryCache().build(this.client, r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    var r;
    return this.executeFetch({
      ...e,
      cancelRefetch: (r = e.cancelRefetch) != null ? r : !0
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(e) {
    this.updateQuery();
    let r = this.currentQuery.fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(dr)), r;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), ns || this.currentResult.isStale || !ec(this.options.staleTime))
      return;
    const r = ad(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, r);
  }
  computeRefetchInterval() {
    var e;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null ? e : !1;
  }
  updateRefetchInterval(e) {
    this.clearRefetchInterval(), this.currentRefetchInterval = e, !(ns || this.options.enabled === !1 || !ec(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || bo.isFocused()) && this.executeFetch();
    }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }
  clearRefetchInterval() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }
  createResult(e, r) {
    const n = this.currentQuery, i = this.options, s = this.currentResult, a = this.currentResultState, o = this.currentResultOptions, u = e !== n, c = u ? e.state : this.currentQueryInitialState, f = u ? this.currentResult : this.previousQueryResult, {
      state: d
    } = e;
    let {
      dataUpdatedAt: p,
      error: m,
      errorUpdatedAt: v,
      fetchStatus: E,
      status: S
    } = d, P = !1, w = !1, O;
    if (r._optimisticResults) {
      const y = this.hasListeners(), C = !y && hf(e, r), T = y && df(e, n, r, i);
      (C || T) && (E = qo(e.options.networkMode) ? "fetching" : "paused", p || (S = "loading")), r._optimisticResults === "isRestoring" && (E = "idle");
    }
    if (r.keepPreviousData && !d.dataUpdatedAt && f != null && f.isSuccess && S !== "error")
      O = f.data, p = f.dataUpdatedAt, S = f.status, P = !0;
    else if (r.select && typeof d.data < "u")
      if (s && d.data === (a == null ? void 0 : a.data) && r.select === this.selectFn)
        O = this.selectResult;
      else
        try {
          this.selectFn = r.select, O = r.select(d.data), O = nc(s == null ? void 0 : s.data, O, r), this.selectResult = O, this.selectError = null;
        } catch (y) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(y), this.selectError = y;
        }
    else
      O = d.data;
    if (typeof r.placeholderData < "u" && typeof O > "u" && S === "loading") {
      let y;
      if (s != null && s.isPlaceholderData && r.placeholderData === (o == null ? void 0 : o.placeholderData))
        y = s.data;
      else if (y = typeof r.placeholderData == "function" ? r.placeholderData() : r.placeholderData, r.select && typeof y < "u")
        try {
          y = r.select(y), this.selectError = null;
        } catch (C) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(C), this.selectError = C;
        }
      typeof y < "u" && (S = "success", O = nc(s == null ? void 0 : s.data, y, r), w = !0);
    }
    this.selectError && (m = this.selectError, O = this.selectResult, v = Date.now(), S = "error");
    const b = E === "fetching", x = S === "loading", g = S === "error";
    return {
      status: S,
      fetchStatus: E,
      isLoading: x,
      isSuccess: S === "success",
      isError: g,
      isInitialLoading: x && b,
      data: O,
      dataUpdatedAt: p,
      error: m,
      errorUpdatedAt: v,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > c.dataUpdateCount || d.errorUpdateCount > c.errorUpdateCount,
      isFetching: b,
      isRefetching: b && !x,
      isLoadingError: g && d.dataUpdatedAt === 0,
      isPaused: E === "paused",
      isPlaceholderData: w,
      isPreviousData: P,
      isRefetchError: g && d.dataUpdatedAt !== 0,
      isStale: Zc(e, r),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(e) {
    const r = this.currentResult, n = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, tc(n, r))
      return;
    this.currentResult = n;
    const i = {
      cache: !0
    }, s = () => {
      if (!r)
        return !0;
      const {
        notifyOnChangeProps: a
      } = this.options, o = typeof a == "function" ? a() : a;
      if (o === "all" || !o && !this.trackedProps.size)
        return !0;
      const u = new Set(o ?? this.trackedProps);
      return this.options.useErrorBoundary && u.add("error"), Object.keys(this.currentResult).some((c) => {
        const f = c;
        return this.currentResult[f] !== r[f] && u.has(f);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && s() && (i.listeners = !0), this.notify({
      ...i,
      ...e
    });
  }
  updateQuery() {
    const e = this.client.getQueryCache().build(this.client, this.options);
    if (e === this.currentQuery)
      return;
    const r = this.currentQuery;
    this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
  }
  onQueryUpdate(e) {
    const r = {};
    e.type === "success" ? r.onSuccess = !e.manual : e.type === "error" && !eo(e.error) && (r.onError = !0), this.updateResult(r), this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    _t.batch(() => {
      if (e.onSuccess) {
        var r, n, i, s;
        (r = (n = this.options).onSuccess) == null || r.call(n, this.currentResult.data), (i = (s = this.options).onSettled) == null || i.call(s, this.currentResult.data, null);
      } else if (e.onError) {
        var a, o, u, c;
        (a = (o = this.options).onError) == null || a.call(o, this.currentResult.error), (u = (c = this.options).onSettled) == null || u.call(c, void 0, this.currentResult.error);
      }
      e.listeners && this.listeners.forEach(({
        listener: f
      }) => {
        f(this.currentResult);
      }), e.cache && this.client.getQueryCache().notify({
        query: this.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
}
function ES(t, e) {
  return e.enabled !== !1 && !t.state.dataUpdatedAt && !(t.state.status === "error" && e.retryOnMount === !1);
}
function hf(t, e) {
  return ES(t, e) || t.state.dataUpdatedAt > 0 && ic(t, e, e.refetchOnMount);
}
function ic(t, e, r) {
  if (e.enabled !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && Zc(t, e);
  }
  return !1;
}
function df(t, e, r, n) {
  return r.enabled !== !1 && (t !== e || n.enabled === !1) && (!r.suspense || t.state.status !== "error") && Zc(t, r);
}
function Zc(t, e) {
  return t.isStaleByTime(e.staleTime);
}
function SS(t, e, r) {
  return r.keepPreviousData ? !1 : r.placeholderData !== void 0 ? e.isPlaceholderData : !tc(t.getCurrentResult(), e);
}
var xS = Wc();
const OS = xS.useSyncExternalStore, pf = /* @__PURE__ */ Wt.createContext(void 0), pd = /* @__PURE__ */ Wt.createContext(!1);
function gd(t, e) {
  return t || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = pf), window.ReactQueryClientContext) : pf);
}
const yd = ({
  context: t
} = {}) => {
  const e = Wt.useContext(gd(t, Wt.useContext(pd)));
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, DS = ({
  client: t,
  children: e,
  context: r,
  contextSharing: n = !1
}) => {
  Wt.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [t]), process.env.NODE_ENV !== "production" && n && t.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const i = gd(r, n);
  return /* @__PURE__ */ Wt.createElement(pd.Provider, {
    value: !r && n
  }, /* @__PURE__ */ Wt.createElement(i.Provider, {
    value: t
  }, e));
}, md = /* @__PURE__ */ Wt.createContext(!1), IS = () => Wt.useContext(md);
md.Provider;
function CS() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
const RS = /* @__PURE__ */ Wt.createContext(CS()), TS = () => Wt.useContext(RS);
function AS(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
const PS = (t, e) => {
  (t.suspense || t.useErrorBoundary) && (e.isReset() || (t.retryOnMount = !1));
}, NS = (t) => {
  Wt.useEffect(() => {
    t.clearReset();
  }, [t]);
}, LS = ({
  result: t,
  errorResetBoundary: e,
  useErrorBoundary: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && AS(r, [t.error, n]), FS = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, MS = (t, e) => t.isLoading && t.isFetching && !e, US = (t, e, r) => (t == null ? void 0 : t.suspense) && MS(e, r), jS = (t, e, r) => e.fetchOptimistic(t).then(({
  data: n
}) => {
  t.onSuccess == null || t.onSuccess(n), t.onSettled == null || t.onSettled(n, null);
}).catch((n) => {
  r.clearReset(), t.onError == null || t.onError(n), t.onSettled == null || t.onSettled(void 0, n);
});
function $S(t, e) {
  const r = yd({
    context: t.context
  }), n = IS(), i = TS(), s = r.defaultQueryOptions(t);
  s._optimisticResults = n ? "isRestoring" : "optimistic", s.onError && (s.onError = _t.batchCalls(s.onError)), s.onSuccess && (s.onSuccess = _t.batchCalls(s.onSuccess)), s.onSettled && (s.onSettled = _t.batchCalls(s.onSettled)), FS(s), PS(s, i), NS(i);
  const [a] = Wt.useState(() => new e(r, s)), o = a.getOptimisticResult(s);
  if (OS(Wt.useCallback((u) => {
    const c = n ? () => {
    } : a.subscribe(_t.batchCalls(u));
    return a.updateResult(), c;
  }, [a, n]), () => a.getCurrentResult(), () => a.getCurrentResult()), Wt.useEffect(() => {
    a.setOptions(s, {
      listeners: !1
    });
  }, [s, a]), US(s, o, n))
    throw jS(s, a, i);
  if (LS({
    result: o,
    errorResetBoundary: i,
    useErrorBoundary: s.useErrorBoundary,
    query: a.getCurrentQuery()
  }))
    throw o.error;
  return s.notifyOnChangeProps ? o : a.trackResult(o);
}
function kS(t, e, r) {
  const n = Mi(t, e, r);
  return $S(n, _S);
}
function Yc() {
  const [t, e] = ji(void 0), [r, n] = ji(void 0), [i, s] = ji(!1);
  return { data: t, error: r, loading: i, setData: e, setError: n, setLoading: s };
}
async function vd(t, e) {
  const n = await (await tt()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function Ds({ queryKey: t, wcParams: e, enabled: r, queryOptions: n }) {
  return kS(
    t,
    async () => vd(e, t),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function Is(t) {
  const { data: e, error: r, loading: n, setData: i, setError: s, setLoading: a } = Yc();
  async function o(u) {
    try {
      a(!0), s(void 0);
      const c = await vd(t ?? u);
      return i(c), c;
    } catch (c) {
      throw s(c), c;
    } finally {
      a(!1);
    }
  }
  return { data: e, error: r, loading: n, request: o };
}
const sc = (t, e = !0, r = 4, n = !0) => t ? t.length < r ? t : n ? `(...${t.slice(-r)})` : t.length < r * 2 ? t : `${t.slice(
  0,
  r + (e ? 5 : 0)
)}...${t.slice(t.length - r, t.length)}` : "", dD = () => {
  const t = Dr(), [e, r, n] = Qr((c) => [c.account, c.setAccount, c.onDisconnect]), { refetch: i, data: s, error: a, isLoading: o } = Ds({
    queryKey: ["useAccount", t == null ? void 0 : t.topic],
    enabled: !!t,
    wcParams: {
      topic: t == null ? void 0 : t.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    }
  });
  xs(({ params: c, topic: f }) => {
    if (c.event.name === "accountSelected" && t && t.topic === f) {
      const p = c.event.address ?? c.event.data.address, m = c.chainId.split(":")[0], v = c.chainId.split(":")[1];
      r({
        network: m,
        chainId: v,
        address: p,
        shortenedAddress: sc(p)
      });
    }
  }), od(({ params: c, topic: f }) => {
    const d = c.event.address ?? c.event.data.address, p = c.chainId.split(":")[0], m = c.chainId.split(":")[1];
    r({
      network: p,
      chainId: m,
      address: d,
      shortenedAddress: sc(d)
    });
  }), sd(({ params: c, topic: f }) => {
    n();
  }), At(() => {
    t && !o && i();
  }, [t == null ? void 0 : t.topic]), At(() => {
    if (s) {
      const c = s, f = c == null ? void 0 : c.account;
      f && r(f);
    }
  }, [s]);
  const u = a ? a.message : s && s.error;
  return {
    account: e,
    error: u,
    loading: o
  };
}, pD = ({ address: t, multisig: e }) => {
  const r = Dr(), [n] = Qr((d) => [d.account]), { refetch: i, data: s, error: a, isLoading: o } = Ds({
    queryKey: ["useBalance", t, (n == null ? void 0 : n.address) ?? "", e, r == null ? void 0 : r.topic],
    enabled: !!r && !!n && (e ? !!t : !0),
    wcParams: {
      topic: r == null ? void 0 : r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0,
          address: t
        }
      }
    }
  });
  xs(({ params: d, topic: p }) => {
    const m = d.event.name, v = d.event.address ?? d.event.data.address;
    (m === "selectedAccountSynced" && !e || m === "sharedAccountSynced" && e && v === t) && i();
  }), At(() => {
    r && !o && i();
  }, [r == null ? void 0 : r.topic]);
  const u = a ? a.message : s && s.error, c = s;
  return { balances: c == null ? void 0 : c.balances, error: u, loading: o };
};
function gD() {
  const { data: t, error: e, loading: r, setData: n, setError: i, setLoading: s } = Yc(), [a] = Qr((u) => [u.setAccount]);
  async function o() {
    try {
      s(!0), i(void 0);
      const c = await (await tt()).connect({
        requiredNamespaces: {
          aleo: {
            methods: Vc,
            chains: jo,
            events: Kc
          }
        }
      });
      n(c);
      const f = c.namespaces.aleo.accounts[0].split(":");
      return a({
        network: f[0],
        chainId: f[1],
        address: f[2],
        shortenedAddress: sc(f[0])
      }), ci.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), c;
    } catch (u) {
      throw i(u), u;
    } finally {
      s(!1);
    }
  }
  return { data: t, error: e, loading: r, connect: o };
}
const yD = () => {
  const t = Dr(), { request: e, data: r, error: n, loading: i } = Is({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), s = n ? n.message : r && r.error, a = r;
  return { createSharedState: () => {
    t && !i && e();
  }, data: a == null ? void 0 : a.data, loading: i, error: s };
};
var oc = { exports: {} }, ya, gf;
function qS() {
  if (gf)
    return ya;
  gf = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  ya = function(f, d) {
    d = d || {};
    var p = typeof f;
    if (p === "string" && f.length > 0)
      return a(f);
    if (p === "number" && isFinite(f))
      return d.long ? u(f) : o(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function a(f) {
    if (f = String(f), !(f.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (d) {
        var p = parseFloat(d[1]), m = (d[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return p * s;
          case "weeks":
          case "week":
          case "w":
            return p * i;
          case "days":
          case "day":
          case "d":
            return p * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return p * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return p * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return p * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return p;
          default:
            return;
        }
      }
    }
  }
  function o(f) {
    var d = Math.abs(f);
    return d >= n ? Math.round(f / n) + "d" : d >= r ? Math.round(f / r) + "h" : d >= e ? Math.round(f / e) + "m" : d >= t ? Math.round(f / t) + "s" : f + "ms";
  }
  function u(f) {
    var d = Math.abs(f);
    return d >= n ? c(f, d, n, "day") : d >= r ? c(f, d, r, "hour") : d >= e ? c(f, d, e, "minute") : d >= t ? c(f, d, t, "second") : f + " ms";
  }
  function c(f, d, p, m) {
    var v = d >= p * 1.5;
    return Math.round(f / p) + " " + m + (v ? "s" : "");
  }
  return ya;
}
function BS(t) {
  r.debug = r, r.default = r, r.coerce = u, r.disable = s, r.enable = i, r.enabled = a, r.humanize = qS(), r.destroy = c, Object.keys(t).forEach((f) => {
    r[f] = t[f];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(f) {
    let d = 0;
    for (let p = 0; p < f.length; p++)
      d = (d << 5) - d + f.charCodeAt(p), d |= 0;
    return r.colors[Math.abs(d) % r.colors.length];
  }
  r.selectColor = e;
  function r(f) {
    let d, p = null, m, v;
    function E(...S) {
      if (!E.enabled)
        return;
      const P = E, w = Number(/* @__PURE__ */ new Date()), O = w - (d || w);
      P.diff = O, P.prev = d, P.curr = w, d = w, S[0] = r.coerce(S[0]), typeof S[0] != "string" && S.unshift("%O");
      let b = 0;
      S[0] = S[0].replace(/%([a-zA-Z%])/g, (g, l) => {
        if (g === "%%")
          return "%";
        b++;
        const y = r.formatters[l];
        if (typeof y == "function") {
          const C = S[b];
          g = y.call(P, C), S.splice(b, 1), b--;
        }
        return g;
      }), r.formatArgs.call(P, S), (P.log || r.log).apply(P, S);
    }
    return E.namespace = f, E.useColors = r.useColors(), E.color = r.selectColor(f), E.extend = n, E.destroy = r.destroy, Object.defineProperty(E, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (m !== r.namespaces && (m = r.namespaces, v = r.enabled(f)), v),
      set: (S) => {
        p = S;
      }
    }), typeof r.init == "function" && r.init(E), E;
  }
  function n(f, d) {
    const p = r(this.namespace + (typeof d > "u" ? ":" : d) + f);
    return p.log = this.log, p;
  }
  function i(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let d;
    const p = (typeof f == "string" ? f : "").split(/[\s,]+/), m = p.length;
    for (d = 0; d < m; d++)
      p[d] && (f = p[d].replace(/\*/g, ".*?"), f[0] === "-" ? r.skips.push(new RegExp("^" + f.slice(1) + "$")) : r.names.push(new RegExp("^" + f + "$")));
  }
  function s() {
    const f = [
      ...r.names.map(o),
      ...r.skips.map(o).map((d) => "-" + d)
    ].join(",");
    return r.enable(""), f;
  }
  function a(f) {
    if (f[f.length - 1] === "*")
      return !0;
    let d, p;
    for (d = 0, p = r.skips.length; d < p; d++)
      if (r.skips[d].test(f))
        return !1;
    for (d = 0, p = r.names.length; d < p; d++)
      if (r.names[d].test(f))
        return !0;
    return !1;
  }
  function o(f) {
    return f.toString().substring(2, f.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function u(f) {
    return f instanceof Error ? f.stack || f.message : f;
  }
  function c() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var zS = BS;
(function(t, e) {
  e.formatArgs = n, e.save = i, e.load = s, e.useColors = r, e.storage = a(), e.destroy = (() => {
    let u = !1;
    return () => {
      u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(u) {
    if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const c = "color: " + this.color;
    u.splice(1, 0, c, "color: inherit");
    let f = 0, d = 0;
    u[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (f++, p === "%c" && (d = f));
    }), u.splice(d, 0, c);
  }
  e.log = console.debug || console.log || (() => {
  });
  function i(u) {
    try {
      u ? e.storage.setItem("debug", u) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function s() {
    let u;
    try {
      u = e.storage.getItem("debug");
    } catch {
    }
    return !u && typeof process < "u" && "env" in process && (u = process.env.DEBUG), u;
  }
  function a() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = zS(e);
  const { formatters: o } = t.exports;
  o.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(oc, oc.exports);
var VS = oc.exports;
const KS = /* @__PURE__ */ Do(VS), Jc = KS("wallet:sdk");
Jc.enabled = !0;
const mD = (t) => {
  Jc("useDecrypt", t);
  const e = Dr(), { request: r, data: n, error: i, loading: s } = Is({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  }), a = i ? i.message : n && n.error, o = n;
  return { decrypt: () => {
    t && e && !s && r();
  }, plaintexts: o == null ? void 0 : o.plaintexts, loading: s, error: a };
};
function vD() {
  const t = Dr(), { error: e, loading: r, setError: n, setLoading: i } = Yc();
  async function s() {
    if (!(!t || r))
      try {
        i(!0), n(void 0), await (await tt()).disconnect({
          topic: t.topic,
          reason: wt("USER_DISCONNECTED")
        }), ci.emit("session_change"), Qr.setState({ account: void 0 });
      } catch (a) {
        throw n(a), a;
      } finally {
        i(!1);
      }
  }
  return { error: e, loading: r, disconnect: s };
}
const bD = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = Dr(), [i] = Qr((v) => [v.account]), { refetch: s, data: a, error: o, isLoading: u } = Ds({
    queryKey: ["useEvent", i == null ? void 0 : i.address, e, r, t, n == null ? void 0 : n.topic],
    enabled: t !== void 0 && !!n && !!i && (r ? !!e : !0),
    wcParams: {
      topic: n == null ? void 0 : n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getEvent",
        params: {
          id: t,
          address: e
        }
      }
    }
  });
  xs(({ params: v, topic: E }) => {
    const S = v.event.name, P = v.event.address ?? v.event.data.address;
    (S === "selectedAccountSynced" && !r || S === "sharedAccountSynced" && r && P === e) && s();
  });
  const c = !!n && !!i;
  At(() => {
    c && !u && s();
  }, [c]);
  const f = () => {
    c && !u && s();
  }, d = o ? o.message : a && a.error, p = a, m = p == null ? void 0 : p.event;
  return { fetchEvent: f, event: m, error: d, loading: u };
}, wD = ({ filter: t, page: e }) => {
  const r = Dr(), [n] = Qr((v) => [v.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { refetch: i, data: s, error: a, isLoading: o } = Ds({
    queryKey: ["useEvents", n == null ? void 0 : n.address, t, e, r == null ? void 0 : r.topic],
    enabled: !!r && !!n,
    wcParams: {
      topic: (r == null ? void 0 : r.topic) ?? "",
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getEvents",
        params: {
          filter: t,
          page: e
        }
      }
    }
  });
  xs(({ id: v, params: E, topic: S }) => {
    E.event.name === "selectedAccountSynced" && i();
  });
  const u = !!r && !!n;
  At(() => {
    u && !o && i();
  }, [u]);
  const c = () => {
    u && !o && i();
  }, f = a ? a.message : s && s.error, d = s, p = d == null ? void 0 : d.events, m = (d == null ? void 0 : d.pageCount) ?? 0;
  return { fetchPage: c, events: p, error: f, loading: o, page: e, pageCount: m };
}, _D = (t) => {
  const e = Dr(), { request: r, data: n, error: i, loading: s } = Is({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  }), a = i ? i.message : n && n.error, o = n;
  return { importSharedState: () => {
    e && !s && r();
  }, data: o == null ? void 0 : o.data, loading: s, error: a };
}, ED = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, SD = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const i = Dr(), [s] = Qr((S) => [
    S.account
  ]), { refetch: a, data: o, error: u, isLoading: c } = Ds({
    queryKey: ["useRecords", s == null ? void 0 : s.address, t, e, r, n, i == null ? void 0 : i.topic],
    enabled: (e ? !!t : !0) && !!i && !!s,
    wcParams: {
      topic: i == null ? void 0 : i.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getRecords",
        params: {
          address: t,
          filter: r,
          page: n
        }
      }
    }
  }), f = !!i && !!s && (e ? !!t : !0);
  xs(({ params: S }) => {
    const P = S.event.name, w = S.event.address ?? S.event.data.address;
    (P === "selectedAccountSynced" && !e || P === "sharedAccountSynced" && e && w === t) && a();
  });
  const d = () => {
    f && !c && a();
  }, p = u ? u.message : o && o.error, m = o, v = m == null ? void 0 : m.records, E = (m == null ? void 0 : m.pageCount) ?? 0;
  return { fetchPage: d, records: v, error: p, loading: c, page: n, pageCount: E };
}, xD = (t) => {
  const e = Dr(), r = t == null ? void 0 : t.inputs.map((f) => typeof f == "string" ? f : f.plaintext), { request: n, data: i, error: s, loading: a } = Is({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestCreateEvent",
      params: {
        ...t,
        inputs: r
      }
    }
  }), o = s ? s.message : i && i.error, u = i;
  return { createEvent: () => {
    t && e && !a && (Jc("useCreateEvent requesting...", t), n());
  }, eventId: u == null ? void 0 : u.eventId, loading: a, error: o };
}, OD = (t, e) => {
  const r = Dr(), { request: n, data: i, error: s, loading: a } = Is({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: Hc.test(e ?? "") ? e : void 0
      }
    }
  }), o = s ? s.message : i && i.error;
  return { requestSignature: () => {
    r && !a && n();
  }, response: i, loading: a, error: o };
}, DD = async () => {
  const t = await tt(), e = await t.getSession();
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    const r = await t.request({
      topic: e.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    });
    return Qr.setState({ account: r.account }), r;
  } catch (r) {
    const n = r.message;
    return console.error("getAccount error", n), { error: n };
  }
}, ID = async ({ address: t }) => {
  const e = await tt(), r = await e.getSession();
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0,
          address: t
        }
      }
    });
  } catch (n) {
    const i = n.message;
    return console.error("getBalance error", i), { error: i };
  }
}, CD = async () => {
  const t = await tt();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Vc,
          chains: jo,
          events: Kc
        }
      }
    });
    return ci.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, RD = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const n = t == null ? void 0 : t.inputs.map((i) => typeof i == "string" ? i : i.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...t,
          inputs: n
        }
      }
    });
  } catch (i) {
    const s = i.message;
    return console.error("createEvent error", s), { error: s };
  }
}, TD = async () => {
  const t = await tt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    return await t.request({
      topic: e.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "createSharedState",
        params: {}
      }
    });
  } catch (r) {
    const n = r.message;
    return console.error("createSharedState error", n), { error: n };
  }
}, AD = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "decrypt",
        params: {
          ciphertexts: t
        }
      }
    });
  } catch (n) {
    return console.error("decrypt error", n.message), { error: n.message };
  }
}, PD = async () => {
  const t = await tt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    return await t.disconnect({
      reason: wt("USER_DISCONNECTED"),
      topic: e.topic
    }), ci.emit("session_change"), Qr.setState({ account: void 0 }), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, ND = async ({
  id: t,
  address: e
}) => {
  const r = await tt(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { event: void 0, error: "no session or connection" };
  const i = async () => await r.request({
    topic: n.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvent",
      params: {
        id: t,
        address: e
      }
    }
  });
  try {
    return await i();
  } catch (s) {
    const a = s.message;
    return console.error("getEvents error", a), { error: a };
  }
}, LD = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const n = async (i = 0) => await e.request({
    topic: r.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: i
      }
    }
  });
  try {
    return await n();
  } catch (i) {
    const s = i.message;
    return console.error("getEvents error", s), { error: s };
  }
}, FD = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "importSharedState",
        params: {
          seed: t
        }
      }
    });
  } catch (n) {
    const i = n.message;
    return console.error("importSharedState error", i), { error: i };
  }
}, MD = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await tt(), i = await (n == null ? void 0 : n.getSession());
  if (!i || !n)
    return { error: "no session or connection" };
  const s = async (a = 0) => await n.request({
    topic: i.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: e,
        page: a
      }
    }
  });
  try {
    return await s();
  } catch (a) {
    const o = a.message;
    return console.error("getRecords error", o), { error: o };
  }
}, UD = async ({
  message: t,
  address: e
}) => {
  const r = await tt(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { error: "no session or connection" };
  try {
    return await r.request({
      topic: n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: Hc.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (i) {
    const s = i.message;
    return console.error("signature error", s), { error: s };
  }
}, jD = 50;
var ac = { exports: {} }, Ai = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yf;
function HS() {
  if (yf)
    return Ai;
  yf = 1;
  var t = dn, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, u, c) {
    var f, d = {}, p = null, m = null;
    c !== void 0 && (p = "" + c), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (f in u)
      n.call(u, f) && !s.hasOwnProperty(f) && (d[f] = u[f]);
    if (o && o.defaultProps)
      for (f in u = o.defaultProps, u)
        d[f] === void 0 && (d[f] = u[f]);
    return { $$typeof: e, type: o, key: p, ref: m, props: d, _owner: i.current };
  }
  return Ai.Fragment = r, Ai.jsx = a, Ai.jsxs = a, Ai;
}
var Pi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mf;
function WS() {
  return mf || (mf = 1, process.env.NODE_ENV !== "production" && function() {
    var t = dn, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, E = "@@iterator";
    function S(D) {
      if (D === null || typeof D != "object")
        return null;
      var j = v && D[v] || D[E];
      return typeof j == "function" ? j : null;
    }
    var P = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(D) {
      {
        for (var j = arguments.length, J = new Array(j > 1 ? j - 1 : 0), ue = 1; ue < j; ue++)
          J[ue - 1] = arguments[ue];
        O("error", D, J);
      }
    }
    function O(D, j, J) {
      {
        var ue = P.ReactDebugCurrentFrame, je = ue.getStackAddendum();
        je !== "" && (j += "%s", J = J.concat([je]));
        var Pe = J.map(function(Le) {
          return String(Le);
        });
        Pe.unshift("Warning: " + j), Function.prototype.apply.call(console[D], console, Pe);
      }
    }
    var b = !1, x = !1, g = !1, l = !1, y = !1, C;
    C = Symbol.for("react.module.reference");
    function T(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === n || D === s || y || D === i || D === c || D === f || l || D === m || b || x || g || typeof D == "object" && D !== null && (D.$$typeof === p || D.$$typeof === d || D.$$typeof === a || D.$$typeof === o || D.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === C || D.getModuleId !== void 0));
    }
    function U(D, j, J) {
      var ue = D.displayName;
      if (ue)
        return ue;
      var je = j.displayName || j.name || "";
      return je !== "" ? J + "(" + je + ")" : J;
    }
    function B(D) {
      return D.displayName || "Context";
    }
    function G(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case o:
            var j = D;
            return B(j) + ".Consumer";
          case a:
            var J = D;
            return B(J._context) + ".Provider";
          case u:
            return U(D, D.render, "ForwardRef");
          case d:
            var ue = D.displayName || null;
            return ue !== null ? ue : G(D.type) || "Memo";
          case p: {
            var je = D, Pe = je._payload, Le = je._init;
            try {
              return G(Le(Pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, L = 0, Q, V, k, z, $, K, fe;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function ae() {
      {
        if (L === 0) {
          Q = console.log, V = console.info, k = console.warn, z = console.error, $ = console.group, K = console.groupCollapsed, fe = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        L++;
      }
    }
    function te() {
      {
        if (L--, L === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, D, {
              value: Q
            }),
            info: R({}, D, {
              value: V
            }),
            warn: R({}, D, {
              value: k
            }),
            error: R({}, D, {
              value: z
            }),
            group: R({}, D, {
              value: $
            }),
            groupCollapsed: R({}, D, {
              value: K
            }),
            groupEnd: R({}, D, {
              value: fe
            })
          });
        }
        L < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = P.ReactCurrentDispatcher, M;
    function F(D, j, J) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (je) {
            var ue = je.stack.trim().match(/\n( *(at )?)/);
            M = ue && ue[1] || "";
          }
        return `
` + M + D;
      }
    }
    var A = !1, h;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      h = new I();
    }
    function Z(D, j) {
      if (!D || A)
        return "";
      {
        var J = h.get(D);
        if (J !== void 0)
          return J;
      }
      var ue;
      A = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Pe;
      Pe = oe.current, oe.current = null, ae();
      try {
        if (j) {
          var Le = function() {
            throw Error();
          };
          if (Object.defineProperty(Le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Le, []);
            } catch (gr) {
              ue = gr;
            }
            Reflect.construct(D, [], Le);
          } else {
            try {
              Le.call();
            } catch (gr) {
              ue = gr;
            }
            D.call(Le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gr) {
            ue = gr;
          }
          D();
        }
      } catch (gr) {
        if (gr && ue && typeof gr.stack == "string") {
          for (var Re = gr.stack.split(`
`), Rt = ue.stack.split(`
`), nt = Re.length - 1, ut = Rt.length - 1; nt >= 1 && ut >= 0 && Re[nt] !== Rt[ut]; )
            ut--;
          for (; nt >= 1 && ut >= 0; nt--, ut--)
            if (Re[nt] !== Rt[ut]) {
              if (nt !== 1 || ut !== 1)
                do
                  if (nt--, ut--, ut < 0 || Re[nt] !== Rt[ut]) {
                    var mt = `
` + Re[nt].replace(" at new ", " at ");
                    return D.displayName && mt.includes("<anonymous>") && (mt = mt.replace("<anonymous>", D.displayName)), typeof D == "function" && h.set(D, mt), mt;
                  }
                while (nt >= 1 && ut >= 0);
              break;
            }
        }
      } finally {
        A = !1, oe.current = Pe, te(), Error.prepareStackTrace = je;
      }
      var Jr = D ? D.displayName || D.name : "", Cs = Jr ? F(Jr) : "";
      return typeof D == "function" && h.set(D, Cs), Cs;
    }
    function X(D, j, J) {
      return Z(D, !1);
    }
    function De(D) {
      var j = D.prototype;
      return !!(j && j.isReactComponent);
    }
    function Ie(D, j, J) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return Z(D, De(D));
      if (typeof D == "string")
        return F(D);
      switch (D) {
        case c:
          return F("Suspense");
        case f:
          return F("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case u:
            return X(D.render);
          case d:
            return Ie(D.type, j, J);
          case p: {
            var ue = D, je = ue._payload, Pe = ue._init;
            try {
              return Ie(Pe(je), j, J);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Fe = {}, Je = P.ReactDebugCurrentFrame;
    function He(D) {
      if (D) {
        var j = D._owner, J = Ie(D.type, D._source, j ? j.type : null);
        Je.setExtraStackFrame(J);
      } else
        Je.setExtraStackFrame(null);
    }
    function Ne(D, j, J, ue, je) {
      {
        var Pe = Function.call.bind(we);
        for (var Le in D)
          if (Pe(D, Le)) {
            var Re = void 0;
            try {
              if (typeof D[Le] != "function") {
                var Rt = Error((ue || "React class") + ": " + J + " type `" + Le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rt.name = "Invariant Violation", Rt;
              }
              Re = D[Le](j, Le, ue, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              Re = nt;
            }
            Re && !(Re instanceof Error) && (He(je), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", J, Le, typeof Re), He(null)), Re instanceof Error && !(Re.message in Fe) && (Fe[Re.message] = !0, He(je), w("Failed %s type: %s", J, Re.message), He(null));
          }
      }
    }
    var Te = Array.isArray;
    function _e(D) {
      return Te(D);
    }
    function Se(D) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, J = j && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return J;
      }
    }
    function Ee(D) {
      try {
        return ge(D), !1;
      } catch {
        return !0;
      }
    }
    function ge(D) {
      return "" + D;
    }
    function pe(D) {
      if (Ee(D))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(D)), ge(D);
    }
    var ce = P.ReactCurrentOwner, xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, he, Ae;
    Ae = {};
    function Me(D) {
      if (we.call(D, "ref")) {
        var j = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function ke(D) {
      if (we.call(D, "key")) {
        var j = Object.getOwnPropertyDescriptor(D, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function qe(D, j) {
      if (typeof D.ref == "string" && ce.current && j && ce.current.stateNode !== j) {
        var J = G(ce.current.type);
        Ae[J] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ce.current.type), D.ref), Ae[J] = !0);
      }
    }
    function Ue(D, j) {
      {
        var J = function() {
          Ce || (Ce = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function nr(D, j) {
      {
        var J = function() {
          he || (he = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var cr = function(D, j, J, ue, je, Pe, Le) {
      var Re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: D,
        key: j,
        ref: J,
        props: Le,
        // Record the component responsible for creating this element.
        _owner: Pe
      };
      return Re._store = {}, Object.defineProperty(Re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(Re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.freeze && (Object.freeze(Re.props), Object.freeze(Re)), Re;
    };
    function Ir(D, j, J, ue, je) {
      {
        var Pe, Le = {}, Re = null, Rt = null;
        J !== void 0 && (pe(J), Re = "" + J), ke(j) && (pe(j.key), Re = "" + j.key), Me(j) && (Rt = j.ref, qe(j, je));
        for (Pe in j)
          we.call(j, Pe) && !xe.hasOwnProperty(Pe) && (Le[Pe] = j[Pe]);
        if (D && D.defaultProps) {
          var nt = D.defaultProps;
          for (Pe in nt)
            Le[Pe] === void 0 && (Le[Pe] = nt[Pe]);
        }
        if (Re || Rt) {
          var ut = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          Re && Ue(Le, ut), Rt && nr(Le, ut);
        }
        return cr(D, Re, Rt, je, ue, ce.current, Le);
      }
    }
    var Ct = P.ReactCurrentOwner, Cr = P.ReactDebugCurrentFrame;
    function ur(D) {
      if (D) {
        var j = D._owner, J = Ie(D.type, D._source, j ? j.type : null);
        Cr.setExtraStackFrame(J);
      } else
        Cr.setExtraStackFrame(null);
    }
    var Yr;
    Yr = !1;
    function Xe(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function Qe() {
      {
        if (Ct.current) {
          var D = G(Ct.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function ot(D) {
      {
        if (D !== void 0) {
          var j = D.fileName.replace(/^.*[\\\/]/, ""), J = D.lineNumber;
          return `

Check your code at ` + j + ":" + J + ".";
        }
        return "";
      }
    }
    var rt = {};
    function at(D) {
      {
        var j = Qe();
        if (!j) {
          var J = typeof D == "string" ? D : D.displayName || D.name;
          J && (j = `

Check the top-level render call using <` + J + ">.");
        }
        return j;
      }
    }
    function Ze(D, j) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var J = at(j);
        if (rt[J])
          return;
        rt[J] = !0;
        var ue = "";
        D && D._owner && D._owner !== Ct.current && (ue = " It was passed a child from " + G(D._owner.type) + "."), ur(D), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, ue), ur(null);
      }
    }
    function ft(D, j) {
      {
        if (typeof D != "object")
          return;
        if (_e(D))
          for (var J = 0; J < D.length; J++) {
            var ue = D[J];
            Xe(ue) && Ze(ue, j);
          }
        else if (Xe(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var je = S(D);
          if (typeof je == "function" && je !== D.entries)
            for (var Pe = je.call(D), Le; !(Le = Pe.next()).done; )
              Xe(Le.value) && Ze(Le.value, j);
        }
      }
    }
    function pt(D) {
      {
        var j = D.type;
        if (j == null || typeof j == "string")
          return;
        var J;
        if (typeof j == "function")
          J = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === d))
          J = j.propTypes;
        else
          return;
        if (J) {
          var ue = G(j);
          Ne(J, D.props, "prop", ue, D);
        } else if (j.PropTypes !== void 0 && !Yr) {
          Yr = !0;
          var je = G(j);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gt(D) {
      {
        for (var j = Object.keys(D.props), J = 0; J < j.length; J++) {
          var ue = j[J];
          if (ue !== "children" && ue !== "key") {
            ur(D), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), ur(null);
            break;
          }
        }
        D.ref !== null && (ur(D), w("Invalid attribute `ref` supplied to `React.Fragment`."), ur(null));
      }
    }
    function ht(D, j, J, ue, je, Pe) {
      {
        var Le = T(D);
        if (!Le) {
          var Re = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (Re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rt = ot(je);
          Rt ? Re += Rt : Re += Qe();
          var nt;
          D === null ? nt = "null" : _e(D) ? nt = "array" : D !== void 0 && D.$$typeof === e ? (nt = "<" + (G(D.type) || "Unknown") + " />", Re = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof D, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, Re);
        }
        var ut = Ir(D, j, J, je, Pe);
        if (ut == null)
          return ut;
        if (Le) {
          var mt = j.children;
          if (mt !== void 0)
            if (ue)
              if (_e(mt)) {
                for (var Jr = 0; Jr < mt.length; Jr++)
                  ft(mt[Jr], D);
                Object.freeze && Object.freeze(mt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(mt, D);
        }
        return D === n ? gt(ut) : pt(ut), ut;
      }
    }
    function yt(D, j, J) {
      return ht(D, j, J, !0);
    }
    function dt(D, j, J) {
      return ht(D, j, J, !1);
    }
    var ct = dt, We = yt;
    Pi.Fragment = n, Pi.jsx = ct, Pi.jsxs = We;
  }()), Pi;
}
process.env.NODE_ENV === "production" ? ac.exports = HS() : ac.exports = WS();
var vf = ac.exports, ye = {
  context: void 0,
  registry: void 0
};
function Ui(t) {
  ye.context = t;
}
var GS = (t, e) => t === e, wo = Symbol("solid-proxy"), bd = Symbol("solid-track"), _o = {
  equals: GS
}, wd = Dd, Zr = 1, Eo = 2, _d = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, ma = {}, Be = null, va = null, Ve = null, qt = null, Wr = null, Bo = 0, [QS, $D] = /* @__PURE__ */ Ht(!1);
function An(t, e) {
  const r = Ve, n = Be, i = t.length === 0, s = e === void 0 ? n : e, a = i ? _d : {
    owned: null,
    cleanups: null,
    context: s ? s.context : null,
    owner: s
  }, o = i ? t : () => t(() => It(() => Vo(a)));
  Be = a, Ve = null;
  try {
    return Ur(o, !0);
  } finally {
    Ve = r, Be = n;
  }
}
function Ht(t, e) {
  e = e ? Object.assign({}, _o, e) : _o;
  const r = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (i) => (typeof i == "function" && (i = i(r.value)), Od(r, i));
  return [xd.bind(r), n];
}
function bf(t, e, r) {
  const n = zo(t, e, !0, Zr);
  bi(n);
}
function Pn(t, e, r) {
  const n = zo(t, e, !1, Zr);
  bi(n);
}
function Ed(t, e, r) {
  wd = nx;
  const n = zo(t, e, !1, Zr);
  (!r || !r.render) && (n.user = !0), Wr ? Wr.push(n) : bi(n);
}
function rr(t, e, r) {
  r = r ? Object.assign({}, _o, r) : _o;
  const n = zo(t, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, bi(n), xd.bind(n);
}
function wf(t) {
  return t && typeof t == "object" && "then" in t;
}
function ZS(t, e, r) {
  let n, i, s;
  arguments.length === 2 && typeof e == "object" || arguments.length === 1 ? (n = !0, i = t, s = e || {}) : (n = t, i = e, s = r || {});
  let a = null, o = ma, u = null, c = !1, f = "initialValue" in s, d = typeof n == "function" && rr(n);
  const p = /* @__PURE__ */ new Set(), [m, v] = (s.storage || Ht)(s.initialValue), [E, S] = Ht(void 0), [P, w] = Ht(void 0, {
    equals: !1
  }), [O, b] = Ht(f ? "ready" : "unresolved");
  if (ye.context) {
    u = `${ye.context.id}${ye.context.count++}`;
    let C;
    s.ssrLoadFrom === "initial" ? o = s.initialValue : ye.load && (C = ye.load(u)) && (o = wf(C) && "value" in C ? C.value : C);
  }
  function x(C, T, U, B) {
    return a === C && (a = null, B !== void 0 && (f = !0), (C === o || T === o) && s.onHydrated && queueMicrotask(
      () => s.onHydrated(B, {
        value: T
      })
    ), o = ma, g(T, U)), T;
  }
  function g(C, T) {
    Ur(() => {
      T === void 0 && v(() => C), b(T !== void 0 ? "errored" : f ? "ready" : "unresolved"), S(T);
      for (const U of p.keys())
        U.decrement();
      p.clear();
    }, !1);
  }
  function l() {
    const C = ex, T = m(), U = E();
    if (U !== void 0 && !a)
      throw U;
    return Ve && !Ve.user && C && bf(() => {
      P(), a && (C.resolved || p.has(C) || (C.increment(), p.add(C)));
    }), T;
  }
  function y(C = !0) {
    if (C !== !1 && c)
      return;
    c = !1;
    const T = d ? d() : n;
    if (T == null || T === !1) {
      x(a, It(m));
      return;
    }
    const U = o !== ma ? o : It(
      () => i(T, {
        value: m(),
        refetching: C
      })
    );
    return wf(U) ? (a = U, c = !0, queueMicrotask(() => c = !1), Ur(() => {
      b(f ? "refreshing" : "pending"), w();
    }, !1), U.then(
      (B) => x(U, B, void 0, T),
      (B) => x(U, void 0, Cd(B), T)
    )) : (x(a, U, void 0, T), U);
  }
  return Object.defineProperties(l, {
    state: {
      get: () => O()
    },
    error: {
      get: () => E()
    },
    loading: {
      get() {
        const C = O();
        return C === "pending" || C === "refreshing";
      }
    },
    latest: {
      get() {
        if (!f)
          return l();
        const C = E();
        if (C && !a)
          throw C;
        return m();
      }
    }
  }), d ? bf(() => y(!1)) : y(!1), [
    l,
    {
      refetch: y,
      mutate: v
    }
  ];
}
function kD(t) {
  return Ur(t, !1);
}
function It(t) {
  if (Ve === null)
    return t();
  const e = Ve;
  Ve = null;
  try {
    return t();
  } finally {
    Ve = e;
  }
}
function qD(t, e, r) {
  const n = Array.isArray(t);
  let i, s = r && r.defer;
  return (a) => {
    let o;
    if (n) {
      o = Array(t.length);
      for (let c = 0; c < t.length; c++)
        o[c] = t[c]();
    } else
      o = t();
    if (s) {
      s = !1;
      return;
    }
    const u = It(() => e(o, i, a));
    return i = o, u;
  };
}
function YS(t) {
  Ed(() => It(t));
}
function ss(t) {
  return Be === null || (Be.cleanups === null ? Be.cleanups = [t] : Be.cleanups.push(t)), t;
}
function BD() {
  return Ve;
}
function _f() {
  return Be;
}
function JS(t, e) {
  const r = Be, n = Ve;
  Be = t, Ve = null;
  try {
    return Ur(e, !0);
  } catch (i) {
    Xc(i);
  } finally {
    Be = r, Ve = n;
  }
}
function XS(t) {
  const e = Ve, r = Be;
  return Promise.resolve().then(() => {
    Ve = e, Be = r;
    let n;
    return Ur(t, !1), Ve = Be = null, n ? n.done : void 0;
  });
}
function zD() {
  return [QS, XS];
}
function VD(t, e) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: ix(r),
    defaultValue: t
  };
}
function KD(t) {
  return Be && Be.context && Be.context[t.id] !== void 0 ? Be.context[t.id] : t.defaultValue;
}
function Sd(t) {
  const e = rr(t), r = rr(() => cc(e()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var ex;
function xd() {
  if (this.sources && this.state)
    if (this.state === Zr)
      bi(this);
    else {
      const t = qt;
      qt = null, Ur(() => xo(this), !1), qt = t;
    }
  if (Ve) {
    const t = this.observers ? this.observers.length : 0;
    Ve.sources ? (Ve.sources.push(this), Ve.sourceSlots.push(t)) : (Ve.sources = [this], Ve.sourceSlots = [t]), this.observers ? (this.observers.push(Ve), this.observerSlots.push(Ve.sources.length - 1)) : (this.observers = [Ve], this.observerSlots = [Ve.sources.length - 1]);
  }
  return this.value;
}
function Od(t, e, r) {
  let n = t.value;
  return (!t.comparator || !t.comparator(n, e)) && (t.value = e, t.observers && t.observers.length && Ur(() => {
    for (let i = 0; i < t.observers.length; i += 1) {
      const s = t.observers[i], a = va && va.running;
      a && va.disposed.has(s), (a ? !s.tState : !s.state) && (s.pure ? qt.push(s) : Wr.push(s), s.observers && Id(s)), a || (s.state = Zr);
    }
    if (qt.length > 1e6)
      throw qt = [], new Error();
  }, !1)), e;
}
function bi(t) {
  if (!t.fn)
    return;
  Vo(t);
  const e = Be, r = Ve, n = Bo;
  Ve = Be = t, tx(
    t,
    t.value,
    n
  ), Ve = r, Be = e;
}
function tx(t, e, r) {
  let n;
  try {
    n = t.fn(e);
  } catch (i) {
    return t.pure && (t.state = Zr, t.owned && t.owned.forEach(Vo), t.owned = null), t.updatedAt = r + 1, Xc(i);
  }
  (!t.updatedAt || t.updatedAt <= r) && (t.updatedAt != null && "observers" in t ? Od(t, n) : t.value = n, t.updatedAt = r);
}
function zo(t, e, r, n = Zr, i) {
  const s = {
    fn: t,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: Be,
    context: Be ? Be.context : null,
    pure: r
  };
  return Be === null || Be !== _d && (Be.owned ? Be.owned.push(s) : Be.owned = [s]), s;
}
function So(t) {
  if (t.state === 0)
    return;
  if (t.state === Eo)
    return xo(t);
  if (t.suspense && It(t.suspense.inFallback))
    return t.suspense.effects.push(t);
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < Bo); )
    t.state && e.push(t);
  for (let r = e.length - 1; r >= 0; r--)
    if (t = e[r], t.state === Zr)
      bi(t);
    else if (t.state === Eo) {
      const n = qt;
      qt = null, Ur(() => xo(t, e[0]), !1), qt = n;
    }
}
function Ur(t, e) {
  if (qt)
    return t();
  let r = !1;
  e || (qt = []), Wr ? r = !0 : Wr = [], Bo++;
  try {
    const n = t();
    return rx(r), n;
  } catch (n) {
    r || (Wr = null), qt = null, Xc(n);
  }
}
function rx(t) {
  if (qt && (Dd(qt), qt = null), t)
    return;
  const e = Wr;
  Wr = null, e.length && Ur(() => wd(e), !1);
}
function Dd(t) {
  for (let e = 0; e < t.length; e++)
    So(t[e]);
}
function nx(t) {
  let e, r = 0;
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    n.user ? t[r++] = n : So(n);
  }
  if (ye.context) {
    if (ye.count) {
      ye.effects || (ye.effects = []), ye.effects.push(...t.slice(0, r));
      return;
    } else
      ye.effects && (t = [...ye.effects, ...t], r += ye.effects.length, delete ye.effects);
    Ui();
  }
  for (e = 0; e < r; e++)
    So(t[e]);
}
function xo(t, e) {
  t.state = 0;
  for (let r = 0; r < t.sources.length; r += 1) {
    const n = t.sources[r];
    if (n.sources) {
      const i = n.state;
      i === Zr ? n !== e && (!n.updatedAt || n.updatedAt < Bo) && So(n) : i === Eo && xo(n, e);
    }
  }
}
function Id(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const r = t.observers[e];
    r.state || (r.state = Eo, r.pure ? qt.push(r) : Wr.push(r), r.observers && Id(r));
  }
}
function Vo(t) {
  let e;
  if (t.sources)
    for (; t.sources.length; ) {
      const r = t.sources.pop(), n = t.sourceSlots.pop(), i = r.observers;
      if (i && i.length) {
        const s = i.pop(), a = r.observerSlots.pop();
        n < i.length && (s.sourceSlots[a] = n, i[n] = s, r.observerSlots[n] = a);
      }
    }
  if (t.owned) {
    for (e = t.owned.length - 1; e >= 0; e--)
      Vo(t.owned[e]);
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--)
      t.cleanups[e]();
    t.cleanups = null;
  }
  t.state = 0;
}
function Cd(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
}
function Xc(t, e = Be) {
  throw Cd(t);
}
function cc(t) {
  if (typeof t == "function" && !t.length)
    return cc(t());
  if (Array.isArray(t)) {
    const e = [];
    for (let r = 0; r < t.length; r++) {
      const n = cc(t[r]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return t;
}
function ix(t, e) {
  return function(n) {
    let i;
    return Pn(
      () => i = It(() => (Be.context = {
        ...Be.context,
        [t]: n.value
      }, Sd(() => n.children))),
      void 0
    ), i;
  };
}
var uc = Symbol("fallback");
function Oo(t) {
  for (let e = 0; e < t.length; e++)
    t[e]();
}
function sx(t, e, r = {}) {
  let n = [], i = [], s = [], a = 0, o = e.length > 1 ? [] : null;
  return ss(() => Oo(s)), () => {
    let u = t() || [], c, f;
    return u[bd], It(() => {
      let p = u.length, m, v, E, S, P, w, O, b, x;
      if (p === 0)
        a !== 0 && (Oo(s), s = [], n = [], i = [], a = 0, o && (o = [])), r.fallback && (n = [uc], i[0] = An((g) => (s[0] = g, r.fallback())), a = 1);
      else if (a === 0) {
        for (i = new Array(p), f = 0; f < p; f++)
          n[f] = u[f], i[f] = An(d);
        a = p;
      } else {
        for (E = new Array(p), S = new Array(p), o && (P = new Array(p)), w = 0, O = Math.min(a, p); w < O && n[w] === u[w]; w++)
          ;
        for (O = a - 1, b = p - 1; O >= w && b >= w && n[O] === u[b]; O--, b--)
          E[b] = i[O], S[b] = s[O], o && (P[b] = o[O]);
        for (m = /* @__PURE__ */ new Map(), v = new Array(b + 1), f = b; f >= w; f--)
          x = u[f], c = m.get(x), v[f] = c === void 0 ? -1 : c, m.set(x, f);
        for (c = w; c <= O; c++)
          x = n[c], f = m.get(x), f !== void 0 && f !== -1 ? (E[f] = i[c], S[f] = s[c], o && (P[f] = o[c]), f = v[f], m.set(x, f)) : s[c]();
        for (f = w; f < p; f++)
          f in E ? (i[f] = E[f], s[f] = S[f], o && (o[f] = P[f], o[f](f))) : i[f] = An(d);
        i = i.slice(0, a = p), n = u.slice(0);
      }
      return i;
    });
    function d(p) {
      if (s[f] = p, o) {
        const [m, v] = Ht(f);
        return o[f] = v, e(u[f], m);
      }
      return e(u[f]);
    }
  };
}
function ox(t, e, r = {}) {
  let n = [], i = [], s = [], a = [], o = 0, u;
  return ss(() => Oo(s)), () => {
    const c = t() || [];
    return c[bd], It(() => {
      if (c.length === 0)
        return o !== 0 && (Oo(s), s = [], n = [], i = [], o = 0, a = []), r.fallback && (n = [uc], i[0] = An((d) => (s[0] = d, r.fallback())), o = 1), i;
      for (n[0] === uc && (s[0](), s = [], n = [], i = [], o = 0), u = 0; u < c.length; u++)
        u < n.length && n[u] !== c[u] ? a[u](() => c[u]) : u >= n.length && (i[u] = An(f));
      for (; u < n.length; u++)
        s[u]();
      return o = a.length = s.length = c.length, n = c.slice(0), i = i.slice(0, o);
    });
    function f(d) {
      s[u] = d;
      const [p, m] = Ht(c[u]);
      return a[u] = m, e(p, u);
    }
  };
}
function ax(t, e) {
  return It(() => t(e || {}));
}
function zs() {
  return !0;
}
var lc = {
  get(t, e, r) {
    return e === wo ? r : t.get(e);
  },
  has(t, e) {
    return e === wo ? !0 : t.has(e);
  },
  set: zs,
  deleteProperty: zs,
  getOwnPropertyDescriptor(t, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return t.get(e);
      },
      set: zs,
      deleteProperty: zs
    };
  },
  ownKeys(t) {
    return t.keys();
  }
};
function ba(t) {
  return (t = typeof t == "function" ? t() : t) ? t : {};
}
function cx() {
  for (let t = 0, e = this.length; t < e; ++t) {
    const r = this[t]();
    if (r !== void 0)
      return r;
  }
}
function ux(...t) {
  let e = !1;
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    e = e || !!a && wo in a, t[s] = typeof a == "function" ? (e = !0, rr(a)) : a;
  }
  if (e)
    return new Proxy(
      {
        get(s) {
          for (let a = t.length - 1; a >= 0; a--) {
            const o = ba(t[a])[s];
            if (o !== void 0)
              return o;
          }
        },
        has(s) {
          for (let a = t.length - 1; a >= 0; a--)
            if (s in ba(t[a]))
              return !0;
          return !1;
        },
        keys() {
          const s = [];
          for (let a = 0; a < t.length; a++)
            s.push(...Object.keys(ba(t[a])));
          return [...new Set(s)];
        }
      },
      lc
    );
  const r = {}, n = {}, i = /* @__PURE__ */ new Set();
  for (let s = t.length - 1; s >= 0; s--) {
    const a = t[s];
    if (!a)
      continue;
    const o = Object.getOwnPropertyNames(a);
    for (let u = 0, c = o.length; u < c; u++) {
      const f = o[u];
      if (f === "__proto__" || f === "constructor")
        continue;
      const d = Object.getOwnPropertyDescriptor(a, f);
      if (!i.has(f))
        d.get ? (i.add(f), Object.defineProperty(r, f, {
          enumerable: !0,
          configurable: !0,
          get: cx.bind(n[f] = [d.get.bind(a)])
        })) : (d.value !== void 0 && i.add(f), r[f] = d.value);
      else {
        const p = n[f];
        p ? d.get ? p.push(d.get.bind(a)) : d.value !== void 0 && p.push(() => d.value) : r[f] === void 0 && (r[f] = d.value);
      }
    }
  }
  return r;
}
function lx(t, ...e) {
  if (wo in t) {
    const i = new Set(e.length > 1 ? e.flat() : e[0]), s = e.map((a) => new Proxy(
      {
        get(o) {
          return a.includes(o) ? t[o] : void 0;
        },
        has(o) {
          return a.includes(o) && o in t;
        },
        keys() {
          return a.filter((o) => o in t);
        }
      },
      lc
    ));
    return s.push(
      new Proxy(
        {
          get(a) {
            return i.has(a) ? void 0 : t[a];
          },
          has(a) {
            return i.has(a) ? !1 : a in t;
          },
          keys() {
            return Object.keys(t).filter((a) => !i.has(a));
          }
        },
        lc
      )
    ), s;
  }
  const r = {}, n = e.map(() => ({}));
  for (const i of Object.getOwnPropertyNames(t)) {
    const s = Object.getOwnPropertyDescriptor(t, i), a = !s.get && !s.set && s.enumerable && s.writable && s.configurable;
    let o = !1, u = 0;
    for (const c of e)
      c.includes(i) && (o = !0, a ? n[u][i] = s.value : Object.defineProperty(n[u], i, s)), ++u;
    o || (a ? r[i] = s.value : Object.defineProperty(r, i, s));
  }
  return [...n, r];
}
function fx(t) {
  let e, r;
  const n = (i) => {
    const s = ye.context;
    if (s) {
      const [o, u] = Ht();
      ye.count || (ye.count = 0), ye.count++, (r || (r = t())).then((c) => {
        Ui(s), ye.count--, u(() => c.default), Ui();
      }), e = o;
    } else if (!e) {
      const [o] = ZS(() => (r || (r = t())).then((u) => u.default));
      e = o;
    }
    let a;
    return rr(
      () => (a = e()) && It(() => {
        if (!s)
          return a(i);
        const o = ye.context;
        Ui(s);
        const u = a(i);
        return Ui(o), u;
      })
    );
  };
  return n.preload = () => r || ((r = t()).then((i) => e = () => i.default), r), n;
}
var hx = 0;
function HD() {
  const t = ye.context;
  return t ? `${t.id}${t.count++}` : `cl-${hx++}`;
}
var Rd = (t) => `Stale read from <${t}>.`;
function WD(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return rr(sx(() => t.each, t.children, e || void 0));
}
function GD(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return rr(ox(() => t.each, t.children, e || void 0));
}
function QD(t) {
  const e = t.keyed, r = rr(() => t.when, void 0, {
    equals: (n, i) => e ? n === i : !n == !i
  });
  return rr(
    () => {
      const n = r();
      if (n) {
        const i = t.children;
        return typeof i == "function" && i.length > 0 ? It(
          () => i(
            e ? n : () => {
              if (!It(r))
                throw Rd("Show");
              return t.when;
            }
          )
        ) : i;
      }
      return t.fallback;
    },
    void 0,
    void 0
  );
}
function ZD(t) {
  let e = !1;
  const r = (s, a) => s[0] === a[0] && (e ? s[1] === a[1] : !s[1] == !a[1]) && s[2] === a[2], n = Sd(() => t.children), i = rr(
    () => {
      let s = n();
      Array.isArray(s) || (s = [s]);
      for (let a = 0; a < s.length; a++) {
        const o = s[a].when;
        if (o)
          return e = !!s[a].keyed, [a, o, s[a]];
      }
      return [-1];
    },
    void 0,
    {
      equals: r
    }
  );
  return rr(
    () => {
      const [s, a, o] = i();
      if (s < 0)
        return t.fallback;
      const u = o.children;
      return typeof u == "function" && u.length > 0 ? It(
        () => u(
          e ? a : () => {
            if (It(i)[0] !== s)
              throw Rd("Match");
            return o.when;
          }
        )
      ) : u;
    },
    void 0,
    void 0
  );
}
function YD(t) {
  return t;
}
var dx = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
], px = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...dx
]), gx = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), yx = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), mx = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function vx(t, e) {
  const r = mx[t];
  return typeof r == "object" ? r[e] ? r.$ : void 0 : r;
}
var bx = /* @__PURE__ */ new Set([
  "beforeinput",
  "click",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
]), wx = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), _x = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Ex(t, e, r) {
  let n = r.length, i = e.length, s = n, a = 0, o = 0, u = e[i - 1].nextSibling, c = null;
  for (; a < i || o < s; ) {
    if (e[a] === r[o]) {
      a++, o++;
      continue;
    }
    for (; e[i - 1] === r[s - 1]; )
      i--, s--;
    if (i === a) {
      const f = s < n ? o ? r[o - 1].nextSibling : r[s - o] : u;
      for (; o < s; )
        t.insertBefore(r[o++], f);
    } else if (s === o)
      for (; a < i; )
        (!c || !c.has(e[a])) && e[a].remove(), a++;
    else if (e[a] === r[s - 1] && r[o] === e[i - 1]) {
      const f = e[--i].nextSibling;
      t.insertBefore(r[o++], e[a++].nextSibling), t.insertBefore(r[--s], f), e[i] = r[s];
    } else {
      if (!c) {
        c = /* @__PURE__ */ new Map();
        let d = o;
        for (; d < s; )
          c.set(r[d], d++);
      }
      const f = c.get(e[a]);
      if (f != null)
        if (o < f && f < s) {
          let d = a, p = 1, m;
          for (; ++d < i && d < s && !((m = c.get(e[d])) == null || m !== f + p); )
            p++;
          if (p > f - o) {
            const v = e[a];
            for (; o < f; )
              t.insertBefore(r[o++], v);
          } else
            t.replaceChild(r[o++], e[a++]);
        } else
          a++;
      else
        e[a++].remove();
    }
  }
}
var Ef = "_$DX_DELEGATE";
function Sx(t, e, r, n = {}) {
  let i;
  return An((s) => {
    i = s, e === document ? t() : hc(e, t(), e.firstChild ? null : void 0, r);
  }, n.owner), () => {
    i(), e.textContent = "";
  };
}
function JD(t, e, r) {
  let n;
  const i = () => {
    const a = document.createElement("template");
    return a.innerHTML = t, r ? a.content.firstChild.firstChild : a.content.firstChild;
  }, s = e ? () => It(() => document.importNode(n || (n = i()), !0)) : () => (n || (n = i())).cloneNode(!0);
  return s.cloneNode = s, s;
}
function xx(t, e = window.document) {
  const r = e[Ef] || (e[Ef] = /* @__PURE__ */ new Set());
  for (let n = 0, i = t.length; n < i; n++) {
    const s = t[n];
    r.has(s) || (r.add(s), e.addEventListener(s, Lx));
  }
}
function fc(t, e, r) {
  ye.context || (r == null ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function Ox(t, e, r, n) {
  ye.context || (n == null ? t.removeAttributeNS(e, r) : t.setAttributeNS(e, r, n));
}
function Dx(t, e) {
  ye.context || (e == null ? t.removeAttribute("class") : t.className = e);
}
function Ix(t, e, r, n) {
  if (n)
    Array.isArray(r) ? (t[`$$${e}`] = r[0], t[`$$${e}Data`] = r[1]) : t[`$$${e}`] = r;
  else if (Array.isArray(r)) {
    const i = r[0];
    t.addEventListener(e, r[0] = (s) => i.call(t, r[1], s));
  } else
    t.addEventListener(e, r);
}
function Cx(t, e, r = {}) {
  const n = Object.keys(e || {}), i = Object.keys(r);
  let s, a;
  for (s = 0, a = i.length; s < a; s++) {
    const o = i[s];
    !o || o === "undefined" || e[o] || (Sf(t, o, !1), delete r[o]);
  }
  for (s = 0, a = n.length; s < a; s++) {
    const o = n[s], u = !!e[o];
    !o || o === "undefined" || r[o] === u || !u || (Sf(t, o, !0), r[o] = u);
  }
  return r;
}
function Rx(t, e, r) {
  if (!e)
    return r ? fc(t, "style") : e;
  const n = t.style;
  if (typeof e == "string")
    return n.cssText = e;
  typeof r == "string" && (n.cssText = r = void 0), r || (r = {}), e || (e = {});
  let i, s;
  for (s in r)
    e[s] == null && n.removeProperty(s), delete r[s];
  for (s in e)
    i = e[s], i !== r[s] && (n.setProperty(s, i), r[s] = i);
  return r;
}
function Tx(t, e = {}, r, n) {
  const i = {};
  return n || Pn(
    () => i.children = fi(t, e.children, i.children)
  ), Pn(() => e.ref && e.ref(t)), Pn(() => Ax(t, e, r, !0, i, !0)), i;
}
function XD(t, e, r) {
  return It(() => t(e, r));
}
function hc(t, e, r, n) {
  if (r !== void 0 && !n && (n = []), typeof e != "function")
    return fi(t, e, n, r);
  Pn((i) => fi(t, e(), i, r), n);
}
function Ax(t, e, r, n, i = {}, s = !1) {
  e || (e = {});
  for (const a in i)
    if (!(a in e)) {
      if (a === "children")
        continue;
      i[a] = xf(t, a, null, i[a], r, s);
    }
  for (const a in e) {
    if (a === "children") {
      n || fi(t, e.children);
      continue;
    }
    const o = e[a];
    i[a] = xf(t, a, o, i[a], r, s);
  }
}
function Px(t) {
  let e, r;
  return !ye.context || !(e = ye.registry.get(r = Fx())) ? t() : (ye.completed && ye.completed.add(e), ye.registry.delete(r), e);
}
function Nx(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, r) => r.toUpperCase());
}
function Sf(t, e, r) {
  const n = e.trim().split(/\s+/);
  for (let i = 0, s = n.length; i < s; i++)
    t.classList.toggle(n[i], r);
}
function xf(t, e, r, n, i, s) {
  let a, o, u, c, f;
  if (e === "style")
    return Rx(t, r, n);
  if (e === "classList")
    return Cx(t, r, n);
  if (r === n)
    return n;
  if (e === "ref")
    s || r(t);
  else if (e.slice(0, 3) === "on:") {
    const d = e.slice(3);
    n && t.removeEventListener(d, n), r && t.addEventListener(d, r);
  } else if (e.slice(0, 10) === "oncapture:") {
    const d = e.slice(10);
    n && t.removeEventListener(d, n, !0), r && t.addEventListener(d, r, !0);
  } else if (e.slice(0, 2) === "on") {
    const d = e.slice(2).toLowerCase(), p = bx.has(d);
    if (!p && n) {
      const m = Array.isArray(n) ? n[0] : n;
      t.removeEventListener(d, m);
    }
    (p || r) && (Ix(t, d, r, p), p && xx([d]));
  } else if (e.slice(0, 5) === "attr:")
    fc(t, e.slice(5), r);
  else if ((f = e.slice(0, 5) === "prop:") || (u = gx.has(e)) || !i && ((c = vx(e, t.tagName)) || (o = px.has(e))) || (a = t.nodeName.includes("-"))) {
    if (f)
      e = e.slice(5), o = !0;
    else if (ye.context)
      return r;
    e === "class" || e === "className" ? Dx(t, r) : a && !o && !u ? t[Nx(e)] = r : t[c || e] = r;
  } else {
    const d = i && e.indexOf(":") > -1 && _x[e.split(":")[0]];
    d ? Ox(t, d, e, r) : fc(t, yx[e] || e, r);
  }
  return r;
}
function Lx(t) {
  const e = `$$${t.type}`;
  let r = t.composedPath && t.composedPath()[0] || t.target;
  for (t.target !== r && Object.defineProperty(t, "target", {
    configurable: !0,
    value: r
  }), Object.defineProperty(t, "currentTarget", {
    configurable: !0,
    get() {
      return r || document;
    }
  }), ye.registry && !ye.done && (ye.done = _$HY.done = !0); r; ) {
    const n = r[e];
    if (n && !r.disabled) {
      const i = r[`${e}Data`];
      if (i !== void 0 ? n.call(r, i, t) : n.call(r, t), t.cancelBubble)
        return;
    }
    r = r._$host || r.parentNode || r.host;
  }
}
function fi(t, e, r, n, i) {
  if (ye.context) {
    !r && (r = [...t.childNodes]);
    let o = [];
    for (let u = 0; u < r.length; u++) {
      const c = r[u];
      c.nodeType === 8 && c.data.slice(0, 2) === "!$" ? c.remove() : o.push(c);
    }
    r = o;
  }
  for (; typeof r == "function"; )
    r = r();
  if (e === r)
    return r;
  const s = typeof e, a = n !== void 0;
  if (t = a && r[0] && r[0].parentNode || t, s === "string" || s === "number") {
    if (ye.context)
      return r;
    if (s === "number" && (e = e.toString()), a) {
      let o = r[0];
      o && o.nodeType === 3 ? o.data = e : o = document.createTextNode(e), r = Vn(t, r, n, o);
    } else
      r !== "" && typeof r == "string" ? r = t.firstChild.data = e : r = t.textContent = e;
  } else if (e == null || s === "boolean") {
    if (ye.context)
      return r;
    r = Vn(t, r, n);
  } else {
    if (s === "function")
      return Pn(() => {
        let o = e();
        for (; typeof o == "function"; )
          o = o();
        r = fi(t, o, r, n);
      }), () => r;
    if (Array.isArray(e)) {
      const o = [], u = r && Array.isArray(r);
      if (dc(o, e, r, i))
        return Pn(() => r = fi(t, o, r, n, !0)), () => r;
      if (ye.context) {
        if (!o.length)
          return r;
        if (n === void 0)
          return [...t.childNodes];
        let c = o[0], f = [c];
        for (; (c = c.nextSibling) !== n; )
          f.push(c);
        return r = f;
      }
      if (o.length === 0) {
        if (r = Vn(t, r, n), a)
          return r;
      } else
        u ? r.length === 0 ? Of(t, o, n) : Ex(t, r, o) : (r && Vn(t), Of(t, o));
      r = o;
    } else if (e.nodeType) {
      if (ye.context && e.parentNode)
        return r = a ? [e] : e;
      if (Array.isArray(r)) {
        if (a)
          return r = Vn(t, r, n, e);
        Vn(t, r, null, e);
      } else
        r == null || r === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      r = e;
    }
  }
  return r;
}
function dc(t, e, r, n) {
  let i = !1;
  for (let s = 0, a = e.length; s < a; s++) {
    let o = e[s], u = r && r[s], c;
    if (!(o == null || o === !0 || o === !1))
      if ((c = typeof o) == "object" && o.nodeType)
        t.push(o);
      else if (Array.isArray(o))
        i = dc(t, o, u) || i;
      else if (c === "function")
        if (n) {
          for (; typeof o == "function"; )
            o = o();
          i = dc(
            t,
            Array.isArray(o) ? o : [o],
            Array.isArray(u) ? u : [u]
          ) || i;
        } else
          t.push(o), i = !0;
      else {
        const f = String(o);
        u && u.nodeType === 3 && u.data === f ? t.push(u) : t.push(document.createTextNode(f));
      }
  }
  return i;
}
function Of(t, e, r = null) {
  for (let n = 0, i = e.length; n < i; n++)
    t.insertBefore(e[n], r);
}
function Vn(t, e, r, n) {
  if (r === void 0)
    return t.textContent = "";
  const i = n || document.createTextNode("");
  if (e.length) {
    let s = !1;
    for (let a = e.length - 1; a >= 0; a--) {
      const o = e[a];
      if (i !== o) {
        const u = o.parentNode === t;
        !s && !a ? u ? t.replaceChild(i, o) : t.insertBefore(i, r) : u && o.remove();
      } else
        s = !0;
    }
  } else
    t.insertBefore(i, r);
  return [i];
}
function Fx() {
  const t = ye.context;
  return `${t.id}${t.count++}`;
}
var Mx = "http://www.w3.org/2000/svg";
function Td(t, e = !1) {
  return e ? document.createElementNS(Mx, t) : document.createElement(t);
}
function e3(t) {
  const { useShadow: e } = t, r = document.createTextNode(""), n = () => t.mount || document.body, i = _f();
  let s, a = !!ye.context;
  return Ed(
    () => {
      a && (_f().user = a = !1), s || (s = JS(i, () => rr(() => t.children)));
      const o = n();
      if (o instanceof HTMLHeadElement) {
        const [u, c] = Ht(!1), f = () => c(!0);
        An((d) => hc(o, () => u() ? d() : s(), null)), ss(f);
      } else {
        const u = Td(t.isSVG ? "g" : "div", t.isSVG), c = e && u.attachShadow ? u.attachShadow({
          mode: "open"
        }) : u;
        Object.defineProperty(u, "_$host", {
          get() {
            return r.parentNode;
          },
          configurable: !0
        }), hc(c, s), o.appendChild(u), t.ref && t.ref(u), ss(() => o.removeChild(u));
      }
    },
    void 0,
    {
      render: !a
    }
  ), r;
}
function t3(t) {
  const [e, r] = lx(t, ["component"]), n = rr(() => e.component);
  return rr(() => {
    const i = n();
    switch (typeof i) {
      case "function":
        return It(() => i(r));
      case "string":
        const s = wx.has(i), a = ye.context ? Px() : Td(i, s);
        return Tx(a, r, s), a;
    }
  });
}
var Ux = (
  /** @class */
  function() {
    function t() {
      this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
    }
    return t.prototype.set = function(e, r) {
      this.keyToValue.set(e, r), this.valueToKey.set(r, e);
    }, t.prototype.getByKey = function(e) {
      return this.keyToValue.get(e);
    }, t.prototype.getByValue = function(e) {
      return this.valueToKey.get(e);
    }, t.prototype.clear = function() {
      this.keyToValue.clear(), this.valueToKey.clear();
    }, t;
  }()
), Ad = (
  /** @class */
  function() {
    function t(e) {
      this.generateIdentifier = e, this.kv = new Ux();
    }
    return t.prototype.register = function(e, r) {
      this.kv.getByValue(e) || (r || (r = this.generateIdentifier(e)), this.kv.set(r, e));
    }, t.prototype.clear = function() {
      this.kv.clear();
    }, t.prototype.getIdentifier = function(e) {
      return this.kv.getByValue(e);
    }, t.prototype.getValue = function(e) {
      return this.kv.getByKey(e);
    }, t;
  }()
), jx = function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s]);
    }, t(e, r);
  };
  return function(e, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), $x = (
  /** @class */
  function(t) {
    jx(e, t);
    function e() {
      var r = t.call(this, function(n) {
        return n.name;
      }) || this;
      return r.classToAllowedProps = /* @__PURE__ */ new Map(), r;
    }
    return e.prototype.register = function(r, n) {
      typeof n == "object" ? (n.allowProps && this.classToAllowedProps.set(r, n.allowProps), t.prototype.register.call(this, r, n.identifier)) : t.prototype.register.call(this, r, n);
    }, e.prototype.getAllowedProps = function(r) {
      return this.classToAllowedProps.get(r);
    }, e;
  }(Ad)
), kx = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
};
function qx(t) {
  if ("values" in Object)
    return Object.values(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(t[r]);
  return e;
}
function Bx(t, e) {
  var r = qx(t);
  if ("find" in r)
    return r.find(e);
  for (var n = r, i = 0; i < n.length; i++) {
    var s = n[i];
    if (e(s))
      return s;
  }
}
function hi(t, e) {
  Object.entries(t).forEach(function(r) {
    var n = kx(r, 2), i = n[0], s = n[1];
    return e(s, i);
  });
}
function to(t, e) {
  return t.indexOf(e) !== -1;
}
function Df(t, e) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (e(n))
      return n;
  }
}
var zx = (
  /** @class */
  function() {
    function t() {
      this.transfomers = {};
    }
    return t.prototype.register = function(e) {
      this.transfomers[e.name] = e;
    }, t.prototype.findApplicable = function(e) {
      return Bx(this.transfomers, function(r) {
        return r.isApplicable(e);
      });
    }, t.prototype.findByName = function(e) {
      return this.transfomers[e];
    }, t;
  }()
), Vx = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, Pd = function(t) {
  return typeof t > "u";
}, Kx = function(t) {
  return t === null;
}, os = function(t) {
  return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype;
}, pc = function(t) {
  return os(t) && Object.keys(t).length === 0;
}, hn = function(t) {
  return Array.isArray(t);
}, Hx = function(t) {
  return typeof t == "string";
}, Wx = function(t) {
  return typeof t == "number" && !isNaN(t);
}, Gx = function(t) {
  return typeof t == "boolean";
}, Qx = function(t) {
  return t instanceof RegExp;
}, as = function(t) {
  return t instanceof Map;
}, cs = function(t) {
  return t instanceof Set;
}, Nd = function(t) {
  return Vx(t) === "Symbol";
}, Zx = function(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}, Yx = function(t) {
  return t instanceof Error;
}, If = function(t) {
  return typeof t == "number" && isNaN(t);
}, Cf = function(t) {
  return Gx(t) || Kx(t) || Pd(t) || Wx(t) || Hx(t) || Nd(t);
}, Jx = function(t) {
  return typeof t == "bigint";
}, Xx = function(t) {
  return t === 1 / 0 || t === -1 / 0;
}, eO = function(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}, tO = function(t) {
  return t instanceof URL;
}, Ld = function(t) {
  return t.replace(/\./g, "\\.");
}, wa = function(t) {
  return t.map(String).map(Ld).join(".");
}, qi = function(t) {
  for (var e = [], r = "", n = 0; n < t.length; n++) {
    var i = t.charAt(n), s = i === "\\" && t.charAt(n + 1) === ".";
    if (s) {
      r += ".", n++;
      continue;
    }
    var a = i === ".";
    if (a) {
      e.push(r), r = "";
      continue;
    }
    r += i;
  }
  var o = r;
  return e.push(o), e;
}, gc = function() {
  return gc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, gc.apply(this, arguments);
}, yc = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}, mc = function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
};
function Nr(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var Fd = [
  Nr(Pd, "undefined", function() {
    return null;
  }, function() {
  }),
  Nr(Jx, "bigint", function(t) {
    return t.toString();
  }, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : t;
  }),
  Nr(Zx, "Date", function(t) {
    return t.toISOString();
  }, function(t) {
    return new Date(t);
  }),
  Nr(Yx, "Error", function(t, e) {
    var r = {
      name: t.name,
      message: t.message
    };
    return e.allowedErrorProps.forEach(function(n) {
      r[n] = t[n];
    }), r;
  }, function(t, e) {
    var r = new Error(t.message);
    return r.name = t.name, r.stack = t.stack, e.allowedErrorProps.forEach(function(n) {
      r[n] = t[n];
    }), r;
  }),
  Nr(Qx, "regexp", function(t) {
    return "" + t;
  }, function(t) {
    var e = t.slice(1, t.lastIndexOf("/")), r = t.slice(t.lastIndexOf("/") + 1);
    return new RegExp(e, r);
  }),
  Nr(
    cs,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(t) {
      return mc([], yc(t.values()));
    },
    function(t) {
      return new Set(t);
    }
  ),
  Nr(as, "map", function(t) {
    return mc([], yc(t.entries()));
  }, function(t) {
    return new Map(t);
  }),
  Nr(function(t) {
    return If(t) || Xx(t);
  }, "number", function(t) {
    return If(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Nr(function(t) {
    return t === 0 && 1 / t === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Nr(tO, "URL", function(t) {
    return t.toString();
  }, function(t) {
    return new URL(t);
  })
];
function Ko(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var Md = Ko(function(t, e) {
  if (Nd(t)) {
    var r = !!e.symbolRegistry.getIdentifier(t);
    return r;
  }
  return !1;
}, function(t, e) {
  var r = e.symbolRegistry.getIdentifier(t);
  return ["symbol", r];
}, function(t) {
  return t.description;
}, function(t, e, r) {
  var n = r.symbolRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown symbol");
  return n;
}), rO = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce(function(t, e) {
  return t[e.name] = e, t;
}, {}), Ud = Ko(eO, function(t) {
  return ["typed-array", t.constructor.name];
}, function(t) {
  return mc([], yc(t));
}, function(t, e) {
  var r = rO[e[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(t);
});
function jd(t, e) {
  if (t != null && t.constructor) {
    var r = !!e.classRegistry.getIdentifier(t.constructor);
    return r;
  }
  return !1;
}
var $d = Ko(jd, function(t, e) {
  var r = e.classRegistry.getIdentifier(t.constructor);
  return ["class", r];
}, function(t, e) {
  var r = e.classRegistry.getAllowedProps(t.constructor);
  if (!r)
    return gc({}, t);
  var n = {};
  return r.forEach(function(i) {
    n[i] = t[i];
  }), n;
}, function(t, e, r) {
  var n = r.classRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), t);
}), kd = Ko(function(t, e) {
  return !!e.customTransformerRegistry.findApplicable(t);
}, function(t, e) {
  var r = e.customTransformerRegistry.findApplicable(t);
  return ["custom", r.name];
}, function(t, e) {
  var r = e.customTransformerRegistry.findApplicable(t);
  return r.serialize(t);
}, function(t, e, r) {
  var n = r.customTransformerRegistry.findByName(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown custom value");
  return n.deserialize(t);
}), nO = [$d, Md, kd, Ud], Rf = function(t, e) {
  var r = Df(nO, function(i) {
    return i.isApplicable(t, e);
  });
  if (r)
    return {
      value: r.transform(t, e),
      type: r.annotation(t, e)
    };
  var n = Df(Fd, function(i) {
    return i.isApplicable(t, e);
  });
  if (n)
    return {
      value: n.transform(t, e),
      type: n.annotation
    };
}, qd = {};
Fd.forEach(function(t) {
  qd[t.annotation] = t;
});
var iO = function(t, e, r) {
  if (hn(e))
    switch (e[0]) {
      case "symbol":
        return Md.untransform(t, e, r);
      case "class":
        return $d.untransform(t, e, r);
      case "custom":
        return kd.untransform(t, e, r);
      case "typed-array":
        return Ud.untransform(t, e, r);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    var n = qd[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(t, r);
  }
}, Zn = function(t, e) {
  for (var r = t.keys(); e > 0; )
    r.next(), e--;
  return r.next().value;
};
function Bd(t) {
  if (to(t, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (to(t, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (to(t, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var sO = function(t, e) {
  Bd(e);
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (cs(t))
      t = Zn(t, +n);
    else if (as(t)) {
      var i = +n, s = +e[++r] == 0 ? "key" : "value", a = Zn(t, i);
      switch (s) {
        case "key":
          t = a;
          break;
        case "value":
          t = t.get(a);
          break;
      }
    } else
      t = t[n];
  }
  return t;
}, vc = function(t, e, r) {
  if (Bd(e), e.length === 0)
    return r(t);
  for (var n = t, i = 0; i < e.length - 1; i++) {
    var s = e[i];
    if (hn(n)) {
      var a = +s;
      n = n[a];
    } else if (os(n))
      n = n[s];
    else if (cs(n)) {
      var o = +s;
      n = Zn(n, o);
    } else if (as(n)) {
      var u = i === e.length - 2;
      if (u)
        break;
      var o = +s, c = +e[++i] == 0 ? "key" : "value", f = Zn(n, o);
      switch (c) {
        case "key":
          n = f;
          break;
        case "value":
          n = n.get(f);
          break;
      }
    }
  }
  var d = e[e.length - 1];
  if (hn(n) ? n[+d] = r(n[+d]) : os(n) && (n[d] = r(n[d])), cs(n)) {
    var p = Zn(n, +d), m = r(p);
    p !== m && (n.delete(p), n.add(m));
  }
  if (as(n)) {
    var o = +e[e.length - 2], v = Zn(n, o), c = +d == 0 ? "key" : "value";
    switch (c) {
      case "key": {
        var E = r(v);
        n.set(E, n.get(v)), E !== v && n.delete(v);
        break;
      }
      case "value": {
        n.set(v, r(n.get(v)));
        break;
      }
    }
  }
  return t;
}, Kr = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}, an = function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
};
function bc(t, e, r) {
  if (r === void 0 && (r = []), !!t) {
    if (!hn(t)) {
      hi(t, function(a, o) {
        return bc(a, e, an(an([], Kr(r)), Kr(qi(o))));
      });
      return;
    }
    var n = Kr(t, 2), i = n[0], s = n[1];
    s && hi(s, function(a, o) {
      bc(a, e, an(an([], Kr(r)), Kr(qi(o))));
    }), e(i, r);
  }
}
function oO(t, e, r) {
  return bc(e, function(n, i) {
    t = vc(t, i, function(s) {
      return iO(s, n, r);
    });
  }), t;
}
function aO(t, e) {
  function r(a, o) {
    var u = sO(t, qi(o));
    a.map(qi).forEach(function(c) {
      t = vc(t, c, function() {
        return u;
      });
    });
  }
  if (hn(e)) {
    var n = Kr(e, 2), i = n[0], s = n[1];
    i.forEach(function(a) {
      t = vc(t, qi(a), function() {
        return t;
      });
    }), s && hi(s, r);
  } else
    hi(e, r);
  return t;
}
var cO = function(t, e) {
  return os(t) || hn(t) || as(t) || cs(t) || jd(t, e);
};
function uO(t, e, r) {
  var n = r.get(t);
  n ? n.push(e) : r.set(t, [e]);
}
function lO(t) {
  var e = {}, r = void 0;
  return t.forEach(function(n) {
    if (!(n.length <= 1)) {
      var i = Kr(n.map(function(o) {
        return o.map(String);
      }).sort(function(o, u) {
        return o.length - u.length;
      })), s = i[0], a = i.slice(1);
      s.length === 0 ? r = a.map(wa) : e[wa(s)] = a.map(wa);
    }
  }), r ? pc(e) ? [r] : [r, e] : pc(e) ? void 0 : e;
}
var zd = function(t, e, r, n, i) {
  var s;
  if (n === void 0 && (n = []), i === void 0 && (i = []), Cf(t) || uO(t, n, e), !cO(t, r)) {
    var a = Rf(t, r);
    return a ? {
      transformedValue: a.value,
      annotations: [a.type]
    } : {
      transformedValue: t
    };
  }
  if (to(i, t))
    return {
      transformedValue: null
    };
  var o = Rf(t, r), u = (s = o == null ? void 0 : o.value) !== null && s !== void 0 ? s : t;
  Cf(t) || (i = an(an([], Kr(i)), [t]));
  var c = hn(u) ? [] : {}, f = {};
  return hi(u, function(d, p) {
    var m = zd(d, e, r, an(an([], Kr(n)), [p]), i);
    c[p] = m.transformedValue, hn(m.annotations) ? f[p] = m.annotations : os(m.annotations) && hi(m.annotations, function(v, E) {
      f[Ld(p) + "." + E] = v;
    });
  }), pc(f) ? {
    transformedValue: c,
    annotations: o ? [o.type] : void 0
  } : {
    transformedValue: c,
    annotations: o ? [o.type, f] : f
  };
};
function Vd(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function fO(t) {
  if (Vd(t) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function Tf(t) {
  return Vd(t) === "Array";
}
function hO(t, e, r, n, i) {
  const s = {}.propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
  s === "enumerable" && (t[e] = r), i && s === "nonenumerable" && Object.defineProperty(t, e, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function wc(t, e = {}) {
  if (Tf(t))
    return t.map((i) => wc(i, e));
  if (!fO(t))
    return t;
  const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertySymbols(t);
  return [...r, ...n].reduce((i, s) => {
    if (Tf(e.props) && !e.props.includes(s))
      return i;
    const a = t[s], o = wc(a, e);
    return hO(i, s, o, t, e.nonenumerable), i;
  }, {});
}
var Dn = function() {
  return Dn = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Dn.apply(this, arguments);
}, dO = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}, pO = function(t, e) {
  for (var r = 0, n = e.length, i = t.length; r < n; r++, i++)
    t[i] = e[r];
  return t;
}, Kd = (
  /** @class */
  function() {
    function t() {
      this.classRegistry = new $x(), this.symbolRegistry = new Ad(function(e) {
        var r;
        return (r = e.description) !== null && r !== void 0 ? r : "";
      }), this.customTransformerRegistry = new zx(), this.allowedErrorProps = [];
    }
    return t.prototype.serialize = function(e) {
      var r = /* @__PURE__ */ new Map(), n = zd(e, r, this), i = {
        json: n.transformedValue
      };
      n.annotations && (i.meta = Dn(Dn({}, i.meta), { values: n.annotations }));
      var s = lO(r);
      return s && (i.meta = Dn(Dn({}, i.meta), { referentialEqualities: s })), i;
    }, t.prototype.deserialize = function(e) {
      var r = e.json, n = e.meta, i = wc(r);
      return n != null && n.values && (i = oO(i, n.values, this)), n != null && n.referentialEqualities && (i = aO(i, n.referentialEqualities)), i;
    }, t.prototype.stringify = function(e) {
      return JSON.stringify(this.serialize(e));
    }, t.prototype.parse = function(e) {
      return this.deserialize(JSON.parse(e));
    }, t.prototype.registerClass = function(e, r) {
      this.classRegistry.register(e, r);
    }, t.prototype.registerSymbol = function(e, r) {
      this.symbolRegistry.register(e, r);
    }, t.prototype.registerCustom = function(e, r) {
      this.customTransformerRegistry.register(Dn({ name: r }, e));
    }, t.prototype.allowErrorProps = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (e = this.allowedErrorProps).push.apply(e, pO([], dO(r)));
    }, t.defaultInstance = new t(), t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t;
  }()
), gO = Kd.serialize, r3 = Kd.stringify;
function n3(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function i3(t, e) {
  return `${t}${e.charAt(0).toUpperCase() + e.slice(1)}`;
}
function s3({
  queryState: t,
  observerCount: e,
  isStale: r
}) {
  return t.fetchStatus === "fetching" ? "blue" : e ? t.fetchStatus === "paused" ? "purple" : r ? "yellow" : "green" : "gray";
}
function o3({
  status: t,
  isPaused: e
}) {
  return e ? "purple" : t === "error" ? "red" : t === "pending" ? "yellow" : t === "success" ? "green" : "gray";
}
function a3(t) {
  return t === "fresh" ? "green" : t === "stale" ? "yellow" : t === "paused" ? "purple" : t === "inactive" ? "gray" : "blue";
}
var c3 = (t, e = !1) => {
  const {
    json: r
  } = gO(t);
  return JSON.stringify(r, null, e ? 2 : void 0);
}, Vs = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, yO = (t, e) => t.queryHash.localeCompare(e.queryHash), Hd = (t, e) => t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1, mO = (t, e) => Vs(t) === Vs(e) ? Hd(t, e) : Vs(t) > Vs(e) ? 1 : -1, u3 = {
  status: mO,
  "query hash": yO,
  "last updated": Hd
}, Ks = (t) => t.state.isPaused ? 0 : t.state.status === "error" ? 2 : t.state.status === "pending" ? 1 : 3, Wd = (t, e) => t.state.submittedAt < e.state.submittedAt ? 1 : -1, vO = (t, e) => Ks(t) === Ks(e) ? Wd(t, e) : Ks(t) > Ks(e) ? 1 : -1, l3 = {
  status: vO,
  "last updated": Wd
}, f3 = (t) => t * parseFloat(getComputedStyle(document.documentElement).fontSize), h3 = () => {
  const [t, e] = Ht("dark");
  return YS(() => {
    const r = window.matchMedia("(prefers-color-scheme: dark)");
    e(r.matches ? "dark" : "light");
    const n = (i) => {
      e(i.matches ? "dark" : "light");
    };
    r.addEventListener("change", n), ss(() => r.removeEventListener("change", n));
  }), t;
}, Hs = (t, e, r) => {
  if (e.length === 0)
    return r;
  if (t instanceof Map) {
    const n = new Map(t);
    if (e.length === 1)
      return n.set(e[0], r), n;
    const [i, ...s] = e;
    return n.set(i, Hs(n.get(i), s, r)), n;
  }
  if (t instanceof Set) {
    const n = Hs(Array.from(t), e, r);
    return new Set(n);
  }
  if (Array.isArray(t)) {
    const n = [...t];
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [i, ...s] = e;
    return n[i] = Hs(n[i], s, r), n;
  }
  if (t instanceof Object) {
    const n = {
      ...t
    };
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [i, ...s] = e;
    return n[i] = Hs(n[i], s, r), n;
  }
  return t;
}, Ws = (t, e) => {
  if (t instanceof Map) {
    const r = new Map(t);
    if (e.length === 1)
      return r.delete(e[0]), r;
    const [n, ...i] = e;
    return r.set(n, Ws(r.get(n), i)), r;
  }
  if (t instanceof Set) {
    const r = Ws(Array.from(t), e);
    return new Set(r);
  }
  if (Array.isArray(t)) {
    const r = [...t];
    if (e.length === 1)
      return r.filter((s, a) => a.toString() !== e[0]);
    const [n, ...i] = e;
    return r[n] = Ws(r[n], i), r;
  }
  if (t instanceof Object) {
    const r = {
      ...t
    };
    if (e.length === 1)
      return delete r[e[0]], r;
    const [n, ...i] = e;
    return r[n] = Ws(r[n], i), r;
  }
  return t;
}, bO = (t) => {
  if (!t || document.querySelector("#_goober"))
    return;
  const r = document.createElement("style"), n = document.createTextNode("");
  r.appendChild(n), r.id = "_goober", r.setAttribute("nonce", t), document.head.appendChild(r);
}, ti, us, ls, fs, Rn, hs, ri, ni, ii, si, oi, ds, Af, wO = (Af = class {
  constructor(t) {
    sr(this, ti, void 0);
    sr(this, us, void 0);
    sr(this, ls, void 0);
    sr(this, fs, void 0);
    sr(this, Rn, !1);
    sr(this, hs, void 0);
    sr(this, ri, void 0);
    sr(this, ni, void 0);
    sr(this, ii, void 0);
    sr(this, si, void 0);
    sr(this, oi, void 0);
    sr(this, ds, void 0);
    const {
      client: e,
      queryFlavor: r,
      version: n,
      onlineManager: i,
      buttonPosition: s,
      position: a,
      initialIsOpen: o,
      errorTypes: u,
      styleNonce: c
    } = t;
    Yt(this, ti, Ht(e)), Yt(this, ls, r), Yt(this, fs, n), Yt(this, us, i), Yt(this, hs, c), Yt(this, ri, Ht(s)), Yt(this, ni, Ht(a)), Yt(this, ii, Ht(o)), Yt(this, si, Ht(u));
  }
  setButtonPosition(t) {
    vt(this, ri)[1](t);
  }
  setPosition(t) {
    vt(this, ni)[1](t);
  }
  setInitialIsOpen(t) {
    vt(this, ii)[1](t);
  }
  setErrorTypes(t) {
    vt(this, si)[1](t);
  }
  setClient(t) {
    vt(this, ti)[1](t);
  }
  mount(t) {
    if (vt(this, Rn))
      throw new Error("Devtools is already mounted");
    const e = Sx(() => {
      const [r] = vt(this, ri), [n] = vt(this, ni), [i] = vt(this, ii), [s] = vt(this, si), [a] = vt(this, ti);
      let o;
      vt(this, oi) ? o = vt(this, oi) : (o = fx(() => import("./N66J3ZXT-40fea053.js")), Yt(this, oi, o)), bO(vt(this, hs));
      const u = this;
      return ax(o, ux({
        get queryFlavor() {
          return vt(u, ls);
        },
        get version() {
          return vt(u, fs);
        },
        get onlineManager() {
          return vt(u, us);
        }
      }, {
        get client() {
          return a();
        },
        get buttonPosition() {
          return r();
        },
        get position() {
          return n();
        },
        get initialIsOpen() {
          return i();
        },
        get errorTypes() {
          return s();
        }
      }));
    }, t);
    Yt(this, Rn, !0), Yt(this, ds, e);
  }
  unmount() {
    var t;
    if (!vt(this, Rn))
      throw new Error("Devtools is not mounted");
    (t = vt(this, ds)) == null || t.call(this), Yt(this, Rn, !1);
  }
}, ti = new WeakMap(), us = new WeakMap(), ls = new WeakMap(), fs = new WeakMap(), Rn = new WeakMap(), hs = new WeakMap(), ri = new WeakMap(), ni = new WeakMap(), ii = new WeakMap(), si = new WeakMap(), oi = new WeakMap(), ds = new WeakMap(), Af);
function _O(t) {
  const e = yd(), r = t.client || e, n = xp(null), { buttonPosition: i, position: s, initialIsOpen: a, errorTypes: o, styleNonce: u } = t, [c] = ji(
    new wO({
      client: r,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: is,
      buttonPosition: i,
      position: s,
      initialIsOpen: a,
      errorTypes: o,
      styleNonce: u
    })
  );
  return At(() => {
    c.setClient(r);
  }, [r, c]), At(() => {
    i && c.setButtonPosition(i);
  }, [i, c]), At(() => {
    s && c.setPosition(s);
  }, [s, c]), At(() => {
    c.setInitialIsOpen(a || !1);
  }, [a, c]), At(() => {
    c.setErrorTypes(o || []);
  }, [o, c]), At(() => (n.current && c.mount(n.current), () => {
    c.unmount();
  }), [c]), /* @__PURE__ */ dn.createElement("div", { className: "tsqd-parent-container", ref: n });
}
var EO = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : _O;
const SO = new wS(), d3 = ({ dAppName: t, dAppDescription: e, dAppUrl: r, dAppIconURL: n, children: i, debugQuery: s = !1 }) => (At(() => {
  j1({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n
  }), ps.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ vf.jsxs(DS, { client: SO, children: [
  s && /* @__PURE__ */ vf.jsx(EO, { initialIsOpen: !1 }),
  i
] }));
export {
  wo as $,
  c3 as A,
  kD as B,
  ss as C,
  bd as D,
  BD as E,
  WD as F,
  HD as G,
  VD as H,
  KD as I,
  GD as J,
  Hs as K,
  JD as L,
  XD as M,
  f3 as N,
  i3 as O,
  n3 as P,
  It as Q,
  Pp as R,
  QD as S,
  Pf as T,
  An as U,
  lx as V,
  e3 as W,
  Ix as X,
  r3 as Y,
  YD as Z,
  ZD as _,
  $t as a,
  _D as a$,
  Ws as a0,
  zD as a1,
  t3 as a2,
  Sd as a3,
  bf as a4,
  Zl as a5,
  Za as a6,
  Qa as a7,
  Ja as a8,
  Ya as a9,
  py as aA,
  BO as aB,
  gy as aC,
  VO as aD,
  yy as aE,
  my as aF,
  Ey as aG,
  WO as aH,
  vy as aI,
  by as aJ,
  kO as aK,
  _y as aL,
  Vc as aM,
  jo as aN,
  Kc as aO,
  M1 as aP,
  U1 as aQ,
  tD as aR,
  sc as aS,
  dD as aT,
  pD as aU,
  gD as aV,
  yD as aW,
  mD as aX,
  vD as aY,
  bD as aZ,
  wD as a_,
  Hc as aa,
  kE as ab,
  jE as ac,
  $E as ad,
  qE as ae,
  BE as af,
  UE as ag,
  rD as ah,
  lD as ai,
  uD as aj,
  oD as ak,
  fD as al,
  iD as am,
  sD as an,
  aD as ao,
  cD as ap,
  nD as aq,
  hD as ar,
  ci as as,
  j1 as at,
  tt as au,
  dy as av,
  NO as aw,
  Sy as ax,
  ZO as ay,
  wy as az,
  u3 as b,
  ED as b0,
  SD as b1,
  xD as b2,
  OD as b3,
  sd as b4,
  xs as b5,
  zE as b6,
  od as b7,
  Dr as b8,
  jD as b9,
  DD as ba,
  ID as bb,
  CD as bc,
  RD as bd,
  TD as be,
  AD as bf,
  PD as bg,
  ND as bh,
  LD as bi,
  FD as bj,
  MD as bk,
  UD as bl,
  SO as bm,
  d3 as bn,
  Ht as c,
  xx as d,
  rr as e,
  ax as f,
  h3 as g,
  Ed as h,
  YS as i,
  hc as j,
  Pn as k,
  Dx as l,
  l3 as m,
  wu as n,
  IO as o,
  wr as p,
  qD as q,
  fc as r,
  Go as s,
  DO as t,
  s3 as u,
  o3 as v,
  Tx as w,
  ux as x,
  ai as y,
  a3 as z
};
