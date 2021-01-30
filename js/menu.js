function openMenu() {
    var menu = document.getElementById("page-header-menu");
    menu.classList.toggle("show");
    var teaser = document.getElementById("page-teaser-wrap");
    teaser.classList.toggle("dark");
}

function cls() {
    var menu = document.getElementById("page-header-menu");
    menu.classList.remove("show");
    var teaser = document.getElementById("page-teaser-wrap");
    teaser.classList.remove("dark");
}