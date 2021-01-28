const cat_button = document.querySelector("#cat_btn");
const cat_result = document.querySelector("#cat_result");

const dog_button = document.querySelector("#dog_btn");
const dog_result = document.querySelector("#dog_result");


cat_button.addEventListener('click',getRandomCat);
dog_button.addEventListener('click',getRandomDog);


function getRandomCat() {
    const url = 'https://api.thecatapi.com/v1/images/search'; 
    fetch(url)
    .then(response => response.json())
    .then(data => {
        cat_result.innerHTML = `<img src="${data[0].url}"/>`
    });
}


function getRandomDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        dog_result.innerHTML = `<img src="${data.message}"/>`;
    });
}