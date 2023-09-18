// den tager den value/tal som står i id'et 'new-text' og ændrer fra 255 til 0 når der bliver tastet
document.getElementById("new-text").addEventListener("keyup", (e) => {
  document.getElementById("countresult").textContent =
    255 - e.target.value.length;
  e.target.value = e.target.value.substring(0, 255);
});

// i denne kode, tæller den op fra 0 til 255 der står i html med max-lenght:255

// const new_text = document.getElementById("new-text");

// let myCount = document.getElementById("new-text");
// myCount.addEventListener("input", () => {
//     let count = (myCount.value).length;
//     document.getElementById("countresult").textContent = `Total characters: ${count}`;
// });
