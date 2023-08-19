import React, {useEffect, useState, useCallback} from 'react'
import axios from 'axios'

const Menu = () => {
	const [products, setProducts] = useState([]);
  
  const getProducts = useCallback(() => {
		axios.get('http://localhost:3477/Products').then((response) => {
      setProducts(response.data);
    })
	}, [products])


	useEffect(() => {
		getProducts();
	}, []);

  const divDisplay = products.map((p) => {
    return (
      <div key={p.id}>
        <table>
          <tbody>
            <tr>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <img width={100} src={p.imgSrc} alt="peter"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  })
  
  return (
    <div className="welcome">
      {divDisplay}
    </div>
  );
}

export default Menu