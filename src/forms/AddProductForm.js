import React, { useState } from 'react'

const AddProductForm = props => {
	const initialFormState = { id: null,	date: "",	desc: "",	income: "",	expense: ""  }
	const [ product, setProduct ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				props.addProduct(product)
				setProduct(initialFormState)
			}}
		>
			<label>Desc</label>
			<input type="text" name="desc" value={product.desc} onChange={handleInputChange} />
			<label>Income</label>
			<input type="text" name="income" value={product.income} onChange={handleInputChange} />
			<label>Expense</label>
			<input type="text" name="expense" value={product.expense} onChange={handleInputChange} />
			<button>Add new Product</button>
		</form>
	)
}

export default AddProductForm
