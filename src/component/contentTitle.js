import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { showFavorites } from "../feautures/productsSlice";

const ContentTitle = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(
    (state) => state.productsSlice.favoriteItems
  );
  const isShowFav = useSelector((state) => state.productsSlice.isShowFav);

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex justify-between items-center gap-5">
        <div className="">
          <h3> Content title goes here</h3>
        </div>
        <div className="flex items-center gap-5">
          <h5 className="flex items-center gap-1">
            <AiOutlineHeart />
            {favoriteItems.length} ürün
          </h5>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(showFavorites(!isShowFav))}
          >
            Beğenilenler
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentTitle;
