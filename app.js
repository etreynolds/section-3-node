// async function sayHi() {
//     return "Hello!"
// }

// sayHi().then((msg) => console.log(msg))


// STAR WARS ASYNC & AWAIT EXAMPLE

// async function getStarWarsFilms() {
//     console.log("STARTING!")
//     const res = await axios.get("https://swapi.dev/api/films/")
//     console.log("ENDING!")
//     console.log(res.data.results)
// }


// COLOR CHANGE EXAMPLE

// const h1 = document.querySelector('h1')

// function changeColor(el, color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             el.style.color = color;
//             resolve()
//         }, 1000)
//     })
// }

// changeColor(h1, 'red')
//     .then(() => changeColor(h1, 'orange'))
//     .then(() => changeColor(h1, 'yellow'))
//     .then(() => changeColor(h1, 'green'))
//     .then(() => changeColor(h1, 'blue'))
//     .then(() => changeColor(h1, 'indigo'))
//     .then(() => changeColor(h1, 'violet'))

// async function rainbow(el) {
//     await changeColor(el, 'red')
//     await changeColor(el, 'orange')
//     await changeColor(el, 'yellow')
//     await changeColor(el, 'green')
//     await changeColor(el, 'blue')
//     await changeColor(el, 'indigo')
//     await changeColor(el, 'violet')
// }

// rainbow(h1)


const deck = {
    async init() {
        let res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
        this.deckId = res.data.deck_id
    },
    async shuffle() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
        console.log(res)
    },
    async draw() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
        console.log(res)
    }
}