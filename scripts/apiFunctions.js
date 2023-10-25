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
    const categories = ['nature', 'abstract', 'city', 'still_life'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    return $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/randomimage?category=${randomCategory}`,
        headers: { 'X-Api-Key': apiKey, 'Accept': 'image/jpg' }
    });
}
