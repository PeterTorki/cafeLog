import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import TypesMenu from "./TypesMenu";
import styles from "../Style/Menu.module.css";
import logo from "./tropical-drink-2374.png"



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

  // console.log(currentElemetns);
  const p = products[9];
  console.log(p);
  console.log(products);
  if(products.length === 0) return null;
  return (
    <div>
      <TypesMenu typeSetState={handleCurrTypeState} />
      <div className={styles.menuContainer}>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>

      <div>
        <div className={styles.card}>

          <div className={styles.info}>
            <img src={logo} className={styles.imageitem}/>
            <div className={styles.textInfo}>
              <h5>{p.name}</h5>
              <p className={ styles.textP}>{p.description}</p>
              <h4 className={styles.price}>{p.price} $</h4>
            </div>

          </div>
          <div className={styles.Extras}>
            <button className={styles.exBtn}> {p.Extras[0].name}</button>
            <button className={styles.exBtn}> {p.Extras[1].name}</button>
          </div>
          <button className={styles.toCart}>Add To Cart</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Menu;
