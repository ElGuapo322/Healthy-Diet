import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../Components/NavBar/NavBar";
import { fetchMeals, fetchMealsCategories } from "../Redux/Action";
import "./MealsPage.css";
import Footer from "../Components/FooterBar/Footer";

export default function MealsPage() {
  const [categoryFilter, setCategoryFilter] = useState("Beef");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals(categoryFilter));
    dispatch(fetchMealsCategories());
  }, [dispatch, categoryFilter]);

  const { meals, categories } = useSelector((state) => state.meals);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="main-block-meals">
        <div className="meals-head">
          <div className="meals-title">Полезные блюда</div>
          <div id="meals-select-wrapper" className="select-wrapper">
            <select
              id="meals-select"
              className="selects"
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.length
                ? categories.map((c) => {
                    return (
                      <option key={c.strCategory} value={c.strCategory}>
                        {c.strCategory}
                      </option>
                    );
                  })
                : ""}
            </select>
          </div>
        </div>
        <div className="image-block">
          {meals.length
            ? meals.map((c) => {
                return (
                  <div className="image-item">
                    {" "}
                    <div
                      key={c.idMeal}
                      className="image"
                      style={{
                        backgroundImage: "url(" + c.strMealThumb + ")"
                      }}
                    ></div>
                    <div className="meal-name">{c.strMeal}</div>
                  </div>
                );
              })
            : ""}
        </div>
        <Footer />
      </div>
    </div>
  );
}
