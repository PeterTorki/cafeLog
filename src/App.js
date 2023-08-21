import { useContext, useEffect, useState } from "react";
import Menu from "./Components/Menu";
import AddProduct from "./Components/AddProduct";
import SignInUp from "./Components/SignInUp";
import SideBar from "./Components/SideBar";
import { FaBeer } from 'react-icons/fa';
import styles from '../src/Style/App.module.css'
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("Peter");

  return (
    <div className={styles.appContainer}>
      <SideBar/>
      <Menu />
      {/* <SignInUp /> */}
      {/* <AddProduct /> */}
    </div>
  )
}

export default App;