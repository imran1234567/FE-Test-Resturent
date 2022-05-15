import React, { useEffect, useState } from 'react';
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import ReactDOM from "react-dom";

import Items from '../components/Items/Items';
import userResults from '../hooks/yelp-api/userResults';
import "./resturent.css"

function Resturents(props) {

    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage,limit] = userResults()
    const [optionSelected, setOptionSelected] = useState(null)
    const [optionSelected2, setOptionSelected2] = useState(null)
    const [resturents, setResturents] = useState([])
    const [dataLimit,setDataLimit] = useState(6)

    const category = [
        {
            value: 'italian',
            label: 'Italian'
        }, {
            value: 'seafood',
            label: 'Seafood'
        }, {
            value: 'steakhouses',
            label: 'Steakhouses'
        }, {
            value: 'japanese',
            label: 'Japanese'
        }, {
            value: 'american',
            label: 'American'
        }, {
            value: 'mexican',
            label: 'Mexican'
        }, {
            value: 'thai',
            label: 'Thai'
        }
    ]

    const cost = [
        {
            value: 1,
            label: "$"
        }, {
            value: 2,
            label: '$$'
        }, {
            value: 3,
            label: '$$$'
        }, {
            value: 4,
            label: '$$$$'
        }
    ]

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }

    const handleCategoryChange = (selected) => {
        setOptionSelected(selected)
        searchApi("resturent",selected.value,optionSelected2?.value ? optionSelected2.value : [],dataLimit)
    }

    const handleCostChange = (item) =>{
        setOptionSelected2(item)
        searchApi("resturent",optionSelected?.value ? optionSelected.value : [] , item.value,dataLimit)
    }

    const clearAll = () =>{
        setOptionSelected(null)
        setOptionSelected2(null)
        searchApi("resturent",[],[],6)
    }

    const loadMore = () =>{
        setDataLimit(dataLimit + 6)
        searchApi(dataLimit)
    }

    const Option = (props) => {
        return (
            <div>
                <components.Option {...props}>
                    <input
                        type="checkbox"
                        checked={props.isSelected}
                        onChange={() => null}
                        id="checkbox"
                        className="checkbox-round"
                    />{" "}
                    <label>{props.label}</label>
                </components.Option>
            </div>
        );
    };

    const IndicatorSeparator = () =>{
        return <div></div>
    }

    useEffect(() => {
        filterResultsByPrice("$$")
        setResturents(results)
    })

    return (
        <div className="main__container">
            <div className="main__banner__header">
                <h1 className="page__title">Restaurants</h1>
                <p className="page__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="filter__container">
                <div className="filter__left">
                    <p className="filter__text">Filter By :</p>
                    <div className="check__filter">
                        <input id="r1" type="radio" name="group1" className="radio__box" />
                        <label for="r1"> Open Now</label>
                    </div>
                    <div className="dropbox__filter">
                        <ReactSelect
                            options={cost}
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            styles={customStyles}
                            components={{
                                Option,
                                IndicatorSeparator
                            }}
                            placeholder="Cost"
                            onChange={handleCostChange}
                            allowSelectAll={true}
                            value={optionSelected2}
                        />
                    </div>
                    <div className="dropbox__filter">
                        <ReactSelect
                            options={category}
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            components={{
                                Option,
                                IndicatorSeparator
                            }}
                            styles={customStyles}
                            placeholder="Categories"
                            onChange={handleCategoryChange}
                            allowSelectAll={true}
                            value={optionSelected}
                        />
                    </div>
                </div>
                <div className="filter__right">
                    <button className="clear__btn" onClick={()=>clearAll()}>Clear All</button>
                </div>
            </div>
            <div className="menu__container">
                <h1 className="resturent__item__title">All Restaurants</h1>
                <div className="item__container">
                    {resturents && resturents.map((item, index) => {
                        return <Items item={item} key={index} />
                    })}
                </div>
            </div>
            <div className="conatiner__loadmore">
                <button onClick={()=>loadMore()} className="loadmore__btn">Load More</button>
            </div>
        </div>
    );
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '24px'
  }),
  control: () => ({
    border: 0,
    borderBottom : '1px solid #C8C8C8',
    borderRadius: 0,
    width: '100%',
    display: 'flex'
  }),
}

export default Resturents;