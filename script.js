const STORAGE_KEY = "mychores-prototype-v1";
const PARENT_PIN = "1234";

const translations = {
  da: {
    brand: "Mine pligter", tagline: "Små pligter. Fede præmier.", home: "Hjem", chores: "Pligter", rewards: "Belønninger", goal: "Opsparingsmål", profile: "Min profil", childMode: "Barn", parentMode: "Forældre", myBank: "MIN BANK", savedPoints: "Dine opsparede point", myGoal: "MIT MÅL", savingGoal: "Opsparingsmål", changeGoal: "Skift mål", yourTasks: "DINE OPGAVER", myChores: "Pligter", somethingToLookForward: "NOGET AT GLÆDE SIG TIL", familyControl: "FAMILIENS KONTROLCENTER", parentIntro: "Godkend og aktivér pligter hurtigt.", activateNeed: "AKTIVÉR ET BEHOV", activationHelp: "Vælg en pligt fra kataloget, når den skal ordnes.", checkWork: "TJEK ARBEJDET", waitingApproval: "Venter på godkendelse", activeNow: "AKTIVE PLIGTER", activeChores: "Aktive pligter", catalogue: "KATALOG", manageCatalogue: "Administrér pligter", manageGoals: "MÅL OG BELØNNINGER", manageRewards: "Administrér", choreName: "Pligt", points: "Point", category: "Kategori", completion: "Sådan er den klaret", saveChore: "Gem pligt", rewardName: "Belønning", cost: "Pointpris", addReward: "Tilføj belønning", goalName: "Mål", goalCost: "Målpoint", goalChild: "Barn", saveGoal: "Gem mål", history: "Historik", confirmReward: "BELØNNING", cancel: "Annuller", confirm: "Bekræft", approve: "Godkend", reject: "Afvis", waiting: "Venter på godkendelse", activate: "Aktivér", active: "Aktiv", edit: "Redigér", delete: "Slet", noWaiting: "Der venter ikke noget lige nu.", noActive: "Ingen aktive pligter.", noTransactions: "Ingen transaktioner endnu.", balance: "Saldo", points: "point", mustBeDone: "Skal være klaret denne uge.", beforeSunday: "Senest søndag.", chooseWhen: "Du bestemmer selv hvornår.", mustDo: "Det her skal ordnes.", ongoing: "Dit faste ansvar derhjemme.", detail: "Se hvad der tæller som klaret", done: "KLARET!", sent: "Sendt til godkendelse", incorrectPin: "Forkert kode.", newChore: "Ny pligt tilføjet.", newReward: "Ny belønning tilføjet.", goalSaved: "Mål gemt.", activated: "Pligt aktiveret.", alreadyActive: "Denne pligt er allerede aktiv.", insufficient: "Du har ikke point nok.", rewardBought: "Belønning købt.", noNeed: "Når opvasken skal bruges igen", beforeEating: "Før vi spiser", beforeBed: "Før du går i seng", cleanResult: "Alle ting skal på plads.", weeklyProgress: "{done} af {total} klaret denne uge", bankEarned: "+{amount} ⭐ GODKENDT!", bankChange: "{before} → {after} point"
  },
  en: {
    brand: "My Chores", tagline: "Small steps. Big wins.", home: "Home", chores: "Chores", rewards: "Rewards", goal: "Savings goal", profile: "My profile", childMode: "Child", parentMode: "Parents", myBank: "MY BANK", savedPoints: "Your saved points", myGoal: "MY GOAL", savingGoal: "Savings goal", changeGoal: "Change goal", yourTasks: "YOUR TASKS", myChores: "Chores", somethingToLookForward: "SOMETHING TO LOOK FORWARD TO", familyControl: "FAMILY CONTROL CENTRE", parentIntro: "Approve and activate chores quickly.", activateNeed: "ACTIVATE A NEED", activationHelp: "Choose a chore from the catalogue when it needs doing.", checkWork: "CHECK THE WORK", waitingApproval: "Waiting for approval", activeNow: "ACTIVE CHORES", activeChores: "Active chores", catalogue: "CATALOGUE", manageCatalogue: "Manage chores", manageGoals: "GOALS AND REWARDS", manageRewards: "Manage", choreName: "Chore", points: "points", category: "Category", completion: "What counts as done", saveChore: "Save chore", rewardName: "Reward", cost: "Point cost", addReward: "Add reward", goalName: "Goal", goalCost: "Goal points", goalChild: "Child", saveGoal: "Save goal", history: "History", confirmReward: "REWARD", cancel: "Cancel", confirm: "Confirm", approve: "Approve", reject: "Reject", waiting: "Waiting for approval", activate: "Activate", active: "Active", edit: "Edit", delete: "Delete", noWaiting: "Nothing is waiting right now.", noActive: "No active chores.", noTransactions: "No transactions yet.", balance: "Balance", mustBeDone: "Needs to be completed this week.", beforeSunday: "By Sunday.", chooseWhen: "You choose when.", mustDo: "This needs doing.", ongoing: "Your regular responsibility at home.", detail: "See what counts as done", done: "DONE!", sent: "Sent for approval", incorrectPin: "Incorrect code.", newChore: "New chore added.", newReward: "New reward added.", goalSaved: "Goal saved.", activated: "Chore activated.", alreadyActive: "This chore is already active.", insufficient: "You do not have enough points.", rewardBought: "Reward bought.", noNeed: "When the dishwasher is needed again", beforeEating: "Before we eat", beforeBed: "Before bed", cleanResult: "Everything is in its place.", weeklyProgress: "{done} of {total} completed this week", bankEarned: "+{amount} ⭐ APPROVED!", bankChange: "{before} → {after} points"
  }
};

