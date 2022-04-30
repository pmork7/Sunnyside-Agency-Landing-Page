let linkItems = document.getElementById("links-list").children;
let linksList = document.getElementById("links-list");
let yellowUnderline = document.getElementById("yellow-underline");
let redUnderline = document.getElementById("red-underline");
let squareLinks = document.getElementsByClassName("square-link");
let redSquareLink = squareLinks[0];
let yellowSquareLink = squareLinks[1];
let orangeHalf = document.getElementById("orange-half");
let navBar = document.getElementById("top-nav");
let centerBody = document.getElementById("center-body");
let arrowIcon = document.getElementById("arrow-icon");
let logoImg = document.getElementById("logo-img");
let topBg = document.getElementById("top-bg");
let mobileMenu = document.getElementById("mobile-menu");
let toggleButton = document.getElementById("toggle");
let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let sq2img = square2.children[0];
let square3 = document.getElementById("square3");
let sq3img = square3.children[0];
let square4 = document.getElementById("square4");
let square5 = document.getElementById("square5");
let sq5img = square5.children[0];
let square6 = document.getElementById("square6");
let sq6img = square6.children[0];
let testimonial = document.getElementById("testimonial");
let fourpictures = document.getElementById("four-pictures");
let footer = document.getElementById("footer");
let squareLinkContainers = document.getElementsByClassName("square-link-container");
let testimonialCardContainer = document.getElementById("t-card-container");
let picture1 = document.getElementById("picture1");
let picture2 = document.getElementById("picture2");
let picture3 = document.getElementById("picture3");
let picture4 = document.getElementById("picture4");
let pictureCards = [picture1, picture2, picture3, picture4];
let picturesContainer = document.getElementById("pictures-container");
let footerNav = document.getElementById("footer-nav");
let socialMediaList = document.getElementById("social-media-list");


let x = window.matchMedia("(max-width: 375px)");


function clearColors() {
  let i = 0;
  for (i = 0; i < linkItems.length; i++) {
    if (linkItems[i].style.backgroundColor = "--var(white)") {
      linkItems[i].style.backgroundColor = "";
      linkItems[i].style.color = "";
    }
  }
}

let i = 0;
for (i = 0; i < linkItems.length; i++) {
  linkItems[i].addEventListener("click", function() {
    clearColors();
    if (this.classList[0] === "link-items-desktop") {
      this.style.backgroundColor = "var(--white)";
      this.style.color = "black";
    } else {
      this.style.backgroundColor = "hsl(51, 100%, 49%)";
      this.style.color = "black";
    }
  })
}

for (i = 0; i < squareLinks.length; i++) {
  squareLinks[i].addEventListener("mouseover", function() {
    this.parentElement.children[1].classList.add("full-opacity");
    this.parentElement.children[1].classList.remove("partial-opacity");
  })

  squareLinks[i].addEventListener("mouseout", function() {
    this.parentElement.children[1].classList.add("partial-opacity");
    this.parentElement.children[1].classList.remove("full-opacity");
    });
}

