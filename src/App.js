import { useState, useCallback, useEffect } from "react";
import Menu from "./Components/SidebarPages/Menu/Menu";
import SignInUp from "./Components/SignInUp";
import SideBar from "./Components/SideBar";
import { UserContext } from './Context/UserContext'
import styles from '../src/Style/App.module.css'
import axios from "axios";
import './App.css'
import Basket from "./Components/SidebarPages/Cart/Basket";
import { ShopContextProvider } from "./Context/ShopContext";
import { ProductsContext, ProductsContextProvider } from "./Context/ProductsContext";
import { useContext } from "react";
import InitPage from "./Components/SidebarPages/InitPage";
import Settings from "./Components/SidebarPages/Settings";
import Favorites from "./Components/SidebarPages/Favorites";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./Components/SidebarPages/ContactUs";
import AboutUs from "./Components/SidebarPages/AboutUs";

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
    {
      loggedInUser ?
    <ProductsContextProvider>
    <ShopContextProvider>
        <BrowserRouter>
            <SideBar />
      <div style={{marginLeft: '75px'}}>
            <Routes>
            <Route path="/" element={<InitPage />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Cart" element={<Basket />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
    </div>

        </BrowserRouter>

        </ShopContextProvider>
      </ProductsContextProvider>
      : 
      <SignInUp value={{loggedInUser, setLoggedInUser}}/>
    }
    </UserContext.Provider>

  )
}

export default App;