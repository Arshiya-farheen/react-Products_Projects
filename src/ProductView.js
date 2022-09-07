import React, { useState } from 'react';
import products from './products';
import Categories from './Categories';
import ProductList from './ProductList';

function ProductView() {
  const uniqueCategories = ['Deserts', 'CoolDrinks', 'juices', 'Icecream'];
  const [active, setActive] = useState(uniqueCategories[0]);

  return (
    <div>
      <p>Current Active: {active}</p>
      <Categories
        list={uniqueCategories}
        currentActiveCategory={active}
        onClick={(value) => setActive(value)}
      />
      <ProductList list={products} currentCategory={active} />
    </div>
  );
}

export default ProductView;
