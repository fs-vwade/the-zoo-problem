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

const body = document.body
const animal_table = document.createElement('div')
const animal_table_header = document.createElement('h1')
const article_container = document.createElement('div')

animal_table_header.innerText = "Zoo Animals"
animal_table.className = 'animal-table'
article_container.className = 'article-container'

animal_table.append(animal_table_header)
animal_table.append(article_container)

animals.forEach(animal => {
	article_container.append(create_article(animal))
})

const default_ez_load = document.createElement('div')
default_ez_load.innerHTML = `
		<div class="animal-table">
			Zoo Animals
			<div class="animal-types">
				<article>
					Lions
					<br /><img src="images/lions.png" />
					<div>Mella</div>
					<div>Karl</div>
				</article>
				<article>
					Bears
					<br /><img src="images/bears.png" />
					<bullet>Ollie</bullet>
					<bullet>Mona</bullet>
				</article>
				<article>
					Giraffes
					<br /><img src="images/giraffes.png" />
					<div>Frankie</div>
					<div>Coconut</div>
				</article>
				<article>
					Monkeys
					<br /><img src="images/monkeys.png" />
					<div>Cookie</div>
					<div>Earl</div>
					<div>Banana Pudding</div>
				</article>
				<article>
					Alligators
					<br /><img src="images/alligators.png" />
					<div>Wren</div>
					<div>Aspen</div>
					<div>Mika</div>
				</article>
			</div>
		</div>
`

body.append(default_ez_load)
//body.append(animal_table)