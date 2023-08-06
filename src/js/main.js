const nav = document.querySelector("js-ac");
function acToggle () {
    const content = this.querySelectorAll("js_header-nav_link");
    content.classList.toggle("is-open");
    const nav = this;
    nav.classList.toggle("is-open")
}

for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click" , acToggle);
}