import React, { useContext } from 'react';
import Style from '../../StylesRoutes/StylesBasket/Card.module.css'
import { ShopContext } from '../../../Context/ShopContext'

export default function Card({ p }) {

  const productExtras = p.chosenExtras.filter((i) => i.isActive === true);

    return (
        <div className={Style.container2}>
          <div key={p.id} className={Style.Cards}>
            <div className={Style.LeftSide}>
              <div className={Style.cardimg}>
                <img src={p.imgSrc} alt={p.name} width="80" height="80" />
              </div>
              <div className={Style.Content}>
                <div className={Style.Name}>{p.name}</div>
                {
                    productExtras.length > 0 && 
                    <div className={Style.Extras}>
                        Extra :
                        {productExtras.map((i) => {
                          return <span key={i.id}> {i.name} ,</span>;
                        })}
                    </div>
                }
                <div className={Style.Price}>EGP {p.price}</div>
              </div>
            </div>
            <div className={Style.Counter2}>
            {p.chosenQuantity}
            </div>
          </div>
        </div>
      );
}
