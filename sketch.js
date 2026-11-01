// ================================================================
// 兒童多媒體八題選擇題測驗系統
// 本檔案可直接貼入 p5.js 編輯器的 sketch.js。
// 本程式使用 p5.js DOM API 建立所有介面，不需要另外修改 HTML 或 CSS。
// ================================================================

// ------------------------------
// 八題題庫設定
// ------------------------------

// 宣告八題題庫，之後若要換題，只需要修改這個陣列的內容即可。
const quizQuestions = [
  // 第 1 題：植物與陽光，GIF 使用植物生長主題。
  {
    // 設定題目分類。
    category: "自然觀察",
    // 設定與植物生長有關的題目。
    question: "植物要健康長大，最需要下面哪一組東西？",
    // 設定四個選項。
    options: ["陽光、水和空氣", "糖果、汽水和玩具", "石頭、沙子和紙", "電池、電線和螺絲"],
    // 設定正確答案索引。
    answer: 0,
    // 設定答題後的學習重點。
    learning: "植物會利用陽光製造養分，也需要水和空氣才能生長。",
    // 這裡集中放置植物主題 GIF 網址，日後只要替換這個欄位即可。
    gif: "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif",
    // GIF 無法載入時仍顯示植物圖示。
    icon: "🌱",
    // GIF 備援說明也要和題目內容相關。
    fallback: "看看小植物如何迎向陽光！"
  },
  // 第 2 題：3 加 2 的基礎數學，GIF 使用數字／數學主題。
  {
    // 設定題目分類。
    category: "數學小高手",
    // 使用使用者指定的 5 + 3 題型。
    question: "3 + 2 等於多少？",
    // 設定四個數學選項。
    options: ["7", "6", "5", "8"],
    // 8 位於索引 2。
    answer: 2,
    // 設定數學解題重點。
    learning: "把 3 和 2 合在一起，就是 3 + 2 = 5。",
    // 這個 GIF 欄位集中放置數字／數學主題網址。
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHRkaW1rbngyYTBoaGM4M2F0bzBjcHdndmE1dG14eWxvajJoNTY0MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6MbmXIt1qUsNzfu8/giphy.gif",
    // GIF 備援圖示使用加號。
    icon: "➕",
    // GIF 備援文字和加法題目相關。
    fallback: "一起數數字，找出 3 加 2！"
  },
  // 第 3 題：水循環，GIF 使用水滴／水的變化主題。
  {
    // 設定題目分類。
    category: "水的旅行",
    // 設定水循環相關題目。
    question: "太陽把水加熱後，水慢慢變成看不見的水蒸氣，這個現象叫什麼？",
    // 設定水的狀態變化選項。
    options: ["結冰", "蒸發", "下雪", "凝固"],
    // 蒸發位於索引 1。
    answer: 1,
    // 設定水循環學習重點。
    learning: "液態的水受熱變成氣態的水蒸氣，這個過程叫作蒸發。",
      // 這個 GIF 欄位集中放置水滴／水循環主題網址。
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHA5bzN6YnFtNTNmaWJuY3A0Zml0OTM4djdwZ3Y4OGlnejN5ZDcxdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xThtaylnwvwog6nIf6/giphy.gif",
    // GIF 備援圖示使用水滴。
    icon: "💧",
    // GIF 備援文字明確指向水的變化。
    fallback: "水滴正在展開一趟循環旅行！"
  },
  // 第 4 題：垃圾分類，GIF 使用回收主題。
  {
    // 設定題目分類。
    category: "環境小尖兵",
    // 設定垃圾分類與回收題目。
    question: "喝完的寶特瓶要怎麼做，才比較環保？",
    // 設定垃圾處理選項。
    options: ["隨手丟在地上", "丟進河裡", "清空、壓扁後放入回收區", "藏在抽屜裡"],
    // 正確答案位於索引 2。
    answer: 2,
    // 設定資源回收學習重點。
    learning: "做好分類與回收，可以讓資源再次被使用，也能減少垃圾。",
    // 這個 GIF 欄位集中放置回收／環保主題網址。
   gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZtOHVhamxhcHpjdmpsMW1yOXZ5b2U2MHl4cTVibGUwamJwZ3M5MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZI4owdgI8ob1LtkFjt/giphy.gif",
    // GIF 備援圖示使用回收符號。
    icon: "♻️",
    // GIF 備援文字和回收題目相關。
    fallback: "把瓶子送回回收站，幫地球減少垃圾！"
  },
  // 第 5 題：交通安全，GIF 使用紅綠燈／道路安全主題。
  {
    // 設定題目分類。
    category: "交通安全",
    // 設定過馬路安全題目。
    question: "過馬路時，哪一種做法最安全？",
    // 設定交通安全選項。
    options: ["看見車子就快跑", "在斑馬線等綠燈，左右查看再走", "邊玩玩具邊走路", "從停著的汽車中間穿過"],
    // 正確答案位於索引 1。
    answer: 1,
    // 設定交通安全學習重點。
    learning: "過馬路要走斑馬線，遵守號誌，並先左右查看是否有車。",
    // 這個 GIF 欄位集中放置紅綠燈／道路安全主題網址。
    gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3RmbWY4NjFrczU2Mzk4dWF2Nmd6YWc2dzA3bWRlN21jbzM5a2JmZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3chGPgVIhKoWSNUhmH/giphy.gif",
    // GIF 備援圖示使用紅綠燈。
    icon: "🚦",
    // GIF 備援文字和交通安全相關。
    fallback: "紅燈停、綠燈行，過馬路要小心！"
  },
  // 第 6 題：詞語與拼音，GIF 使用閱讀／字母主題。
  {
    // 設定題目分類。
    category: "語文小達人",
    // 設定注音與拼音學習題目。
    question: "學習國語時，「ㄅ、ㄆ、ㄇ」是用來幫助我們學什麼？",
    // 設定語文選項。
    options: ["注音符號", "交通號誌", "天氣圖形", "數學公式"],
    // 正確答案位於索引 0。
    answer: 0,
    // 設定語文學習重點。
    learning: "ㄅ、ㄆ、ㄇ是注音符號，可以幫助我們讀出國語的聲音。",
    // 這個 GIF 欄位集中放置閱讀／字母／文字主題網址。
     gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmY3YzV3bWk2bDQwYW1lc3lnbHNod2FiOG56dTg4cnQzZmlmOGY5cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NFA61GS9qKZ68/giphy.gif",
    // GIF 備援圖示使用書本。
    icon: "📚",
    // GIF 備援文字和閱讀、拼音相關。
    fallback: "翻開書本，一起讀出好聽的聲音！"
  },
  // 第 7 題：動物棲息地，GIF 使用動物主題。
  {
    // 設定題目分類。
    category: "動物好朋友",
    // 設定動物與棲息地題目。
    question: "北極熊最適合生活在哪一種環境？",
    // 設定動物棲息地選項。
    options: ["炎熱的沙漠", "寒冷的北極冰原", "熱鬧的城市馬路", "乾燥的火山口"],
    // 正確答案位於索引 1。
    answer: 1,
    // 設定動物棲息地學習重點。
    learning: "北極熊有厚厚的毛和脂肪，適合生活在寒冷的北極冰原。",
    // 這個 GIF 欄位集中放置動物／野生動物主題網址。
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDJ1eTl3YjV2c3l5d3R2aXg2MWUzOGEwcXI1Z2NucDA1b2ZsYWl5dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/149c3jrzGk0AtG/giphy.gif",
    // GIF 備援圖示使用北極熊概念圖示。
    icon: "🐻‍❄️",
    // GIF 備援文字和動物棲息地相關。
    fallback: "找找動物最舒服的家在哪裡！"
  },
  // 第 8 題：太陽系，GIF 使用行星／宇宙主題。
  {
    // 設定題目分類。
    category: "太陽系探險",
    // 設定行星基本概念題目。
    question: "地球在太陽系中是什麼？",
    // 設定太陽系選項。
    options: ["恆星", "衛星", "行星", "彗星"],
    // 行星位於索引 2。
    answer: 2,
    // 設定太陽系學習重點。
    learning: "地球會繞著太陽運行，是太陽系中的一顆行星。",
    // 這個 GIF 欄位集中放置行星／太陽系主題網址。
   gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHZ3MjBpdnJ1M2J2Zm03d3NhZnFnZ2huZ3g1cWk5bmtyMHR0OTJnZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7MNJFsrDCJUQa05VAR/giphy.gif",
    // GIF 備援圖示使用地球。
    icon: "🪐",
    // GIF 備援文字和行星主題相關。
    fallback: "搭上太空船，認識太陽系的行星！"
  }
];

