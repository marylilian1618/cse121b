
const fullName = "María Lilian Gonzales Inga";
const currentYear = new Date().getFullYear();
const profilePicture = "images/mimage.jpg";

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

const favoriteFoods = ["Pollo a la brasa", "Trucha frita", "Causa rellena"];
foodElement.textContent = favoriteFoods.join(", ");
const newFavoriteFood = "Ceviche";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`
