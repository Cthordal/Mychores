const STORAGE_KEY = "mychores-prototype-v1";

// ===== Supabase cloud sync configuration (foundation only, not yet used) =====
// TODO: paste your real Supabase project values below.
const SUPABASE_URL = "https://ngzuykbvqzlbdgfgzkmu.supabase.co"; // e.g. "https://xxxxxxxx.supabase.co"
const SUPABASE_ANON_KEY = "sb_publishable_cl35ZOkZkEX8kJXBPBcCbQ_XJBm7BaT"; // Supabase project "anon" public API key

// Supabase client is only created if the placeholders above have been filled in,
// so the app keeps working normally (via localStorage) when Supabase isn't configured.
let supabaseClient = null;
if (typeof window !== "undefined" && window.supabase && SUPABASE_URL !== "YOUR_SUPABASE_URL" && SUPABASE_ANON_KEY !== "YOUR_SUPABASE_ANON_KEY") {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Signs in an existing family user with email + password. Returns { data, error }.
async function supabaseSignIn(email, password) {
  if (!supabaseClient) return { data: null, error: new Error("Supabase is not configured.") };
  return supabaseClient.auth.signInWithPassword({ email, password });
}

// Returns the current authenticated Supabase user, or null if signed out / not configured.
async function supabaseGetUser() {
  if (!supabaseClient) return null;
  const { data } = await supabaseClient.auth.getUser();
  return data?.user || null;
}

// Signs out the current Supabase user, if any.
async function supabaseSignOut() {
  if (!supabaseClient) return { error: new Error("Supabase is not configured.") };
  return supabaseClient.auth.signOut();
}

// TEMPORARY dev-only connection test — call window.testSupabaseConnection(email, password) from the browser console.
async function testSupabaseConnection(email, password) {
  const { data, error } = await supabaseSignIn(email, password);
  if (error) { console.error("Supabase connection test failed:", error); return { data, error }; }
  const user = await supabaseGetUser();
  console.log("Supabase connection test succeeded. User email:", user?.email, "User id:", user?.id);
  return { data, error, user };
}
window.testSupabaseConnection = testSupabaseConnection;

// TEMPORARY dev-only manual upload — call window.uploadCurrentStateToSupabase() from the browser console.
async function uploadCurrentStateToSupabase() {
  if (!supabaseClient) { console.error("Supabase upload failed: Supabase is not configured."); return { data: null, error: new Error("Supabase is not configured.") }; }
  const user = await supabaseGetUser();
  if (!user) { console.error("Supabase upload failed: no authenticated user."); return { data: null, error: new Error("No authenticated user.") }; }
  const { data: existing, error: fetchError } = await supabaseClient.from("families").select("id").eq("id", 1).eq("owner_id", user.id).maybeSingle();
  if (fetchError) { console.error("Supabase upload failed while checking existing row:", fetchError); return { data: null, error: fetchError }; }
  if (!existing) { console.error("Supabase upload failed: no matching family row found for id=1 and this user."); return { data: null, error: new Error("Family row not found.") }; }
  const { data, error } = await supabaseClient.from("families").update({ data: state }).eq("id", 1).eq("owner_id", user.id).select();
  if (error) { console.error("Supabase upload failed:", error); return { data: null, error }; }
  console.log("Supabase upload succeeded. Family row id=1 data column updated.");
  return { data, error: null };
}
window.uploadCurrentStateToSupabase = uploadCurrentStateToSupabase;
// ===== End Supabase cloud sync configuration =====

const translations = {
  da: {
    brand: "Mine pligter", tagline: "Små pligter. Fede præmier.", home: "Hjem", chores: "Pligter", rewards: "Præmier", goal: "Opsparingsmål", profile: "Min profil", childMode: "Barn", parentMode: "Forældre", myBank: "MIN BANK", savedPoints: "Dine opsparede point", myGoal: "MIT MÅL", savingGoal: "Opsparingsmål", changeGoal: "Skift mål", yourTasks: "DINE OPGAVER", myChores: "Pligter", somethingToLookForward: "NOGET AT GLÆDE SIG TIL", familyControl: "FAMILIENS KONTROLCENTER", parentIntro: "Godkend og aktivér pligter hurtigt.", activateNeed: "AKTIVÉR ET BEHOV", activationHelp: "Vælg en pligt fra kataloget, når den skal ordnes.", checkWork: "TJEK ARBEJDET", waitingApproval: "Venter på godkendelse", activeNow: "AKTIVE PLIGTER", activeChores: "Aktive pligter", catalogue: "KATALOG", manageCatalogue: "Administrér pligter", manageGoals: "MÅL OG PRÆMIER", manageRewards: "Administrér præmier", choreName: "Pligt", points: "Point", category: "Kategori", completion: "Sådan er den klaret", saveChore: "Gem pligt", rewardName: "Præmie", cost: "Pointpris", addReward: "Tilføj præmie", goalName: "Mål", goalCost: "Målpoint", goalChild: "Barn", saveGoal: "Gem mål", history: "Historik", confirmReward: "PRÆMIE", cancel: "Annuller", confirm: "Bekræft", approve: "Godkend", reject: "Afvis", waiting: "Venter på godkendelse", activate: "Aktivér", active: "Aktiv", edit: "Redigér", delete: "Slet", noWaiting: "Der venter ikke noget lige nu.", noActive: "Ingen aktive pligter.", noTransactions: "Ingen transaktioner endnu.", balance: "Saldo", points: "point", mustBeDone: "Skal være klaret denne uge.", beforeSunday: "Senest søndag.", chooseWhen: "Du bestemmer selv hvornår.", mustDo: "Det her skal ordnes.", ongoing: "Dit faste ansvar derhjemme.", detail: "Se hvad der tæller som klaret", done: "KLARET!", sent: "Sendt til godkendelse", incorrectPin: "Forkert kode.", newChore: "Ny pligt tilføjet.", newReward: "Ny præmie tilføjet.", goalSaved: "Mål gemt.", activated: "Pligt aktiveret.", alreadyActive: "Denne pligt er allerede aktiv.", insufficient: "Du har ikke point nok.", rewardBought: "Præmie købt.", noNeed: "Når opvasken skal bruges igen", beforeEating: "Før vi spiser", beforeBed: "Før du går i seng", cleanResult: "Alle ting skal på plads.", weeklyProgress: "{done} af {total} klaret denne uge", bankEarned: "+{amount} ⭐ GODKENDT!", bankChange: "{before} → {after} point", removeChore: "Fjern pligt", removeChoreTitle: "Fjern pligten?", removeChoreCopy: "Den fjernes fra {name}s pligter og giver ingen point.", remove: "Fjern"
  },
  en: {
    brand: "My Chores", tagline: "Small steps. Big wins.", home: "Home", chores: "Chores", rewards: "Rewards", goal: "Savings goal", profile: "My profile", childMode: "Child", parentMode: "Parents", myBank: "MY BANK", savedPoints: "Your saved points", myGoal: "MY GOAL", savingGoal: "Savings goal", changeGoal: "Change goal", yourTasks: "YOUR TASKS", myChores: "Chores", somethingToLookForward: "SOMETHING TO LOOK FORWARD TO", familyControl: "FAMILY CONTROL CENTRE", parentIntro: "Approve and activate chores quickly.", activateNeed: "ACTIVATE A NEED", activationHelp: "Choose a chore from the catalogue when it needs doing.", checkWork: "CHECK THE WORK", waitingApproval: "Waiting for approval", activeNow: "ACTIVE CHORES", activeChores: "Active chores", catalogue: "CATALOGUE", manageCatalogue: "Manage chores", manageGoals: "GOALS AND REWARDS", manageRewards: "Manage rewards", choreName: "Chore", points: "points", category: "Category", completion: "What counts as done", saveChore: "Save chore", rewardName: "Reward", cost: "Point cost", addReward: "Add reward", goalName: "Goal", goalCost: "Goal points", goalChild: "Child", saveGoal: "Save goal", history: "History", confirmReward: "REWARD", cancel: "Cancel", confirm: "Confirm", approve: "Approve", reject: "Reject", waiting: "Waiting for approval", activate: "Activate", active: "Active", edit: "Edit", delete: "Delete", noWaiting: "Nothing is waiting right now.", noActive: "No active chores.", noTransactions: "No transactions yet.", balance: "Balance", mustBeDone: "Needs to be completed this week.", beforeSunday: "By Sunday.", chooseWhen: "You choose when.", mustDo: "This needs doing.", ongoing: "Your regular responsibility at home.", detail: "See what counts as done", done: "DONE!", sent: "Sent for approval", incorrectPin: "Incorrect code.", newChore: "New chore added.", newReward: "New reward added.", goalSaved: "Goal saved.", activated: "Chore activated.", alreadyActive: "This chore is already active.", insufficient: "You do not have enough points.", rewardBought: "Reward bought.", noNeed: "When the dishwasher is needed again", beforeEating: "Before we eat", beforeBed: "Before bed", cleanResult: "Everything is in its place.", weeklyProgress: "{done} of {total} completed this week", bankEarned: "+{amount} ⭐ APPROVED!", bankChange: "{before} → {after} points", removeChore: "Remove chore", removeChoreTitle: "Remove chore?", removeChoreCopy: "It will be removed from {name}'s chores and no points will be awarded.", remove: "Remove"
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
translations.da.createParentPin = "Opret forældrekode"; translations.en.createParentPin = "Create parent PIN";
translations.da.createParentPinCopy = "Vælg en 4-cifret kode til Forældre."; translations.en.createParentPinCopy = "Choose a 4-digit PIN for Parent Mode.";
translations.da.enterPin = "Enter PIN:"; translations.en.enterPin = "Enter PIN:";
translations.da.confirmPin = "Bekræft PIN:"; translations.en.confirmPin = "Confirm PIN:";
translations.da.createPin = "Opret kode"; translations.en.createPin = "Create PIN";
translations.da.openParent = "Åbn forældre"; translations.en.openParent = "Open parent mode";
translations.da.incorrectPin = "Forkert kode"; translations.en.incorrectPin = "Incorrect PIN";
translations.da.changePin = "Skift forældrekode"; translations.en.changePin = "Change parent PIN";
translations.da.currentPin = "Nuværende PIN"; translations.en.currentPin = "Current PIN";
translations.da.newPin = "Ny PIN"; translations.en.newPin = "New PIN";
translations.da.confirmNewPin = "Bekræft ny PIN"; translations.en.confirmNewPin = "Confirm new PIN";
translations.da.savePin = "Gem kode"; translations.en.savePin = "Save PIN";
translations.da.removeReward = "FJERN PRÆMIE"; translations.en.removeReward = "REMOVE REWARD";
translations.da.removeRewardConfirm = "Vil du fjerne denne præmie?"; translations.en.removeRewardConfirm = "Remove this reward?";
translations.da.rewardRemoved = "Præmie fjernet."; translations.en.rewardRemoved = "Reward removed.";
translations.da.selectReward = "VÆLG PRÆMIE"; translations.en.selectReward = "SELECT REWARD";
translations.da.chooseRewardCategory = "Vælg kategori"; translations.en.chooseRewardCategory = "Choose category";
translations.da.chooseGoalCategory = "Vælg kategori"; translations.en.chooseGoalCategory = "Choose category";

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
  { id: "candy", name: { da: "Vælg fredagsslik", en: "Choose Friday candy" }, cost: 50, icon: "🍬", category: "snacks" },
  { id: "screen", name: { da: "30 min. ekstra skærmtid", en: "30 minutes extra screen time" }, cost: 100, icon: "🎮", category: "screen" },
  { id: "dinner", name: { da: "Vælg aftensmad", en: "Choose dinner" }, cost: 150, icon: "🍕", category: "food" },
  { id: "movie", name: { da: "Filmaften", en: "Movie night" }, cost: 250, icon: "🍿", category: "movie" },
  { id: "cinema", name: { da: "Biograftur", en: "Cinema trip" }, cost: 500, icon: "🎬", category: "experience" }
];

const avatarChoices = ["⚽", "🏀", "🎮", "🚀", "🦊", "🐼", "🐯", "🦁", "🦄", "⭐", "⚡", "🔥", "🌈", "🎧", "🛹", "🍀"];
const characterAssets = { Vega: "Assets/Vega app.png", Vidar: "Assets/Vidar app.png" };
const choreIllustrations = { "dishwasher-empty": "Assets/opvasker billede.png", "dishwasher-fill": "Assets/Fyld opvasker.png", trash: "Assets/tag-skraldet-ud.png", laundry: "Assets/laeg-toej-sammen.png", table: "Assets/daek-bord.png", "clear-table": "Assets/ryd-af-efter-aftensmad.png", "school-bag": "Assets/pak-skole-sportstaske.png", sheets: "Assets/skift-sengetoej.png", cook: "Assets/lav-mad-med-voksen.png", room: "Assets/ryd-op-vaerelset.png" };
// Vega-specific chore illustrations; only used when the chore's assigned child is Vega.
const vegaChoreIllustrations = { "dishwasher-empty": "Assets/vega-opvasker-billede.png", "dishwasher-fill": "Assets/vega-fyld-opvasker.png", trash: "Assets/vega-tag-skraldet-ud.png", laundry: "Assets/vega-laeg-toej-sammen.png", "clear-table": "Assets/vega-ryd-af-efter-aftensmad.png", "school-bag": "Assets/vega-pak-skole-sportstaske.png", sheets: "Assets/vega-skift-sengetoej.png", cook: "Assets/vega-lav-mad-med-voksen.png", room: "Assets/vega-ryd-op-vaerelset.png" };
const rewardCategoryOrder = ["snacks", "screen", "movie", "experience", "food", "sport", "things", "other"];
const rewardCategoryLabels = { snacks: { da: "Slik & snacks", en: "Candy & snacks" }, screen: { da: "Skærm & gaming", en: "Screen & gaming" }, movie: { da: "Film & hygge", en: "Movie & cosy time" }, experience: { da: "Tur & oplevelse", en: "Outing & experience" }, food: { da: "Mad & treat", en: "Food & treat" }, sport: { da: "Sport & aktivitet", en: "Sport & activity" }, things: { da: "Ting & ønsker", en: "Things & wishes" }, other: { da: "Andet", en: "Other" } };
const rewardCategoryAssets = { snacks: "Assets/reward-slik-snacks.png", screen: "Assets/reward-skaerm-gaming.png", movie: "Assets/reward-film-hygge.png", experience: "Assets/reward-tur-oplevelse.png", food: "Assets/reward-mad-treat.png", sport: "Assets/reward-sport-aktivitet.png", things: "Assets/reward-ting-oensker.png", other: "Assets/reward-andet.png" };
const goalCategoryOrder = ["transport", "gaming", "hobby", "style", "sport", "experience", "money", "other"];
const goalCategoryLabels = { transport: { da: "Transport & udstyr", en: "Transport & gear" }, gaming: { da: "Gaming & elektronik", en: "Gaming & electronics" }, hobby: { da: "Legetøj & hobby", en: "Toys & hobbies" }, style: { da: "Tøj & stil", en: "Clothes & style" }, sport: { da: "Sport & fritid", en: "Sport & leisure" }, experience: { da: "Oplevelser & ture", en: "Experiences & trips" }, money: { da: "Spare op / penge", en: "Saving up / money" }, other: { da: "Andet", en: "Other" } };
const goalCategoryAssets = { transport: "Assets/goal-transport-udstyr.png", gaming: "Assets/goal-gaming-elektronik.png", hobby: "Assets/goal-legetoej-hobby.png", style: "Assets/goal-toej-stil.png", sport: "Assets/goal-sport-fritid.png", experience: "Assets/goal-oplevelser-ture.png", money: "Assets/goal-spare-op-penge.png", other: "Assets/goal-andet.png" };
const defaultState = { language: "da", selectedChild: null, mode: "child", parentPin: "1234", parentPinChanged: false, catalogue: defaultCatalogue, rewards: defaultRewards, children: [] };

let state;
let toastTimer;
let pendingMode;
let pendingReward;
let pendingRemoveChore;

function t(key, values = {}) { let value = (translations[state.language] || translations.da)[key] || key; Object.entries(values).forEach(([name, replacement]) => { value = value.replace(`{${name}}`, replacement); }); return value; }
function localized(value, language = state?.language || "da") { return typeof value === "object" ? value[language] || value.da || value.en : value; }
function clone(value) { return JSON.parse(JSON.stringify(value)); }
function makeTransaction(amount, type, description) { return { amount, type, description: typeof description === "object" ? description : { da: description, en: description }, timestamp: new Date().toISOString() }; }
function iconFor(category) { return categoryIcons[category] || "✦"; }
function choreName(chore) { return chore.nameData ? localized(chore.nameData) : localized(state.catalogue.find(item => item.id === chore.catalogueId)?.name) || chore.name; }
function categoryText(category) { return localized(categoryLabels[category] || category); }
function deadlineText(chore) { if (chore.period === "weekly") return `${t("mustBeDone")} ${t("beforeSunday")}`; if (chore.catalogueId === "dishwasher-empty" || chore.name === "Tøm opvaskemaskinen") return t("noNeed"); if (chore.catalogueId === "table" || chore.name === "Dæk bord") return t("beforeEating"); if (chore.catalogueId === "school-bag" || chore.name === "Pak skoletasken") return t("beforeBed"); return chore.deadline || t("mustDo"); }
function weekKey(date = new Date()) { const copy = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())); const day = copy.getUTCDay() || 7; copy.setUTCDate(copy.getUTCDate() + 4 - day); const yearStart = new Date(Date.UTC(copy.getUTCFullYear(), 0, 1)); const week = Math.ceil((((copy - yearStart) / 86400000) + 1) / 7); return `${copy.getUTCFullYear()}-${week}`; }
function normalizeParentPin(savedState) { const explicitlyChanged = savedState.parentPinChanged === true; return { parentPin: explicitlyChanged && /^\d{4}$/.test(savedState.parentPin || "") ? savedState.parentPin : "1234", parentPinChanged: explicitlyChanged }; }

