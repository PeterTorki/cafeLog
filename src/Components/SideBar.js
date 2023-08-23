import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoHomeFill } from 'react-icons/go';
import { AiOutlineCoffee } from 'react-icons/ai';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';

import logo from './Brown_Illustrasi_Coffee_Cafe_Logo__1_-removebg-preview.png';

import styles from '../Style/SideBar.module.css';

const SideBar= () =>{
    const [show , setShow] = useState(true);
    return (    
        <div>
            <ul className={show? styles.sidebar2 : styles.sidebar }>
                <div className={styles.logo}>
                    <img src={logo} alt="ChillCup" className={styles.imglogo} />
                </div>
                <br />
                <br />
                <br />
                <li>
                    <GoHomeFill color={!show? '#FFFFFF': "000000"} size={30}/>
                    {show? "" :<h2>Home</h2>}
                </li>
                <li>
                    <AiOutlineCoffee className={styles.icon} color={!show? '#FFFFFF': "000000"} size={30}/>
                    {show? "" :<h2>Menu</h2>}
                </li>
                <li>
                    <AiOutlineHeart color={!show? '#FFFFFF': "000000"} size={30}/>
                    {show? "" :<h2>Favorites</h2>}
                </li>
                <li>
                    <AiOutlineShoppingCart color={!show? '#FFFFFF': "000000"} size={30}/>
                    {show? "" :<h2>Cart</h2>}
                </li>
                <li>
                    <AiOutlineQuestionCircle className={styles.icon} color={!show? '#FFFFFF': "000000"} size={30}/>
                    {show? "" :<h2>About</h2>}
                </li>
                <li>
                    <AiOutlinePhone className={styles.icon} color={!show? '#FFFFFF': "000000"} size={30}/>
                    {show? "" :<h2>Contact</h2>}
                </li> 
                <li>
                    <BsFillGearFill className={styles.iconS}/>
                    {show? "" :<h2 className={styles.sett}>Settting</h2>}
                </li>
            </ul>
        </div>
    )
}

export default SideBar;