translations.da.whoAreYou = "Hvem er du?"; translations.en.whoAreYou = "Who are you?";
translations.da.chooseProfile = "Vælg din profil for at se dine pligter."; translations.en.chooseProfile = "Choose your profile to see your chores.";
translations.da.switchProfile = "Skift profil"; translations.en.switchProfile = "Switch profile";
translations.da.close = "Luk"; translations.en.close = "Close";
translations.da.parentCode = "Forældrekode"; translations.en.parentCode = "Parent code";
translations.da.pinCopy = "Indtast den 4-cifrede kode for at åbne forældremode."; translations.en.pinCopy = "Enter the 4-digit code to open parent mode.";
translations.da.openParent = "Åbn forældremode"; translations.en.openParent = "Open parent mode";
translations.da.yourDay = "DIN DAG"; translations.en.yourDay = "YOUR DAY";
translations.da.whenDone = "Når er den klaret?"; translations.en.whenDone = "What counts as done?";
translations.da.greeting = "Hej"; translations.en.greeting = "Hi";
translations.da.welcome = "Velkommen"; translations.en.welcome = "Welcome";
translations.da.setupIntro = "Først skal vi lige oprette familien."; translations.en.setupIntro = "First, let's set up your family.";
translations.da.getStarted = "Kom i gang"; translations.en.getStarted = "Get started";
translations.da.addChild = "Tilføj et barn"; translations.en.addChild = "Add a child";
translations.da.childName = "Navn"; translations.en.childName = "Name";
translations.da.chooseAvatar = "Vælg en profilfigur"; translations.en.chooseAvatar = "Choose a profile avatar";
translations.da.create = "Opret"; translations.en.create = "Create";
translations.da.family = "FAMILIE"; translations.en.family = "FAMILY";
translations.da.manageFamily = "Familie"; translations.en.manageFamily = "Family";
translations.da.editChild = "Redigér"; translations.en.editChild = "Edit";
translations.da.removeChild = "Fjern"; translations.en.removeChild = "Remove";
translations.da.removeConfirm = "Vil du fjerne {name}?"; translations.en.removeConfirm = "Remove {name}?";
translations.da.removeWarning = "Point, historik, pligter og mål bliver også fjernet."; translations.en.removeWarning = "Their points, history, chores and goal will also be removed.";

const categoryIcons = { Køkken: "🍽️", Værelse: "🧸", Tøj: "👕", Mad: "🍳", Skole: "🎒", Familie: "🤝", Sport: "⚽", Kitchen: "🍽️", Room: "🧸", Clothes: "👕", Food: "🍳", School: "🎒", Family: "🤝", Sports: "⚽" };
const categoryLabels = { Køkken: { da: "Køkken", en: "Kitchen" }, Værelse: { da: "Værelse", en: "Room" }, Tøj: { da: "Tøj", en: "Clothes" }, Mad: { da: "Mad", en: "Food" }, Skole: { da: "Skole", en: "School" }, Familie: { da: "Familie", en: "Family" }, Sport: { da: "Sport", en: "Sports" } };
const defaultCatalogue = [
  { id: "dishwasher-empty", name: { da: "Tøm opvaskemaskinen", en: "Empty the dishwasher" }, points: 10, category: { da: "Køkken", en: "Kitchen" }, completion: { da: "Alle ting skal på plads.", en: "Everything is in its place." }, icon: "🍽️" },
  { id: "dishwasher-fill", name: { da: "Fyld opvaskemaskinen", en: "Load the dishwasher" }, points: 10, category: { da: "Køkken", en: "Kitchen" }, completion: { da: "Alt service står klar i maskinen.", en: "All dishes are loaded and ready." }, icon: "🫧" },
  { id: "trash", name: { da: "Gå ud med skraldet", en: "Take out the trash" }, points: 10, category: { da: "Familie", en: "Family" }, completion: { da: "Ny pose er sat i skraldespanden.", en: "A new bag is in the bin." }, icon: "🗑️" },
  { id: "laundry", name: { da: "Læg dit rene tøj på plads", en: "Put clean clothes away" }, points: 5, category: { da: "Tøj", en: "Clothes" }, completion: { da: "Alt det rene tøj er lagt på plads.", en: "All clean clothes are put away." }, icon: "👕" },
  { id: "table", name: { da: "Dæk bord", en: "Set the table" }, points: 5, category: { da: "Køkken", en: "Kitchen" }, completion: { da: "Der er service og bestik til alle.", en: "There is a place setting for everyone." }, icon: "🥣" },
  { id: "clear-table", name: { da: "Ryd af efter aftensmad", en: "Clear the table after dinner" }, points: 10, category: { da: "Køkken", en: "Kitchen" }, completion: { da: "Bordet er ryddet, og tingene er sat på plads.", en: "The table is clear and things are put away." }, icon: "🍽️" },
  { id: "school-bag", name: { da: "Pak skoletasken", en: "Pack your school bag" }, points: 5, category: { da: "Skole", en: "School" }, completion: { da: "Bøger, penalhus og lektier er i tasken.", en: "Books, pencil case and homework are in the bag." }, icon: "🎒" },
  { id: "sheets", name: { da: "Skift sengetøj", en: "Change your bed linen" }, points: 15, category: { da: "Værelse", en: "Room" }, completion: { da: "Det gamle sengetøj er af, og det rene er på.", en: "The old linen is off and clean linen is on." }, icon: "🛏️" },
  { id: "cook", name: { da: "Lav aftensmad sammen med en voksen", en: "Cook dinner with an adult" }, points: 20, category: { da: "Mad", en: "Food" }, completion: { da: "Maden er lavet sammen og køkkenet er ryddet.", en: "Dinner was made together and the kitchen is tidy." }, icon: "🍳" },
  { id: "room", name: { da: "Ryd op på dit værelse", en: "Tidy your room" }, points: 20, category: { da: "Værelse", en: "Room" }, completion: { da: "Gulvet er frit, tøjet er på plads, og skrivebordet er ryddet.", en: "The floor is clear, clothes are away and the desk is tidy." }, icon: "🧸" }
];
const defaultRewards = [
  { id: "candy", name: { da: "Vælg fredagsslik", en: "Choose Friday candy" }, cost: 50, icon: "🍬" },
  { id: "screen", name: { da: "30 min. ekstra skærmtid", en: "30 minutes extra screen time" }, cost: 100, icon: "🎮" },
  { id: "dinner", name: { da: "Vælg aftensmad", en: "Choose dinner" }, cost: 150, icon: "🍕" },
  { id: "movie", name: { da: "Filmaften", en: "Movie night" }, cost: 250, icon: "🍿" },
  { id: "cinema", name: { da: "Biograftur", en: "Cinema trip" }, cost: 500, icon: "🎬" }
];

