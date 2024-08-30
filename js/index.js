// Copyright Victor Wade 2024
/**
 * This subsection aims to automate the repetitive sections of the project.
 */


/** Animal as a class (OOP/DRY)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
class Animal {
	constructor(species, image, names: str[], info) {
		this.species = species
		this.image = image
		this.names = names /** An array of strings of animals' names */
		this.info = info /* A link to the animal info page */
	}

	add_animal(new_name: str) {
		this.names.push(new_name)
	}

	udpate_image(new_url: str) {
		this.image = new_url
	}

	udpate_info(new_url: str) {
		this.info = new_url
	}
}

animals = [
	Animal("Bears", "images/bears.png", ["Ollie", "Mona"], ""),
	Animal("Lions", "images/lions.png", ["Mella", "Karl"], ""),
	Animal("Monkeys", "images/monkeys.png", ["Cookie", "Earl", "Banana Pudding"], ""),
	Animal("Giraffes", "images/giraffes.png", ["Frankie", "Coconut"], ""),
	Animal("Alligators", "images/alligators.png", ["Wren", "Aspen", "Mika"], "")
]

animal_table = document.createElement('div')
animal_table.header = document.createElement('h1')
animal_table.header.innerHTML = "Zoo Animals"
animal_table.class = 'animal-table'
article_container = document.createElement('article')
article_container.class = 'article-container'
animal_table.append(article_container)

document.body.append(animal_table)