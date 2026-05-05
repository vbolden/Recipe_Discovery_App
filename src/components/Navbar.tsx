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
        <nav className="navbar">
            <div className="navbar-content">
                <Link to="/" className="logo">Recipe Discovery</Link>
                <form onSubmit={handleSearch} className="search">
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
                <Link to="/favorites" className="favorites-link" >Favorites</Link>
            </div>
        </nav>
    )
}

export default Navbar;