const avatarChoices = ["⚽", "🏀", "🎮", "🚀", "🦊", "🐼", "🐯", "🦁", "🦄", "⭐", "⚡", "🔥", "🌈", "🎧", "🛹", "🍀"];
const defaultState = { language: "da", selectedChild: null, mode: "child", catalogue: defaultCatalogue, rewards: defaultRewards, children: [] };

let state;
let toastTimer;
let pendingMode;
let pendingReward;

function t(key, values = {}) { let value = (translations[state.language] || translations.da)[key] || key; Object.entries(values).forEach(([name, replacement]) => { value = value.replace(`{${name}}`, replacement); }); return value; }
function localized(value, language = state?.language || "da") { return typeof value === "object" ? value[language] || value.da || value.en : value; }
function clone(value) { return JSON.parse(JSON.stringify(value)); }
function makeTransaction(amount, type, description) { return { amount, type, description: typeof description === "object" ? description : { da: description, en: description }, timestamp: new Date().toISOString() }; }
function iconFor(category) { return categoryIcons[category] || "✦"; }
function choreName(chore) { return chore.nameData ? localized(chore.nameData) : localized(state.catalogue.find(item => item.id === chore.catalogueId)?.name) || chore.name; }
function categoryText(category) { return localized(categoryLabels[category] || category); }
function deadlineText(chore) { if (chore.period === "weekly") return `${t("mustBeDone")} ${t("beforeSunday")}`; if (chore.catalogueId === "dishwasher-empty" || chore.name === "Tøm opvaskemaskinen") return t("noNeed"); if (chore.catalogueId === "table" || chore.name === "Dæk bord") return t("beforeEating"); if (chore.catalogueId === "school-bag" || chore.name === "Pak skoletasken") return t("beforeBed"); return chore.deadline || t("mustDo"); }
function weekKey(date = new Date()) { const copy = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())); const day = copy.getUTCDay() || 7; copy.setUTCDate(copy.getUTCDate() + 4 - day); const yearStart = new Date(Date.UTC(copy.getUTCFullYear(), 0, 1)); const week = Math.ceil((((copy - yearStart) / 86400000) + 1) / 7); return `${copy.getUTCFullYear()}-${week}`; }