// ------------------------------
// 可替換音效設定
// ------------------------------

// 設定音效檔案介面；留空字串時會使用原生 Web Audio API 產生音效。
const audioSettings = {
  // 設定是否啟用音效功能。
  enabled: true,
  // 設定音效檔案路徑；可以填入 sounds/correct.mp3 等相對路徑。
  files: {
    // 設定答對音效檔案路徑，留空代表使用合成音效。
    correct: "",
    // 設定答錯音效檔案路徑，留空代表使用合成音效。
    incorrect: "",
    // 設定完成測驗音效檔案路徑，留空代表使用合成音效。
    complete: ""
  },
  // 設定外部音效檔案的播放音量。
  volume: 0.35
};

// ------------------------------
// 全域變數與遊戲狀態
// ------------------------------

// 宣告遊戲狀態常數，避免在程式中直接散落文字造成錯誤。
const GAME_STATE = {
  // 設定開始畫面狀態。
  START: "start",
  // 設定作答中狀態。
  QUESTION: "question",
  // 設定答題回饋狀態。
  FEEDBACK: "feedback",
  // 設定完成畫面狀態。
  COMPLETE: "complete"
};

// 記錄目前遊戲狀態。
let gameState = GAME_STATE.START;
// 記錄目前題目的索引。
let currentQuestionIndex = 0;
// 記錄答對題數。
let score = 0;
// 記錄目前題目是否已經作答。
let hasAnswered = false;
// 記錄目前是否靜音。
let isMuted = false;
// 記錄 Web AudioContext，第一次互動前保持空值。
let audioContext = null;
// 記錄 p5 畫布元件；這一層只繪製上方彩帶。
let canvasElement = null;
// 記錄位於 DOM 卡片後方的獨立裝飾畫布。
let decorationCanvasElement = null;
// 記錄裝飾畫布的 2D 繪圖內容。
let decorationCanvasContext = null;
// 記錄主要介面根容器。
let uiRoot = null;
// 記錄標題列容器。
let headerElement = null;
// 記錄遊戲標題元素。
let titleElement = null;
// 記錄狀態文字元素。
let statusElement = null;
// 記錄靜音按鈕。
let muteButton = null;
// 記錄開始畫面。
let startScreen = null;
// 記錄測驗畫面。
let quizScreen = null;
// 記錄完成畫面。
let completeScreen = null;
// 記錄開始畫面說明。
let startDescription = null;
// 記錄開始按鈕。
let startButton = null;
// 記錄題目分類文字。
let categoryElement = null;
// 記錄進度文字。
let progressElement = null;
// 記錄題目文字。
let questionElement = null;
// 記錄 GIF 圖片 DOM 元件。
let imageElement = null;
// 記錄 GIF 失敗時的替代區塊。
let mediaFallback = null;
// 記錄四個選項按鈕。
let optionButtons = [];
// 記錄選項按鈕容器，方便視窗縮放時調整欄數。
let optionContainerElement = null;
// 記錄回饋面板。
let feedbackPanel = null;
// 記錄回饋標題。
let feedbackTitle = null;
// 記錄回饋內容。
let feedbackContent = null;
// 記錄下一題按鈕。
let nextButton = null;
// 記錄完成分數文字。
let scoreElement = null;
// 記錄鼓勵文字。
let encouragementElement = null;
// 記錄八題學習重點清單。
let learningList = null;
// 記錄重新開始按鈕。
let restartButton = null;
// 記錄目前畫面上的彩帶粒子，所有粒子都由 p5.js draw() 繪製。
let confettiParticles = [];
// 記錄完成畫面是否要持續產生慶祝彩帶。
let celebrationMode = false;
// 記錄最後一次答題彩帶是否答對，方便除錯與維護視覺狀態。
let lastAnswerWasCorrect = false;

// ------------------------------
// p5.js 預先載入函式
// ------------------------------

// 在畫面建立之前預先載入每一題的 GIF 圖片。
function preload() {
  // 逐題處理題庫，確保每一題都會嘗試載入自己的 GIF。
  quizQuestions.forEach((question) => {
    // 先記錄 GIF 尚未成功載入。
    question.gifLoaded = false;
    // 使用 p5.js loadImage 預先載入 GIF，失敗時只設定旗標，不讓程式中止。
    question.gifAsset = loadImage(
      question.gif,
      () => {
        // 載入成功時記錄成功狀態。
        question.gifLoaded = true;
      },
      () => {
        // 載入失敗時保留 false，之後由 DOM 圖片錯誤處理顯示替代內容。
        question.gifLoaded = false;
      }
    );
  });
}

// ------------------------------
// p5.js 初始化函式
// ------------------------------

// p5.js 在 preload 完成後會執行 setup 一次。
function setup() {
  // 建立符合瀏覽器視窗大小的全螢幕 p5 畫布，這一層只負責彩帶。
  canvasElement = createCanvas(windowWidth, windowHeight);
  // 將 p5 畫布固定在視窗左上角，讓它適合各種螢幕尺寸。
  canvasElement.position(0, 0);
  // 將 p5 畫布設定為 fixed，避免畫布跟著頁面內容滾動。
  canvasElement.style("position", "fixed");
  // 將彩帶畫布放到 DOM 介面上方，讓慶祝效果清楚可見。
  canvasElement.style("z-index", "3");
  // 彩帶畫布只能顯示視覺效果，不能攔截 DOM 的滑鼠與觸控事件。
  canvasElement.style("pointer-events", "none");
  // 建立獨立的背景裝飾畫布，確保裝飾圓永遠位於題目卡片後方。
  createDecorationCanvas();
  // 設定 body 的基本外觀，避免瀏覽器預設邊界造成畫面偏移。
  document.body.style.margin = "0";
  // 隱藏頁面捲軸，讓介面保持全螢幕。
  document.body.style.overflow = "hidden";
  // 設定 body 的基本字型。
  document.body.style.fontFamily = "Arial, 'Noto Sans TC', sans-serif";
  // 由 body 提供淡藍色背景，避免透明 canvas 遮住 DOM 介面。
  document.body.style.background = "#eaf7ff";
  // 建立所有 p5.js DOM 介面的最外層容器。
  createInterface();
  // 先顯示開始畫面。
  showStartScreen();
  // 根據目前視窗大小套用 responsive 樣式。
  applyResponsiveStyles();
}

