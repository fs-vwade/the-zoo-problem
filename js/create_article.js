export function create_article(new_animal) {
	const article = document.createElement('article');
	const article_header = document.createElement('h2');
	article_header.textContent = new_animal.species_name;

	const article_img = document.createElement('img');
	article_img.src = new_animal.img_url;
	article_img.alt = `${new_animal.species_name} Thumbnail`;
	article_img.className = 'article-thumbnail';

	const article_name_list = document.createElement('ul');
	new_animal.all_names
		.forEach(name => {
			list_item = document.createElement('li');
			new_animal.textContent = name;
			article_name_list.append(list_item);
		});

	article.append(article_header);
	article.append(article_img);
	article.append(article_name_list);
	return article;
}