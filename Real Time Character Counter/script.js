const textEle = document.querySelector('.field');
const MAX_LENGTH = 100;
textEle.setAttribute("maxlength", MAX_LENGTH);
const totalCntEle = document.querySelector('.total span');
const remCntEle = document.querySelector('.rem span');

textEle.addEventListener('input', (event) =>{
    let text = textEle.value;
    let len = text.length;
    totalCntEle.textContent = len;
    remCntEle.textContent = MAX_LENGTH - len;
});