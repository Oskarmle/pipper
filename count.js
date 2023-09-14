
// const new_text = document.getElementById("new-text");

// let myCount = document.getElementById("new-text");
// myCount.addEventListener("input", () => {
//     let count = (myCount.value).length;
//     document.getElementById("countresult").textContent = `Total characters: ${count}`;
// });

document.getElementById('new-text').addEventListener('keyup', e=> {
    document.getElementById("countresult").textContent = 255 - e.target.value.length;
    e.target.value = e.target.value.substring(0, 255);
});