function migrateChore(old, childId) {
  const catalogue = defaultCatalogue.find(item => old.catalogueId === item.id || old.id.includes(item.id.split("-")[0]) || localized(item.name).toLowerCase() === String(old.name).toLowerCase());
  return { id: old.id || `${childId}-${Date.now()}-${Math.random()}`, catalogueId: old.catalogueId || catalogue?.id, name: old.name || localized(catalogue?.name) || "Pligt", points: Number(old.points) || catalogue?.points || 5, category: old.category || localized(catalogue?.category) || "Familie", completion: old.completion || localized(catalogue?.completion) || "Opgaven er helt færdig.", period: old.period || "today", deadline: old.deadline || "Når det passer med behovet", status: old.status === "approved" ? "approved" : old.status || "active", icon: old.icon || catalogue?.icon || iconFor(old.category), createdAt: old.createdAt || new Date().toISOString(), completedAt: old.completedAt };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return clone(defaultState);
    const old = JSON.parse(saved);
    const legacyChildren = Array.isArray(old.children) ? old.children : Object.entries(old.children || {}).map(([id, child]) => ({ ...child, id, avatar: child.avatar || (id === "vega" ? "⭐" : "⚡") }));
    const next = { ...clone(defaultState), ...old, children: legacyChildren, language: old.language || localStorage.getItem("mychores-language") || "da", catalogue: old.catalogue?.length ? old.catalogue : clone(defaultCatalogue), rewards: old.rewards?.length ? old.rewards : clone(defaultRewards) };
    next.selectedChild = next.children.some(child => child.id === old.selectedChild) ? old.selectedChild : next.children[0]?.id || null;
    next.children.forEach((child, index) => {
      child.id = child.id || `child-${Date.now()}-${index}`;
      child.avatar = child.avatar || avatarChoices[index % avatarChoices.length];
      child.bank = Number.isFinite(child.bank) ? child.bank : Number(child.points) || 0;
      child.goal = child.goal || { name: { da: "Mit mål", en: "My goal" }, cost: 1000, icon: "🎯" };
      child.transactions = Array.isArray(child.transactions) ? child.transactions : [];
      child.chores = (child.chores || []).map(chore => migrateChore(chore, child.id));
    });
    const currentWeek = weekKey();
    if (next.weekKey && next.weekKey !== currentWeek) next.children.forEach(child => child.chores.forEach(chore => { if (chore.period === "weekly" && chore.status === "approved") { chore.status = "active"; chore.completedAt = null; } }));
    next.weekKey = currentWeek;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    return next;
  } catch (error) { return clone(defaultState); }
}

state = loadState();
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); localStorage.setItem("mychores-language", state.language); }
function currentChild() { return state.children.find(child => child.id === state.selectedChild); }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character])); }
function showToast(message) { const toast = document.querySelector("#toast"); toast.className = "toast show"; toast.textContent = message; clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.className = "toast", 2600); }
function showCelebration() { const toast = document.querySelector("#toast"); toast.className = "toast celebration show"; toast.innerHTML = `<span class="confetti">✦ · ✧ · ✦</span><b>🎉 ${t("done")}</b><small>${t("sent")}</small>`; clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.className = "toast"; toast.textContent = ""; }, 1100); }
function openProfileGate() { document.querySelector("#profile-gate").classList.add("visible"); }
function closeProfileGate() { document.querySelector("#profile-gate").classList.remove("visible"); sessionStorage.setItem("mychores-profile-selected", "true"); }
function hasFamily() { return state.children.length > 0; }

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.title = `${t("brand")} | ${t("tagline")}`;
  document.querySelector("#brand-name").textContent = t("brand");
  document.querySelector("#tagline").textContent = t("tagline");
  document.querySelector("#greeting-label").textContent = t("greeting");
  document.querySelectorAll("[data-i18n]").forEach(element => { const control = element.querySelector("input, select, textarea"); if (control) { const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()); if (textNode) textNode.textContent = `${t(element.dataset.i18n)}`; } else element.textContent = t(element.dataset.i18n); });
  document.querySelector("#profile-gate-title").textContent = t("whoAreYou");
  document.querySelector("#profile-gate-title").nextElementSibling.textContent = t("chooseProfile");
  document.querySelector(".profile-return").textContent = `⇄ ${t("switchProfile")}`;
  document.querySelectorAll(".dialog-close").forEach(button => button.setAttribute("aria-label", t("close")));
  document.querySelector("#pin-dialog h2").textContent = t("parentCode");
  document.querySelector("#pin-dialog p").textContent = t("pinCopy");
  document.querySelector("#pin-form button").textContent = t("openParent");
  document.querySelector(".profile-row .eyebrow").textContent = t("yourDay");
  document.querySelector("#dialog-category").textContent = t("chores");
  document.querySelector(".dialog-rule b").textContent = t("whenDone");
  const placeholders = { name: state.language === "da" ? "fx Fodr katten" : "e.g. Feed the cat", points: "10", completion: state.language === "da" ? "Beskriv det færdige resultat" : "Describe the finished result" };
  Object.entries(placeholders).forEach(([name, value]) => { const input = document.querySelector(`#chore-form [name="${name}"]`); if (input) input.placeholder = value; });
  document.querySelector("#language-select").value = state.language;
  const categoryOptions = { Køkken: { da: "Køkken", en: "Kitchen" }, Værelse: { da: "Værelse", en: "Room" }, Tøj: { da: "Tøj", en: "Clothes" }, Mad: { da: "Mad", en: "Food" }, Skole: { da: "Skole", en: "School" }, Familie: { da: "Familie", en: "Family" }, Sport: { da: "Sport", en: "Sports" } };
  document.querySelectorAll("#chore-form select[name='category'] option").forEach(option => { option.textContent = localized(categoryOptions[option.value] || option.value); });
  const periodLabels = { today: { da: "Skal ordnes", en: "Needs doing" }, weekly: { da: "Denne uge", en: "This week" }, responsibility: { da: "Mit ansvar", en: "My responsibility" } };
  document.querySelectorAll("#chore-form select[name='period'] option").forEach(option => { option.textContent = localized(periodLabels[option.value]); });
}

