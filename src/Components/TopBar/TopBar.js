import "./TopBar.css";
import React, { useEffect, useState } from "react";

export default function DisplayMeals() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="top-block">
      Топ-3 блюда дня
      {userData.categories ? (
        <div className="bar">
          {userData.categories.slice(0, 3).map((item) => (
            <div
              className="image"
              style={{
                backgroundImage: "url(" + item.strCategoryThumb + ")"
              }}
            ></div>
          ))}
        </div>
      ) : (
        `Загрузка`
      )}
    </div>
  );
}
