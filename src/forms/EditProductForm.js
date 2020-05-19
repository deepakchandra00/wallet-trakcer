import React, { useState, useEffect } from 'react'

const EditProductForm = props => {
  const [ product, setProduct ] = useState(props.currentProduct)

  console.log(product)
  
  useEffect(
    () => {
      setProduct(props.currentProduct)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateProduct(product.id, product)
      }}
    >
      <label>Name</label>
      <input type="text" name="desc" value={product.desc} onChange={handleInputChange} />
      <label>Income</label>
      <input type="text" name="income" value={product.income} onChange={handleInputChange} />
      <label>Expense</label>
      <input type="text" name="expense" value={product.expense} onChange={handleInputChange} />
      <button>Update Product</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditProductForm
