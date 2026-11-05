// 讓 Android 可以把網站安裝到主畫面。這裡不快取內容，網站更新會立刻生效。
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
