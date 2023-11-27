import Kn, { useDebugValue as Wu, useEffect as Kt, useState as Xt } from "react";
const ku = "@puzzlehq/sdk", Gu = "Puzzle SDK", Yu = "0.1.35", Ju = "Your portal to privacy", Qu = "./dist/puzzle.umd.js", Xu = "./dist/puzzle.es.js", Zu = "./dist/types/src/index.d.ts", el = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, tl = "module", rl = {
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types"
}, nl = {
  "@tanstack/react-query": "^4.29.5",
  "@trpc/client": "^10.9.0",
  "@trpc/react-query": "^10.9.0",
  "@trpc/server": "^10.8.1",
  "@types/debug": "^4.1.7",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.9.0",
  "@walletconnect/utils": "^2.9.2",
  debug: "^4.3.4",
  eventemitter3: "^5.0.1",
  events: "^3.3.0",
  immer: "^9.0.19",
  react: "^18.2.0",
  ws: "^8.13.0",
  zustand: "^4.3.9"
}, il = {
  "@puzzlehq/types": "1.0.4",
  "@types/chrome": "^0.0.228",
  "@types/node": "^18.11.18",
  "@types/react": "^18.0.27",
  "@types/react-dom": "^18.0.10",
  typescript: "^4.9.4",
  vite: "^4.4.7"
}, sl = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, ol = [
  "puzzle",
  "aleo",
  "aztec",
  "web3",
  "crypto\\"
], al = "Puzzle", cl = "ISC", ul = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, ll = "https://github.com/puzzlehq/puzzle-sdk#readme", hl = {
  name: ku,
  displayName: Gu,
  version: Yu,
  description: Ju,
  main: Qu,
  module: Xu,
  types: Zu,
  exports: el,
  type: tl,
  scripts: rl,
  dependencies: nl,
  devDependencies: il,
  repository: sl,
  keywords: ol,
  author: al,
  license: cl,
  bugs: ul,
  homepage: ll
}, fl = Symbol(), Us = Object.getPrototypeOf, Ci = /* @__PURE__ */ new WeakMap(), dl = (t) => t && (Ci.has(t) ? Ci.get(t) : Us(t) === Object.prototype || Us(t) === Array.prototype), pl = (t) => dl(t) && t[fl] || null, Ms = (t, e = !0) => {
  Ci.set(t, e);
}, si = (t) => typeof t == "object" && t !== null, nr = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakSet(), gl = (t = Object.is, e = (h, f) => new Proxy(h, f), r = (h) => si(h) && !On.has(h) && (Array.isArray(h) || !(Symbol.iterator in h)) && !(h instanceof WeakMap) && !(h instanceof WeakSet) && !(h instanceof Error) && !(h instanceof Number) && !(h instanceof Date) && !(h instanceof String) && !(h instanceof RegExp) && !(h instanceof ArrayBuffer), n = (h) => {
  switch (h.status) {
    case "fulfilled":
      return h.value;
    case "rejected":
      throw h.reason;
    default:
      throw h;
  }
}, i = /* @__PURE__ */ new WeakMap(), s = (h, f, d = n) => {
  const y = i.get(h);
  if ((y == null ? void 0 : y[0]) === f)
    return y[1];
  const v = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h));
  return Ms(v, !0), i.set(h, [f, v]), Reflect.ownKeys(h).forEach((E) => {
    if (Object.getOwnPropertyDescriptor(v, E))
      return;
    const I = Reflect.get(h, E), _ = {
      value: I,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (On.has(I))
      Ms(I, !1);
    else if (I instanceof Promise)
      delete _.value, _.get = () => d(I);
    else if (nr.has(I)) {
      const [F, w] = nr.get(
        I
      );
      _.value = s(
        F,
        w(),
        d
      );
    }
    Object.defineProperty(v, E, _);
  }), Object.preventExtensions(v);
}, u = /* @__PURE__ */ new WeakMap(), a = [1, 1], l = (h) => {
  if (!si(h))
    throw new Error("object required");
  const f = u.get(h);
  if (f)
    return f;
  let d = a[0];
  const y = /* @__PURE__ */ new Set(), v = (R, T = ++a[0]) => {
    d !== T && (d = T, y.forEach((U) => U(R, T)));
  };
  let E = a[1];
  const I = (R = ++a[1]) => (E !== R && !y.size && (E = R, F.forEach(([T]) => {
    const U = T[1](R);
    U > d && (d = U);
  })), d), _ = (R) => (T, U) => {
    const B = [...T];
    B[1] = [R, ...B[1]], v(B, U);
  }, F = /* @__PURE__ */ new Map(), w = (R, T) => {
    if (y.size) {
      const U = T[3](_(R));
      F.set(R, [T, U]);
    } else
      F.set(R, [T]);
  }, D = (R) => {
    var T;
    const U = F.get(R);
    U && (F.delete(R), (T = U[1]) == null || T.call(U));
  }, b = (R) => (y.add(R), y.size === 1 && F.forEach(([U, B], k) => {
    const x = U[3](_(k));
    F.set(k, [U, x]);
  }), () => {
    y.delete(R), y.size === 0 && F.forEach(([U, B], k) => {
      B && (B(), F.set(k, [U]));
    });
  }), S = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h)), o = e(S, {
    deleteProperty(R, T) {
      const U = Reflect.get(R, T);
      D(T);
      const B = Reflect.deleteProperty(R, T);
      return B && v(["delete", [T], U]), B;
    },
    set(R, T, U, B) {
      const k = Reflect.has(R, T), x = Reflect.get(R, T, B);
      if (k && (t(x, U) || u.has(U) && t(x, u.get(U))))
        return !0;
      D(T), si(U) && (U = pl(U) || U);
      let P = U;
      if (U instanceof Promise)
        U.then((V) => {
          U.status = "fulfilled", U.value = V, v(["resolve", [T], V]);
        }).catch((V) => {
          U.status = "rejected", U.reason = V, v(["reject", [T], V]);
        });
      else {
        !nr.has(U) && r(U) && (P = l(U));
        const V = !On.has(P) && nr.get(P);
        V && w(T, V);
      }
      return Reflect.set(R, T, P, B), v(["set", [T], U, x]), !0;
    }
  });
  u.set(h, o);
  const g = [
    S,
    I,
    s,
    b
  ];
  return nr.set(o, g), Reflect.ownKeys(h).forEach((R) => {
    const T = Object.getOwnPropertyDescriptor(
      h,
      R
    );
    "value" in T && (o[R] = h[R], delete T.value, delete T.writable), Object.defineProperty(S, R, T);
  }), o;
}) => [
  // public functions
  l,
  // shared state
  nr,
  On,
  // internal things
  t,
  e,
  r,
  n,
  i,
  s,
  u,
  a
], [yl] = gl();
function or(t = {}) {
  return yl(t);
}
function Er(t, e, r) {
  const n = nr.get(t);
  let i;
  const s = [], u = n[3];
  let a = !1;
  const h = u((f) => {
    if (s.push(f), r) {
      e(s.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, a && e(s.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, h();
  };
}
function bl(t, e) {
  const r = nr.get(t), [n, i, s] = r;
  return s(n, i(), e);
}
const Ze = or({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Ua = { state: Ze, subscribe(t) {
  return Er(Ze, () => t(Ze));
}, push(t, e) {
  t !== Ze.view && (Ze.view = t, e && (Ze.data = e), Ze.history.push(t));
}, reset(t) {
  Ze.view = t, Ze.history = [t];
}, replace(t) {
  Ze.history.length > 1 && (Ze.history[Ze.history.length - 1] = t, Ze.view = t);
}, goBack() {
  if (Ze.history.length > 1) {
    Ze.history.pop();
    const [t] = Ze.history.slice(-1);
    Ze.view = t;
  }
}, setData(t) {
  Ze.data = t;
} }, lt = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return lt.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return lt.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (lt.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let n = t;
  n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(e);
  return `${n}wc?uri=${i}`;
}, formatUniversalUrl(t, e, r) {
  if (!lt.isHttpUrl(t))
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
    localStorage.setItem(lt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(lt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(lt.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(lt.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = Ua.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, ml = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), ot = or({ enabled: ml, userSessionId: "", events: [], connectedWalletId: void 0 }), vl = { state: ot, subscribe(t) {
  return Er(ot.events, () => t(bl(ot.events[ot.events.length - 1])));
}, initialize() {
  ot.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (ot.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  ot.connectedWalletId = t;
}, click(t) {
  if (ot.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: ot.userSessionId, timestamp: Date.now(), data: t };
    ot.events.push(e);
  }
}, track(t) {
  if (ot.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: ot.userSessionId, timestamp: Date.now(), data: t };
    ot.events.push(e);
  }
}, view(t) {
  if (ot.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: ot.userSessionId, timestamp: Date.now(), data: t };
    ot.events.push(e);
  }
} }, $t = or({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Ft = { state: $t, subscribe(t) {
  return Er($t, () => t($t));
}, setChains(t) {
  $t.chains = t;
}, setWalletConnectUri(t) {
  $t.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  $t.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  $t.isCustomMobile = t;
}, setIsDataLoaded(t) {
  $t.isDataLoaded = t;
}, setIsUiLoaded(t) {
  $t.isUiLoaded = t;
}, setIsAuth(t) {
  $t.isAuth = t;
} }, xn = or({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Pr = { state: xn, subscribe(t) {
  return Er(xn, () => t(xn));
}, setConfig(t) {
  var e, r;
  vl.initialize(), Ft.setChains(t.chains), Ft.setIsAuth(!!t.enableAuthMode), Ft.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Ft.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), lt.setModalVersionInStorage(), Object.assign(xn, t);
} };
var wl = Object.defineProperty, $s = Object.getOwnPropertySymbols, _l = Object.prototype.hasOwnProperty, El = Object.prototype.propertyIsEnumerable, js = (t, e, r) => e in t ? wl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Sl = (t, e) => {
  for (var r in e || (e = {}))
    _l.call(e, r) && js(t, r, e[r]);
  if ($s)
    for (var r of $s(e))
      El.call(e, r) && js(t, r, e[r]);
  return t;
};
const Ai = "https://explorer-api.walletconnect.com", Ri = "wcm", Ti = "js-2.6.2";
async function Cn(t, e) {
  const r = Sl({ sdkType: Ri, sdkVersion: Ti }, e), n = new URL(t, Ai);
  return n.searchParams.append("projectId", Pr.state.projectId), Object.entries(r).forEach(([i, s]) => {
    s && n.searchParams.append(i, String(s));
  }), (await fetch(n)).json();
}
const fr = { async getDesktopListings(t) {
  return Cn("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return Cn("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return Cn("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return Cn("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${Ai}/w3m/v1/getWalletImage/${t}?projectId=${Pr.state.projectId}&sdkType=${Ri}&sdkVersion=${Ti}`;
}, getAssetImageUrl(t) {
  return `${Ai}/w3m/v1/getAssetImage/${t}?projectId=${Pr.state.projectId}&sdkType=${Ri}&sdkVersion=${Ti}`;
} };
var Dl = Object.defineProperty, qs = Object.getOwnPropertySymbols, Il = Object.prototype.hasOwnProperty, Ol = Object.prototype.propertyIsEnumerable, zs = (t, e, r) => e in t ? Dl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, xl = (t, e) => {
  for (var r in e || (e = {}))
    Il.call(e, r) && zs(t, r, e[r]);
  if (qs)
    for (var r of qs(e))
      Ol.call(e, r) && zs(t, r, e[r]);
  return t;
};
const Bs = lt.isMobile(), jt = or({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), Ab = { state: jt, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Pr.state;
  if (t === "NONE" || e === "ALL" && !t)
    return jt.recomendedWallets;
  if (lt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await fr.getAllListings(r), i = Object.values(n);
    i.sort((s, u) => {
      const a = t.indexOf(s.id), l = t.indexOf(u.id);
      return a - l;
    }), jt.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: n } = Ft.state, i = r == null ? void 0 : r.join(","), s = lt.isArray(e), u = { page: 1, sdks: n ? "auth_v1" : void 0, entries: lt.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: s ? e.join(",") : void 0 }, { listings: a } = Bs ? await fr.getMobileListings(u) : await fr.getDesktopListings(u);
    jt.recomendedWallets = Object.values(a);
  }
  return jt.recomendedWallets;
}, async getWallets(t) {
  const e = xl({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = Pr.state, { recomendedWallets: i } = jt;
  if (n === "ALL")
    return jt.wallets;
  i.length ? e.excludedIds = i.map((d) => d.id).join(",") : lt.isArray(r) && (e.excludedIds = r.join(",")), lt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), Ft.state.isAuth && (e.sdks = "auth_v1");
  const { page: s, search: u } = t, { listings: a, total: l } = Bs ? await fr.getMobileListings(e) : await fr.getDesktopListings(e), h = Object.values(a), f = u ? "search" : "wallets";
  return jt[f] = { listings: [...jt[f].listings, ...h], total: l, page: s ?? 1 }, { listings: h, total: l };
}, getWalletImageUrl(t) {
  return fr.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return fr.getAssetImageUrl(t);
}, resetSearch() {
  jt.search = { listings: [], total: 0, page: 1 };
} }, Or = or({ open: !1 }), oi = { state: Or, subscribe(t) {
  return Er(Or, () => t(Or));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = Ft.state;
    if (lt.removeWalletConnectDeepLink(), Ft.setWalletConnectUri(t == null ? void 0 : t.uri), Ft.setChains(t == null ? void 0 : t.chains), Ua.reset("ConnectWallet"), r && n)
      Or.open = !0, e();
    else {
      const i = setInterval(() => {
        const s = Ft.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(i), Or.open = !0, e());
      }, 200);
    }
  });
}, close() {
  Or.open = !1;
} };
var Cl = Object.defineProperty, Ks = Object.getOwnPropertySymbols, Al = Object.prototype.hasOwnProperty, Rl = Object.prototype.propertyIsEnumerable, Hs = (t, e, r) => e in t ? Cl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Tl = (t, e) => {
  for (var r in e || (e = {}))
    Al.call(e, r) && Hs(t, r, e[r]);
  if (Ks)
    for (var r of Ks(e))
      Rl.call(e, r) && Hs(t, r, e[r]);
  return t;
};
function Nl() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Br = or({ themeMode: Nl() ? "dark" : "light" }), Vs = { state: Br, subscribe(t) {
  return Er(Br, () => t(Br));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Br.themeMode = e), r && (Br.themeVariables = Tl({}, r));
} }, dr = or({ open: !1, message: "", variant: "success" }), Rb = { state: dr, subscribe(t) {
  return Er(dr, () => t(dr));
}, openToast(t, e) {
  dr.open = !0, dr.message = t, dr.variant = e;
}, closeToast() {
  dr.open = !1;
} };
let Pl = class {
  constructor(e) {
    this.openModal = oi.open, this.closeModal = oi.close, this.subscribeModal = oi.subscribe, this.setTheme = Vs.setThemeConfig, Vs.setThemeConfig(e), Pr.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-714c7b25.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Ft.setIsUiLoaded(!0);
    }
  }
};
var Et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ln(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Xi(t) {
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
var Zi = { exports: {} }, Tr = typeof Reflect == "object" ? Reflect : null, Ws = Tr && typeof Tr.apply == "function" ? Tr.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
}, Nn;
Tr && typeof Tr.ownKeys == "function" ? Nn = Tr.ownKeys : Object.getOwnPropertySymbols ? Nn = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Nn = function(e) {
  return Object.getOwnPropertyNames(e);
};
function Ll(t) {
  console && console.warn && console.warn(t);
}
var Ma = Number.isNaN || function(e) {
  return e !== e;
};
function Ie() {
  Ie.init.call(this);
}
Zi.exports = Ie;
Zi.exports.once = $l;
Ie.EventEmitter = Ie;
Ie.prototype._events = void 0;
Ie.prototype._eventsCount = 0;
Ie.prototype._maxListeners = void 0;
var ks = 10;
function Hn(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Ie, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return ks;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || Ma(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    ks = t;
  }
});
Ie.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ie.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || Ma(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function $a(t) {
  return t._maxListeners === void 0 ? Ie.defaultMaxListeners : t._maxListeners;
}
Ie.prototype.getMaxListeners = function() {
  return $a(this);
};
Ie.prototype.emit = function(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var i = e === "error", s = this._events;
  if (s !== void 0)
    i = i && s.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var u;
    if (r.length > 0 && (u = r[0]), u instanceof Error)
      throw u;
    var a = new Error("Unhandled error." + (u ? " (" + u.message + ")" : ""));
    throw a.context = u, a;
  }
  var l = s[e];
  if (l === void 0)
    return !1;
  if (typeof l == "function")
    Ws(l, this, r);
  else
    for (var h = l.length, f = Ka(l, h), n = 0; n < h; ++n)
      Ws(f[n], this, r);
  return !0;
};
function ja(t, e, r, n) {
  var i, s, u;
  if (Hn(r), s = t._events, s === void 0 ? (s = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (s.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), s = t._events), u = s[e]), u === void 0)
    u = s[e] = r, ++t._eventsCount;
  else if (typeof u == "function" ? u = s[e] = n ? [r, u] : [u, r] : n ? u.unshift(r) : u.push(r), i = $a(t), i > 0 && u.length > i && !u.warned) {
    u.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = u.length, Ll(a);
  }
  return t;
}
Ie.prototype.addListener = function(e, r) {
  return ja(this, e, r, !1);
};
Ie.prototype.on = Ie.prototype.addListener;
Ie.prototype.prependListener = function(e, r) {
  return ja(this, e, r, !0);
};
function Fl() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function qa(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, i = Fl.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
Ie.prototype.once = function(e, r) {
  return Hn(r), this.on(e, qa(this, e, r)), this;
};
Ie.prototype.prependOnceListener = function(e, r) {
  return Hn(r), this.prependListener(e, qa(this, e, r)), this;
};
Ie.prototype.removeListener = function(e, r) {
  var n, i, s, u, a;
  if (Hn(r), i = this._events, i === void 0)
    return this;
  if (n = i[e], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (s = -1, u = n.length - 1; u >= 0; u--)
      if (n[u] === r || n[u].listener === r) {
        a = n[u].listener, s = u;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? n.shift() : Ul(n, s), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, a || r);
  }
  return this;
};
Ie.prototype.off = Ie.prototype.removeListener;
Ie.prototype.removeAllListeners = function(e) {
  var r, n, i;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var s = Object.keys(n), u;
    for (i = 0; i < s.length; ++i)
      u = s[i], u !== "removeListener" && this.removeAllListeners(u);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--)
      this.removeListener(e, r[i]);
  return this;
};
function za(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var i = n[e];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Ml(i) : Ka(i, i.length);
}
Ie.prototype.listeners = function(e) {
  return za(this, e, !0);
};
Ie.prototype.rawListeners = function(e) {
  return za(this, e, !1);
};
Ie.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Ba.call(t, e);
};
Ie.prototype.listenerCount = Ba;
function Ba(t) {
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
Ie.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Nn(this._events) : [];
};
function Ka(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function Ul(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function Ml(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function $l(t, e) {
  return new Promise(function(r, n) {
    function i(u) {
      t.removeListener(e, s), n(u);
    }
    function s() {
      typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments));
    }
    Ha(t, e, s, { once: !0 }), e !== "error" && jl(t, i, { once: !0 });
  });
}
function jl(t, e, r) {
  typeof t.on == "function" && Ha(t, "error", e, r);
}
function Ha(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(s) {
      n.once && t.removeEventListener(e, i), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var At = Zi.exports;
const es = /* @__PURE__ */ ln(At);
var Vn = {};
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
var Ni = function(t, e) {
  return Ni = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, Ni(t, e);
};
function ql(t, e) {
  Ni(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Pi = function() {
  return Pi = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Pi.apply(this, arguments);
};
function zl(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function Bl(t, e, r, n) {
  var i = arguments.length, s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (u = t[a]) && (s = (i < 3 ? u(s) : i > 3 ? u(e, r, s) : u(e, r)) || s);
  return i > 3 && s && Object.defineProperty(e, r, s), s;
}
function Kl(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function Hl(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Vl(t, e, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(u) {
      u(s);
    });
  }
  return new (r || (r = Promise))(function(s, u) {
    function a(f) {
      try {
        h(n.next(f));
      } catch (d) {
        u(d);
      }
    }
    function l(f) {
      try {
        h(n.throw(f));
      } catch (d) {
        u(d);
      }
    }
    function h(f) {
      f.done ? s(f.value) : i(f.value).then(a, l);
    }
    h((n = n.apply(t, e || [])).next());
  });
}
function Wl(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, u;
  return u = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function a(h) {
    return function(f) {
      return l([h, f]);
    };
  }
  function l(h) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = h[0] & 2 ? i.return : h[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, h[1])).done)
          return s;
        switch (i = 0, s && (h = [h[0] & 2, s.value]), h[0]) {
          case 0:
          case 1:
            s = h;
            break;
          case 4:
            return r.label++, { value: h[1], done: !1 };
          case 5:
            r.label++, i = h[1], h = [0];
            continue;
          case 7:
            h = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (h[0] === 6 || h[0] === 2)) {
              r = 0;
              continue;
            }
            if (h[0] === 3 && (!s || h[1] > s[0] && h[1] < s[3])) {
              r.label = h[1];
              break;
            }
            if (h[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = h;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(h);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        h = e.call(t, r);
      } catch (f) {
        h = [6, f], i = 0;
      } finally {
        n = s = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function kl(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function Gl(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Li(t) {
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
function Va(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (a) {
    u = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return s;
}
function Yl() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Va(arguments[e]));
  return t;
}
function Jl() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), i = 0, e = 0; e < r; e++)
    for (var s = arguments[e], u = 0, a = s.length; u < a; u++, i++)
      n[i] = s[u];
  return n;
}
function sn(t) {
  return this instanceof sn ? (this.v = t, this) : new sn(t);
}
function Ql(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), i, s = [];
  return i = {}, u("next"), u("throw"), u("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function u(y) {
    n[y] && (i[y] = function(v) {
      return new Promise(function(E, I) {
        s.push([y, v, E, I]) > 1 || a(y, v);
      });
    });
  }
  function a(y, v) {
    try {
      l(n[y](v));
    } catch (E) {
      d(s[0][3], E);
    }
  }
  function l(y) {
    y.value instanceof sn ? Promise.resolve(y.value.v).then(h, f) : d(s[0][2], y);
  }
  function h(y) {
    a("next", y);
  }
  function f(y) {
    a("throw", y);
  }
  function d(y, v) {
    y(v), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function Xl(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(i, s) {
    e[i] = t[i] ? function(u) {
      return (r = !r) ? { value: sn(t[i](u)), done: i === "return" } : s ? s(u) : u;
    } : s;
  }
}
function Zl(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Li == "function" ? Li(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = t[s] && function(u) {
      return new Promise(function(a, l) {
        u = t[s](u), i(a, l, u.done, u.value);
      });
    };
  }
  function i(s, u, a, l) {
    Promise.resolve(l).then(function(h) {
      s({ value: h, done: a });
    }, u);
  }
}
function eh(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function th(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function rh(t) {
  return t && t.__esModule ? t : { default: t };
}
function nh(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function ih(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Pi;
  },
  __asyncDelegator: Xl,
  __asyncGenerator: Ql,
  __asyncValues: Zl,
  __await: sn,
  __awaiter: Vl,
  __classPrivateFieldGet: nh,
  __classPrivateFieldSet: ih,
  __createBinding: kl,
  __decorate: Bl,
  __exportStar: Gl,
  __extends: ql,
  __generator: Wl,
  __importDefault: rh,
  __importStar: th,
  __makeTemplateObject: eh,
  __metadata: Hl,
  __param: Kl,
  __read: Va,
  __rest: zl,
  __spread: Yl,
  __spreadArrays: Jl,
  __values: Li
}, Symbol.toStringTag, { value: "Module" })), Rt = /* @__PURE__ */ Xi(sh);
var hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
function oh(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
hn.safeJsonParse = oh;
function ah(t) {
  return typeof t == "string" ? t : JSON.stringify(t, (e, r) => typeof r > "u" ? null : r);
}
hn.safeJsonStringify = ah;
var Kr = { exports: {} }, Gs;
function ch() {
  return Gs || (Gs = 1, function() {
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
    }), typeof Et < "u" && Et.localStorage ? Kr.exports = Et.localStorage : typeof window < "u" && window.localStorage ? Kr.exports = window.localStorage : Kr.exports = new e();
  }()), Kr.exports;
}
var ai = {}, Hr = {}, Ys;
function uh() {
  if (Ys)
    return Hr;
  Ys = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.IKeyValueStorage = void 0;
  class t {
  }
  return Hr.IKeyValueStorage = t, Hr;
}
var Vr = {}, Js;
function lh() {
  if (Js)
    return Vr;
  Js = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.parseEntry = void 0;
  const t = hn;
  function e(r) {
    var n;
    return [r[0], t.safeJsonParse((n = r[1]) !== null && n !== void 0 ? n : "")];
  }
  return Vr.parseEntry = e, Vr;
}
var Qs;
function hh() {
  return Qs || (Qs = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Rt;
    e.__exportStar(uh(), t), e.__exportStar(lh(), t);
  }(ai)), ai;
}
Object.defineProperty(Vn, "__esModule", { value: !0 });
Vn.KeyValueStorage = void 0;
const Cr = Rt, Xs = hn, fh = Cr.__importDefault(ch()), dh = hh();
class Wa {
  constructor() {
    this.localStorage = fh.default;
  }
  getKeys() {
    return Cr.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return Cr.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(dh.parseEntry);
    });
  }
  getItem(e) {
    return Cr.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(e);
      if (r !== null)
        return Xs.safeJsonParse(r);
    });
  }
  setItem(e, r) {
    return Cr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(e, Xs.safeJsonStringify(r));
    });
  }
  removeItem(e) {
    return Cr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(e);
    });
  }
}
Vn.KeyValueStorage = Wa;
var ph = Vn.default = Wa, Lr = {}, Wr = {}, X = {}, ci = {}, kr = {}, Zs;
function gh() {
  if (Zs)
    return kr;
  Zs = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return kr.delay = t, kr;
}
var pr = {}, ui = {}, gr = {}, eo;
function yh() {
  return eo || (eo = 1, Object.defineProperty(gr, "__esModule", { value: !0 }), gr.ONE_THOUSAND = gr.ONE_HUNDRED = void 0, gr.ONE_HUNDRED = 100, gr.ONE_THOUSAND = 1e3), gr;
}
var li = {}, to;
function bh() {
  return to || (to = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(li)), li;
}
var ro;
function ka() {
  return ro || (ro = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Rt;
    e.__exportStar(yh(), t), e.__exportStar(bh(), t);
  }(ui)), ui;
}
var no;
function mh() {
  if (no)
    return pr;
  no = 1, Object.defineProperty(pr, "__esModule", { value: !0 }), pr.fromMiliseconds = pr.toMiliseconds = void 0;
  const t = ka();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  pr.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return pr.fromMiliseconds = r, pr;
}
var io;
function vh() {
  return io || (io = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Rt;
    e.__exportStar(gh(), t), e.__exportStar(mh(), t);
  }(ci)), ci;
}
var xr = {}, so;
function wh() {
  if (so)
    return xr;
  so = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.Watch = void 0;
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
  return xr.Watch = t, xr.default = t, xr;
}
var hi = {}, Gr = {}, oo;
function _h() {
  if (oo)
    return Gr;
  oo = 1, Object.defineProperty(Gr, "__esModule", { value: !0 }), Gr.IWatch = void 0;
  class t {
  }
  return Gr.IWatch = t, Gr;
}
var ao;
function Eh() {
  return ao || (ao = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Rt.__exportStar(_h(), t);
  }(hi)), hi;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Rt;
  e.__exportStar(vh(), t), e.__exportStar(wh(), t), e.__exportStar(Eh(), t), e.__exportStar(ka(), t);
})(X);
var fi = {}, Yr = {};
let Dt = class {
};
const Sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Dt
}, Symbol.toStringTag, { value: "Module" })), Dh = /* @__PURE__ */ Xi(Sh);
var co;
function Ih() {
  if (co)
    return Yr;
  co = 1, Object.defineProperty(Yr, "__esModule", { value: !0 }), Yr.IHeartBeat = void 0;
  const t = Dh;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return Yr.IHeartBeat = e, Yr;
}
var uo;
function Ga() {
  return uo || (uo = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Rt.__exportStar(Ih(), t);
  }(fi)), fi;
}
var di = {}, yr = {}, lo;
function Oh() {
  if (lo)
    return yr;
  lo = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.HEARTBEAT_EVENTS = yr.HEARTBEAT_INTERVAL = void 0;
  const t = X;
  return yr.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, yr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, yr;
}
var ho;
function Ya() {
  return ho || (ho = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Rt.__exportStar(Oh(), t);
  }(di)), di;
}
var fo;
function xh() {
  if (fo)
    return Wr;
  fo = 1, Object.defineProperty(Wr, "__esModule", { value: !0 }), Wr.HeartBeat = void 0;
  const t = Rt, e = At, r = X, n = Ga(), i = Ya();
  class s extends n.IHeartBeat {
    constructor(a) {
      super(a), this.events = new e.EventEmitter(), this.interval = i.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || i.HEARTBEAT_INTERVAL;
    }
    static init(a) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const l = new s(a);
        return yield l.init(), l;
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
    on(a, l) {
      this.events.on(a, l);
    }
    once(a, l) {
      this.events.once(a, l);
    }
    off(a, l) {
      this.events.off(a, l);
    }
    removeListener(a, l) {
      this.events.removeListener(a, l);
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
  return Wr.HeartBeat = s, Wr;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Rt;
  e.__exportStar(xh(), t), e.__exportStar(Ga(), t), e.__exportStar(Ya(), t);
})(Lr);
var ve = {}, pi, po;
function Ch() {
  if (po)
    return pi;
  po = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  pi = e;
  function e(r, n, i) {
    var s = i && i.stringify || t, u = 1;
    if (typeof r == "object" && r !== null) {
      var a = n.length + u;
      if (a === 1)
        return r;
      var l = new Array(a);
      l[0] = s(r);
      for (var h = 1; h < a; h++)
        l[h] = s(n[h]);
      return l.join(" ");
    }
    if (typeof r != "string")
      return r;
    var f = n.length;
    if (f === 0)
      return r;
    for (var d = "", y = 1 - u, v = -1, E = r && r.length || 0, I = 0; I < E; ) {
      if (r.charCodeAt(I) === 37 && I + 1 < E) {
        switch (v = v > -1 ? v : 0, r.charCodeAt(I + 1)) {
          case 100:
          case 102:
            if (y >= f || n[y] == null)
              break;
            v < I && (d += r.slice(v, I)), d += Number(n[y]), v = I + 2, I++;
            break;
          case 105:
            if (y >= f || n[y] == null)
              break;
            v < I && (d += r.slice(v, I)), d += Math.floor(Number(n[y])), v = I + 2, I++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= f || n[y] === void 0)
              break;
            v < I && (d += r.slice(v, I));
            var _ = typeof n[y];
            if (_ === "string") {
              d += "'" + n[y] + "'", v = I + 2, I++;
              break;
            }
            if (_ === "function") {
              d += n[y].name || "<anonymous>", v = I + 2, I++;
              break;
            }
            d += s(n[y]), v = I + 2, I++;
            break;
          case 115:
            if (y >= f)
              break;
            v < I && (d += r.slice(v, I)), d += String(n[y]), v = I + 2, I++;
            break;
          case 37:
            v < I && (d += r.slice(v, I)), d += "%", v = I + 2, I++, y--;
            break;
        }
        ++y;
      }
      ++I;
    }
    return v === -1 ? r : (v < E && (d += r.slice(v)), d);
  }
  return pi;
}
var gi, go;
function Ah() {
  if (go)
    return gi;
  go = 1;
  const t = Ch();
  gi = i;
  const e = S().console || {}, r = {
    mapHttpRequest: E,
    mapHttpResponse: E,
    wrapRequestSerializer: I,
    wrapResponseSerializer: I,
    wrapErrorSerializer: I,
    req: E,
    res: E,
    err: y
  };
  function n(p, o) {
    return Array.isArray(p) ? p.filter(function(R) {
      return R !== "!stdSerializers.err";
    }) : p === !0 ? Object.keys(o) : !1;
  }
  function i(p) {
    p = p || {}, p.browser = p.browser || {};
    const o = p.browser.transmit;
    if (o && typeof o.send != "function")
      throw Error("pino: transmit option must have a send function");
    const g = p.browser.write || e;
    p.browser.write && (p.browser.asObject = !0);
    const R = p.serializers || {}, T = n(p.browser.serialize, R);
    let U = p.browser.serialize;
    Array.isArray(p.browser.serialize) && p.browser.serialize.indexOf("!stdSerializers.err") > -1 && (U = !1);
    const B = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), p.enabled === !1 && (p.level = "silent");
    const k = p.level || "info", x = Object.create(g);
    x.log || (x.log = _), Object.defineProperty(x, "levelVal", {
      get: V
    }), Object.defineProperty(x, "level", {
      get: z,
      set: $
    });
    const P = {
      transmit: o,
      serialize: T,
      asObject: p.browser.asObject,
      levels: B,
      timestamp: v(p)
    };
    x.levels = i.levels, x.level = k, x.setMaxListeners = x.getMaxListeners = x.emit = x.addListener = x.on = x.prependListener = x.once = x.prependOnceListener = x.removeListener = x.removeAllListeners = x.listeners = x.listenerCount = x.eventNames = x.write = x.flush = _, x.serializers = R, x._serialize = T, x._stdErrSerialize = U, x.child = q, o && (x._logEvent = d());
    function V() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function z() {
      return this._level;
    }
    function $(M) {
      if (M !== "silent" && !this.levels.values[M])
        throw Error("unknown level " + M);
      this._level = M, s(P, x, "error", "log"), s(P, x, "fatal", "error"), s(P, x, "warn", "error"), s(P, x, "info", "log"), s(P, x, "debug", "log"), s(P, x, "trace", "log");
    }
    function q(M, K) {
      if (!M)
        throw new Error("missing bindings for child Pino");
      K = K || {}, T && M.serializers && (K.serializers = M.serializers);
      const te = K.serializers;
      if (T && te) {
        var H = Object.assign({}, R, te), Z = p.browser.serialize === !0 ? Object.keys(H) : T;
        delete M.serializers, l([M], Z, H, this._stdErrSerialize);
      }
      function J(ee) {
        this._childLevel = (ee._childLevel | 0) + 1, this.error = h(ee, M, "error"), this.fatal = h(ee, M, "fatal"), this.warn = h(ee, M, "warn"), this.info = h(ee, M, "info"), this.debug = h(ee, M, "debug"), this.trace = h(ee, M, "trace"), H && (this.serializers = H, this._serialize = Z), o && (this._logEvent = d(
          [].concat(ee._logEvent.bindings, M)
        ));
      }
      return J.prototype = this, new J(this);
    }
    return x;
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: F, epochTime: w, unixTime: D, isoTime: b });
  function s(p, o, g, R) {
    const T = Object.getPrototypeOf(o);
    o[g] = o.levelVal > o.levels.values[g] ? _ : T[g] ? T[g] : e[g] || e[R] || _, u(p, o, g);
  }
  function u(p, o, g) {
    !p.transmit && o[g] === _ || (o[g] = function(R) {
      return function() {
        const U = p.timestamp(), B = new Array(arguments.length), k = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var x = 0; x < B.length; x++)
          B[x] = arguments[x];
        if (p.serialize && !p.asObject && l(B, this._serialize, this.serializers, this._stdErrSerialize), p.asObject ? R.call(k, a(this, g, B, U)) : R.apply(k, B), p.transmit) {
          const P = p.transmit.level || o.level, V = i.levels.values[P], z = i.levels.values[g];
          if (z < V)
            return;
          f(this, {
            ts: U,
            methodLevel: g,
            methodValue: z,
            transmitLevel: P,
            transmitValue: i.levels.values[p.transmit.level || o.level],
            send: p.transmit.send,
            val: o.levelVal
          }, B);
        }
      };
    }(o[g]));
  }
  function a(p, o, g, R) {
    p._serialize && l(g, p._serialize, p.serializers, p._stdErrSerialize);
    const T = g.slice();
    let U = T[0];
    const B = {};
    R && (B.time = R), B.level = i.levels.values[o];
    let k = (p._childLevel | 0) + 1;
    if (k < 1 && (k = 1), U !== null && typeof U == "object") {
      for (; k-- && typeof T[0] == "object"; )
        Object.assign(B, T.shift());
      U = T.length ? t(T.shift(), T) : void 0;
    } else
      typeof U == "string" && (U = t(T.shift(), T));
    return U !== void 0 && (B.msg = U), B;
  }
  function l(p, o, g, R) {
    for (const T in p)
      if (R && p[T] instanceof Error)
        p[T] = i.stdSerializers.err(p[T]);
      else if (typeof p[T] == "object" && !Array.isArray(p[T]))
        for (const U in p[T])
          o && o.indexOf(U) > -1 && U in g && (p[T][U] = g[U](p[T][U]));
  }
  function h(p, o, g) {
    return function() {
      const R = new Array(1 + arguments.length);
      R[0] = o;
      for (var T = 1; T < R.length; T++)
        R[T] = arguments[T - 1];
      return p[g].apply(this, R);
    };
  }
  function f(p, o, g) {
    const R = o.send, T = o.ts, U = o.methodLevel, B = o.methodValue, k = o.val, x = p._logEvent.bindings;
    l(
      g,
      p._serialize || Object.keys(p.serializers),
      p.serializers,
      p._stdErrSerialize === void 0 ? !0 : p._stdErrSerialize
    ), p._logEvent.ts = T, p._logEvent.messages = g.filter(function(P) {
      return x.indexOf(P) === -1;
    }), p._logEvent.level.label = U, p._logEvent.level.value = B, R(U, p._logEvent, k), p._logEvent = d(x);
  }
  function d(p) {
    return {
      ts: 0,
      messages: [],
      bindings: p || [],
      level: { label: "", value: 0 }
    };
  }
  function y(p) {
    const o = {
      type: p.constructor.name,
      msg: p.message,
      stack: p.stack
    };
    for (const g in p)
      o[g] === void 0 && (o[g] = p[g]);
    return o;
  }
  function v(p) {
    return typeof p.timestamp == "function" ? p.timestamp : p.timestamp === !1 ? F : w;
  }
  function E() {
    return {};
  }
  function I(p) {
    return p;
  }
  function _() {
  }
  function F() {
    return !1;
  }
  function w() {
    return Date.now();
  }
  function D() {
    return Math.round(Date.now() / 1e3);
  }
  function b() {
    return new Date(Date.now()).toISOString();
  }
  function S() {
    function p(o) {
      return typeof o < "u" && o;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return p(self) || p(window) || p(this) || {};
    }
  }
  return gi;
}
var br = {}, yo;
function Ja() {
  return yo || (yo = 1, Object.defineProperty(br, "__esModule", { value: !0 }), br.PINO_CUSTOM_CONTEXT_KEY = br.PINO_LOGGER_DEFAULTS = void 0, br.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, br.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), br;
}
var ft = {}, bo;
function Rh() {
  if (bo)
    return ft;
  bo = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.generateChildLogger = ft.formatChildLoggerContext = ft.getLoggerContext = ft.setBrowserLoggerContext = ft.getBrowserLoggerContext = ft.getDefaultLoggerOptions = void 0;
  const t = Ja();
  function e(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  ft.getDefaultLoggerOptions = e;
  function r(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] || "";
  }
  ft.getBrowserLoggerContext = r;
  function n(a, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    return a[h] = l, a;
  }
  ft.setBrowserLoggerContext = n;
  function i(a, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    let h = "";
    return typeof a.bindings > "u" ? h = r(a, l) : h = a.bindings().context || "", h;
  }
  ft.getLoggerContext = i;
  function s(a, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(a, h);
    return f.trim() ? `${f}/${l}` : l;
  }
  ft.formatChildLoggerContext = s;
  function u(a, l, h = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(a, l, h), d = a.child({ context: f });
    return n(d, f, h);
  }
  return ft.generateChildLogger = u, ft;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = Rt, r = e.__importDefault(Ah());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Ja(), t), e.__exportStar(Rh(), t);
})(ve);
let Th = class extends Dt {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Nh = class extends Dt {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Ph = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, Lh = class extends Dt {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Fh = class extends Dt {
  constructor(e) {
    super();
  }
}, Uh = class {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}, Mh = class extends Dt {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, $h = class extends Dt {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, jh = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, qh = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, zh = class {
  constructor(e) {
    this.client = e;
  }
};
const Bh = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Kh = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function Qa(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Kh(t);
  } catch {
    return t;
  }
}
function ts(t) {
  return typeof t == "string" ? t : Bh(t) || "";
}
var rs = {}, Fr = {}, Wn = {}, kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.BrowserRandomSource = void 0;
const mo = 65536;
class Hh {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += mo)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, mo)));
    return r;
  }
}
kn.BrowserRandomSource = Hh;
function Vh(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Gn = {}, It = {};
Object.defineProperty(It, "__esModule", { value: !0 });
function Wh(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
It.wipe = Wh;
const kh = {}, Gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kh
}, Symbol.toStringTag, { value: "Module" })), Yh = /* @__PURE__ */ Xi(Gh);
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.NodeRandomSource = void 0;
const Jh = It;
class Qh {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Vh < "u") {
      const e = Yh;
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
    return (0, Jh.wipe)(r), n;
  }
}
Gn.NodeRandomSource = Qh;
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.SystemRandomSource = void 0;
const Xh = kn, Zh = Gn;
class ef {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Xh.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Zh.NodeRandomSource(), this._source.isAvailable) {
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
Wn.SystemRandomSource = ef;
var ie = {}, Xa = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(a, l) {
    var h = a >>> 16 & 65535, f = a & 65535, d = l >>> 16 & 65535, y = l & 65535;
    return f * y + (h * y + f * d << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(a, l) {
    return a + l | 0;
  }
  t.add = r;
  function n(a, l) {
    return a - l | 0;
  }
  t.sub = n;
  function i(a, l) {
    return a << l | a >>> 32 - l;
  }
  t.rotl = i;
  function s(a, l) {
    return a << 32 - l | a >>> l;
  }
  t.rotr = s;
  function u(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  t.isInteger = Number.isInteger || u, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(a) {
    return t.isInteger(a) && a >= -t.MAX_SAFE_INTEGER && a <= t.MAX_SAFE_INTEGER;
  };
})(Xa);
Object.defineProperty(ie, "__esModule", { value: !0 });
var Za = Xa;
function tf(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
ie.readInt16BE = tf;
function rf(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
ie.readUint16BE = rf;
function nf(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
ie.readInt16LE = nf;
function sf(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
ie.readUint16LE = sf;
function ec(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
ie.writeUint16BE = ec;
ie.writeInt16BE = ec;
function tc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
ie.writeUint16LE = tc;
ie.writeInt16LE = tc;
function Fi(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
ie.readInt32BE = Fi;
function Ui(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
ie.readUint32BE = Ui;
function Mi(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
ie.readInt32LE = Mi;
function $i(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
ie.readUint32LE = $i;
function Un(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
ie.writeUint32BE = Un;
ie.writeInt32BE = Un;
function Mn(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
ie.writeUint32LE = Mn;
ie.writeInt32LE = Mn;
function of(t, e) {
  e === void 0 && (e = 0);
  var r = Fi(t, e), n = Fi(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
ie.readInt64BE = of;
function af(t, e) {
  e === void 0 && (e = 0);
  var r = Ui(t, e), n = Ui(t, e + 4);
  return r * 4294967296 + n;
}
ie.readUint64BE = af;
function cf(t, e) {
  e === void 0 && (e = 0);
  var r = Mi(t, e), n = Mi(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
ie.readInt64LE = cf;
function uf(t, e) {
  e === void 0 && (e = 0);
  var r = $i(t, e), n = $i(t, e + 4);
  return n * 4294967296 + r;
}
ie.readUint64LE = uf;
function rc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Un(t / 4294967296 >>> 0, e, r), Un(t >>> 0, e, r + 4), e;
}
ie.writeUint64BE = rc;
ie.writeInt64BE = rc;
function nc(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Mn(t >>> 0, e, r), Mn(t / 4294967296 >>> 0, e, r + 4), e;
}
ie.writeUint64LE = nc;
ie.writeInt64LE = nc;
function lf(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = t / 8 + r - 1; s >= r; s--)
    n += e[s] * i, i *= 256;
  return n;
}
ie.readUintBE = lf;
function hf(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = r; s < r + t / 8; s++)
    n += e[s] * i, i *= 256;
  return n;
}
ie.readUintLE = hf;
function ff(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Za.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, s = t / 8 + n - 1; s >= n; s--)
    r[s] = e / i & 255, i *= 256;
  return r;
}
ie.writeUintBE = ff;
function df(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Za.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, s = n; s < n + t / 8; s++)
    r[s] = e / i & 255, i *= 256;
  return r;
}
ie.writeUintLE = df;
function pf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
ie.readFloat32BE = pf;
function gf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
ie.readFloat32LE = gf;
function yf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
ie.readFloat64BE = yf;
function bf(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
ie.readFloat64LE = bf;
function mf(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
ie.writeFloat32BE = mf;
function vf(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
ie.writeFloat32LE = vf;
function wf(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
ie.writeFloat64BE = wf;
function _f(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
ie.writeFloat64LE = _f;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Wn, r = ie, n = It;
  t.defaultRandomSource = new e.SystemRandomSource();
  function i(h, f = t.defaultRandomSource) {
    return f.randomBytes(h);
  }
  t.randomBytes = i;
  function s(h = t.defaultRandomSource) {
    const f = i(4, h), d = (0, r.readUint32LE)(f);
    return (0, n.wipe)(f), d;
  }
  t.randomUint32 = s;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(h, f = u, d = t.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let y = "";
    const v = f.length, E = 256 - 256 % v;
    for (; h > 0; ) {
      const I = i(Math.ceil(h * 256 / E), d);
      for (let _ = 0; _ < I.length && h > 0; _++) {
        const F = I[_];
        F < E && (y += f.charAt(F % v), h--);
      }
      (0, n.wipe)(I);
    }
    return y;
  }
  t.randomString = a;
  function l(h, f = u, d = t.defaultRandomSource) {
    const y = Math.ceil(h / (Math.log(f.length) / Math.LN2));
    return a(y, f, d);
  }
  t.randomStringForEntropy = l;
})(Fr);
var ic = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ie, r = It;
  t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
  var n = (
    /** @class */
    function() {
      function a() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return a.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, a.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, a.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
      }, a.prototype.update = function(l, h) {
        if (h === void 0 && (h = l.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && h > 0; )
            this._buffer[this._bufferLength++] = l[f++], h--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = l[f++], h--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, d = h / 536870912 | 0, y = h << 3, v = h % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var E = f + 1; E < v - 8; E++)
            this._buffer[E] = 0;
          e.writeUint32BE(d, this._buffer, v - 8), e.writeUint32BE(y, this._buffer, v - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, v), this._finished = !0;
        }
        for (var E = 0; E < this.digestLength / 8; E++)
          e.writeUint32BE(this._stateHi[E], l, E * 8), e.writeUint32BE(this._stateLo[E], l, E * 8 + 4);
        return this;
      }, a.prototype.digest = function() {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(l) {
        return this._stateHi.set(l.stateHi), this._stateLo.set(l.stateLo), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(l) {
        r.wipe(l.stateHi), r.wipe(l.stateLo), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
      }, a;
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
  function s(a, l, h, f, d, y, v) {
    for (var E = h[0], I = h[1], _ = h[2], F = h[3], w = h[4], D = h[5], b = h[6], S = h[7], p = f[0], o = f[1], g = f[2], R = f[3], T = f[4], U = f[5], B = f[6], k = f[7], x, P, V, z, $, q, M, K; v >= 128; ) {
      for (var te = 0; te < 16; te++) {
        var H = 8 * te + y;
        a[te] = e.readUint32BE(d, H), l[te] = e.readUint32BE(d, H + 4);
      }
      for (var te = 0; te < 80; te++) {
        var Z = E, J = I, ee = _, L = F, N = w, C = D, c = b, O = S, W = p, Y = o, he = g, be = R, de = T, _e = U, Ue = B, Ne = k;
        if (x = S, P = k, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = (w >>> 14 | T << 32 - 14) ^ (w >>> 18 | T << 32 - 18) ^ (T >>> 41 - 32 | w << 32 - (41 - 32)), P = (T >>> 14 | w << 32 - 14) ^ (T >>> 18 | w << 32 - 18) ^ (w >>> 41 - 32 | T << 32 - (41 - 32)), $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, x = w & D ^ ~w & b, P = T & U ^ ~T & B, $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, x = i[te * 2], P = i[te * 2 + 1], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, x = a[te % 16], P = l[te % 16], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, V = M & 65535 | K << 16, z = $ & 65535 | q << 16, x = V, P = z, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = (E >>> 28 | p << 32 - 28) ^ (p >>> 34 - 32 | E << 32 - (34 - 32)) ^ (p >>> 39 - 32 | E << 32 - (39 - 32)), P = (p >>> 28 | E << 32 - 28) ^ (E >>> 34 - 32 | p << 32 - (34 - 32)) ^ (E >>> 39 - 32 | p << 32 - (39 - 32)), $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, x = E & I ^ E & _ ^ I & _, P = p & o ^ p & g ^ o & g, $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, O = M & 65535 | K << 16, Ne = $ & 65535 | q << 16, x = L, P = be, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = V, P = z, $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, L = M & 65535 | K << 16, be = $ & 65535 | q << 16, I = Z, _ = J, F = ee, w = L, D = N, b = C, S = c, E = O, o = W, g = Y, R = he, T = be, U = de, B = _e, k = Ue, p = Ne, te % 16 === 15)
          for (var H = 0; H < 16; H++)
            x = a[H], P = l[H], $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = a[(H + 9) % 16], P = l[(H + 9) % 16], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, V = a[(H + 1) % 16], z = l[(H + 1) % 16], x = (V >>> 1 | z << 32 - 1) ^ (V >>> 8 | z << 32 - 8) ^ V >>> 7, P = (z >>> 1 | V << 32 - 1) ^ (z >>> 8 | V << 32 - 8) ^ (z >>> 7 | V << 32 - 7), $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, V = a[(H + 14) % 16], z = l[(H + 14) % 16], x = (V >>> 19 | z << 32 - 19) ^ (z >>> 61 - 32 | V << 32 - (61 - 32)) ^ V >>> 6, P = (z >>> 19 | V << 32 - 19) ^ (V >>> 61 - 32 | z << 32 - (61 - 32)) ^ (z >>> 6 | V << 32 - 6), $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, a[H] = M & 65535 | K << 16, l[H] = $ & 65535 | q << 16;
      }
      x = E, P = p, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[0], P = f[0], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[0] = E = M & 65535 | K << 16, f[0] = p = $ & 65535 | q << 16, x = I, P = o, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[1], P = f[1], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[1] = I = M & 65535 | K << 16, f[1] = o = $ & 65535 | q << 16, x = _, P = g, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[2], P = f[2], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[2] = _ = M & 65535 | K << 16, f[2] = g = $ & 65535 | q << 16, x = F, P = R, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[3], P = f[3], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[3] = F = M & 65535 | K << 16, f[3] = R = $ & 65535 | q << 16, x = w, P = T, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[4], P = f[4], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[4] = w = M & 65535 | K << 16, f[4] = T = $ & 65535 | q << 16, x = D, P = U, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[5], P = f[5], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[5] = D = M & 65535 | K << 16, f[5] = U = $ & 65535 | q << 16, x = b, P = B, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[6], P = f[6], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[6] = b = M & 65535 | K << 16, f[6] = B = $ & 65535 | q << 16, x = S, P = k, $ = P & 65535, q = P >>> 16, M = x & 65535, K = x >>> 16, x = h[7], P = f[7], $ += P & 65535, q += P >>> 16, M += x & 65535, K += x >>> 16, q += $ >>> 16, M += q >>> 16, K += M >>> 16, h[7] = S = M & 65535 | K << 16, f[7] = k = $ & 65535 | q << 16, y += 128, v -= 128;
    }
    return y;
  }
  function u(a) {
    var l = new n();
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  t.hash = u;
})(ic);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Fr, r = ic, n = It;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function i(L) {
    const N = new Float64Array(16);
    if (L)
      for (let C = 0; C < L.length; C++)
        N[C] = L[C];
    return N;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const u = i(), a = i([1]), l = i([
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
  ]), h = i([
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
  ]), y = i([
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
  function v(L, N) {
    for (let C = 0; C < 16; C++)
      L[C] = N[C] | 0;
  }
  function E(L) {
    let N = 1;
    for (let C = 0; C < 16; C++) {
      let c = L[C] + N + 65535;
      N = Math.floor(c / 65536), L[C] = c - N * 65536;
    }
    L[0] += N - 1 + 37 * (N - 1);
  }
  function I(L, N, C) {
    const c = ~(C - 1);
    for (let O = 0; O < 16; O++) {
      const W = c & (L[O] ^ N[O]);
      L[O] ^= W, N[O] ^= W;
    }
  }
  function _(L, N) {
    const C = i(), c = i();
    for (let O = 0; O < 16; O++)
      c[O] = N[O];
    E(c), E(c), E(c);
    for (let O = 0; O < 2; O++) {
      C[0] = c[0] - 65517;
      for (let Y = 1; Y < 15; Y++)
        C[Y] = c[Y] - 65535 - (C[Y - 1] >> 16 & 1), C[Y - 1] &= 65535;
      C[15] = c[15] - 32767 - (C[14] >> 16 & 1);
      const W = C[15] >> 16 & 1;
      C[14] &= 65535, I(c, C, 1 - W);
    }
    for (let O = 0; O < 16; O++)
      L[2 * O] = c[O] & 255, L[2 * O + 1] = c[O] >> 8;
  }
  function F(L, N) {
    let C = 0;
    for (let c = 0; c < 32; c++)
      C |= L[c] ^ N[c];
    return (1 & C - 1 >>> 8) - 1;
  }
  function w(L, N) {
    const C = new Uint8Array(32), c = new Uint8Array(32);
    return _(C, L), _(c, N), F(C, c);
  }
  function D(L) {
    const N = new Uint8Array(32);
    return _(N, L), N[0] & 1;
  }
  function b(L, N) {
    for (let C = 0; C < 16; C++)
      L[C] = N[2 * C] + (N[2 * C + 1] << 8);
    L[15] &= 32767;
  }
  function S(L, N, C) {
    for (let c = 0; c < 16; c++)
      L[c] = N[c] + C[c];
  }
  function p(L, N, C) {
    for (let c = 0; c < 16; c++)
      L[c] = N[c] - C[c];
  }
  function o(L, N, C) {
    let c, O, W = 0, Y = 0, he = 0, be = 0, de = 0, _e = 0, Ue = 0, Ne = 0, ye = 0, pe = 0, fe = 0, ue = 0, ce = 0, ae = 0, oe = 0, re = 0, le = 0, ge = 0, ne = 0, me = 0, we = 0, Se = 0, De = 0, Ee = 0, Tt = 0, Mt = 0, Zt = 0, wt = 0, cr = 0, jr = 0, vn = 0, Me = C[0], Pe = C[1], $e = C[2], je = C[3], qe = C[4], Le = C[5], Ve = C[6], We = C[7], ke = C[8], Ge = C[9], Ye = C[10], He = C[11], ze = C[12], Ce = C[13], Je = C[14], Qe = C[15];
    c = N[0], W += c * Me, Y += c * Pe, he += c * $e, be += c * je, de += c * qe, _e += c * Le, Ue += c * Ve, Ne += c * We, ye += c * ke, pe += c * Ge, fe += c * Ye, ue += c * He, ce += c * ze, ae += c * Ce, oe += c * Je, re += c * Qe, c = N[1], Y += c * Me, he += c * Pe, be += c * $e, de += c * je, _e += c * qe, Ue += c * Le, Ne += c * Ve, ye += c * We, pe += c * ke, fe += c * Ge, ue += c * Ye, ce += c * He, ae += c * ze, oe += c * Ce, re += c * Je, le += c * Qe, c = N[2], he += c * Me, be += c * Pe, de += c * $e, _e += c * je, Ue += c * qe, Ne += c * Le, ye += c * Ve, pe += c * We, fe += c * ke, ue += c * Ge, ce += c * Ye, ae += c * He, oe += c * ze, re += c * Ce, le += c * Je, ge += c * Qe, c = N[3], be += c * Me, de += c * Pe, _e += c * $e, Ue += c * je, Ne += c * qe, ye += c * Le, pe += c * Ve, fe += c * We, ue += c * ke, ce += c * Ge, ae += c * Ye, oe += c * He, re += c * ze, le += c * Ce, ge += c * Je, ne += c * Qe, c = N[4], de += c * Me, _e += c * Pe, Ue += c * $e, Ne += c * je, ye += c * qe, pe += c * Le, fe += c * Ve, ue += c * We, ce += c * ke, ae += c * Ge, oe += c * Ye, re += c * He, le += c * ze, ge += c * Ce, ne += c * Je, me += c * Qe, c = N[5], _e += c * Me, Ue += c * Pe, Ne += c * $e, ye += c * je, pe += c * qe, fe += c * Le, ue += c * Ve, ce += c * We, ae += c * ke, oe += c * Ge, re += c * Ye, le += c * He, ge += c * ze, ne += c * Ce, me += c * Je, we += c * Qe, c = N[6], Ue += c * Me, Ne += c * Pe, ye += c * $e, pe += c * je, fe += c * qe, ue += c * Le, ce += c * Ve, ae += c * We, oe += c * ke, re += c * Ge, le += c * Ye, ge += c * He, ne += c * ze, me += c * Ce, we += c * Je, Se += c * Qe, c = N[7], Ne += c * Me, ye += c * Pe, pe += c * $e, fe += c * je, ue += c * qe, ce += c * Le, ae += c * Ve, oe += c * We, re += c * ke, le += c * Ge, ge += c * Ye, ne += c * He, me += c * ze, we += c * Ce, Se += c * Je, De += c * Qe, c = N[8], ye += c * Me, pe += c * Pe, fe += c * $e, ue += c * je, ce += c * qe, ae += c * Le, oe += c * Ve, re += c * We, le += c * ke, ge += c * Ge, ne += c * Ye, me += c * He, we += c * ze, Se += c * Ce, De += c * Je, Ee += c * Qe, c = N[9], pe += c * Me, fe += c * Pe, ue += c * $e, ce += c * je, ae += c * qe, oe += c * Le, re += c * Ve, le += c * We, ge += c * ke, ne += c * Ge, me += c * Ye, we += c * He, Se += c * ze, De += c * Ce, Ee += c * Je, Tt += c * Qe, c = N[10], fe += c * Me, ue += c * Pe, ce += c * $e, ae += c * je, oe += c * qe, re += c * Le, le += c * Ve, ge += c * We, ne += c * ke, me += c * Ge, we += c * Ye, Se += c * He, De += c * ze, Ee += c * Ce, Tt += c * Je, Mt += c * Qe, c = N[11], ue += c * Me, ce += c * Pe, ae += c * $e, oe += c * je, re += c * qe, le += c * Le, ge += c * Ve, ne += c * We, me += c * ke, we += c * Ge, Se += c * Ye, De += c * He, Ee += c * ze, Tt += c * Ce, Mt += c * Je, Zt += c * Qe, c = N[12], ce += c * Me, ae += c * Pe, oe += c * $e, re += c * je, le += c * qe, ge += c * Le, ne += c * Ve, me += c * We, we += c * ke, Se += c * Ge, De += c * Ye, Ee += c * He, Tt += c * ze, Mt += c * Ce, Zt += c * Je, wt += c * Qe, c = N[13], ae += c * Me, oe += c * Pe, re += c * $e, le += c * je, ge += c * qe, ne += c * Le, me += c * Ve, we += c * We, Se += c * ke, De += c * Ge, Ee += c * Ye, Tt += c * He, Mt += c * ze, Zt += c * Ce, wt += c * Je, cr += c * Qe, c = N[14], oe += c * Me, re += c * Pe, le += c * $e, ge += c * je, ne += c * qe, me += c * Le, we += c * Ve, Se += c * We, De += c * ke, Ee += c * Ge, Tt += c * Ye, Mt += c * He, Zt += c * ze, wt += c * Ce, cr += c * Je, jr += c * Qe, c = N[15], re += c * Me, le += c * Pe, ge += c * $e, ne += c * je, me += c * qe, we += c * Le, Se += c * Ve, De += c * We, Ee += c * ke, Tt += c * Ge, Mt += c * Ye, Zt += c * He, wt += c * ze, cr += c * Ce, jr += c * Je, vn += c * Qe, W += 38 * le, Y += 38 * ge, he += 38 * ne, be += 38 * me, de += 38 * we, _e += 38 * Se, Ue += 38 * De, Ne += 38 * Ee, ye += 38 * Tt, pe += 38 * Mt, fe += 38 * Zt, ue += 38 * wt, ce += 38 * cr, ae += 38 * jr, oe += 38 * vn, O = 1, c = W + O + 65535, O = Math.floor(c / 65536), W = c - O * 65536, c = Y + O + 65535, O = Math.floor(c / 65536), Y = c - O * 65536, c = he + O + 65535, O = Math.floor(c / 65536), he = c - O * 65536, c = be + O + 65535, O = Math.floor(c / 65536), be = c - O * 65536, c = de + O + 65535, O = Math.floor(c / 65536), de = c - O * 65536, c = _e + O + 65535, O = Math.floor(c / 65536), _e = c - O * 65536, c = Ue + O + 65535, O = Math.floor(c / 65536), Ue = c - O * 65536, c = Ne + O + 65535, O = Math.floor(c / 65536), Ne = c - O * 65536, c = ye + O + 65535, O = Math.floor(c / 65536), ye = c - O * 65536, c = pe + O + 65535, O = Math.floor(c / 65536), pe = c - O * 65536, c = fe + O + 65535, O = Math.floor(c / 65536), fe = c - O * 65536, c = ue + O + 65535, O = Math.floor(c / 65536), ue = c - O * 65536, c = ce + O + 65535, O = Math.floor(c / 65536), ce = c - O * 65536, c = ae + O + 65535, O = Math.floor(c / 65536), ae = c - O * 65536, c = oe + O + 65535, O = Math.floor(c / 65536), oe = c - O * 65536, c = re + O + 65535, O = Math.floor(c / 65536), re = c - O * 65536, W += O - 1 + 37 * (O - 1), O = 1, c = W + O + 65535, O = Math.floor(c / 65536), W = c - O * 65536, c = Y + O + 65535, O = Math.floor(c / 65536), Y = c - O * 65536, c = he + O + 65535, O = Math.floor(c / 65536), he = c - O * 65536, c = be + O + 65535, O = Math.floor(c / 65536), be = c - O * 65536, c = de + O + 65535, O = Math.floor(c / 65536), de = c - O * 65536, c = _e + O + 65535, O = Math.floor(c / 65536), _e = c - O * 65536, c = Ue + O + 65535, O = Math.floor(c / 65536), Ue = c - O * 65536, c = Ne + O + 65535, O = Math.floor(c / 65536), Ne = c - O * 65536, c = ye + O + 65535, O = Math.floor(c / 65536), ye = c - O * 65536, c = pe + O + 65535, O = Math.floor(c / 65536), pe = c - O * 65536, c = fe + O + 65535, O = Math.floor(c / 65536), fe = c - O * 65536, c = ue + O + 65535, O = Math.floor(c / 65536), ue = c - O * 65536, c = ce + O + 65535, O = Math.floor(c / 65536), ce = c - O * 65536, c = ae + O + 65535, O = Math.floor(c / 65536), ae = c - O * 65536, c = oe + O + 65535, O = Math.floor(c / 65536), oe = c - O * 65536, c = re + O + 65535, O = Math.floor(c / 65536), re = c - O * 65536, W += O - 1 + 37 * (O - 1), L[0] = W, L[1] = Y, L[2] = he, L[3] = be, L[4] = de, L[5] = _e, L[6] = Ue, L[7] = Ne, L[8] = ye, L[9] = pe, L[10] = fe, L[11] = ue, L[12] = ce, L[13] = ae, L[14] = oe, L[15] = re;
  }
  function g(L, N) {
    o(L, N, N);
  }
  function R(L, N) {
    const C = i();
    let c;
    for (c = 0; c < 16; c++)
      C[c] = N[c];
    for (c = 253; c >= 0; c--)
      g(C, C), c !== 2 && c !== 4 && o(C, C, N);
    for (c = 0; c < 16; c++)
      L[c] = C[c];
  }
  function T(L, N) {
    const C = i();
    let c;
    for (c = 0; c < 16; c++)
      C[c] = N[c];
    for (c = 250; c >= 0; c--)
      g(C, C), c !== 1 && o(C, C, N);
    for (c = 0; c < 16; c++)
      L[c] = C[c];
  }
  function U(L, N) {
    const C = i(), c = i(), O = i(), W = i(), Y = i(), he = i(), be = i(), de = i(), _e = i();
    p(C, L[1], L[0]), p(_e, N[1], N[0]), o(C, C, _e), S(c, L[0], L[1]), S(_e, N[0], N[1]), o(c, c, _e), o(O, L[3], N[3]), o(O, O, h), o(W, L[2], N[2]), S(W, W, W), p(Y, c, C), p(he, W, O), S(be, W, O), S(de, c, C), o(L[0], Y, he), o(L[1], de, be), o(L[2], be, he), o(L[3], Y, de);
  }
  function B(L, N, C) {
    for (let c = 0; c < 4; c++)
      I(L[c], N[c], C);
  }
  function k(L, N) {
    const C = i(), c = i(), O = i();
    R(O, N[2]), o(C, N[0], O), o(c, N[1], O), _(L, c), L[31] ^= D(C) << 7;
  }
  function x(L, N, C) {
    v(L[0], u), v(L[1], a), v(L[2], a), v(L[3], u);
    for (let c = 255; c >= 0; --c) {
      const O = C[c / 8 | 0] >> (c & 7) & 1;
      B(L, N, O), U(N, L), U(L, L), B(L, N, O);
    }
  }
  function P(L, N) {
    const C = [i(), i(), i(), i()];
    v(C[0], f), v(C[1], d), v(C[2], a), o(C[3], f, d), x(L, C, N);
  }
  function V(L) {
    if (L.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const N = (0, r.hash)(L);
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const C = new Uint8Array(32), c = [i(), i(), i(), i()];
    P(c, N), k(C, c);
    const O = new Uint8Array(64);
    return O.set(L), O.set(C, 32), {
      publicKey: C,
      secretKey: O
    };
  }
  t.generateKeyPairFromSeed = V;
  function z(L) {
    const N = (0, e.randomBytes)(32, L), C = V(N);
    return (0, n.wipe)(N), C;
  }
  t.generateKeyPair = z;
  function $(L) {
    if (L.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(L.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = $;
  const q = new Float64Array([
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
  function M(L, N) {
    let C, c, O, W;
    for (c = 63; c >= 32; --c) {
      for (C = 0, O = c - 32, W = c - 12; O < W; ++O)
        N[O] += C - 16 * N[c] * q[O - (c - 32)], C = Math.floor((N[O] + 128) / 256), N[O] -= C * 256;
      N[O] += C, N[c] = 0;
    }
    for (C = 0, O = 0; O < 32; O++)
      N[O] += C - (N[31] >> 4) * q[O], C = N[O] >> 8, N[O] &= 255;
    for (O = 0; O < 32; O++)
      N[O] -= C * q[O];
    for (c = 0; c < 32; c++)
      N[c + 1] += N[c] >> 8, L[c] = N[c] & 255;
  }
  function K(L) {
    const N = new Float64Array(64);
    for (let C = 0; C < 64; C++)
      N[C] = L[C];
    for (let C = 0; C < 64; C++)
      L[C] = 0;
    M(L, N);
  }
  function te(L, N) {
    const C = new Float64Array(64), c = [i(), i(), i(), i()], O = (0, r.hash)(L.subarray(0, 32));
    O[0] &= 248, O[31] &= 127, O[31] |= 64;
    const W = new Uint8Array(64);
    W.set(O.subarray(32), 32);
    const Y = new r.SHA512();
    Y.update(W.subarray(32)), Y.update(N);
    const he = Y.digest();
    Y.clean(), K(he), P(c, he), k(W, c), Y.reset(), Y.update(W.subarray(0, 32)), Y.update(L.subarray(32)), Y.update(N);
    const be = Y.digest();
    K(be);
    for (let de = 0; de < 32; de++)
      C[de] = he[de];
    for (let de = 0; de < 32; de++)
      for (let _e = 0; _e < 32; _e++)
        C[de + _e] += be[de] * O[_e];
    return M(W.subarray(32), C), W;
  }
  t.sign = te;
  function H(L, N) {
    const C = i(), c = i(), O = i(), W = i(), Y = i(), he = i(), be = i();
    return v(L[2], a), b(L[1], N), g(O, L[1]), o(W, O, l), p(O, O, L[2]), S(W, L[2], W), g(Y, W), g(he, Y), o(be, he, Y), o(C, be, O), o(C, C, W), T(C, C), o(C, C, O), o(C, C, W), o(C, C, W), o(L[0], C, W), g(c, L[0]), o(c, c, W), w(c, O) && o(L[0], L[0], y), g(c, L[0]), o(c, c, W), w(c, O) ? -1 : (D(L[0]) === N[31] >> 7 && p(L[0], u, L[0]), o(L[3], L[0], L[1]), 0);
  }
  function Z(L, N, C) {
    const c = new Uint8Array(32), O = [i(), i(), i(), i()], W = [i(), i(), i(), i()];
    if (C.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (H(W, L))
      return !1;
    const Y = new r.SHA512();
    Y.update(C.subarray(0, 32)), Y.update(L), Y.update(N);
    const he = Y.digest();
    return K(he), x(O, W, he), P(W, C.subarray(32)), U(O, W), k(c, O), !F(C, c);
  }
  t.verify = Z;
  function J(L) {
    let N = [i(), i(), i(), i()];
    if (H(N, L))
      throw new Error("Ed25519: invalid public key");
    let C = i(), c = i(), O = N[1];
    S(C, a, O), p(c, a, O), R(c, c), o(C, C, c);
    let W = new Uint8Array(32);
    return _(W, C), W;
  }
  t.convertPublicKeyToX25519 = J;
  function ee(L) {
    const N = (0, r.hash)(L.subarray(0, 32));
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const C = new Uint8Array(N.subarray(0, 32));
    return (0, n.wipe)(N), C;
  }
  t.convertSecretKeyToX25519 = ee;
})(rs);
const Ef = "EdDSA", Sf = "JWT", sc = ".", oc = "base64url", Df = "utf8", If = "utf8", Of = ":", xf = "did", Cf = "key", vo = "base58btc", Af = "z", Rf = "K36", Tf = 32;
function ns(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function ac(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? ns(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function ji(t, e) {
  e || (e = t.reduce((i, s) => i + s.length, 0));
  const r = ac(e);
  let n = 0;
  for (const i of t)
    r.set(i, n), n += i.length;
  return ns(r);
}
function Nf(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = i;
  }
  var a = t.length, l = t.charAt(0), h = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
  function d(E) {
    if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (E.length === 0)
      return "";
    for (var I = 0, _ = 0, F = 0, w = E.length; F !== w && E[F] === 0; )
      F++, I++;
    for (var D = (w - F) * f + 1 >>> 0, b = new Uint8Array(D); F !== w; ) {
      for (var S = E[F], p = 0, o = D - 1; (S !== 0 || p < _) && o !== -1; o--, p++)
        S += 256 * b[o] >>> 0, b[o] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      _ = p, F++;
    }
    for (var g = D - _; g !== D && b[g] === 0; )
      g++;
    for (var R = l.repeat(I); g < D; ++g)
      R += t.charAt(b[g]);
    return R;
  }
  function y(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    var I = 0;
    if (E[I] !== " ") {
      for (var _ = 0, F = 0; E[I] === l; )
        _++, I++;
      for (var w = (E.length - I) * h + 1 >>> 0, D = new Uint8Array(w); E[I]; ) {
        var b = r[E.charCodeAt(I)];
        if (b === 255)
          return;
        for (var S = 0, p = w - 1; (b !== 0 || S < F) && p !== -1; p--, S++)
          b += a * D[p] >>> 0, D[p] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        F = S, I++;
      }
      if (E[I] !== " ") {
        for (var o = w - F; o !== w && D[o] === 0; )
          o++;
        for (var g = new Uint8Array(_ + (w - o)), R = _; o !== w; )
          g[R++] = D[o++];
        return g;
      }
    }
  }
  function v(E) {
    var I = y(E);
    if (I)
      return I;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: d,
    decodeUnsafe: y,
    decode: v
  };
}
var Pf = Nf, Lf = Pf;
const Ff = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Uf = (t) => new TextEncoder().encode(t), Mf = (t) => new TextDecoder().decode(t);
class $f {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class jf {
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
    return cc(this, e);
  }
}
class qf {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return cc(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const cc = (t, e) => new qf({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class zf {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new $f(e, r, n), this.decoder = new jf(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Yn = ({ name: t, prefix: e, encode: r, decode: n }) => new zf(t, e, r, n), fn = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = Lf(r, e);
  return Yn({
    prefix: t,
    name: e,
    encode: n,
    decode: (s) => Ff(i(s))
  });
}, Bf = (t, e, r, n) => {
  const i = {};
  for (let f = 0; f < e.length; ++f)
    i[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | d, a += r, a >= 8 && (a -= 8, u[h++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, Kf = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], u += 8; u > r; )
      u -= r, s += e[i & a >> u];
  if (u && (s += e[i & a << r - u]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, nt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Yn({
  prefix: e,
  name: t,
  encode(i) {
    return Kf(i, n, r);
  },
  decode(i) {
    return Bf(i, n, r, t);
  }
}), Hf = Yn({
  prefix: "\0",
  name: "identity",
  encode: (t) => Mf(t),
  decode: (t) => Uf(t)
}), Vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Hf
}, Symbol.toStringTag, { value: "Module" })), Wf = nt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Wf
}, Symbol.toStringTag, { value: "Module" })), Gf = nt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Gf
}, Symbol.toStringTag, { value: "Module" })), Jf = fn({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Jf
}, Symbol.toStringTag, { value: "Module" })), Xf = nt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Zf = nt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Xf,
  base16upper: Zf
}, Symbol.toStringTag, { value: "Module" })), td = nt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), rd = nt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), nd = nt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), id = nt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), sd = nt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), od = nt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), ad = nt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), cd = nt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), ud = nt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: td,
  base32hex: sd,
  base32hexpad: ad,
  base32hexpadupper: cd,
  base32hexupper: od,
  base32pad: nd,
  base32padupper: id,
  base32upper: rd,
  base32z: ud
}, Symbol.toStringTag, { value: "Module" })), hd = fn({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), fd = fn({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: hd,
  base36upper: fd
}, Symbol.toStringTag, { value: "Module" })), pd = fn({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), gd = fn({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: pd,
  base58flickr: gd
}, Symbol.toStringTag, { value: "Module" })), bd = nt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), md = nt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), vd = nt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), wd = nt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), _d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: bd,
  base64pad: md,
  base64url: vd,
  base64urlpad: wd
}, Symbol.toStringTag, { value: "Module" })), uc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Ed = uc.reduce((t, e, r) => (t[r] = e, t), []), Sd = uc.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Dd(t) {
  return t.reduce((e, r) => (e += Ed[r], e), "");
}
function Id(t) {
  const e = [];
  for (const r of t) {
    const n = Sd[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Od = Yn({
  prefix: "🚀",
  name: "base256emoji",
  encode: Dd,
  decode: Id
}), xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Od
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const wo = {
  ...Vf,
  ...kf,
  ...Yf,
  ...Qf,
  ...ed,
  ...ld,
  ...dd,
  ...yd,
  ..._d,
  ...xd
};
function lc(t, e, r, n) {
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
const _o = lc("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), yi = lc("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = ac(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), hc = {
  utf8: _o,
  "utf-8": _o,
  hex: wo.base16,
  latin1: yi,
  ascii: yi,
  binary: yi,
  ...wo
};
function yt(t, e = "utf8") {
  const r = hc[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function vt(t, e = "utf8") {
  const r = hc[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? ns(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function $n(t) {
  return yt(vt(ts(t), Df), oc);
}
function fc(t) {
  const e = vt(Rf, vo), r = Af + yt(ji([e, t]), vo);
  return [xf, Cf, r].join(Of);
}
function Cd(t) {
  return yt(t, oc);
}
function Ad(t) {
  return vt([$n(t.header), $n(t.payload)].join(sc), If);
}
function Rd(t) {
  return [
    $n(t.header),
    $n(t.payload),
    Cd(t.signature)
  ].join(sc);
}
function Eo(t = Fr.randomBytes(Tf)) {
  return rs.generateKeyPairFromSeed(t);
}
async function Td(t, e, r, n, i = X.fromMiliseconds(Date.now())) {
  const s = { alg: Ef, typ: Sf }, u = fc(n.publicKey), a = i + r, l = { iss: u, sub: t, aud: e, iat: i, exp: a }, h = Ad({ header: s, payload: l }), f = rs.sign(n.secretKey, h);
  return Rd({ header: s, payload: l, signature: f });
}
var is = {}, Jn = {};
Object.defineProperty(Jn, "__esModule", { value: !0 });
var at = ie, qi = It, Nd = 20;
function Pd(t, e, r) {
  for (var n = 1634760805, i = 857760878, s = 2036477234, u = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], v = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], E = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], I = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], _ = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], F = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], w = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], D = n, b = i, S = s, p = u, o = a, g = l, R = h, T = f, U = d, B = y, k = v, x = E, P = I, V = _, z = F, $ = w, q = 0; q < Nd; q += 2)
    D = D + o | 0, P ^= D, P = P >>> 32 - 16 | P << 16, U = U + P | 0, o ^= U, o = o >>> 32 - 12 | o << 12, b = b + g | 0, V ^= b, V = V >>> 32 - 16 | V << 16, B = B + V | 0, g ^= B, g = g >>> 32 - 12 | g << 12, S = S + R | 0, z ^= S, z = z >>> 32 - 16 | z << 16, k = k + z | 0, R ^= k, R = R >>> 32 - 12 | R << 12, p = p + T | 0, $ ^= p, $ = $ >>> 32 - 16 | $ << 16, x = x + $ | 0, T ^= x, T = T >>> 32 - 12 | T << 12, S = S + R | 0, z ^= S, z = z >>> 32 - 8 | z << 8, k = k + z | 0, R ^= k, R = R >>> 32 - 7 | R << 7, p = p + T | 0, $ ^= p, $ = $ >>> 32 - 8 | $ << 8, x = x + $ | 0, T ^= x, T = T >>> 32 - 7 | T << 7, b = b + g | 0, V ^= b, V = V >>> 32 - 8 | V << 8, B = B + V | 0, g ^= B, g = g >>> 32 - 7 | g << 7, D = D + o | 0, P ^= D, P = P >>> 32 - 8 | P << 8, U = U + P | 0, o ^= U, o = o >>> 32 - 7 | o << 7, D = D + g | 0, $ ^= D, $ = $ >>> 32 - 16 | $ << 16, k = k + $ | 0, g ^= k, g = g >>> 32 - 12 | g << 12, b = b + R | 0, P ^= b, P = P >>> 32 - 16 | P << 16, x = x + P | 0, R ^= x, R = R >>> 32 - 12 | R << 12, S = S + T | 0, V ^= S, V = V >>> 32 - 16 | V << 16, U = U + V | 0, T ^= U, T = T >>> 32 - 12 | T << 12, p = p + o | 0, z ^= p, z = z >>> 32 - 16 | z << 16, B = B + z | 0, o ^= B, o = o >>> 32 - 12 | o << 12, S = S + T | 0, V ^= S, V = V >>> 32 - 8 | V << 8, U = U + V | 0, T ^= U, T = T >>> 32 - 7 | T << 7, p = p + o | 0, z ^= p, z = z >>> 32 - 8 | z << 8, B = B + z | 0, o ^= B, o = o >>> 32 - 7 | o << 7, b = b + R | 0, P ^= b, P = P >>> 32 - 8 | P << 8, x = x + P | 0, R ^= x, R = R >>> 32 - 7 | R << 7, D = D + g | 0, $ ^= D, $ = $ >>> 32 - 8 | $ << 8, k = k + $ | 0, g ^= k, g = g >>> 32 - 7 | g << 7;
  at.writeUint32LE(D + n | 0, t, 0), at.writeUint32LE(b + i | 0, t, 4), at.writeUint32LE(S + s | 0, t, 8), at.writeUint32LE(p + u | 0, t, 12), at.writeUint32LE(o + a | 0, t, 16), at.writeUint32LE(g + l | 0, t, 20), at.writeUint32LE(R + h | 0, t, 24), at.writeUint32LE(T + f | 0, t, 28), at.writeUint32LE(U + d | 0, t, 32), at.writeUint32LE(B + y | 0, t, 36), at.writeUint32LE(k + v | 0, t, 40), at.writeUint32LE(x + E | 0, t, 44), at.writeUint32LE(P + I | 0, t, 48), at.writeUint32LE(V + _ | 0, t, 52), at.writeUint32LE(z + F | 0, t, 56), at.writeUint32LE($ + w | 0, t, 60);
}
function dc(t, e, r, n, i) {
  if (i === void 0 && (i = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, u;
  if (i === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    s = new Uint8Array(16), u = s.length - e.length, s.set(e, u);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    s = e, u = i;
  }
  for (var a = new Uint8Array(64), l = 0; l < r.length; l += 64) {
    Pd(a, s, t);
    for (var h = l; h < l + 64 && h < r.length; h++)
      n[h] = r[h] ^ a[h - l];
    Fd(s, 0, u);
  }
  return qi.wipe(a), i === 0 && qi.wipe(s), n;
}
Jn.streamXOR = dc;
function Ld(t, e, r, n) {
  return n === void 0 && (n = 0), qi.wipe(r), dc(t, e, r, r, n);
}
Jn.stream = Ld;
function Fd(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var pc = {}, ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
function Ud(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
ar.select = Ud;
function Md(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
ar.lessOrEqual = Md;
function gc(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
ar.compare = gc;
function $d(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : gc(t, e) !== 0;
}
ar.equal = $d;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ar, r = It;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function u(a) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var l = a[0] | a[1] << 8;
        this._r[0] = l & 8191;
        var h = a[2] | a[3] << 8;
        this._r[1] = (l >>> 13 | h << 3) & 8191;
        var f = a[4] | a[5] << 8;
        this._r[2] = (h >>> 10 | f << 6) & 7939;
        var d = a[6] | a[7] << 8;
        this._r[3] = (f >>> 7 | d << 9) & 8191;
        var y = a[8] | a[9] << 8;
        this._r[4] = (d >>> 4 | y << 12) & 255, this._r[5] = y >>> 1 & 8190;
        var v = a[10] | a[11] << 8;
        this._r[6] = (y >>> 14 | v << 2) & 8191;
        var E = a[12] | a[13] << 8;
        this._r[7] = (v >>> 11 | E << 5) & 8065;
        var I = a[14] | a[15] << 8;
        this._r[8] = (E >>> 8 | I << 8) & 8191, this._r[9] = I >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return u.prototype._blocks = function(a, l, h) {
        for (var f = this._fin ? 0 : 2048, d = this._h[0], y = this._h[1], v = this._h[2], E = this._h[3], I = this._h[4], _ = this._h[5], F = this._h[6], w = this._h[7], D = this._h[8], b = this._h[9], S = this._r[0], p = this._r[1], o = this._r[2], g = this._r[3], R = this._r[4], T = this._r[5], U = this._r[6], B = this._r[7], k = this._r[8], x = this._r[9]; h >= 16; ) {
          var P = a[l + 0] | a[l + 1] << 8;
          d += P & 8191;
          var V = a[l + 2] | a[l + 3] << 8;
          y += (P >>> 13 | V << 3) & 8191;
          var z = a[l + 4] | a[l + 5] << 8;
          v += (V >>> 10 | z << 6) & 8191;
          var $ = a[l + 6] | a[l + 7] << 8;
          E += (z >>> 7 | $ << 9) & 8191;
          var q = a[l + 8] | a[l + 9] << 8;
          I += ($ >>> 4 | q << 12) & 8191, _ += q >>> 1 & 8191;
          var M = a[l + 10] | a[l + 11] << 8;
          F += (q >>> 14 | M << 2) & 8191;
          var K = a[l + 12] | a[l + 13] << 8;
          w += (M >>> 11 | K << 5) & 8191;
          var te = a[l + 14] | a[l + 15] << 8;
          D += (K >>> 8 | te << 8) & 8191, b += te >>> 5 | f;
          var H = 0, Z = H;
          Z += d * S, Z += y * (5 * x), Z += v * (5 * k), Z += E * (5 * B), Z += I * (5 * U), H = Z >>> 13, Z &= 8191, Z += _ * (5 * T), Z += F * (5 * R), Z += w * (5 * g), Z += D * (5 * o), Z += b * (5 * p), H += Z >>> 13, Z &= 8191;
          var J = H;
          J += d * p, J += y * S, J += v * (5 * x), J += E * (5 * k), J += I * (5 * B), H = J >>> 13, J &= 8191, J += _ * (5 * U), J += F * (5 * T), J += w * (5 * R), J += D * (5 * g), J += b * (5 * o), H += J >>> 13, J &= 8191;
          var ee = H;
          ee += d * o, ee += y * p, ee += v * S, ee += E * (5 * x), ee += I * (5 * k), H = ee >>> 13, ee &= 8191, ee += _ * (5 * B), ee += F * (5 * U), ee += w * (5 * T), ee += D * (5 * R), ee += b * (5 * g), H += ee >>> 13, ee &= 8191;
          var L = H;
          L += d * g, L += y * o, L += v * p, L += E * S, L += I * (5 * x), H = L >>> 13, L &= 8191, L += _ * (5 * k), L += F * (5 * B), L += w * (5 * U), L += D * (5 * T), L += b * (5 * R), H += L >>> 13, L &= 8191;
          var N = H;
          N += d * R, N += y * g, N += v * o, N += E * p, N += I * S, H = N >>> 13, N &= 8191, N += _ * (5 * x), N += F * (5 * k), N += w * (5 * B), N += D * (5 * U), N += b * (5 * T), H += N >>> 13, N &= 8191;
          var C = H;
          C += d * T, C += y * R, C += v * g, C += E * o, C += I * p, H = C >>> 13, C &= 8191, C += _ * S, C += F * (5 * x), C += w * (5 * k), C += D * (5 * B), C += b * (5 * U), H += C >>> 13, C &= 8191;
          var c = H;
          c += d * U, c += y * T, c += v * R, c += E * g, c += I * o, H = c >>> 13, c &= 8191, c += _ * p, c += F * S, c += w * (5 * x), c += D * (5 * k), c += b * (5 * B), H += c >>> 13, c &= 8191;
          var O = H;
          O += d * B, O += y * U, O += v * T, O += E * R, O += I * g, H = O >>> 13, O &= 8191, O += _ * o, O += F * p, O += w * S, O += D * (5 * x), O += b * (5 * k), H += O >>> 13, O &= 8191;
          var W = H;
          W += d * k, W += y * B, W += v * U, W += E * T, W += I * R, H = W >>> 13, W &= 8191, W += _ * g, W += F * o, W += w * p, W += D * S, W += b * (5 * x), H += W >>> 13, W &= 8191;
          var Y = H;
          Y += d * x, Y += y * k, Y += v * B, Y += E * U, Y += I * T, H = Y >>> 13, Y &= 8191, Y += _ * R, Y += F * g, Y += w * o, Y += D * p, Y += b * S, H += Y >>> 13, Y &= 8191, H = (H << 2) + H | 0, H = H + Z | 0, Z = H & 8191, H = H >>> 13, J += H, d = Z, y = J, v = ee, E = L, I = N, _ = C, F = c, w = O, D = W, b = Y, l += 16, h -= 16;
        }
        this._h[0] = d, this._h[1] = y, this._h[2] = v, this._h[3] = E, this._h[4] = I, this._h[5] = _, this._h[6] = F, this._h[7] = w, this._h[8] = D, this._h[9] = b;
      }, u.prototype.finish = function(a, l) {
        l === void 0 && (l = 0);
        var h = new Uint16Array(10), f, d, y, v;
        if (this._leftover) {
          for (v = this._leftover, this._buffer[v++] = 1; v < 16; v++)
            this._buffer[v] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, v = 2; v < 10; v++)
          this._h[v] += f, f = this._h[v] >>> 13, this._h[v] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, h[0] = this._h[0] + 5, f = h[0] >>> 13, h[0] &= 8191, v = 1; v < 10; v++)
          h[v] = this._h[v] + f, f = h[v] >>> 13, h[v] &= 8191;
        for (h[9] -= 8192, d = (f ^ 1) - 1, v = 0; v < 10; v++)
          h[v] &= d;
        for (d = ~d, v = 0; v < 10; v++)
          this._h[v] = this._h[v] & d | h[v];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, y = this._h[0] + this._pad[0], this._h[0] = y & 65535, v = 1; v < 8; v++)
          y = (this._h[v] + this._pad[v] | 0) + (y >>> 16) | 0, this._h[v] = y & 65535;
        return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, u.prototype.update = function(a) {
        var l = 0, h = a.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > h && (f = h);
          for (var d = 0; d < f; d++)
            this._buffer[this._leftover + d] = a[l + d];
          if (h -= f, l += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (h >= 16 && (f = h - h % 16, this._blocks(a, l, f), l += f, h -= f), h) {
          for (var d = 0; d < h; d++)
            this._buffer[this._leftover + d] = a[l + d];
          this._leftover += h;
        }
        return this;
      }, u.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var a = new Uint8Array(16);
        return this.finish(a), a;
      }, u.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, u;
    }()
  );
  t.Poly1305 = n;
  function i(u, a) {
    var l = new n(u);
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  t.oneTimeAuth = i;
  function s(u, a) {
    return u.length !== t.DIGEST_LENGTH || a.length !== t.DIGEST_LENGTH ? !1 : e.equal(u, a);
  }
  t.equal = s;
})(pc);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Jn, r = pc, n = It, i = ie, s = ar;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var u = new Uint8Array(16), a = (
    /** @class */
    function() {
      function l(h) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, h.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(h);
      }
      return l.prototype.seal = function(h, f, d, y) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var v = new Uint8Array(16);
        v.set(h, v.length - h.length);
        var E = new Uint8Array(32);
        e.stream(this._key, v, E, 4);
        var I = f.length + this.tagLength, _;
        if (y) {
          if (y.length !== I)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          _ = y;
        } else
          _ = new Uint8Array(I);
        return e.streamXOR(this._key, v, f, _, 4), this._authenticate(_.subarray(_.length - this.tagLength, _.length), E, _.subarray(0, _.length - this.tagLength), d), n.wipe(v), _;
      }, l.prototype.open = function(h, f, d, y) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var v = new Uint8Array(16);
        v.set(h, v.length - h.length);
        var E = new Uint8Array(32);
        e.stream(this._key, v, E, 4);
        var I = new Uint8Array(this.tagLength);
        if (this._authenticate(I, E, f.subarray(0, f.length - this.tagLength), d), !s.equal(I, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var _ = f.length - this.tagLength, F;
        if (y) {
          if (y.length !== _)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          F = y;
        } else
          F = new Uint8Array(_);
        return e.streamXOR(this._key, v, f.subarray(0, f.length - this.tagLength), F, 4), n.wipe(v), F;
      }, l.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, l.prototype._authenticate = function(h, f, d, y) {
        var v = new r.Poly1305(f);
        y && (v.update(y), y.length % 16 > 0 && v.update(u.subarray(y.length % 16))), v.update(d), d.length % 16 > 0 && v.update(u.subarray(d.length % 16));
        var E = new Uint8Array(8);
        y && i.writeUint64LE(y.length, E), v.update(E), i.writeUint64LE(d.length, E), v.update(E);
        for (var I = v.digest(), _ = 0; _ < I.length; _++)
          h[_] = I[_];
        v.clean(), n.wipe(I), n.wipe(E);
      }, l;
    }()
  );
  t.ChaCha20Poly1305 = a;
})(is);
var yc = {}, dn = {}, ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
function jd(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
ss.isSerializableHash = jd;
Object.defineProperty(dn, "__esModule", { value: !0 });
var qt = ss, qd = ar, zd = It, bc = (
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
      this._outer.update(n), qt.isSerializableHash(this._inner) && qt.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), zd.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!qt.isSerializableHash(this._inner) || !qt.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      qt.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), qt.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!qt.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!qt.isSerializableHash(this._inner) || !qt.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!qt.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
dn.HMAC = bc;
function Bd(t, e, r) {
  var n = new bc(t, e);
  n.update(r);
  var i = n.digest();
  return n.clean(), i;
}
dn.hmac = Bd;
dn.equal = qd.equal;
Object.defineProperty(yc, "__esModule", { value: !0 });
var So = dn, Do = It, Kd = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
      var s = So.hmac(this._hash, n, r);
      this._hmac = new So.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), Do.wipe(this._buffer), Do.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Hd = yc.HKDF = Kd, Qn = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = ie, r = It;
  t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
  var n = (
    /** @class */
    function() {
      function a() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return a.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, a.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, a.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._temp), this.reset();
      }, a.prototype.update = function(l, h) {
        if (h === void 0 && (h = l.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && h > 0; )
            this._buffer[this._bufferLength++] = l[f++], h--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._temp, this._state, l, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = l[f++], h--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, d = h / 536870912 | 0, y = h << 3, v = h % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var E = f + 1; E < v - 8; E++)
            this._buffer[E] = 0;
          e.writeUint32BE(d, this._buffer, v - 8), e.writeUint32BE(y, this._buffer, v - 4), s(this._temp, this._state, this._buffer, 0, v), this._finished = !0;
        }
        for (var E = 0; E < this.digestLength / 4; E++)
          e.writeUint32BE(this._state[E], l, E * 4);
        return this;
      }, a.prototype.digest = function() {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(l) {
        return this._state.set(l.state), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(l) {
        r.wipe(l.state), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
      }, a;
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
  function s(a, l, h, f, d) {
    for (; d >= 64; ) {
      for (var y = l[0], v = l[1], E = l[2], I = l[3], _ = l[4], F = l[5], w = l[6], D = l[7], b = 0; b < 16; b++) {
        var S = f + b * 4;
        a[b] = e.readUint32BE(h, S);
      }
      for (var b = 16; b < 64; b++) {
        var p = a[b - 2], o = (p >>> 17 | p << 32 - 17) ^ (p >>> 19 | p << 32 - 19) ^ p >>> 10;
        p = a[b - 15];
        var g = (p >>> 7 | p << 32 - 7) ^ (p >>> 18 | p << 32 - 18) ^ p >>> 3;
        a[b] = (o + a[b - 7] | 0) + (g + a[b - 16] | 0);
      }
      for (var b = 0; b < 64; b++) {
        var o = (((_ >>> 6 | _ << 26) ^ (_ >>> 11 | _ << 21) ^ (_ >>> 25 | _ << 7)) + (_ & F ^ ~_ & w) | 0) + (D + (i[b] + a[b] | 0) | 0) | 0, g = ((y >>> 2 | y << 32 - 2) ^ (y >>> 13 | y << 32 - 13) ^ (y >>> 22 | y << 32 - 22)) + (y & v ^ y & E ^ v & E) | 0;
        D = w, w = F, F = _, _ = I + o | 0, I = E, E = v, v = y, y = o + g | 0;
      }
      l[0] += y, l[1] += v, l[2] += E, l[3] += I, l[4] += _, l[5] += F, l[6] += w, l[7] += D, f += 64, d -= 64;
    }
    return f;
  }
  function u(a) {
    var l = new n();
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  t.hash = u;
})(Qn);
var os = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Fr, r = It;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(b) {
    const S = new Float64Array(16);
    if (b)
      for (let p = 0; p < b.length; p++)
        S[p] = b[p];
    return S;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const s = n([56129, 1]);
  function u(b) {
    let S = 1;
    for (let p = 0; p < 16; p++) {
      let o = b[p] + S + 65535;
      S = Math.floor(o / 65536), b[p] = o - S * 65536;
    }
    b[0] += S - 1 + 37 * (S - 1);
  }
  function a(b, S, p) {
    const o = ~(p - 1);
    for (let g = 0; g < 16; g++) {
      const R = o & (b[g] ^ S[g]);
      b[g] ^= R, S[g] ^= R;
    }
  }
  function l(b, S) {
    const p = n(), o = n();
    for (let g = 0; g < 16; g++)
      o[g] = S[g];
    u(o), u(o), u(o);
    for (let g = 0; g < 2; g++) {
      p[0] = o[0] - 65517;
      for (let T = 1; T < 15; T++)
        p[T] = o[T] - 65535 - (p[T - 1] >> 16 & 1), p[T - 1] &= 65535;
      p[15] = o[15] - 32767 - (p[14] >> 16 & 1);
      const R = p[15] >> 16 & 1;
      p[14] &= 65535, a(o, p, 1 - R);
    }
    for (let g = 0; g < 16; g++)
      b[2 * g] = o[g] & 255, b[2 * g + 1] = o[g] >> 8;
  }
  function h(b, S) {
    for (let p = 0; p < 16; p++)
      b[p] = S[2 * p] + (S[2 * p + 1] << 8);
    b[15] &= 32767;
  }
  function f(b, S, p) {
    for (let o = 0; o < 16; o++)
      b[o] = S[o] + p[o];
  }
  function d(b, S, p) {
    for (let o = 0; o < 16; o++)
      b[o] = S[o] - p[o];
  }
  function y(b, S, p) {
    let o, g, R = 0, T = 0, U = 0, B = 0, k = 0, x = 0, P = 0, V = 0, z = 0, $ = 0, q = 0, M = 0, K = 0, te = 0, H = 0, Z = 0, J = 0, ee = 0, L = 0, N = 0, C = 0, c = 0, O = 0, W = 0, Y = 0, he = 0, be = 0, de = 0, _e = 0, Ue = 0, Ne = 0, ye = p[0], pe = p[1], fe = p[2], ue = p[3], ce = p[4], ae = p[5], oe = p[6], re = p[7], le = p[8], ge = p[9], ne = p[10], me = p[11], we = p[12], Se = p[13], De = p[14], Ee = p[15];
    o = S[0], R += o * ye, T += o * pe, U += o * fe, B += o * ue, k += o * ce, x += o * ae, P += o * oe, V += o * re, z += o * le, $ += o * ge, q += o * ne, M += o * me, K += o * we, te += o * Se, H += o * De, Z += o * Ee, o = S[1], T += o * ye, U += o * pe, B += o * fe, k += o * ue, x += o * ce, P += o * ae, V += o * oe, z += o * re, $ += o * le, q += o * ge, M += o * ne, K += o * me, te += o * we, H += o * Se, Z += o * De, J += o * Ee, o = S[2], U += o * ye, B += o * pe, k += o * fe, x += o * ue, P += o * ce, V += o * ae, z += o * oe, $ += o * re, q += o * le, M += o * ge, K += o * ne, te += o * me, H += o * we, Z += o * Se, J += o * De, ee += o * Ee, o = S[3], B += o * ye, k += o * pe, x += o * fe, P += o * ue, V += o * ce, z += o * ae, $ += o * oe, q += o * re, M += o * le, K += o * ge, te += o * ne, H += o * me, Z += o * we, J += o * Se, ee += o * De, L += o * Ee, o = S[4], k += o * ye, x += o * pe, P += o * fe, V += o * ue, z += o * ce, $ += o * ae, q += o * oe, M += o * re, K += o * le, te += o * ge, H += o * ne, Z += o * me, J += o * we, ee += o * Se, L += o * De, N += o * Ee, o = S[5], x += o * ye, P += o * pe, V += o * fe, z += o * ue, $ += o * ce, q += o * ae, M += o * oe, K += o * re, te += o * le, H += o * ge, Z += o * ne, J += o * me, ee += o * we, L += o * Se, N += o * De, C += o * Ee, o = S[6], P += o * ye, V += o * pe, z += o * fe, $ += o * ue, q += o * ce, M += o * ae, K += o * oe, te += o * re, H += o * le, Z += o * ge, J += o * ne, ee += o * me, L += o * we, N += o * Se, C += o * De, c += o * Ee, o = S[7], V += o * ye, z += o * pe, $ += o * fe, q += o * ue, M += o * ce, K += o * ae, te += o * oe, H += o * re, Z += o * le, J += o * ge, ee += o * ne, L += o * me, N += o * we, C += o * Se, c += o * De, O += o * Ee, o = S[8], z += o * ye, $ += o * pe, q += o * fe, M += o * ue, K += o * ce, te += o * ae, H += o * oe, Z += o * re, J += o * le, ee += o * ge, L += o * ne, N += o * me, C += o * we, c += o * Se, O += o * De, W += o * Ee, o = S[9], $ += o * ye, q += o * pe, M += o * fe, K += o * ue, te += o * ce, H += o * ae, Z += o * oe, J += o * re, ee += o * le, L += o * ge, N += o * ne, C += o * me, c += o * we, O += o * Se, W += o * De, Y += o * Ee, o = S[10], q += o * ye, M += o * pe, K += o * fe, te += o * ue, H += o * ce, Z += o * ae, J += o * oe, ee += o * re, L += o * le, N += o * ge, C += o * ne, c += o * me, O += o * we, W += o * Se, Y += o * De, he += o * Ee, o = S[11], M += o * ye, K += o * pe, te += o * fe, H += o * ue, Z += o * ce, J += o * ae, ee += o * oe, L += o * re, N += o * le, C += o * ge, c += o * ne, O += o * me, W += o * we, Y += o * Se, he += o * De, be += o * Ee, o = S[12], K += o * ye, te += o * pe, H += o * fe, Z += o * ue, J += o * ce, ee += o * ae, L += o * oe, N += o * re, C += o * le, c += o * ge, O += o * ne, W += o * me, Y += o * we, he += o * Se, be += o * De, de += o * Ee, o = S[13], te += o * ye, H += o * pe, Z += o * fe, J += o * ue, ee += o * ce, L += o * ae, N += o * oe, C += o * re, c += o * le, O += o * ge, W += o * ne, Y += o * me, he += o * we, be += o * Se, de += o * De, _e += o * Ee, o = S[14], H += o * ye, Z += o * pe, J += o * fe, ee += o * ue, L += o * ce, N += o * ae, C += o * oe, c += o * re, O += o * le, W += o * ge, Y += o * ne, he += o * me, be += o * we, de += o * Se, _e += o * De, Ue += o * Ee, o = S[15], Z += o * ye, J += o * pe, ee += o * fe, L += o * ue, N += o * ce, C += o * ae, c += o * oe, O += o * re, W += o * le, Y += o * ge, he += o * ne, be += o * me, de += o * we, _e += o * Se, Ue += o * De, Ne += o * Ee, R += 38 * J, T += 38 * ee, U += 38 * L, B += 38 * N, k += 38 * C, x += 38 * c, P += 38 * O, V += 38 * W, z += 38 * Y, $ += 38 * he, q += 38 * be, M += 38 * de, K += 38 * _e, te += 38 * Ue, H += 38 * Ne, g = 1, o = R + g + 65535, g = Math.floor(o / 65536), R = o - g * 65536, o = T + g + 65535, g = Math.floor(o / 65536), T = o - g * 65536, o = U + g + 65535, g = Math.floor(o / 65536), U = o - g * 65536, o = B + g + 65535, g = Math.floor(o / 65536), B = o - g * 65536, o = k + g + 65535, g = Math.floor(o / 65536), k = o - g * 65536, o = x + g + 65535, g = Math.floor(o / 65536), x = o - g * 65536, o = P + g + 65535, g = Math.floor(o / 65536), P = o - g * 65536, o = V + g + 65535, g = Math.floor(o / 65536), V = o - g * 65536, o = z + g + 65535, g = Math.floor(o / 65536), z = o - g * 65536, o = $ + g + 65535, g = Math.floor(o / 65536), $ = o - g * 65536, o = q + g + 65535, g = Math.floor(o / 65536), q = o - g * 65536, o = M + g + 65535, g = Math.floor(o / 65536), M = o - g * 65536, o = K + g + 65535, g = Math.floor(o / 65536), K = o - g * 65536, o = te + g + 65535, g = Math.floor(o / 65536), te = o - g * 65536, o = H + g + 65535, g = Math.floor(o / 65536), H = o - g * 65536, o = Z + g + 65535, g = Math.floor(o / 65536), Z = o - g * 65536, R += g - 1 + 37 * (g - 1), g = 1, o = R + g + 65535, g = Math.floor(o / 65536), R = o - g * 65536, o = T + g + 65535, g = Math.floor(o / 65536), T = o - g * 65536, o = U + g + 65535, g = Math.floor(o / 65536), U = o - g * 65536, o = B + g + 65535, g = Math.floor(o / 65536), B = o - g * 65536, o = k + g + 65535, g = Math.floor(o / 65536), k = o - g * 65536, o = x + g + 65535, g = Math.floor(o / 65536), x = o - g * 65536, o = P + g + 65535, g = Math.floor(o / 65536), P = o - g * 65536, o = V + g + 65535, g = Math.floor(o / 65536), V = o - g * 65536, o = z + g + 65535, g = Math.floor(o / 65536), z = o - g * 65536, o = $ + g + 65535, g = Math.floor(o / 65536), $ = o - g * 65536, o = q + g + 65535, g = Math.floor(o / 65536), q = o - g * 65536, o = M + g + 65535, g = Math.floor(o / 65536), M = o - g * 65536, o = K + g + 65535, g = Math.floor(o / 65536), K = o - g * 65536, o = te + g + 65535, g = Math.floor(o / 65536), te = o - g * 65536, o = H + g + 65535, g = Math.floor(o / 65536), H = o - g * 65536, o = Z + g + 65535, g = Math.floor(o / 65536), Z = o - g * 65536, R += g - 1 + 37 * (g - 1), b[0] = R, b[1] = T, b[2] = U, b[3] = B, b[4] = k, b[5] = x, b[6] = P, b[7] = V, b[8] = z, b[9] = $, b[10] = q, b[11] = M, b[12] = K, b[13] = te, b[14] = H, b[15] = Z;
  }
  function v(b, S) {
    y(b, S, S);
  }
  function E(b, S) {
    const p = n();
    for (let o = 0; o < 16; o++)
      p[o] = S[o];
    for (let o = 253; o >= 0; o--)
      v(p, p), o !== 2 && o !== 4 && y(p, p, S);
    for (let o = 0; o < 16; o++)
      b[o] = p[o];
  }
  function I(b, S) {
    const p = new Uint8Array(32), o = new Float64Array(80), g = n(), R = n(), T = n(), U = n(), B = n(), k = n();
    for (let z = 0; z < 31; z++)
      p[z] = b[z];
    p[31] = b[31] & 127 | 64, p[0] &= 248, h(o, S);
    for (let z = 0; z < 16; z++)
      R[z] = o[z];
    g[0] = U[0] = 1;
    for (let z = 254; z >= 0; --z) {
      const $ = p[z >>> 3] >>> (z & 7) & 1;
      a(g, R, $), a(T, U, $), f(B, g, T), d(g, g, T), f(T, R, U), d(R, R, U), v(U, B), v(k, g), y(g, T, g), y(T, R, B), f(B, g, T), d(g, g, T), v(R, g), d(T, U, k), y(g, T, s), f(g, g, U), y(T, T, g), y(g, U, k), y(U, R, o), v(R, B), a(g, R, $), a(T, U, $);
    }
    for (let z = 0; z < 16; z++)
      o[z + 16] = g[z], o[z + 32] = T[z], o[z + 48] = R[z], o[z + 64] = U[z];
    const x = o.subarray(32), P = o.subarray(16);
    E(x, x), y(P, P, x);
    const V = new Uint8Array(32);
    return l(V, P), V;
  }
  t.scalarMult = I;
  function _(b) {
    return I(b, i);
  }
  t.scalarMultBase = _;
  function F(b) {
    if (b.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const S = new Uint8Array(b);
    return {
      publicKey: _(S),
      secretKey: S
    };
  }
  t.generateKeyPairFromSeed = F;
  function w(b) {
    const S = (0, e.randomBytes)(32, b), p = F(S);
    return (0, r.wipe)(S), p;
  }
  t.generateKeyPair = w;
  function D(b, S, p = !1) {
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (S.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = I(b, S);
    if (p) {
      let g = 0;
      for (let R = 0; R < o.length; R++)
        g |= o[R];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  t.sharedKey = D;
})(os);
var Io = globalThis && globalThis.__spreadArray || function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}, Vd = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Wd = (
  /** @class */
  function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), kd = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      this.name = e, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return t;
  }()
), Gd = (
  /** @class */
  function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Yd = (
  /** @class */
  function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Jd = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Qd = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Oo = 3, Xd = [
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
  ["searchbot", Jd]
], xo = [
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
function Zd(t) {
  return t ? Co(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Yd() : typeof navigator < "u" ? Co(navigator.userAgent) : rp();
}
function ep(t) {
  return t !== "" && Xd.reduce(function(e, r) {
    var n = r[0], i = r[1];
    if (e)
      return e;
    var s = i.exec(t);
    return !!s && [n, s];
  }, !1);
}
function Co(t) {
  var e = ep(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Gd();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Oo && (i = Io(Io([], i, !0), np(Oo - i.length), !0)) : i = [];
  var s = i.join("."), u = tp(t), a = Qd.exec(t);
  return a && a[1] ? new kd(r, s, u, a[1]) : new Vd(r, s, u);
}
function tp(t) {
  for (var e = 0, r = xo.length; e < r; e++) {
    var n = xo[e], i = n[0], s = n[1], u = s.exec(t);
    if (u)
      return i;
  }
  return null;
}
function rp() {
  var t = typeof process < "u" && process.version;
  return t ? new Wd(process.version.slice(1)) : null;
}
function np(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.getLocalStorage = Oe.getLocalStorageOrThrow = Oe.getCrypto = Oe.getCryptoOrThrow = vc = Oe.getLocation = Oe.getLocationOrThrow = as = Oe.getNavigator = Oe.getNavigatorOrThrow = mc = Oe.getDocument = Oe.getDocumentOrThrow = Oe.getFromWindowOrThrow = Oe.getFromWindow = void 0;
function Sr(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Oe.getFromWindow = Sr;
function Ur(t) {
  const e = Sr(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Oe.getFromWindowOrThrow = Ur;
function ip() {
  return Ur("document");
}
Oe.getDocumentOrThrow = ip;
function sp() {
  return Sr("document");
}
var mc = Oe.getDocument = sp;
function op() {
  return Ur("navigator");
}
Oe.getNavigatorOrThrow = op;
function ap() {
  return Sr("navigator");
}
var as = Oe.getNavigator = ap;
function cp() {
  return Ur("location");
}
Oe.getLocationOrThrow = cp;
function up() {
  return Sr("location");
}
var vc = Oe.getLocation = up;
function lp() {
  return Ur("crypto");
}
Oe.getCryptoOrThrow = lp;
function hp() {
  return Sr("crypto");
}
Oe.getCrypto = hp;
function fp() {
  return Ur("localStorage");
}
Oe.getLocalStorageOrThrow = fp;
function dp() {
  return Sr("localStorage");
}
Oe.getLocalStorage = dp;
var cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
var wc = cs.getWindowMetadata = void 0;
const Ao = Oe;
function pp() {
  let t, e;
  try {
    t = Ao.getDocumentOrThrow(), e = Ao.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = t.getElementsByTagName("link"), y = [];
    for (let v = 0; v < d.length; v++) {
      const E = d[v], I = E.getAttribute("rel");
      if (I && I.toLowerCase().indexOf("icon") > -1) {
        const _ = E.getAttribute("href");
        if (_)
          if (_.toLowerCase().indexOf("https:") === -1 && _.toLowerCase().indexOf("http:") === -1 && _.indexOf("//") !== 0) {
            let F = e.protocol + "//" + e.host;
            if (_.indexOf("/") === 0)
              F += _;
            else {
              const w = e.pathname.split("/");
              w.pop();
              const D = w.join("/");
              F += D + "/" + _;
            }
            y.push(F);
          } else if (_.indexOf("//") === 0) {
            const F = e.protocol + _;
            y.push(F);
          } else
            y.push(_);
      }
    }
    return y;
  }
  function n(...d) {
    const y = t.getElementsByTagName("meta");
    for (let v = 0; v < y.length; v++) {
      const E = y[v], I = ["itemprop", "property", "name"].map((_) => E.getAttribute(_)).filter((_) => _ ? d.includes(_) : !1);
      if (I.length && I) {
        const _ = E.getAttribute("content");
        if (_)
          return _;
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
  const u = i(), a = s(), l = e.origin, h = r();
  return {
    description: a,
    url: l,
    icons: h,
    name: u
  };
}
wc = cs.getWindowMetadata = pp;
var on = {}, gp = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), _c = "%[a-f0-9]{2}", Ro = new RegExp("(" + _c + ")|([^%]+?)", "gi"), To = new RegExp("(" + _c + ")+", "gi");
function zi(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], zi(r), zi(n));
}
function yp(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Ro) || [], r = 1; r < e.length; r++)
      t = zi(e, r).join(""), e = t.match(Ro) || [];
    return t;
  }
}
function bp(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = To.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = yp(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = To.exec(t);
  }
  e["%C2"] = "�";
  for (var i = Object.keys(e), s = 0; s < i.length; s++) {
    var u = i[s];
    t = t.replace(new RegExp(u, "g"), e[u]);
  }
  return t;
}
var mp = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return bp(t);
  }
}, vp = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, wp = function(t, e) {
  for (var r = {}, n = Object.keys(t), i = Array.isArray(e), s = 0; s < n.length; s++) {
    var u = n[s], a = t[u];
    (i ? e.indexOf(u) !== -1 : e(u, a, t)) && (r[u] = a);
  }
  return r;
};
(function(t) {
  const e = gp, r = mp, n = vp, i = wp, s = (w) => w == null, u = Symbol("encodeFragmentIdentifier");
  function a(w) {
    switch (w.arrayFormat) {
      case "index":
        return (D) => (b, S) => {
          const p = b.length;
          return S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? b : S === null ? [...b, [f(D, w), "[", p, "]"].join("")] : [
            ...b,
            [f(D, w), "[", f(p, w), "]=", f(S, w)].join("")
          ];
        };
      case "bracket":
        return (D) => (b, S) => S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? b : S === null ? [...b, [f(D, w), "[]"].join("")] : [...b, [f(D, w), "[]=", f(S, w)].join("")];
      case "colon-list-separator":
        return (D) => (b, S) => S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? b : S === null ? [...b, [f(D, w), ":list="].join("")] : [...b, [f(D, w), ":list=", f(S, w)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const D = w.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (S, p) => p === void 0 || w.skipNull && p === null || w.skipEmptyString && p === "" ? S : (p = p === null ? "" : p, S.length === 0 ? [[f(b, w), D, f(p, w)].join("")] : [[S, f(p, w)].join(w.arrayFormatSeparator)]);
      }
      default:
        return (D) => (b, S) => S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? b : S === null ? [...b, f(D, w)] : [...b, [f(D, w), "=", f(S, w)].join("")];
    }
  }
  function l(w) {
    let D;
    switch (w.arrayFormat) {
      case "index":
        return (b, S, p) => {
          if (D = /\[(\d*)\]$/.exec(b), b = b.replace(/\[\d*\]$/, ""), !D) {
            p[b] = S;
            return;
          }
          p[b] === void 0 && (p[b] = {}), p[b][D[1]] = S;
        };
      case "bracket":
        return (b, S, p) => {
          if (D = /(\[\])$/.exec(b), b = b.replace(/\[\]$/, ""), !D) {
            p[b] = S;
            return;
          }
          if (p[b] === void 0) {
            p[b] = [S];
            return;
          }
          p[b] = [].concat(p[b], S);
        };
      case "colon-list-separator":
        return (b, S, p) => {
          if (D = /(:list)$/.exec(b), b = b.replace(/:list$/, ""), !D) {
            p[b] = S;
            return;
          }
          if (p[b] === void 0) {
            p[b] = [S];
            return;
          }
          p[b] = [].concat(p[b], S);
        };
      case "comma":
      case "separator":
        return (b, S, p) => {
          const o = typeof S == "string" && S.includes(w.arrayFormatSeparator), g = typeof S == "string" && !o && d(S, w).includes(w.arrayFormatSeparator);
          S = g ? d(S, w) : S;
          const R = o || g ? S.split(w.arrayFormatSeparator).map((T) => d(T, w)) : S === null ? S : d(S, w);
          p[b] = R;
        };
      case "bracket-separator":
        return (b, S, p) => {
          const o = /(\[\])$/.test(b);
          if (b = b.replace(/\[\]$/, ""), !o) {
            p[b] = S && d(S, w);
            return;
          }
          const g = S === null ? [] : S.split(w.arrayFormatSeparator).map((R) => d(R, w));
          if (p[b] === void 0) {
            p[b] = g;
            return;
          }
          p[b] = [].concat(p[b], g);
        };
      default:
        return (b, S, p) => {
          if (p[b] === void 0) {
            p[b] = S;
            return;
          }
          p[b] = [].concat(p[b], S);
        };
    }
  }
  function h(w) {
    if (typeof w != "string" || w.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(w, D) {
    return D.encode ? D.strict ? e(w) : encodeURIComponent(w) : w;
  }
  function d(w, D) {
    return D.decode ? r(w) : w;
  }
  function y(w) {
    return Array.isArray(w) ? w.sort() : typeof w == "object" ? y(Object.keys(w)).sort((D, b) => Number(D) - Number(b)).map((D) => w[D]) : w;
  }
  function v(w) {
    const D = w.indexOf("#");
    return D !== -1 && (w = w.slice(0, D)), w;
  }
  function E(w) {
    let D = "";
    const b = w.indexOf("#");
    return b !== -1 && (D = w.slice(b)), D;
  }
  function I(w) {
    w = v(w);
    const D = w.indexOf("?");
    return D === -1 ? "" : w.slice(D + 1);
  }
  function _(w, D) {
    return D.parseNumbers && !Number.isNaN(Number(w)) && typeof w == "string" && w.trim() !== "" ? w = Number(w) : D.parseBooleans && w !== null && (w.toLowerCase() === "true" || w.toLowerCase() === "false") && (w = w.toLowerCase() === "true"), w;
  }
  function F(w, D) {
    D = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, D), h(D.arrayFormatSeparator);
    const b = l(D), S = /* @__PURE__ */ Object.create(null);
    if (typeof w != "string" || (w = w.trim().replace(/^[?#&]/, ""), !w))
      return S;
    for (const p of w.split("&")) {
      if (p === "")
        continue;
      let [o, g] = n(D.decode ? p.replace(/\+/g, " ") : p, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(D.arrayFormat) ? g : d(g, D), b(d(o, D), g, S);
    }
    for (const p of Object.keys(S)) {
      const o = S[p];
      if (typeof o == "object" && o !== null)
        for (const g of Object.keys(o))
          o[g] = _(o[g], D);
      else
        S[p] = _(o, D);
    }
    return D.sort === !1 ? S : (D.sort === !0 ? Object.keys(S).sort() : Object.keys(S).sort(D.sort)).reduce((p, o) => {
      const g = S[o];
      return g && typeof g == "object" && !Array.isArray(g) ? p[o] = y(g) : p[o] = g, p;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = I, t.parse = F, t.stringify = (w, D) => {
    if (!w)
      return "";
    D = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, D), h(D.arrayFormatSeparator);
    const b = (g) => D.skipNull && s(w[g]) || D.skipEmptyString && w[g] === "", S = a(D), p = {};
    for (const g of Object.keys(w))
      b(g) || (p[g] = w[g]);
    const o = Object.keys(p);
    return D.sort !== !1 && o.sort(D.sort), o.map((g) => {
      const R = w[g];
      return R === void 0 ? "" : R === null ? f(g, D) : Array.isArray(R) ? R.length === 0 && D.arrayFormat === "bracket-separator" ? f(g, D) + "[]" : R.reduce(S(g), []).join("&") : f(g, D) + "=" + f(R, D);
    }).filter((g) => g.length > 0).join("&");
  }, t.parseUrl = (w, D) => {
    D = Object.assign({
      decode: !0
    }, D);
    const [b, S] = n(w, "#");
    return Object.assign(
      {
        url: b.split("?")[0] || "",
        query: F(I(w), D)
      },
      D && D.parseFragmentIdentifier && S ? { fragmentIdentifier: d(S, D) } : {}
    );
  }, t.stringifyUrl = (w, D) => {
    D = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, D);
    const b = v(w.url).split("?")[0] || "", S = t.extract(w.url), p = t.parse(S, { sort: !1 }), o = Object.assign(p, w.query);
    let g = t.stringify(o, D);
    g && (g = `?${g}`);
    let R = E(w.url);
    return w.fragmentIdentifier && (R = `#${D[u] ? f(w.fragmentIdentifier, D) : w.fragmentIdentifier}`), `${b}${g}${R}`;
  }, t.pick = (w, D, b) => {
    b = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, b);
    const { url: S, query: p, fragmentIdentifier: o } = t.parseUrl(w, b);
    return t.stringifyUrl({
      url: S,
      query: i(p, D),
      fragmentIdentifier: o
    }, b);
  }, t.exclude = (w, D, b) => {
    const S = Array.isArray(D) ? (p) => !D.includes(p) : (p, o) => !D(p, o);
    return t.pick(w, S, b);
  };
})(on);
const _p = {
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
function Ec(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Sc = "base10", gt = "base16", Bi = "base64pad", us = "utf8", Dc = 0, Dr = 1, Ep = 0, No = 1, Ki = 12, ls = 32;
function Sp() {
  const t = os.generateKeyPair();
  return { privateKey: yt(t.secretKey, gt), publicKey: yt(t.publicKey, gt) };
}
function Hi() {
  const t = Fr.randomBytes(ls);
  return yt(t, gt);
}
function Dp(t, e) {
  const r = os.sharedKey(vt(t, gt), vt(e, gt)), n = new Hd(Qn.SHA256, r).expand(ls);
  return yt(n, gt);
}
function Ip(t) {
  const e = Qn.hash(vt(t, gt));
  return yt(e, gt);
}
function Nr(t) {
  const e = Qn.hash(vt(t, us));
  return yt(e, gt);
}
function Op(t) {
  return vt(`${t}`, Sc);
}
function pn(t) {
  return Number(yt(t, Sc));
}
function xp(t) {
  const e = Op(typeof t.type < "u" ? t.type : Dc);
  if (pn(e) === Dr && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? vt(t.senderPublicKey, gt) : void 0, n = typeof t.iv < "u" ? vt(t.iv, gt) : Fr.randomBytes(Ki), i = new is.ChaCha20Poly1305(vt(t.symKey, gt)).seal(n, vt(t.message, us));
  return Ap({ type: e, sealed: i, iv: n, senderPublicKey: r });
}
function Cp(t) {
  const e = new is.ChaCha20Poly1305(vt(t.symKey, gt)), { sealed: r, iv: n } = jn(t.encoded), i = e.open(n, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return yt(i, us);
}
function Ap(t) {
  if (pn(t.type) === Dr) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return yt(ji([t.type, t.senderPublicKey, t.iv, t.sealed]), Bi);
  }
  return yt(ji([t.type, t.iv, t.sealed]), Bi);
}
function jn(t) {
  const e = vt(t, Bi), r = e.slice(Ep, No), n = No;
  if (pn(r) === Dr) {
    const a = n + ls, l = a + Ki, h = e.slice(n, a), f = e.slice(a, l), d = e.slice(l);
    return { type: r, sealed: d, iv: f, senderPublicKey: h };
  }
  const i = n + Ki, s = e.slice(n, i), u = e.slice(i);
  return { type: r, sealed: u, iv: s };
}
function Rp(t, e) {
  const r = jn(t);
  return Ic({ type: pn(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? yt(r.senderPublicKey, gt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Ic(t) {
  const e = (t == null ? void 0 : t.type) || Dc;
  if (e === Dr) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Po(t) {
  return t.type === Dr && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Tp = Object.defineProperty, Lo = Object.getOwnPropertySymbols, Np = Object.prototype.hasOwnProperty, Pp = Object.prototype.propertyIsEnumerable, Fo = (t, e, r) => e in t ? Tp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Uo = (t, e) => {
  for (var r in e || (e = {}))
    Np.call(e, r) && Fo(t, r, e[r]);
  if (Lo)
    for (var r of Lo(e))
      Pp.call(e, r) && Fo(t, r, e[r]);
  return t;
};
const Lp = "ReactNative", St = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Fp = "js";
function hs() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Xn() {
  return !mc() && !!as() && navigator.product === Lp;
}
function gn() {
  return !hs() && !!as();
}
function yn() {
  return Xn() ? St.reactNative : hs() ? St.node : gn() ? St.browser : St.unknown;
}
function Up(t, e) {
  let r = on.parse(t);
  return r = Uo(Uo({}, r), e), t = on.stringify(r), t;
}
function Mp() {
  return wc() || { name: "", description: "", url: "", icons: [""] };
}
function $p() {
  if (yn() === St.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = Zd();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function jp() {
  var t;
  const e = yn();
  return e === St.browser ? [e, ((t = vc()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function qp(t, e, r) {
  const n = $p(), i = jp();
  return [[t, e].join("-"), [Fp, r].join("-"), n, i].join("/");
}
function zp({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: u }) {
  const a = r.split("?"), l = qp(t, e, n), h = { auth: i, ua: l, projectId: s, useOnCloseEvent: u || void 0 }, f = Up(a[1] || "", h);
  return a[0] + "?" + f;
}
function wr(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Oc(t) {
  return Object.fromEntries(t.entries());
}
function xc(t) {
  return new Map(Object.entries(t));
}
function Ar(t = X.FIVE_MINUTES, e) {
  const r = X.toMiliseconds(t || X.FIVE_MINUTES);
  let n, i, s;
  return { resolve: (u) => {
    s && n && (clearTimeout(s), n(u));
  }, reject: (u) => {
    s && i && (clearTimeout(s), i(u));
  }, done: () => new Promise((u, a) => {
    s = setTimeout(() => {
      a(new Error(e));
    }, r), n = u, i = a;
  }) };
}
function an(t, e, r) {
  return new Promise(async (n, i) => {
    const s = setTimeout(() => i(new Error(r)), e);
    try {
      const u = await t;
      n(u);
    } catch (u) {
      i(u);
    }
    clearTimeout(s);
  });
}
function Cc(t, e) {
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
function Bp(t) {
  return Cc("topic", t);
}
function Kp(t) {
  return Cc("id", t);
}
function Ac(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function Pt(t, e) {
  return X.fromMiliseconds((e || Date.now()) + X.toMiliseconds(t));
}
function ir(t) {
  return Date.now() >= X.toMiliseconds(t);
}
function Be(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function Hp({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let i = n == null ? void 0 : n.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const s = `${i}/wc?requestId=${t}&sessionTopic=${e}`, u = yn();
    u === St.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : u === St.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (n) {
    console.error(n);
  }
}
const Vp = "irn";
function Vi(t) {
  return (t == null ? void 0 : t.relay) || { protocol: Vp };
}
function Pn(t) {
  const e = _p[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var Wp = Object.defineProperty, Mo = Object.getOwnPropertySymbols, kp = Object.prototype.hasOwnProperty, Gp = Object.prototype.propertyIsEnumerable, $o = (t, e, r) => e in t ? Wp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Yp = (t, e) => {
  for (var r in e || (e = {}))
    kp.call(e, r) && $o(t, r, e[r]);
  if (Mo)
    for (var r of Mo(e))
      Gp.call(e, r) && $o(t, r, e[r]);
  return t;
};
function Jp(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((i) => {
    if (i.startsWith(n)) {
      const s = i.replace(n, ""), u = t[i];
      r[s] = u;
    }
  }), r;
}
function Qp(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), i = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", u = on.parse(s);
  return { protocol: n, topic: Xp(i[0]), version: parseInt(i[1], 10), symKey: u.symKey, relay: Jp(u) };
}
function Xp(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function Zp(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((i) => {
    const s = r + e + i;
    t[i] && (n[s] = t[i]);
  }), n;
}
function eg(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + on.stringify(Yp({ symKey: t.symKey }, Zp(t.relay)));
}
function Mr(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, i] = r.split(":");
    e.push(`${n}:${i}`);
  }), e;
}
function tg(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Mr(r.accounts));
  }), e;
}
function rg(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Mr(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function ng(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Mr(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
function ig(t, e) {
  const r = Ln(t, e);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [i, s] of Object.entries(t))
    n[i] = { methods: s.methods, events: s.events, chains: s.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return n;
}
const sg = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, og = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function G(t, e) {
  const { message: r, code: n } = og[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function Ke(t, e) {
  const { message: r, code: n } = sg[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function bn(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function rn(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function pt(t) {
  return typeof t > "u";
}
function tt(t, e) {
  return e && pt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function fs(t, e) {
  return e && pt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function ag(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), i = Object.keys(r);
  let s = !0;
  return wr(i, n) ? (n.forEach((u) => {
    const { accounts: a, methods: l, events: h } = t.namespaces[u], f = Mr(a), d = r[u];
    (!wr(Ec(u, d), f) || !wr(d.methods, l) || !wr(d.events, h)) && (s = !1);
  }), s) : !1;
}
function qn(t) {
  return tt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function cg(t) {
  if (tt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && qn(r);
    }
  }
  return !1;
}
function ug(t) {
  if (tt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function lg(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function hg(t) {
  return t == null ? void 0 : t.topic;
}
function fg(t, e) {
  let r = null;
  return tt(t == null ? void 0 : t.publicKey, !1) || (r = G("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function jo(t) {
  let e = !0;
  return bn(t) ? t.length && (e = t.every((r) => tt(r, !1))) : e = !1, e;
}
function dg(t, e, r) {
  let n = null;
  return bn(e) && e.length ? e.forEach((i) => {
    n || qn(i) || (n = Ke("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : qn(t) || (n = Ke("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function pg(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([i, s]) => {
    if (n)
      return;
    const u = dg(i, Ec(i, s), `${e} ${r}`);
    u && (n = u);
  }), n;
}
function gg(t, e) {
  let r = null;
  return bn(t) ? t.forEach((n) => {
    r || cg(n) || (r = Ke("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = Ke("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function yg(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = gg(n == null ? void 0 : n.accounts, `${e} namespace`);
    i && (r = i);
  }), r;
}
function bg(t, e) {
  let r = null;
  return jo(t == null ? void 0 : t.methods) ? jo(t == null ? void 0 : t.events) || (r = Ke("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = Ke("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Rc(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const i = bg(n, `${e}, namespace`);
    i && (r = i);
  }), r;
}
function mg(t, e, r) {
  let n = null;
  if (t && rn(t)) {
    const i = Rc(t, e);
    i && (n = i);
    const s = pg(t, e, r);
    s && (n = s);
  } else
    n = G("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function Ln(t, e) {
  let r = null;
  if (t && rn(t)) {
    const n = Rc(t, e);
    n && (r = n);
    const i = yg(t, e);
    i && (r = i);
  } else
    r = G("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Tc(t) {
  return tt(t.protocol, !0);
}
function vg(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && bn(t) && t.length && t.forEach((n) => {
    r = Tc(n);
  }), r;
}
function wg(t) {
  return typeof t == "number";
}
function mt(t) {
  return typeof t < "u" && typeof t !== null;
}
function _g(t) {
  return !(!t || typeof t != "object" || !t.code || !fs(t.code, !1) || !t.message || !tt(t.message, !1));
}
function Eg(t) {
  return !(pt(t) || !tt(t.method, !1));
}
function Sg(t) {
  return !(pt(t) || pt(t.result) && pt(t.error) || !fs(t.id, !1) || !tt(t.jsonrpc, !1));
}
function Dg(t) {
  return !(pt(t) || !tt(t.name, !1));
}
function qo(t, e) {
  return !(!qn(e) || !tg(t).includes(e));
}
function Ig(t, e, r) {
  return tt(r, !1) ? rg(t, e).includes(r) : !1;
}
function Og(t, e, r) {
  return tt(r, !1) ? ng(t, e).includes(r) : !1;
}
function zo(t, e, r) {
  let n = null;
  const i = xg(t), s = Cg(e), u = Object.keys(i), a = Object.keys(s), l = Bo(Object.keys(t)), h = Bo(Object.keys(e)), f = l.filter((d) => !h.includes(d));
  return f.length && (n = G("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(e).toString()}`)), wr(u, a) || (n = G("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${a.toString()}`)), Object.keys(e).forEach((d) => {
    if (!d.includes(":") || n)
      return;
    const y = Mr(e[d].accounts);
    y.includes(d) || (n = G("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${y.toString()}`));
  }), u.forEach((d) => {
    n || (wr(i[d].methods, s[d].methods) ? wr(i[d].events, s[d].events) || (n = G("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${d}`)) : n = G("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${d}`));
  }), n;
}
function xg(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((i) => {
      e[i] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Bo(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function Cg(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = Mr(t[r].accounts);
      n == null || n.forEach((i) => {
        e[i] = { accounts: t[r].accounts.filter((s) => s.includes(`${i}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function Ag(t, e) {
  return fs(t, !1) && t <= e.max && t >= e.min;
}
function Ko() {
  const t = yn();
  return new Promise((e) => {
    switch (t) {
      case St.browser:
        e(Rg());
        break;
      case St.reactNative:
        e(Tg());
        break;
      case St.node:
        e(Ng());
        break;
      default:
        e(!0);
    }
  });
}
function Rg() {
  return gn() && (navigator == null ? void 0 : navigator.onLine);
}
async function Tg() {
  if (Xn() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function Ng() {
  return !0;
}
function Pg(t) {
  switch (yn()) {
    case St.browser:
      Lg(t);
      break;
    case St.reactNative:
      Fg(t);
      break;
  }
}
function Lg(t) {
  gn() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Fg(t) {
  Xn() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const bi = {};
let An = class {
  static get(e) {
    return bi[e];
  }
  static set(e, r) {
    bi[e] = r;
  }
  static delete(e) {
    delete bi[e];
  }
};
const Ug = "PARSE_ERROR", Mg = "INVALID_REQUEST", $g = "METHOD_NOT_FOUND", jg = "INVALID_PARAMS", Nc = "INTERNAL_ERROR", ds = "SERVER_ERROR", qg = [-32700, -32600, -32601, -32602, -32603], nn = {
  [Ug]: { code: -32700, message: "Parse error" },
  [Mg]: { code: -32600, message: "Invalid Request" },
  [$g]: { code: -32601, message: "Method not found" },
  [jg]: { code: -32602, message: "Invalid params" },
  [Nc]: { code: -32603, message: "Internal error" },
  [ds]: { code: -32e3, message: "Server error" }
}, Pc = ds;
function zg(t) {
  return qg.includes(t);
}
function Ho(t) {
  return Object.keys(nn).includes(t) ? nn[t] : nn[Pc];
}
function Bg(t) {
  const e = Object.values(nn).find((r) => r.code === t);
  return e || nn[Pc];
}
function Kg(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Lc = {}, kt = {}, Vo;
function Hg() {
  if (Vo)
    return kt;
  Vo = 1, Object.defineProperty(kt, "__esModule", { value: !0 }), kt.isBrowserCryptoAvailable = kt.getSubtleCrypto = kt.getBrowerCrypto = void 0;
  function t() {
    return (Et == null ? void 0 : Et.crypto) || (Et == null ? void 0 : Et.msCrypto) || {};
  }
  kt.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  kt.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return kt.isBrowserCryptoAvailable = r, kt;
}
var Gt = {}, Wo;
function Vg() {
  if (Wo)
    return Gt;
  Wo = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.isBrowser = Gt.isNode = Gt.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Gt.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Gt.isNode = e;
  function r() {
    return !t() && !e();
  }
  return Gt.isBrowser = r, Gt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Rt;
  e.__exportStar(Hg(), t), e.__exportStar(Vg(), t);
})(Lc);
function ps(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Fc(t = 6) {
  return BigInt(ps(t));
}
function cn(t, e, r) {
  return {
    id: r || ps(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function gs(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function ys(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Wg(e, r)
  };
}
function Wg(t, e) {
  return typeof t > "u" ? Ho(Nc) : (typeof t == "string" && (t = Object.assign(Object.assign({}, Ho(ds)), { message: t })), typeof e < "u" && (t.data = e), zg(t.code) && (t = Bg(t.code)), t);
}
class kg {
}
class Gg extends kg {
  constructor() {
    super();
  }
}
class Yg extends Gg {
  constructor(e) {
    super();
  }
}
const Jg = "^wss?:";
function Qg(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function Xg(t, e) {
  const r = Qg(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function ko(t) {
  return Xg(t, Jg);
}
function Zg(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function Uc(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function bs(t) {
  return Uc(t) && "method" in t;
}
function Zn(t) {
  return Uc(t) && (Qt(t) || Lt(t));
}
function Qt(t) {
  return "result" in t;
}
function Lt(t) {
  return "error" in t;
}
class e0 extends Yg {
  constructor(e) {
    super(e), this.events = new At.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(cn(e.method, e.params || [], e.id || Fc().toString()), r);
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
        Lt(s) ? i(s.error) : n(s.result);
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
    this.events.emit("payload", e), Zn(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const t0 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), r0 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Go = (t) => t.split("?")[0], Yo = 10, n0 = t0();
class i0 {
  constructor(e) {
    if (this.url = e, this.events = new At.EventEmitter(), this.registering = !1, !ko(e))
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
  async send(e, r) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(ts(e));
    } catch (n) {
      this.onError(e.id, n);
    }
  }
  register(e = this.url) {
    if (!ko(e))
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
      const i = Lc.isReactNative() ? void 0 : { rejectUnauthorized: !Zg(e) }, s = new n0(e, [], i);
      r0() ? s.onerror = (u) => {
        const a = u;
        n(this.emitError(a.error));
      } : s.on("error", (u) => {
        n(this.emitError(u));
      }), s.onopen = () => {
        this.onOpen(s), r(s);
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
    const r = typeof e.data == "string" ? Qa(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), i = n.message || n.toString(), s = ys(e, i);
    this.events.emit("payload", s);
  }
  parseError(e, r = this.url) {
    return Kg(e, Go(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Yo && this.events.setMaxListeners(Yo);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Go(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var zn = { exports: {} };
zn.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, s = 2, u = 9007199254740991, a = "[object Arguments]", l = "[object Array]", h = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", y = "[object Error]", v = "[object Function]", E = "[object GeneratorFunction]", I = "[object Map]", _ = "[object Number]", F = "[object Null]", w = "[object Object]", D = "[object Promise]", b = "[object Proxy]", S = "[object RegExp]", p = "[object Set]", o = "[object String]", g = "[object Symbol]", R = "[object Undefined]", T = "[object WeakMap]", U = "[object ArrayBuffer]", B = "[object DataView]", k = "[object Float32Array]", x = "[object Float64Array]", P = "[object Int8Array]", V = "[object Int16Array]", z = "[object Int32Array]", $ = "[object Uint8Array]", q = "[object Uint8ClampedArray]", M = "[object Uint16Array]", K = "[object Uint32Array]", te = /[\\^$.*+?()[\]{}|]/g, H = /^\[object .+?Constructor\]$/, Z = /^(?:0|[1-9]\d*)$/, J = {};
  J[k] = J[x] = J[P] = J[V] = J[z] = J[$] = J[q] = J[M] = J[K] = !0, J[a] = J[l] = J[U] = J[f] = J[B] = J[d] = J[y] = J[v] = J[I] = J[_] = J[w] = J[S] = J[p] = J[o] = J[T] = !1;
  var ee = typeof Et == "object" && Et && Et.Object === Object && Et, L = typeof self == "object" && self && self.Object === Object && self, N = ee || L || Function("return this")(), C = e && !e.nodeType && e, c = C && !0 && t && !t.nodeType && t, O = c && c.exports === C, W = O && ee.process, Y = function() {
    try {
      return W && W.binding && W.binding("util");
    } catch {
    }
  }(), he = Y && Y.isTypedArray;
  function be(m, A) {
    for (var j = -1, Q = m == null ? 0 : m.length, xe = 0, se = []; ++j < Q; ) {
      var Fe = m[j];
      A(Fe, j, m) && (se[xe++] = Fe);
    }
    return se;
  }
  function de(m, A) {
    for (var j = -1, Q = A.length, xe = m.length; ++j < Q; )
      m[xe + j] = A[j];
    return m;
  }
  function _e(m, A) {
    for (var j = -1, Q = m == null ? 0 : m.length; ++j < Q; )
      if (A(m[j], j, m))
        return !0;
    return !1;
  }
  function Ue(m, A) {
    for (var j = -1, Q = Array(m); ++j < m; )
      Q[j] = A(j);
    return Q;
  }
  function Ne(m) {
    return function(A) {
      return m(A);
    };
  }
  function ye(m, A) {
    return m.has(A);
  }
  function pe(m, A) {
    return m == null ? void 0 : m[A];
  }
  function fe(m) {
    var A = -1, j = Array(m.size);
    return m.forEach(function(Q, xe) {
      j[++A] = [xe, Q];
    }), j;
  }
  function ue(m, A) {
    return function(j) {
      return m(A(j));
    };
  }
  function ce(m) {
    var A = -1, j = Array(m.size);
    return m.forEach(function(Q) {
      j[++A] = Q;
    }), j;
  }
  var ae = Array.prototype, oe = Function.prototype, re = Object.prototype, le = N["__core-js_shared__"], ge = oe.toString, ne = re.hasOwnProperty, me = function() {
    var m = /[^.]+$/.exec(le && le.keys && le.keys.IE_PROTO || "");
    return m ? "Symbol(src)_1." + m : "";
  }(), we = re.toString, Se = RegExp(
    "^" + ge.call(ne).replace(te, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), De = O ? N.Buffer : void 0, Ee = N.Symbol, Tt = N.Uint8Array, Mt = re.propertyIsEnumerable, Zt = ae.splice, wt = Ee ? Ee.toStringTag : void 0, cr = Object.getOwnPropertySymbols, jr = De ? De.isBuffer : void 0, vn = ue(Object.keys, Object), Me = Ir(N, "DataView"), Pe = Ir(N, "Map"), $e = Ir(N, "Promise"), je = Ir(N, "Set"), qe = Ir(N, "WeakMap"), Le = Ir(Object, "create"), Ve = lr(Me), We = lr(Pe), ke = lr($e), Ge = lr(je), Ye = lr(qe), He = Ee ? Ee.prototype : void 0, ze = He ? He.valueOf : void 0;
  function Ce(m) {
    var A = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++A < j; ) {
      var Q = m[A];
      this.set(Q[0], Q[1]);
    }
  }
  function Je() {
    this.__data__ = Le ? Le(null) : {}, this.size = 0;
  }
  function Qe(m) {
    var A = this.has(m) && delete this.__data__[m];
    return this.size -= A ? 1 : 0, A;
  }
  function su(m) {
    var A = this.__data__;
    if (Le) {
      var j = A[m];
      return j === n ? void 0 : j;
    }
    return ne.call(A, m) ? A[m] : void 0;
  }
  function ou(m) {
    var A = this.__data__;
    return Le ? A[m] !== void 0 : ne.call(A, m);
  }
  function au(m, A) {
    var j = this.__data__;
    return this.size += this.has(m) ? 0 : 1, j[m] = Le && A === void 0 ? n : A, this;
  }
  Ce.prototype.clear = Je, Ce.prototype.delete = Qe, Ce.prototype.get = su, Ce.prototype.has = ou, Ce.prototype.set = au;
  function Vt(m) {
    var A = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++A < j; ) {
      var Q = m[A];
      this.set(Q[0], Q[1]);
    }
  }
  function cu() {
    this.__data__ = [], this.size = 0;
  }
  function uu(m) {
    var A = this.__data__, j = _n(A, m);
    if (j < 0)
      return !1;
    var Q = A.length - 1;
    return j == Q ? A.pop() : Zt.call(A, j, 1), --this.size, !0;
  }
  function lu(m) {
    var A = this.__data__, j = _n(A, m);
    return j < 0 ? void 0 : A[j][1];
  }
  function hu(m) {
    return _n(this.__data__, m) > -1;
  }
  function fu(m, A) {
    var j = this.__data__, Q = _n(j, m);
    return Q < 0 ? (++this.size, j.push([m, A])) : j[Q][1] = A, this;
  }
  Vt.prototype.clear = cu, Vt.prototype.delete = uu, Vt.prototype.get = lu, Vt.prototype.has = hu, Vt.prototype.set = fu;
  function ur(m) {
    var A = -1, j = m == null ? 0 : m.length;
    for (this.clear(); ++A < j; ) {
      var Q = m[A];
      this.set(Q[0], Q[1]);
    }
  }
  function du() {
    this.size = 0, this.__data__ = {
      hash: new Ce(),
      map: new (Pe || Vt)(),
      string: new Ce()
    };
  }
  function pu(m) {
    var A = En(this, m).delete(m);
    return this.size -= A ? 1 : 0, A;
  }
  function gu(m) {
    return En(this, m).get(m);
  }
  function yu(m) {
    return En(this, m).has(m);
  }
  function bu(m, A) {
    var j = En(this, m), Q = j.size;
    return j.set(m, A), this.size += j.size == Q ? 0 : 1, this;
  }
  ur.prototype.clear = du, ur.prototype.delete = pu, ur.prototype.get = gu, ur.prototype.has = yu, ur.prototype.set = bu;
  function wn(m) {
    var A = -1, j = m == null ? 0 : m.length;
    for (this.__data__ = new ur(); ++A < j; )
      this.add(m[A]);
  }
  function mu(m) {
    return this.__data__.set(m, n), this;
  }
  function vu(m) {
    return this.__data__.has(m);
  }
  wn.prototype.add = wn.prototype.push = mu, wn.prototype.has = vu;
  function er(m) {
    var A = this.__data__ = new Vt(m);
    this.size = A.size;
  }
  function wu() {
    this.__data__ = new Vt(), this.size = 0;
  }
  function _u(m) {
    var A = this.__data__, j = A.delete(m);
    return this.size = A.size, j;
  }
  function Eu(m) {
    return this.__data__.get(m);
  }
  function Su(m) {
    return this.__data__.has(m);
  }
  function Du(m, A) {
    var j = this.__data__;
    if (j instanceof Vt) {
      var Q = j.__data__;
      if (!Pe || Q.length < r - 1)
        return Q.push([m, A]), this.size = ++j.size, this;
      j = this.__data__ = new ur(Q);
    }
    return j.set(m, A), this.size = j.size, this;
  }
  er.prototype.clear = wu, er.prototype.delete = _u, er.prototype.get = Eu, er.prototype.has = Su, er.prototype.set = Du;
  function Iu(m, A) {
    var j = Sn(m), Q = !j && qu(m), xe = !j && !Q && ii(m), se = !j && !Q && !xe && Ls(m), Fe = j || Q || xe || se, Xe = Fe ? Ue(m.length, String) : [], rt = Xe.length;
    for (var Re in m)
      (A || ne.call(m, Re)) && !(Fe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Re == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      xe && (Re == "offset" || Re == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      se && (Re == "buffer" || Re == "byteLength" || Re == "byteOffset") || // Skip index properties.
      Fu(Re, rt))) && Xe.push(Re);
    return Xe;
  }
  function _n(m, A) {
    for (var j = m.length; j--; )
      if (Rs(m[j][0], A))
        return j;
    return -1;
  }
  function Ou(m, A, j) {
    var Q = A(m);
    return Sn(m) ? Q : de(Q, j(m));
  }
  function qr(m) {
    return m == null ? m === void 0 ? R : F : wt && wt in Object(m) ? Pu(m) : ju(m);
  }
  function Os(m) {
    return zr(m) && qr(m) == a;
  }
  function xs(m, A, j, Q, xe) {
    return m === A ? !0 : m == null || A == null || !zr(m) && !zr(A) ? m !== m && A !== A : xu(m, A, j, Q, xs, xe);
  }
  function xu(m, A, j, Q, xe, se) {
    var Fe = Sn(m), Xe = Sn(A), rt = Fe ? l : tr(m), Re = Xe ? l : tr(A);
    rt = rt == a ? w : rt, Re = Re == a ? w : Re;
    var _t = rt == w, Nt = Re == w, st = rt == Re;
    if (st && ii(m)) {
      if (!ii(A))
        return !1;
      Fe = !0, _t = !1;
    }
    if (st && !_t)
      return se || (se = new er()), Fe || Ls(m) ? Cs(m, A, j, Q, xe, se) : Tu(m, A, rt, j, Q, xe, se);
    if (!(j & i)) {
      var Ot = _t && ne.call(m, "__wrapped__"), xt = Nt && ne.call(A, "__wrapped__");
      if (Ot || xt) {
        var rr = Ot ? m.value() : m, Wt = xt ? A.value() : A;
        return se || (se = new er()), xe(rr, Wt, j, Q, se);
      }
    }
    return st ? (se || (se = new er()), Nu(m, A, j, Q, xe, se)) : !1;
  }
  function Cu(m) {
    if (!Ps(m) || Mu(m))
      return !1;
    var A = Ts(m) ? Se : H;
    return A.test(lr(m));
  }
  function Au(m) {
    return zr(m) && Ns(m.length) && !!J[qr(m)];
  }
  function Ru(m) {
    if (!$u(m))
      return vn(m);
    var A = [];
    for (var j in Object(m))
      ne.call(m, j) && j != "constructor" && A.push(j);
    return A;
  }
  function Cs(m, A, j, Q, xe, se) {
    var Fe = j & i, Xe = m.length, rt = A.length;
    if (Xe != rt && !(Fe && rt > Xe))
      return !1;
    var Re = se.get(m);
    if (Re && se.get(A))
      return Re == A;
    var _t = -1, Nt = !0, st = j & s ? new wn() : void 0;
    for (se.set(m, A), se.set(A, m); ++_t < Xe; ) {
      var Ot = m[_t], xt = A[_t];
      if (Q)
        var rr = Fe ? Q(xt, Ot, _t, A, m, se) : Q(Ot, xt, _t, m, A, se);
      if (rr !== void 0) {
        if (rr)
          continue;
        Nt = !1;
        break;
      }
      if (st) {
        if (!_e(A, function(Wt, hr) {
          if (!ye(st, hr) && (Ot === Wt || xe(Ot, Wt, j, Q, se)))
            return st.push(hr);
        })) {
          Nt = !1;
          break;
        }
      } else if (!(Ot === xt || xe(Ot, xt, j, Q, se))) {
        Nt = !1;
        break;
      }
    }
    return se.delete(m), se.delete(A), Nt;
  }
  function Tu(m, A, j, Q, xe, se, Fe) {
    switch (j) {
      case B:
        if (m.byteLength != A.byteLength || m.byteOffset != A.byteOffset)
          return !1;
        m = m.buffer, A = A.buffer;
      case U:
        return !(m.byteLength != A.byteLength || !se(new Tt(m), new Tt(A)));
      case f:
      case d:
      case _:
        return Rs(+m, +A);
      case y:
        return m.name == A.name && m.message == A.message;
      case S:
      case o:
        return m == A + "";
      case I:
        var Xe = fe;
      case p:
        var rt = Q & i;
        if (Xe || (Xe = ce), m.size != A.size && !rt)
          return !1;
        var Re = Fe.get(m);
        if (Re)
          return Re == A;
        Q |= s, Fe.set(m, A);
        var _t = Cs(Xe(m), Xe(A), Q, xe, se, Fe);
        return Fe.delete(m), _t;
      case g:
        if (ze)
          return ze.call(m) == ze.call(A);
    }
    return !1;
  }
  function Nu(m, A, j, Q, xe, se) {
    var Fe = j & i, Xe = As(m), rt = Xe.length, Re = As(A), _t = Re.length;
    if (rt != _t && !Fe)
      return !1;
    for (var Nt = rt; Nt--; ) {
      var st = Xe[Nt];
      if (!(Fe ? st in A : ne.call(A, st)))
        return !1;
    }
    var Ot = se.get(m);
    if (Ot && se.get(A))
      return Ot == A;
    var xt = !0;
    se.set(m, A), se.set(A, m);
    for (var rr = Fe; ++Nt < rt; ) {
      st = Xe[Nt];
      var Wt = m[st], hr = A[st];
      if (Q)
        var Fs = Fe ? Q(hr, Wt, st, A, m, se) : Q(Wt, hr, st, m, A, se);
      if (!(Fs === void 0 ? Wt === hr || xe(Wt, hr, j, Q, se) : Fs)) {
        xt = !1;
        break;
      }
      rr || (rr = st == "constructor");
    }
    if (xt && !rr) {
      var Dn = m.constructor, In = A.constructor;
      Dn != In && "constructor" in m && "constructor" in A && !(typeof Dn == "function" && Dn instanceof Dn && typeof In == "function" && In instanceof In) && (xt = !1);
    }
    return se.delete(m), se.delete(A), xt;
  }
  function As(m) {
    return Ou(m, Ku, Lu);
  }
  function En(m, A) {
    var j = m.__data__;
    return Uu(A) ? j[typeof A == "string" ? "string" : "hash"] : j.map;
  }
  function Ir(m, A) {
    var j = pe(m, A);
    return Cu(j) ? j : void 0;
  }
  function Pu(m) {
    var A = ne.call(m, wt), j = m[wt];
    try {
      m[wt] = void 0;
      var Q = !0;
    } catch {
    }
    var xe = we.call(m);
    return Q && (A ? m[wt] = j : delete m[wt]), xe;
  }
  var Lu = cr ? function(m) {
    return m == null ? [] : (m = Object(m), be(cr(m), function(A) {
      return Mt.call(m, A);
    }));
  } : Hu, tr = qr;
  (Me && tr(new Me(new ArrayBuffer(1))) != B || Pe && tr(new Pe()) != I || $e && tr($e.resolve()) != D || je && tr(new je()) != p || qe && tr(new qe()) != T) && (tr = function(m) {
    var A = qr(m), j = A == w ? m.constructor : void 0, Q = j ? lr(j) : "";
    if (Q)
      switch (Q) {
        case Ve:
          return B;
        case We:
          return I;
        case ke:
          return D;
        case Ge:
          return p;
        case Ye:
          return T;
      }
    return A;
  });
  function Fu(m, A) {
    return A = A ?? u, !!A && (typeof m == "number" || Z.test(m)) && m > -1 && m % 1 == 0 && m < A;
  }
  function Uu(m) {
    var A = typeof m;
    return A == "string" || A == "number" || A == "symbol" || A == "boolean" ? m !== "__proto__" : m === null;
  }
  function Mu(m) {
    return !!me && me in m;
  }
  function $u(m) {
    var A = m && m.constructor, j = typeof A == "function" && A.prototype || re;
    return m === j;
  }
  function ju(m) {
    return we.call(m);
  }
  function lr(m) {
    if (m != null) {
      try {
        return ge.call(m);
      } catch {
      }
      try {
        return m + "";
      } catch {
      }
    }
    return "";
  }
  function Rs(m, A) {
    return m === A || m !== m && A !== A;
  }
  var qu = Os(function() {
    return arguments;
  }()) ? Os : function(m) {
    return zr(m) && ne.call(m, "callee") && !Mt.call(m, "callee");
  }, Sn = Array.isArray;
  function zu(m) {
    return m != null && Ns(m.length) && !Ts(m);
  }
  var ii = jr || Vu;
  function Bu(m, A) {
    return xs(m, A);
  }
  function Ts(m) {
    if (!Ps(m))
      return !1;
    var A = qr(m);
    return A == v || A == E || A == h || A == b;
  }
  function Ns(m) {
    return typeof m == "number" && m > -1 && m % 1 == 0 && m <= u;
  }
  function Ps(m) {
    var A = typeof m;
    return m != null && (A == "object" || A == "function");
  }
  function zr(m) {
    return m != null && typeof m == "object";
  }
  var Ls = he ? Ne(he) : Au;
  function Ku(m) {
    return zu(m) ? Iu(m) : Ru(m);
  }
  function Hu() {
    return [];
  }
  function Vu() {
    return !1;
  }
  t.exports = Bu;
})(zn, zn.exports);
var s0 = zn.exports;
const o0 = /* @__PURE__ */ ln(s0);
function a0(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < t.length; i++) {
    var s = t.charAt(i), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = i;
  }
  var a = t.length, l = t.charAt(0), h = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
  function d(E) {
    if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (E.length === 0)
      return "";
    for (var I = 0, _ = 0, F = 0, w = E.length; F !== w && E[F] === 0; )
      F++, I++;
    for (var D = (w - F) * f + 1 >>> 0, b = new Uint8Array(D); F !== w; ) {
      for (var S = E[F], p = 0, o = D - 1; (S !== 0 || p < _) && o !== -1; o--, p++)
        S += 256 * b[o] >>> 0, b[o] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      _ = p, F++;
    }
    for (var g = D - _; g !== D && b[g] === 0; )
      g++;
    for (var R = l.repeat(I); g < D; ++g)
      R += t.charAt(b[g]);
    return R;
  }
  function y(E) {
    if (typeof E != "string")
      throw new TypeError("Expected String");
    if (E.length === 0)
      return new Uint8Array();
    var I = 0;
    if (E[I] !== " ") {
      for (var _ = 0, F = 0; E[I] === l; )
        _++, I++;
      for (var w = (E.length - I) * h + 1 >>> 0, D = new Uint8Array(w); E[I]; ) {
        var b = r[E.charCodeAt(I)];
        if (b === 255)
          return;
        for (var S = 0, p = w - 1; (b !== 0 || S < F) && p !== -1; p--, S++)
          b += a * D[p] >>> 0, D[p] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        F = S, I++;
      }
      if (E[I] !== " ") {
        for (var o = w - F; o !== w && D[o] === 0; )
          o++;
        for (var g = new Uint8Array(_ + (w - o)), R = _; o !== w; )
          g[R++] = D[o++];
        return g;
      }
    }
  }
  function v(E) {
    var I = y(E);
    if (I)
      return I;
    throw new Error(`Non-${e} character`);
  }
  return { encode: d, decodeUnsafe: y, decode: v };
}
var c0 = a0, u0 = c0;
const Mc = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, l0 = (t) => new TextEncoder().encode(t), h0 = (t) => new TextDecoder().decode(t);
class f0 {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class d0 {
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
    return $c(this, e);
  }
}
class p0 {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return $c(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const $c = (t, e) => new p0({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class g0 {
  constructor(e, r, n, i) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new f0(e, r, n), this.decoder = new d0(e, r, i);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const ei = ({ name: t, prefix: e, encode: r, decode: n }) => new g0(t, e, r, n), mn = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: i } = u0(r, e);
  return ei({ prefix: t, name: e, encode: n, decode: (s) => Mc(i(s)) });
}, y0 = (t, e, r, n) => {
  const i = {};
  for (let f = 0; f < e.length; ++f)
    i[e[f]] = f;
  let s = t.length;
  for (; t[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | d, a += r, a >= 8 && (a -= 8, u[h++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, b0 = (t, e, r) => {
  const n = e[e.length - 1] === "=", i = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < t.length; ++l)
    for (a = a << 8 | t[l], u += 8; u > r; )
      u -= r, s += e[i & a >> u];
  if (u && (s += e[i & a << r - u]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, it = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => ei({ prefix: e, name: t, encode(i) {
  return b0(i, n, r);
}, decode(i) {
  return y0(i, n, r, t);
} }), m0 = ei({ prefix: "\0", name: "identity", encode: (t) => h0(t), decode: (t) => l0(t) });
var v0 = Object.freeze({ __proto__: null, identity: m0 });
const w0 = it({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var _0 = Object.freeze({ __proto__: null, base2: w0 });
const E0 = it({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var S0 = Object.freeze({ __proto__: null, base8: E0 });
const D0 = mn({ prefix: "9", name: "base10", alphabet: "0123456789" });
var I0 = Object.freeze({ __proto__: null, base10: D0 });
const O0 = it({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), x0 = it({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var C0 = Object.freeze({ __proto__: null, base16: O0, base16upper: x0 });
const A0 = it({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), R0 = it({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), T0 = it({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), N0 = it({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), P0 = it({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), L0 = it({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), F0 = it({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), U0 = it({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), M0 = it({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var $0 = Object.freeze({ __proto__: null, base32: A0, base32upper: R0, base32pad: T0, base32padupper: N0, base32hex: P0, base32hexupper: L0, base32hexpad: F0, base32hexpadupper: U0, base32z: M0 });
const j0 = mn({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), q0 = mn({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var z0 = Object.freeze({ __proto__: null, base36: j0, base36upper: q0 });
const B0 = mn({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), K0 = mn({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var H0 = Object.freeze({ __proto__: null, base58btc: B0, base58flickr: K0 });
const V0 = it({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), W0 = it({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), k0 = it({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), G0 = it({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Y0 = Object.freeze({ __proto__: null, base64: V0, base64pad: W0, base64url: k0, base64urlpad: G0 });
const jc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), J0 = jc.reduce((t, e, r) => (t[r] = e, t), []), Q0 = jc.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function X0(t) {
  return t.reduce((e, r) => (e += J0[r], e), "");
}
function Z0(t) {
  const e = [];
  for (const r of t) {
    const n = Q0[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const ey = ei({ prefix: "🚀", name: "base256emoji", encode: X0, decode: Z0 });
var ty = Object.freeze({ __proto__: null, base256emoji: ey }), ry = qc, Jo = 128, ny = 127, iy = ~ny, sy = Math.pow(2, 31);
function qc(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= sy; )
    e[r++] = t & 255 | Jo, t /= 128;
  for (; t & iy; )
    e[r++] = t & 255 | Jo, t >>>= 7;
  return e[r] = t | 0, qc.bytes = r - n + 1, e;
}
var oy = Wi, ay = 128, Qo = 127;
function Wi(t, n) {
  var r = 0, n = n || 0, i = 0, s = n, u, a = t.length;
  do {
    if (s >= a)
      throw Wi.bytes = 0, new RangeError("Could not decode varint");
    u = t[s++], r += i < 28 ? (u & Qo) << i : (u & Qo) * Math.pow(2, i), i += 7;
  } while (u >= ay);
  return Wi.bytes = s - n, r;
}
var cy = Math.pow(2, 7), uy = Math.pow(2, 14), ly = Math.pow(2, 21), hy = Math.pow(2, 28), fy = Math.pow(2, 35), dy = Math.pow(2, 42), py = Math.pow(2, 49), gy = Math.pow(2, 56), yy = Math.pow(2, 63), by = function(t) {
  return t < cy ? 1 : t < uy ? 2 : t < ly ? 3 : t < hy ? 4 : t < fy ? 5 : t < dy ? 6 : t < py ? 7 : t < gy ? 8 : t < yy ? 9 : 10;
}, my = { encode: ry, decode: oy, encodingLength: by }, zc = my;
const Xo = (t, e, r = 0) => (zc.encode(t, e, r), e), Zo = (t) => zc.encodingLength(t), ki = (t, e) => {
  const r = e.byteLength, n = Zo(t), i = n + Zo(r), s = new Uint8Array(i + r);
  return Xo(t, s, 0), Xo(r, s, n), s.set(e, i), new vy(t, r, e, s);
};
class vy {
  constructor(e, r, n, i) {
    this.code = e, this.size = r, this.digest = n, this.bytes = i;
  }
}
const Bc = ({ name: t, code: e, encode: r }) => new wy(t, e, r);
class wy {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? ki(this.code, r) : r.then((n) => ki(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Kc = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), _y = Bc({ name: "sha2-256", code: 18, encode: Kc("SHA-256") }), Ey = Bc({ name: "sha2-512", code: 19, encode: Kc("SHA-512") });
var Sy = Object.freeze({ __proto__: null, sha256: _y, sha512: Ey });
const Hc = 0, Dy = "identity", Vc = Mc, Iy = (t) => ki(Hc, Vc(t)), Oy = { code: Hc, name: Dy, encode: Vc, digest: Iy };
var xy = Object.freeze({ __proto__: null, identity: Oy });
new TextEncoder(), new TextDecoder();
const ea = { ...v0, ..._0, ...S0, ...I0, ...C0, ...$0, ...z0, ...H0, ...Y0, ...ty };
({ ...Sy, ...xy });
function Wc(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Cy(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Wc(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function kc(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const ta = kc("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), mi = kc("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Cy(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Ay = { utf8: ta, "utf-8": ta, hex: ea.base16, latin1: mi, ascii: mi, binary: mi, ...ea };
function Ry(t, e = "utf8") {
  const r = Ay[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Wc(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Gc = "wc", Ty = 2, ms = "core", sr = `${Gc}@2:${ms}:`, Ny = { name: ms, logger: "error" }, Py = { database: ":memory:" }, Ly = "crypto", ra = "client_ed25519_seed", Fy = X.ONE_DAY, Uy = "keychain", My = "0.3", $y = "messages", jy = "0.3", qy = X.SIX_HOURS, zy = "publisher", Yc = "irn", By = "error", Jc = "wss://relay.walletconnect.com", na = "wss://relay.walletconnect.org", Ky = "relayer", ht = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Hy = "_subscription", Yt = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Vy = X.ONE_SECOND, Wy = "2.10.0", ky = 1e4, Gy = "0.3", Yy = "WALLETCONNECT_CLIENT_ID", Bt = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Jy = "subscription", Qy = "0.3", Xy = X.FIVE_SECONDS * 1e3, Zy = "pairing", e1 = "0.3", Jr = { wc_pairingDelete: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 0 } } }, zt = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, t1 = "history", r1 = "0.3", n1 = "expirer", Ct = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, i1 = "0.3", vi = "verify-api", Fn = "https://verify.walletconnect.com", ia = "https://verify.walletconnect.org";
class s1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = Uy, this.version = My, this.initialized = !1, this.storagePrefix = sr, this.init = async () => {
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
        const { message: s } = G("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(s);
      }
      return i;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = e, this.logger = ve.generateChildLogger(r, this.name);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Oc(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? xc(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class o1 {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = Ly, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), s = Eo(i);
      return fc(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = Sp();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const s = await this.getClientSeed(), u = Eo(s), a = Hi();
      return await Td(a, i, Fy, u);
    }, this.generateSharedKey = (i, s, u) => {
      this.isInitialized();
      const a = this.getPrivateKey(i), l = Dp(a, s);
      return this.setSymKey(l, u);
    }, this.setSymKey = async (i, s) => {
      this.isInitialized();
      const u = s || Ip(i);
      return await this.keychain.set(u, i), u;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, s, u) => {
      this.isInitialized();
      const a = Ic(u), l = ts(s);
      if (Po(a)) {
        const y = a.senderPublicKey, v = a.receiverPublicKey;
        i = await this.generateSharedKey(y, v);
      }
      const h = this.getSymKey(i), { type: f, senderPublicKey: d } = a;
      return xp({ type: f, symKey: h, message: l, senderPublicKey: d });
    }, this.decode = async (i, s, u) => {
      this.isInitialized();
      const a = Rp(s, u);
      if (Po(a)) {
        const l = a.receiverPublicKey, h = a.senderPublicKey;
        i = await this.generateSharedKey(l, h);
      }
      try {
        const l = this.getSymKey(i), h = Cp({ symKey: l, encoded: s });
        return Qa(h);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (i) => {
      const s = jn(i);
      return pn(s.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const s = jn(i);
      return s.senderPublicKey ? yt(s.senderPublicKey, gt) : void 0;
    }, this.core = e, this.logger = ve.generateChildLogger(r, this.name), this.keychain = n || new s1(this.core, this.logger);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
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
      e = this.keychain.get(ra);
    } catch {
      e = Hi(), await this.keychain.set(ra, e);
    }
    return Ry(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class a1 extends Ph {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = $y, this.version = jy, this.initialized = !1, this.storagePrefix = sr, this.init = async () => {
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
      const s = Nr(i);
      let u = this.messages.get(n);
      return typeof u > "u" && (u = {}), typeof u[s] < "u" || (u[s] = i, this.messages.set(n, u), await this.persist()), s;
    }, this.get = (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (n, i) => {
      this.isInitialized();
      const s = this.get(n), u = Nr(i);
      return typeof s[u] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = ve.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Oc(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? xc(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class c1 extends Lh {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new At.EventEmitter(), this.name = zy, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = X.toMiliseconds(X.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, i, s) => {
      var u;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      try {
        const a = (s == null ? void 0 : s.ttl) || qy, l = Vi(s), h = (s == null ? void 0 : s.prompt) || !1, f = (s == null ? void 0 : s.tag) || 0, d = (s == null ? void 0 : s.id) || Fc().toString(), y = { topic: n, message: i, opts: { ttl: a, relay: l, prompt: h, tag: f, id: d } }, v = setTimeout(() => this.queue.set(d, y), this.publishTimeout);
        try {
          await await an(this.rpcPublish(n, i, a, l, h, f, d), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(d), this.relayer.events.emit(ht.publish, y);
        } catch (E) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (u = s == null ? void 0 : s.internal) != null && u.throwOnFailedPublish)
            throw this.removeRequestFromQueue(d), E;
          return;
        } finally {
          clearTimeout(v);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      } catch (a) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a), a;
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.relayer = e, this.logger = ve.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, i, s, u, a) {
    var l, h, f, d;
    const y = { method: Pn(i.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: s, tag: u }, id: a };
    return pt((l = y.params) == null ? void 0 : l.prompt) && ((h = y.params) == null || delete h.prompt), pt((f = y.params) == null ? void 0 : f.tag) && ((d = y.params) == null || delete d.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y }), this.relayer.request(y);
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
    this.relayer.core.heartbeat.on(Lr.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(ht.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(ht.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class u1 {
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
var l1 = Object.defineProperty, h1 = Object.defineProperties, f1 = Object.getOwnPropertyDescriptors, sa = Object.getOwnPropertySymbols, d1 = Object.prototype.hasOwnProperty, p1 = Object.prototype.propertyIsEnumerable, oa = (t, e, r) => e in t ? l1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Qr = (t, e) => {
  for (var r in e || (e = {}))
    d1.call(e, r) && oa(t, r, e[r]);
  if (sa)
    for (var r of sa(e))
      p1.call(e, r) && oa(t, r, e[r]);
  return t;
}, wi = (t, e) => h1(t, f1(e));
class g1 extends Mh {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new u1(), this.events = new At.EventEmitter(), this.name = Jy, this.version = Qy, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = sr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const s = Vi(i), u = { topic: n, relay: s };
        this.pending.set(n, u);
        const a = await this.rpcSubscribe(n, s);
        return this.onSubscribe(a, u), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } }), a;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(n, i.id, i) : await this.unsubscribeByTopic(n, i);
    }, this.isSubscribed = async (n) => this.topics.includes(n) ? !0 : await new Promise((i, s) => {
      const u = new X.Watch();
      u.start(this.pendingSubscriptionWatchLabel);
      const a = setInterval(() => {
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), i(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= Xy && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
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
    }, this.relayer = e, this.logger = ve.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
      const i = Vi(n);
      await this.rpcUnsubscribe(e, r, i);
      const s = Ke("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: Pn(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await an(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(ht.connection_stalled);
    }
    return Nr(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: Pn(r.protocol).batchSubscribe, params: { topics: e.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await an(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(ht.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const i = { method: Pn(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, wi(Qr({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Qr({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, Qr({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Bt.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: n } = G("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const n = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Bt.deleted, wi(Qr({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Bt.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(Bt.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
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
    bn(r) && this.onBatchSubscribe(r.map((n, i) => wi(Qr({}, e[i]), { id: n })));
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
    this.relayer.core.heartbeat.on(Lr.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(ht.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(ht.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Bt.created, async (e) => {
      const r = Bt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(Bt.deleted, async (e) => {
      const r = Bt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
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
var y1 = Object.defineProperty, aa = Object.getOwnPropertySymbols, b1 = Object.prototype.hasOwnProperty, m1 = Object.prototype.propertyIsEnumerable, ca = (t, e, r) => e in t ? y1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, v1 = (t, e) => {
  for (var r in e || (e = {}))
    b1.call(e, r) && ca(t, r, e[r]);
  if (aa)
    for (var r of aa(e))
      m1.call(e, r) && ca(t, r, e[r]);
  return t;
};
class w1 extends Fh {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new At.EventEmitter(), this.name = Ky, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(ht.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(ht.error, r);
    }, this.registerProviderListeners = () => {
      this.provider.on(Yt.payload, this.onPayloadHandler), this.provider.on(Yt.connect, this.onConnectHandler), this.provider.on(Yt.disconnect, this.onDisconnectHandler), this.provider.on(Yt.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? ve.generateChildLogger(e.logger, this.name) : ve.pino(ve.getDefaultLoggerOptions({ level: e.logger || By })), this.messages = new a1(this.logger, e.core), this.subscriber = new g1(this, this.logger), this.publisher = new c1(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Jc, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${na}...`), await this.restartTransport(na);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, ky);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
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
    return i || (await Promise.all([new Promise((s) => {
      this.subscriber.once(Bt.created, (u) => {
        u.topic === e && s();
      });
    }), new Promise(async (s) => {
      i = await this.subscriber.subscribe(e, r), s();
    })]), i);
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await an(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(Bt.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await an(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
        this.provider.events.emit(Yt.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Ko())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new e0(new i0(zp({ sdkVersion: Wy, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), bs(e)) {
      if (!e.method.endsWith(Hy))
        return;
      const r = e.params, { topic: n, message: i, publishedAt: s } = r.data, u = { topic: n, message: i, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(v1({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(e), await this.onMessageEvent(u);
    } else
      Zn(e) && this.events.emit(ht.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(ht.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = gs(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Yt.payload, this.onPayloadHandler), this.provider.off(Yt.connect, this.onConnectHandler), this.provider.off(Yt.disconnect, this.onDisconnectHandler), this.provider.off(Yt.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(ht.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await Ko();
    Pg(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(ht.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, X.toMiliseconds(Vy)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
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
var _1 = Object.defineProperty, ua = Object.getOwnPropertySymbols, E1 = Object.prototype.hasOwnProperty, S1 = Object.prototype.propertyIsEnumerable, la = (t, e, r) => e in t ? _1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ha = (t, e) => {
  for (var r in e || (e = {}))
    E1.call(e, r) && la(t, r, e[r]);
  if (ua)
    for (var r of ua(e))
      S1.call(e, r) && la(t, r, e[r]);
  return t;
};
class ti extends Uh {
  constructor(e, r, n, i = sr, s = void 0) {
    super(e, r, n, i), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = Gy, this.cached = [], this.initialized = !1, this.storagePrefix = sr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !pt(u) ? this.map.set(this.getKey(u), u) : lg(u) ? this.map.set(u.id, u) : hg(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, a) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: a }), this.map.set(u, a), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((a) => Object.keys(u).every((l) => o0(a[l], u[l]))) : this.values), this.update = async (u, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: a });
      const l = ha(ha({}, this.getData(u)), a);
      this.map.set(u, l), await this.persist();
    }, this.delete = async (u, a) => {
      this.isInitialized(), this.map.has(u) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: u, reason: a }), this.map.delete(u), await this.persist());
    }, this.logger = ve.generateChildLogger(r, this.name), this.storagePrefix = i, this.getKey = s;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
      const { message: n } = G("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class D1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = Zy, this.version = e1, this.events = new es(), this.initialized = !1, this.storagePrefix = sr, this.ignoredPayloadTypes = [Dr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = Hi(), i = await this.core.crypto.setSymKey(n), s = Pt(X.FIVE_MINUTES), u = { protocol: Yc }, a = { topic: i, expiry: s, relay: u, active: !1 }, l = eg({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: n, relay: u });
      return await this.pairings.set(i, a), await this.core.relayer.subscribe(i), this.core.expirer.set(i, s), { topic: i, uri: l };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: i, symKey: s, relay: u } = Qp(n.uri);
      if (this.pairings.keys.includes(i))
        throw new Error(`Pairing already exists: ${i}`);
      if (this.core.crypto.hasKeys(i))
        throw new Error(`Keychain already exists: ${i}`);
      const a = Pt(X.FIVE_MINUTES), l = { topic: i, relay: u, expiry: a, active: !1 };
      return await this.pairings.set(i, l), await this.core.crypto.setSymKey(s, i), await this.core.relayer.subscribe(i, { relay: u }), this.core.expirer.set(i, a), n.activatePairing && await this.activate({ topic: i }), l;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const i = Pt(X.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: i }), this.core.expirer.set(n, i);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_pairingPing", {}), { done: u, resolve: a, reject: l } = Ar();
        this.events.once(Be("pairing_ping", s), ({ error: h }) => {
          h ? l(h) : a();
        }), await u();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: i });
    }, this.updateMetadata = async ({ topic: n, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: i } = n;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", Ke("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (n, i, s) => {
      const u = cn(i, s), a = await this.core.crypto.encode(n, u), l = Jr[i].req;
      return this.core.history.set(n, u), this.core.relayer.publish(n, a, l), u.id;
    }, this.sendResult = async (n, i, s) => {
      const u = gs(n, s), a = await this.core.crypto.encode(i, u), l = await this.core.history.get(i, n), h = Jr[l.request.method].res;
      await this.core.relayer.publish(i, a, h), await this.core.history.resolve(u);
    }, this.sendError = async (n, i, s) => {
      const u = ys(n, s), a = await this.core.crypto.encode(i, u), l = await this.core.history.get(i, n), h = Jr[l.request.method] ? Jr[l.request.method].res : Jr.unregistered_method.res;
      await this.core.relayer.publish(i, a, h), await this.core.history.resolve(u);
    }, this.deletePairing = async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, Ke("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((i) => ir(i.expiry));
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
      const { topic: i, payload: s } = n, u = (await this.core.history.get(i, s.id)).request.method;
      switch (u) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, s);
        default:
          return this.onUnknownRpcMethodResponse(u);
      }
    }, this.onPairingPingRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(s, n, !0), this.events.emit("pairing_ping", { id: s, topic: n });
      } catch (u) {
        await this.sendError(s, n, u), this.logger.error(u);
      }
    }, this.onPairingPingResponse = (n, i) => {
      const { id: s } = i;
      setTimeout(() => {
        Qt(i) ? this.events.emit(Be("pairing_ping", s), {}) : Lt(i) && this.events.emit(Be("pairing_ping", s), { error: i.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit("pairing_delete", { id: s, topic: n });
      } catch (u) {
        await this.sendError(s, n, u), this.logger.error(u);
      }
    }, this.onUnknownRpcMethodRequest = async (n, i) => {
      const { id: s, method: u } = i;
      try {
        if (this.registeredMethods.includes(u))
          return;
        const a = Ke("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(s, n, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(s, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(Ke("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      if (!mt(n)) {
        const { message: i } = G("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(i);
      }
      if (!ug(n.uri)) {
        const { message: i } = G("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (n) => {
      if (!mt(n)) {
        const { message: s } = G("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (n) => {
      if (!mt(n)) {
        const { message: s } = G("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidPairingTopic = async (n) => {
      if (!tt(n, !1)) {
        const { message: i } = G("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: i } = G("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(i);
      }
      if (ir(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: i } = G("EXPIRED", `pairing topic: ${n}`);
        throw new Error(i);
      }
    }, this.core = e, this.logger = ve.generateChildLogger(r, this.name), this.pairings = new ti(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(ht.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const i = await this.core.crypto.decode(r, n);
      try {
        bs(i) ? (this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Zn(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Ct.expired, async (e) => {
      const { topic: r } = Ac(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class I1 extends Nh {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new At.EventEmitter(), this.name = t1, this.version = r1, this.cached = [], this.initialized = !1, this.storagePrefix = sr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, i, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: s }), this.records.has(i.id))
        return;
      const u = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: s, expiry: Pt(X.THIRTY_DAYS) };
      this.records.set(u.id, u), this.events.emit(zt.created, u);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = Lt(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.events.emit(zt.updated, i));
    }, this.get = async (n, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: i }), await this.getRecord(i)), this.delete = (n, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((s) => {
        if (s.topic === n) {
          if (typeof i < "u" && s.id !== i)
            return;
          this.records.delete(s.id), this.events.emit(zt.deleted, s);
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
    }, this.logger = ve.generateChildLogger(r, this.name);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
      const n = { topic: r.topic, request: cn(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
      const { message: n } = G("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(zt.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(zt.created, (e) => {
      const r = zt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(zt.updated, (e) => {
      const r = zt.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(zt.deleted, (e) => {
      const r = zt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(Lr.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        X.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class O1 extends $h {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new At.EventEmitter(), this.name = n1, this.version = i1, this.cached = [], this.initialized = !1, this.storagePrefix = sr, this.init = async () => {
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
      const s = this.formatTarget(n), u = { target: s, expiry: i };
      this.expirations.set(s, u), this.checkExpiry(s, u), this.events.emit(Ct.created, { target: s, expiration: u });
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.formatTarget(n);
      return this.getExpiration(i);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const i = this.formatTarget(n), s = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(Ct.deleted, { target: i, expiration: s });
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.logger = ve.generateChildLogger(r, this.name);
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
      return Bp(e);
    if (typeof e == "number")
      return Kp(e);
    const { message: r } = G("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Ct.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = G("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: n } = G("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: n } = r;
    X.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(Ct.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Lr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Ct.created, (e) => {
      const r = Ct.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Ct.expired, (e) => {
      const r = Ct.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Ct.deleted, (e) => {
      const r = Ct.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class x1 extends jh {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = vi, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || Xn() || !gn())
        return;
      const i = (n == null ? void 0 : n.verifyUrl) || Fn;
      this.verifyUrl !== i && this.removeIframe(), this.verifyUrl = i;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = ia;
        try {
          await this.createIframe();
        } catch (s) {
          this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(s), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (n) => {
      this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId), await this.init());
    }, this.resolve = async (n) => {
      if (this.isDevEnv)
        return "";
      const i = (n == null ? void 0 : n.verifyUrl) || Fn;
      let s = "";
      try {
        s = await this.fetchAttestation(n.attestationId, i);
      } catch (u) {
        this.logger.warn(`failed to resolve attestation: ${n.attestationId} from url: ${i}`), this.logger.warn(u), s = await this.fetchAttestation(n.attestationId, ia);
      }
      return s;
    }, this.fetchAttestation = async (n, i) => {
      var s;
      this.logger.info(`resolving attestation: ${n} from url: ${i}`);
      const u = this.startAbortTimer(X.ONE_SECOND * 2), a = await fetch(`${i}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(u), a.status === 200 ? (s = await a.json()) == null ? void 0 : s.origin : "";
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
        if (document.getElementById(vi))
          return s();
        window.addEventListener("message", i);
        const u = document.createElement("iframe");
        u.id = vi, u.src = `${this.verifyUrl}/${this.projectId}`, u.style.display = "none", document.body.append(u), this.iframe = u, n = s;
      }), new Promise((s, u) => setTimeout(() => {
        window.removeEventListener("message", i), u("verify iframe load timeout");
      }, X.toMiliseconds(X.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = ve.generateChildLogger(r, this.name), this.verifyUrl = Fn, this.abortController = new AbortController(), this.isDevEnv = hs() && process.env.IS_VITEST;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), X.toMiliseconds(e));
  }
}
var C1 = Object.defineProperty, fa = Object.getOwnPropertySymbols, A1 = Object.prototype.hasOwnProperty, R1 = Object.prototype.propertyIsEnumerable, da = (t, e, r) => e in t ? C1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, pa = (t, e) => {
  for (var r in e || (e = {}))
    A1.call(e, r) && da(t, r, e[r]);
  if (fa)
    for (var r of fa(e))
      R1.call(e, r) && da(t, r, e[r]);
  return t;
};
class vs extends Th {
  constructor(e) {
    super(e), this.protocol = Gc, this.version = Ty, this.name = ms, this.events = new At.EventEmitter(), this.initialized = !1, this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Jc;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ve.pino(ve.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Ny.logger }));
    this.logger = ve.generateChildLogger(r, this.name), this.heartbeat = new Lr.HeartBeat(), this.crypto = new o1(this, this.logger, e == null ? void 0 : e.keychain), this.history = new I1(this, this.logger), this.expirer = new O1(this, this.logger), this.storage = e != null && e.storage ? e.storage : new ph(pa(pa({}, Py), e == null ? void 0 : e.storageOptions)), this.relayer = new w1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new D1(this, this.logger), this.verify = new x1(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new vs(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(Yy, n), r;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
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
const T1 = vs, Qc = "wc", Xc = 2, Zc = "client", ws = `${Qc}@${Xc}:${Zc}:`, _i = { name: Zc, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, ga = "WALLETCONNECT_DEEPLINK_CHOICE", N1 = "proposal", P1 = "Proposal expired", L1 = "session", Rn = X.SEVEN_DAYS, F1 = "engine", Xr = { wc_sessionPropose: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: X.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: X.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: X.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: X.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: X.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Ei = { min: X.FIVE_MINUTES, max: X.SEVEN_DAYS }, Jt = { idle: "IDLE", active: "ACTIVE" }, U1 = "request", M1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var $1 = Object.defineProperty, j1 = Object.defineProperties, q1 = Object.getOwnPropertyDescriptors, ya = Object.getOwnPropertySymbols, z1 = Object.prototype.hasOwnProperty, B1 = Object.prototype.propertyIsEnumerable, ba = (t, e, r) => e in t ? $1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, bt = (t, e) => {
  for (var r in e || (e = {}))
    z1.call(e, r) && ba(t, r, e[r]);
  if (ya)
    for (var r of ya(e))
      B1.call(e, r) && ba(t, r, e[r]);
  return t;
}, Zr = (t, e) => j1(t, q1(e));
class K1 extends zh {
  constructor(e) {
    super(e), this.name = F1, this.events = new es(), this.initialized = !1, this.ignoredPayloadTypes = [Dr], this.requestQueue = { state: Jt.idle, queue: [] }, this.sessionRequestQueue = { state: Jt.idle, queue: [] }, this.requestQueueDelay = X.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(Xr) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, X.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = Zr(bt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: u, sessionProperties: a, relays: l } = n;
      let h = i, f, d = !1;
      if (h && (d = this.client.core.pairing.pairings.get(h).active), !h || !d) {
        const { topic: D, uri: b } = await this.client.core.pairing.create();
        h = D, f = b;
      }
      const y = await this.client.core.crypto.generateKeyPair(), v = bt({ requiredNamespaces: s, optionalNamespaces: u, relays: l ?? [{ protocol: Yc }], proposer: { publicKey: y, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: E, resolve: I, done: _ } = Ar(X.FIVE_MINUTES, P1);
      if (this.events.once(Be("session_connect"), async ({ error: D, session: b }) => {
        if (D)
          E(D);
        else if (b) {
          b.self.publicKey = y;
          const S = Zr(bt({}, b), { requiredNamespaces: b.requiredNamespaces, optionalNamespaces: b.optionalNamespaces });
          await this.client.session.set(b.topic, S), await this.setExpiry(b.topic, b.expiry), h && await this.client.core.pairing.updateMetadata({ topic: h, metadata: b.peer.metadata }), I(S);
        }
      }), !h) {
        const { message: D } = G("NO_MATCHING_KEY", `connect() pairing topic: ${h}`);
        throw new Error(D);
      }
      const F = await this.sendRequest({ topic: h, method: "wc_sessionPropose", params: v }), w = Pt(X.FIVE_MINUTES);
      return await this.setProposal(F, bt({ id: F, expiry: w }, v)), { uri: f, approval: _ };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: i, namespaces: s, sessionProperties: u } = r, a = this.client.proposal.get(n);
      let { pairingTopic: l, proposer: h, requiredNamespaces: f, optionalNamespaces: d } = a;
      l = l || "", rn(f) || (f = ig(s, "approve()"));
      const y = await this.client.core.crypto.generateKeyPair(), v = h.publicKey, E = await this.client.core.crypto.generateSharedKey(y, v);
      l && n && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: h.metadata }), await this.sendResult({ id: n, topic: l, result: { relay: { protocol: i ?? "irn" }, responderPublicKey: y } }), await this.client.proposal.delete(n, Ke("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const I = bt({ relay: { protocol: i ?? "irn" }, namespaces: s, requiredNamespaces: f, optionalNamespaces: d, pairingTopic: l, controller: { publicKey: y, metadata: this.client.metadata }, expiry: Pt(Rn) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(E), await this.sendRequest({ topic: E, method: "wc_sessionSettle", params: I, throwOnFailedPublish: !0 });
      const _ = Zr(bt({}, I), { topic: E, pairingTopic: l, acknowledged: !1, self: I.controller, peer: { publicKey: h.publicKey, metadata: h.metadata }, controller: y });
      return await this.client.session.set(E, _), await this.setExpiry(E, Pt(Rn)), { topic: E, acknowledged: () => new Promise((F) => setTimeout(() => F(this.client.session.get(E)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: i } = r, { pairingTopic: s } = this.client.proposal.get(n);
      s && (await this.sendError(n, s, i), await this.client.proposal.delete(n, Ke("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: i } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: i } }), { done: u, resolve: a, reject: l } = Ar();
      return this.events.once(Be("session_update", s), ({ error: h }) => {
        h ? l(h) : a();
      }), await this.client.session.update(n, { namespaces: i }), { acknowledged: u };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: s, resolve: u, reject: a } = Ar();
      return this.events.once(Be("session_extend", i), ({ error: l }) => {
        l ? a(l) : u();
      }), await this.setExpiry(n, Pt(Rn)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: i, topic: s, expiry: u } = r, a = ps(), { done: l, resolve: h, reject: f } = Ar(u);
      return this.events.once(Be("session_request", a), ({ error: d, result: y }) => {
        d ? f(d) : h(y);
      }), await Promise.all([new Promise(async (d) => {
        await this.sendRequest({ clientRpcId: a, topic: s, method: "wc_sessionRequest", params: { request: i, chainId: n }, expiry: u, throwOnFailedPublish: !0 }).catch((y) => f(y)), this.client.events.emit("session_request_sent", { topic: s, request: i, chainId: n, id: a }), d();
      }), new Promise(async (d) => {
        const y = await this.client.core.storage.getItem(ga);
        Hp({ id: a, topic: s, wcDeepLink: y }), d();
      }), l()]).then((d) => d[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: i } = r, { id: s } = i;
      Qt(i) ? await this.sendResult({ id: s, topic: n, result: i.result, throwOnFailedPublish: !0 }) : Lt(i) && await this.sendError(s, n, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: s, resolve: u, reject: a } = Ar();
        this.events.once(Be("session_ping", i), ({ error: l }) => {
          l ? a(l) : u();
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
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: Ke("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => ag(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((s) => {
            var u, a;
            return ((u = s.peerMetadata) == null ? void 0 : u.url) && ((a = s.peerMetadata) == null ? void 0 : a.url) === r.peer.metadata.url && s.topic && s.topic !== n.topic;
          });
          if (i.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r, n) => {
      const { self: i } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, Ke("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(ga).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, Ke("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), i && (this.sessionRequestQueue.state = Jt.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = Xr.wc_sessionRequest.req.ttl, { id: i, topic: s, params: u } = r;
      await this.client.pendingRequest.set(i, { id: i, topic: s, params: u }), n && this.client.core.expirer.set(i, Pt(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: i, params: s, expiry: u, relayRpcId: a, clientRpcId: l, throwOnFailedPublish: h } = r, f = cn(i, s, l);
      if (gn() && M1.includes(i)) {
        const v = Nr(JSON.stringify(f));
        this.client.core.verify.register({ attestationId: v });
      }
      const d = await this.client.core.crypto.encode(n, f), y = Xr[i].req;
      return u && (y.ttl = u), a && (y.id = a), this.client.core.history.set(n, f), h ? (y.internal = Zr(bt({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, d, y)) : this.client.core.relayer.publish(n, d, y).catch((v) => this.client.logger.error(v)), f.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: i, result: s, throwOnFailedPublish: u } = r, a = gs(n, s), l = await this.client.core.crypto.encode(i, a), h = await this.client.core.history.get(i, n), f = Xr[h.request.method].res;
      u ? (f.internal = Zr(bt({}, f.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, l, f)) : this.client.core.relayer.publish(i, l, f).catch((d) => this.client.logger.error(d)), await this.client.core.history.resolve(a);
    }, this.sendError = async (r, n, i) => {
      const s = ys(r, i), u = await this.client.core.crypto.encode(n, s), a = await this.client.core.history.get(n, r), l = Xr[a.request.method].res;
      this.client.core.relayer.publish(n, u, l), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((i) => {
        ir(i.expiry) && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        ir(i.expiry) && n.push(i.id);
      }), await Promise.all([...r.map((i) => this.deleteSession(i)), ...n.map((i) => this.deleteProposal(i))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === Jt.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Jt.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = Jt.idle;
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
      const { topic: n } = r, { message: i } = G("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(i);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        this.isValidConnect(bt({}, n.params));
        const u = Pt(X.FIVE_MINUTES), a = bt({ id: s, pairingTopic: r, expiry: u }, i);
        await this.setProposal(s, a);
        const l = Nr(JSON.stringify(n)), h = await this.getVerifyContext(l, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: a, verifyContext: h });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: i } = n;
      if (Qt(n)) {
        const { result: s } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const u = this.client.proposal.get(i);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: u });
        const a = u.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a });
        const l = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l });
        const h = await this.client.core.crypto.generateSharedKey(a, l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: h });
        const f = await this.client.core.relayer.subscribe(h);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: f }), await this.client.core.pairing.activate({ topic: r });
      } else
        Lt(n) && (await this.client.proposal.delete(i, Ke("USER_DISCONNECTED")), this.events.emit(Be("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: u, controller: a, expiry: l, namespaces: h, requiredNamespaces: f, optionalNamespaces: d, sessionProperties: y, pairingTopic: v } = n.params, E = bt({ topic: r, relay: u, expiry: l, namespaces: h, acknowledged: !0, pairingTopic: v, requiredNamespaces: f, optionalNamespaces: d, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, y && { sessionProperties: y });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(Be("session_connect"), { session: E }), this.cleanupDuplicatePairings(E);
      } catch (u) {
        await this.sendError(i, r, u), this.client.logger.error(u);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: i } = n;
      Qt(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Be("session_approve", i), {})) : Lt(n) && (await this.client.session.delete(r, Ke("USER_DISCONNECTED")), this.events.emit(Be("session_approve", i), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        const u = `${r}_session_update`, a = An.get(u);
        if (a && this.isRequestOutOfSync(a, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(bt({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: i }), An.set(u, s);
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: i } = n;
      Qt(n) ? this.events.emit(Be("session_update", i), {}) : Lt(n) && this.events.emit(Be("session_update", i), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Pt(Rn)), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: i } = n;
      Qt(n) ? this.events.emit(Be("session_extend", i), {}) : Lt(n) && this.events.emit(Be("session_extend", i), { error: n.error });
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
        Qt(n) ? this.events.emit(Be("session_ping", i), {}) : Lt(n) && this.events.emit(Be("session_ping", i), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(ht.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult({ id: i, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: i, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidRequest(bt({ topic: r }, s)), await this.setPendingSessionRequest({ id: i, topic: r, params: s }), this.addSessionRequestToSessionRequestQueue({ id: i, topic: r, params: s }), await this.processSessionRequestQueue();
      } catch (u) {
        await this.sendError(i, r, u), this.client.logger.error(u);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: i } = n;
      Qt(n) ? this.events.emit(Be("session_request", i), { result: n.result }) : Lt(n) && this.events.emit(Be("session_request", i), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        const u = `${r}_session_event_${s.event.name}`, a = An.get(u);
        if (a && this.isRequestOutOfSync(a, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidEmit(bt({ topic: r }, s)), this.client.events.emit("session_event", { id: i, topic: r, params: s }), An.set(u, i);
      } catch (u) {
        await this.sendError(i, r, u), this.client.logger.error(u);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Jt.idle, this.processSessionRequestQueue();
      }, X.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === Jt.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: n, topic: i, params: s } = r, u = Nr(JSON.stringify(cn("wc_sessionRequest", s, n))), a = this.client.session.get(i), l = await this.getVerifyContext(u, a.peer.metadata);
        this.sessionRequestQueue.state = Jt.active, this.client.events.emit("session_request", { id: n, topic: i, params: s, verifyContext: l });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.isValidConnect = async (r) => {
      if (!mt(r)) {
        const { message: l } = G("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: n, requiredNamespaces: i, optionalNamespaces: s, sessionProperties: u, relays: a } = r;
      if (pt(n) || await this.isValidPairingTopic(n), !vg(a, !0)) {
        const { message: l } = G("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !pt(i) && rn(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !pt(s) && rn(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), pt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const i = mg(r, "connect()", n);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!mt(r))
        throw new Error(G("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: i, relayProtocol: s, sessionProperties: u } = r;
      await this.isValidProposalId(n);
      const a = this.client.proposal.get(n), l = Ln(i, "approve()");
      if (l)
        throw new Error(l.message);
      const h = zo(a.requiredNamespaces, i, "approve()");
      if (h)
        throw new Error(h.message);
      if (!tt(s, !0)) {
        const { message: f } = G("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(f);
      }
      pt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!mt(r)) {
        const { message: s } = G("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: n, reason: i } = r;
      if (await this.isValidProposalId(n), !_g(i)) {
        const { message: s } = G("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!mt(r)) {
        const { message: h } = G("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(h);
      }
      const { relay: n, controller: i, namespaces: s, expiry: u } = r;
      if (!Tc(n)) {
        const { message: h } = G("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const a = fg(i, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = Ln(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (ir(u)) {
        const { message: h } = G("EXPIRED", "onSessionSettleRequest()");
        throw new Error(h);
      }
    }, this.isValidUpdate = async (r) => {
      if (!mt(r)) {
        const { message: l } = G("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, namespaces: i } = r;
      await this.isValidSessionTopic(n);
      const s = this.client.session.get(n), u = Ln(i, "update()");
      if (u)
        throw new Error(u.message);
      const a = zo(s.requiredNamespaces, i, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!mt(r)) {
        const { message: i } = G("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!mt(r)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, request: i, chainId: s, expiry: u } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!qo(a, s)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!Eg(i)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(l);
      }
      if (!Ig(a, s, i.method)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(l);
      }
      if (u && !Ag(u, Ei)) {
        const { message: l } = G("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${Ei.min} and ${Ei.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!mt(r)) {
        const { message: s } = G("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n, response: i } = r;
      if (await this.isValidSessionTopic(n), !Sg(i)) {
        const { message: s } = G("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!mt(r)) {
        const { message: i } = G("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!mt(r)) {
        const { message: a } = G("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: n, event: i, chainId: s } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: u } = this.client.session.get(n);
      if (!qo(u, s)) {
        const { message: a } = G("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!Dg(i)) {
        const { message: a } = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
      if (!Og(u, s, i.name)) {
        const { message: a } = G("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!mt(r)) {
        const { message: i } = G("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const i = { verified: { verifyUrl: n.verifyUrl || Fn, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        s && (i.verified.origin = s, i.verified.validation = s === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.error(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`), i;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((i) => {
        if (!tt(i, !1)) {
          const { message: s } = G("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(i)}`);
          throw new Error(s);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = G("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(ht.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const i = await this.client.core.crypto.decode(r, n);
      try {
        bs(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Zn(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
      } catch (s) {
        this.client.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Ct.expired, async (e) => {
      const { topic: r, id: n } = Ac(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, G("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  isValidPairingTopic(e) {
    if (!tt(e, !1)) {
      const { message: r } = G("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = G("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (ir(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = G("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!tt(e, !1)) {
      const { message: r } = G("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = G("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (ir(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: r } = G("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (tt(e, !1)) {
      const { message: r } = G("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = G("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!wg(e)) {
      const { message: r } = G("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = G("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (ir(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = G("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class H1 extends ti {
  constructor(e, r) {
    super(e, r, N1, ws), this.core = e, this.logger = r;
  }
}
class V1 extends ti {
  constructor(e, r) {
    super(e, r, L1, ws), this.core = e, this.logger = r;
  }
}
class W1 extends ti {
  constructor(e, r) {
    super(e, r, U1, ws, (n) => n.id), this.core = e, this.logger = r;
  }
}
class _s extends qh {
  constructor(e) {
    super(e), this.protocol = Qc, this.version = Xc, this.name = _i.name, this.events = new At.EventEmitter(), this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || _i.name, this.metadata = (e == null ? void 0 : e.metadata) || Mp();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : ve.pino(ve.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || _i.logger }));
    this.core = (e == null ? void 0 : e.core) || new T1(e), this.logger = ve.generateChildLogger(r, this.name), this.session = new V1(this.core, this.logger), this.proposal = new H1(this.core, this.logger), this.pendingRequest = new W1(this.core, this.logger), this.engine = new K1(this);
  }
  static async init(e) {
    const r = new _s(e);
    return await r.initialize(), r;
  }
  get context() {
    return ve.getLoggerContext(this.logger);
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
var k1 = Object.defineProperty, G1 = Object.defineProperties, Y1 = Object.getOwnPropertyDescriptors, ma = Object.getOwnPropertySymbols, J1 = Object.prototype.hasOwnProperty, Q1 = Object.prototype.propertyIsEnumerable, va = (t, e, r) => e in t ? k1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, X1 = (t, e) => {
  for (var r in e || (e = {}))
    J1.call(e, r) && va(t, r, e[r]);
  if (ma)
    for (var r of ma(e))
      Q1.call(e, r) && va(t, r, e[r]);
  return t;
}, Z1 = (t, e) => G1(t, Y1(e)), Es = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, Ae = (t, e, r) => (Es(t, e, "read from private field"), r ? r.call(t) : e.get(t)), mr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Bn = (t, e, r, n) => (Es(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), ct = (t, e, r) => (Es(t, e, "access private method"), r), vr, Rr, en, et, Gi, eu, ut, dt, Yi, wa;
class eb {
  constructor(e) {
    mr(this, Gi), mr(this, ut), mr(this, Yi), mr(this, vr, void 0), mr(this, Rr, void 0), mr(this, en, void 0), mr(this, et, void 0), Bn(this, vr, e), Bn(this, Rr, ct(this, Gi, eu).call(this)), ct(this, ut, dt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (i, s) => {
      await ct(this, ut, dt).call(this);
      const u = Ae(this, Rr).subscribeModal((h) => {
        h.open || (u(), s(new Error("Modal closed")));
      }), { uri: a, approval: l } = await Ae(this, et).connect(e);
      if (a) {
        const h = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((d) => h.add(d));
        }), n && Object.values(n).forEach(({ chains: f }) => {
          f && f.forEach((d) => h.add(d));
        }), await Ae(this, Rr).openModal({ uri: a, chains: Array.from(h) });
      }
      try {
        const h = await l();
        i(h);
      } catch (h) {
        s(h);
      } finally {
        u(), Ae(this, Rr).closeModal();
      }
    });
  }
  async disconnect(e) {
    await ct(this, ut, dt).call(this), await Ae(this, et).disconnect(e);
  }
  async request(e) {
    return await ct(this, ut, dt).call(this), await Ae(this, et).request(e);
  }
  async getSessions() {
    return await ct(this, ut, dt).call(this), Ae(this, et).session.getAll();
  }
  async getSession() {
    return await ct(this, ut, dt).call(this), Ae(this, et).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await ct(this, ut, dt).call(this), Ae(this, et).on("session_event", e);
  }
  async offSessionEvent(e) {
    await ct(this, ut, dt).call(this), Ae(this, et).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await ct(this, ut, dt).call(this), Ae(this, et).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await ct(this, ut, dt).call(this), Ae(this, et).off("session_update", e);
  }
  async onSessionDelete(e) {
    await ct(this, ut, dt).call(this), Ae(this, et).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await ct(this, ut, dt).call(this), Ae(this, et).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await ct(this, ut, dt).call(this), Ae(this, et).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await ct(this, ut, dt).call(this), Ae(this, et).off("session_expire", e);
  }
}
vr = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), Gi = /* @__PURE__ */ new WeakSet(), eu = function() {
  const { modalOptions: t, projectId: e } = Ae(this, vr);
  return new Pl(Z1(X1({}, t), { projectId: e }));
}, ut = /* @__PURE__ */ new WeakSet(), dt = async function() {
  return Ae(this, et) ? !0 : (!Ae(this, en) && typeof window < "u" && Bn(this, en, ct(this, Yi, wa).call(this)), Ae(this, en));
}, Yi = /* @__PURE__ */ new WeakSet(), wa = async function() {
  Bn(this, et, await _s.init({ metadata: Ae(this, vr).metadata, projectId: Ae(this, vr).projectId, relayUrl: Ae(this, vr).relayUrl }));
  const t = await Ae(this, et).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Ss = [
  "decrypt",
  "disconnect",
  "getSelectedAccount",
  "getBalance",
  "getRecords",
  "requestCreateEvent",
  "getEvents",
  "createSharedState",
  "importSharedState",
  "requestSignature"
], ri = ["aleo:1"], Ds = ["chainChanged", "accountSelected", "accountSynced"], tb = "f0aaeffe71b636da453fce042d79d723", rb = {
  standaloneChains: ri,
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
        // universal: 'https://jigsaw-dev.puzzle.online/',
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
}, Vb = {
  requiredNamespaces: {
    aleo: {
      methods: Ss,
      chains: ri,
      events: Ds
    }
  }
};
var tu = { exports: {} };
(function(t) {
  var e = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(l, h, f) {
    this.fn = l, this.context = h, this.once = f || !1;
  }
  function s(l, h, f, d, y) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var v = new i(f, d || l, y), E = r ? r + h : h;
    return l._events[E] ? l._events[E].fn ? l._events[E] = [l._events[E], v] : l._events[E].push(v) : (l._events[E] = v, l._eventsCount++), l;
  }
  function u(l, h) {
    --l._eventsCount === 0 ? l._events = new n() : delete l._events[h];
  }
  function a() {
    this._events = new n(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var h = [], f, d;
    if (this._eventsCount === 0)
      return h;
    for (d in f = this._events)
      e.call(f, d) && h.push(r ? d.slice(1) : d);
    return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(f)) : h;
  }, a.prototype.listeners = function(h) {
    var f = r ? r + h : h, d = this._events[f];
    if (!d)
      return [];
    if (d.fn)
      return [d.fn];
    for (var y = 0, v = d.length, E = new Array(v); y < v; y++)
      E[y] = d[y].fn;
    return E;
  }, a.prototype.listenerCount = function(h) {
    var f = r ? r + h : h, d = this._events[f];
    return d ? d.fn ? 1 : d.length : 0;
  }, a.prototype.emit = function(h, f, d, y, v, E) {
    var I = r ? r + h : h;
    if (!this._events[I])
      return !1;
    var _ = this._events[I], F = arguments.length, w, D;
    if (_.fn) {
      switch (_.once && this.removeListener(h, _.fn, void 0, !0), F) {
        case 1:
          return _.fn.call(_.context), !0;
        case 2:
          return _.fn.call(_.context, f), !0;
        case 3:
          return _.fn.call(_.context, f, d), !0;
        case 4:
          return _.fn.call(_.context, f, d, y), !0;
        case 5:
          return _.fn.call(_.context, f, d, y, v), !0;
        case 6:
          return _.fn.call(_.context, f, d, y, v, E), !0;
      }
      for (D = 1, w = new Array(F - 1); D < F; D++)
        w[D - 1] = arguments[D];
      _.fn.apply(_.context, w);
    } else {
      var b = _.length, S;
      for (D = 0; D < b; D++)
        switch (_[D].once && this.removeListener(h, _[D].fn, void 0, !0), F) {
          case 1:
            _[D].fn.call(_[D].context);
            break;
          case 2:
            _[D].fn.call(_[D].context, f);
            break;
          case 3:
            _[D].fn.call(_[D].context, f, d);
            break;
          case 4:
            _[D].fn.call(_[D].context, f, d, y);
            break;
          default:
            if (!w)
              for (S = 1, w = new Array(F - 1); S < F; S++)
                w[S - 1] = arguments[S];
            _[D].fn.apply(_[D].context, w);
        }
    }
    return !0;
  }, a.prototype.on = function(h, f, d) {
    return s(this, h, f, d, !1);
  }, a.prototype.once = function(h, f, d) {
    return s(this, h, f, d, !0);
  }, a.prototype.removeListener = function(h, f, d, y) {
    var v = r ? r + h : h;
    if (!this._events[v])
      return this;
    if (!f)
      return u(this, v), this;
    var E = this._events[v];
    if (E.fn)
      E.fn === f && (!y || E.once) && (!d || E.context === d) && u(this, v);
    else {
      for (var I = 0, _ = [], F = E.length; I < F; I++)
        (E[I].fn !== f || y && !E[I].once || d && E[I].context !== d) && _.push(E[I]);
      _.length ? this._events[v] = _.length === 1 ? _[0] : _ : u(this, v);
    }
    return this;
  }, a.prototype.removeAllListeners = function(h) {
    var f;
    return h ? (f = r ? r + h : h, this._events[f] && u(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a;
})(tu);
var nb = tu.exports;
const ib = /* @__PURE__ */ ln(nb), _a = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (l, h) => {
    const f = typeof l == "function" ? l(e) : l;
    if (!Object.is(f, e)) {
      const d = e;
      e = h ?? typeof f != "object" ? f : Object.assign({}, e, f), r.forEach((y) => y(e, d));
    }
  }, i = () => e, a = { setState: n, getState: i, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    r.clear();
  } };
  return e = t(n, i, a), a;
}, sb = (t) => t ? _a(t) : _a;
var Ji = { exports: {} }, Si = {}, Tn = { exports: {} }, Di = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function ob() {
  if (Ea)
    return Di;
  Ea = 1;
  var t = Kn;
  function e(d, y) {
    return d === y && (d !== 0 || 1 / d === 1 / y) || d !== d && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, i = t.useEffect, s = t.useLayoutEffect, u = t.useDebugValue;
  function a(d, y) {
    var v = y(), E = n({ inst: { value: v, getSnapshot: y } }), I = E[0].inst, _ = E[1];
    return s(function() {
      I.value = v, I.getSnapshot = y, l(I) && _({ inst: I });
    }, [d, v, y]), i(function() {
      return l(I) && _({ inst: I }), d(function() {
        l(I) && _({ inst: I });
      });
    }, [d]), u(v), v;
  }
  function l(d) {
    var y = d.getSnapshot;
    d = d.value;
    try {
      var v = y();
      return !r(d, v);
    } catch {
      return !0;
    }
  }
  function h(d, y) {
    return y();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : a;
  return Di.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, Di;
}
var Ii = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function ab() {
  return Sa || (Sa = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Kn, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(D) {
      {
        for (var b = arguments.length, S = new Array(b > 1 ? b - 1 : 0), p = 1; p < b; p++)
          S[p - 1] = arguments[p];
        n("error", D, S);
      }
    }
    function n(D, b, S) {
      {
        var p = e.ReactDebugCurrentFrame, o = p.getStackAddendum();
        o !== "" && (b += "%s", S = S.concat([o]));
        var g = S.map(function(R) {
          return String(R);
        });
        g.unshift("Warning: " + b), Function.prototype.apply.call(console[D], console, g);
      }
    }
    function i(D, b) {
      return D === b && (D !== 0 || 1 / D === 1 / b) || D !== D && b !== b;
    }
    var s = typeof Object.is == "function" ? Object.is : i, u = t.useState, a = t.useEffect, l = t.useLayoutEffect, h = t.useDebugValue, f = !1, d = !1;
    function y(D, b, S) {
      f || t.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var p = b();
      if (!d) {
        var o = b();
        s(p, o) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var g = u({
        inst: {
          value: p,
          getSnapshot: b
        }
      }), R = g[0].inst, T = g[1];
      return l(function() {
        R.value = p, R.getSnapshot = b, v(R) && T({
          inst: R
        });
      }, [D, p, b]), a(function() {
        v(R) && T({
          inst: R
        });
        var U = function() {
          v(R) && T({
            inst: R
          });
        };
        return D(U);
      }, [D]), h(p), p;
    }
    function v(D) {
      var b = D.getSnapshot, S = D.value;
      try {
        var p = b();
        return !s(S, p);
      } catch {
        return !0;
      }
    }
    function E(D, b, S) {
      return b();
    }
    var I = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", _ = !I, F = _ ? E : y, w = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : F;
    Ii.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ii;
}
var Da;
function ru() {
  return Da || (Da = 1, process.env.NODE_ENV === "production" ? Tn.exports = ob() : Tn.exports = ab()), Tn.exports;
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
var Ia;
function cb() {
  if (Ia)
    return Si;
  Ia = 1;
  var t = Kn, e = ru();
  function r(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, u = t.useEffect, a = t.useMemo, l = t.useDebugValue;
  return Si.useSyncExternalStoreWithSelector = function(h, f, d, y, v) {
    var E = s(null);
    if (E.current === null) {
      var I = { hasValue: !1, value: null };
      E.current = I;
    } else
      I = E.current;
    E = a(function() {
      function F(p) {
        if (!w) {
          if (w = !0, D = p, p = y(p), v !== void 0 && I.hasValue) {
            var o = I.value;
            if (v(o, p))
              return b = o;
          }
          return b = p;
        }
        if (o = b, n(D, p))
          return o;
        var g = y(p);
        return v !== void 0 && v(o, g) ? o : (D = p, b = g);
      }
      var w = !1, D, b, S = d === void 0 ? null : d;
      return [function() {
        return F(f());
      }, S === null ? void 0 : function() {
        return F(S());
      }];
    }, [f, d, y, v]);
    var _ = i(h, E[0], E[1]);
    return u(function() {
      I.hasValue = !0, I.value = _;
    }, [_]), l(_), _;
  }, Si;
}
var Oi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function ub() {
  return Oa || (Oa = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Kn, e = ru();
    function r(f, d) {
      return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = e.useSyncExternalStore, s = t.useRef, u = t.useEffect, a = t.useMemo, l = t.useDebugValue;
    function h(f, d, y, v, E) {
      var I = s(null), _;
      I.current === null ? (_ = {
        hasValue: !1,
        value: null
      }, I.current = _) : _ = I.current;
      var F = a(function() {
        var S = !1, p, o, g = function(B) {
          if (!S) {
            S = !0, p = B;
            var k = v(B);
            if (E !== void 0 && _.hasValue) {
              var x = _.value;
              if (E(x, k))
                return o = x, x;
            }
            return o = k, k;
          }
          var P = p, V = o;
          if (n(P, B))
            return V;
          var z = v(B);
          return E !== void 0 && E(V, z) ? V : (p = B, o = z, z);
        }, R = y === void 0 ? null : y, T = function() {
          return g(d());
        }, U = R === null ? void 0 : function() {
          return g(R());
        };
        return [T, U];
      }, [d, y, v, E]), w = F[0], D = F[1], b = i(f, w, D);
      return u(function() {
        _.hasValue = !0, _.value = b;
      }, [b]), l(b), b;
    }
    Oi.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Oi;
}
process.env.NODE_ENV === "production" ? Ji.exports = cb() : Ji.exports = ub();
var lb = Ji.exports;
const hb = /* @__PURE__ */ ln(lb), { useSyncExternalStoreWithSelector: fb } = hb;
function db(t, e = t.getState, r) {
  const n = fb(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return Wu(n), n;
}
const xa = (t) => {
  const e = typeof t == "function" ? sb(t) : t, r = (n, i) => db(e, n, i);
  return Object.assign(r, e), r;
}, pb = (t) => t ? xa(t) : xa;
function gb(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var s;
      const u = (l) => l === null ? null : JSON.parse(l, e == null ? void 0 : e.reviver), a = (s = r.getItem(i)) != null ? s : null;
      return a instanceof Promise ? a.then(u) : u(a);
    },
    setItem: (i, s) => r.setItem(
      i,
      JSON.stringify(s, e == null ? void 0 : e.replacer)
    ),
    removeItem: (i) => r.removeItem(i)
  };
}
const un = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return un(n)(r);
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
        return un(n)(r);
      }
    };
  }
}, yb = (t, e) => (r, n, i) => {
  let s = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (_) => _,
    version: 0,
    merge: (_, F) => ({
      ...F,
      ..._
    }),
    ...e
  }, u = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let h;
  try {
    h = s.getStorage();
  } catch {
  }
  if (!h)
    return t(
      (..._) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(..._);
      },
      n,
      i
    );
  const f = un(s.serialize), d = () => {
    const _ = s.partialize({ ...n() });
    let F;
    const w = f({ state: _, version: s.version }).then(
      (D) => h.setItem(s.name, D)
    ).catch((D) => {
      F = D;
    });
    if (F)
      throw F;
    return w;
  }, y = i.setState;
  i.setState = (_, F) => {
    y(_, F), d();
  };
  const v = t(
    (..._) => {
      r(..._), d();
    },
    n,
    i
  );
  let E;
  const I = () => {
    var _;
    if (!h)
      return;
    u = !1, a.forEach((w) => w(n()));
    const F = ((_ = s.onRehydrateStorage) == null ? void 0 : _.call(s, n())) || void 0;
    return un(h.getItem.bind(h))(s.name).then((w) => {
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
      var D;
      return E = s.merge(
        w,
        (D = n()) != null ? D : v
      ), r(E, !0), d();
    }).then(() => {
      F == null || F(E, void 0), u = !0, l.forEach((w) => w(E));
    }).catch((w) => {
      F == null || F(void 0, w);
    });
  };
  return i.persist = {
    setOptions: (_) => {
      s = {
        ...s,
        ..._
      }, _.getStorage && (h = _.getStorage());
    },
    clearStorage: () => {
      h == null || h.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => I(),
    hasHydrated: () => u,
    onHydrate: (_) => (a.add(_), () => {
      a.delete(_);
    }),
    onFinishHydration: (_) => (l.add(_), () => {
      l.delete(_);
    })
  }, I(), E || v;
}, bb = (t, e) => (r, n, i) => {
  let s = {
    storage: gb(() => localStorage),
    partialize: (I) => I,
    version: 0,
    merge: (I, _) => ({
      ..._,
      ...I
    }),
    ...e
  }, u = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let h = s.storage;
  if (!h)
    return t(
      (...I) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), r(...I);
      },
      n,
      i
    );
  const f = () => {
    const I = s.partialize({ ...n() });
    return h.setItem(s.name, {
      state: I,
      version: s.version
    });
  }, d = i.setState;
  i.setState = (I, _) => {
    d(I, _), f();
  };
  const y = t(
    (...I) => {
      r(...I), f();
    },
    n,
    i
  );
  let v;
  const E = () => {
    var I, _;
    if (!h)
      return;
    u = !1, a.forEach((w) => {
      var D;
      return w((D = n()) != null ? D : y);
    });
    const F = ((_ = s.onRehydrateStorage) == null ? void 0 : _.call(s, (I = n()) != null ? I : y)) || void 0;
    return un(h.getItem.bind(h))(s.name).then((w) => {
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
      var D;
      return v = s.merge(
        w,
        (D = n()) != null ? D : y
      ), r(v, !0), f();
    }).then(() => {
      F == null || F(v, void 0), v = n(), u = !0, l.forEach((w) => w(v));
    }).catch((w) => {
      F == null || F(void 0, w);
    });
  };
  return i.persist = {
    setOptions: (I) => {
      s = {
        ...s,
        ...I
      }, I.storage && (h = I.storage);
    },
    clearStorage: () => {
      h == null || h.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => E(),
    hasHydrated: () => u,
    onHydrate: (I) => (a.add(I), () => {
      a.delete(I);
    }),
    onFinishHydration: (I) => (l.add(I), () => {
      l.delete(I);
    })
  }, s.skipHydration || E(), v || y;
}, mb = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? yb(t, e) : bb(t, e), vb = mb, $r = pb()(
  vb((t, e) => ({
    account: void 0,
    chainId: "aleo:1",
    // todo - figure out how to populate this from useConnect
    setAccount: (r) => {
      t({ account: r });
    },
    setChainId: (r) => {
      t({ chainId: r });
    },
    disconnect: () => {
      t({
        account: void 0,
        chainId: void 0
      });
    }
  }), {
    name: "puzzle-wallet-store"
  })
), _r = new ib();
let tn;
function Wb(t) {
  tn = new eb({
    projectId: tb,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...rb }
  }), $r.setState({ account: void 0 }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function Te() {
  return new Promise((t) => {
    if (tn)
      t(tn);
    else {
      const e = setInterval(() => {
        tn && (clearInterval(e), t(tn));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
var Ca;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Ca || (Ca = {}));
var Aa;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Aa || (Aa = {}));
var Ra;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Ra || (Ra = {}));
var Ta;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(Ta || (Ta = {}));
var Na;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Na || (Na = {}));
class kb extends Dt {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class Gb {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}
class Yb extends Dt {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}
class Jb {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class Qb extends Dt {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class Xb extends Dt {
  constructor(e) {
    super();
  }
}
class Zb {
  constructor(e, r, n, i) {
    this.core = e, this.logger = r, this.name = n;
  }
}
class em {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
}
class tm extends Dt {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class rm {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
}
class nm extends Dt {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
class im {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class sm {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}
class om extends es {
  constructor() {
    super();
  }
}
class am {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class cm extends At.EventEmitter {
  constructor() {
    super();
  }
}
class um {
  constructor(e) {
    this.client = e;
  }
}
function nu(t) {
  Kt(() => (Te().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Te().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function wb(t) {
  Kt(() => (Te().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Te().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function iu(t) {
  Kt(() => (Te().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Te().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Ut() {
  const [t, e] = Xt(void 0);
  return nu((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), iu((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, i = { ...t, namespaces: n };
      e(i);
    }
  }), wb((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Kt(() => {
    async function r() {
      const i = await (await Te()).getSession();
      e(i);
    }
    return r(), _r.eventNames().includes("session_change") || _r.on("session_change", r), () => {
      _r.off("session_change", r);
    };
  }, []), t;
}
function ni(t) {
  Kt(() => (Te().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Te().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
function Ht(t) {
  const [e, r] = Xt(void 0), [n, i] = Xt(void 0), [s, u] = Xt(!1);
  async function a(l) {
    try {
      u(!0), i(void 0);
      const f = await (await Te()).request(l ?? t);
      return r(f), f;
    } catch (h) {
      throw i(h), h;
    } finally {
      u(!1);
    }
  }
  return { data: e, error: n, loading: s, request: a };
}
const Pa = (t) => t.length < 5 * 2 ? t : `${t.slice(0, 5 + 5)}...${t.slice(
  t.length - 5,
  t.length
)}`, _b = () => {
  const t = Ut(), e = "aleo:1", [r, n] = $r((h) => [h.account, h.setAccount]), { request: i, data: s, error: u, loading: a } = Ht({
    topic: t == null ? void 0 : t.topic,
    chainId: e,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  });
  ni(({ params: h, topic: f }) => {
    const d = h.event.name;
    if ((d === "accountSelected" || d === "accountSynced") && t && t.topic === f) {
      const y = h.event.data, v = h.chainId.split(":")[0], E = h.chainId.split(":")[1];
      n({
        network: v,
        chainId: E,
        address: y,
        shortenedAddress: Pa(y)
      });
    }
  }), iu(({ params: h, topic: f }) => {
    const d = h.event.data, y = h.chainId.split(":")[0], v = h.chainId.split(":")[1];
    n({
      network: y,
      chainId: v,
      address: d,
      shortenedAddress: Pa(d)
    });
  }), nu(({ params: h, topic: f }) => {
    n(void 0);
  }), Kt(() => {
    t && !a && i();
  }, [t == null ? void 0 : t.topic]), Kt(() => {
    if (s) {
      const h = s, f = h == null ? void 0 : h.account;
      f && n(f);
    }
  }, [s]);
  const l = u ? u.message : s && s.error;
  return {
    account: r,
    error: l,
    loading: a
  };
}, lm = () => {
  const t = Ut(), e = "aleo:1", { request: r, data: n, error: i, loading: s } = Ht({
    topic: t == null ? void 0 : t.topic,
    chainId: e,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getBalance",
      params: {
        assetId: void 0
      }
    }
  });
  ni(({ params: h, topic: f }) => {
    const d = h.event.name;
    (d === "accountSynced" || d === "accountSelected") && t && t.topic === f && !s && r();
  }), Kt(() => {
    t && !s && r();
  }, [t == null ? void 0 : t.topic]);
  const u = i ? i.message : n && n.error, a = n;
  return { balances: a == null ? void 0 : a.balances, error: u, loading: s };
};
function hm() {
  const [t, e] = Xt(void 0), [r, n] = Xt(), [i, s] = Xt(!1);
  async function u() {
    try {
      s(!0), n(void 0);
      const l = await (await Te()).connect({
        requiredNamespaces: {
          aleo: {
            methods: Ss,
            chains: ri,
            events: Ds
          }
        }
      });
      return e(l), _r.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), l;
    } catch (a) {
      throw n(a), a;
    } finally {
      s(!1);
    }
  }
  return { data: t, error: r, loading: i, connect: u };
}
const fm = (t) => {
  const e = Ut(), r = t == null ? void 0 : t.inputs.map((f) => typeof f == "string" ? f : f.plaintext), { request: n, data: i, error: s, loading: u } = Ht({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "requestCreateEvent",
      params: {
        ...t,
        inputs: r
      }
    }
  }), a = s ? s.message : i && i.error, l = i;
  return { createEvent: () => {
    t && n();
  }, eventID: l == null ? void 0 : l.eventId, loading: u, error: a };
}, dm = () => {
  const t = Ut(), { request: e, data: r, error: n, loading: i } = Ht({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), s = n ? n.message : r && r.error, u = r;
  return { createSharedState: () => {
    e();
  }, data: u == null ? void 0 : u.data, loading: i, error: s };
};
var Qi = { exports: {} }, xi, La;
function Eb() {
  if (La)
    return xi;
  La = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  xi = function(f, d) {
    d = d || {};
    var y = typeof f;
    if (y === "string" && f.length > 0)
      return u(f);
    if (y === "number" && isFinite(f))
      return d.long ? l(f) : a(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function u(f) {
    if (f = String(f), !(f.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (d) {
        var y = parseFloat(d[1]), v = (d[2] || "ms").toLowerCase();
        switch (v) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return y * s;
          case "weeks":
          case "week":
          case "w":
            return y * i;
          case "days":
          case "day":
          case "d":
            return y * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return y * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return y * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return y * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return y;
          default:
            return;
        }
      }
    }
  }
  function a(f) {
    var d = Math.abs(f);
    return d >= n ? Math.round(f / n) + "d" : d >= r ? Math.round(f / r) + "h" : d >= e ? Math.round(f / e) + "m" : d >= t ? Math.round(f / t) + "s" : f + "ms";
  }
  function l(f) {
    var d = Math.abs(f);
    return d >= n ? h(f, d, n, "day") : d >= r ? h(f, d, r, "hour") : d >= e ? h(f, d, e, "minute") : d >= t ? h(f, d, t, "second") : f + " ms";
  }
  function h(f, d, y, v) {
    var E = d >= y * 1.5;
    return Math.round(f / y) + " " + v + (E ? "s" : "");
  }
  return xi;
}
function Sb(t) {
  r.debug = r, r.default = r, r.coerce = l, r.disable = s, r.enable = i, r.enabled = u, r.humanize = Eb(), r.destroy = h, Object.keys(t).forEach((f) => {
    r[f] = t[f];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(f) {
    let d = 0;
    for (let y = 0; y < f.length; y++)
      d = (d << 5) - d + f.charCodeAt(y), d |= 0;
    return r.colors[Math.abs(d) % r.colors.length];
  }
  r.selectColor = e;
  function r(f) {
    let d, y = null, v, E;
    function I(..._) {
      if (!I.enabled)
        return;
      const F = I, w = Number(/* @__PURE__ */ new Date()), D = w - (d || w);
      F.diff = D, F.prev = d, F.curr = w, d = w, _[0] = r.coerce(_[0]), typeof _[0] != "string" && _.unshift("%O");
      let b = 0;
      _[0] = _[0].replace(/%([a-zA-Z%])/g, (p, o) => {
        if (p === "%%")
          return "%";
        b++;
        const g = r.formatters[o];
        if (typeof g == "function") {
          const R = _[b];
          p = g.call(F, R), _.splice(b, 1), b--;
        }
        return p;
      }), r.formatArgs.call(F, _), (F.log || r.log).apply(F, _);
    }
    return I.namespace = f, I.useColors = r.useColors(), I.color = r.selectColor(f), I.extend = n, I.destroy = r.destroy, Object.defineProperty(I, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (v !== r.namespaces && (v = r.namespaces, E = r.enabled(f)), E),
      set: (_) => {
        y = _;
      }
    }), typeof r.init == "function" && r.init(I), I;
  }
  function n(f, d) {
    const y = r(this.namespace + (typeof d > "u" ? ":" : d) + f);
    return y.log = this.log, y;
  }
  function i(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let d;
    const y = (typeof f == "string" ? f : "").split(/[\s,]+/), v = y.length;
    for (d = 0; d < v; d++)
      y[d] && (f = y[d].replace(/\*/g, ".*?"), f[0] === "-" ? r.skips.push(new RegExp("^" + f.slice(1) + "$")) : r.names.push(new RegExp("^" + f + "$")));
  }
  function s() {
    const f = [
      ...r.names.map(a),
      ...r.skips.map(a).map((d) => "-" + d)
    ].join(",");
    return r.enable(""), f;
  }
  function u(f) {
    if (f[f.length - 1] === "*")
      return !0;
    let d, y;
    for (d = 0, y = r.skips.length; d < y; d++)
      if (r.skips[d].test(f))
        return !1;
    for (d = 0, y = r.names.length; d < y; d++)
      if (r.names[d].test(f))
        return !0;
    return !1;
  }
  function a(f) {
    return f.toString().substring(2, f.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(f) {
    return f instanceof Error ? f.stack || f.message : f;
  }
  function h() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var Db = Sb;
(function(t, e) {
  e.formatArgs = n, e.save = i, e.load = s, e.useColors = r, e.storage = u(), e.destroy = (() => {
    let l = !1;
    return () => {
      l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
  function n(l) {
    if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const h = "color: " + this.color;
    l.splice(1, 0, h, "color: inherit");
    let f = 0, d = 0;
    l[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (f++, y === "%c" && (d = f));
    }), l.splice(d, 0, h);
  }
  e.log = console.debug || console.log || (() => {
  });
  function i(l) {
    try {
      l ? e.storage.setItem("debug", l) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function s() {
    let l;
    try {
      l = e.storage.getItem("debug");
    } catch {
    }
    return !l && typeof process < "u" && "env" in process && (l = process.env.DEBUG), l;
  }
  function u() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = Db(e);
  const { formatters: a } = t.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (h) {
      return "[UnexpectedJSONParseError]: " + h.message;
    }
  };
})(Qi, Qi.exports);
var Ib = Qi.exports;
const Ob = /* @__PURE__ */ ln(Ib), Is = Ob("wallet:sdk");
Is.enabled = !0;
const pm = (t) => {
  Is("useDecrypt", t);
  const e = Ut(), { request: r, data: n, error: i, loading: s } = Ht({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  }), u = i ? i.message : n && n.error, a = n;
  return { decrypt: () => {
    t && r();
  }, plaintexts: a == null ? void 0 : a.plaintexts, loading: s, error: u };
};
function gm() {
  const t = Ut(), [e, r] = Xt(), [n, i] = Xt(!1);
  async function s() {
    try {
      i(!0), r(void 0), await (await Te()).disconnect({
        topic: t == null ? void 0 : t.topic,
        reason: Ke("USER_DISCONNECTED")
      }), _r.emit("session_change"), $r.setState({ account: void 0 });
    } catch (u) {
      throw r(u), u;
    } finally {
      i(!1);
    }
  }
  return { error: e, loading: n, disconnect: s };
}
const ym = ({ filter: t, page: e }) => {
  const r = Ut(), { account: n } = _b();
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { request: i, data: s, error: u, loading: a } = Ht({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: e
      }
    }
  });
  ni(({ id: E, params: I, topic: _ }) => {
    I.event.name === "accountSynced" && r && r.topic === _ && !a && i();
  });
  const l = !!r && !!n;
  Kt(() => {
    l && !a && i();
  }, [l, n]);
  const h = () => {
    !!r && !!n && !a && i();
  }, f = u ? u.message : s && s.error, d = s, y = d == null ? void 0 : d.events, v = (d == null ? void 0 : d.pageCount) ?? 0;
  return { fetchPage: h, events: y, error: f, loading: a, page: e, pageCount: v };
}, bm = (t) => {
  const e = Ut(), { request: r, data: n, error: i, loading: s } = Ht({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  }), u = i ? i.message : n && n.error, a = n;
  return { importSharedState: () => {
    r();
  }, data: a == null ? void 0 : a.data, loading: s, error: u };
}, mm = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, vm = ({ address: t, filter: e, page: r }) => {
  const n = Ut(), [i, s] = $r((_) => [
    _.chainId,
    _.account
  ]);
  (e == null ? void 0 : e.programId) === "" && (e.programId = void 0);
  const { request: u, data: a, error: l, loading: h } = Ht({
    topic: n == null ? void 0 : n.topic,
    chainId: i,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: e,
        page: r
      }
    }
  });
  ni(({ params: _, topic: F }) => {
    _.event.name === "accountSynced" && n && n.topic === F && !h && u();
  });
  const f = !!n && !!s;
  Kt(() => {
    f && !h && u();
  }, [f, s]);
  const d = () => {
    !!n && !!s && !h && u();
  }, y = l ? l.message : a && a.error, v = a, E = v == null ? void 0 : v.records, I = (v == null ? void 0 : v.pageCount) ?? 0;
  return { fetchPage: d, records: E, error: y, loading: h, page: r, pageCount: I };
}, wm = (t) => {
  const e = Ut(), r = t == null ? void 0 : t.inputs.map(
    (f) => typeof f == "string" ? f : f.plaintext
  ), { request: n, data: i, error: s, loading: u } = Ht({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "requestCreateEvent",
      params: {
        ...t,
        inputs: r
      }
    }
  }), a = s ? s.message : i && i.error, l = i;
  return { requestCreateEvent: () => {
    t && (Is("useRequestCreateEvent requesting...", t), n());
  }, eventId: l == null ? void 0 : l.eventId, error: a, loading: u };
}, _m = (t, e) => {
  const r = Ut(), { request: n, data: i, error: s, loading: u } = Ht({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: e
      }
    }
  }), a = s ? s.message : i && i.error;
  return { requestSignature: () => {
    n();
  }, response: i, loading: u, error: a };
}, Em = async () => {
  const t = await Te(), e = await t.getSession(), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    const n = await t.request({
      topic: e == null ? void 0 : e.topic,
      chainId: r,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    });
    return $r.setState({ account: n.account }), n;
  } catch (n) {
    const i = n.message;
    return console.error("getAccount error", i), { error: i };
  }
}, Sm = async () => {
  const t = await Te(), e = await t.getSession(), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    return await t.request({
      topic: e == null ? void 0 : e.topic,
      chainId: r,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0
        }
      }
    });
  } catch (n) {
    const i = n.message;
    return console.error("getBalance error", i), { error: i };
  }
}, Dm = async () => {
  const t = await Te();
  if (!t)
    throw new Error("call setConnection() first!");
  try {
    const e = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Ss,
          chains: ri,
          events: Ds
        }
      }
    });
    return _r.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), e;
  } catch (e) {
    console.error("connect error", e.message);
  }
}, Im = async (t) => {
  const e = await Te(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { error: "no session, chainId, or connection" };
  const i = t == null ? void 0 : t.inputs.map((s) => typeof s == "string" ? s : s.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: n,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...t,
          inputs: i
        }
      }
    });
  } catch (s) {
    const u = s.message;
    return console.error("createEvent error", u), { error: u };
  }
}, Om = async () => {
  const t = await Te(), e = await (t == null ? void 0 : t.getSession()), r = "aleo:1";
  if (!e || !r || !t)
    return { error: "no session, chainId, or connection" };
  try {
    return await t.request({
      topic: e.topic,
      chainId: r,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "createSharedState",
        params: {}
      }
    });
  } catch (n) {
    const i = n.message;
    return console.error("createSharedState error", i), { error: i };
  }
}, xm = async (t) => {
  const e = await Te(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { error: "no session, chainId, or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: n,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "decrypt",
        params: {
          ciphertexts: t
        }
      }
    });
  } catch (i) {
    return console.error("decrypt error", i.message), { error: i.message };
  }
}, Cm = async () => {
  const t = await Te(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session, or connection" };
  try {
    return await t.disconnect({
      reason: Ke("USER_DISCONNECTED"),
      topic: e.topic
    }), _r.emit("session_change"), $r.setState({ account: void 0 }), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, Am = async (t) => {
  const e = await Te(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { events: void 0, error: "no session, chainId, or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const i = async (s = 0) => await e.request({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: n,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: s
      }
    }
  });
  try {
    return await i();
  } catch (s) {
    const u = s.message;
    return console.error("getEvents error", u), { error: u };
  }
}, Rm = async (t) => {
  const e = await Te(), r = await (e == null ? void 0 : e.getSession()), n = "aleo:1";
  if (!r || !n || !e)
    return { error: "no session, chainId, or connection" };
  try {
    return await e.request({
      topic: (r == null ? void 0 : r.topic) ?? "",
      chainId: n,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "importSharedState",
        params: {
          seed: t
        }
      }
    });
  } catch (i) {
    const s = i.message;
    return console.error("importSharedState error", s), { error: s };
  }
}, Tm = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await Te(), i = await (n == null ? void 0 : n.getSession()), s = "aleo:1";
  if (!i || !s || !n)
    return { error: "no session, chainId, or connection" };
  (e == null ? void 0 : e.programId) === "" && (e.programId = void 0);
  const u = async (a = 0) => await n.request({
    topic: i.topic,
    chainId: s,
    request: {
      id: 1,
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
    return await u();
  } catch (a) {
    const l = a.message;
    return console.error("getRecords error", l), { error: l };
  }
}, Nm = async ({
  message: t,
  address: e
}) => {
  const r = await Te(), n = await (r == null ? void 0 : r.getSession()), i = "aleo:1";
  if (!n || !i || !r)
    return { error: "no session, chainId, or connection" };
  try {
    return await r.request({
      topic: n.topic,
      chainId: i,
      request: {
        id: 1,
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: e
        }
      }
    });
  } catch (s) {
    const u = s.message;
    return console.error("signature error", u), { error: u };
  }
}, Pm = 50, xb = [
  "wc@2:client:0.3//proposal",
  "wc@2:core:0.3//subscription",
  "wc@2:core:0.3//keychain",
  "wc@2:core:0.3//messages",
  "wc@2:core:0.3//history",
  "wc@2:client:0.3//session",
  "wc@2:core:0.3//expirer",
  "WCM_WALLETCONNECT_CLIENT_ID",
  "wc@2:core:0.3//pairing",
  "debug"
], Fa = hl.version;
try {
  const t = localStorage.getItem("puzzle-sdk-version");
  Fa !== t && (xb.forEach((e) => {
    localStorage.removeItem(e);
  }), localStorage.setItem("puzzle-sdk-version", Fa));
} catch (t) {
  console.error(t);
}
export {
  _m as $,
  Na as A,
  ri as B,
  cm as C,
  Ds as D,
  Ca as E,
  tb as F,
  rb as G,
  Vb as H,
  em as I,
  Pa as J,
  _b as K,
  lm as L,
  hm as M,
  Ta as N,
  fm as O,
  dm as P,
  pm as Q,
  vl as R,
  um as S,
  Ua as T,
  gm as U,
  Ra as V,
  ym as W,
  bm as X,
  mm as Y,
  vm as Z,
  wm as _,
  lt as a,
  nu as a0,
  ni as a1,
  wb as a2,
  iu as a3,
  Ut as a4,
  Pm as a5,
  Em as a6,
  Sm as a7,
  Dm as a8,
  Im as a9,
  Om as aa,
  xm as ab,
  Cm as ac,
  Am as ad,
  Rm as ae,
  Tm as af,
  Nm as ag,
  Aa as b,
  Wb as c,
  kb as d,
  _r as e,
  nm as f,
  Te as g,
  Yb as h,
  Jb as i,
  Xb as j,
  am as k,
  Gb as l,
  im as m,
  Vs as n,
  Rb as o,
  Ft as p,
  Zb as q,
  tm as r,
  oi as s,
  Ab as t,
  Qb as u,
  om as v,
  sm as w,
  rm as x,
  Pr as y,
  Ss as z
};