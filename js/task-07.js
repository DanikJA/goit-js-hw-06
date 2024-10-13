const inputFontSizeControl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
    inputFontSizeControl.value = 16;
    spanEl.style.fontSize = "16px"

const callback = () => {
    spanEl.style.fontSize = `${inputFontSizeControl.value}px`
}

inputFontSizeControl.addEventListener('input', callback);