// ------------------------------
// p5.js 畫布繪圖函式
// ------------------------------

// 每一幀繪製柔和的背景，讓畫面有多媒體遊戲感。
function draw() {
  // 清除上一幀的 p5 彩帶畫布，讓透明區域不會遮住 DOM 介面。
  clear();
  // 將裝飾圓繪製在獨立的低層 canvas，確保不會覆蓋題目文字與 DOM 內容。
  drawBackgroundDecorations();
  // 在 DOM 介面上方繪製彩帶，但彩帶畫布本身不攔截任何點擊。
  drawConfetti();
}

// ------------------------------
// 背景裝飾畫布
// ------------------------------

// 建立位於 DOM 卡片後方的獨立裝飾畫布。
function createDecorationCanvas() {
  // 使用原生 canvas，避免和 p5 的彩帶畫布共用同一個圖層。
  decorationCanvasElement = document.createElement("canvas");
  // 設定背景畫布的無障礙角色，避免被誤認為可互動內容。
  decorationCanvasElement.setAttribute("aria-hidden", "true");
  // 將背景畫布直接放到 body，和 DOM 介面及彩帶畫布成為平行圖層。
  document.body.appendChild(decorationCanvasElement);
  // 固定在視窗左上角，避免頁面內容捲動造成位置偏移。
  decorationCanvasElement.style.position = "fixed";
  decorationCanvasElement.style.left = "0";
  decorationCanvasElement.style.top = "0";
  // 背景裝飾畫布低於 uiRoot，絕不會蓋住題目卡片文字。
  decorationCanvasElement.style.zIndex = "1";
  // 裝飾畫布只負責顯示圖形，不能攔截滑鼠或觸控事件。
  decorationCanvasElement.style.pointerEvents = "none";
  // 讓畫布維持視窗大小並取得 2D 繪圖內容。
  resizeDecorationCanvas();
}

// 依照目前視窗大小調整背景裝飾畫布。
function resizeDecorationCanvas() {
  // 尚未建立畫布時不進行任何操作。
  if (!decorationCanvasElement) {
    return;
  }
  // 以 CSS 像素設定畫布尺寸，與 p5 畫布及 DOM 座標一致。
  decorationCanvasElement.width = windowWidth;
  decorationCanvasElement.height = windowHeight;
  decorationCanvasElement.style.width = `${windowWidth}px`;
  decorationCanvasElement.style.height = `${windowHeight}px`;
  // 重新取得 2D 繪圖內容，供每一幀繪製背景裝飾。
  decorationCanvasContext = decorationCanvasElement.getContext("2d");
}

// 在低層背景畫布繪製緩慢移動的淡色裝飾圓。
function drawBackgroundDecorations() {
  // 畫布尚未準備完成時略過背景裝飾。
  if (!decorationCanvasContext) {
    return;
  }
  // 清除上一幀的背景裝飾。
  decorationCanvasContext.clearRect(0, 0, windowWidth, windowHeight);
  // 依照目前時間製造緩慢移動的裝飾圓點。
  const wave = Math.sin(frameCount * 0.01) * 20;
  // 使用小工具繪製不具互動性的背景圓形。
  drawDecorationCircle(windowWidth * 0.08 + wave, windowHeight * 0.16, 150, "#c9efff");
  drawDecorationCircle(windowWidth * 0.9 - wave, windowHeight * 0.18, 180, "#fff1b8");
  drawDecorationCircle(windowWidth * 0.12 - wave, windowHeight * 0.88, 210, "#d9f8dd");
  drawDecorationCircle(windowWidth * 0.9 + wave, windowHeight * 0.86, 170, "#ffe0ed");
}

// 繪製單一淡色背景圓。
function drawDecorationCircle(centerX, centerY, diameter, colorValue) {
  // 設定填滿顏色且不繪製外框。
  decorationCanvasContext.fillStyle = colorValue;
  decorationCanvasContext.beginPath();
  // 以圓心與半徑繪製裝飾圓。
  decorationCanvasContext.arc(centerX, centerY, diameter / 2, 0, Math.PI * 2);
  decorationCanvasContext.fill();
}

// ------------------------------
// 建立 p5.js DOM 介面
// ------------------------------

