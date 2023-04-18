import {slides} from './../javascript/slidesArray.js';

/**
 * modifie l'index d'un tableau pour selectionner l'image et le texte souhaité
 * 
 * @param {integer} direction ajoute une valeur a "index"
 * @constant {string} arrowLeft querySelector()
 * @constant {string} arrowRight querySelector()
 */

export let index = 0;
export const arrowLeft = document.querySelector('.arrow_left');
export const arrowRight = document.querySelector('.arrow_right');

export const slide = (direction) => {

    const rootDir = "./assets/images/slideshow/";
    const images = document.querySelector(".banner-img");
    const tagLines = document.querySelector("#tagline");

    index += direction;
	
    if (index < 0) {
        index = slides.length - 1;
    } else if (index > slides.length - 1) {
        index = 0;
    }

    images.src = rootDir + slides[index].image;
    tagLines.innerHTML = slides[index].tagLine;
}
