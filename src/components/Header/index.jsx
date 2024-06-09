import { useSelector } from "react-redux";
import { Mouse } from "../../shared/components/Mouse";
import { getWedding } from "../../store/selectors/wedding.selectors";

import { handleScrollSmooth } from "../Menu/Menu";

import "./style.scss";

export const Header = () => {
  const { family } = useSelector(getWedding);
  // const { currentGuest } = useSelector(getWedding);

  return (
    <>
      <div className="header container" id="header">
        <div className="header__title">
          <div className="title title-class-first font-cursive">
            <div className="header__title__left">{family.woman}</div>&
            <div className="header__title__right">{family.man}</div>
          </div>
        </div>
        <div
          className="header__button"
          onClick={() => handleScrollSmooth("appeal")}
        >
          Пригласительный
        </div>
        {/* <div className="header__subtitle font-cursive">
          {currentGuest.name !== "Гость" && (
            <>
              {currentGuest.appeal} {currentGuest.name}
            </>
          )}
        </div> */}
      </div>
      <Mouse />
    </>
  );
};
