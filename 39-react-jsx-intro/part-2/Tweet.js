const Tweet = (props) => {
    return (
        <div className="tweet">
            <span>{props.name}</span><br></br>
            <span className="username">Username: <i>@{props.username}</i></span><br></br>
            <span className="date">Date: {props.date}</span><br></br>
            <span>{props.message}</span>
        </div>
    )
}