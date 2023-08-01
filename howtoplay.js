// Carrusel for summoner's rift game modes
let gamemodes = {
  // Blind pick
  0: {
    "video-url": "video/blind-pick.mp4",
    text: "'Blind Pick' in League of Legends is a casual mode where players select their champions simultaneously, unaware of the enemy's choices. This can lead to identical champions on both teams. There's no banning phase, so all champions are available. It's perfect for testing new characters or for those seeking a quick game start.",
  },

  // Draft pick
  1: {
    "video-url": "video/draft-pick.mp4",
    text: "'Draft Pick' is a mode in League of Legends where teams take turns selecting and banning champions, adding a layer of strategy before the game starts. Each team can ban champions they don't want to face. The selection phase happens in a set order, preventing mirror matchups. 'Draft Pick' is perfect for players seeking a balanced game with strategic pre-game planning.",
  },

  // Ranked solo/duo
  2: {
    "video-url": "video/draft-pick",
    text: "In 'Ranked Solo/Duo', the game begins with a banning phase, followed by a turn-based champion selection, allowing strategic picks based on your team and the enemy's composition. Players choose primary and secondary roles (Top, Mid, Bot, Support, Jungle), for a more organized team setup. Post selection, the game commences on 'Summoner’s Rift', where teams compete to destroy the enemy's nexus. Performance in these matches affects your rank, making it a more competitive mode.",
  },

  // Ranked flex
  3: {
    "video-url": "video/draft-pick",
    text: "'Ranked Flex' allows you to play ranked games with any number of companions, from solo up to a full team of five. Like 'Ranked Solo/Duo', it follows a ban and draft champion selection process. Players can choose their roles for a more structured game. It’s an excellent choice for teams seeking coordinated gameplay and strategy on 'Summoner’s Rift', where the goal is to destroy the enemy's nexus, with your performance affecting your flex queue ranking.",
  },
};

let currentGameModeIndex = 0;

let gameModeLinks = document.querySelectorAll(".game-mode-link");
gameModeLinks.forEach((gameModeLink) => {
  gameModeLink.addEventListener("click", function () {
    let index = gameModeLink.getAttribute("data-index");
    currentGameModeIndex = parseInt(index);
    changeGameModeGuide();
    gameModeLinks.forEach((gameModeLink) => { 
        gameModeLink.classList.remove("active")
    })
    gameModeLink.classList.add("active")
  });
});

function changeGameModeGuide() {
  // Tager fat i elementer der skal bruges til at fremvise video og tekst
  let video = document.querySelector("#game-mode-video");
  let text = document.querySelector("#summoner-rift-gamemode-carrusel-text");

  // Sætter video til at fremvise valgt video
  video.src = gamemodes[currentGameModeIndex]["video-url"];

  // Sætter text
  text.textContent = gamemodes[currentGameModeIndex]["text"];

  // Gør klar til fremvisning af næste billede
  currentGameModeIndex = (currentGameModeIndex + 1) % 4;
}

changeGameModeGuide();
