export function create_article(new_animal) {
	const article = document.createElement("article");
	const article_header = document.createElement("h2");
	article_header.innerText = new_animal.species_name;

	const article_img = document.createElement("img");
	article_img.src = new_animal.img_url;
	article_img.alt = `${new_animal.species_name} Thumbnail`;
	article_img.className = "article-thumbnail";

	const article_name_list = document.createElement("ul");
	const list_items = [];
	new_animal.all_names.forEach((name, i) => {
		const list_item = document.createElement("li");
		list_item.className = "bullet text";
		list_item.innerText = name;
		article_name_list.appendChild(list_item);
	});

	const article_info = document.createElement("a");
	article_info.href = `pages/${String(
		new_animal.species_name
	).toLowerCase()}_facts.html`;
	article_info.innerText = `${new_animal.species_name} Facts (link)`;
	article_info.className = "link text";

	article.append(article_header);
	article.append(article_img);
	article.append(article_name_list);
	article.append(article_info);

	return article;
}
