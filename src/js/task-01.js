const checkingAllElements = document.querySelectorAll(".item");
console.log(`Number of categories ${checkingAllElements.length}`);


checkingAllElements.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})

