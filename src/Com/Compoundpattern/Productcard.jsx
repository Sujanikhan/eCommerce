import React from 'react'

const Productcard = ({children}) => {
  return <div className ="product-card">{children}</div>
};
const ProductImage= ({src,alt}) => {
    return <img className ="product-image" src={src} alt={alt}/>
  };
  const ProductTitle = ({children}) => {
    return <h2 className ="product-title">{children}</h2>
  };
  const ProductDescription = ({children}) => {
    return <p className ="product-description">{children}</p>
  };
  const ProductPrice = ({children}) => {
    return <span className ="product-price">{children}</span>
  };
  const ProductButton = ({children}) => {
    return <button className ="product-btn">{children}</button>
  };
  export {
    Productcard,
    ProductImage,
    ProductTitle,
    ProductDescription,
    ProductPrice,
    ProductButton,
  }

export default Productcard