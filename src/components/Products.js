import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://www.apple.com/newsroom/images/product/mac/standard/Apple_next-generation-mac-macbookair-macbookpro-mac-mini_11102020_Full-Bleed-Image.jpg.large.jpg",
    price: 125000,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://m.media-amazon.com/images/I/61be2Ft6g3L._AC_UF1000,1000_QL80_.jpg",
    price: 45000,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2lYGEG7ij5gyZgLFrS4bY6epjixl5mE0Z4u4X4_T6Q&s",
    price: 78000,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://www.shutterstock.com/image-photo/bangkok-thailand-hp-launch-new-260nw-2126914553.jpg",
    price: 69000,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://m.media-amazon.com/images/I/81Nkv7YQFaL._AC_UF1000,1000_QL80_.jpg",
    price: 90000,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
