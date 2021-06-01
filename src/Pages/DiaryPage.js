import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Modal from "../Components/Modal/Modal";
import ReactModal from "../Components/ReactModal/ReactModal";
import "./DiaryPage.css";
import { useSelector, useDispatch } from "react-redux";
import { addDiaryAction, delDiaryAction } from "../Redux/Action";
import formatDate from "../helpers/GetDate";
import Footer from "../Components/FooterBar/Footer";
import TrashSvg from "../Components/Svg/TrashSvg";

export default function DiaryPage() {
  const [modal, setModal] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [foodWeight, setFoodWeight] = useState("");
  const [calories, setCalories] = useState("");
  const [foodTime, setFoodTime] = useState("");
  const [comment, setComment] = useState("");
  const [countId, setCountId] = useState(1);

  const [foodWeightError, setFoodWeightError] = useState("");
  const [caloriesError, setCaloriesError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [foodTimeError, setFoodTimeError] = useState("");

  const { diaries } = useSelector((state) => state.diaryReducer);

  const dispatch = useDispatch();

  const foodNameChange = (e) => {
    setFoodName(e.target.value);
  };
  const foodWeightChange = (e) => {
    if (e.target.value && isNaN(e.target.value)) {
      setFoodWeightError("Введите число в граммах");
    } else if (!isNaN(e.target.value)) {
      setFoodWeight(e.target.value);
      setFoodWeightError("");
    }
  };
  const caloriesChange = (e) => {
    if (e.target.value && isNaN(e.target.value)) {
      setCaloriesError("Введите число");
    } else if (!isNaN(e.target.value)) {
      setCalories(e.target.value);
      setCaloriesError("");
    }
  };
  const foodTimeChange = (e) => {
    if (
      (e.target.value[0] && isNaN(e.target.value[0])) ||
      e.target.value[0] > 2
    ) {
      setFoodTimeError("Введите значение в формате ЧЧ:ММ");
    } else if (e.target.value[1] && isNaN(e.target.value[1])) {
      setFoodTimeError("Введите значение в формате ЧЧ:ММ");
    } else if (e.target.value[0] == 2 && e.target.value[1] > 3) {
      setFoodTimeError("Введите значение в формате ЧЧ:ММ");
    } else if (e.target.value[2] !== ":" && e.target.value[2] !== undefined) {
      setFoodTimeError("Введите значение в формате ЧЧ:ММ");
    } else if (
      (e.target.value[3] && isNaN(e.target.value[3])) ||
      e.target.value[3] > 5
    ) {
      setFoodTimeError("Введите значение в формате ЧЧ:ММ");
    } else if (e.target.value[4] && isNaN(e.target.value[4])) {
      setFoodTimeError("Введите значение в формате ЧЧ:ММ");
    } else if (e.target.value.length > 5) {
      setFoodTimeError("Введите значение в формате ЧЧ:ММ");
    } else {
      setFoodTime(e.target.value);
      setFoodTimeError("");
    }
  };
  const commentChange = (e) => {
    setComment(e.target.value);
  };
  const foodSubmit = (e) => {
    e.preventDefault();
    if (foodName === "" || foodWeight === "" || calories === "") {
      setSubmitError("Заполните все обязательные поля");
    } else if (foodTime !== "" && foodTime.length < 5) {
      setFoodTimeError("Введите значение в формате ЧЧ:ММ");
    } else {
      setCountId(countId + 1);
      let obj = {
        id: countId,
        name: foodName,
        weight: foodWeight,
        calories: calories,
        time: foodTime,
        comment: comment
      };
      dispatch(addDiaryAction(obj));
      setModal(false);
      setSubmitError("");
    }
  };

  const Add = (e) => {
    setModal(true);
  };
  const closeBtn = () => {
    setModal(false);
  };

  const deleteBtn = (e) => {
    let obj2 = {
      id: e.currentTarget.id,
      name: e.currentTarget.name
    };
    dispatch(delDiaryAction(obj2));
  };

  return (
    <div className="main-block-diary">
      <div>
        <ReactModal isOpen={modal}>
          <div className="modal-window">
            <div className="close-btn" onClick={closeBtn}>
              ⛌
            </div>
            <div className="modal-title">Добавить приём пищи</div>
            <form onSubmit={foodSubmit} action="submit" className="modal-form">
              <input
                onChange={foodNameChange}
                className="modal-input"
                placeholder="Название пищи"
              ></input>
              <input
                onChange={foodWeightChange}
                className="modal-input"
                placeholder="Вес пищи(в граммах)"
                value={foodWeight}
              ></input>
              <div className="diary-error">{foodWeightError}</div>
              <input
                onChange={caloriesChange}
                className="modal-input"
                placeholder="Калорийность"
                value={calories}
              ></input>
              <div className="diary-error">{caloriesError}</div>
              <input
                onChange={foodTimeChange}
                className="modal-input"
                placeholder="Время приема в ЧЧ:ММ(не обязательно)"
                value={foodTime}
              ></input>
              <div className="diary-error">{foodTimeError}</div>
              <input
                onChange={commentChange}
                className="modal-input"
                placeholder="Комментарий (не обязательно)"
              ></input>
              <button type="submit" className="modal-button">
                Сохранить
              </button>
              <div className="diary-error">{submitError}</div>
            </form>
          </div>
        </ReactModal>
      </div>

      <div>
        <NavBar />
      </div>

      <div>
        {Object.keys(diaries).length ? (
          <div className="diary-title">
            <div className="diary-title-text">Приемы пищи</div>
            <button className="diary-title-button" onClick={Add}>
              Добавить
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="diary-list">
        {Object.keys(diaries).length ? (
          Object.keys(diaries).map((i) => (
            <div className="diary-block">
              <div className="diary-block-time">{formatDate(i)}</div>
              {diaries[i].map((j) => (
                <div className="diary-meals">
                  <div className="diary-meals-left">
                    <div className="name-button">
                      <div>{j.name}</div>
                      <button
                        onClick={deleteBtn}
                        className="delete-button"
                        name={i}
                        id={j.id}
                      >
                        <div>
                          {" "}
                          <TrashSvg />
                        </div>
                      </button>
                    </div>
                    <div className="comment">{j.comment}</div>
                  </div>
                  <div className="diaryMealsRight">
                    <div className="right-time">{`Время: ${j.time}`}</div>
                    <div>{`${j.calories} калорий, ${j.weight} г.`}</div>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="start-add">
            <h1>Вы ещё не добавили ни одного приёма пищи ;)</h1>
            <button
              className={diaries ? "modal-button1" : "modal-button"}
              onClick={Add}
            >
              Добавить
            </button>
          </div>
        )}
      </div>
      <div className="diary-footer">
        <Footer />
      </div>
    </div>
  );
}
