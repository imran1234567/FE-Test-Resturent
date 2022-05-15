import React, { useEffect, useState } from "react";
import yelp from "./api";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm,category,price,limit) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: limit,
          term: searchTerm,
          categories: category,
          price: price,
          location: "usa",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
      console.log("ERROR");
      console.log(e);
    }
  };

  useEffect(() => {
    searchApi("resturent","",[],6);
  }, []);

  return [searchApi, results, errorMessage];
};