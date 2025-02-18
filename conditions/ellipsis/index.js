function getDescription(text) {
    if (text.length > 10) {
        text = text.substring(0, 10) + '...';
    }
    return text;
}

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", (event) => {
    output.textContent = getDescription(event.currentTarget.value);
});
