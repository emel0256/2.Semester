// Carrusel for summoner's rift game modes
let wardingGuides = {
  // Stealth ward
  0: {
    "img-url": "..",
    title: "Stealth Ward",
    description:
      "A Stealth Ward in League of Legends is an invisible item that provides vision in a surrounding area, used to track enemy movements and secure objectives. It's placed using a Warding Totem or bought from the shop.",
    "img-url": "img/stealth.png",
  },

  // Sweaper
  1: {
    "img-url": "..",
    title: "Oracle Lens",
    description:
      "The Oracle Lens, also known as Sweeper's Lens, is a trinket in League of Legends. It's used to detect and disable invisible objects like enemy Stealth Wards, providing a way to deny the enemy team vision in certain areas.",
    "img-url": "img/redtrink.png",
  },

  // Blue trinket
  2: {
    "img-url": "..",
    title: "Farsight Alteration",
    description:
      "The Farsight Alteration, or Blue Trinket, in League of Legends is a long-range warding tool, allowing players to place a visible, indefinite ward from a distance, typically used for safely checking far or risky areas.",
    "img-url": "img/bluetrink.png",
  },
};

let currentWardingIndex = 0;

let wardingLinks = document.querySelectorAll(".carrusel-ward-link");
wardingLinks.forEach((wardingLink) => {
  wardingLink.addEventListener("click", function () {
    let index = wardingLink.getAttribute("data-index");
    changeWardingGuide(parseInt(index));

    //gameModeLinks.forEach((gameModeLink) => {
    //gameModeLink.classList.remove("active");
    //});
    //gameModeLink.classList.add("active");
  });
});

function changeWardingGuide(wardIndex) {
  let title = document.querySelector("#carrusel-warding-title");
  let text = document.querySelector("#carrusel-warding-text");
  let img = document.querySelector("#carrusel-warding-img");

  img.src = wardingGuides[wardIndex]["img-url"];

  // Sætter text
  title.textContent = wardingGuides[wardIndex]["title"];
  text.textContent = wardingGuides[wardIndex]["description"];
}

changeWardingGuide(0);

let flipText = {
  0: {
    text: "TODO",
  },
  1: {
    text: "TODO",
  },
};

let flipImage1State = false;
let flipImage2State = false;

function flipImageAnimate(imageIndex) {
  if (imageIndex == 0) {
    let img = document.querySelector("#flip-image-1");
    let text = document.querySelector("#flip-image-1-text");

    if (flipImage1State) {
      img.classList.remove("hide");
      text.classList.add("hide");
    } else {
      img.classList.add("hide");
      text.classList.remove("hide");
    }

    flipImage1State = !flipImage1State;
  } else {
    let img = document.querySelector("#flip-image-2");
    let text = document.querySelector("#flip-image-2-text");

    if (flipImage2State) {
      img.classList.remove("hide");
      text.classList.add("hide");
    } else {
      img.classList.add("hide");
      text.classList.remove("hide");
    }

    flipImage2State = !flipImage2State;
  }
}

let flipImages = document.querySelectorAll(".flip-image");
flipImages.forEach((flipImage) => {
  flipImage.addEventListener("click", function () {
    let index = flipImage.getAttribute("data-index");
    flipImageAnimate(parseInt(index));
  });
});
