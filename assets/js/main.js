function closeNotification() {
	const bar = document.querySelector("#notif-bar");

	bar.classList.add("closed");
	setTimeout(function() {
		bar.remove();
	}, 500);
}

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