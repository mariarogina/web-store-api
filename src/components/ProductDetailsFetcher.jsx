import React, { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";



export default function ProductDetailsFetcher() {
  const [myData, setMyData] = useState(null);
 useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMyData(
         data );
      });
  }, []);

  if (!myData) {
    return <div>Still Loading</div>;
  }

  console.log(myData);

  return <ProductDetails myData={myData} />;
}
