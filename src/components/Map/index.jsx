import "./style.scss";

export const Map = ({ address }) => {
  const { title, content, urlMap, urlCar, id } = address;
  return (
    <div className="map container" id="guests">
      <div className="map__title">{title}</div>
      <br />
      <div className="map__content">
        <div>{content}</div>
        <div className="map__content__button">
          <a href={urlCar}>Яндекс маршрут</a>
        </div>
      </div>
      <iframe src={urlMap} frameBorder="0" title={title}></iframe>
    </div>
  );
};
