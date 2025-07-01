import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getWedding } from "../../store/selectors/wedding.selectors";
import { handleScrollSmooth } from "../Menu/Menu";
import photo1 from "../../styles/bg/after/1.png";
import "./style.scss";
import { globalDate } from "../../shared/constants";

export const AppealContent = ({}) => {
  const { currentGuest, appeal } = useSelector(getWedding);

  const appealGender = useMemo(() => {
    switch (currentGuest.x) {
      case 1:
        return (
          <div className="appeal__content">
            {appeal?.content}
            <br />
            <strong
              className="font-date font-cursive"
              onClick={() => handleScrollSmooth("counter")}
            >
              <img src={photo1} />
            </strong>
          </div>
        );

      case 2:
        return (
          <div className="appeal__content">
            {appeal?.content}
            <br />
            <strong
              className="font-date font-cursive"
              onClick={() => handleScrollSmooth("counter")}
            >
              {globalDate}
            </strong>
          </div>
        );

      case 3:
        return (
          <div className="appeal__content">
            {appeal?.content}
            <br />
            <strong
              className="font-date font-cursive"
              onClick={() => handleScrollSmooth("counter")}
            >
              {globalDate}
            </strong>
          </div>
        );
      case 4:
        return (
          <div className="appeal__content">
            {appeal?.content}
            <br />
            <strong
              className="font-date font-cursive"
              onClick={() => handleScrollSmooth("counter")}
            >
              {globalDate}
            </strong>
          </div>
        );

      default:
        return (
          <>
            <div className="appeal__content">
              {appeal?.content}
              <br />
              <strong
                className="font-date font-cursive"
                onClick={() => handleScrollSmooth("counter")}
              ></strong>
            </div>
            <img src={photo1} />
          </>
        );
    }
  }, [currentGuest, appeal?.content]);

  return (
    <div className="appeal container" id="appeal">
      <div className="appeal__title font-cursive">
        <strong>{`${currentGuest.appeal} ${currentGuest.name}`}</strong>
      </div>
      {appealGender}
      {currentGuest.name !== "Гость" && (
        <div
          className="appeal__button"
          onClick={() => handleScrollSmooth("feedback")}
        >
          Анкета
        </div>
      )}
    </div>
  );
};
