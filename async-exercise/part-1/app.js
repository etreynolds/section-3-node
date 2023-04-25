let favNumber = 4;
let url = "http://numbersapi.com";

// PART 1.1
async function part1() {
    let data = await $.getJSON(`${url}/${favNumber}?json`);
    console.log(data);
}

part1();

// PART 1.2
const favNumbers = [3, 4, 13];
async function part2() {
    let data = await $.getJSON(`${url}/${favNumbers}?json`);
    console.log(data);
}

part2();

// PART 1.3
async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${url}/${favNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}

part3();
