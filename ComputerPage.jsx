import React, { useState } from 'react';
import { computerData } from '../data/computers';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

const ComputerPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredData = computerData.filter(item =>
    item.company.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <div className="pageSection">
        {filteredData.map(item => (
          <div key={item.id}>
            <Link to={`/computers/${item.id}`}>
              <div className="pageImg">
                <img src={item.image} alt={item.company} />
                <p className="proModel"> {item.company}, {item.model}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ComputerPage;
