import React from 'react';

const Navbar = ({ onSearch }) => {
    return (
        <nav className="navbar">
            <h1>EventSpot Lite</h1>
            <input
                type="text"
                placeholder="Search events..."
                onChange={(e) => onSearch(e.target.value)}
            />
             
        </nav>
    );
};

export default Navbar;
