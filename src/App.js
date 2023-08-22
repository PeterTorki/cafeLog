import { useState } from "react";
import Menu from "./Components/Menu";
import SignInUp from "./Components/SignInUp";
import SideBar from "./Components/SideBar";
import { UserContext } from './Context/UserContext'
import styles from '../src/Style/App.module.css'
import Basket from "./Components/Basket";
import AddProduct from "./Components/AddProduct"
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  return (
    <div>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
         {
          loggedInUser ?
          <div>
            <SideBar />

            <Menu />
          </div>
          :
          <SignInUp value={{loggedInUser, setLoggedInUser}}/>
        }
        {/* <SideBar/>*/}
        {/* {

          loggedInUser ? 
          <div>
          <SideBar />
          <Menu /> 
          </div>
          : 
          <SignInUp value={{loggedInUser, setLoggedInUser}}/>
        } */}

        {/* <Menu /> */}

        
        {/* <AddProduct /> */}
      </UserContext.Provider>
    </div>
  )
}

export default App;