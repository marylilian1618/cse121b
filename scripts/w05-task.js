/* W05: Programming Tasks */

/* Declare and initialize global variables */
var templesElement = document.getElementById("temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(function (temple) {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.style.textAlign = "center";
        h3Element.style.position = "relative";
        h3Element.style.bottom = "25px";
        h3Element.textContent = temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        imgElement.style.boxShadow = "0px 0px 25px black";
        
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        articleElement.style.backgroundColor = "#b9b9b9"; 
        articleElement.style.margin = "10px";
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const templeListData = await response.json();
        templeList.push(...templeListData);
        displayTemples(templeList);
    }
};

/* reset Function */
const reset = function () {
    templesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = function () {
    reset();
    const filter = document.getElementById('sortBy').value;
    switch (filter) {
        case 'utah':
            displayTemples(templeList.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(templeList.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;  
        case 'all':
            displayTemples(templeList);
            break;
        default:
            console.error('Invalid filter option');
    }
};

getTemples();

/* Event Listener */
document.getElementById('sortBy').addEventListener("change", function () {
    sortBy();
});
