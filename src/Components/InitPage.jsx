import React from 'react'
import Style from '../Style/InitPage.module.css';


export default function InitPage() {
  return (
    <div className={Style.comtainer}>
      <div className={Style.content}>
        <div className={Style.text}>
          <h1>We Offers a Good Coffe</h1>
          <br />
          <h3>Good Ideas Start With Brainstorming. <br /><br />Great IDeas Start With Coffe.</h3>
        </div>
        <div className={Style.imgContainer}>
          <img src="main.png" alt="Coffe Cup" />
        </div>
      </div>
    </div>
  )
}
