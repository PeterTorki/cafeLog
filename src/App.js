import { useState, useCallback, useEffect } from "react";
import Menu from "./Components/Menu";
import SignInUp from "./Components/SignInUp";
import SideBar from "./Components/SideBar";
import { UserContext } from './Context/UserContext'
import styles from '../src/Style/App.module.css'
import Basket from "./Components/Basket/Basket";
import axios from "axios";
import './App.css'

import Cart from "./Components/Cart/Cart";
import { ShopContextProvider } from "./Context/ShopContext";
import { ProductsContext, ProductsContextProvider } from "./Context/ProductsContext";
import { useContext } from "react";
const App = () => {

  const [loggedInUser, setLoggedInUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
    {
      loggedInUser ?
        <ProductsContextProvider>
          <ShopContextProvider>
            <Menu />
            <Cart />
          </ShopContextProvider>
        </ProductsContextProvider>
    :
    <SignInUp value={{loggedInUser, setLoggedInUser}}/>
  }
  </UserContext.Provider>
  
    // <div>
    //   <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        
    //     {
    //       loggedInUser ?
    //       <div>
    //         <SideBar />
    //         <Menu /> 
    //         <Basket  value={{loggedInUser, setLoggedInUser}}/>
    //       </div>
    //       :
    //       <SignInUp value={{loggedInUser, setLoggedInUser}}/>
    //     }
          
    //     {/* <SideBar/>*/}
    //     {/* {

    //       loggedInUser ? 
    //       <div>
    //       <SideBar />
    //       <Menu /> 
    //       </div>
    //       : 
    //       <SignInUp value={{loggedInUser, setLoggedInUser}}/>
    //     } */}

    //     {/* <Menu /> */}

        
    //     {/* <AddProduct /> */}
    //   </UserContext.Provider>
    // </div>
  )
}

export default App;