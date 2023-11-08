
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
        console.log(searchQuery);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for jobs..."
                onChange={(e) => { e.preventDefault(); onSearch(e.target.value); setSearchQuery(e.target.value) }}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
