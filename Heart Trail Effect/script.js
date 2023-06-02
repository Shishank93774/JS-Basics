const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (event) => {
    let x = event.pageX;
    let y = event.pageY;
    const sz = Math.random() * 100;
    const spanEl = document.createElement("SPAN");
    spanEl.style.left = x + "px";
    spanEl.style.top = y + "px";
    spanEl.style.width = sz + "px";
    spanEl.style.height = sz + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    }, 3000)
});