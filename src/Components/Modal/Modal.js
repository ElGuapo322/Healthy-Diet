import "./Modal.css";

export default function Modal(props) {
  const handler = () => {
    props.onClick();
  };

  return (
    <div className="modal">
      <div className="modal-window">
        <div className="close-btn" onClick={handler}>
          ⛌
        </div>
        <div className="modal-title">Добавить приём пищи</div>
        <form className="modal-form">
          <input className="modal-input" placeholder="Название пищи"></input>
          <input
            className="modal-input"
            placeholder="Вес пищи(в граммах)"
          ></input>
          <input className="modal-input" placeholder="Калорийность"></input>
          <input
            className="modal-input"
            placeholder="Время приема в ЧЧ:ММ(не обязательно)"
          ></input>
          <input
            className="modal-input"
            placeholder="Комментарий (не обязательно)"
          ></input>
          <button className="modal-button">Сохранить</button>
        </form>
      </div>
    </div>
  );
}
