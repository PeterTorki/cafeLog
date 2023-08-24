import React from 'react'
import Style from '../StylesSidebar/Settings.module.css'
export default function Settings() {
  return (
    <div className={Style.container}>
        <div className={Style.content}>
            <div className={Style.profile}>
                <img src="" alt="" /><br />
                <div>
                    <input type="text" placeholder='Moemen Adam'/>
                    <input type="text"  placeholder='01218689319'/>
                    <input type="text"  placeholder='Cairo egypt'/>
                    <input type="email" placeholder='aa@gmail.com' />
                    <input type="password" placeholder='*******' />
                    <center><button>Submit</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}
