import React from 'react'
import './index.scss'
import{
  Productcard,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  // ProductButton,
} from "../../Compoundpattern/Productcard";

const index = ({data, search, addCart}) => {
  return (
    <div className='Card' >
  {data
  .filter((item,index)=>item.category.toLowerCase().includes(search))
  .map((item,index) =>{
    return(
      <Productcard key={index}>
        <ProductImage src={item.image} alt={item.name}/>
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <br/>
        <button onClick={()=> addCart(item)}>Add cart</button>
      </Productcard>
    )
  })

  }
    </div>
  )
}

export default index