import "./style.scss";

export const Counter = () => {

  const formatTime = () => {
    const deadline = new Date(2024, 6, 14, 15, 30);
    const diff = deadline - new Date();
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    return days;
  };

  return (
    <div className="counter container" id="counter">
      <span className="counter__title container font-cursive">
        Дней до свадьбы - {formatTime()}
      </span>
      <div id="clock" />
    </div>
  );
};
