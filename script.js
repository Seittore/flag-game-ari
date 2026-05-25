const GRID_SIZE = 24;
const FLAG_BASE_URL = "https://flagcdn.com/w320";

const COUNTRIES = [
  { code: "ad", name: "Andorra", ru: "Андорра" },
  { code: "ae", name: "United Arab Emirates", ru: "ОАЭ" },
  { code: "af", name: "Afghanistan", ru: "Афганистан" },
  { code: "ag", name: "Antigua and Barbuda", ru: "Антигуа и Барбуда" },
  { code: "al", name: "Albania", ru: "Албания" },
  { code: "am", name: "Armenia", ru: "Армения" },
  { code: "ao", name: "Angola", ru: "Ангола" },
  { code: "ar", name: "Argentina", ru: "Аргентина" },
  { code: "at", name: "Austria", ru: "Австрия" },
  { code: "au", name: "Australia", ru: "Австралия" },
  { code: "az", name: "Azerbaijan", ru: "Азербайджан" },
  { code: "ba", name: "Bosnia and Herzegovina", ru: "Босния и Герцеговина" },
  { code: "bb", name: "Barbados", ru: "Барбадос" },
  { code: "bd", name: "Bangladesh", ru: "Бангладеш" },
  { code: "be", name: "Belgium", ru: "Бельгия" },
  { code: "bf", name: "Burkina Faso", ru: "Буркина-Фасо" },
  { code: "bg", name: "Bulgaria", ru: "Болгария" },
  { code: "bh", name: "Bahrain", ru: "Бахрейн" },
  { code: "bi", name: "Burundi", ru: "Бурунди" },
  { code: "bj", name: "Benin", ru: "Бенин" },
  { code: "bn", name: "Brunei", ru: "Бруней" },
  { code: "bo", name: "Bolivia", ru: "Боливия" },
  { code: "br", name: "Brazil", ru: "Бразилия" },
  { code: "bs", name: "Bahamas", ru: "Багамы" },
  { code: "bt", name: "Bhutan", ru: "Бутан" },
  { code: "bw", name: "Botswana", ru: "Ботсвана" },
  { code: "by", name: "Belarus", ru: "Беларусь" },
  { code: "bz", name: "Belize", ru: "Белиз" },
  { code: "ca", name: "Canada", ru: "Канада" },
  { code: "cd", name: "DR Congo", ru: "ДР Конго" },
  { code: "cf", name: "Central African Republic", ru: "ЦАР" },
  { code: "cg", name: "Republic of the Congo", ru: "Республика Конго" },
  { code: "ch", name: "Switzerland", ru: "Швейцария" },
  { code: "ci", name: "Côte d'Ivoire", ru: "Кот-д’Ивуар" },
  { code: "cl", name: "Chile", ru: "Чили" },
  { code: "cm", name: "Cameroon", ru: "Камерун" },
  { code: "cn", name: "China", ru: "Китай" },
  { code: "co", name: "Colombia", ru: "Колумбия" },
  { code: "cr", name: "Costa Rica", ru: "Коста-Рика" },
  { code: "cu", name: "Cuba", ru: "Куба" },
  { code: "cv", name: "Cape Verde", ru: "Кабо-Верде" },
  { code: "cy", name: "Cyprus", ru: "Кипр" },
  { code: "cz", name: "Czechia", ru: "Чехия" },
  { code: "de", name: "Germany", ru: "Германия" },
  { code: "dj", name: "Djibouti", ru: "Джибути" },
  { code: "dk", name: "Denmark", ru: "Дания" },
  { code: "dm", name: "Dominica", ru: "Доминика" },
  { code: "do", name: "Dominican Republic", ru: "Доминиканская Республика" },
  { code: "dz", name: "Algeria", ru: "Алжир" },
  { code: "ec", name: "Ecuador", ru: "Эквадор" },
  { code: "ee", name: "Estonia", ru: "Эстония" },
  { code: "eg", name: "Egypt", ru: "Египет" },
  { code: "er", name: "Eritrea", ru: "Эритрея" },
  { code: "es", name: "Spain", ru: "Испания" },
  { code: "et", name: "Ethiopia", ru: "Эфиопия" },
  { code: "fi", name: "Finland", ru: "Финляндия" },
  { code: "fj", name: "Fiji", ru: "Фиджи" },
  { code: "fm", name: "Micronesia", ru: "Микронезия" },
  { code: "fr", name: "France", ru: "Франция" },
  { code: "ga", name: "Gabon", ru: "Габон" },
  { code: "gb", name: "United Kingdom", ru: "Великобритания" },
  { code: "gd", name: "Grenada", ru: "Гренада" },
  { code: "ge", name: "Georgia", ru: "Грузия" },
  { code: "gh", name: "Ghana", ru: "Гана" },
  { code: "gm", name: "Gambia", ru: "Гамбия" },
  { code: "gn", name: "Guinea", ru: "Гвинея" },
  { code: "gq", name: "Equatorial Guinea", ru: "Экваториальная Гвинея" },
  { code: "gr", name: "Greece", ru: "Греция" },
  { code: "gt", name: "Guatemala", ru: "Гватемала" },
  { code: "gw", name: "Guinea-Bissau", ru: "Гвинея-Бисау" },
  { code: "gy", name: "Guyana", ru: "Гайана" },
  { code: "hn", name: "Honduras", ru: "Гондурас" },
  { code: "hr", name: "Croatia", ru: "Хорватия" },
  { code: "ht", name: "Haiti", ru: "Гаити" },
  { code: "hu", name: "Hungary", ru: "Венгрия" },
  { code: "id", name: "Indonesia", ru: "Индонезия" },
  { code: "ie", name: "Ireland", ru: "Ирландия" },
  { code: "il", name: "Israel", ru: "Израиль" },
  { code: "in", name: "India", ru: "Индия" },
  { code: "iq", name: "Iraq", ru: "Ирак" },
  { code: "ir", name: "Iran", ru: "Иран" },
  { code: "is", name: "Iceland", ru: "Исландия" },
  { code: "it", name: "Italy", ru: "Италия" },
  { code: "jm", name: "Jamaica", ru: "Ямайка" },
  { code: "jo", name: "Jordan", ru: "Иордания" },
  { code: "jp", name: "Japan", ru: "Япония" },
  { code: "ke", name: "Kenya", ru: "Кения" },
  { code: "kg", name: "Kyrgyzstan", ru: "Кыргызстан" },
  { code: "kh", name: "Cambodia", ru: "Камбоджа" },
  { code: "ki", name: "Kiribati", ru: "Кирибати" },
  { code: "km", name: "Comoros", ru: "Коморы" },
  { code: "kn", name: "Saint Kitts and Nevis", ru: "Сент-Китс и Невис" },
  { code: "kp", name: "North Korea", ru: "Северная Корея" },
  { code: "kr", name: "South Korea", ru: "Южная Корея" },
  { code: "kw", name: "Kuwait", ru: "Кувейт" },
  { code: "kz", name: "Kazakhstan", ru: "Казахстан" },
  { code: "la", name: "Laos", ru: "Лаос" },
  { code: "lb", name: "Lebanon", ru: "Ливан" },
  { code: "lc", name: "Saint Lucia", ru: "Сент-Люсия" },
  { code: "li", name: "Liechtenstein", ru: "Лихтенштейн" },
  { code: "lk", name: "Sri Lanka", ru: "Шри-Ланка" },
  { code: "lr", name: "Liberia", ru: "Либерия" },
  { code: "ls", name: "Lesotho", ru: "Лесото" },
  { code: "lt", name: "Lithuania", ru: "Литва" },
  { code: "lu", name: "Luxembourg", ru: "Люксембург" },
  { code: "lv", name: "Latvia", ru: "Латвия" },
  { code: "ly", name: "Libya", ru: "Ливия" },
  { code: "ma", name: "Morocco", ru: "Марокко" },
  { code: "mc", name: "Monaco", ru: "Монако" },
  { code: "md", name: "Moldova", ru: "Молдова" },
  { code: "me", name: "Montenegro", ru: "Черногория" },
  { code: "mg", name: "Madagascar", ru: "Мадагаскар" },
  { code: "mh", name: "Marshall Islands", ru: "Маршалловы Острова" },
  { code: "mk", name: "North Macedonia", ru: "Северная Македония" },
  { code: "ml", name: "Mali", ru: "Мали" },
  { code: "mm", name: "Myanmar", ru: "Мьянма" },
  { code: "mn", name: "Mongolia", ru: "Монголия" },
  { code: "mr", name: "Mauritania", ru: "Мавритания" },
  { code: "mt", name: "Malta", ru: "Мальта" },
  { code: "mu", name: "Mauritius", ru: "Маврикий" },
  { code: "mv", name: "Maldives", ru: "Мальдивы" },
  { code: "mw", name: "Malawi", ru: "Малави" },
  { code: "mx", name: "Mexico", ru: "Мексика" },
  { code: "my", name: "Malaysia", ru: "Малайзия" },
  { code: "mz", name: "Mozambique", ru: "Мозамбик" },
  { code: "na", name: "Namibia", ru: "Намибия" },
  { code: "ne", name: "Niger", ru: "Нигер" },
  { code: "ng", name: "Nigeria", ru: "Нигерия" },
  { code: "ni", name: "Nicaragua", ru: "Никарагуа" },
  { code: "nl", name: "Netherlands", ru: "Нидерланды" },
  { code: "no", name: "Norway", ru: "Норвегия" },
  { code: "np", name: "Nepal", ru: "Непал" },
  { code: "nr", name: "Nauru", ru: "Науру" },
  { code: "nz", name: "New Zealand", ru: "Новая Зеландия" },
  { code: "om", name: "Oman", ru: "Оман" },
  { code: "pa", name: "Panama", ru: "Панама" },
  { code: "pe", name: "Peru", ru: "Перу" },
  { code: "pg", name: "Papua New Guinea", ru: "Папуа — Новая Гвинея" },
  { code: "ph", name: "Philippines", ru: "Филиппины" },
  { code: "pk", name: "Pakistan", ru: "Пакистан" },
  { code: "pl", name: "Poland", ru: "Польша" },
  { code: "pt", name: "Portugal", ru: "Португалия" },
  { code: "pw", name: "Palau", ru: "Палау" },
  { code: "py", name: "Paraguay", ru: "Парагвай" },
  { code: "qa", name: "Qatar", ru: "Катар" },
  { code: "ro", name: "Romania", ru: "Румыния" },
  { code: "rs", name: "Serbia", ru: "Сербия" },
  { code: "ru", name: "Russia", ru: "Россия" },
  { code: "rw", name: "Rwanda", ru: "Руанда" },
  { code: "sa", name: "Saudi Arabia", ru: "Саудовская Аравия" },
  { code: "sb", name: "Solomon Islands", ru: "Соломоновы Острова" },
  { code: "sc", name: "Seychelles", ru: "Сейшелы" },
  { code: "sd", name: "Sudan", ru: "Судан" },
  { code: "se", name: "Sweden", ru: "Швеция" },
  { code: "sg", name: "Singapore", ru: "Сингапур" },
  { code: "si", name: "Slovenia", ru: "Словения" },
  { code: "sk", name: "Slovakia", ru: "Словакия" },
  { code: "sl", name: "Sierra Leone", ru: "Сьерра-Леоне" },
  { code: "sm", name: "San Marino", ru: "Сан-Марино" },
  { code: "sn", name: "Senegal", ru: "Сенегал" },
  { code: "so", name: "Somalia", ru: "Сомали" },
  { code: "sr", name: "Suriname", ru: "Суринам" },
  { code: "ss", name: "South Sudan", ru: "Южный Судан" },
  { code: "st", name: "São Tomé and Príncipe", ru: "Сан-Томе и Принсипи" },
  { code: "sv", name: "El Salvador", ru: "Сальвадор" },
  { code: "sy", name: "Syria", ru: "Сирия" },
  { code: "sz", name: "Eswatini", ru: "Эсватини" },
  { code: "td", name: "Chad", ru: "Чад" },
  { code: "tg", name: "Togo", ru: "Того" },
  { code: "th", name: "Thailand", ru: "Таиланд" },
  { code: "tj", name: "Tajikistan", ru: "Таджикистан" },
  { code: "tl", name: "Timor-Leste", ru: "Восточный Тимор" },
  { code: "tm", name: "Turkmenistan", ru: "Туркменистан" },
  { code: "tn", name: "Tunisia", ru: "Тунис" },
  { code: "to", name: "Tonga", ru: "Тонга" },
  { code: "tr", name: "Türkiye", ru: "Турция" },
  { code: "tt", name: "Trinidad and Tobago", ru: "Тринидад и Тобаго" },
  { code: "tv", name: "Tuvalu", ru: "Тувалу" },
  { code: "tw", name: "Taiwan", ru: "Тайвань" },
  { code: "tz", name: "Tanzania", ru: "Танзания" },
  { code: "ua", name: "Ukraine", ru: "Украина" },
  { code: "ug", name: "Uganda", ru: "Уганда" },
  { code: "us", name: "United States", ru: "США" },
  { code: "uy", name: "Uruguay", ru: "Уругвай" },
  { code: "uz", name: "Uzbekistan", ru: "Узбекистан" },
  { code: "va", name: "Vatican City", ru: "Ватикан" },
  { code: "vc", name: "Saint Vincent and the Grenadines", ru: "Сент-Винсент и Гренадины" },
  { code: "ve", name: "Venezuela", ru: "Венесуэла" },
  { code: "vn", name: "Vietnam", ru: "Вьетнам" },
  { code: "vu", name: "Vanuatu", ru: "Вануату" },
  { code: "ws", name: "Samoa", ru: "Самоа" },
  { code: "ye", name: "Yemen", ru: "Йемен" },
  { code: "za", name: "South Africa", ru: "ЮАР" },
  { code: "zm", name: "Zambia", ru: "Замбия" },
  { code: "zw", name: "Zimbabwe", ru: "Зимбабве" }
];

