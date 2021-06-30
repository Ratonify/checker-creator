console.log("Ready !");
window.addEventListener("load", () => {
	console.log("Hello world !");
});


const axeX = document.getElementById('numberX');
const axeY = document.getElementById('numberY');
const generate = document.getElementById('generate');
const damier = document.getElementById('damier');

generate.addEventListener('click', () => {
	generateGrid(axeX.value,axeY.value);
});

function checkValues() {
	/* Désactiver le bouton "Générer" si axeX ou axeY est vide */
	generate.disabled = (axeX.value === "" && axeY.value === "") || (axeX.value === "" || axeY.value === "") ? true : false;
}

function generateGrid(y,x) {
	/* Vider la div du damier (merci Leila !) */
	while (damier.firstChild) {
	    damier.firstChild.remove();
	}

	/* Largeur = Hauteur */
	let widthX = 100/y;

	/* DEBUT DE L'ESBROUFE */ 
	/* Récupérer les valeurs des couleurs */
	let colorX = $("#colorX").spectrum("get");
	let colorY = $("#colorY").spectrum("get");

	/* Création et injection d'une balise style */
	let style = document.createElement('style');
	style.innerText = `.color1 { background-color: ${colorX}; } .color2 { background-color: ${colorY}; } .widthX { width: ${widthX}%; }`;
	document.getElementsByTagName('head')[0].appendChild(style);
	/* FIN DE L'ESBROUFE */ 

	/* Définir un contour à l'ensemble du damier */
	damier.style.border = `thick solid ${colorX}`;

	/* Création du damier */
	/* Boucle de création des lignes */
	for (let i = 1; i <= x; i++) {
		let rows = document.createElement("DIV");
		rows.classList.add("row");
		rows.id = `r${i}`;
		damier.appendChild(rows);

		/* Boucle de création des colonnes */
		for (let j = 1; j <= y; j++) {
			let colums = document.createElement("DIV");

			/* Utilisation d'un ternaire à la place de IF...ELSE */
			i%2 && j%2 ? colums.classList.add("widthX", "color1") : 
			i%2 || j%2 ? colums.classList.add("widthX", "color2") : 
			colums.classList.add("widthX", "color1");

			/* Pour avoir de beaux carrés */
			colums.style.paddingTop = `${widthX}%`;

			colums.id = `c${i}${j}`;
			rows.appendChild(colums);
		}
	}

}