function render() {
  applyTranslations();
  renderProfiles();
  if (!hasFamily()) { document.querySelector(".child-view").classList.add("hidden"); document.querySelector(".parent-view").classList.add("hidden"); openSetup(); return; }
  closeSetup();
  document.querySelector(".child-view").classList.toggle("hidden", state.mode !== "child");
  document.querySelector(".parent-view").classList.toggle("hidden", state.mode !== "parent");
  document.querySelectorAll(".mode-button").forEach(button => button.classList.toggle("active", button.dataset.mode === state.mode));
  if (state.mode === "child") renderChildView(); else renderParentView();
}

const groups = [
  { key: "today", label: { da: "SKAL ORDNES", en: "NEEDS DOING" }, title: { da: "Skal ordnes", en: "Needs doing" }, hint: { da: "Det her skal ordnes.", en: "This needs doing." } },
  { key: "weekly", label: { da: "DENNE UGE", en: "THIS WEEK" }, title: { da: "Denne uge", en: "This week" }, hint: { da: "Skal være klaret denne uge. Du bestemmer selv hvornår.", en: "Needs to be completed this week. You choose when." } },
  { key: "responsibility", label: { da: "MIT ANSVAR", en: "MY RESPONSIBILITY" }, title: { da: "Mit ansvar", en: "My responsibility" }, hint: { da: "Dit faste ansvar derhjemme.", en: "Your regular responsibility at home." } }
];

function renderChoreCard(chore) {
  const pending = chore.status === "pending";
  return `<article class="chore-item ${pending ? "pending-item" : ""}" data-detail="${chore.id}"><span class="chore-icon">${chore.icon || iconFor(chore.category)}</span><div class="chore-copy"><span class="chore-category">${escapeHtml(categoryText(chore.category))}</span><p class="chore-name">${escapeHtml(choreName(chore))}</p><span class="chore-points">+${chore.points} ${t("points")}</span><p class="chore-deadline">${escapeHtml(deadlineText(chore))}</p><button class="detail-link" data-detail="${chore.id}" type="button">${t("detail")}</button></div>${pending ? `<span class="pending-label">${t("waiting")}</span>` : `<button class="done-button" data-chore="${chore.id}" type="button">${t("done")}</button>`}</article>`;
}

function renderChoreGroups(child) {
  return groups.map(group => {
    const chores = child.chores.filter(chore => chore.status !== "approved" && (chore.period || "today") === group.key);
    const weekly = group.key === "weekly" ? child.chores.filter(chore => chore.period === "weekly") : [];
    const done = weekly.filter(chore => chore.status === "approved").length;
    return `<section class="chore-group"><div class="chore-group-heading"><div><span class="section-label">${localized(group.label)}</span><h3>${localized(group.title)}</h3><p>${localized(group.hint)}</p></div>${group.key === "weekly" ? `<span class="group-progress">${t("weeklyProgress", { done, total: weekly.length })}</span>` : ""}</div><div class="chore-list">${chores.length ? chores.map(renderChoreCard).join("") : `<div class="empty-state">${t("noActive")}</div>`}</div></section>`;
  }).join("");
}

function renderChildView() {
  const child = currentChild();
  const active = child.chores.filter(chore => chore.status !== "approved");
  document.querySelector("#greeting-name").textContent = child.name;
  document.querySelector("#header-avatar").textContent = child.avatar;
  document.querySelector("#points-total").textContent = child.bank.toLocaleString(state.language === "da" ? "da-DK" : "en-US");
  document.querySelector(".points-unit").textContent = t("points");
  document.querySelector("#chore-count").textContent = `${active.filter(chore => chore.status === "active").length} ${state.language === "da" ? "tilbage" : "left"}`;
  const goal = child.goal;
  const goalName = localized(goal.name);
  const percent = Math.min(100, Math.round(child.bank / goal.cost * 100));
  document.querySelector("#goal-content").innerHTML = `<div class="goal-main"><div class="goal-emoji">${goal.icon}</div><div><p class="goal-title">${escapeHtml(goalName)}</p><p class="goal-score">${child.bank.toLocaleString(state.language === "da" ? "da-DK" : "en-US")} / ${goal.cost.toLocaleString(state.language === "da" ? "da-DK" : "en-US")} ${t("points")}</p><p class="goal-percent">${percent}%</p><p class="goal-remaining">${Math.max(0, goal.cost - child.bank).toLocaleString()} ${t("points")} ${state.language === "da" ? "tilbage" : "left"}</p></div></div><div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>`;
  document.querySelector("#chore-list").innerHTML = renderChoreGroups(child);
  document.querySelector("#reward-grid").innerHTML = state.rewards.map(reward => { const name = localized(reward.name); const canAfford = child.bank >= reward.cost; return `<article class="reward-card"><span class="reward-emoji">${reward.icon || "🎁"}</span><span class="reward-name">${escapeHtml(name)}</span><span class="reward-cost">${reward.cost} ${t("points")}</span><button class="reward-action ${canAfford ? "can-afford" : ""}" data-reward="${reward.id}" type="button">${canAfford ? (state.language === "da" ? "Køb" : "Buy") : t("insufficient")}</button></article>`; }).join("");
}

