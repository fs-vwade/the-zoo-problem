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
	constructor(species, image, names, info, summary) {
		this.species = String(
			String(species).slice(0, 1) + String(species).toLowerCase().slice(1)
		);
		this.image = String(image);
		this.names = names; /** An array of strings of animals' names */
		this.info = String(info); /* A link to the animal info page */
		this.summary = summary;
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
		"pages/bear_facts.html",
		"Deep within the ancient forests, bears roam with a quiet grace. Their sturdy frames and thick fur evoke a sense of rugged wilderness. Through the lens of vintage photography, bears are seen as gentle giants, embodying both the tranquility and raw power of nature’s untamed beauty."
	),
	new Animal(
		"Lions",
		"images/lions.svg",
		["Mella", "Karl"],
		"pages/lion_facts.html",
		"In the golden savannas, where the sun casts long shadows, the lion reigns supreme. With a mane that flows like a regal crown, this majestic creature embodies strength and nobility. Vintage photographs capture the lion’s piercing gaze and powerful stance, a timeless symbol of courage and leadership."
	),
	new Animal(
		"Monkeys",
		"images/monkeys.svg",
		["Cookie", "Earl", "Banana Pudding"],
		"pages/monkey_facts.html",
		"Among the lush canopies of tropical jungles, monkeys swing with playful agility. Their curious eyes and nimble fingers are a testament to their intelligence and adaptability. Captured in minimalist themes, monkeys appear as lively silhouettes against the backdrop of verdant foliage, a reminder of the joy and wonder of the natural world."
	),
	new Animal(
		"Giraffes",
		"images/giraffes.svg",
		["Frankie", "Coconut"],
		"pages/giraffe_facts.html",
		"Towering above the African plains, giraffes move with an elegant grace. Their long necks and distinctive patterns create a striking silhouette against the horizon. Vintage photographs highlight the giraffe’s serene presence, a gentle giant that embodies the beauty of the wild in its most graceful form."
	),
	new Animal(
		"Alligators",
		"images/alligators.svg",
		["Wren", "Aspen", "Mika"],
		"pages/alligator_facts.html",
		"In the murky waters of swamps and rivers, alligators glide with a prehistoric allure. Their armored bodies and stealthy movements evoke a sense of ancient mystery. Through a minimalist lens, alligators are depicted as shadowy figures, a nod to their enduring presence and the timeless secrets they hold."
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
