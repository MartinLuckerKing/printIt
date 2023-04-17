import { slide } from './../javascript/slides.js';
import { dotSelected } from './../javascript/dotSelected.js';

/**
 * permet de choisir la variable du querySelector et d'activer les fonctions slide()
 * et dotSelected() sur un clic 
 * 
 * @param {string} arrow variable avec un querySelector()
 * @param {integer} direction ajoute une valeur a "index"
 */

export let arrow = (arrow, direction) => {
	arrow.addEventListener('click', function () {
		slide(direction);
		dotSelected();
	});
}

