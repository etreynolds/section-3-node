const App = () => (
    <div>
        <Tweet
            name="Ethan"
            username="etrain"
            date={new Date().toDateString()}
            message="Testing tweet #1!"
        />
        <Tweet
            name="Maverick"
            username="mavthedog"
            date={new Date().toDateString()}
            message="Testing tweet #2!"
        />
        <Tweet
            name="Parsley"
            username="poosh"
            date={new Date().toDateString()}
            message="Testing tweet #3!"
        />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))