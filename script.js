let linkItems = document.getElementsByClassName("link-items");
let yellowUnderline = document.getElementById("yellow-underline");
let redUnderline = document.getElementById("red-underline");
let squareLinks = document.getElementsByClassName("square-link");
let redSquareLink = squareLinks[0];
let yellowSquareLink = squareLinks[1];

console.log(linkItems);

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
    this.style.backgroundColor = "var(--white)";
    this.style.color = "black";
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
