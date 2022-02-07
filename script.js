let cards_carroceu = document.querySelectorAll(".depoimentos .carroceu .card");
let nextBtn = document.querySelector(".depoimentos .nextBtn");
let prevBtn = document.querySelector(".depoimentos .prevBtn");

let item_active = 0;
let next_active = 1;

nextBtn.addEventListener("click", () => {
  if (next_active >= cards_carroceu.length) {
    next_active = 0;
  }
  cards_carroceu[next_active].classList.toggle("active");
  cards_carroceu[item_active].classList.toggle("active");
  item_active += 1;
  next_active += 1;

  if (item_active >= cards_carroceu.length) {
    item_active = 0;
  }
});

prevBtn.addEventListener("click", () => {
  let prev_active = item_active - 1;
  if (item_active == 0) {
    prev_active = cards_carroceu.length - 1;
  }

  cards_carroceu[prev_active].classList.toggle("active");
  cards_carroceu[item_active].classList.toggle("active");

  if (prev_active == 2) {
    item_active = prev_active + 1;
  }
  if (next_active < 0) {
    item_active = 2;
    next_active = cards_carroceu.length - 1;
  } else {
    item_active -= 1;
  }
  next_active -= 1;
  if (next_active < 0) {
    next_active = cards_carroceu.length - 1;
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let buttons_data = document.querySelectorAll(
  ".edicoes .content-edicoes .nav-box .data"
);

let content_edicoes = document.querySelectorAll(
  ".edicoes .content-edicoes .box .content"
);

let content_2014 = content_edicoes[0];
let content_2015 = content_edicoes[1];
let content_2016 = content_edicoes[2];
let content_2019 = content_edicoes[3];
let content_2021 = content_edicoes[4];

// console.log(
//   content_2014,
//   content_2015,
//   content_2016,
//   content_2019,
//   content_2021
// );

// console.log(content_2021);

let button_2021 = buttons_data[0];
let button_2019 = buttons_data[1];
let button_2016 = buttons_data[2];
let button_2015 = buttons_data[3];
let button_2014 = buttons_data[4];

button_2021.addEventListener("click", () => {
  button_2021.classList.add("active");
  button_2014.classList.remove("active");
  button_2015.classList.remove("active");
  button_2016.classList.remove("active");
  button_2019.classList.remove("active");

  content_2021.classList.remove("active");
  content_2014.classList.add("active");
  content_2015.classList.add("active");
  content_2016.classList.add("active");
  content_2019.classList.add("active");
});

button_2019.addEventListener("click", () => {
  button_2019.classList.add("active");
  button_2014.classList.remove("active");
  button_2015.classList.remove("active");
  button_2016.classList.remove("active");
  button_2021.classList.remove("active");

  content_2019.classList.remove("active");
  content_2014.classList.add("active");
  content_2015.classList.add("active");
  content_2016.classList.add("active");
  content_2021.classList.add("active");
});

button_2016.addEventListener("click", () => {
  button_2016.classList.add("active");
  button_2014.classList.remove("active");
  button_2015.classList.remove("active");
  button_2019.classList.remove("active");
  button_2021.classList.remove("active");

  content_2016.classList.remove("active");
  content_2014.classList.add("active");
  content_2015.classList.add("active");
  content_2019.classList.add("active");
  content_2021.classList.add("active");
});

button_2015.addEventListener("click", () => {
  button_2015.classList.add("active");
  button_2014.classList.remove("active");
  button_2016.classList.remove("active");
  button_2019.classList.remove("active");
  button_2021.classList.remove("active");

  content_2015.classList.remove("active");
  content_2014.classList.add("active");
  content_2016.classList.add("active");
  content_2019.classList.add("active");
  content_2021.classList.add("active");
});

button_2014.addEventListener("click", () => {
  button_2014.classList.add("active");
  button_2015.classList.remove("active");
  button_2016.classList.remove("active");
  button_2019.classList.remove("active");
  button_2021.classList.remove("active");

  content_2014.classList.remove("active");
  content_2015.classList.add("active");
  content_2016.classList.add("active");
  content_2019.classList.add("active");
  content_2021.classList.add("active");
});
