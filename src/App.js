import { useEffect, useState } from "react";
import Menu from "./Components/Menu";
import AddProduct from "./Components/AddProduct";
import SignInUp from "./Components/SignInUp";

const App = () => {
  return (
    <div className="welcome">
      {/* <SignInUp /> */}
      <Menu />
      {/* <AddProduct /> */}
    </div>
  )
}

export default App;