import { useEffect, useState } from "react";
import Menu from "./Components/Menu";
import AddProduct from "./Components/AddProduct";
import SignUp from "./Components/SignUp";

const App = () => {
  return (
    <div className="welcome">
      {/* <SignUp /> */}
      {/* <Menu /> */}
      <AddProduct />
    </div>
  )
}

export default App;