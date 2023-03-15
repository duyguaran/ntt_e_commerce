import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../feautures/productsSlice";


const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
      .then((response) => {
        setProducts(response.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  const handleLike = (id) => {
    if (!likedProducts.includes(id)) {
      setLikedProducts([...likedProducts, id]);
    } else {
      setLikedProducts(likedProducts.filter((likedId) => likedId !== id));
    }
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3 mb-5" key={product.id}>
          <div
            className="card h-100"
            style={{ width: "18rem", height: "20rem" }}
          >
            <div
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                color: likedProducts.includes(product.id) ? "red" : "white",
              }}
              onClick={() => handleLike(product.id)}
            >
              <FaHeart size={20} />
            </div>
            <img src={product.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.price}</p>
              <p className="card-text">{product.shippingMethod}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;