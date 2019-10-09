console.log('%c HI', 'color: firebrick')

function fetchDogs() { 
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogs(json));
}

function renderDogs(json){
    const dogImgs = document.getElementById("dog-image-container");
    json.message.forEach(imgURL => {
        const img = document.createElement("img");
        img.setAttribute("src",`${imgURL}`);
        dogImgs.appendChild(img);
    });
};

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(json){
    const dogBreeds = document.getElementById("dog-breeds");
    let breeds = Object.keys(json.message);

    breeds.forEach(breed => {
        const li = document.createElement("li");

        li.innerHTML = `${breed}`;
        li.setAttribute("class", "eachBreed");
        li.setAttribute("id", `${breed.charAt(0)}`);
        dogBreeds.append(li);
        
    })

    let liTags = document.querySelectorAll('.eachBreed');
    
    liTags.forEach(li => {
        li.addEventListener("click", function() {
            li.style.color = "red";
        })
    });

    let dropdownSelect = document.getElementById("breed-dropdown");
        // breedSelect = dropdownSelect.options[dropdownSelect.selectedIndex].value;

    dropdownSelect.addEventListener("change", function(){    
        liTags.forEach(li => {
            li.style.display = "none";
            if(li.id === dropdownSelect.options[dropdownSelect.selectedIndex].value){
                li.style.display = "";
            }
        })
    })

}

// function breedFilter(){
//     let dropdownSelect = document.getElementById("breed-dropdown");
//         breedSelect = dropdownSelect.options[dropdownSelect.selectedIndex].value;
//     let filteredBreeds = breeds.filter(breed => breed.id === breedSelect);
//     return renderBreeds(filteredBreeds);
// }

// function breedFilter(){
//     let liTags = document.querySelectorAll('.eachBreed');
//         ulTag = document.querySelector("ul");
//         breed = document.getElementById("select-breed");
//         dropdownSelect = document.getElementById("breed-dropdown");
//         breedSelect = dropdownSelect.options[dropdownSelect.selectedIndex].value;

//     dropdownSelect.addEventListener('change', function(){
//         breeds.filter(breed => breed.startsWith(breedSelect))
//     })
// }

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchBreeds();
  });