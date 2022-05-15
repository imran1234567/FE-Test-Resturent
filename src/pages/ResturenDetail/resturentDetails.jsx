import React,{useEffect, useState} from 'react';

import { ratingConverter } from '../../common/CommonFunction';
import yelp from '../../hooks/yelp-api/api'
import "./resturentDetail.css";


const Resturentdetails = (props) => {
    const [detail,setDetail] = useState({})
    const { name, price,is_closed,rating} = detail

    const fetchDetail = async () =>{
        try{
            const response = await yelp.get(props.match.params.id)
            setDetail(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchDetail()
    },[])

    const ratingContainer = () => {
        return <div className="rate">
            <span class={`stars-container stars-${ratingConverter(rating)}`}>★★★★★</span>
        </div>
    }

    return (
        <div className="detail__container">
            <div className="detail__header__container">
                <div className="content__conatiner">
                    <h1 className="resturent__title">{name}</h1>
                    {ratingContainer()}
                    <div className="detail__item__sku">
                        <div className="item__price">
                            <p>{detail?.categories?.[0]?.title} - {price}</p>
                        </div>
                        <div className="item__avability">
                            {is_closed ? <p className="item__close">CLOSED</p> : <p className="item__open">Open Now</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resturentdetails;
