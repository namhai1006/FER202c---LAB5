import React, { useState } from "react";

function SearchFilter() {
    // State to hold the search query
    const [searchQuery, setSearchQuery] = useState("");

    // Sample list of items
    const itemList = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

    // Function to handle search input changes
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filtered items based on search query
    const filteredItems = itemList.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2>Search Filter</h2>
            {/* Input field for search query */}
            <label>Search: </label>
            <input type="text" value={searchQuery} onChange={handleSearchChange} />
            
            {/* Display the filtered items */}
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchFilter;
