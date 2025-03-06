function getArticleGenerator(articles) {
    let divElement = document.getElementById('content');
    let initialArticles = [...articles];

    return function() {
        let currentArticle = initialArticles.length > 0 ? articles.shift() : undefined;

        if (currentArticle !== undefined) {
            let articleElement = document.createElement('article');
            articleElement.textContent = currentArticle;

            divElement.appendChild(articleElement);
        }
    }
}