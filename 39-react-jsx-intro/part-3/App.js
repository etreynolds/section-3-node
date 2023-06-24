const App = () => (
    <div>
        <Person
            name="EthanReynolds"
            age={34}
            hobbies={["swimming", "biking", "running"]}
        />
        <Person
            name="Miranda"
            age={30}
            hobbies={["swimming", "biking", "running"]}
        />
        <Person
            name="Maverick"
            age={7}
            hobbies={["swimming", "biking", "running"]}
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))