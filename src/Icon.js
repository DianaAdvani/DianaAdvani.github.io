import "./Icon.css";
export function Icon({name}) {
    return (
        <div className="icon-wrapper">
            <div className="icon-text">{name}</div>
        </div>
    )
}