let favNumber = 4;
let url = "http://numbersapi.com";

// Part 1.1
$.getJSON(`${url}/${favNumber}?json`).then(data => {
    console.log(data);
})

// Part 1.2
