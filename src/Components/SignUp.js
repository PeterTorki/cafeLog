import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";
import axios from "axios";
import styles from "../Style/Signup.module.css";

const SignUp = () => {
  const [user, setUser] = useState({
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
  useEffect(() => {
    console.table(user);
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const SignUp = (e) => {
    axios
      .post("http://localhost:3466/Users", user)
      .then((res) => console.log(res.data));
  };

  return (
    <div className={styles.container}>
      <div class={styles.cardcontainer}>
        <div className={styles.formcontainer}>
          <form action="" onSubmit={SignUp}>
            <h2>Create your account</h2>
            <div className={styles.formgroup}>
              <label htmlFor="user-name">User Name</label>
              <input
                type="text"
                className={styles.formcontrol}
                id="user-name"
                aria-describedby="User Name"
                name="name"
                value={user.name}
                placeholder="Enter User Name"
                onChange={handleChange}
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="user-email">User Email</label>
              <input
                type="text"
                className={styles.formcontrol}
                id="user-email"
                aria-describedby="User Email"
                name="email"
                value={user.email}
                placeholder="Enter User Email"
                onChange={handleChange}
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="user-email">User Password</label>
              <input
                type="password"
                className={styles.formcontrol}
                id="user-password"
                aria-describedby="User Email"
                name="email"
                value={user.email}
                placeholder="Enter User Password"
                onChange={handleChange}
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="user-phone">User Phone Number</label>
              <input
                type="number"
                className={styles.formcontrol}
                id="user-phone"
                aria-describedby="User Phone Number"
                name="phoneNumber"
                value={user.phoneNumber}
                placeholder="Enter User Phone"
                onChange={handleChange}
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="user-address">User Address</label>
              <input
                type="text"
                className={styles.formcontrol}
                id="user-address"
                aria-describedby="User Address"
                name="address"
                value={user.address}
                placeholder="Enter User Address"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.btnstyle}>
              SignUp
            </button>
          </form>
        </div>
        <div className={styles.imgcontainer}>
          <img src="IMG-20230819-WA0020.JPG" className={styles.coffeimg} />
        </div>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default SignUp;
