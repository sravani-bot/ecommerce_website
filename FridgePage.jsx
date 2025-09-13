import React, { useState } from 'react';
import { fridgeData } from '../data/Fridge';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

const FridgePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredData = fridgeData.filter(item =>
    item.brand.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <div className="pageSection">
        {filteredData.map((item) => (
          <div key={item.id}>
            <Link to={`/fridges/${item.id}`}>
              <div className="pageImg">
                <img src={item.image} alt={item.brand} />
                <p className="proModel"> {item.brand}, {item.model}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default FridgePage;
