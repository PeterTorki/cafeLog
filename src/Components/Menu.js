import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import TypesMenu from "./TypesMenu";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [currType, setCurrType] = useState("All Menu");

  const getProducts = useCallback(() => {
    axios
      .get("http://localhost:3477/Products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => console.log(e));
  }, [products]);

  const handleCurrTypeState = (type) => {
    setCurrType(type);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const currentElemetns = products.filter((p) => {
    if (currType === "All Menu") return p;
    if (currType === p.type) return p;
  });
  const divDisplay = currentElemetns.map((p) => {
    return <div key={p.id}></div>;
  });

  console.log(currentElemetns);
  return (
    <div>
      <TypesMenu typeSetState={handleCurrTypeState} />
      <div>{divDisplay}</div>
    </div>
  );
};

export default Menu;
