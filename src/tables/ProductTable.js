import React from 'react'

const ProductTable = props => (

  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th>Income</th>
        <th>Expense</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>

      {props.products.length > 0 ? (
        props.products.map((product, index, sum) => (
          <tr key={product.id}>
            <td>{product.desc}</td>
            <td>{product.income}</td>
            <td>{product.expense}</td>
            <td>{product.income - product.expense }</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(product)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.delete_Product(product.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No products</td>
        </tr>
      )
      }
 {/* <tr>
      <td className="font-weight-bold">Summary</td>
      <td className="font-weight-bold">
        {props.products.reduce((sum, i, index) => (
        sum += index * i.income
        ), 0)}
      </td>
      <td className="font-weight-bold">
        {props.products.reduce((sum, i, index) => (
        sum += index * i.expense
        ), 0)}
      </td>
      <td className="font-weight-bold"> {props.products.reduce((sum, i, index) => (
        sum += index * i.income
        ), 0) - props.products.reduce((sum, i, index) => (
          sum += index * i.expense
          ), 0) }</td>
      <td className="hides">asdfadsfasd</td>
      
    </tr> */}

    </tbody>
  </table>
)

export default ProductTable
