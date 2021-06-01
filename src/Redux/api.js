export const getMealsCategories = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );
  const mealsData = await res.json();

  return mealsData.meals;
};

export const getMeals = async (categoryFilter) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryFilter}`
  );
  const mealsData = await res.json();
  return mealsData.meals;
};
