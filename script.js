const KD = {
  h: {
    hsingle: { l: "あ a", c: { あ: "a", い: "i", う: "u", え: "e", お: "o" } },
    hk: { l: "か ka", c: { か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko" } },
    hs: {
      l: "さ sa",
      c: { さ: "sa", し: "shi", す: "su", せ: "se", そ: "so" },
    },
    ht: {
      l: "た ta",
      c: { た: "ta", ち: "chi", つ: "tsu", て: "te", と: "to" },
    },
    hn: { l: "な na", c: { な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no" } },
    hh: { l: "は ha", c: { は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho" } },
    hm: { l: "ま ma", c: { ま: "ma", み: "mi", む: "mu", め: "me", も: "mo" } },
    hy: { l: "や ya", c: { や: "ya", ゆ: "yu", よ: "yo" } },
    hr: { l: "ら ra", c: { ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro" } },
    hw: { l: "わ wa", c: { わ: "wa", を: "o" } },
    hn1: { l: "ん n", c: { ん: "n" } },
    hg: { l: "が ga", c: { が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go" } },
    hz: { l: "ざ za", c: { ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo" } },
    hd: { l: "だ da", c: { だ: "da", ぢ: "ji", づ: "zu", で: "de", ど: "do" } },
    hb: { l: "ば ba", c: { ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo" } },
    hp: { l: "ぱ pa", c: { ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po" } },
  },
  hc: {
    hdk: { l: "きゃ kya", c: { きゃ: "kya", きゅ: "kyu", きょ: "kyo" } },
    hds: { l: "しゃ sha", c: { しゃ: "sha", しゅ: "shu", しょ: "sho" } },
    hdc: { l: "ちゃ cha", c: { ちゃ: "cha", ちゅ: "chu", ちょ: "cho" } },
    hdn: { l: "にゃ nya", c: { にゃ: "nya", にゅ: "nyu", にょ: "nyo" } },
    hdh: { l: "ひゃ hya", c: { ひゃ: "hya", ひゅ: "hyu", ひょ: "hyo" } },
    hdm: { l: "みゃ mya", c: { みゃ: "mya", みゅ: "myu", みょ: "myo" } },
    hdr: { l: "りゃ rya", c: { りゃ: "rya", りゅ: "ryu", りょ: "ryo" } },
    hdg: { l: "ぎゃ gya", c: { ぎゃ: "gya", ぎゅ: "gyu", ぎょ: "gyo" } },
    hdj: { l: "じゃ ja", c: { じゃ: "ja", じゅ: "ju", じょ: "jo" } },
    hdj2: { l: "ぢゃ ja", c: { ぢゃ: "ja", ぢゅ: "ju", ぢょ: "jo" } },
    hdb: { l: "びゃ bya", c: { びゃ: "bya", びゅ: "byu", びょ: "byo" } },
    hdp: { l: "ぴゃ pya", c: { ぴゃ: "pya", ぴゅ: "pyu", ぴょ: "pyo" } },
  },
  k: {
    ksingle: { l: "ア a", c: { ア: "a", イ: "i", ウ: "u", エ: "e", オ: "o" } },
    kk: { l: "カ ka", c: { カ: "ka", キ: "ki", ク: "ku", ケ: "ke", コ: "ko" } },
    ks: {
      l: "サ sa",
      c: { サ: "sa", シ: "shi", ス: "su", セ: "se", ソ: "so" },
    },
    kt: {
      l: "タ ta",
      c: { タ: "ta", チ: "chi", ツ: "tsu", テ: "te", ト: "to" },
    },
    kn: { l: "ナ na", c: { ナ: "na", ニ: "ni", ヌ: "nu", ネ: "ne", ノ: "no" } },
    kh: { l: "ハ ha", c: { ハ: "ha", ヒ: "hi", フ: "fu", ヘ: "he", ホ: "ho" } },
    km: { l: "マ ma", c: { マ: "ma", ミ: "mi", ム: "mu", メ: "me", モ: "mo" } },
    ky: { l: "ヤ ya", c: { ヤ: "ya", ユ: "yu", ヨ: "yo" } },
    kr: { l: "ラ ra", c: { ラ: "ra", リ: "ri", ル: "ru", レ: "re", ロ: "ro" } },
    kw: { l: "ワ wa", c: { ワ: "wa", ヲ: "o" } },
    kn1: { l: "ン n", c: { ン: "n" } },
    kg: { l: "ガ ga", c: { ガ: "ga", ギ: "gi", グ: "gu", ゲ: "ge", ゴ: "go" } },
    kz: { l: "ザ za", c: { ザ: "za", ジ: "ji", ズ: "zu", ゼ: "ze", ゾ: "zo" } },
    kd: { l: "ダ da", c: { ダ: "da", ヂ: "ji", ヅ: "zu", デ: "de", ド: "do" } },
    kb: { l: "バ ba", c: { バ: "ba", ビ: "bi", ブ: "bu", ベ: "be", ボ: "bo" } },
    kp: { l: "パ pa", c: { パ: "pa", ピ: "pi", プ: "pu", ペ: "pe", ポ: "po" } },
  },
  kc: {
    kdk: { l: "キャ kya", c: { キャ: "kya", キュ: "kyu", キョ: "kyo" } },
    kds: { l: "シャ sha", c: { シャ: "sha", シュ: "shu", ショ: "sho" } },
    kdc: { l: "チャ cha", c: { チャ: "cha", チュ: "chu", チョ: "cho" } },
    kdn: { l: "ニャ nya", c: { ニャ: "nya", ニュ: "nyu", ニョ: "nyo" } },
    kdh: { l: "ヒャ hya", c: { ヒャ: "hya", ヒュ: "hyu", ヒョ: "hyo" } },
    kdm: { l: "ミャ mya", c: { ミャ: "mya", ミュ: "myu", ミョ: "myo" } },
    kdr: { l: "リャ rya", c: { リャ: "rya", リュ: "ryu", リョ: "ryo" } },
    kdg: { l: "ギャ gya", c: { ギャ: "gya", ギュ: "gyu", ギョ: "gyo" } },
    kdj: { l: "ジャ ja", c: { ジャ: "ja", ジュ: "ju", ジョ: "jo" } },
    kdj2: { l: "ヂャ ja", c: { ヂャ: "ja", ヂュ: "ju", ヂョ: "jo" } },
    kdb: { l: "ビャ bya", c: { ビャ: "bya", ビュ: "byu", ビョ: "byo" } },
    kdp: { l: "ピャ pya", c: { ピャ: "pya", ピュ: "pyu", ピョ: "pyo" } },
  },
};

const REP = {
  o: ["wo"],
  chi: ["ci"],
  shi: ["si"],
  tsu: ["tu"],
  zu: ["du"],
  ji: ["di", "zi"],
  fu: ["hu"],
  ja: ["dya"],
  jo: ["dyo"],
  ju: ["dyu"],
};
const GL = {
  h: "hiragana",
  hc: "hiragana combo",
  k: "katakana",
  kc: "katakana combo",
};

/* === THEMES === */
const THEMES = [
  { id: "night", name: "Night", hex: "#f0a500" },
  { id: "catppuccin", name: "Catppuccin", hex: "#cba6f7" },
  { id: "gruvbox", name: "Gruvbox", hex: "#fabd2f" },
  { id: "coral", name: "Coral", hex: "#ff7f6e" },
  { id: "forest", name: "Forest", hex: "#80c970" },
  { id: "nord", name: "Nord", hex: "#88c0d0" },
  { id: "tokyo-night", name: "Tokyo Night", hex: "#7aa2f7" },
  { id: "dracula", name: "Dracula", hex: "#ff79c6" },
  { id: "one-dark", name: "One Dark", hex: "#61afef" },
  { id: "solarized", name: "Solarized", hex: "#268bd2" },
  { id: "monokai", name: "Monokai", hex: "#e6db74" },
  { id: "rose-pine", name: "Rose Piné", hex: "#f6c177" },
  { id: "kanagawa", name: "Kanagawa", hex: "#7fb4ca" },
  { id: "everforest", name: "Everforest", hex: "#a7c080" },
  { id: "cyberpunk", name: "Cyberpunk", hex: "#ffff00" },
  { id: "material", name: "Material", hex: "#80cbc4" },
  { id: "ayu", name: "Ayu", hex: "#ffb454" },
  { id: "astral", name: "Astral", hex: "#4db8ff" },
  { id: "midnight", name: "Midnight", hex: "#9896ff" },
  { id: "eclipse", name: "Eclipse", hex: "#bb86fc" },
  { id: "nebula", name: "Nebula", hex: "#d180ff" },
  { id: "obsidian", name: "Obsidian", hex: "#6db3f2" },
];

function buildThemes() {
  const g = document.getElementById("tgrid");
  const cur = document.documentElement.dataset.theme || "night";
  THEMES.forEach((t) => {
    const c = document.createElement("button");
    c.type = "button";
    c.className = "tchip" + (t.id === cur ? " active" : "");
    c.dataset.id = t.id;
    c.setAttribute("aria-pressed", t.id === cur ? "true" : "false");
    c.innerHTML = `<span class="tswatch" style="background:${t.hex}"></span>${t.name}`;
    c.onclick = () => applyTheme(t.id);
    g.appendChild(c);
  });
}
function applyTheme(id) {
  document.documentElement.dataset.theme = id;
  localStorage.setItem("ks_theme", id);
  document.querySelectorAll(".tchip").forEach((c) => {
    const on = c.dataset.id === id;
    c.classList.toggle("active", on);
    c.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

/* === FONT === */
function setFont(el) {
  const f = el.dataset.font;
  document.getElementById("kc").style.fontFamily = f;
  localStorage.setItem("ks_font", f);
  document.querySelectorAll(".fchip").forEach((c) => {
    const on = c === el;
    c.classList.toggle("active", on);
    c.setAttribute("aria-pressed", on ? "true" : "false");
  });
}

/* === TOOLTIP === */
const tt = document.getElementById("tt");
let tth = null;
function showTT(el, chars) {
  clearTimeout(tth);
  tt.innerHTML = Object.entries(chars)
    .map(
      ([ch, rm]) =>
        `<span class="tt-jp">${ch}</span><span class="tt-rm">${rm}</span>`,
    )
    .join("");
  tt.style.display = "grid";
  const r = el.getBoundingClientRect(),
    tw = tt.offsetWidth || 100,
    th2 = tt.offsetHeight || 60;
  let l = r.left + r.width / 2 - tw / 2,
    t = r.top - th2 - 8;
  if (l < 6) l = 6;
  if (l + tw > window.innerWidth - 6) l = window.innerWidth - tw - 6;
  if (t < 6) t = r.bottom + 8;
  if (t + th2 > window.innerHeight - 6) t = window.innerHeight - th2 - 6;
  tt.style.left = l + "px";
  tt.style.top = t + "px";
}
function hideTT() {
  tth = setTimeout(() => (tt.style.display = "none"), 80);
}

/* === BUILD GRIDS === */
function buildGrid(grp, gid) {
  const g = document.getElementById(gid);
  g.innerHTML = "";
  Object.entries(KD[grp]).forEach(([id, { l, c }]) => {
    const [jp, rm] = l.split(" ");
    const w = document.createElement("div");
    w.className = "kopt";
    const inp = document.createElement("input");
    inp.type = "checkbox";
    inp.id = id;
    inp.dataset.g = grp;
    inp.addEventListener("change", () => {
      save();
      rebuildPool();
    });
    const lbl = document.createElement("label");
    lbl.htmlFor = id;
    lbl.className = "klbl";
    lbl.innerHTML = `<span class="kjp">${jp}</span><span class="krm">${rm}</span>`;
    lbl.title = `${jp} = ${rm}`;
    lbl.addEventListener("mouseenter", () => showTT(lbl, c));
    lbl.addEventListener("mouseleave", hideTT);
    w.appendChild(inp);
    w.appendChild(lbl);
    g.appendChild(w);
  });
}
buildGrid("h", "hg");
buildGrid("hc", "hcg");
buildGrid("k", "kg");
buildGrid("kc", "kcg");
buildThemes();

/* === SETTINGS === */
function chk(g) {
  document
    .querySelectorAll(`input[data-g="${g}"]`)
    .forEach((c) => (c.checked = true));
  save();
  rebuildPool();
}
function uchk(g) {
  document
    .querySelectorAll(`input[data-g="${g}"]`)
    .forEach((c) => (c.checked = false));
  save();
  rebuildPool();
}
function save() {
  const obj = {};
  document.querySelectorAll("input[type=checkbox]").forEach((c) => {
    obj[c.id] = c.checked ? 1 : 0;
  });
  try {
    localStorage.setItem("ks_checks", JSON.stringify(obj));
  } catch (_) {}
}
function load() {
  let any = false;
  try {
    const raw = localStorage.getItem("ks_checks");
    if (raw) {
      const obj = JSON.parse(raw);
      document.querySelectorAll("input[type=checkbox]").forEach((c) => {
        if (c.id in obj) {
          c.checked = !!obj[c.id];
          any = true;
        }
      });
    }
  } catch (_) {}
  if (!any) {
    document.querySelectorAll("input[type=checkbox]").forEach((c) => {
      const v = localStorage.getItem("ks2_" + c.id);
      if (v !== null) {
        c.checked = v === "1";
        any = true;
      }
    });
    if (any) save();
  }
  if (!any) document.getElementById("hsingle").checked = true;
  applyTheme(localStorage.getItem("ks_theme") || "night");
  const sf = localStorage.getItem("ks_font") || "'Noto Sans JP',sans-serif";
  document.getElementById("kc").style.fontFamily = sf;
  document.querySelectorAll(".fchip").forEach((c) => {
    const on = c.dataset.font === sf;
    c.classList.toggle("active", on);
    c.setAttribute("aria-pressed", on ? "true" : "false");
  });
  const m = localStorage.getItem("ks_mode");
  if (m === "words") setMode("words", true);
  const jl = localStorage.getItem("ks_jlpt");
  if (jl && (jl === "all" || ["N5", "N4", "N3", "N2", "N1"].includes(jl))) {
    jlptLevel = jl;
    document.querySelectorAll("#jlptRow .wlchip").forEach((c) => {
      const on = c.dataset.lvl === jl;
      c.classList.toggle("active", on);
      c.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }
}

/* === MODE (letters vs words) === */
let mode = "letters"; // 'letters' | 'words'
let jlptLevel = "all"; // 'all' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1'

function setMode(m, skipSave) {
  const prev = mode;
  mode = m;
  document
    .getElementById("modeLetters")
    .classList.toggle("active", m === "letters");
  document
    .getElementById("modeWords")
    .classList.toggle("active", m === "words");
  document
    .getElementById("modeLetters")
    .setAttribute("aria-pressed", m === "letters" ? "true" : "false");
  document
    .getElementById("modeWords")
    .setAttribute("aria-pressed", m === "words" ? "true" : "false");
  document
    .getElementById("jlptSection")
    .classList.toggle("hidden", m !== "words");
  if (!skipSave) localStorage.setItem("ks_mode", m);
  if (prev !== m) loadStats();
  if (m === "words") {
    ensureWords(() => {
      rebuildPool();
      if (!skipSave) next();
      else updateStats();
    });
    return;
  }
  rebuildPool();
  if (!skipSave) next();
  else updateStats();
}

document.querySelectorAll("#jlptRow .wlchip").forEach((b) => {
  b.addEventListener("click", () => {
    jlptLevel = b.dataset.lvl;
    document.querySelectorAll("#jlptRow .wlchip").forEach((c) => {
      const on = c === b;
      c.classList.toggle("active", on);
      c.setAttribute("aria-pressed", on ? "true" : "false");
    });
    localStorage.setItem("ks_jlpt", jlptLevel);
    ensureWords(() => {
      rebuildPool();
      next();
    });
  });
});

/* === WORDS LAZY LOAD === */
let wordsLoading = false;
let wordsCallbacks = [];
function wordsReady() {
  return typeof WORDS !== "undefined" && WORDS;
}
function ensureWords(cb) {
  if (wordsReady()) {
    if (cb) cb();
    return;
  }
  if (cb) wordsCallbacks.push(cb);
  if (wordsLoading) return;
  wordsLoading = true;
  const s = document.createElement("script");
  s.src = "words.js";
  s.onload = () => {
    wordsLoading = false;
    const cbs = wordsCallbacks.slice();
    wordsCallbacks = [];
    cbs.forEach((fn) => fn());
  };
  s.onerror = () => {
    wordsLoading = false;
    wordsCallbacks = [];
    const note = document.getElementById("emptyNote");
    if (mode === "words") {
      note.style.display = "block";
      note.innerHTML =
        "Could not load <b>words.js</b>. Check the file is next to the page.";
    }
  };
  document.head.appendChild(s);
}

/* === STATS (per mode) === */
const STATS_MIN_ACC = 20;
let bestStreak = 0;
let bestAcc = 0;
let statsSaving = null;

function statsKey() {
  return "ks_stats_" + mode;
}
function emptyStats() {
  return { totAns: 0, totCor: 0, streak: 0, bestStreak: 0, bestAcc: 0 };
}
function loadStats() {
  let s = emptyStats();
  try {
    const raw = localStorage.getItem(statsKey());
    if (raw) s = Object.assign(emptyStats(), JSON.parse(raw));
  } catch (_) {}
  totAns = s.totAns | 0;
  totCor = s.totCor | 0;
  streak = s.streak | 0;
  bestStreak = s.bestStreak | 0;
  bestAcc = s.bestAcc || 0;
}
function persistStatsNow() {
  const payload = {
    totAns,
    totCor,
    streak,
    bestStreak,
    bestAcc,
  };
  try {
    localStorage.setItem(statsKey(), JSON.stringify(payload));
  } catch (_) {}
}
function scheduleSaveStats() {
  clearTimeout(statsSaving);
  statsSaving = setTimeout(persistStatsNow, 200);
}
function resetStats() {
  if (
    !confirm(
      "Reset session stats for this mode?\nBest streak & accuracy are kept.",
    )
  )
    return;
  totAns = 0;
  totCor = 0;
  streak = 0;
  persistStatsNow();
  updateStats();
}

/* === POOL === */
let pool = [],
  queue = [],
  curCh = null,
  curRd = null,
  curGrp = null,
  curEn = null,
  curAlt = null,
  curLvl = null;
let totAns = 0,
  totCor = 0,
  streak = 0,
  isWrong = false,
  revealed = false;

const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"];

function buildPool() {
  pool = [];
  if (mode === "letters") {
    document.querySelectorAll("input[type=checkbox]:checked").forEach((cb) => {
      for (const [g, gd] of Object.entries(KD)) {
        if (gd[cb.id])
          for (const [ch, rd] of Object.entries(gd[cb.id].c))
            pool.push({ ch, rd, g, en: null, alt: null, lvl: null });
      }
    });
    if (!pool.length) {
      document.getElementById("hsingle").checked = true;
      save();
      buildPool();
    }
  } else {
    // Words mode: JLPT level only — kana checkboxes do NOT filter the pool.
    if (!wordsReady()) {
      pool = [];
      return;
    }
    const levels = jlptLevel === "all" ? JLPT_LEVELS : [jlptLevel];
    const bank = WORDS;
    for (const lvl of levels) {
      const list = bank[lvl] || [];
      for (const w of list) {
        const [jp, rd, en, kind, alt] = w;
        pool.push({ ch: jp, rd, g: kind, en, alt: alt || null, lvl });
      }
    }
  }
}
function rebuildPool() {
  buildPool();
  queue = [];
}
function shuffle(a) {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

function next() {
  const emptyNote = document.getElementById("emptyNote");
  const inputArea = document.getElementById("inputArea");
  const kanaBtns = document.querySelector(".kana-btns");
  if (mode === "words" && !wordsReady()) {
    emptyNote.style.display = "block";
    emptyNote.innerHTML = "Loading word bank…";
    return;
  }
  if (!pool.length) {
    document.getElementById("kc").textContent = "—";
    document.getElementById("kc").className = "kana-char in";
    document.getElementById("tl").textContent =
      mode === "words" ? "no words available" : "hiragana";
    document.getElementById("wm").style.display = "none";
    document.getElementById("wlv").style.display = "none";
    hideRv();
    emptyNote.style.display = "block";
    emptyNote.innerHTML =
      mode === "words"
        ? `No words in <b>${jlptLevel === "all" ? "the bank" : jlptLevel}</b>.<br>Choose another <b>JLPT level</b> above.`
        : "Turn on at least one kana group below to begin.";
    inputArea.style.display = "none";
    kanaBtns.style.display = "none";
    document.getElementById("msg").textContent = "";
    document.getElementById("rbtn").style.display = "none";
    document.getElementById("skbtn").style.display = "none";
    return;
  }
  emptyNote.style.display = "none";
  inputArea.style.display = "";
  kanaBtns.style.display = "";
  if (!queue.length) queue = shuffle(pool);
  if (curCh && queue[0] && queue[0].ch === curCh && queue.length > 1)
    queue.shift();
  const it = queue.shift();
  curCh = it.ch;
  curRd = it.rd;
  curGrp = it.g;
  curEn = it.en;
  curAlt = it.alt;
  curLvl = it.lvl || null;
  render();
}

function render() {
  const el = document.getElementById("kc");
  el.classList.remove("in", "shake", "cflash", "word-len", "word-len-lg");
  void el.offsetWidth;
  el.classList.add("in");
  if (mode === "words") {
    el.classList.add(curCh.length >= 5 ? "word-len-lg" : "word-len");
  }
  el.textContent = curCh;
  el.lang = "ja";
  document.getElementById("tl").textContent =
    mode === "words"
      ? curGrp === "k"
        ? "katakana word"
        : "hiragana word"
      : GL[curGrp] || "";
  const wm = document.getElementById("wm");
  const wlv = document.getElementById("wlv");
  if (mode === "words" && curEn) {
    wm.textContent = curEn;
    wm.style.display = "";
  } else {
    wm.style.display = "none";
  }
  if (mode === "words" && curLvl) {
    wlv.textContent = curLvl;
    wlv.style.display = "";
  } else {
    wlv.style.display = "none";
  }
  hideRv();
  isWrong = false;
  revealed = false;
  const inp = document.getElementById("inp");
  inp.value = "";
  inp.className = "";
  inp.placeholder = mode === "words" ? "type the reading…" : "type romaji…";
  inp.focus();
  document.getElementById("cfr").innerHTML = "";
  document.getElementById("msg").textContent =
    "Peek the reading — hover, tap, or press ?";
  document.getElementById("msg").className = "msg";
  document.getElementById("skbtn").style.display = "none";
  document.getElementById("rbtn").style.display = "";
  updateStats();
}

/* === REVEAL === */
const kcEl = document.getElementById("kc");
kcEl.addEventListener("mouseenter", showRv);
kcEl.addEventListener("mouseleave", () => {
  if (!revealed) hideRv();
});
kcEl.addEventListener("click", () => {
  revealed = !revealed;
  revealed ? showRv() : hideRv();
});
function showRv() {
  const r = document.getElementById("rv");
  if (curRd) r.textContent = curRd;
  r.classList.add("show");
}
function hideRv() {
  document.getElementById("rv").classList.remove("show");
}
function toggleReveal() {
  revealed = !revealed;
  revealed ? showRv() : hideRv();
}

/* === AUDIO === */
let jpVoice = null;
function initVoices() {
  const vs = speechSynthesis.getVoices();
  jpVoice =
    vs.find((v) => v.lang === "ja-JP") ||
    vs.find((v) => v.lang.startsWith("ja")) ||
    null;
}
if ("speechSynthesis" in window) {
  speechSynthesis.addEventListener("voiceschanged", initVoices);
  initVoices();
}
function playAudio() {
  if (!("speechSynthesis" in window) || !curCh) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(curCh);
  u.lang = "ja-JP";
  u.rate = 0.8;
  u.pitch = 1;
  if (jpVoice) u.voice = jpVoice;
  speechSynthesis.speak(u);
  const b = document.getElementById("sndbtn");
  b.classList.add("pulse");
  setTimeout(() => b.classList.remove("pulse"), 500);
}

/* === INPUT === */
function getPoss(rd) {
  const p = [rd];
  if (REP[rd]) p.push(...REP[rd]);
  if (curAlt) p.push(...curAlt);
  return p;
}

document.getElementById("inp").addEventListener("input", function () {
  if (isWrong || !curCh) return;
  checkLive(this.value.toLowerCase());
});
document.getElementById("inp").addEventListener("keydown", function (e) {
  if (!curCh) return;
  if (e.key === "Enter" || (e.key === " " && !this.value)) {
    e.preventDefault();
    isWrong ? skip() : submit(this.value.toLowerCase());
  }
  if (e.key === "?") {
    e.preventDefault();
    toggleReveal();
  }
  if (e.key.toLowerCase() === "p" && !this.value) {
    e.preventDefault();
    playAudio();
  }
});

function isTypingTarget(el) {
  if (!el) return false;
  const tag = el.tagName;
  if (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    el.isContentEditable
  ) {
    if (el.id === "inp") return false;
    return true;
  }
  return false;
}

document.addEventListener("keydown", function (e) {
  const inp = document.getElementById("inp");
  if (e.key === "Escape") {
    if (isWrong) skip();
    inp.focus();
    return;
  }
  if (
    e.key === "?" &&
    document.activeElement !== inp &&
    !isTypingTarget(document.activeElement)
  ) {
    e.preventDefault();
    toggleReveal();
    return;
  }
  if (
    document.activeElement !== inp &&
    e.key.length === 1 &&
    !e.ctrlKey &&
    !e.metaKey &&
    !e.altKey &&
    !isTypingTarget(document.activeElement)
  ) {
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === "BUTTON" || tag === "LABEL") return;
    inp.focus();
  }
});

function checkLive(typed) {
  const poss = getPoss(curRd),
    cfr = document.getElementById("cfr");
  if (!typed) {
    cfr.innerHTML = "";
    document.getElementById("inp").className = "";
    return;
  }
  let best = poss[0];
  for (const p of poss) {
    if (p.startsWith(typed.slice(0, p.length))) {
      best = p;
      break;
    }
  }
  cfr.innerHTML = typed
    .split("")
    .map((tc, i) =>
      tc === best[i]
        ? `<span class="c-ok">${tc}</span>`
        : `<span class="c-no">${tc}</span>`,
    )
    .join("");
  for (const p of poss) {
    if (p === typed) {
      submit(typed);
      return;
    }
  }
  document.getElementById("inp").className = poss.some((p) =>
    p.startsWith(typed),
  )
    ? ""
    : "no";
}

function submit(typed) {
  const poss = getPoss(curRd),
    ok = poss.some((p) => p === typed);
  totAns++;
  if (ok) {
    totCor++;
    streak++;
    const el = document.getElementById("kc");
    el.classList.add("cflash");
    showRv();
    updateStats();
    setTimeout(next, 165);
  } else {
    isWrong = true;
    streak = 0;
    document.getElementById("kc").classList.add("shake");
    showRv();
    const inp = document.getElementById("inp");
    inp.className = "no";
    inp.value = typed;
    const msg = document.getElementById("msg");
    msg.className = "msg err";
    msg.innerHTML = `${curCh} = <span class="ans">${curRd}</span> &mdash; Enter to continue`;
    document.getElementById("skbtn").style.display = "";
    document.getElementById("rbtn").style.display = "none";
    updateStats();
    const req = {
      ch: curCh,
      rd: curRd,
      g: curGrp,
      en: curEn,
      alt: curAlt,
      lvl: curLvl,
    };
    if (queue.length > 3) queue.splice(3, 0, req);
    else queue.push(req);
  }
}
function skip() {
  if (!isWrong) return;
  next();
}

function updateStats() {
  if (streak > bestStreak) bestStreak = streak;
  if (totAns >= STATS_MIN_ACC) {
    const acc = (totCor / totAns) * 100;
    if (acc > bestAcc) bestAcc = Math.round(acc * 10) / 10;
  }
  document.getElementById("sv").textContent = totCor;
  document.getElementById("tv").textContent = totAns;
  document.getElementById("af").style.width =
    (totAns > 0 ? (totCor / totAns) * 100 : 0) + "%";
  document.getElementById("stv").textContent = streak;
  document.getElementById("stk").classList.toggle("hot", streak >= 5);
  document.getElementById("bstv").textContent = bestStreak;
  document.getElementById("bacv").textContent =
    totAns >= STATS_MIN_ACC && bestAcc ? bestAcc + "%" : "—";
  document.getElementById("bestchip").title =
    `Best streak ${bestStreak} · best accuracy ${
      bestAcc ? bestAcc + "%" : "—"
    } (acc after ${STATS_MIN_ACC}+ answers)`;
  scheduleSaveStats();
}

function toggleOpt() {
  const body = document.getElementById("optbody");
  const btn = document.getElementById("optog");
  const open = body.classList.toggle("open");
  btn.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", open ? "true" : "false");
}

/* === MOBILE KEYBOARD VIEWPORT === */
function setupViewport() {
  const vv = window.visualViewport;
  if (!vv) return;
  const apply = () => {
    const h = Math.round(vv.height);
    document.documentElement.style.setProperty("--app-h", h + "px");
    const ae = document.activeElement;
    if (ae && ae.id === "inp") {
      requestAnimationFrame(() => {
        ae.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    }
  };
  vv.addEventListener("resize", apply);
  vv.addEventListener("scroll", apply);
  apply();
}

load();
loadStats();
buildPool();
setupViewport();
if (mode === "words") {
  ensureWords(() => {
    rebuildPool();
    next();
  });
} else {
  next();
}
