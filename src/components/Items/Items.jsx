// @flow
import React from 'react';

import "./item.css";
import { ratingConverter } from '../../common/CommonFunction';

function Items(props) {
    console.log(props.item)
    const { name, image_url, is_closed, price, categories: [first], rating, id } = props.item

    const ratingContainer = () => {
        return <div className="rate">
            <span class={`stars-container stars-${ratingConverter(rating)}`}>★★★★★</span>
        </div>
    }

    const redirectToDetail = () =>{
        window.location.href = '/'+id
    }
    return (
        <div className="item__main__card">
            <div className="item__image__container">
                <img src={image_url} className="item__image" />
            </div>
            <div className="item__name">
                {name}
            </div>
            <div className="item__rating">
                {ratingContainer()}
            </div>
            <div className="item__sku">
                <div className="item__price">
                    <p>{first.title} - {price}</p>
                </div>
                <div className="item__avability">
                    {is_closed ? <p className="item__close">CLOSED</p> : <p className="item__open">Open Now</p>}
                </div>
            </div>
            <button className="item__btn" onClick={()=>redirectToDetail()}>Learn More</button>
        </div>
    );
};

export default Items;