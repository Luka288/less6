// responsive header
const buttonContaier = document.querySelector(".nav-items");
const burger = document.querySelector(".bars");
const icon = document.querySelector(".fa-bars");

let ul = document.createElement("ul");
let Homeli = document.createElement("li");
let Aboutli = document.createElement("li");
let navHome = document.createElement("a");
let navAbout = document.createElement("a");
let closeIcon = document.createElement("i");
closeIcon.classList.add("fa-solid", "fa-close");

navHome.innerText = "home";
navAbout.innerText = "about";
navHome.href = "/";
navAbout.href = "/";
navHome.classList.add("aClass");
navAbout.classList.add("aClass");

ul.appendChild(Homeli);
ul.appendChild(Aboutli);
ul.classList.add("box");
Homeli.appendChild(navHome);
Aboutli.appendChild(navAbout);

burger.appendChild(ul);

icon.addEventListener("click", function () {
  ul.classList.toggle("show");
  if (ul.classList.contains("show")) {
    ul.style.display = "flex";
    icon.classList.replace("fa-bars", "fa-close");
    closeIcon.style.display = "block";
  } else {
    icon.classList.replace("fa-close", "fa-bars");
    ul.style.display = "none";
  }
});

closeIcon.addEventListener("click", function () {
  ul.classList.remove("show");
  icon.style.display = "block";
  ul.style.display = "none";
});

// todo list
let inputElementNew = document.getElementById("input-element");
let btnElemetnNew = document.getElementById("add-btn");
let ulResult = document.getElementById("ul-element");
let clearAll = document.getElementById("clearAll");

btnElemetnNew.addEventListener("click", function () {
  // 1. get input field value
  let inputValue = inputElementNew.value;

  // 2.value -> li -> ul
  let li = document.createElement("li");

  //! check if input is empty
  if (inputValue === "") {
    alert("input is empty");
    return;
  }

  let btnDelete = document.createElement("i");
  btnDelete.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  btnDelete.addEventListener("click", function () {
    li.remove();
  });

  li.textContent = inputValue;
  li.appendChild(btnDelete);
  ulResult.appendChild(li);

  // 3.clear inout field value
  inputElementNew.value = "";
});

clearAll.addEventListener("click", function () {
  ulResult.innerHTML = " ";
});
