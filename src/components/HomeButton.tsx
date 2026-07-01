import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";


function HomeButton() {
    return (
        <div>
            <Link to="/" className="home-button">
                <GoHomeFill />Home
            </Link>
        </div>
    );
}

export default HomeButton;