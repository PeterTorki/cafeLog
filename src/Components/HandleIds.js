import React from 'react'
import { nanoid } from 'nanoid'

const handleIds = ({productsArr}) => {
	const newProductsArr = productsArr.map((product) => {
		// handle product id
		
		const newExtras = product.Extras.map((extra) => {
			return {...extra, id: `extra-${nanoid()}`}
		})

		return {...product, id: `prod-nanoid()`, Extras: newExtras}
	})
	return (
		<div>handleIds</div>
	)
}

export default handleIds