function renderParentView() {
  const approvals = state.children.flatMap(child => child.chores.filter(chore => chore.status === "pending").map(chore => ({ ...chore, childId: child.id, childName: child.name })));
  document.querySelector("#approval-count").textContent = `${approvals.length} ${state.language === "da" ? "venter" : "waiting"}`;
  document.querySelector("#activation-child-label").textContent = currentChild().name;
  document.querySelector("#parent-child-switch").innerHTML = state.children.map(child => `<button class="parent-child ${child.id === state.selectedChild ? "active" : ""}" data-child="${child.id}" type="button">${escapeHtml(child.name)}</button>`).join("");
  document.querySelector("#approval-list").innerHTML = approvals.length ? approvals.map(item => `<article class="approval-item"><span class="chore-icon">${item.icon || "✦"}</span><div class="chore-copy"><p class="chore-name">${escapeHtml(choreName(item))}</p><span class="approval-child">${item.childName} · +${item.points} ${t("points")}</span></div><div class="approval-actions"><button class="approve-button" data-approval="approve" data-child="${item.childId}" data-chore="${item.id}" type="button">${t("approve")}</button><button class="reject-button" data-approval="reject" data-child="${item.childId}" data-chore="${item.id}" type="button">${t("reject")}</button></div></article>`).join("") : `<div class="empty-state">${t("noWaiting")}</div>`;
  const active = currentChild().chores.filter(chore => chore.status === "active");
  document.querySelector("#active-parent-list").innerHTML = active.length ? active.map(chore => `<div class="active-parent-item"><span>${chore.icon || "✦"}</span><div><b>${escapeHtml(choreName(chore))}</b><small>${currentChild().name} · +${chore.points} ${t("points")}</small></div></div>`).join("") : `<div class="empty-state">${t("noActive")}</div>`;
  renderCatalogue();
  document.querySelector("#goal-child-select").innerHTML = state.children.map(child => `<option value="${child.id}">${escapeHtml(child.name)}</option>`).join("");
  document.querySelector("#family-list").innerHTML = state.children.map(child => `<div class="family-row"><span class="family-avatar">${child.avatar}</span><div><b>${escapeHtml(child.name)}</b><small>${child.bank} ${t("points")}</small></div><button class="catalogue-edit" data-edit-child="${child.id}" type="button">${t("editChild")}</button><button class="catalogue-delete" data-remove-child="${child.id}" type="button">×</button></div>`).join("");
}