// 建立所有標題、題目、選項、按鈕與說明元素。
function createInterface() {
  // 建立主要介面根容器。
  uiRoot = createDiv();
  // 將根容器放到頁面中。
  uiRoot.parent(document.body);
  // 設定根容器的基本樣式。
  applyStyles(uiRoot, {
    position: "relative",
    // DOM 介面高於背景裝飾、低於彩帶畫布。
    zIndex: "2",
    // 題目文字、GIF、選項與按鈕都可以正常接收互動。
    pointerEvents: "auto",
    width: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "18px 20px 30px",
    color: "#24324a"
  });

  // 建立標題列。
  headerElement = createDiv();
  // 將標題列放入根容器。
  headerElement.parent(uiRoot);
  // 設定標題列樣式。
  applyStyles(headerElement, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    maxWidth: "980px",
    margin: "0 auto 12px"
  });

  // 建立遊戲主標題。
  titleElement = createElement("h1", "🌟 小小學習探險隊 🌟");
  // 將主標題放入標題列。
  titleElement.parent(headerElement);
  // 設定主標題樣式。
  applyStyles(titleElement, {
    margin: "0",
    color: "#226089",
    fontWeight: "800",
    letterSpacing: "1px"
  });

  // 建立靜音按鈕。
  muteButton = createButton("🔊 開聲");
  // 設定靜音按鈕的無障礙標籤。
  muteButton.attribute("aria-label", "切換音效開啟或靜音");
  // 將靜音按鈕放入標題列。
  muteButton.parent(headerElement);
  // 設定靜音按鈕樣式。
  styleButton(muteButton, "#ffffff", "#226089");
  // 設定靜音按鈕按下時的行為。
  muteButton.mousePressed(toggleMute);

  // 建立狀態文字。
  statusElement = createDiv("準備開始");
  // 將狀態文字放入根容器。
  statusElement.parent(uiRoot);
  // 設定狀態文字樣式。
  applyStyles(statusElement, {
    maxWidth: "980px",
    margin: "0 auto 14px",
    textAlign: "center",
    color: "#53708c",
    fontWeight: "700",
    minHeight: "24px"
  });

  // 建立開始畫面。
  startScreen = createDiv();
  // 將開始畫面放入根容器。
  startScreen.parent(uiRoot);
  // 設定開始畫面樣式。
  styleScreen(startScreen);

  // 建立開始畫面的副標題。
  const startHeading = createElement("h2", "準備好一起動腦了嗎？");
  // 將副標題放入開始畫面。
  startHeading.parent(startScreen);
  // 設定副標題樣式。
  styleHeading(startHeading);

  // 建立開始畫面的說明文字。
  startDescription = createP("這是一趟八題學習旅程，會遇到自然、數學、語文、安全和環保問題。每題答完就能看到小知識！");
  // 將說明文字放入開始畫面。
  startDescription.parent(startScreen);
  // 設定說明文字樣式。
  styleParagraph(startDescription);

  // 建立鍵盤操作提示。
  const keyboardHint = createP("操作提示：滑鼠或觸控點選答案；鍵盤 1～4 選答案、Enter 下一題、R 重新開始、M 靜音。");
  // 將操作提示放入開始畫面。
  keyboardHint.parent(startScreen);
  // 設定操作提示樣式。
  applyStyles(keyboardHint, {
    margin: "10px auto 18px",
    color: "#67809a",
    fontSize: "0.95rem",
    lineHeight: "1.6"
  });

  // 建立開始測驗按鈕。
  startButton = createButton("🚀 開始測驗");
  // 將開始按鈕放入開始畫面。
  startButton.parent(startScreen);
  // 設定開始按鈕樣式。
  stylePrimaryButton(startButton);
  // 設定開始按鈕按下時開始測驗。
  startButton.mousePressed(startQuiz);

  // 建立測驗畫面。
  quizScreen = createDiv();
  // 將測驗畫面放入根容器。
  quizScreen.parent(uiRoot);
  // 設定測驗畫面樣式。
  styleScreen(quizScreen);

  // 建立題目資訊列。
  const questionInfo = createDiv();
  // 將題目資訊列放入測驗畫面。
  questionInfo.parent(quizScreen);
  // 設定題目資訊列樣式。
  applyStyles(questionInfo, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px"
  });

  // 建立題目分類文字。
  categoryElement = createDiv();
  // 將分類文字放入題目資訊列。
  categoryElement.parent(questionInfo);
  // 設定分類文字樣式。
  applyStyles(categoryElement, {
    color: "#e16d42",
    fontWeight: "800"
  });

  // 建立進度文字。
  progressElement = createDiv();
  // 將進度文字放入題目資訊列。
  progressElement.parent(questionInfo);
  // 設定進度文字樣式。
  applyStyles(progressElement, {
    color: "#53708c",
    fontWeight: "700"
  });

  // 建立題目文字。
  questionElement = createElement("h2");
  // 將題目文字放入測驗畫面。
  questionElement.parent(quizScreen);
  // 設定題目文字樣式。
  applyStyles(questionElement, {
    margin: "8px 0 16px",
    lineHeight: "1.5",
    color: "#24324a"
  });

  // 建立媒體區域。
  const mediaBox = createDiv();
  // 將媒體區域放入測驗畫面。
  mediaBox.parent(quizScreen);
  // 設定媒體區域樣式。
  applyStyles(mediaBox, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "130px",
    marginBottom: "16px",
    overflow: "hidden",
    borderRadius: "18px",
    background: "#f5fbff"
  });

  // 建立 GIF 圖片 DOM 元件，真正的圖片網址會在顯示題目時設定。
  imageElement = createImg("", "題目動畫 GIF");
  // 將圖片放入媒體區域。
  imageElement.parent(mediaBox);
  // 設定圖片初始樣式。
  applyStyles(imageElement, {
    display: "none",
    maxWidth: "100%",
    width: "180px",
    height: "130px",
    objectFit: "contain",
    borderRadius: "14px"
  });
  // 設定 DOM 圖片載入成功時顯示圖片並隱藏替代內容。
  imageElement.elt.onload = handleGifLoaded;
  // 設定 DOM 圖片載入失敗時顯示替代內容。
  imageElement.elt.onerror = handleGifFailed;

  // 建立 GIF 失敗時的友善替代區塊。
  mediaFallback = createDiv();
  // 將替代區塊放入媒體區域。
  mediaFallback.parent(mediaBox);
  // 設定替代區塊樣式。
  applyStyles(mediaFallback, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    minHeight: "120px",
    padding: "12px",
    color: "#39708f",
    textAlign: "center",
    fontWeight: "700"
  });

  // 建立選項按鈕容器。
  optionContainerElement = createDiv();
  // 將選項容器放入測驗畫面。
  optionContainerElement.parent(quizScreen);
  // 設定選項容器樣式。
  applyStyles(optionContainerElement, {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "12px",
    marginBottom: "16px"
  });

  // 依照四個選項建立四個 p5.js 按鈕。
  for (let optionIndex = 0; optionIndex < 4; optionIndex += 1) {
    // 建立尚未填入文字的選項按鈕。
    const optionButton = createButton("");
    // 設定每個選項按鈕的無障礙角色。
    optionButton.attribute("aria-label", `選項 ${optionIndex + 1}`);
    // 將選項按鈕放入選項容器。
    optionButton.parent(optionContainerElement);
    // 設定選項按鈕基本樣式。
    styleOptionButton(optionButton);
    // 使用區域常數固定目前索引，避免事件回呼拿到錯誤索引。
    const fixedIndex = optionIndex;
    // 設定選項按鈕被點擊時送出答案。
    optionButton.mousePressed(() => selectAnswer(fixedIndex));
    // 將按鈕保存到全域陣列，供換題與停用使用。
    optionButtons.push(optionButton);
  }

  // 建立答題回饋面板。
  feedbackPanel = createDiv();
  // 將回饋面板放入測驗畫面。
  feedbackPanel.parent(quizScreen);
  // 設定回饋面板樣式。
  applyStyles(feedbackPanel, {
    display: "none",
    borderRadius: "16px",
    padding: "14px 16px",
    marginBottom: "14px",
    background: "#f2f8ff",
    border: "2px solid #bdd9ef",
    lineHeight: "1.65"
  });

  // 建立回饋標題。
  feedbackTitle = createElement("h3");
  // 將回饋標題放入回饋面板。
  feedbackTitle.parent(feedbackPanel);
  // 設定回饋標題樣式。
  applyStyles(feedbackTitle, {
    margin: "0 0 4px",
    color: "#226089"
  });

  // 建立回饋內容。
  feedbackContent = createP();
  // 將回饋內容放入回饋面板。
  feedbackContent.parent(feedbackPanel);
  // 設定回饋內容樣式。
  applyStyles(feedbackContent, {
    margin: "0",
    color: "#3c536b"
  });

  // 建立下一題按鈕。
  nextButton = createButton("下一題 ➜");
  // 將下一題按鈕放入測驗畫面。
  nextButton.parent(quizScreen);
  // 設定下一題按鈕樣式。
  stylePrimaryButton(nextButton);
  // 設定下一題按鈕按下時前往下一題或完成頁。
  nextButton.mousePressed(nextQuestion);

  // 建立完成畫面。
  completeScreen = createDiv();
  // 將完成畫面放入根容器。
  completeScreen.parent(uiRoot);
  // 設定完成畫面樣式。
  styleScreen(completeScreen);

  // 建立完成標題。
  const completeHeading = createElement("h2", "📊 測驗結果");
  // 將完成標題放入完成畫面。
  completeHeading.parent(completeScreen);
  // 設定完成標題樣式。
  styleHeading(completeHeading);

  // 建立分數文字。
  scoreElement = createElement("h3");
  // 將分數文字放入完成畫面。
  scoreElement.parent(completeScreen);
  // 設定分數文字樣式。
  applyStyles(scoreElement, {
    margin: "8px 0",
    color: "#e16d42",
    fontSize: "1.6rem"
  });

  // 建立鼓勵文字。
  encouragementElement = createP();
  // 將鼓勵文字放入完成畫面。
  encouragementElement.parent(completeScreen);
  // 設定鼓勵文字樣式。
  styleParagraph(encouragementElement);

  // 建立學習重點標題。
  const learningHeading = createElement("h3", "八題學習重點");
  // 將學習重點標題放入完成畫面。
  learningHeading.parent(completeScreen);
  // 設定學習重點標題樣式。
  applyStyles(learningHeading, {
    margin: "18px 0 8px",
    color: "#226089",
    textAlign: "left"
  });

  // 建立學習重點清單。
  learningList = createElement("ol");
  // 將學習重點清單放入完成畫面。
  learningList.parent(completeScreen);
  // 設定學習重點清單樣式。
  applyStyles(learningList, {
    margin: "0 auto 18px",
    paddingLeft: "24px",
    textAlign: "left",
    lineHeight: "1.7",
    color: "#3c536b"
  });

  // 建立重新開始按鈕。
  restartButton = createButton("🔄 重新開始");
  // 將重新開始按鈕放入完成畫面。
  restartButton.parent(completeScreen);
  // 設定重新開始按鈕樣式。
  stylePrimaryButton(restartButton);
  // 設定重新開始按鈕按下時重新初始化測驗。
  restartButton.mousePressed(restartQuiz);
}

