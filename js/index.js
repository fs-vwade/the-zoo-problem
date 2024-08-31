// Copyright Victor Wade 2024
/**
 * This subsection aims to automate the repetitive sections of the project.
 */

/** Moved function to its own file.
 */
import { create_article } from "./create_article.js"; // Using import instead of require

/** Animal as a class (OOP/DRY)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
class Animal {
	constructor(species, image, names, info) {
		this.species = String(
			String(species).slice(0, 1) + String(species).toLowerCase().slice(1)
		);
		this.image = String(image);
		this.names = names; /** An array of strings of animals' names */
		this.info = String(info); /* A link to the animal info page */
	}

	get species_name() {
		return this.species;
	}

	get img_url() {
		return this.image;
	}

	get all_names() {
		return this.names;
	}

	get info_link() {
		return this.info;
	}

	add_animal(new_name) {
		this.names.push(new_name);
	}

	udpate_image(new_url) {
		this.image = new_url;
	}

	udpate_info(new_url) {
		this.info = new_url;
	}
}

const animals = [
	new Animal(
		"Bears",
		"images/bears.svg",
		["Ollie", "Mona"],
		"pages/bear_facts.html"
	),
	new Animal(
		"Lions",
		"images/lions.svg",
		["Mella", "Karl"],
		"pages/lion_facts.html"
	),
	new Animal(
		"Monkeys",
		"images/monkeys.svg",
		["Cookie", "Earl", "Banana Pudding"],
		"pages/monkey_facts.html"
	),
	new Animal(
		"Giraffes",
		"images/giraffes.svg",
		["Frankie", "Coconut"],
		"pages/giraffe_facts.html"
	),
	new Animal(
		"Alligators",
		"images/alligators.svg",
		["Wren", "Aspen", "Mika"],
		"pages/alligator_facts.html"
	),
];

const body = document.body;
const animal_table = document.createElement("div");
const animal_table_header = document.createElement("h1");
const article_container = document.createElement("div");

animal_table_header.innerText = "Zoo Animals";
animal_table.className = "animal-table";
article_container.className = "article-container";

animal_table.append(animal_table_header);
animal_table.append(article_container);

animals.forEach((animal) => {
	article_container.append(create_article(animal));
});

body.append(animal_table);
