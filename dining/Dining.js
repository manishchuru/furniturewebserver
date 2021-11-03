import React from 'react';
import Diningapi from './Diningapi';
import '../Banch/bench.css'
import { Link } from 'react-router-dom';    
const Dining = () => {
    return (
        <div>
        <div className="first">
        <h6>35 product</h6>
            {
                Diningapi.map((value)=>{
                    return <div className="frontimages">
                    <Link to={`/dining/${value._id}`}>
                   
                       <img src={value.img[0]} alt='images' />
                   </Link>
                       <p>{value.desc}</p>
                       <button>view</button>
                    </div>
                })
            }
            </div>
        </div>
    );
}

export default Dining;
