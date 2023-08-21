import { useContext, useEffect, useState } from "react";
import Menu from "./Components/Menu";
import AddProduct from "./Components/AddProduct";
import SignInUp from "./Components/SignInUp";
import { userContext } from './Context/userContext'

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("Peter");

  return (
    <div className="welcome">
      <userContext.Provider value={{loggedInUser, setLoggedInUser}}>
        <SignInUp />
        
        {/* <Menu /> */}
        {/* <AddProduct /> */}
      </userContext.Provider>
    </div>
  )
}

export default App;