import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid'
import axios from 'axios'

const AddProduct = () => {
	
	const [product, setProduct] = useState({id: `prod-${nanoid()}`, name: "", imgSrc: "", type: "", description: "", price: "", quantity: "", Extras: []})
	
	const handleChange = (e) => {
		const {name, value} = e.target;
		console.log(name + ' ' + value)
		setProduct({ ...product, [name]: value })
	}
	
	const AddProduct = (e) => {
		axios.post("http://localhost:3477/Products", product)
		.then(res => console.log(res.data));
	}

	return (
		<form action='' onSubmit={AddProduct}>
			<div className="form-group" >
				<label htmlFor="prod-name">Product Name</label>
				<input type="text" className="form-control" id="prod-name" aria-describedby="Product Name" name='name' value={product.name} placeholder="Enter Product Name" onChange={handleChange}/>
			</div>

			<div className="form-group" >
				<label htmlFor="prod-quantity">Product Quantity</label>
				<input type="number" className="form-control" id="prod-quantity" aria-describedby="Product Quantity" name='quantity' value={product.quantity} placeholder="Enter Product Quantity" onChange={handleChange}/>
			</div>

			<div className="form-group" >
				<label htmlFor="prod-quantity">Product Type</label>
				<input type="text" className="form-control" id="prod-type" aria-describedby="Product Type" name='type' value={product.type} placeholder="Enter Product Type" onChange={handleChange}/>
			</div>

			<div className="form-group" >
				<label htmlFor="prod-quantity">Product Price</label>
				<input type="text" className="form-control" id="prod-price" aria-describedby="Product Price" name='price' value={product.price} placeholder="Enter Product Price" onChange={handleChange}/>
			</div>

			<button type="submit" className="btn btn-dark">Submit</button>
		</form>
	)
}

export default AddProduct