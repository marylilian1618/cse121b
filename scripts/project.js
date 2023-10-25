import { fetchQuote, fetchRandomImage } from './scripts/apiFunctions';

function generateData() {
    const apiKey = 'f6vULTcfo1MhZE1FbKbfDw==fZYODvVP30Abn89Q';
    const quotesContainer = document.getElementById('quotes');
    quotesContainer.innerHTML = '';

    fetchQuote(apiKey)
        .done(function (quoteResult) {
            console.log(quoteResult);
            const quoteElement = document.createElement('h3');
            quoteElement.textContent = quoteResult.quote;
            quotesContainer.appendChild(quoteElement);
        })
        .fail(function (jqXHR) {
            console.error('Error fetching quote: ', jqXHR.responseText);
            const errorElement = document.createElement('p');
            errorElement.textContent = 'Error fetching quote. Please try again.';
            quotesContainer.appendChild(errorElement);
        });

    fetchRandomImage(apiKey)
        .done(function (imageResult) {
            console.log(imageResult);
            const imgElement = document.createElement('img');
            imgElement.src = imageResult.url;
            quotesContainer.appendChild(imgElement);
        })
        .fail(function (jqXHR) {
            console.error('Error fetching image: ', jqXHR.responseText);
            const errorElement = document.createElement('p');
            errorElement.textContent = 'Error fetching image. Please try again.';
            quotesContainer.appendChild(errorElement);
        });
}

document.getElementById('generate').addEventListener('click', generateData);
