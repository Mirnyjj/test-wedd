import mouse from "../../img/svg/mouse.svg";
import scroll from "../../img/svg/down-scroll.svg";

import "./style.scss";

export const Mouse = () => {
  return (
    <div className="mouse">
      <div className="mouse-scroll">
        <img
          className="mouse-scroll-img"
          src={mouse}
          alt="изображение прокрутки мыши вниз\вверх"
        />
        <img
          className="mouse-scroll-img"
          src={scroll}
          alt="изображение прокрутки мыши вниз\вверх"
        />
      </div>
    </div>
  );
};
