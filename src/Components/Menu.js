import React, {useEffect, useState, useCallback} from 'react'
import axios from 'axios'
import TypesMenu from './TypesMenu';

const Menu = () => {
	const [products, setProducts] = useState([]);
  const [currType, setCurrType] = useState("All Menu");

  const getProducts = useCallback(() => {
		axios.get('http://localhost:3477/Products').then((response) => {
      setProducts(response.data);
    })
	}, [products])


	useEffect(() => {
		getProducts();
	}, []);


  const handleCurrTypeState = (type) => {
    setCurrType(type);
  };

  const currentElements = products.filter((p) => {
    if (currType === "All Menu") return p;
    if (currType === p.type) return p;
  });
  const divDisplay = currentElements.map((p) => {
    return <div key={p.id}></div>;
  });

  const p = products[9];
  console.log(p);
  return (
    <div>
      <TypesMenu typeSetState={handleCurrTypeState} />
      <div>
        <div>
          <div>
            <img src="" />
            <div>
              <h5>{p?.name}</h5>
              <p>{p?.description}</p>
              <h4>{p?.price}$</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu