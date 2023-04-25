let favNumber = 4;
let url = "http://numbersapi.com";

// Part 1.1
$.getJSON(`${url}/${favNumber}?json`).then(data => {
    console.log(data);
});

// Part 1.2
let favNumbers = [3, 4, 13];
$.getJSON(`${url}/${favNumbers}?json`).then(data => {
    console.log(data);
});

// Part 1.3
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${url}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});