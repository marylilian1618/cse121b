import { fetchQuote, fetchRandomImage } from './scripts/apiFunctions';

function generateData() {
    const apiKey = 'f6vULTcfo1MhZE1FbKbfDw==fZYODvVP30Abn89Q';

    fetchQuote(apiKey)
        .done(function (quoteResult) {
            console.log(quoteResult);
            const quotesContainer = document.getElementById('quotes');
            const quoteElement = document.createElement('h3');
            quoteElement.textContent = quoteResult.quote;
            quotesContainer.innerHTML = '';
            quotesContainer.appendChild(quoteElement);
        })
        .fail(function (jqXHR) {
            console.error('Error fetching quote: ', jqXHR.responseText);
        });

    fetchRandomImage(apiKey)
        .done(function (imageResult) {
            console.log(imageResult);
            const imgElement = document.createElement('img');
            imgElement.src = imageResult.url;
            const quotesContainer = document.getElementById('quotes');
            quotesContainer.appendChild(imgElement);
        })
        .fail(function (jqXHR) {
            console.error('Error fetching image: ', jqXHR.responseText);
        });
}

document.getElementById('generate').addEventListener('click', generateData);
