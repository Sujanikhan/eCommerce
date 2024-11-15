import React from 'react'

const index = ({cart}) => {
  return (
    <div className='cart'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item,index)=>{
            return(
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td><img src={item.image} height={"100px"} width={"100px"}/></td>
                <td>{item.price}</td>
                <td><button>remove</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default index