function swapImages(x) {
  if (x.matches) {
    document.body.classList.remove("body-desktop");
    document.body.classList.add("body-mobile");
    topBg.src = "images/mobile/image-header.jpg";
    topBg.classList.add("orange-half-mobile");
    topBg.classList.remove("orange-half-desktop")
    navBar.classList.remove("nav-style-desktop");
    navBar.classList.add("nav-style-mobile");
    orangeHalf.classList.remove("orange-half-desktop");
    orangeHalf.classList.add("orange-half-mobile");
    centerBody.classList.remove("center-body-desktop");
    centerBody.classList.add("center-body-mobile");
    arrowIcon.classList.remove("arrow-desktop");
    arrowIcon.classList.add("arrow-mobile");
    for (let i = 0; i < linkItems.length; i++) {
      linkItems[i].classList.remove("link-items-desktop");
      linkItems[i].classList.add("link-items-mobile");
    }
    linksList.classList.remove("links-desktop");
    linksList.classList.add("links-mobile");
    navBar.removeChild(linksList);
    mobileMenu.appendChild(linksList);
    toggle.classList.remove("toggle-hidden");
    toggle.classList.add("toggle-visible");
    toggle.addEventListener("click", function() {
      if (mobileMenu.classList[0] === "menu-mobile-visible") {
        mobileMenu.classList.remove("menu-mobile-visible");
        mobileMenu.classList.add("menu-mobile-invisible");
      } else {
        mobileMenu.classList.remove("menu-mobile-invisible");
        mobileMenu.classList.add("menu-mobile-visible");
      }
    })
    logoImg.classList.remove("nav-style-desktop");
    logoImg.classList.add("nav-style-mobile");

    //Remove desktop class from squares, add mobile classes to squares
    square1.classList.remove("square-desktop");
    square1.classList.add("square-mobile");
    square1.children[0].classList.remove("bg-writing-desktop");
    square1.children[0].classList.add("bg-writing-mobile");
    square1.children[1].classList.remove("sm-writing-desktop");
    square1.children[1].classList.add("sm-writing-mobile");
    square2.classList.remove("square-desktop");
    square2.classList.add("square-mobile");
    sq2img.src = "images/mobile/image-transform.jpg";
    square3.classList.remove("square-desktop");
    square3.classList.add("square-mobile");
    sq3img.src = "images/mobile/image-stand-out.jpg"
    square4.classList.remove("square-desktop");
    square4.classList.add("square-mobile");
    square4.children[0].classList.remove("bg-writing-desktop");
    square4.children[0].classList.add("bg-writing-mobile");
    square4.children[1].classList.remove("sm-writing-desktop");
    square4.children[1].classList.add("sm-writing-mobile");
    square5.classList.remove("square-desktop");
    square5.classList.add("square-mobile");
    sq5img.src = "images/mobile/image-graphic-design.jpg"
    square5.children[1].classList.remove("bg-writing-desktop");
    square5.children[1].classList.add("bg-writing-mobile");
    square5.children[2].classList.remove("sm-writing-desktop");
    square5.children[2].classList.add("sm-writing-mobile");
    square6.classList.remove("square-desktop");
    square6.classList.add("square-mobile");
    sq6img.src = "images/mobile/image-photography.jpg";
    square6.children[1].classList.remove("bg-writing-desktop");
    square6.children[1].classList.add("bg-writing-mobile");
    square6.children[2].classList.remove("sm-writing-desktop");
    square6.children[2].classList.add("sm-writing-mobile");
    testimonial.classList.remove("testimonial-desktop");
    testimonial.classList.add("testimonial-mobile");
    fourpictures.classList.remove("four-pictures-desktop");
    fourpictures.classList.add("four-pictures-mobile");
    footer.classList.remove("footer-style-desktop");
    footer.classList.add("footer-style-mobile");
    for (let i = 0; i < squareLinkContainers.length; i++) {
      squareLinkContainers[i].classList.remove("square-link-container-desktop");
      squareLinkContainers[i].classList.add("square-link-container-mobile");
    }
    testimonialCardContainer.classList.remove("testimonial-cards-container-desktop");
    testimonialCardContainer.classList.add("testimonial-cards-container-mobile");
    for (let i = 0; i < testimonialCardContainer.children.length; i++) {
      testimonialCardContainer.children[i].classList.remove("testimonial-card-desktop");
      testimonialCardContainer.children[i].classList.add("testimonial-card-mobile");
      testimonialCardContainer.children[i].children[1].classList.remove("testimonial-text-desktop");
      testimonialCardContainer.children[i].children[1].classList.add("testimonial-text-mobile");
    }
    picture1.src = "images/mobile/image-gallery-milkbottles.jpg";
    picture2.src = "images/mobile/image-gallery-orange.jpg";
    picture3.src = "images/mobile/image-gallery-cone.jpg";
    picture4.src = "images/mobile/image-gallery-sugar-cubes.jpg";
    for (let i = 0; i < pictureCards.length; i++) {
      pictureCards[i].classList.remove("picture-card-desktop");
      pictureCards[i].classList.add("picture-card-mobile");
    }
    picturesContainer.classList.remove("pictures-container-desktop");
    picturesContainer.classList.add("pictures-container-mobile");
    footerNav.classList.remove("footer-nav-desktop");
    footerNav.classList.add("footer-nav-mobile");
    socialMediaList.classList.remove("social-media-list-desktop");
    socialMediaList.classList.add("social-media-list-mobile");
  } else {
    document.body.classList.remove("body-mobile");
    document.body.classList.add("body-desktop");
    topBg.src = "images/desktop/image-header.jpg";
    topBg.classList.add("orange-half-desktop");
    topBg.classList.remove("orange-half-mobile")
    navBar.classList.remove("nav-style-mobile");
    navBar.classList.add("nav-style-desktop");
    orangeHalf.classList.remove("orange-half-mobile");
    orangeHalf.classList.add("orange-half-desktop");
    centerBody.classList.remove("center-body-mobile");
    centerBody.classList.add("center-body-desktop");
    arrowIcon.classList.remove("arrow-mobile");
    arrowIcon.classList.add("arrow-desktop");
    for (let i = 0; i < linkItems.length; i++) {
      linkItems[i].classList.remove("link-items-mobile");
      linkItems[i].classList.add("link-items-desktop");
    }
    linksList.classList.remove("links-mobile");
    linksList.classList.add("links-desktop");
    mobileMenu.removeChild(linksList);
    navBar.appendChild(linksList);
    toggle.classList.add("toggle-hidden");
    toggle.classList.remove("toggle-visible");
    toggle.addEventListener("click", function() {
      if (mobileMenu.classList[0] === "menu-mobile-visible") {
        mobileMenu.classList.remove("menu-mobile-visible");
        mobileMenu.classList.add("menu-mobile-invisible");
      } else {
        mobileMenu.classList.remove("menu-mobile-invisible");
        mobileMenu.classList.add("menu-mobile-visible");
      }
    })
    logoImg.classList.remove("nav-style-mobile");
    logoImg.classList.add("nav-style-desktop");

    //Remove desktop class from squares, add mobile classes to squares
    square1.classList.remove("square-mobile");
    square1.classList.add("square-desktop");
    square1.children[0].classList.remove("bg-writing-mobile");
    square1.children[0].classList.add("bg-writing-desktop");
    square1.children[1].classList.remove("sm-writing-mobile");
    square1.children[1].classList.add("sm-writing-desktop");
    square2.classList.remove("square-mobile");
    square2.classList.add("square-desktop");
    sq2img.src = "images/desktop/image-transform.jpg";
    square3.classList.remove("square-mobile");
    square3.classList.add("square-desktop");
    sq3img.src = "images/desktop/image-stand-out.jpg"
    square4.classList.remove("square-mobile");
    square4.classList.add("square-desktop");
    square4.children[0].classList.remove("bg-writing-mobile");
    square4.children[0].classList.add("bg-writing-desktop");
    square4.children[1].classList.remove("sm-writing-mobile");
    square4.children[1].classList.add("sm-writing-desktop");
    square5.classList.remove("square-mobile");
    square5.classList.add("square-desktop");
    sq5img.src = "images/desktop/image-graphic-design.jpg"
    square5.children[1].classList.remove("bg-writing-mobile");
    square5.children[1].classList.add("bg-writing-desktop");
    square5.children[2].classList.remove("sm-writing-mobile");
    square5.children[2].classList.add("sm-writing-desktop");
    square6.classList.remove("square-mobile");
    square6.classList.add("square-desktop");
    sq6img.src = "images/desktop/image-photography.jpg";
    square6.children[1].classList.remove("bg-writing-mobile");
    square6.children[1].classList.add("bg-writing-desktop");
    square6.children[2].classList.remove("sm-writing-mobile");
    square6.children[2].classList.add("sm-writing-desktop");
    testimonial.classList.remove("testimonial-mobile");
    testimonial.classList.add("testimonial-desktop");
    fourpictures.classList.remove("four-pictures-mobile");
    fourpictures.classList.add("four-pictures-desktop");
    footer.classList.remove("footer-style-mobile");
    footer.classList.add("footer-style-desktop");
    for (let i = 0; i < squareLinkContainers.length; i++) {
      squareLinkContainers[i].classList.remove("square-link-container-mobile");
      squareLinkContainers[i].classList.add("square-link-container-desktop");
    }
    testimonialCardContainer.classList.remove("testimonial-cards-container-mobile");
    testimonialCardContainer.classList.add("testimonial-cards-container-desktop");
    for (let i = 0; i < testimonialCardContainer.children.length; i++) {
      testimonialCardContainer.children[i].classList.remove("testimonial-card-mobile");
      testimonialCardContainer.children[i].classList.add("testimonial-card-desktop");
      testimonialCardContainer.children[i].children[1].classList.remove("testimonial-text-mobile");
      testimonialCardContainer.children[i].children[1].classList.add("testimonial-text-desktop");
    }
    picture1.src = "images/desktop/image-gallery-milkbottles.jpg";
    picture2.src = "images/desktop/image-gallery-orange.jpg";
    picture3.src = "images/desktop/image-gallery-cone.jpg";
    picture4.src = "images/desktop/image-gallery-sugarcubes.jpg";
    for (let i = 0; i < pictureCards.length; i++) {
      pictureCards[i].classList.remove("picture-card-mobile");
      pictureCards[i].classList.add("picture-card-desktop");
    }
    picturesContainer.classList.remove("pictures-container-mobile");
    picturesContainer.classList.add("pictures-container-desktop");
    footerNav.classList.remove("footer-nav-mobile");
    footerNav.classList.add("footer-nav-desktop");
    socialMediaList.classList.remove("social-media-list-mobile");
    socialMediaList.classList.add("social-media-list-desktop");
  }
}

swapImages(x);
x.addListener(swapImages);
