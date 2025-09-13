import React, { useState } from 'react';
import { booksData } from '../data/books';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

const BookPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredData = booksData.filter(item =>
    item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <div className="pageSection">
        
        {filteredData.map((item) => (
          <div key={item.id}>
            <Link to={`/books/${item.id}`}>
              <div className="pageImg">
                <img src={item.image} alt={item.title} />
                <p className="proModel"> {item.title}, {item.category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookPage;
