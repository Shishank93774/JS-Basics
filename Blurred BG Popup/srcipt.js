const joinEl = document.querySelector('.btn');
const popupEl = document.querySelector('.popup');
const containerEl = document.querySelector('.container');
const closeEl = document.querySelector('.top img');

console.log(joinEl);
console.log(popupEl);
console.log(containerEl);
console.log(closeEl);

joinEl.addEventListener('click', (event) => {
    popupEl.classList.remove('hidden');
    containerEl.classList.add("blurr");
});

closeEl.addEventListener('click', (event) => {
    popupEl.classList.add("hidden");
    containerEl.classList.remove('blurr');
});