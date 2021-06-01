import "./styles.css";
import React, { useEffect, useState } from "react";
import DisplayResult from "./Display";

export default function Calc() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sum, setSum] = useState(0);
  const [gender, setGender] = useState("");
  const [activ, setActiv] = useState("");
  const [purpose, setPurpose] = useState("");

  const [submitError, setSubmitError] = useState("");
  useEffect(() => {
    setSubmitError("");
  }, [height, weight, age]);
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [ageError, setAgeError] = useState("");

  const heightChange = (e) => {
    if (e.target.value && isNaN(e.target.value)) {
      setHeightError("Введите число");
    } else if (!isNaN(e.target.value)) {
      setHeight(e.target.value);
      setHeightError("");
    }
  };
  const weightChange = (e) => {
    if (e.target.value && isNaN(e.target.value)) {
      setWeightError("Введите число");
    } else if (!isNaN(e.target.value)) {
      setWeight(e.target.value);
      setWeightError("");
    }
  };
  const ageChange = (e) => {
    if (e.target.value && isNaN(e.target.value)) {
      setAgeError("Введите число");
    } else if (!isNaN(e.target.value)) {
      setAge(e.target.value);
      setAgeError("");
    }
  };
  const genderChange = (e) => {
    setGender(e.target.value);
  };
  const activChange = (e) => {
    setActiv(e.target.value);
  };
  const purposeChange = (e) => {
    setPurpose(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      height === "" ||
      weight === "" ||
      age === "" ||
      gender === "" ||
      activ === "" ||
      purpose === ""
    ) {
      setSubmitError("Заполните все поля");
      setSum(0);
    } else {
      let calFormula = 0;
      let protFormula = 0;
      let fatFormula = 0;
      let carbsFormula = 0;
      if (gender === "female") {
        calFormula = Math.round(
          (9.99 * parseInt(weight) +
            6.25 * parseInt(height) -
            4.92 * parseInt(age) -
            161) *
            parseFloat(activ) +
            parseInt(purpose)
        );
      } else if (gender === "male") {
        calFormula = Math.round(
          (9.99 * parseInt(weight) +
            6.25 * parseInt(height) -
            4.92 * parseInt(age) +
            5) *
            parseFloat(activ) +
            parseInt(purpose)
        );
      }

      if (purpose === "-300") {
        protFormula = Math.round((calFormula * 0.3) / 4);
        fatFormula = Math.round((calFormula * 0.2) / 9);
        carbsFormula = Math.round((calFormula * 0.5) / 4);
      } else if (purpose === "0") {
        protFormula = Math.round((calFormula * 0.25) / 4);
        fatFormula = Math.round((calFormula * 0.4) / 4);
        carbsFormula = Math.round((calFormula * 0.4) / 4);
      } else if (purpose === "500") {
        protFormula = Math.round((calFormula * 0.3) / 4);
        fatFormula = Math.round((calFormula * 0.3) / 9);
        carbsFormula = Math.round((calFormula * 0.55) / 4);
      }

      let obj = {
        calories: calFormula,
        protein: protFormula,
        fat: fatFormula,
        carbs: carbsFormula
      };
      setSum(obj);
    }
  };
  return (
    <div className="calc">
      <div className="calc-count">
        <div className="title">Рассчет суточной нормы калорий</div>
        <form className="calc-form" onSubmit={onSubmit} action="submit">
          <div className="select-wrapper">
            <select id="gender" className="selects" onChange={genderChange}>
              <option value="" disabled selected>
                Выберите пол
              </option>
              <option value="male">Мужчина</option>
              <option value="female">Женщина</option>
            </select>
          </div>
          <div className="inputs-block">
            <div>
              <input
                onChange={ageChange}
                id="calc-activ"
                placeholder="Возраст"
                className="inputs"
                value={age}
              ></input>
              <div className="error">{ageError}</div>
            </div>
            <div>
              <input
                onChange={heightChange}
                id="calc-height"
                placeholder="Рост (см)"
                className="inputs"
                value={height}
              ></input>
              <div className="error">{heightError}</div>
            </div>

            <div>
              <input
                onChange={weightChange}
                id="calc-weight"
                placeholder="Вес (кг)"
                className="inputs"
                value={weight}
              ></input>
              <div className="error">{weightError}</div>
            </div>
          </div>
          <div className="select-wrapper">
            <select id="activ" className="selects" onChange={activChange}>
              <option value="" disabled selected>
                Физическая активность
              </option>
              <option value="1.2">Низкая</option>
              <option value="1.55">Средняя</option>
              <option value="1.9">Высокая</option>
            </select>
          </div>
          <div className="select-wrapper">
            <select id="purpose" className="selects" onChange={purposeChange}>
              <option value="" disabled selected>
                Цель
              </option>
              <option value="-300">Похудение</option>
              <option value="0">Поддержание веса</option>
              <option value="500">Набор веса</option>
            </select>
          </div>
          <input id="submit" value="Рассчитать" type="submit"></input>
        </form>
        <div className="error">{submitError}</div>
      </div>
      <div className="calc-display">
        <div className="title">Необходимый дневной рацион</div>
        <div className="sub-title">
          Необходимая суммарная калорийность всех блюд за день для достижения
          указанной цели
        </div>
        <DisplayResult sum={sum} />
      </div>
    </div>
  );
}
