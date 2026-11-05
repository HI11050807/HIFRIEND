// 網站名稱
window.SITE_NAME = "口袋地圖";

// 五個身分，分享時會跳出來選。名字可以直接改。
// 最後一個固定是管理員：可以補完和修改所有人的地點。
window.PEOPLE = ["朋友A", "朋友B", "朋友C", "朋友D", "管理員"];

// 第 1 步：把 Firebase 給你的設定貼進來，取代 null。
// 保持 null 時，網站會以示範模式執行，資料只存在目前這台裝置。
window.FIREBASE_CONFIG = null;

// 第 2 步：把 Cloudflare Worker 的網址貼進來，取代 null。
// 例如 "https://pocket-map.你的帳號.workers.dev"
window.AI_ENDPOINT = null;
