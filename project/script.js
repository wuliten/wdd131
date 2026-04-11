const books = [
    { title: "Dungeon Crawler Carl", favorite: true, xp: 10 },
    { title: "He Who Fights With Monsters", favorite: true, xp: 8 },
    { title: "Defiance of the Fall", favorite: false, xp: 12 },
    { title: "The Primal Hunter", favorite: false, xp: 9 }
];

let xp = Number(localStorage.getItem("xp")) || 0;
let level = Number(localStorage.getItem("level")) || 1;

const list = document.getElementById("bookList");
const status = document.getElementById("status");
const filterBtn = document.getElementById("filterBtn");
const xpDisplay = document.getElementById("xpDisplay");
const themeBtn = document.getElementById("themeBtn");

function updateUI() {
    if (xpDisplay) {
        xpDisplay.textContent = `XP: ${xp} | Level: ${level}`;
    }
}

function levelUp() {
    if (xp >= level * 30) {
        level++;
    }
    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);
    updateUI();
}

function render(data) {
    if (!list) return;
    list.innerHTML = "";
    data.forEach(b => {
        const div = document.createElement("div");
        div.className = "book";
        div.textContent = b.title;

        div.addEventListener("click", () => {
            xp += b.xp;
            localStorage.setItem("last", b.title);
            status.textContent = `${b.title} +${b.xp} XP`;
            levelUp();
        });

        list.appendChild(div);
    });
}

function showFav() {
    render(books.filter(b => b.favorite));
    if (status) status.textContent = "Favorites loaded";
}

if (list) render(books);
if (filterBtn) filterBtn.addEventListener("click", showFav);

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

updateUI();

const form = document.getElementById("contactForm");
const message = document.getElementById("message");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const fav = document.getElementById("favorite").value;
        localStorage.setItem("user", JSON.stringify({ name, fav }));
        message.textContent = `${name} saved`;
    });
}