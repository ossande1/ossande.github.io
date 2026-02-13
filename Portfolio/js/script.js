// script.js - module om html bestanden in te laden
// geschikt voor header, footer en menu
// functie laadt een html bestand en zet het in de pagina
function load_html_file(file_name, element_id) {
// zoek het element waar de html in moet komen
const element = document.getElementById(element_id);
// als het element niet bestaat, stop dan
if (!element) {
console.error('element met id "' + element_id + '" niet gevonden');
return;
}
// laad het html bestand
fetch(file_name)
.then(function(response) {
// controleer of het laden gelukt is
if (!response.ok) {
throw new Error('bestand niet gevonden: ' + file_name);
}
return response.text();
})
.then(function(html) {
// zet de html in het element
element.innerHTML = html;
})
.catch(function(error) {
// als er iets fout gaat, toon een foutmelding
console.error('fout bij laden van ' + file_name + ':', error);
element.innerHTML = '<p style="color: red;">fout: bestand konniet worden geladen</p>';
});
}
// wacht tot de pagina volledig geladen is
document.addEventListener('DOMContentLoaded', function() {
// laad de header als er een element met id="header-plaats" bestaat
if (document.getElementById('header-plaats')) {
load_html_file('header.html', 'header-plaats');
}
// laad het menu als er een element met id="menu-plaats" bestaat
if (document.getElementById('menu-plaats')) {
load_html_file('menu.html', 'menu-plaats');
}
// laad de footer als er een element met id="footer-plaats" bestaat
if (document.getElementById('footer-plaats')) {
load_html_file('footer.html', 'footer-plaats');
}
});


// wacht tot de pagina volledig geladen is


/* menu */

/* header */
  
    /* Timer */

let tijd = 1500;

let timer;

function formatTijd(seconden) {
  let min = Math.floor(seconden / 60);
  let sec = seconden % 60;
  if (sec < 10) sec = "0" + sec;
  return min + ":" + sec;
}

function update() {
  let display = document.getElementById("timers");
  display.innerHTML = formatTijd(tijd);
}

function end() {
  tijd--;
  update();
  
  if (tijd === 0) {
    clearInterval(timer);
    alert("Klaar!");
    document.querySelector("body").style.backgroundColor = "green"
  }
}

timer = setInterval(end, 1000);

    /* Light en Dark mode */

function lightmode(){
    document.body.style.backgroundColor = "rgb(255, 142, 142)";
    document.body.style.color = "black";
	document.getElementById("sun").style.display = "block";
	document.getElementById("moon").style.display = "none";
}

function darkmode(){
    document.body.style.backgroundColor = "rgb(96, 44, 44)";
	document.getElementById("moon").style.display = "block";
	document.getElementById("sun").style.display = "none";
}

/* Reclame pop-up */
const popUp = document.getElementById("advertentiePopUp");
const sluitKnop = document.getElementById("sluitKnop");
const doneerTekstKnop = document.getElementById("doneerTekstKnop");

// 1. Functie om de pop-up te tonen
function toonPopUp() {
  popUp.style.display = "block";
}

// 2. Functie om de pop-up te sluiten

function verbergPopUp() {
    popUp.style.display = "none";
}

if (sluitKnop) { // Check of de knop echt bestaat op deze pagina
    sluitKnop.addEventListener("click", verbergPopUp);
}

if (doneerTekstKnop) {
    doneerTekstKnop.addEventListener("click", verbergPopUp);
}


// 3. De timing instellen (elke 3 minuten)
setInterval(toonPopUp, 180000);


/* footer */

/* homepage */

/* doelstelling */

/* maatchappelijk probleem */

/* tabel oppervlakte */

/* school systeem */

/* religions */

/* formulier vrijwilliger */

let counter = 50;

document.getElementById("amount").innerHTML = counter;

function doemee() {

    let amountElement = document.getElementById("amount");

    if (counter > 0) {
        counter--;
    }

    if (amountElement) {
        amountElement.textContent = counter;
    }

    alert("Dank je wel! Nog " + counter + " vrijwilligers om het volgende doel te bereiken.");
}



