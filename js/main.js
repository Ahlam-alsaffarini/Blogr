setTimeout(() => {
  document.querySelector("body").style.opacity = "1";
}, 500);

let linkButton = document.querySelectorAll(".header .main-nav li a.menu");
let tlinks = document.querySelectorAll(".links");

linkButton.forEach((event) => {
  event.addEventListener("click", (ele) => {
    if (
      ele.target.parentElement
        .querySelector(".links")
        .classList.contains("open")
    ) {
      ele.target.parentElement.querySelector(".links").classList.remove("open");
      ele.target.classList.remove("open");
      return;
    }
    tlinks.forEach((e) => {
      if (e.classList.contains("open")) {
        e.classList.remove("open");
      }
    });
    linkButton.forEach((e) => {
      if (e.classList.contains("open")) {
        e.classList.remove("open");
      }
    });

    ele.target.parentElement.querySelector(".links").classList.toggle("open");
    ele.target.classList.toggle("open");
  });
});

//stop propagation on links
tlinks.forEach((ele) => {
  ele.onclick = function (e) {
    //stop propogation
    e.stopPropagation();
  };
});
//close nav
let toggleMenu = document.querySelector(".header .toggle-menu span");
let mainNav = document.querySelector(".header .main-nav");
toggleMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  event.target.classList.toggle("open");
  mainNav.classList.toggle("open");
});

//stop propagation on links
mainNav.onclick = function (e) {
  e.stopPropagation();
};

// click in anywhere

document.addEventListener("click", (ele) => {
  if (!ele.target.classList.contains("menu")) {
    tlinks.forEach((e) => {
      e.classList.remove("open");
    });
  }
  if (ele.target !== toggleMenu && ele.target !== mainNav) {
    if (mainNav.classList.contains("open")) {
      mainNav.classList.remove("open");
      toggleMenu.classList.remove("open");
    }
  }
});

// select skills
let head = document.querySelector(".head-land");
let editor = document.querySelector(".editor");
let laptop = document.querySelector(".laptop");
let mobile = document.querySelector(".mobile");

window.onscroll = function () {
  //offset Top
  let headOffsetTop = head.offsetTop;
  console.log(headOffsetTop);
  let editorOffsetTop = editor.offsetTop;
  let lapOffsetTop = laptop.offsetTop;
  let mobOffsetTop = mobile.offsetTop;
  // outer height
  let headOuterHeight = head.offsetHeight;
  let editorOuterHeight = editor.offsetHeight;
  let lapOuterHeight = laptop.offsetHeight;
  let mobOuterHeight = mobile.offsetHeight;
  // window height
  let windowHeight = this.innerHeight;
  // window scroll top
  let windowScrollTop = this.pageYOffset;
  // windnow width
  let windowWidth = this.innerWidth;
  if (windowScrollTop > headOffsetTop + headOuterHeight - windowHeight) {
    console.log("herer");
    let editorMobile = document.querySelector(".editor .img .edit-mobile");
    if (windowWidth < 992) {
      editorMobile.style.right = "0";
    }
  }
  if (windowScrollTop > editorOffsetTop + editorOuterHeight - windowHeight) {
    let editorDesktop = document.querySelector(".editor .img .edit-desktop");
    let mobile = document.querySelector(".mobile .img img");
    if (windowWidth > 1400) {
      editorDesktop.style.right = "-250px";
    } else if (windowWidth > 1200) {
      editorDesktop.style.right = "-325px";
    } else if (windowWidth > 992) {
      editorDesktop.style.right = "-255px";
    } else {
      mobile.style.left = "0px";
    }
  }
  if (windowScrollTop > mobOffsetTop + mobOuterHeight - windowHeight) {
    let mobile = document.querySelector(".mobile .img img");
    let laptopMobile = document.querySelector(
      ".laptop .content .img .laptop-mobile"
    );
    if (windowWidth > 1400) {
      mobile.style.left = "0px";
    } else if (windowWidth > 1200) {
      mobile.style.left = "0px";
    } else if (windowWidth > 992) {
      mobile.style.left = "0px";
    } else {
      laptopMobile.style.right = "0";
    }
  }
  if (windowScrollTop > lapOffsetTop + lapOuterHeight - windowHeight) {
    console.log("here");
    let laptopDesktop = document.querySelector(
      ".laptop .content .img .laptop-desktop"
    );
    if (windowWidth > 1400) {
      laptopDesktop.style.left = "-295px";
    } else if (windowWidth > 1200) {
      laptopDesktop.style.left = "-324px";
    } else if (windowWidth > 992) {
      laptopDesktop.style.left = "-215px";
    }
  }
};

//create funcion Scroll to section
function ScrollToSection(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", (ele) => {
      ele.preventDefault();
      document
        .querySelector(ele.target.dataset.section)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}
