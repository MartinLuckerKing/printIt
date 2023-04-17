import {slides} from "./../javascript/slidesArray.js";

/**
 * Détermine le nombre de point sur le slider par rapport a un tableau
 * le premier point sera toujours sélectionner avec la condition "if (i === 0)"
 * 
 * @return {integer} nombre d'élément par rapport a la taille de votre tableau
 */

export const dotNumber = () => {
  for (let i = 0; i < slides.length; i++) {
    const dotContainer = document.querySelector(".dots");
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) {
      dot.classList.add("dot_selected");
    }
    dotContainer.append(dot);
  }
};