const seedInput = document.querySelector("#seedInput");
const specialMessage = document.querySelector("#specialMessage");
const startButton = document.querySelector("#startButton");
const randomSeedButton = document.querySelector("#randomSeedButton");
const copySeedButton = document.querySelector("#copySeedButton");
const showNamesToggle = document.querySelector("#showNamesToggle");
const clearSelectedButton = document.querySelector("#clearSelectedButton");
const grid = document.querySelector("#countryGrid");
const selectedCountry = document.querySelector("#selectedCountry");

let currentSeed = "";
let currentCountries = [];
let eliminatedCodes = new Set();
let chosenCode = null;
let longPressTimer = null;
let longPressTriggered = false;

function xmur3(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i += 1) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }

  return function hash() {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}

function mulberry32(seed) {
  return function random() {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededRandom(seedText) {
  const seed = xmur3(seedText)();
  return mulberry32(seed);
}

function seededShuffle(items, seedText) {
  const random = seededRandom(seedText);
  const result = [...items];

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function flagUrl(country) {
  return `${FLAG_BASE_URL}/${country.code}.png`;
}

function countryTitle(country) {
  return `${country.name} / ${country.ru}`;
}

function makeRandomSeed() {
  const words = ["moon", "coffee", "mango", "piano", "sea", "rabbit", "star", "pixel", "sakura", "date"];
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const randomNumber = Math.floor(100 + Math.random() * 900);
  return `${randomWord}${randomNumber}`;
}

function saveState() {
  if (!currentSeed) return;

  const state = {
    eliminatedCodes: [...eliminatedCodes],
    chosenCode,
    showNames: showNamesToggle.checked
  };

  localStorage.setItem(`flag-board:${currentSeed}`, JSON.stringify(state));
}

function restoreState(seed) {
  eliminatedCodes = new Set();
  chosenCode = null;

  const rawState = localStorage.getItem(`flag-board:${seed}`);
  if (!rawState) return;

  try {
    const state = JSON.parse(rawState);
    eliminatedCodes = new Set(state.eliminatedCodes || []);
    chosenCode = state.chosenCode || null;
    showNamesToggle.checked = Boolean(state.showNames);
    document.body.classList.toggle("show-names", showNamesToggle.checked);
  } catch {
    localStorage.removeItem(`flag-board:${seed}`);
  }
}

function renderSelected() {
  const country = currentCountries.find((item) => item.code === chosenCode);

  if (!country) {
    selectedCountry.className = "selected-empty";
    selectedCountry.textContent = "No country selected yet";
    return;
  }

  selectedCountry.className = "selected-country";
  selectedCountry.innerHTML = `
    <img src="${flagUrl(country)}" alt="${country.name} flag" />
    <div>
      <div>${country.name}</div>
      <span>${country.ru}</span>
    </div>
  `;
}

function markChosen(country) {
  chosenCode = country.code;
  renderGrid();
  renderSelected();
  saveState();
}

function toggleEliminated(country) {
  if (eliminatedCodes.has(country.code)) {
    eliminatedCodes.delete(country.code);
  } else {
    eliminatedCodes.add(country.code);
  }

  renderGrid();
  saveState();
}

function renderGrid() {
  grid.innerHTML = "";

  currentCountries.forEach((country) => {
    const card = document.createElement("article");
    card.className = "country-card";
    card.title = countryTitle(country);

    if (eliminatedCodes.has(country.code)) {
      card.classList.add("eliminated");
    }

    if (country.code === chosenCode) {
      card.classList.add("chosen");
    }

    const flagButton = document.createElement("button");
    flagButton.className = "flag-button";
    flagButton.type = "button";
    flagButton.setAttribute("aria-label", `Toggle ${countryTitle(country)}`);
    flagButton.innerHTML = `
      <img src="${flagUrl(country)}" alt="${country.name} flag" draggable="false" />
      <div class="country-name">${country.name}<br><span>${country.ru}</span></div>
    `;

    const pickButton = document.createElement("button");
    pickButton.className = "pick-button";
    pickButton.type = "button";
    pickButton.textContent = country.code === chosenCode ? "★" : "☆";
    pickButton.setAttribute("aria-label", `Select ${countryTitle(country)} as your secret country`);

    flagButton.addEventListener("click", () => {
      if (longPressTriggered) {
        longPressTriggered = false;
        return;
      }
      toggleEliminated(country);
    });

    flagButton.addEventListener("dblclick", (event) => {
      event.preventDefault();
      markChosen(country);
    });

    flagButton.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      markChosen(country);
    });

    flagButton.addEventListener("touchstart", () => {
      longPressTriggered = false;
      longPressTimer = window.setTimeout(() => {
        longPressTriggered = true;
        markChosen(country);
      }, 520);
    }, { passive: true });

    flagButton.addEventListener("touchend", () => {
      window.clearTimeout(longPressTimer);
    });

    flagButton.addEventListener("touchmove", () => {
      window.clearTimeout(longPressTimer);
    }, { passive: true });

    pickButton.addEventListener("click", (event) => {
      event.stopPropagation();
      markChosen(country);
    });

    card.append(flagButton, pickButton);
    grid.append(card);
  });

  renderSelected();
}

function isAriSeed(seed) {
  const normalized = seed.trim().toLowerCase();

  return [
    "21062006",
    "ari",
    "ари",
    "210606",
    "21.06.06",
    "21/06/06",
    "21-06-06",
    "аружан",
    "aruzhan",
    "arujan"
  ].includes(normalized);
}

function startGame(seed) {
  const cleanSeed = seed.trim() || makeRandomSeed();
  currentSeed = cleanSeed;
  seedInput.value = cleanSeed;
  updateSpecialMessage(cleanSeed);

  currentCountries = seededShuffle(COUNTRIES, cleanSeed).slice(0, GRID_SIZE);
  restoreState(cleanSeed);
  renderGrid();
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.append(toast);

  window.setTimeout(() => toast.classList.add("visible"), 10);
  window.setTimeout(() => {
    toast.classList.remove("visible");
    window.setTimeout(() => toast.remove(), 160);
  }, 1500);
}

function updateSpecialMessage(seed) {
  if (!isAriSeed(seed)) {
    specialMessage.classList.add("hidden");
    specialMessage.innerHTML = "";
    return;
  }

  specialMessage.classList.remove("hidden");

  specialMessage.innerHTML = `
    💛 <strong>Special mode unlocked</strong><br>
    Something cute and familiar detected
  `;
}


startButton.addEventListener("click", () => startGame(seedInput.value));

seedInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startGame(seedInput.value);
  }
});

randomSeedButton.addEventListener("click", () => {
  seedInput.value = makeRandomSeed();
  startGame(seedInput.value);
});

copySeedButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(seedInput.value);
    showToast("Seed copied");
  } catch {
    showToast("Could not copy seed");
  }
});

showNamesToggle.addEventListener("change", () => {
  document.body.classList.toggle("show-names", showNamesToggle.checked);
  saveState();
});

clearSelectedButton.addEventListener("click", () => {
  chosenCode = null;
  renderGrid();
  saveState();
});

startGame(new URLSearchParams(window.location.search).get("seed") || "moon77");
