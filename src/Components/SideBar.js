import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoHomeFill } from 'react-icons/go';
import { AiOutlineCoffee } from 'react-icons/ai';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';

import styles from '../Style/SideBar.module.css';

const SideBar= () =>{
    const [show , setShow] = useState(true);
    return (    
        <ul className={show? styles.sidebar2 : styles.sidebar }>
            <div className={styles.main} onClick={()=> setShow(!show)}>
                <GiHamburgerMenu className={styles.icon}/>
            </div>
            <li >
                <GoHomeFill className={styles.icon}/>
                {show? "" :<h2>Home</h2>}
            </li>
            <li >
                <AiOutlineCoffee className={styles.icon}/>
                {show? "" :<h2>Menu</h2>}
            </li>
            <li >
                <AiOutlineHeart className={styles.icon}/>
                {show? "" :<h2>Favourites</h2>}
            </li>
            <li>
                <AiOutlineShoppingCart className={styles.icon}/>
                {show? "" :<h2>Cart</h2>}
            </li>
            <li >
                <AiOutlineQuestionCircle className={styles.icon}/>
                {show? "" :<h2>About</h2>}
            </li>
            <li >
                <AiOutlinePhone className={styles.icon}/>
                {show? "" :<h2>Contact</h2>}
            </li> 
            <li >
                <BsFillGearFill className={styles.iconS}/>
                {show? "" :<h2 className={styles.sett}>Settting</h2>}
            </li>
        </ul>
    )
}

export default SideBar;