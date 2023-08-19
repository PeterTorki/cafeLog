import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid'
import axios from 'axios'

const SignUp = () => {
	
	const [user, setUser] = useState({
		id: `user-${nanoid()}`,
		name: "",
		imgSrc: "https://lh3.google.com/u/0/d/1UYHQVGpNSk558ce-_D9D6I7Q95zF9tRa=w1920-h979-iv1",
		phoneNumber: "",
		email: "",
		password: "",
		address: "",
		role: "",
		previousOrders: [],
		cart: [],
		favorites: []
	})
	useEffect(() => {
		console.table(user)
	})
	const handleChange = (e) => {
		const {name, value} = e.target;
		setUser({ ...user, [name]: value })
	}
	
	const SignUp = (e) => {
		axios.post("http://localhost:3466/Users", user)
		.then(res => console.log(res.data));
	}

	return (
		<form action='' onSubmit={SignUp}>
			<div className="form-group" >
				<label htmlFor="user-name">User Name</label>
				<input type="text" className="form-control" id="user-name" aria-describedby="User Name" name='name' value={user.name} placeholder="Enter User Name" onChange={handleChange}/>
			</div>

			<div className="form-group" >
				<label htmlFor="user-email">User Email</label>
				<input type="text" className="form-control" id="user-email" aria-describedby="User Email" name='email' value={user.email} placeholder="Enter User Email" onChange={handleChange}/>
			</div>
	
			<div className="form-group" >
				<label htmlFor="user-email">User Password</label>
				<input type="password" className="form-control" id="user-password" aria-describedby="User Email" name='email' value={user.email} placeholder="Enter User Password" onChange={handleChange}/>
			</div>

			<div className="form-group" >
				<label htmlFor="user-phone">User Phone Number</label>
				<input type="number" className="form-control" id="user-phone" aria-describedby="User Phone Number" name='phoneNumber' value={user.phoneNumber} placeholder="Enter User Phone" onChange={handleChange}/>
			</div>

			<div className="form-group" >
				<label htmlFor="user-address">User Address</label>
				<input type="text" className="form-control" id="user-address" aria-describedby="User Address" name='address' value={user.address} placeholder="Enter User Address" onChange={handleChange}/>
			</div>

			<div className="form-group" >
				<label htmlFor="user-img">User Image Link</label>
				<input type="text" className="form-control" id="user-img" aria-describedby="User Image Link" name='imgSrc' value={user.imgSrc === 'https://lh3.google.com/u/0/d/1UYHQVGpNSk558ce-_D9D6I7Q95zF9tRa=w1920-h979-iv1'? '': user.imgSrc} placeholder="Enter User img" onChange={handleChange}/>
				<img width={200} src={user.imgSrc == ''? 'https://lh3.google.com/u/0/d/1UYHQVGpNSk558ce-_D9D6I7Q95zF9tRa=w1920-h979-iv1': user.imgSrc}/>
			</div>

			
			<button type="submit" className="btn btn-dark">Submit</button>
		</form>
	)
}

export default SignUp