function migrateChore(old, childId) {
  const catalogue = defaultCatalogue.find(item => old.catalogueId === item.id || old.id.includes(item.id.split("-")[0]) || localized(item.name).toLowerCase() === String(old.name).toLowerCase());
  return { id: old.id || `${childId}-${Date.now()}-${Math.random()}`, assignedChildId: old.assignedChildId || childId, catalogueId: old.catalogueId || catalogue?.id, name: old.name || localized(catalogue?.name) || "Pligt", points: Number(old.points) || catalogue?.points || 5, category: old.category || localized(catalogue?.category) || "Familie", completion: old.completion || localized(catalogue?.completion) || "Opgaven er helt færdig.", period: old.period || "today", deadline: old.deadline || "Når det passer med behovet", status: old.status === "approved" ? "approved" : old.status || "active", icon: old.icon || catalogue?.icon || iconFor(old.category), createdAt: old.createdAt || new Date().toISOString(), completedAt: old.completedAt };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return clone(defaultState);
    const old = JSON.parse(saved);
    const legacyChildren = Array.isArray(old.children) ? old.children : Object.entries(old.children || {}).map(([id, child]) => ({ ...child, id, avatar: child.avatar || (id === "vega" ? "⭐" : "⚡") }));
    const pinState = normalizeParentPin(old);
    const next = { ...clone(defaultState), ...old, ...pinState, children: legacyChildren, language: old.language || localStorage.getItem("mychores-language") || "da", catalogue: old.catalogue?.length ? old.catalogue : clone(defaultCatalogue), rewards: old.rewards?.length ? old.rewards : clone(defaultRewards) };
    next.rewards.forEach(reward => { if (rewardCategoryLabels[reward.category]) return; const fallback = defaultRewards.find(item => item.id === reward.id) || defaultRewards.find(item => localized(item.name, "da").toLowerCase() === String(reward.name?.da || reward.name?.en || reward.name || "").toLowerCase()); reward.category = fallback?.category || "other"; });
    next.selectedChild = next.children.some(child => child.id === old.selectedChild) ? old.selectedChild : next.children[0]?.id || null;
    next.children.forEach((child, index) => {
      child.id = child.id || `child-${Date.now()}-${index}`;
      child.avatar = child.avatar || avatarChoices[index % avatarChoices.length];
      child.bank = Number.isFinite(child.bank) ? child.bank : Number(child.points) || 0;
      child.goal = child.goal || { name: { da: "Mit mål", en: "My goal" }, cost: 1000, icon: "🎯" };
      child.goal.category = goalCategoryLabels[child.goal.category] ? child.goal.category : "other";
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
function openParentPinDialog() { document.querySelector("#pin-title").textContent = state.language === "da" ? "Forældrekode" : "Parent PIN"; document.querySelector("#pin-copy").textContent = t("pinCopy"); document.querySelector("#pin-label").textContent = t("enterPin"); document.querySelectorAll(".pin-confirm-field").forEach(element => element.classList.add("hidden")); document.querySelector("#pin-submit").textContent = t("openParent"); document.querySelector("#pin-form").dataset.setup = "false"; document.querySelector("#pin-form").reset(); document.querySelector("#pin-dialog").showModal(); document.querySelector("#pin-input").focus(); }

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.title = `${t("brand")} | ${t("tagline")}`;
  document.querySelector("#brand-name").textContent = t("brand");
  document.querySelector("#tagline").textContent = t("tagline");
  document.querySelector("#rewards-tagline").textContent = t("tagline");
  document.querySelector("#goal-page-tagline").textContent = t("tagline");
  document.querySelector("#greeting-label").textContent = t("greeting");
  document.querySelectorAll("[data-i18n]").forEach(element => { const control = element.querySelector("input, select, textarea"); if (control) { const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()); if (textNode) textNode.textContent = `${t(element.dataset.i18n)}`; } else element.textContent = t(element.dataset.i18n); });
  document.querySelector("#profile-gate-title").textContent = t("whoAreYou");
  document.querySelector("#profile-gate-title").nextElementSibling.textContent = t("chooseProfile");
  document.querySelector(".profile-return").textContent = `⇄ ${t("switchProfile")}`;
  document.querySelectorAll(".dialog-close").forEach(button => button.setAttribute("aria-label", t("close")));
  if (!document.querySelector("#pin-dialog").open) { document.querySelector("#pin-title").textContent = state.language === "da" ? "Forældrekode" : "Parent PIN"; }
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
  document.querySelectorAll("#reward-category-picker .reward-category-choice").forEach(choice => { const label = choice.querySelector("span"); if (label) label.textContent = localized(rewardCategoryLabels[choice.dataset.category]); });
  document.querySelectorAll("#goal-category-picker .goal-category-choice").forEach(choice => { const label = choice.querySelector("span"); if (label) label.textContent = localized(goalCategoryLabels[choice.dataset.goalCategory]); });
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
  const assignedChild = state.children.find(child => child.id === (chore.assignedChildId || currentChild()?.id));
  const illustration = (assignedChild?.name === "Vega" && vegaChoreIllustrations[chore.catalogueId]) || choreIllustrations[chore.catalogueId];
  return `<article class="chore-item ${pending ? "pending-item" : ""}" data-detail="${chore.id}"><p class="chore-name">${escapeHtml(choreName(chore))}</p><div class="chore-illustration" aria-hidden="true">${illustration ? `<img src="${illustration}" alt="">` : ""}</div><span class="chore-points"><strong>+${chore.points}</strong><small>${t("points")}</small></span><div class="chore-meta"><span class="chore-category">${escapeHtml(categoryText(chore.category))}</span><p class="chore-deadline">${escapeHtml(deadlineText(chore))}</p><button class="detail-link" data-detail="${chore.id}" type="button">${t("detail")}</button></div>${pending ? `<span class="pending-label">${t("waiting")}</span>` : `<button class="done-button" data-chore="${chore.id}" type="button">${t("done")}</button>`}</article>`;
}

function renderChoreGroups(child) {
  return groups.map(group => {
    const chores = child.chores.filter(chore => (chore.assignedChildId || child.id) === child.id && chore.status !== "approved" && (chore.period || "today") === group.key);
    const weekly = group.key === "weekly" ? child.chores.filter(chore => chore.period === "weekly") : [];
    const done = weekly.filter(chore => chore.status === "approved").length;
    return `<section class="chore-group"><div class="chore-group-heading"><div><span class="section-label">${localized(group.label)}</span><h3>${localized(group.title)}</h3><p>${localized(group.hint)}</p></div>${group.key === "weekly" ? `<span class="group-progress">${t("weeklyProgress", { done, total: weekly.length })}</span>` : ""}</div><div class="chore-list">${chores.length ? chores.map(renderChoreCard).join("") : `<div class="chore-empty-state">${t("noActive")}</div>`}</div></section>`;
  }).join("");
}

function renderChildView() {
  const child = currentChild();
  const active = child.chores.filter(chore => chore.status !== "approved");
  document.querySelector("#greeting-name").textContent = child.name;
  document.querySelector("#header-avatar").textContent = child.avatar;
  const characterImage = document.querySelector(".child-character");
  const characterAsset = characterAssets[child.name];
  characterImage.classList.toggle("hidden", !characterAsset);
  if (characterAsset) characterImage.src = characterAsset;
  document.querySelector("#points-total").textContent = child.bank.toLocaleString(state.language === "da" ? "da-DK" : "en-US");
  document.querySelector(".points-unit").textContent = t("points");
  document.querySelector("#chore-count").textContent = `${active.filter(chore => chore.status === "active").length} ${state.language === "da" ? "tilbage" : "left"}`;
  const goal = child.goal;
  const goalName = localized(goal.name);
  const percent = Math.min(100, Math.round(child.bank / goal.cost * 100));
  const goalAsset = goalCategoryAssets[goal.category] || goalCategoryAssets.other;
  const goalRemaining = Math.max(0, goal.cost - child.bank);
  document.querySelector("#goal-content").innerHTML = `<div class="goal-illustration" aria-hidden="true"><img src="${goalAsset}" alt=""></div><p class="goal-title">${escapeHtml(goalName)}</p><p class="goal-score">${child.bank.toLocaleString(state.language === "da" ? "da-DK" : "en-US")} / ${goal.cost.toLocaleString(state.language === "da" ? "da-DK" : "en-US")} ${t("points")}</p><div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div><p class="goal-percent">${percent}%</p><p class="goal-remaining">${goalRemaining.toLocaleString()} ${t("points")} ${state.language === "da" ? "tilbage" : "left"}</p>`;
  document.querySelector("#goal-page-illustration").innerHTML = `<img src="${goalAsset}" alt="">`;
  document.querySelector("#goal-page-title").textContent = goalName;
  document.querySelector("#goal-page-score").textContent = `${child.bank.toLocaleString(state.language === "da" ? "da-DK" : "en-US")} / ${goal.cost.toLocaleString(state.language === "da" ? "da-DK" : "en-US")} ${t("points")}`;
  document.querySelector("#goal-page-fill").style.width = `${percent}%`;
  document.querySelector("#goal-page-percent").textContent = `${percent}%`;
  document.querySelector("#goal-page-remaining").textContent = `${goalRemaining.toLocaleString()} ${t("points")} ${state.language === "da" ? "tilbage" : "left"}`;
  document.querySelector("#goal-page-bank-total").textContent = child.bank.toLocaleString(state.language === "da" ? "da-DK" : "en-US");
  document.querySelector("#goal-page-bank-unit").textContent = t("points");
  document.querySelector("#chore-list").innerHTML = renderChoreGroups(child);
  document.querySelector("#rewards-bank-total").textContent = child.bank.toLocaleString(state.language === "da" ? "da-DK" : "en-US");
  document.querySelector("#rewards-bank-unit").textContent = t("points");
  document.querySelector("#reward-grid").innerHTML = state.rewards.map(reward => { const name = localized(reward.name); const canAfford = child.bank >= reward.cost; const remaining = Math.max(0, reward.cost - child.bank); const asset = rewardCategoryAssets[reward.category] || rewardCategoryAssets.other; return `<article class="reward-card"><span class="reward-name">${escapeHtml(name)}</span><div class="reward-illustration" aria-hidden="true"><img src="${asset}" alt=""></div><span class="reward-cost">${reward.cost} ${t("points")}</span><button class="reward-action ${canAfford ? "can-afford" : "needs-more"}" data-reward="${reward.id}" type="button">${canAfford ? t("selectReward") : `${remaining} ${t("points")} ${state.language === "da" ? "tilbage" : "to go"}`}</button></article>`; }).join("");
}

function renderParentView() {
  const approvals = state.children.flatMap(child => child.chores.filter(chore => chore.status === "pending").map(chore => ({ ...chore, childId: child.id, childName: child.name })));
  document.querySelector("#approval-count").textContent = `${approvals.length} ${state.language === "da" ? "venter" : "waiting"}`;
  document.querySelector("#activation-child-label").textContent = currentChild().name;
  document.querySelector("#parent-child-switch").innerHTML = state.children.map(child => `<button class="parent-child ${child.id === state.selectedChild ? "active" : ""}" data-child="${child.id}" type="button">${escapeHtml(child.name)}</button>`).join("");
  document.querySelector("#approval-list").innerHTML = approvals.length ? approvals.map(item => `<article class="approval-item"><span class="chore-icon">${item.icon || "✦"}</span><div class="chore-copy"><p class="chore-name">${escapeHtml(choreName(item))}</p><span class="approval-child">${item.childName} · +${item.points} ${t("points")}</span></div><div class="approval-actions"><button class="approve-button" data-approval="approve" data-child="${item.childId}" data-chore="${item.id}" type="button">${t("approve")}</button><button class="reject-button" data-approval="reject" data-child="${item.childId}" data-chore="${item.id}" type="button">${t("reject")}</button></div></article>`).join("") : `<div class="empty-state">${t("noWaiting")}</div>`;
  const active = currentChild().chores.filter(chore => chore.status === "active");
  document.querySelector("#active-parent-list").innerHTML = active.length ? active.map(chore => `<div class="active-parent-item"><span>${chore.icon || "✦"}</span><div><b>${escapeHtml(choreName(chore))}</b><small>${currentChild().name} · +${chore.points} ${t("points")}</small></div><button class="remove-chore-button" data-remove-chore="${chore.id}" type="button">${t("removeChore")}</button></div>`).join("") : `<div class="empty-state">${t("noActive")}</div>`;
  renderCatalogue();
  renderRewardManage();
  document.querySelector("#goal-child-select").innerHTML = state.children.map(child => `<option value="${child.id}">${escapeHtml(child.name)}</option>`).join("");
  syncGoalCategoryPicker();
  document.querySelector("#family-list").innerHTML = state.children.map(child => `<div class="family-row"><span class="family-avatar">${child.avatar}</span><div><b>${escapeHtml(child.name)}</b><small>${child.bank} ${t("points")}</small></div><button class="catalogue-edit" data-edit-child="${child.id}" type="button">${t("editChild")}</button><button class="catalogue-delete" data-remove-child="${child.id}" type="button">×</button></div>`).join("");
}

function renderProfiles() { document.querySelector("#gate-profiles").innerHTML = state.children.map(child => `<button class="gate-profile" data-profile="${child.id}" type="button"><span class="avatar">${child.avatar}</span><b>${escapeHtml(child.name)}</b></button>`).join(""); }
function openSetup() { document.querySelector("#setup-gate").classList.add("visible"); }
function closeSetup() { document.querySelector("#setup-gate").classList.remove("visible"); }
function openChildForm(childId = "") { const form = document.querySelector("#child-form"); form.dataset.editChild = childId; const child = state.children.find(item => item.id === childId); form.name.value = child?.name || ""; document.querySelector("#avatar-picker").innerHTML = avatarChoices.map(avatar => `<button class="avatar-choice ${avatar === (child?.avatar || avatarChoices[0]) ? "selected" : ""}" data-avatar="${avatar}" type="button">${avatar}</button>`).join(""); document.querySelector("#child-form-dialog").showModal(); }
function createChild(event) { event.preventDefault(); const form = event.currentTarget; const name = new FormData(form).get("name").trim(); const avatar = form.querySelector(".avatar-choice.selected")?.dataset.avatar || avatarChoices[0]; if (!name) return; const editing = Boolean(form.dataset.editChild); if (editing) { const child = state.children.find(item => item.id === form.dataset.editChild); child.name = name; child.avatar = avatar; } else { const id = `child-${crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`}`; state.children.push({ id, name, avatar, bank: 0, goal: { name: { da: "Mit mål", en: "My goal" }, cost: 1000, icon: "🎯" }, chores: [], transactions: [] }); state.selectedChild = id; } form.reset(); form.dataset.editChild = ""; document.querySelector("#child-form-dialog").close(); saveState(); if (!editing && state.children.length === 1) { document.querySelector(".setup-card").innerHTML = `<span class="brand-mark">${avatar}</span><h2>${escapeHtml(name)} ${state.language === "da" ? "er klar!" : "is ready!"}</h2><button class="primary-button" data-add-child type="button">${t("addChild")}</button><button class="profile-return" data-ready type="button">${state.language === "da" ? "Vi er klar" : "We're ready"}</button>`; openSetup(); } else { closeSetup(); render(); closeProfileGate(); showToast(`${name} ${state.language === "da" ? "er klar!" : "is ready!"}`); } }
function removeChild(id) { const child = state.children.find(item => item.id === id); if (!child) return; if (!window.confirm(`${t("removeConfirm", { name: child.name })}\n${t("removeWarning")}`)) return; state.children = state.children.filter(item => item.id !== id); state.selectedChild = state.children[0]?.id || null; saveState(); render(); if (!state.children.length) openSetup(); }
function requestRemoveChore(id) { const child = state.children.find(item => item.chores.some(chore => chore.id === id)); const chore = child?.chores.find(item => item.id === id && item.status === "active"); if (!child || !chore) return; pendingRemoveChore = { childId: child.id, choreId: chore.id }; document.querySelector("#remove-chore-copy").textContent = t("removeChoreCopy", { name: child.name }); document.querySelector("#remove-chore-dialog").showModal(); }
function confirmRemoveChore() { if (!pendingRemoveChore) return; const child = state.children.find(item => item.id === pendingRemoveChore.childId); if (child) child.chores = child.chores.filter(chore => chore.id !== pendingRemoveChore.choreId); pendingRemoveChore = null; document.querySelector("#remove-chore-dialog").close(); saveState(); render(); }

function renderCatalogue() {
  const quick = document.querySelector("#catalogue-quick-list");
  const list = document.querySelector("#catalogue-list");
  const catalogue = state.catalogue;
  quick.innerHTML = catalogue.map(item => `<button class="quick-catalogue-item" data-activate="${item.id}" type="button"><span>${item.icon || iconFor(localized(item.category))}</span><span><b>${escapeHtml(localized(item.name))}</b><small>+${item.points} ${t("points")}</small></span><strong>＋</strong></button>`).join("");
  list.innerHTML = catalogue.map(item => `<div class="catalogue-row"><span class="catalogue-icon">${item.icon || "✦"}</span><div><b>${escapeHtml(localized(item.name))}</b><small>${item.points} ${t("points")} · ${escapeHtml(localized(item.category))}</small></div><button class="catalogue-edit" data-edit-catalogue="${item.id}" type="button">${t("edit")}</button><button class="catalogue-delete" data-delete-catalogue="${item.id}" type="button">×</button></div>`).join("");
}

function renderRewardManage() {
  const list = document.querySelector("#reward-manage-list");
  if (!list) return;
  list.innerHTML = state.rewards.map(reward => `<div class="catalogue-row"><span class="catalogue-icon">${reward.icon || "🎁"}</span><div><b>${escapeHtml(localized(reward.name))}</b><small>${reward.cost} ${t("points")}</small></div><button class="remove-chore-button" data-remove-reward="${reward.id}" type="button">${t("removeReward")}</button></div>`).join("");
}

function addTransaction(child, amount, type, description) { child.transactions.unshift(makeTransaction(amount, type, description)); }
function completeChore(choreId) { const chore = currentChild().chores.find(item => item.id === choreId); if (!chore || chore.status !== "active") return; chore.status = "pending"; chore.completedAt = new Date().toISOString(); saveState(); render(); showCelebration(); }
function handleApproval(data) { const child = state.children.find(item => item.id === data.child); const chore = child?.chores.find(item => item.id === data.chore); if (!child || !chore) return; if (data.approval === "approve") { const before = child.bank; chore.status = "approved"; child.bank += chore.points; const catalogueItem = state.catalogue.find(item => item.id === chore.catalogueId); addTransaction(child, chore.points, "earned", catalogueItem?.name || { da: chore.name, en: chore.name }); sessionStorage.setItem("mychores-approval-feedback", JSON.stringify({ childId: data.child, earned: chore.points, before, after: child.bank })); showToast(`${child.name} +${chore.points} ${t("points")}`); } else { chore.status = "active"; showToast(t("reject")); } saveState(); render(); }
function activateChore(catalogueId) { const item = state.catalogue.find(chore => chore.id === catalogueId); const child = currentChild(); if (!item || !child) return; if (child.chores.some(chore => chore.catalogueId === catalogueId && chore.status === "active")) { showToast(t("alreadyActive")); return; } child.chores.push({ id: `${catalogueId}-${Date.now()}`, assignedChildId: child.id, catalogueId, name: localized(item.name), nameData: item.name, points: item.points, category: localized(item.category), completion: localized(item.completion), period: catalogueId === "room" || catalogueId === "sheets" ? "weekly" : "today", deadline: catalogueId === "room" || catalogueId === "sheets" ? "Senest søndag" : t("mustDo"), status: "active", icon: item.icon, createdAt: new Date().toISOString() }); saveState(); render(); showToast(t("activated")); }
function openBank() { const child = currentChild(); document.querySelector("#transaction-list").innerHTML = child.transactions.length ? child.transactions.map(item => `<div class="transaction-row"><b class="${item.amount >= 0 ? "earned" : "spent"}">${item.amount >= 0 ? "+" : ""}${item.amount}</b><span>${escapeHtml(localized(item.description))}</span><small>${new Date(item.timestamp).toLocaleDateString(state.language === "da" ? "da-DK" : "en-US")}</small></div>`).join("") : `<div class="empty-state">${t("noTransactions")}</div>`; document.querySelector("#history-balance").textContent = `${t("balance")}: ${child.bank} ${t("points")}`; document.querySelector("#bank-dialog").showModal(); }
function buyReward(rewardId) { const reward = state.rewards.find(item => item.id === rewardId); if (!reward || currentChild().bank < reward.cost) { showToast(t("insufficient")); return; } pendingReward = reward; document.querySelector("#reward-dialog-name").textContent = localized(reward.name); document.querySelector("#reward-dialog-copy").textContent = `${reward.cost} ${t("points")} ${state.language === "da" ? "trækkes fra din bank." : "will be taken from your bank."}`; document.querySelector("#reward-dialog").showModal(); }
function confirmReward() { const child = currentChild(); if (!pendingReward || child.bank < pendingReward.cost) return; child.bank -= pendingReward.cost; addTransaction(child, -pendingReward.cost, "spent", pendingReward.name); document.querySelector("#reward-dialog").close(); showToast(t("rewardBought")); pendingReward = null; saveState(); render(); }
function saveCatalogueChore(event) { event.preventDefault(); const data = new FormData(event.currentTarget); const id = data.get("catalogueId") || `catalogue-${Date.now()}`; const item = { id, name: { da: data.get("name"), en: data.get("name") }, points: Number(data.get("points")), category: { da: data.get("category"), en: data.get("category") }, completion: { da: data.get("completion"), en: data.get("completion") }, icon: iconFor(data.get("category")) }; const index = state.catalogue.findIndex(chore => chore.id === id); if (index >= 0) state.catalogue[index] = item; else state.catalogue.push(item); event.currentTarget.reset(); event.currentTarget.catalogueId.value = ""; saveState(); render(); showToast(t("newChore")); }
function editCatalogue(id) { const item = state.catalogue.find(chore => chore.id === id); if (!item) return; const form = document.querySelector("#chore-form"); form.catalogueId.value = item.id; form.name.value = localized(item.name); form.points.value = item.points; form.category.value = localized(item.category); form.completion.value = localized(item.completion); form.scrollIntoView({ behavior: "smooth", block: "center" }); }
function deleteCatalogue(id) { state.catalogue = state.catalogue.filter(item => item.id !== id); saveState(); render(); }
function addReward(event) { event.preventDefault(); const data = new FormData(event.currentTarget); const category = rewardCategoryLabels[data.get("category")] ? data.get("category") : "other"; state.rewards.push({ id: `reward-${Date.now()}`, name: { da: data.get("name"), en: data.get("name") }, cost: Number(data.get("cost")), icon: "🎁", category }); event.currentTarget.reset(); resetRewardCategoryPicker(event.currentTarget); saveState(); render(); showToast(t("newReward")); }
function resetRewardCategoryPicker(form) { const picker = form.querySelector(".reward-category-picker"); if (!picker) return; picker.querySelectorAll(".reward-category-choice").forEach(choice => choice.classList.toggle("selected", choice.dataset.category === "other")); const hidden = form.querySelector('input[name="category"]'); if (hidden) hidden.value = "other"; }
function removeReward(id) { if (!window.confirm(t("removeRewardConfirm"))) return; state.rewards = state.rewards.filter(reward => reward.id !== id); saveState(); render(); showToast(t("rewardRemoved")); }
function saveGoal(event) { event.preventDefault(); const data = new FormData(event.currentTarget); const child = state.children.find(item => item.id === data.get("child")); if (!child) return; const category = goalCategoryLabels[data.get("category")] ? data.get("category") : "other"; child.goal = { name: { da: data.get("name"), en: data.get("name") }, cost: Number(data.get("cost")), icon: child.goal?.icon || "🎯", category }; saveState(); render(); showToast(t("goalSaved")); }
function syncGoalCategoryPicker() { const picker = document.querySelector("#goal-category-picker"); if (!picker) return; const select = document.querySelector("#goal-child-select"); const child = state.children.find(item => item.id === select.value) || state.children[0]; const category = child?.goal?.category || "other"; picker.querySelectorAll(".goal-category-choice").forEach(choice => choice.classList.toggle("selected", choice.dataset.goalCategory === category)); const hidden = document.querySelector('#goal-form input[name="category"]'); if (hidden) hidden.value = category; }

function handleClick(event) {
  const target = event.target.closest("button");
  const card = event.target.closest("[data-detail]");
  if (!target && !card) return;
  if (target?.dataset.mode) { if (target.dataset.mode === "parent" && sessionStorage.getItem("mychores-parent-unlocked") !== "true") { pendingMode = target.dataset.mode; openParentPinDialog(); return; } if (target.dataset.mode === "child") { sessionStorage.removeItem("mychores-parent-unlocked"); } state.mode = target.dataset.mode; saveState(); render(); return; }
  if (target?.dataset.approval) { handleApproval(target.dataset); return; }
  if (target?.hasAttribute("data-profile-reset")) { sessionStorage.removeItem("mychores-profile-selected"); state.mode = "child"; saveState(); render(); openProfileGate(); return; }
  if (target?.hasAttribute("data-open-change-pin")) { document.querySelector("#change-pin-dialog").showModal(); return; }
  if (target?.hasAttribute("data-dialog-close")) { target.closest("dialog").close(); return; }
  if (target?.dataset.profile) { state.selectedChild = target.dataset.profile; saveState(); closeProfileGate(); render(); return; }
  if (target?.hasAttribute("data-start-setup")) { openChildForm(); return; }
  if (target?.hasAttribute("data-ready")) { closeSetup(); sessionStorage.setItem("mychores-profile-selected", "true"); render(); return; }
  if (target?.hasAttribute("data-add-child")) { openChildForm(); return; }
  if (target?.dataset.avatar) { document.querySelectorAll(".avatar-choice").forEach(button => button.classList.toggle("selected", button.dataset.avatar === target.dataset.avatar)); return; }
  if (target?.dataset.category) { const picker = target.closest(".reward-category-picker"); if (picker) { picker.querySelectorAll(".reward-category-choice").forEach(choice => choice.classList.toggle("selected", choice === target)); const hidden = picker.parentElement.querySelector('input[name="category"]'); if (hidden) hidden.value = target.dataset.category; } return; }
  if (target?.dataset.goalCategory) { const picker = target.closest(".goal-category-picker"); if (picker) { picker.querySelectorAll(".goal-category-choice").forEach(choice => choice.classList.toggle("selected", choice === target)); const hidden = picker.parentElement.querySelector('input[name="category"]'); if (hidden) hidden.value = target.dataset.goalCategory; } return; }
  if (target?.dataset.editChild) { openChildForm(target.dataset.editChild); return; }
  if (target?.dataset.removeChild) { removeChild(target.dataset.removeChild); return; }
  if (target?.dataset.removeChore) { requestRemoveChore(target.dataset.removeChore); return; }
  if (target?.dataset.child) { state.selectedChild = target.dataset.child; saveState(); render(); return; }
  if (target?.dataset.activate) { activateChore(target.dataset.activate); return; }
  if (target?.dataset.editCatalogue) { editCatalogue(target.dataset.editCatalogue); return; }
  if (target?.dataset.deleteCatalogue) { deleteCatalogue(target.dataset.deleteCatalogue); return; }
  if (target?.dataset.removeReward) { removeReward(target.dataset.removeReward); return; }
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
document.querySelector("#goal-child-select").addEventListener("change", syncGoalCategoryPicker);
document.querySelector("#child-form").addEventListener("submit", createChild);
document.querySelector("#confirm-reward").addEventListener("click", confirmReward);
document.querySelector("#confirm-remove-chore").addEventListener("click", confirmRemoveChore);
document.querySelector("#pin-form").addEventListener("submit", event => { event.preventDefault(); const input = document.querySelector("#pin-input"); if (!/^\d{4}$/.test(input.value) || input.value !== state.parentPin) { input.value = ""; showToast(t("incorrectPin")); return; } sessionStorage.setItem("mychores-parent-unlocked", "true"); document.querySelector("#pin-dialog").close(); state.mode = pendingMode || "parent"; pendingMode = null; saveState(); render(); });
document.querySelector("#change-pin-form").addEventListener("submit", event => { event.preventDefault(); const data = new FormData(event.currentTarget); const current = data.get("currentPin"); const next = data.get("newPin"); const confirm = data.get("confirmNewPin"); if (current !== state.parentPin || !/^\d{4}$/.test(next) || next !== confirm) { showToast(current !== state.parentPin ? t("incorrectPin") : (state.language === "da" ? "Koderne matcher ikke." : "PINs do not match.")); return; } state.parentPin = next; state.parentPinChanged = true; event.currentTarget.reset(); document.querySelector("#change-pin-dialog").close(); saveState(); showToast(state.language === "da" ? "Forældrekode ændret." : "Parent PIN changed."); });
document.querySelector("#language-select").addEventListener("change", event => { state.language = event.target.value; saveState(); render(); });
render();
if (hasFamily() && sessionStorage.getItem("mychores-profile-selected") !== "true") openProfileGate();