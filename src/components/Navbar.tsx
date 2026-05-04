import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.SubmitEvent) => {
        e.preventDefault();

        if (!query.trim()) return;

        navigate(`/search?query=${encodeURIComponent(query.trim())}`);
        setQuery('')
    };

    return (
        <nav>
            <Link to="/">Recipe Discovery</Link>
            <form onSubmit={handleSearch}>
                <input
                    value={query}
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search recipes..."
                />
                <button type="submit">
                    Search
                </button>
            </form>
            <Link to="/favorites" >Favorites</Link>
        </nav>
    )
}

export default Navbar;