// ------------------------------
// 畫面與題目流程
// ------------------------------

// 開始新的測驗並顯示第一題。
function startQuiz() {
  // 在使用者按下開始按鈕時啟用音效環境。
  ensureAudioReady();
  // 將分數歸零。
  score = 0;
  // 清空舊彩帶並關閉持續慶祝模式，避免狀態殘留。
  resetConfetti();
  // 將題目索引重設為第一題。
  currentQuestionIndex = 0;
  // 清除作答紀錄。
  hasAnswered = false;
  // 顯示第一題。
  showQuestion();
}

// 重新開始完整測驗。
function restartQuiz() {
  // 在使用者按下重新開始時啟用音效環境。
  ensureAudioReady();
  // 將分數歸零。
  score = 0;
  // 清空舊彩帶並關閉持續慶祝模式，避免狀態殘留。
  resetConfetti();
  // 將題目索引重設為第一題。
  currentQuestionIndex = 0;
  // 清除作答紀錄。
  hasAnswered = false;
  // 顯示第一題。
  showQuestion();
}

// 顯示開始畫面。
function showStartScreen() {
  // 回到開始畫面時清除所有彩帶粒子。
  resetConfetti();
  // 設定目前遊戲狀態為開始。
  gameState = GAME_STATE.START;
  // 顯示開始畫面。
  setElementVisible(startScreen, true);
  // 隱藏測驗畫面。
  setElementVisible(quizScreen, false);
  // 隱藏完成畫面。
  setElementVisible(completeScreen, false);
  // 更新狀態文字。
  statusElement.html("準備開始");
}

// 顯示目前題目。
function showQuestion() {
  // 換題時清除上一題的短暫彩帶，避免粒子跨題殘留。
  resetConfetti();
  // 設定目前遊戲狀態為作答中。
  gameState = GAME_STATE.QUESTION;
  // 設定目前尚未作答。
  hasAnswered = false;
  // 取出目前題目的資料。
  const question = quizQuestions[currentQuestionIndex];
  // 隱藏開始畫面。
  setElementVisible(startScreen, false);
  // 顯示測驗畫面。
  setElementVisible(quizScreen, true);
  // 隱藏完成畫面。
  setElementVisible(completeScreen, false);
  // 更新狀態文字。
  statusElement.html(`第 ${currentQuestionIndex + 1} / ${quizQuestions.length} 題`);
  // 更新題目分類。
  categoryElement.html(`📘 ${question.category}`);
  // 更新進度文字。
  progressElement.html(`進度：${currentQuestionIndex + 1} / ${quizQuestions.length}`);
  // 更新題目文字。
  questionElement.html(question.question);
  // 清空並重新設定四個選項文字。
  optionButtons.forEach((button, optionIndex) => {
    // 設定按鈕顯示的選項編號與文字。
    button.html(`${optionIndex + 1}. ${question.options[optionIndex]}`);
    // 重新啟用按鈕，確保重新開始後可以點選。
    button.elt.disabled = false;
    // 清除先前題目的自訂顏色。
    resetOptionStyle(button);
  });
  // 隱藏答題回饋面板。
  setElementVisible(feedbackPanel, false);
  // 隱藏下一題按鈕直到完成答題。
  setElementVisible(nextButton, false);
  // 設定 GIF 或替代圖像。
  updateQuestionMedia(question);
}

// 顯示答題回饋並標示正確答案。
function selectAnswer(selectedIndex) {
  // 如果不是作答狀態，或已經回答過，就忽略重複操作。
  if (gameState !== GAME_STATE.QUESTION || hasAnswered) {
    // 直接結束函式，避免分數被重複增加。
    return;
  }
  // 在使用者選答案時啟用音效環境。
  ensureAudioReady();
  // 記錄本題已作答。
  hasAnswered = true;
  // 取出目前題目的資料。
  const question = quizQuestions[currentQuestionIndex];
  // 判斷使用者是否選到正確答案。
  const isCorrect = selectedIndex === question.answer;
  // 答對時增加一分。
  if (isCorrect) {
    // 增加目前分數。
    score += 1;
  }
  // 將遊戲狀態改成回饋狀態。
  gameState = GAME_STATE.FEEDBACK;
  // 記錄本次答案，答對使用繽紛彩帶，答錯使用少量淡色彩帶。
  lastAnswerWasCorrect = isCorrect;
  // 送出答案後立即在 canvas 上觸發一次短暫彩帶爆發。
  launchAnswerConfetti(isCorrect);
  // 停用所有選項，防止重複作答。
  optionButtons.forEach((button) => {
    // 停用該選項按鈕。
    button.elt.disabled = true;
  });
  // 將正確答案按鈕標成綠色。
  optionButtons[question.answer].style("background", "#d8f6df");
  // 將正確答案按鈕標成深綠色邊框。
  optionButtons[question.answer].style("border", "3px solid #42a866");
  // 將使用者選錯的按鈕標成淡紅色。
  if (!isCorrect) {
    // 設定錯誤選項的背景色。
    optionButtons[selectedIndex].style("background", "#ffe1e1");
    // 設定錯誤選項的邊框色。
    optionButtons[selectedIndex].style("border", "3px solid #e26d6d");
  }
  // 顯示答題回饋面板。
  setElementVisible(feedbackPanel, true);
  // 顯示答對或答錯標題。
  feedbackTitle.html(isCorrect ? "✅ 答對了，太棒了！" : "💡 再想一想也沒關係！");
  // 設定答對與答錯標題顏色。
  feedbackTitle.style("color", isCorrect ? "#23834a" : "#bd5b35");
  // 組合正確答案與學習重點文字。
  feedbackContent.html(`正確答案：${question.options[question.answer]}<br>學習重點：${question.learning}`);
  // 播放對應的答題音效。
  playConfiguredSound(isCorrect ? "correct" : "incorrect");
  // 顯示下一題按鈕。
  setElementVisible(nextButton, true);
  // 最後一題按鈕顯示查看成果，其餘顯示下一題。
  nextButton.html(currentQuestionIndex === quizQuestions.length - 1 ? "查看成果 🎉" : "下一題 ➜");
}

