// Tableau

const arraySlides = [
	{
		image:"./assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image:"./assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image:"./assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image:"./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
// variables globales
const fleches = document.querySelectorAll(".arrow");
// console.log(fleches);//test ok
const divDots = document.querySelector(".dots"); // Sélection du conteneur HTML divDots
let i = 0; // incrémentation de l'index de l'img actuellement affichée

// écouteurs d'événements pour chaque flèche
fleches.forEach(function (arrow) {
	arrow.addEventListener('click', function (event)  {
		console.log(event.target.classList);//test ok
		// console.log(event.target.classList.contains('arrow_left') ? -1 : +1); //test ok
		const direction = event.target.classList.contains('arrow_left') ? -1 : +1; // détermine la direction en fonction de la classe de la flèche 
		direction === -1 ? prev() : next()  ; // appeller la fonction prev() si la direction est -1, sinon appeller next()
		// console.log(direction);//test ok 
	});
});

// fonction pour revenir à l'img d'avant
function prev() {
	i--;
	if (i < 0) {
		i = arraySlides.length - 1;// vérifié si c'est le début du carrousel, si oui, retourne à la dernière img
	}
	// console.log(prev);//test ok
	displaySlide(); // affiche l'img d'avant
	bulletsPts(); 
}

// fonction pour passer à l'img suivante
function next() {
	i++; 
	if (i >= arraySlides.length) {
		i = 0;// vérification pour savoir si c'est la fin du carrousel, si oui, revenir au début
	}
	// console.log(next);//test ok
	displaySlide(); // afficher l'img suivante
	bulletsPts(); 
}

// fonction pour afficher l'img à partir de son index dans le tableau
function displaySlide() {
    banner.querySelector(".banner-img").src = arraySlides[i].image; // mise à jour du nouveau chemin de l'img dans la bannière/redirection...
    banner.querySelector("p").innerHTML = arraySlides[i].tagLine; // mise en corrélation du texte & de l'img dans la bannière
}

// fonction pour créer les bulletsPts suivant la taille du tableau + 4 éléments span
function createDots() {
	arraySlides.forEach(function() {
		const dot = document.createElement("span"); // crée un nouvel élément span pour chaque bulletPt
		dot.classList.add("dot"); // ajout de la classe "dot" vu en CSS
		divDots.appendChild(dot); // ajout du bulletPt au conteneur (divDots)
	});
	
	bulletsPts(); //mise à jour des bulletPts 
}
// fonction pour la mise en place des bulletsPts
function bulletsPts() {
    const dots = divDots.querySelectorAll(".dot"); // trouve tous les bulletsPts (.dot vu en CSS).dot
    dots.forEach(function (dot, index) {
        dot.classList.toggle("dot_selected", index == i); // ajoute ou supprime la classe "dot_selected" vu dans le CSS selon l'index de l'img actuelle grâce à la propriété toggle
    });
}

createDots(); //affichage des bulletsPts à l'endroit voulu


