import { useState } from "react";
import Menu from "./src/Components/Menu";
import SignInUp from "./src/Components/SignInUp";
import SideBar from "./src/Components/SideBar";
import { UserContext } from './src/Context/UserContext'
import styles from '../src/Style/App.module.css'
import Basket from "./src/Components/Basket";
import AddProduct from "./src/Components/AddProduct"
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  
  return (
    <div>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        
        {
          loggedInUser ?
          <div>
            <SideBar />
            <Basket  value={{loggedInUser, setLoggedInUser}}/>
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