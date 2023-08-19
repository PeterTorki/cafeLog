import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid'
import axios from 'axios'
import styles from '../Style/AddProduct.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const DEFAULT_IMAGE = 'https://lh3.googleusercontent.com/fife/AKsag4Nxz45kOcZFgVE8CWRvl5ESFzMqhkpF7dGC1-idfXZsoXq3bTLySItfGOQlGDP0gobwvSult4i68Rhvhwe5LbreUL5iWH8QGPBYHWSy34l23ED2GWDWEjNN9fsRfPej4v-pkQhGZ4QQBGClOXMvQ3YuWt6fWcOEs7yiesrGvbLsZCC78kztRGG6cXxbG6K6Ycw7xvUrUg1C-qzgkPqZr5WOmPEAm3-112Skt9EQAlT_c9ivMKbdGZhC5G03BPXzsYhbKVjjsZgBHpeKtW7EsaMMlVcwpqqFDk8nUB48RCxCv08AmnwRCa1zn2j-wDKxOBxNuZc1ydz_UJ1w-qOFaqE81l4qVn8-28MAWrd3HPBBdnPLKmsQ9tJLHe1UjSMej9WQFAA0vo8XXEdzgXuXFSgB9xcQkXtc_CEcS-6dbNYYjomcgNjab-pl6mn_sBQz2M-jbEjor_CvXCUt4oz3cgCssC0SxQVN-Rw2X4fgB58o3t1zWJ7fbOlBk478hqEmXEvtXR_KJz4DGWnaNjrnRAx3W6IXeE_L3YoTQbwLT91vow_UaW13zHtAYqR5lnmlJOnCKAELKE6SSBbBYyWYe4n1vVhK6rboe1D9Ra3QKZTZrH5K04vVOYIibB8xVMW3QUsPABKS6ZuJWPKe0YiNNfkcOMPQKrPXtQ8Z1FqkkPHhjfBF2VhOCsZUfifdNtp4nv8v5c-nvQ-WFeQuXVxWwmRG1YQf1EoYKO_47vxLY-3bEq9ATqbETofSrBVul_-Oale8vswR9qKLf0XfG6V9dQd2_nvNoYAhw7E40Gdz_Etk1ADWHfmj8gv74ozUzyWDWDJMY2bv4bo75GgI_ptnl-KreKXSQukXlF-Vl_5bY2OcDyp09CP8hVgDAZulkwYmCpm1Hzw8eUIJ2IYV2ctncK3rrOtDHHWVX5oU-GaEvtu2Zf6JpOLQpjcR-arGneVaufv1E-LdQro7j-vksR4PnEiUa0LxCkU_K_TQ_ajtsTXZsy2olAl1NSyhzHlZ_HUQHbQQIsS3tGTjdi3nMz1LXgk0uOq1jX9WPxx9g9WWafiPS_mMzG1MbhomZbnaGDloX9tFORdTfm3xMWQAQ8BTcVThontdGVNuzz-WY79tpuz8bpCp-E4gtHtgPQqtQfhiQA25vF3P4dOw3dZ5Bps8dFq08JetHvtIVXst3oLKU7kUgMjHYs9wsC_aLhkWb-RQv_PrpGxUwNaxgFe9AGriEy1hB7BA-REvGTRsRvLMjqC_IcS6QoH3-pIcGOdX4JbwFR1hwWOM8mbT8fl16nmtXaxlKV8D_t8wMLbLXJ3fO4zrpawUNPGSDFS24nvUtxmY0CX8hgTnbyHNq0WOyppJleFwdoiAeJ8uFcLuverd1aJBCajQkfffhy-0hxW-cqwf07Ot5MTScT7zCta1K0oC867Gi6K8hgo6uuP8ZYV_9PDN8rRvJR_vqsZwVF2OVUyonwp2AYD25d5tQ2Gg9wad-uStFqoHP5L6XnepX2E6Zv-v18nfPxwClHhghV11K2565-VOwl-q5naULrrPVvPt0wc48nRfgyZohBcLJ9gzdBzThwHVefj0GIc4sl3zbXIrSFd36WJtU2HQ7A=w1920-h979';

