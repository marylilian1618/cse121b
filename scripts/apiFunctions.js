// apiFunctions.js

export function fetchQuote(category, apiKey) {
    return $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json'
    });
}

export function fetchRandomImage(category, apiKey) {
    return $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/randomimage?category=${category}`,
        headers: { 'X-Api-Key': apiKey, 'Accept': 'image/jpg' }
    });
}