/* donatieformulier */


const goal = 10000;
let current = 3500;

const bar = document.getElementById("progressBar");
const amountText = document.getElementById("currentAmount");
const percentText = document.getElementById("percentage");
const form = document.getElementById("donationForm");
const input = document.getElementById("donationInput");

function updateProgressBar() {

    
    let percentText = (current / goal) * 100;

    
    if (percentText > 100) {
        percentText = 100;
    }

    
    bar.style.width = percentText + "%";
    amountText.innerHTML = current;
    percentText.innerHTML = Math.round(percentText);
}



if (form) { 
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        
        
        let donation = Number(input.value);

        
        current = current + donation;

        
        updateProgressBar();
    });
}


window.onload = function () {
    setTimeout(updateProgressBar, 500);
};

updateProgressBar();

/* overzichtgoedendoelen */

/* Begroting en financiering */

document.addEventListener('DOMContentLoaded', function() {
	
	// laad de header als er een element met id="header-plaats" bestaat
	if (document.getElementById('header-plaats')) {
		load_html_file('/html/header.html', 'header-plaats');
	}
	
	// laad het menu als er een element met id="menu-plaats" bestaat
	if (document.getElementById('menu-plaats')) {
		load_html_file('/html/menu.html', 'menu-plaats');
	}
	
	// laad de footer als er een element met id="footer-plaats" bestaat
	if (document.getElementById('footer-plaats')) {
		load_html_file('/html/footer.html', 'footer-plaats');
	}
	
});

/* Quiz over goede doelen */

// --- QUIZ START ---
const quizVragen = [
    { v: "Wat doet Fondation Zakoura?", a: ["Noodhulp", "Basis-educatie", "Sport"], c: 1 },
    { v: "Wie helpt straatkinderen?", a: ["Association Bayti", "Oxfam", "Fondation OCP"], c: 0 },
    { v: "Wat doet de High Atlas Foundation?", a: ["Wegenbouw", "Agro-ecologie", "Bankieren"], c: 1 },
    { v: "EFA helpt meisjes uit...", a: ["De stad", "Het bos", "De bergen"], c: 2 },
    { v: "Wie doet medische campagnes?", a: ["Fondation Mohammed V", "Amnesty", "EFA"], c: 0 }
];

let qIndex = 0;
let qScore = 0;

function startDeQuiz() {
    const startScherm = document.getElementById("start-scherm");
    const quizBox = document.getElementById("quiz-box");
    
    if(startScherm && quizBox) {
        startScherm.style.display = "none";
        quizBox.style.display = "block";
        toonVraag();
    }
}

function toonVraag() {
    const item = quizVragen[qIndex];
    document.getElementById("vraag-tekst").innerText = item.v;
    const veld = document.getElementById("knoppen-veld");
    veld.innerHTML = ""; 

    item.a.forEach((tekst, i) => {
        const knop = document.createElement("button");
        knop.innerText = tekst;
        knop.className = "cta-button"; 
        knop.onclick = () => {
            if (i === item.c) {
                qScore++;
                knop.style.backgroundColor = "green";
            } else {
                knop.style.backgroundColor = "red";
            }
            setTimeout(volgendeVraag, 1000);
        };
        veld.appendChild(knop);
    });
}

function volgendeVraag() {
    qIndex++;
    if (qIndex < quizVragen.length) {
        toonVraag();
    } else {
        document.getElementById("quiz-box").innerHTML = `<h1>Score: ${qScore}/5</h1><button class="cta-button" onclick="location.reload()">Opnieuw</button>`;
    }
}

window.addEventListener("load", function() {
    const mijnStartBtn = document.getElementById("start-btn");
    const startScherm = document.getElementById("start-scherm");
    const quizBox = document.getElementById("quiz-box");

    if (mijnStartBtn) {
        mijnStartBtn.onclick = function() {
            if (startScherm && quizBox) {
                startScherm.style.display = "none";
                quizBox.style.display = "block";
                
                // Roep de functie aan die de eerste vraag laadt
                if (typeof toonVraag === "function") {
                    toonVraag();
                }
            }
        };
    }
});