const AddProduct = () => {
	
	const [product, setProduct] = useState({
		id: `prod-${nanoid()}`,
		name: "",
		imgSrc: DEFAULT_IMAGE,
		type: "",
		description: "",
		price: "",
		quantity: "",
		Extras: []
	})
	const handleChange = (e) => {
		const {name, value} = e.target;
		
		setProduct({ ...product, [name]: value })
	}

	useEffect(() => {
		console.log(product);
	}, [product])

	const handleExtraChange = (e) => {
		const {name, value} = e.target;
		const idx = name.split('-')[1];
		const extraName = value.split('-')[0];
		const extraPrice = value.split('-')[1];

		const newExtras = [...product.Extras];

		if (!newExtras[idx]?.id) {
			newExtras[idx] = {id: `extra-${nanoid()}`, name: extraName, price: extraPrice};
		}
		else {
			newExtras[idx] = {...newExtras[idx], name: extraName, price: extraPrice};
		}
		
		const newExtraInputs = [...extraInputs];
		newExtraInputs[idx] = {...extraInputs[idx], value: value};
		setExtraInputs(newExtraInputs);
		setProduct({...product, Extras: newExtras});
	}

	
	const [extraInputs, setExtraInputs] = useState([
		{
			name: `Extras-${0}`,
			id: `product-extra-${nanoid()}}`,
			placeholder: "Enter Product Extra",
			type: "text",
			className: "form-control",
			value: product.Extras[0]?.value? product.Extras[0].value: ''
		}
	])
	
	const AddProduct = (e) => {
		axios.post("http://localhost:3477/Products", product)
		.then(res => console.log(res.data));
	}
	
	const addBtn = () => {
		const idx = extraInputs.length;
		setExtraInputs([...extraInputs, {
			name: `Extras-${idx}`,
			id: `product-extra-${nanoid()}}`,
			placeholder: "Enter Product Extra",
			type: "text",
			className: "form-control",
			value: product.Extras[idx]?.value? product.Extras[idx].value: ''
		}])
	}

	return (
		<div className={styles.addProduct}>
			<h1>Add Product</h1>
			<form action='' onSubmit={AddProduct} className={styles.form}>
				<div className={styles.withImage}>
					<div className={styles.formStyle}>
						<div className={`form-group ${styles.inputs}`} >
							<label htmlFor="prod-name">Product Name</label>
							<input type="text" className="form-control" id="prod-name" name='name' value={product.name} placeholder="Enter Product Name" onChange={handleChange}/>
						</div>

						<div className={`form-group ${styles.inputs}`} >
							<label htmlFor="prod-quantity">Product Quantity</label>
							<input type="number" className="form-control" id="prod-quantity" name='quantity' value={product.quantity} placeholder="Enter Product Quantity" onChange={handleChange}/>
						</div>

						<div className={`form-group ${styles.inputs}`} >
							<label htmlFor="prod-quantity">Product Type</label>
							<input type="text" className="form-control" id="prod-type" name='type' value={product.type} placeholder="Enter Product Type" onChange={handleChange}/>
						</div>

						<div className={`form-group ${styles.inputs}`} >
							<label htmlFor="prod-quantity">Product Price</label>
							<input type="text" className="form-control" id="prod-price" name='price' value={product.price} placeholder="Enter Product Price" onChange={handleChange}/>
						</div>

						<div className={`form-group ${styles.inputs}`} >
							<label htmlFor="prod-description">Product Description</label>
							<input type="text" className="form-control" id="prod-price" name='description' value={product.description} placeholder="Enter Product Description" onChange={handleChange}/>
						</div>

						<div className={`form-group ${styles.inputs}`} >
							<label htmlFor="prod-img">Product Image Link</label>
							<input type="text" className="form-control" id="product-img" name='imgSrc' value={product.imgSrc === DEFAULT_IMAGE? '': product.imgSrc} placeholder="Enter Product img" onChange={handleChange}/>
						</div>

						<div className={`form-group ${styles.extras}`} >
							<label htmlFor="prod-extras" style={{marginRight: '10px'}}>Extras</label>
							<div>
							{
								extraInputs.map((input, index) => {
									return (
										<input key={index} name={input.name} type="text" className="form-control" id="prod-extras" value={input.value} placeholder="Name - Price" onChange={handleExtraChange}/>
										)
									})
								}
							</div>
							<AiOutlinePlusCircle className={styles.addExtra} size={40} onClick={addBtn}/>
						</div>
					</div>
					<img width={200} src={product.imgSrc === ''? DEFAULT_IMAGE: product.imgSrc}/>

				</div>
			<button type="submit" className="btn btn-dark">Submit</button>
			</form>

		</div>

	)
}

export default AddProduct