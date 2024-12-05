import "./About.css";

export function About({clickHandler}) {
    return(
        <div>
        <button onClick={() => clickHandler("home")}> Back</button>
        <h1> About Diana</h1>

        </div>
    )

}