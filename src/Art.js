export function Art({clickHandler}) {
    return (
        <div>
            <button onClick={() => clickHandler("home")}>Back</button>
            <h1>Art</h1>
            
        </div>
    )
}