const containerEl = document.querySelector('.container');
const btnEl = document.querySelector('.btn');
const INITIAL_COUNT = 6;
const NEXT_COUNT = 10;

const addPic = async () => {
    const res = await fetch("https://picsum.photos/300/300");
    const divEl = document.createElement("DIV");
    divEl.classList.add("img");
    divEl.style.backgroundImage = "url('" + res.url + "')";
    containerEl.appendChild(divEl);
}

for (let i = 0; i < INITIAL_COUNT; i++) {
    addPic();
}

btnEl.addEventListener('click', () => {
    for (let i = 0; i < NEXT_COUNT; i++) {
        addPic();
    }
})