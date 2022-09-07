import React from 'react';

function Categories({ list = [], currentActiveCategory, onClick }) {
  return (
    <ul className="nav nav-tabs">
      {list.map((category) => (
        <li className="nav-item" onClick={() => onClick(category)}>
          <a
            className={`nav-link ${
              currentActiveCategory === category ? 'active' : ''
            }`}
          >
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
