export function fetchQuote(apiKey) {
    const categories = ['inspirational', 'life', 'motivational', 'success'];

    // Randomly select a category
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    return $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`,
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json'
    });
}

export function fetchRandomImage(apiKey) {
    const categories = ['nature', 'animals', 'travel', 'landscape'];

    // Randomly select a category
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    return $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/randomimage?category=${randomCategory}`,
        headers: { 'X-Api-Key': apiKey, 'Accept': 'image/jpg' }
    });
}
