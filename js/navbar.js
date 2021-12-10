const navbar = document.querySelectorAll(".list-nav");
const judul = document.querySelector(".judul-main");
const navMobile = document.querySelector(".nav-mobile");
const navMenu = document.querySelector(".navbar");

navbar.forEach((nav) => {
  nav.addEventListener("click", (a) => {
    a.preventDefault();

    const b = a.target.text;
    judul.innerHTML = `/ ${b} /`;

    navbar.forEach((active) => {
      active.classList.remove("active");
    });

    nav.classList.toggle("active");
    navMenu.classList.toggle("muncul");
    navMobile.classList.toggle("mobile");
  });
});

navMobile.addEventListener("click", () => {
  navMobile.classList.toggle("mobile");
  navMenu.classList.toggle("muncul");
});
