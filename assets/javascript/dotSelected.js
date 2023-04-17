import { index } from './../javascript/slides.js';

/**
 * Permet de suivre sur quel slide on se trouve.
 */

export let dotSelected = () => {
    const dots = document.querySelectorAll(".dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot_selected");
    }
    dots[index].classList.add("dot_selected");
    }