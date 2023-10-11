/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Maria Lilian Gonzales Inga",
    photo: "images/mimage.jpg",
    favoriteFoods:[
        'Pollo a la brasa', 
        'Trucha frita', 
        'Causa rellena',
        'Ceviche',
    ],
    hobbies: [
        'Reading',
        'Dancing',
        'Singing',
        'Programming',
        'Playing Chess'
    ],
    placesLived: []

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    { place: 'Huancayo, Perú', length: '18 years' },
    { place: 'Lima, Perú', length: '1 year' }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
const photoElement = document.getElementById('photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach (food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach (hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

var placesLivedElement = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
  var dtElement = document.createElement('dt');
  dtElement.textContent = place.place;
  var ddElement = document.createElement('dd');
  ddElement.textContent = place.length;
  placesLivedElement.appendChild(dtElement);
  placesLivedElement.appendChild(ddElement);
});

