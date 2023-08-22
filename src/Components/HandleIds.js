import React from 'react'
import { nanoid } from 'nanoid'

const handleIds = ({productsArr}) => {
	console.log('hi')
	const newProductsArr = productsArr.map((product) => {
		const newExtras = product.Extras.map((extra) => {
			return {...extra, id: `extra-${nanoid()}`}
		})

		return {...product, id: nanoid(), Extras: newExtras}
	})
	console.log(newProductsArr)
	return (
		<div>handleIds</div>
	)
}

export default handleIds