// 前往下一題或顯示完成畫面。
function nextQuestion() {
  // 只有回饋狀態才能前往下一題。
  if (gameState !== GAME_STATE.FEEDBACK) {
    // 不符合狀態時直接結束。
    return;
  }
  // 如果還有下一題，就增加題目索引。
  if (currentQuestionIndex < quizQuestions.length - 1) {
    // 前往下一題。
    currentQuestionIndex += 1;
    // 顯示下一題。
    showQuestion();
  } else {
    // 沒有下一題時顯示完成畫面。
    showComplete();
  }
}

// 顯示測驗完成畫面。
function showComplete() {
  // 設定目前遊戲狀態為完成。
  gameState = GAME_STATE.COMPLETE;
  // 計算答對率；八題時答對五題為 62.5%，嚴格超過 60%。
  const accuracy = (score / quizQuestions.length) * 100;
  // 使用嚴格大於 60 的條件，避免 60% 被誤判為成功。
  const passed = accuracy > 60;
  // 隱藏開始畫面。
  setElementVisible(startScreen, false);
  // 隱藏測驗畫面。
  setElementVisible(quizScreen, false);
  // 顯示完成畫面。
  setElementVisible(completeScreen, true);
  // 更新狀態文字。
  statusElement.html("八題任務完成");
  // 同時顯示分數與答對率，並保留一位小數方便孩子理解。
  scoreElement.html(`你的分數：${score} / ${quizQuestions.length}<br>答對率：${accuracy.toFixed(1)}%`);
  // 只有答對率嚴格超過 60% 才進入成功訊息與持續慶祝模式。
  if (passed) {
    // 顯示成功訊息。
    encouragementElement.html(`🎉 恭喜你成功過關！答對率超過 60%，你是勇敢的學習探險家！`);
    // 開啟持續慶祝彩帶。
    celebrationMode = true;
    // 先清除答題爆發，再建立完成畫面的第一波繽紛彩帶。
    confettiParticles = [];
    spawnConfettiBurst(150, true, true);
    // 播放完成測驗音效。
    playConfiguredSound("complete");
  } else {
    // 60% 或以下不可顯示成功訊息，也不可顯示持續成功彩帶。
    encouragementElement.html(`🌱 這次答對率是 ${accuracy.toFixed(1)}%，還沒有超過 60%。別灰心，複習學習重點後再挑戰一次吧！`);
    // 關閉持續慶祝並清除所有彩帶粒子。
    resetConfetti();
    // 仍然播放一般完成提示音，但不播放成功慶祝彩帶。
    playConfiguredSound("complete");
  }
  // 清空舊的學習重點，確保重新開始後不會重複。
  learningList.html("");
  // 逐題建立八題學習重點。
  quizQuestions.forEach((question) => {
    // 建立一個清單項目。
    const item = createElement("li", `${question.category}：${question.learning}`);
    // 將清單項目放入學習重點清單。
    item.parent(learningList);
  });
}

// 根據分數產生鼓勵文字。
function getEncouragement(finalScore) {
  // 滿分時給予特別鼓勵。
  if (finalScore === quizQuestions.length) {
    // 回傳滿分鼓勵。
    return "你是超級學習探險家！八題全部答對，觀察力和思考力都好棒！";
  }
  // 分數很高時給予正向鼓勵。
  if (finalScore >= 6) {
    // 回傳高分鼓勵。
    return "表現非常棒！再複習一下小重點，就會變得更厲害！";
  }
  // 其他分數也給予持續學習的鼓勵。
  return "每一次挑戰都是進步，看看學習重點，再勇敢挑戰一次吧！";
}

// ------------------------------
// p5.js 彩帶粒子效果
// ------------------------------

// 清除所有彩帶並關閉持續慶祝模式。
function resetConfetti() {
  // 直接建立新的空陣列，避免重新開始後保留舊粒子參照。
  confettiParticles = [];
  // 關閉完成畫面的持續產生機制。
  celebrationMode = false;
  // 清除上一題的答題彩帶紀錄。
  lastAnswerWasCorrect = false;
}

// 送出答案時建立一次短暫的彩帶爆發。
function launchAnswerConfetti(isCorrect) {
  // 先清掉前一個回饋畫面的粒子，確保每次送出只對應當題答案。
  confettiParticles = [];
  // 答對使用較多繽紛粒子，答錯只使用少量淡色粒子。
  const particleCount = isCorrect ? 110 : 32;
  // 建立本次短暫爆發；完成畫面才會使用 persistent=true。
  spawnConfettiBurst(particleCount, isCorrect, false);
}

// 建立指定數量的彩帶粒子。
function spawnConfettiBurst(particleCount, isCorrect, persistent) {
  // 答對使用鮮豔色彩，答錯使用柔和淡色，視覺上清楚區分結果。
  const correctColors = ["#ff5c8a", "#ffb703", "#38b000", "#00b4d8", "#845ec2", "#fb5607"];
  const gentleColors = ["#b9d8ea", "#d8c7ef", "#c9e8cf", "#f5d6b3"];
  // 根據彩帶類型選擇調色盤。
  const colors = isCorrect ? correctColors : gentleColors;
  // 逐一建立彩帶粒子。
  for (let particleIndex = 0; particleIndex < particleCount; particleIndex += 1) {
    // 持續慶祝時從畫布上方散落，答題爆發時從畫面中央向外噴出。
    const startX = persistent ? random(width) : width * 0.5 + random(-width * 0.18, width * 0.18);
    const startY = persistent ? random(-50, -5) : height * 0.35 + random(-30, 30);
    // 設定不同方向的水平速度，形成自然散開的效果。
    const velocityX = persistent ? random(-1.8, 1.8) : random(-6.5, 6.5);
    // 答題爆發向上噴出，持續慶祝則慢慢落下。
    const velocityY = persistent ? random(0.5, 3.2) : random(-10, -3);
    // 將粒子資料集中保存，drawConfetti() 每一幀會更新它。
    confettiParticles.push({
      x: startX,
      y: startY,
      vx: velocityX,
      vy: velocityY,
      gravity: persistent ? random(0.025, 0.08) : random(0.12, 0.24),
      drag: persistent ? 0.998 : 0.992,
      width: random(6, 13),
      height: random(3, 8),
      rotation: random(TWO_PI),
      rotationSpeed: random(-0.16, 0.16),
      color: random(colors),
      alpha: persistent ? 210 : 235,
      life: persistent ? 9999 : random(55, 105),
      maxLife: persistent ? 9999 : 105
    });
  }
}

// 在 p5.js draw() 中更新與繪製所有彩帶粒子。
function drawConfetti() {
  // 成功完成時持續從上方補充繽紛彩帶。
  if (celebrationMode && frameCount % 8 === 0) {
    // 每次少量補充，避免粒子數無限制成長。
    spawnConfettiBurst(8, true, true);
  }
  // 沒有粒子時不需要進行繪圖。
  if (confettiParticles.length === 0) {
    // 直接結束，維持 draw() 效率。
    return;
  }
  // 避免彩帶圖形留下外框。
  noStroke();
  // 由後往前移除壽命結束的短暫粒子。
  for (let particleIndex = confettiParticles.length - 1; particleIndex >= 0; particleIndex -= 1) {
    // 取出目前粒子。
    const particle = confettiParticles[particleIndex];
    // 更新粒子的速度、位置、旋轉角度與透明度。
    particle.vx *= particle.drag;
    particle.vy += particle.gravity;
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.rotation += particle.rotationSpeed;
    particle.life -= 1;
    // 短暫爆發會逐漸淡出；持續慶祝維持穩定透明度。
    if (particle.maxLife < 9999) {
      particle.alpha = map(particle.life, 0, particle.maxLife, 0, 235, true);
    }
    // 粒子超過壽命或離開畫面太久就移除。
    if (particle.life <= 0 || particle.y > height + 40 || particle.x < -60 || particle.x > width + 60) {
      confettiParticles.splice(particleIndex, 1);
      continue;
    }
    // 保存繪圖狀態，避免旋轉影響其他粒子。
    push();
    // 移動到粒子位置。
    translate(particle.x, particle.y);
    // 讓彩帶有輕微翻轉感。
    rotate(particle.rotation);
    // 設定粒子色彩與透明度。
    fill(red(color(particle.color)), green(color(particle.color)), blue(color(particle.color)), particle.alpha);
    // 繪製小矩形彩帶，不使用額外套件。
    rectMode(CENTER);
    rect(0, 0, particle.width, particle.height, 1.5);
    // 還原繪圖狀態。
    pop();
  }
}

