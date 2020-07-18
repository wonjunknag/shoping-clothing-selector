"use strict";
window.onload = () => {
  clothesListAdd();
};

// clothes Class
class Clothes {
  constructor(img, gender, size) {
    this.img = img;
    this.gender = gender;
    this.size = size;
  }
}

// clothes blue Array
const clothesBlue = [
  new Clothes("blue_t", "men", "small size"),
  new Clothes("blue_p", "men", "small size"),
  new Clothes("blue_s", "men", "small size"),
  new Clothes("blue_t", "female", "small size"),
  new Clothes("blue_p", "female", "small size"),
  new Clothes("blue_s", "female", "small size"),
];
// clothes yellow Array
const clothesYellow = [
  new Clothes("yellow_t", "men", "small size"),
  new Clothes("yellow_p", "men", "small size"),
  new Clothes("yellow_s", "men", "small size"),
  new Clothes("yellow_t", "female", "small size"),
  new Clothes("yellow_p", "female", "small size"),
  new Clothes("yellow_s", "female", "small size"),
];
// clothes pink Array
const clothesPink = [
  new Clothes("pink_t", "men", "small size"),
  new Clothes("pink_p", "men", "small size"),
  new Clothes("pink_s", "men", "small size"),
  new Clothes("pink_t", "female", "small size"),
  new Clothes("pink_p", "female", "small size"),
  new Clothes("pink_s", "female", "small size"),
];

// all clothesList Array Random
const clothesListArrayRandom = () =>
  clothesBlue
    .concat(clothesPink, clothesYellow)
    .sort((a, b) => 0.5 - Math.random());

// all clothesList Array
const clothesListArray = () => clothesBlue.concat(clothesPink, clothesYellow);

// clothesList HTML Add
const mainSelector = document.querySelector(".main");
const clothesListAdd = () => {
  for (let clothes of clothesListArrayRandom()) {
    mainSelector.innerHTML += `
    <div class="main__items">
        <span class="main__item--img"
       ><img src="images/${clothes.img}.png" alt=""
     /></span>
      <span class="main__item--gender">${clothes.gender}</span>
      <span class="main__item--division">,</span>
      <span class="main__item--size">${clothes.size}</span>
    </div>
    `;
  }
};

// btn event const
const blue = document.querySelector(".navbar__right > button:nth-child(1)");
const yellow = document.querySelector(".navbar__right > button:nth-child(2)");
const pink = document.querySelector(".navbar__right > button:nth-child(3)");
const shirt = document.querySelector(".navbar__left > img:nth-child(1)");
const pants = document.querySelector(".navbar__left > img:nth-child(2)");
const skirt = document.querySelector(".navbar__left > img:nth-child(3)");

// click clothes function
const clothesClick = (target, Array) => {
  target.addEventListener("click", () => {
    changeClothes(Array);
  });
};

// clothes click Event
clothesClick(blue, clothesBlue);
clothesClick(yellow, clothesYellow);
clothesClick(pink, clothesPink);

// hum... function(target, Arrary)  two value result return ok!
const changeClothes = (array) => {
  mainSelector.innerHTML = "";
  for (let clothes of array) {
    mainSelector.innerHTML += `
        <div class="main__items">
            <span class="main__item--img"
           ><img src="images/${clothes.img}.png" alt=""
         /></span>
          <span class="main__item--gender">${clothes.gender}</span>
          <span class="main__item--division">,</span>
          <span class="main__item--size">${clothes.size}</span>
        </div>
        `;
  }
};

// clothesList clothing array
const clothesShirt = clothesListArray().filter((clothes) =>
  clothes.img.includes("_t")
);
const clothesPants = clothesListArray().filter((clothes) =>
  clothes.img.includes("_p")
);
const clothesSkirt = clothesListArray().filter((clothes) =>
  clothes.img.includes("_s")
);

// clothesList clothing array funciton

// clothing Kinds Event
clothesClick(shirt, clothesShirt);
clothesClick(pants, clothesPants);
clothesClick(skirt, clothesSkirt);
