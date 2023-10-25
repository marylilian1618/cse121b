export function fetchQuote(apiKey) {
    const categories = ['inspirational', 'life', 'happiness', 'freedom'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    return $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`,
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json'
    });
}

export function fetchRandomImage(apiKey) {
    const categoriesImage = ['nature', 'abstract', 'city', 'still_life'];
    const randomCategoryImage = categoriesImage[Math.floor(Math.random() * categoriesImage.length)];

    return $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/randomimage?category=${randomCategoryImage}`,
        headers: { 'X-Api-Key': apiKey }
    });
}