// ------------------------------
// GIF 圖片與替代內容
// ------------------------------

// 根據目前題目更新 GIF 圖片或替代圖像。
function updateQuestionMedia(question) {
  // 先隱藏圖片，等待這一次 DOM 圖片載入完成。
  imageElement.style("display", "none");
  // 先顯示替代內容，避免網路慢時出現空白。
  mediaFallback.style("display", "flex");
  // 用題目圖示與說明建立友善替代內容。
  mediaFallback.html(`<span style="font-size: 3.2rem">${question.icon}</span><span>${question.fallback}</span>`);
  // 更新圖片替代文字。
  imageElement.attribute("alt", `${question.category}動畫：${question.fallback}`);
  // 先移除舊圖片錯誤狀態，再載入目前題目的 GIF。
  imageElement.elt.src = "";
  // 使用 setTimeout 讓瀏覽器先完成清空，再設定新的網址。
  setTimeout(() => {
    // 設定目前題目的 GIF 網址；失敗會觸發 handleGifFailed。
    imageElement.elt.src = question.gif;
  }, 0);
}

// GIF DOM 元件載入成功時顯示圖片。
function handleGifLoaded() {
  // 顯示已成功載入的 GIF。
  imageElement.style("display", "block");
  // 隱藏替代內容。
  mediaFallback.style("display", "none");
}

// GIF DOM 元件載入失敗時顯示替代內容。
function handleGifFailed() {
  // 隱藏失敗的圖片。
  imageElement.style("display", "none");
  // 顯示友善的替代圖像與文字。
  mediaFallback.style("display", "flex");
}

// ------------------------------
// 音效功能：原生 Web Audio API
// ------------------------------

// 在第一次使用者互動時建立或喚醒 AudioContext。
function ensureAudioReady() {
  // 如果瀏覽器不支援音效，就安靜地略過。
  if (!audioSettings.enabled) {
    // 音效被設定為停用時結束函式。
    return;
  }
  // 取得瀏覽器支援的 AudioContext 建構函式。
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  // 如果瀏覽器沒有 Web Audio API，就結束函式。
  if (!AudioContextClass) {
    // 不讓缺少音效支援影響測驗功能。
    return;
  }
  // 如果尚未建立 AudioContext，就在使用者互動時建立。
  if (!audioContext) {
    // 建立原生 Web Audio API 的音效環境。
    audioContext = new AudioContextClass();
  }
  // 某些瀏覽器會先將音效環境設為 suspended，因此在互動後喚醒。
  if (audioContext.state === "suspended") {
    // resume 失敗時使用 catch 安靜處理，避免程式停止。
    audioContext.resume().catch(() => {});
  }
}

// 播放設定中的音效檔，沒有檔案時改用合成音效。
function playConfiguredSound(soundType) {
  // 靜音時不播放任何音效。
  if (isMuted || !audioSettings.enabled) {
    // 靜音狀態直接結束。
    return;
  }
  // 確保這次互動已啟用音效環境。
  ensureAudioReady();
  // 讀取對應的外部音效檔路徑。
  const filePath = audioSettings.files[soundType];
  // 如果有填入音效檔案，就優先嘗試播放音效檔。
  if (filePath) {
    // 建立不依賴 p5.sound 的原生 HTMLAudioElement。
    const audio = new Audio(filePath);
    // 設定外部音效音量。
    audio.volume = audioSettings.volume;
    // 播放檔案，失敗時改用 Web Audio 合成音。
    audio.play().catch(() => playSynthesizedSound(soundType));
    // 已經處理外部檔案，因此結束函式。
    return;
  }
  // 沒有外部檔案時直接使用原生 Web Audio API。
  playSynthesizedSound(soundType);
}

// 使用原生 Web Audio API 產生答對、答錯與完成音效。
function playSynthesizedSound(soundType) {
  // 如果沒有成功建立 AudioContext，就不影響其他功能。
  if (!audioContext || isMuted) {
    // 沒有音效環境時直接結束。
    return;
  }
  // 使用 try/catch 防止少數瀏覽器音效限制中斷遊戲。
  try {
    // 取得目前音效時間。
    const startTime = audioContext.currentTime;
    // 根據音效種類設定不同旋律。
    const noteSets = {
      // 答對使用上升音階。
      correct: [523.25, 659.25],
      // 答錯使用較低的兩個音。
      incorrect: [220, 165],
      // 完成測驗使用三音上升旋律。
      complete: [523.25, 659.25, 783.99]
    };
    // 取得目前音效的音符陣列。
    const notes = noteSets[soundType] || noteSets.correct;
    // 逐個建立振盪器與音量控制器。
    notes.forEach((frequency, noteIndex) => {
      // 建立一個原生振盪器。
      const oscillator = audioContext.createOscillator();
      // 建立一個原生增益節點控制音量。
      const gainNode = audioContext.createGain();
      // 使用柔和的正弦波音色。
      oscillator.type = "sine";
      // 設定音符頻率。
      oscillator.frequency.value = frequency;
      // 將振盪器連接到音量控制器。
      oscillator.connect(gainNode);
      // 將音量控制器連接到喇叭輸出。
      gainNode.connect(audioContext.destination);
      // 設定每個音符開始的時間。
      const noteStart = startTime + noteIndex * 0.13;
      // 設定音符結束的時間。
      const noteEnd = noteStart + (soundType === "complete" ? 0.26 : 0.18);
      // 從非常小的音量開始，避免爆音。
      gainNode.gain.setValueAtTime(0.0001, noteStart);
      // 用短時間淡入音量。
      gainNode.gain.exponentialRampToValueAtTime(0.18, noteStart + 0.025);
      // 用短時間淡出音量。
      gainNode.gain.exponentialRampToValueAtTime(0.0001, noteEnd);
      // 在排程時間啟動振盪器。
      oscillator.start(noteStart);
      // 在排程時間停止振盪器。
      oscillator.stop(noteEnd + 0.02);
    });
  } catch (error) {
    // 若瀏覽器拒絕音效，保持測驗畫面正常運作。
    console.warn("音效播放被瀏覽器限制，但不影響測驗：", error);
  }
}

// 切換靜音與開聲狀態。
function toggleMute() {
  // 確保按下靜音按鈕也算是使用者互動。
  ensureAudioReady();
  // 反轉目前靜音狀態。
  isMuted = !isMuted;
  // 更新靜音按鈕文字。
  muteButton.html(isMuted ? "🔇 靜音" : "🔊 開聲");
  // 更新靜音按鈕的無障礙說明。
  muteButton.attribute("aria-label", isMuted ? "目前為靜音，按此開啟音效" : "目前為開聲，按此靜音");
}

