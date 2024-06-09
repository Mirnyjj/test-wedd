import { Carousel } from "antd";

import photo1 from "../../styles/bg/after/1.jpg";
import photo2 from "../../styles/bg/after/2.jpg";
import photo3 from "../../styles/bg/after/3.jpg";

import "./CarouselBase.scss";

export const CarouselBase = () => {
  return (
    <div className="carouselBase" id="photo">
      <Carousel autoplay>
        <div className="carouselBase__bg">
          <img src={photo1} alt="фото молодожен" />
        </div>
        <div className="carouselBase__bg">
          <img src={photo2} alt="фото молодожен" />
        </div>
        <div className="carouselBase__bg">
          <img src={photo3} alt="фото молодожен" />
        </div>
      </Carousel>
    </div>
  );
};