function renderProfiles() { document.querySelector("#gate-profiles").innerHTML = state.children.map(child => `<button class="gate-profile" data-profile="${child.id}" type="button"><span class="avatar">${child.avatar}</span><b>${escapeHtml(child.name)}</b></button>`).join(""); }
function openSetup() { document.querySelector("#setup-gate").classList.add("visible"); }
function closeSetup() { document.querySelector("#setup-gate").classList.remove("visible"); }
function openChildForm(childId = "") { const form = document.querySelector("#child-form"); form.dataset.editChild = childId; const child = state.children.find(item => item.id === childId); form.name.value = child?.name || ""; document.querySelector("#avatar-picker").innerHTML = avatarChoices.map(avatar => `<button class="avatar-choice ${avatar === (child?.avatar || avatarChoices[0]) ? "selected" : ""}" data-avatar="${avatar}" type="button">${avatar}</button>`).join(""); document.querySelector("#child-form-dialog").showModal(); }
function createChild(event) { event.preventDefault(); const form = event.currentTarget; const name = new FormData(form).get("name").trim(); const avatar = form.querySelector(".avatar-choice.selected")?.dataset.avatar || avatarChoices[0]; if (!name) return; const editing = Boolean(form.dataset.editChild); if (editing) { const child = state.children.find(item => item.id === form.dataset.editChild); child.name = name; child.avatar = avatar; } else { const id = `child-${crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`}`; state.children.push({ id, name, avatar, bank: 0, goal: { name: { da: "Mit mål", en: "My goal" }, cost: 1000, icon: "🎯" }, chores: [], transactions: [] }); state.selectedChild = id; } form.reset(); form.dataset.editChild = ""; document.querySelector("#child-form-dialog").close(); saveState(); if (!editing && state.children.length === 1) { document.querySelector(".setup-card").innerHTML = `<span class="brand-mark">${avatar}</span><h2>${escapeHtml(name)} ${state.language === "da" ? "er klar!" : "is ready!"}</h2><button class="primary-button" data-add-child type="button">${t("addChild")}</button><button class="profile-return" data-ready type="button">${state.language === "da" ? "Vi er klar" : "We're ready"}</button>`; openSetup(); } else { closeSetup(); render(); closeProfileGate(); showToast(`${name} ${state.language === "da" ? "er klar!" : "is ready!"}`); } }
function removeChild(id) { const child = state.children.find(item => item.id === id); if (!child) return; if (!window.confirm(`${t("removeConfirm", { name: child.name })}\n${t("removeWarning")}`)) return; state.children = state.children.filter(item => item.id !== id); state.selectedChild = state.children[0]?.id || null; saveState(); render(); if (!state.children.length) openSetup(); }

function renderCatalogue() {
  const quick = document.querySelector("#catalogue-quick-list");
  const list = document.querySelector("#catalogue-list");
  const catalogue = state.catalogue;
  quick.innerHTML = catalogue.map(item => `<button class="quick-catalogue-item" data-activate="${item.id}" type="button"><span>${item.icon || iconFor(localized(item.category))}</span><span><b>${escapeHtml(localized(item.name))}</b><small>+${item.points} ${t("points")}</small></span><strong>＋</strong></button>`).join("");
  list.innerHTML = catalogue.map(item => `<div class="catalogue-row"><span class="catalogue-icon">${item.icon || "✦"}</span><div><b>${escapeHtml(localized(item.name))}</b><small>${item.points} ${t("points")} · ${escapeHtml(localized(item.category))}</small></div><button class="catalogue-edit" data-edit-catalogue="${item.id}" type="button">${t("edit")}</button><button class="catalogue-delete" data-delete-catalogue="${item.id}" type="button">×</button></div>`).join("");
}

function addTransaction(child, amount, type, description) { child.transactions.unshift(makeTransaction(amount, type, description)); }
function completeChore(choreId) { const chore = currentChild().chores.find(item => item.id === choreId); if (!chore || chore.status !== "active") return; chore.status = "pending"; chore.completedAt = new Date().toISOString(); saveState(); render(); showCelebration(); }
function handleApproval(data) { const child = state.children.find(item => item.id === data.child); const chore = child?.chores.find(item => item.id === data.chore); if (!child || !chore) return; if (data.approval === "approve") { const before = child.bank; chore.status = "approved"; child.bank += chore.points; const catalogueItem = state.catalogue.find(item => item.id === chore.catalogueId); addTransaction(child, chore.points, "earned", catalogueItem?.name || { da: chore.name, en: chore.name }); sessionStorage.setItem("mychores-approval-feedback", JSON.stringify({ childId: data.child, earned: chore.points, before, after: child.bank })); showToast(`${child.name} +${chore.points} ${t("points")}`); } else { chore.status = "active"; showToast(t("reject")); } saveState(); render(); }
function activateChore(catalogueId) { const item = state.catalogue.find(chore => chore.id === catalogueId); const child = currentChild(); if (!item) return; if (child.chores.some(chore => chore.catalogueId === catalogueId && chore.status === "active")) { showToast(t("alreadyActive")); return; } child.chores.push({ id: `${catalogueId}-${Date.now()}`, catalogueId, name: localized(item.name), nameData: item.name, points: item.points, category: localized(item.category), completion: localized(item.completion), period: catalogueId === "room" || catalogueId === "sheets" ? "weekly" : "today", deadline: catalogueId === "room" || catalogueId === "sheets" ? "Senest søndag" : t("mustDo"), status: "active", icon: item.icon, createdAt: new Date().toISOString() }); saveState(); render(); showToast(t("activated")); }
function openBank() { const child = currentChild(); document.querySelector("#transaction-list").innerHTML = child.transactions.length ? child.transactions.map(item => `<div class="transaction-row"><b class="${item.amount >= 0 ? "earned" : "spent"}">${item.amount >= 0 ? "+" : ""}${item.amount}</b><span>${escapeHtml(localized(item.description))}</span><small>${new Date(item.timestamp).toLocaleDateString(state.language === "da" ? "da-DK" : "en-US")}</small></div>`).join("") : `<div class="empty-state">${t("noTransactions")}</div>`; document.querySelector("#history-balance").textContent = `${t("balance")}: ${child.bank} ${t("points")}`; document.querySelector("#bank-dialog").showModal(); }
function buyReward(rewardId) { const reward = state.rewards.find(item => item.id === rewardId); if (!reward || currentChild().bank < reward.cost) { showToast(t("insufficient")); return; } pendingReward = reward; document.querySelector("#reward-dialog-name").textContent = localized(reward.name); document.querySelector("#reward-dialog-copy").textContent = `${reward.cost} ${t("points")} ${state.language === "da" ? "trækkes fra din bank." : "will be taken from your bank."}`; document.querySelector("#reward-dialog").showModal(); }
function confirmReward() { const child = currentChild(); if (!pendingReward || child.bank < pendingReward.cost) return; child.bank -= pendingReward.cost; addTransaction(child, -pendingReward.cost, "spent", pendingReward.name); document.querySelector("#reward-dialog").close(); showToast(t("rewardBought")); pendingReward = null; saveState(); render(); }
function saveCatalogueChore(event) { event.preventDefault(); const data = new FormData(event.currentTarget); const id = data.get("catalogueId") || `catalogue-${Date.now()}`; const item = { id, name: { da: data.get("name"), en: data.get("name") }, points: Number(data.get("points")), category: { da: data.get("category"), en: data.get("category") }, completion: { da: data.get("completion"), en: data.get("completion") }, icon: iconFor(data.get("category")) }; const index = state.catalogue.findIndex(chore => chore.id === id); if (index >= 0) state.catalogue[index] = item; else state.catalogue.push(item); event.currentTarget.reset(); event.currentTarget.catalogueId.value = ""; saveState(); render(); showToast(t("newChore")); }
function editCatalogue(id) { const item = state.catalogue.find(chore => chore.id === id); if (!item) return; const form = document.querySelector("#chore-form"); form.catalogueId.value = item.id; form.name.value = localized(item.name); form.points.value = item.points; form.category.value = localized(item.category); form.completion.value = localized(item.completion); form.scrollIntoView({ behavior: "smooth", block: "center" }); }
function deleteCatalogue(id) { state.catalogue = state.catalogue.filter(item => item.id !== id); saveState(); render(); }
function addReward(event) { event.preventDefault(); const data = new FormData(event.currentTarget); state.rewards.push({ id: `reward-${Date.now()}`, name: { da: data.get("name"), en: data.get("name") }, cost: Number(data.get("cost")), icon: "🎁" }); event.currentTarget.reset(); saveState(); render(); showToast(t("newReward")); }
function saveGoal(event) { event.preventDefault(); const data = new FormData(event.currentTarget); const child = state.children.find(item => item.id === data.get("child")); if (!child) return; child.goal = { name: { da: data.get("name"), en: data.get("name") }, cost: Number(data.get("cost")), icon: child.goal?.icon || "🎯" }; saveState(); render(); showToast(t("goalSaved")); }

function handleClick(event) {
  const target = event.target.closest("button");
  const card = event.target.closest("[data-detail]");
  if (!target && !card) return;
  if (target?.dataset.mode) { if (target.dataset.mode === "parent" && sessionStorage.getItem("mychores-parent-unlocked") !== "true") { pendingMode = target.dataset.mode; document.querySelector("#pin-dialog").showModal(); document.querySelector("#pin-input").focus(); return; } state.mode = target.dataset.mode; saveState(); render(); return; }
  if (target?.dataset.approval) { handleApproval(target.dataset); return; }
  if (target?.hasAttribute("data-profile-reset")) { sessionStorage.removeItem("mychores-profile-selected"); state.mode = "child"; saveState(); render(); openProfileGate(); return; }
  if (target?.hasAttribute("data-dialog-close")) { target.closest("dialog").close(); return; }
  if (target?.dataset.profile) { state.selectedChild = target.dataset.profile; saveState(); closeProfileGate(); render(); return; }
  if (target?.hasAttribute("data-start-setup")) { openChildForm(); return; }
  if (target?.hasAttribute("data-ready")) { closeSetup(); sessionStorage.setItem("mychores-profile-selected", "true"); render(); return; }
  if (target?.hasAttribute("data-add-child")) { openChildForm(); return; }
  if (target?.dataset.avatar) { document.querySelectorAll(".avatar-choice").forEach(button => button.classList.toggle("selected", button.dataset.avatar === target.dataset.avatar)); return; }
  if (target?.dataset.editChild) { openChildForm(target.dataset.editChild); return; }
  if (target?.dataset.removeChild) { removeChild(target.dataset.removeChild); return; }
  if (target?.dataset.child) { state.selectedChild = target.dataset.child; saveState(); render(); return; }
  if (target?.dataset.activate) { activateChore(target.dataset.activate); return; }
  if (target?.dataset.editCatalogue) { editCatalogue(target.dataset.editCatalogue); return; }
  if (target?.dataset.deleteCatalogue) { deleteCatalogue(target.dataset.deleteCatalogue); return; }
  if (target?.dataset.scroll) { document.querySelector(`#${target.dataset.scroll}`).scrollIntoView({ behavior: "smooth" }); return; }
  if (target?.dataset.chore) { completeChore(target.dataset.chore); return; }
  if (target?.dataset.reward) { buyReward(target.dataset.reward); return; }
  if (target?.id === "bank-card") { openBank(); return; }
  if (target?.id === "confirm-reward") { confirmReward(); return; }
  if (card) { const chore = currentChild().chores.find(item => item.id === card.dataset.detail); if (chore && chore.status === "active") { document.querySelector("#dialog-title").textContent = chore.name; document.querySelector("#dialog-deadline").textContent = deadlineText(chore); document.querySelector("#dialog-completion").textContent = chore.completion; document.querySelector("#chore-dialog").showModal(); } }
}

document.addEventListener("click", handleClick);
document.querySelector("#chore-form").addEventListener("submit", saveCatalogueChore);
document.querySelector("#reward-form").addEventListener("submit", addReward);
document.querySelector("#goal-form").addEventListener("submit", saveGoal);
document.querySelector("#child-form").addEventListener("submit", createChild);
document.querySelector("#confirm-reward").addEventListener("click", confirmReward);
document.querySelector("#pin-form").addEventListener("submit", event => { event.preventDefault(); const input = document.querySelector("#pin-input"); if (input.value !== PARENT_PIN) { input.value = ""; showToast(t("incorrectPin")); return; } sessionStorage.setItem("mychores-parent-unlocked", "true"); document.querySelector("#pin-dialog").close(); state.mode = pendingMode || "parent"; pendingMode = null; saveState(); render(); });
document.querySelector("#language-select").addEventListener("change", event => { state.language = event.target.value; saveState(); render(); });
render();
if (hasFamily() && sessionStorage.getItem("mychores-profile-selected") !== "true") openProfileGate();