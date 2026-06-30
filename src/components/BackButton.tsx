import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

function BackButton() {
    const navigate = useNavigate();

    return (
        <button
            className="back-button"
            onClick={() => navigate(-1)}
        >
            <IoIosArrowRoundBack /> Back
        </button>
    );
}

export default BackButton;