import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, favorite } from "../feautures/productsSlice";

const ProductCard = () => {
  const allProducts = useSelector((state) => state.productsSlice.items);
  const favoriteItems = useSelector((state) => state.productsSlice.favoriteItems);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const isShowFav = useSelector(
    (state) => state.productsSlice.isShowFav
  );
  useEffect(() => {
    dispatch(getProducts())
      .then((response) => {
        setProducts(response.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);
  useEffect(() => {
    if (isShowFav) {
      setProducts(allProducts.filter((product) => favoriteItems.includes(product.id)));
    } else {
      setProducts(allProducts);
    }
  }, [allProducts, favoriteItems, isShowFav]);
  const handleLike = (product) => {
    if (!favoriteItems.includes(product.id)) {
      dispatch(favorite([...favoriteItems, product.id]));
    } else {
      dispatch(favorite(favoriteItems.filter((likedId) => likedId !== product.id))); 
    }
  };

  const directUrl = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-5" key={product.id}>
              <div className="card h-100" style={{ width: "18rem", height: "20rem" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    color: favoriteItems.includes(product.id) ? "red" : "white",
                  }}
                  onClick={() => handleLike(product)}
                >
                  <FaHeart size={20} />
                </div>
                <img src={product.imageUrl} className="card-img-top" alt="..."  onClick={() => directUrl(product)}/>
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
      </div>
    </div>
  );
};

export default ProductCard;
