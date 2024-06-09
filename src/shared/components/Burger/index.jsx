import { useState } from "react";
import smoothscroll from "smoothscroll-polyfill";

import { useSelector } from "react-redux";
import { getWedding } from "../../../store/selectors/wedding.selectors";

import "./style.scss";

const handleScroll = (name, cb) => {
  smoothscroll.polyfill();
  document.getElementById(name).scrollIntoView({ behavior: "smooth" });
  cb(false);
};

const Option = ({ name, title, cb }) => {
  return (
    <div className="btn" onClick={() => handleScroll(name, cb)}>
      {title}
    </div>
  );
};

export const Burger = () => {
  const { menu } = useSelector(getWedding);
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div
      onClick={() => {
        if (!isToggle) {
          setIsToggle(true);
        }
      }}
      className={`burger ${isToggle ? "burger-toggle" : "burger-closed"}`}
    >
      <div className={`spans ${isToggle ? "spans-toggle" : ""}`}>
        <span />
        <span />
        <span />
      </div>

      {isToggle &&
        menu.map((option, key) => (
          <Option
            title={option.title}
            name={option.name}
            cb={setIsToggle}
            key={key}
          />
        ))}
    </div>
  );
};
