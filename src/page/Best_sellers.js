import React from 'react'
import './Best_sellers.css'


export const Best_sellers = () => { 
    return (
        <div className="container_best_sell" >
        <div className="best_sellers_title">best sellers</div>
        <div className="container">
          <div className="item">
            <img className="img" src={require('../img/item2.jpg')} alt=""/>>
            <p className="price">$99.99</p>
            <p className="img_title">red normal person</p>
            <p className="img_title_low">Classy wine with a democratic price</p>
            <button className="more_button">More</button>
          </div>
          <div className="item">
            <img className="img" src={require('../img/item3.jpg')} alt="" />>
         <p className="price">$99.99</p>
            <p className="img_title">country set</p>
            <p className="img_title_low">Set for a lazy weekend, outside the city and not only</p>
            <button className="more_button">More</button>
          </div>
          <div className="item">

            asd
         </div>
          <div className="item">
            asd
         </div>
          <div className="item">
            asd
         </div>
          <div className="item">
            asd
         </div>
        </div>
      </div>
    )
}
