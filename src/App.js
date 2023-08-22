import { useState } from "react";
import Menu from "./Components/Menu";
import SignInUp from "./Components/SignInUp";
import SideBar from "./Components/SideBar";
import { UserContext } from './Context/UserContext'
import styles from '../src/Style/App.module.css'
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div className={styles.appContainer}>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        
        {/* <SideBar/>*/}
        {
          loggedInUser ? 
          <div>
          <SideBar />
          <Menu /> 
          </div>
          : 
          <SignInUp value={{loggedInUser, setLoggedInUser}}/>
        }
        {/* <Menu /> */}

        
        {/* <AddProduct /> */}
      </UserContext.Provider>
    </div>
  )
}

export default App;