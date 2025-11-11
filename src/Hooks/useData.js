import React, { useEffect, useState } from "react";

const useData = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return { categorys, products };
};

export default useData;
