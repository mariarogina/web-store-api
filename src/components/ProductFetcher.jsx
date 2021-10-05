import React, { useState, useEffect } from "react";
import Products from "./Products";

export default function ProductFetcher() {
  const [myData, setMyData] = useState(null);
  
//   function createData(id, title, price, description, category, image) {
//     return {id, title, price, description, category, image};
//   }
  

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

  return <Products myData={myData} />;
}
