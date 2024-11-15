import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const index = ({search,data}) => {
  return (
    <div>
        <Carousel autoPlay style={{display:"flex", justifyContent:"center"}}>
    {data
    .filter((item,index)=>item.category.toLowerCase().includes(search))
    .map((item,index)=>{
        return(
            <header key={index} style={{height:"700px", width:"100%"}}>
                <center>
                <img src={item.image} height={"800px"}/>
                <p className="legend">
                        <h1>{item.title}</h1>
                        <p>{item.price} Rs</p>
                        <p>{item.rating.rate}⭐</p>
                    </p>
                </center>
            </header>
        )
    })

    }
    </Carousel>
    </div>
  )
}

export default index