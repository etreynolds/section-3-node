const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Johnny" />

    </div>
)


ReactDOM.render(<App />, document.getElementById("root"))