// ------------------------------
// DOM 樣式工具
// ------------------------------

// 將一組樣式逐項套用到 p5.js DOM 元件。
function applyStyles(element, styleObject) {
  // 逐項取出樣式名稱與值。
  Object.keys(styleObject).forEach((propertyName) => {
    // 使用 p5.Element.style 正確設定 DOM 樣式。
    element.style(propertyName, styleObject[propertyName]);
  });
}

// 設定通用畫面卡片樣式。
function styleScreen(element) {
  // 套用畫面卡片的樣式。
  applyStyles(element, {
    maxWidth: "920px",
    maxHeight: "calc(100vh - 125px)",
    overflowY: "auto",
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "24px",
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.94)",
    boxShadow: "0 12px 35px rgba(57, 102, 135, 0.16)",
    textAlign: "center"
  });
}

// 設定畫面標題樣式。
function styleHeading(element) {
  // 套用標題樣式。
  applyStyles(element, {
    margin: "0 0 12px",
    color: "#226089",
    lineHeight: "1.4"
  });
}

// 設定段落樣式。
function styleParagraph(element) {
  // 套用段落樣式。
  applyStyles(element, {
    margin: "0 auto 16px",
    maxWidth: "680px",
    lineHeight: "1.75",
    color: "#3c536b",
    fontSize: "1.05rem"
  });
}

// 設定主要按鈕樣式。
function stylePrimaryButton(button) {
  // 套用主要按鈕樣式。
  applyStyles(button, {
    display: "inline-block",
    padding: "13px 24px",
    border: "0",
    borderRadius: "999px",
    background: "#ff9f43",
    color: "#ffffff",
    fontSize: "1.05rem",
    fontWeight: "800",
    cursor: "pointer",
    boxShadow: "0 5px 0 #d87925",
    transition: "transform 0.15s ease, box-shadow 0.15s ease"
  });
}

// 設定一般小型按鈕樣式。
function styleButton(button, backgroundColor, textColor) {
  // 套用按鈕樣式。
  applyStyles(button, {
    padding: "9px 14px",
    border: `2px solid ${textColor}`,
    borderRadius: "999px",
    background: backgroundColor,
    color: textColor,
    fontWeight: "800",
    cursor: "pointer"
  });
}

// 設定選項按鈕的基本樣式。
function styleOptionButton(button) {
  // 套用選項按鈕樣式。
  applyStyles(button, {
    minHeight: "58px",
    padding: "12px 14px",
    border: "3px solid #b9d8ea",
    borderRadius: "16px",
    background: "#ffffff",
    color: "#29445c",
    fontSize: "1rem",
    fontWeight: "700",
    lineHeight: "1.4",
    cursor: "pointer",
    transition: "transform 0.15s ease, background 0.15s ease"
  });
}

// 將選項按鈕恢復成尚未作答的樣式。
function resetOptionStyle(button) {
  // 還原選項按鈕背景。
  button.style("background", "#ffffff");
  // 還原選項按鈕邊框。
  button.style("border", "3px solid #b9d8ea");
  // 還原選項按鈕文字顏色。
  button.style("color", "#29445c");
}

// 顯示或隱藏 p5.js DOM 元件。
function setElementVisible(element, shouldShow) {
  // 防止元素尚未建立時發生錯誤。
  if (!element) {
    // 找不到元素時直接結束。
    return;
  }
  // 依照布林值顯示或隱藏元素。
  if (shouldShow) {
    // 使用 p5.Element.show 顯示元素。
    element.show();
  } else {
    // 使用 p5.Element.hide 隱藏元素。
    element.hide();
  }
}

// ------------------------------
// 鍵盤、視窗與觸控支援
// ------------------------------

// p5.js 視窗改變大小時會呼叫這個函式。
function windowResized() {
  // 重新調整上層彩帶畫布大小。
  resizeCanvas(windowWidth, windowHeight);
  // 同步調整低層背景裝飾畫布大小。
  resizeDecorationCanvas();
  // 重新套用 responsive 樣式。
  applyResponsiveStyles();
}

// 根據手機、平板與電腦寬度調整 DOM 介面。
function applyResponsiveStyles() {
  // 判斷目前是否為窄版螢幕。
  const isNarrow = windowWidth < 620;
  // 判斷目前是否為超窄手機螢幕。
  const isVeryNarrow = windowWidth < 430;
  // 調整根容器內距。
  uiRoot.style("padding", isNarrow ? "12px 10px 22px" : "18px 20px 30px");
  // 調整標題大小。
  titleElement.style("font-size", isNarrow ? "1.25rem" : "1.8rem");
  // 調整開始與完成卡片內距。
  startScreen.style("padding", isNarrow ? "18px 14px" : "24px");
  // 調整測驗卡片內距。
  quizScreen.style("padding", isNarrow ? "16px 12px" : "24px");
  // 調整完成卡片內距。
  completeScreen.style("padding", isNarrow ? "18px 14px" : "24px");
  // 調整題目文字大小。
  questionElement.style("font-size", isNarrow ? "1.2rem" : "1.45rem");
  // 調整選項按鈕排列，手機改成單欄。
  optionButtons.forEach((button) => {
    // 讓按鈕在窄版螢幕仍然容易觸控。
    button.style("min-height", isVeryNarrow ? "54px" : "58px");
  });
  // 使用已保存的選項容器，讓手機排列成單欄。
  if (optionContainerElement) {
    // 手機使用單欄，較寬畫面使用兩欄。
    optionContainerElement.style("grid-template-columns", isNarrow ? "1fr" : "repeat(2, minmax(0, 1fr))");
  }
}

// p5.js 會在滑鼠互動時呼叫這個函式，可協助啟用音效。
function mousePressed() {
  // 使用者第一次滑鼠互動時嘗試啟用 Web Audio API。
  ensureAudioReady();
}

// 處理鍵盤操作，讓不使用滑鼠的兒童也能完成測驗。
function keyPressed() {
  // 將按鍵轉成小寫，方便處理大小寫 R 與 M。
  const pressedKey = String(key).toLowerCase();
  // 按下 M 時切換靜音。
  if (pressedKey === "m") {
    // 執行靜音切換。
    toggleMute();
    // 結束本次按鍵處理。
    return false;
  }
  // 按下 R 時重新開始測驗。
  if (pressedKey === "r") {
    // 執行重新開始。
    restartQuiz();
    // 結束本次按鍵處理。
    return false;
  }
  // 只有作答中才處理數字選項。
  if (gameState === GAME_STATE.QUESTION && ["1", "2", "3", "4"].includes(pressedKey)) {
    // 將字元轉成 0 到 3 的選項索引。
    const selectedIndex = Number(pressedKey) - 1;
    // 送出鍵盤選擇的答案。
    selectAnswer(selectedIndex);
    // 結束本次按鍵處理。
    return false;
  }
  // 只有答題回饋狀態才讓 Enter 前進。
  if (gameState === GAME_STATE.FEEDBACK && keyCode === ENTER) {
    // 前往下一題或完成畫面。
    nextQuestion();
    // 結束本次按鍵處理，避免頁面其他預設動作。
    return false;
  }
  // 其他按鍵不需要特別處理。
  return true;
}
