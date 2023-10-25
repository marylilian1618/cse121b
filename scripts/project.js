import { fetchQuote, fetchRandomImage } from './apiFunctions.js';

function generateData() {
    console.log('Esta entrando a la funcion...');
    const apiKey = 'f6vULTcfo1MhZE1FbKbfDw==fZYODvVP30Abn89Q';
    const quotesContainer = document.getElementById('quotes');
    quotesContainer.innerHTML = '';

    fetchQuote(apiKey)
        .done(function (quoteResult) {
            // console.log(quoteResult[0].author);
            // console.log(quoteResult[0].author);
            const quoteElement = document.createElement('h3');
            quoteElement.textContent = quoteResult[0].quote;
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
            //imgElement.src = imageResult;
            imgElement.src = "data:image/png;base64," + imageResult;

            quotesContainer.appendChild(imgElement);
        })
        .fail(function (jqXHR) {
            console.error('Error fetching image: ', jqXHR.responseText);
            const errorElement = document.createElement('p');
            errorElement.textContent = 'Error fetching image. Please try again.';
            quotesContainer.appendChild(errorElement);
        });
}

document.getElementById("generate").addEventListener('click', generateData);
