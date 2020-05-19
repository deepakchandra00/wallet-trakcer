import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddProductForm'
import EditUserForm from './forms/EditProductForm'
import UserTable from './tables/ProductTable'

const App = () => {
	// Data
	const productData = [
		{
			id: "1",
			date: "04/10/1989",
			desc: "lorem ipsum",
			income: "450",
			expense: "250"
		  },
		  {
			id: "2",
			date: "04/10/1989",
			desc: "lorem ipsum",
			income: "450",
			expense: "250"
		  },
		  {
			id: "3",
			date: "04/10/1989",
			desc: "lorem ipsum",
			income: "450",
			expense: "250"
		  }
	]

	const initialFormState = { id: null,	date: "",	desc: "",	income: "",	expense: "" }

	// Setting state
	const [ products, setProducts ] = useState(productData)
	const [ currentProduct, setCurrentProduct ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addProduct = product => {
		product.id = products.length + 1
		setProducts([ ...products, product ])
	}

	const deleteProduct = id => {
		setEditing(false)
		setProducts(products.filter(user => user.id !== id))
	}

	const updateProduct = (id, updatedProduct) => {
		setEditing(false)

		setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
	}

	const editRow = product => {
		setEditing(true)

		setCurrentProduct({ id: product.id, desc: product.desc, income: product.income, expense:product.expense })
	}

	const Total = () => (
		<table>
			<tr>
				<td className="font-weight-bold">Summary</td>
				<td className="font-weight-bold">
					{products.reduce((sum, i, index) => (
					sum += index * i.income
					), 0)}
				</td>
				<td className="font-weight-bold">
					{products.reduce((sum, i, index) => (
					sum += index * i.expense
					), 0)}
				</td>
				<td className="font-weight-bold"> {products.reduce((sum, i, index) => (
					sum += index * i.income
					), 0) - products.reduce((sum, i, index) => (
						sum += index * i.expense
						), 0) }</td>
				<td className="hides">asdfadsfasd</td>
				
			</tr>
		</table>
		
		)
	return (
		<div className="container">
			<h1 className="text-center">Wallet Tracker</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Product</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentProduct={currentProduct}
								updateProduct={updateProduct}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Product</h2>
							<AddUserForm addProduct={addProduct} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View products</h2>
					<UserTable products={products} editRow={editRow} deleteProduct={deleteProduct} />
					<Total />
				</div>
			</div>
		</div>
	)
}

export default App
