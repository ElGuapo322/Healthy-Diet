import "./styles.css";

export default function DisplayResult(props) {
  return (
    <div>
      {props.sum.calories > 0 && (
        <div className="display-block">
          <h2 className="calBlock">{props.sum.calories} калорий</h2>
          <div className="pfc-block">
            <div>{props.sum.protein} г. белка</div>
            <div>{props.sum.fat} г. жиров</div>
            <div>{props.sum.carbs} г. углеводов</div>
          </div>
        </div>
      )}
    </div>
  );
}
