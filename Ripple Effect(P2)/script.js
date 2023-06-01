const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', (event) => {
    const x = event.pageX - btn.offsetLeft;
    const y = event.pageY - btn.offsetTop;
    console.log(x);
    console.log(y);
    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
})