import { useState } from "react";
import "./Icon.css";

export function Icon({name, hoverText}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="icon-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} >
            <div className="icon-text">
                {isHovered && hoverText? hoverText : name}

            </div>
        </div>
    )
}