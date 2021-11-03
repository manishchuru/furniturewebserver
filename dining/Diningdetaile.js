import React from 'react';
import './total.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import   Diningapi from './Diningapi';
import {Button} from 'react-bootstrap';
const Grocery= () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,   
    slidesToScroll: 1,
   autoplay:true,
   slidesToShow:5,
   
   responsive:[
     {
       breakpoint:1200,
       settings:{
         slidesToShow:4,
       }
     },
     {
      breakpoint:550,
      settings:{
        slidesToShow:3,
      }
    }, 
     {
      breakpoint:357,
      settings:{
        slidesToShow:2,
      }
    }

   ]
   
  };
 
  return (
    <div>
    <div className="headertop">
    <div className="container ">
      <div className="row">
  
   </div>
    </div>
    </div>
    <Slider  {...settings}  className='slider'>
      {
        Diningapi.map((a)=>{
         return <div>

         <React.Fragment>
         <div className='innerdata'>
          <img src={a.img} alt="" />
      
        </div>
       </React.Fragment>
       </div>
       })

      }

</Slider>
  
    </div>
  );
}

export default      Grocery;