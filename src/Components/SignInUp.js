import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";
import axios from "axios";
import styles from "../Style/SignInUp.module.css";

const SignInUp = () => {
  const [userSignUp, setUserSignUp] = useState({
    id: `user-${nanoid()}`,
    name: "",
    imgSrc:
      "https://lh3.google.com/u/0/d/1UYHQVGpNSk558ce-_D9D6I7Q95zF9tRa=w1920-h979-iv1",
    phoneNumber: "",
    email: "",
    password: "",
    address: "",
    role: "",
    previousOrders: [],
    cart: [],
    favorites: [],
  });
  
  const [userSignIn, setUserSignIn] = useState({});
  
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setUserSignUp({ ...userSignUp, [name]: value });
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserSignIn({ ...userSignIn, [name]: value });
  };


  const SignInUp = (e) => {
    axios.post("http://localhost:3466/Users", userSignUp);
  };

  const SignIn = async(e) => {
    e.preventDefault();
    const users = await axios.get("http://localhost:3466/Users")
                        .then((res) => res.data);
    const foundUser = users.filter((user) => user.email === userSignIn.inEmail && user.password === userSignIn.inPassword);
    console.log(userSignIn.inEmail)
    console.log(userSignIn.inPassword)
    if(!foundUser.length) alert("User not found");
  }

  const [activePanel, setActivePanel] = useState(styles.rightPanelActive);

  return (
    <div className={styles.body}>
      <div className={`${styles.container} ${activePanel}`}>
        <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
          <form action="" onSubmit={SignInUp}>
            <h2>Create your account</h2>
            <div>
              <label htmlFor="user-name">User Name</label>
              <input
                type="text"
                id="user-name"
                name="name"
                value={userSignUp.name}
                placeholder="Peter Joseph"
                onChange={handleSignUpChange}
              />
            </div>

            <div>
              <label htmlFor="user-email">User Email</label>
              <input
                type="text"
                id="user-email"
                name="email"
                value={userSignUp.email}
                placeholder="peter.j.torki@gmail.com"
                onChange={handleSignUpChange}
              />
            </div>

            <div>
              <label htmlFor="user-password">User Password</label>
              <input
                type="password"
                id="user-password"
                name="password"
                value={userSignUp.password}
                placeholder="Password"
                onChange={handleSignUpChange}
              />
            </div>

            <div>
              <label htmlFor="user-phone">User Phone Number</label>
              <input
                type="number"
                id="user-phone"
                name="phoneNumber"
                value={userSignUp.phoneNumber}
                placeholder="01211036617"
                onChange={handleSignUpChange}
              />
            </div>

            <div>
              <label htmlFor="user-address">User Address</label>
              <input
                type="text"
                id="user-address"
                name="address"
                value={userSignUp.address}
                placeholder="Cairo, Egypt"
                onChange={handleSignUpChange}
              />
            </div>

            <button type="submit" className={styles.btnstyle}>
              Sign Up
            </button>
          </form>   
        </div>
        <div className={`${styles.formContainer} ${styles.signInContainer}`}>
        <form action="" onSubmit={SignIn}>
            <h2>Sign In</h2>
            <div>
              <label htmlFor="user-sign-email">User Email</label>
              <input
                type="text"
                id="user-in-email"
                name="inEmail"
                value={userSignIn.email}
                placeholder="peter.j.torki@gmail.com"
                onChange={handleSignInChange}
              />
            </div>
            <div>
              <label htmlFor="user-in-password">User Password</label>
              <input
                type="password"
                id="user-in-password"
                name="inPassword"
                value={userSignIn.password}
                placeholder="Password"
                onChange={handleSignInChange}
              />
            </div>
            <button type="submit">
              Sign In
            </button>
          </form>
        </div>
        <div className={`${styles.overlayContainer}`}>
            <div className={`${styles.overlay}`}>
                <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" onClick={() => setActivePanel('')}>Sign In</button>
                </div>
                <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                  <h1>Hello, Friend!</h1>
                  <p>your personal details and start journey with us</p>
                  <button className={styles.ghost} onClick={() => setActivePanel(styles.rightPanelActive)}>Sign Up</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
