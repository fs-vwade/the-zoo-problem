// Copyright Victor Wade 2024
/**
 * This subsection aims to automate the repetitive sections of the project.
 */


/** Moved function to its own file.
 */
const {
	create_article
} = require("./create_article")


/** Animal as a class (OOP/DRY)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
class Animal {
	constructor(species, image, names, info) {
		this.species = species
		this.image = image
		this.names = names /** An array of strings of animals' names */
		this.info = info /* A link to the animal info page */
	}

	get species_name() {
		return this.species
	}

	get img_url() {
		return this.image
	}

	get all_names() {
		return this.names
	}

	get info_link() {
		return this.info
	}

	add_animal(new_name) {
		this.names.push(new_name)
	}

	udpate_image(new_url) {
		this.image = new_url
	}

	udpate_info(new_url) {
		this.info = new_url
	}
}

animals = [
	new Animal("Bears", "images/bears.png", ["Ollie", "Mona"], ""),
	new Animal("Lions", "images/lions.png", ["Mella", "Karl"], ""),
	new Animal("Monkeys", "images/monkeys.png", ["Cookie", "Earl", "Banana Pudding"], ""),
	new Animal("Giraffes", "images/giraffes.png", ["Frankie", "Coconut"], ""),
	new Animal("Alligators", "images/alligators.png", ["Wren", "Aspen", "Mika"], "")
]

const animal_table = document.createElement('div')
const animal_table_header = document.createElement('h1')
const article_container = document.createElement('div')

animal_table_header.innerHTML = "Zoo Animals"
animal_table.className = 'animal-table'
article_container.className = 'article-container'

animal_table.append(animal_table_header)
animal_table.append(article_container)

animals.forEach(animal => {
	article_container.append(create_article(animal))
})

document.body.append(animal_table)