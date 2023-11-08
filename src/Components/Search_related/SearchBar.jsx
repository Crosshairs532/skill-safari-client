
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div>
            <input type="text" placeholder="Search for jobs..." className="input input-bordered input-info w-full max-w-xs" onChange={(e) => { e.preventDefault(); onSearch(e.target.value); setSearchQuery(e.target.value) }} />

            <button className=' btn mt-2' onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
