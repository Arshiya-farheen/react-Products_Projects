import React from 'react';
import './style.css';

import ProductView from './ProductView';

export default function App() {
  return (
    <div className="container py-4">
      <h1>Product View</h1>

      <ProductView />
    </div>
  );
}
