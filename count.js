let myCount = document.getElementById("new-text");
myCount.addEventListener("input", () => {
    let count = (myCount.value).length;
    document.getElementById("countresult").textContent = `Total characters: ${count}`;
});