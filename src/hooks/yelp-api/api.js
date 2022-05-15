import axios from "axios";
var apiKey = "ZoiQHIFAsCRSnmMSti-yCJQsnB6Mwkd9C-cJiVo7yDXnD31Xp0XmFPP_4z0AglxU7Ga8i7mYVxTdcBP-3XaAmBtf_PD8RHDoCel3X79kxZXGouVqWb6XnhxtvHx9YnYx";
export default axios.create({
    baseURL: "https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${apiKey}`
    },
});