/* function closeNotification() {
	const bar = document.querySelector("#notif-bar");

	bar.classList.add("closed");
	setTimeout(function() {
		bar.remove();
	}, 500);
} */

/* let x = 1;
let wendy = 42.7;
const tacos = [x, wendy, "Zut, c'est embêtant."];
function mangerLeTacos(prix) {
	if (prix == undefined) return console.log("Bah... Et le prix ?!");
	console.log("Miam miam, cela m'a coûté", prix, "€.")
} */

/* let a = 2,
	b = 3,
	c = a + b; */
// c += 4;
// c++;
// c--;
// c /= 5;
// c *= 3;
// c **= 2;
// % : modulo (reste)


/* Ca c'est pas très très beau :
function bonjour(nom) {
	console.log("Bonjour", nom)
}
function f() {
	console.log("Vous avez passé", arguments.length, "paramètres.")
}
f(8, 9, true, false, "pitoufeu", []) */

/* Ca c'est joli :
function renvoyerLaSomme(a,b) {
	const somme = a + b;
	return somme;
}
let test = renvoyerLaSomme(4,8)
console.log(test) */


// camelCase
// PascalCase
// snake_case
// SCREAMING_SNAKE_CASE


/* let test = 2;
let chaineDeCaracteres = "Ce que tu veux. ;)";
let chaineDeCaracteres2 = 'Poutou';
const tableau = [3, 8, 2, 5];
const index = 1;
console.log(tableau.length)
let eude = {
	firstName: "Eeeude",
	lastName: chaineDeCaracteres2,
	parents: "Camille & Caroline",
	age: 15,
	faireUneCriseDAdo: function() {
		console.log(this.firstName + " fait une crise d'adooo !!!")
	}
}
console.log(eude.faireUneCriseDAdo()) */

/* const menus = [
	{
		id: 1,
		name: "Colombo de poulet",
		description: "Hmm... Un VRAI REGAL !!!",
		price: 19.99,
	}, {
		id: 2,
		name: "Samossas",
		description: "Triangle constitué de farce",
		price: 7.99,
	},
];

for (let i = 0; i < menus.length; i++) {
	console.log(`${menus[i].name} - ${menus[i].description}`);
} */