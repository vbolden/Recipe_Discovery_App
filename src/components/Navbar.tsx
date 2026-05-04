import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { endpoints } from "../api/mealdb";

function Navbar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.SubmitEvent) => {
        e.preventDefault();
        
        if(!query.trim()) return;

        navigate(`/search?query=${encodeURIComponent(query.trim())}`);
        setQuery('')
    };
}

export default Navbar;