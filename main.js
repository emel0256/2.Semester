// Billeder, tekst og redirect links til forside karrusel 
const images = {
    0: {
        "image-url": "img/jaxframe.png", 
        "headline": "CONQUER TOP LANE", 
        "description": "Where the tough go solo and battles are a one-man show",
        "redirect-link": "top.html"
    },
    1: {
        "image-url": "img/leesinframe.png", 
        "headline": "DOMINATE JUNGLE", 
        "description": "Keep your teammates safe and dominate jungle. Be your own assasin in the dark",
        "redirect-link": "jungle.html"
    },
    2: {
        "image-url": "img/ahriframe.png", 
        "headline": "DESTROY MID LANE", 
        "description": "Be both guardian and assassin, protect your team while striking fear into your enemies",
        "redirect-link": "mid.html"
    },
    3: {
        "image-url": "img/mfframe.png", 
        "headline": "CARRY BOT LANE", 
        "description": "Wield the art of marksmanship to become an unstoppable force and carry your team",
        "redirect-link": "adc.html"
    },
    4: {
        "image-url": "img/blitzframe.png", 
        "headline": "Support your team", 
        "description": "Empower allies and ensure victory through strategic assistance and protection",
        "redirect-link": "support.html"
    }
};

// Indexering af fremvisning af billede
let currentImageIndex = 0;

// Funktionalitet til at skifte mellem billederne i karrusellen 
function changeImage() {
    // Tager fat i elementer der skal bruges til at fremvise billede og tekst
    let mainImage = document.querySelector('#main-image');
    let linje1 = document.querySelector('#linje1');
    let linje2 = document.querySelector('#linje2');
    let redirectButton = document.querySelector("#learn-more-button")

    // Sætter billedet til at fremvise valgt billede
    mainImage.src = images[currentImageIndex]["image-url"];

    // Sætter headline og description tekst
    linje1.textContent = images[currentImageIndex]["headline"]
    linje2.textContent = images[currentImageIndex]["description"]
    
    // Sætter redirect link 
    redirectButton.setAttribute("href", images[currentImageIndex]["redirect-link"])

    // Gør klar til fremvisning af næste billede
    currentImageIndex = (currentImageIndex + 1) % 5;
}


let thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        let index = thumbnail.getAttribute("data-index")
        currentImageIndex = parseInt(index)
        changeImage()
    });
});

// Starter rotation af karrusellen, så den viser det første billede
changeImage()

// Skifter billdet hvert 4 sekund
setInterval(changeImage, 4000);

