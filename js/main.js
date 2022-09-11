//slide the sidebar on clicking the bars icon.
let barsIcon = document.querySelector("#bars");
let sideBar = document.querySelector(".side-bar");
let closeSideBar = document.querySelector(".side-bar .close");
barsIcon.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});
closeSideBar.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
sideBar.onclick = () => {
  sideBar.classList.contains("active")
    ? sideBar.classList.remove("active")
    : null;
};

//slide the landing section paragraph.
let bullets = Array.from(document.querySelectorAll(".landing .list ul li"));
let slides = Array.from(
  document.querySelectorAll(".landing .landing-content .slider")
);
let slidesContainer = document.querySelector(".landing .landing-content");

let i = 0;
bullets.map((bullet, index) => {
  bullet.addEventListener("click", () => {
    bullets.map((bullet) => bullet.classList.remove("active"));
    bullet.classList.add("active");
    i++;
    slides.map((slide, i) => {
      if (index === i) {
        let width = slide.clientWidth;
        slidesContainer.style.transform = `translate(-${width * i}px)`;
      }
    });
  });
});

//in services section change images based on the clicked item in the list.
let items = Array.from(document.querySelectorAll(".services .list li"));
let retinalDesignItem = document.querySelector(
  ".services .list #retinal-design"
);
let spaceAdaptationItem = document.querySelector(
  ".services .list #space-adaptation"
);
let residentalItem = document.querySelector(".services .list li#residental");
let images = Array.from(
  document.querySelectorAll(".services .images .div-img")
);
let imgsArray = [
  "service_img3.png",
  "service_img1.png",
  "service_img4.png",
  "service_img2.png",
];

function removeActiveClass() {
  items.map((item) => item.classList.remove("active"));
}
if (retinalDesignItem !== null) {
  retinalDesignItem.addEventListener("click", (e) => {
    e.preventDefault();
    removeActiveClass();
    retinalDesignItem.classList.add("active");
    images.map((image, index) => {
      imgsArray.forEach((img, i) => {
        if (i === index) {
          image.innerHTML = `<img src='./images/${img}'>`;
        }
      });
    });
  });
}
if (spaceAdaptationItem !== null) {
  spaceAdaptationItem.addEventListener("click", (e) => {
    e.preventDefault();
    removeActiveClass();
    spaceAdaptationItem.classList.add("active");
    images.map((image, index) => {
      let imgsArray = [
        "service_img2.png",
        "service_img4.png",
        "service_img1.png",
        "service_img3.png",
      ];
      imgsArray.forEach((img, i) => {
        if (i === index) {
          image.innerHTML = `<img src='./images/${img}'>`;
        }
      });
    });
  });
}
if (residentalItem !== null) {
  residentalItem.addEventListener("click", (e) => {
    e.preventDefault();
    removeActiveClass();
    residentalItem.classList.add("active");
    images.map((image, index) => {
      let imgsArray = [
        "service_img1.png",
        "service_img2.png",
        "service_img3.png",
        "service_img4.png",
      ];
      imgsArray.forEach((img, i) => {
        if (i === index) {
          image.innerHTML = `<img src='./images/${img}'>`;
        }
      });
    });
  });
}
//check info in the login form
let nameField = document.querySelector(
  ".login .form form [placeholder='name']"
);
let emailField = document.querySelector(
  ".login .form form [placeholder='email']"
);
let passwordField = document.querySelector(
  ".login .form form [placeholder='password']"
);
let form = document.querySelector(".login .form form");
let nameRegEx = /^([a-z]{4,})$/gi;
let emailRegEx = /^(\w+@\w+\.[a-z]{2,})$/gi;
let passwordRegEx = /^(\w{8,30})$/gi;

let checkFunction = (element, regEx) => {
  if (regEx.test(element.value)) {
    element.classList.remove("invalid");
    element.classList.add("valid");
  } else {
    element.classList.remove("valid");
    element.classList.add("invalid");
  }
};
let attachEventListener = (element, regEx) => {
  if (element != null) {
    element.addEventListener("input", (e) => {
      checkFunction(element, regEx);
    });
  }
};

attachEventListener(nameField, nameRegEx);
attachEventListener(emailField, emailRegEx);
attachEventListener(passwordField, passwordRegEx);
