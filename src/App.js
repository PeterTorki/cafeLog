import { useState, useCallback, useEffect } from "react";
import Menu from "./Components/Menu";
import SignInUp from "./Components/SignInUp";
import SideBar from "./Components/SideBar";
import { UserContext } from './Context/UserContext'
import styles from '../src/Style/App.module.css'
import axios from "axios";
import './App.css'
import Basket from "./Components/Cart/Basket";
import { ShopContextProvider } from "./Context/ShopContext";
import { ProductsContext, ProductsContextProvider } from "./Context/ProductsContext";
import { useContext } from "react";

import InitPage from "./Components/InitPage";
import Settings from "./Components/Settings";

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
    {
      loggedInUser ?
        <ProductsContextProvider>
          <ShopContextProvider>
            <div>
              <SideBar />
              <InitPage />
              <Menu /> 
              <Basket />
              {/* <Settings /> */}
            </div>
          </ShopContextProvider>
        </ProductsContextProvider>
    :
    <SignInUp value={{loggedInUser, setLoggedInUser}}/>
  }
  </UserContext.Provider>
  )
}

export default App;