import { useSelector } from "react-redux";
import { getWedding } from "../../store/selectors/wedding.selectors";

import "./style.scss";

export const Gamma = () => {
  const { dressCode } = useSelector(getWedding);
  const { title, content } = dressCode;

  return (
    <div className="gamma container" id="gamma">
      <div className="gamma__title">{title}</div>
      <div className="gamma__content">{content}</div>
      {/* <div className="gamma__body">
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
      </div> */}
    </div>
  );
};
