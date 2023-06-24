const Shiba = () => {
    return <img src="https://cdn.britannica.com/71/234471-050-093F4211/shiba-inu-dog-in-the-snow.jpg"
        width="350" />
}

const SharPei = () => {
    return <img src="https://image.petmd.com/files/styles/863x625/public/2022-10/chinese-shar-pei.jpg"
        width="350"></img>
}

const App = () => {
    return (
        <div>
            <Shiba />
            <SharPei />
            <Shiba />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));

