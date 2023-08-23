import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoHomeFill } from 'react-icons/go';
import { AiOutlineCoffee } from 'react-icons/ai';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import logo from '../Components/imgsComponent/Brown_Illustrasi_Coffee_Cafe_Logo__1_-removebg-preview.png';

import styles from '../Style/SideBar.module.css';
import { nanoid } from 'nanoid';

const SideBar= () =>{
    const [show , setShow] = useState(true);
    return (    
        <div className={styles.outer}>
            <ul className= {show? styles.sidebar2 : styles.sidebar }>
                <div className={styles.logo}>
                    <img src={logo} alt="ChillCup" className={styles.imglogo} />
                </div>
                <br />
                <br />
                <br />

                <li>
                    <NavLink to={'/'} key={nanoid()} className={styles.link} >
                        <GoHomeFill color={"000000"} size={30}/>
                    </NavLink>
                </li>                    
                <li>
                    <NavLink to={'/Menu'} key={nanoid()} >
                        <AiOutlineCoffee className={styles.icon} color={"000000"} size={30}/>
                    </NavLink>
                </li>

                <li>
                    <NavLink to={'/Menu'} key={nanoid()} className={styles.link} >
                        <AiOutlineHeart color={"000000"} size={30}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Cart'} key={nanoid()} className={styles.link} >
                        <AiOutlineShoppingCart color={"000000"} size={30}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Cart'} key={nanoid()} className={styles.link} >
                        <AiOutlineQuestionCircle className={styles.icon} color={"000000"} size={30}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Cart'} key={nanoid()} className={styles.link} >
                        <AiOutlinePhone className={styles.icon} color={"000000"} size={30}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/Settings'} key={nanoid()} className={styles.link} >
                        <BsFillGearFill className={styles.iconS}/>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;

