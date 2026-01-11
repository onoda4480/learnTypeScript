import "./like-button.css";
import { useState } from "react";

export function LikeButton() {
    const [count, setCount] = useState(999);
    return(
        <button className="like" type="button">
            {count}
            </button>
        );
}