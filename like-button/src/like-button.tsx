import "./like-button.css";

export function LikeButton() {
    const count = 999; 
    return(
        <button className="like" type="button">
            {count}
            </button>
        );
}