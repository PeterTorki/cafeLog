import React from 'react'
import Style from '../Style/InitPage.module.css';
import logo from './imgsComponent/Brown_Illustrasi_Coffee_Cafe_Logo__1_-removebg-preview.png';


export default function InitPage() {
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div className={Style.text}>
          <h1>Welcome to ChillCup</h1>
          <br />
          <h3>Where Every Sip and Bite Tells a Story</h3>
        </div>
        <div className={Style.imgContainer}>
          <img src={logo} alt="ChillCup" className={Style.logo} />
        </div>
      </div>
    </div>
  )
}
