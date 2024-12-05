import "./Homepage.css";
import {Icon} from "./Icon";
export function Homepage({clickHandler}) {
    return (
        <div className="homepage-wrapper">
            <button onClick={() => clickHandler("about")}>
                <Icon  name="About" />
            </button>
            <button onClick={() => clickHandler("projects")}>
                <Icon  name="Design Projects" />
            </button>
            <button onClick={() => clickHandler("art")}>
                <Icon  name="Art" />
            </button>
        </div>

    );
}
