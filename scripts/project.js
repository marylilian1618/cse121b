// project.js

import { fetchQuote, fetchRandomImage } from './scripts/apiFunctions';

function generateData() {
    const categoryQuote = 'inspirational';
    const apiKeyQuote = 'f6vULTcfo1MhZE1FbKbfDw==fZYODvVP30Abn89Q';

    fetchQuote(categoryQuote, apiKeyQuote)
        .done(function (result) {
            console.log(result);
            const quotesContainer = document.getElementById('quotes');
            const quoteElement = document.createElement('h3');
            quoteElement.textContent = result.quote;
            quotesContainer.innerHTML = '';
            quotesContainer.appendChild(quoteElement);
        })
        .fail(function (jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        });

    const categoryImage = 'nature';
    const apiKeyImage = 'f6vULTcfo1MhZE1FbKbfDw==fZYODvVP30Abn89Q';

    fetchRandomImage(categoryImage, apiKeyImage)
        .done(function (result) {
            console.log(result);
            const imgElement = document.createElement('img');
            imgElement.src = result.url;
            const quotesContainer = document.getElementById('quotes');
            quotesContainer.appendChild(imgElement);
        })
        .fail(function (jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        });
}

document.getElementById('generate').addEventListener('click', generateData);
