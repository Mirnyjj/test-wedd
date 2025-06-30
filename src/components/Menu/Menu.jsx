import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getWedding } from "../../store/selectors/wedding.selectors";
import smoothscroll from "smoothscroll-polyfill";

import "./Menu.scss";

export const handleScrollSmooth = (name) => {
  smoothscroll.polyfill();
  console.log(name);
  document.getElementById(name).scrollIntoView({ behavior: "smooth" });
};

export const Menu = () => {
  const { menu, currentGuest } = useSelector(getWedding);
  console.log(menu);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const callback = (event) => {
      const scrollTop = event.target.scrollingElement.scrollTop;

      if (130 < scrollTop) {
        setIsScrolling(true);
      }

      if (130 >= scrollTop) {
        setIsScrolling(false);
      }
    };
    document.addEventListener("scroll", callback);
    return () => document.removeEventListener("scroll", callback);
  }, []);

  return (
    <div className={`menu ${isScrolling ? "menu-scroll" : ""}`}>
      {menu.map(({ name, title }, key) => (
        <div
          className="menu__button"
          onClick={() => handleScrollSmooth(name)}
          key={key}
        >
          {title}
        </div>
      ))}
    </div>
  );
};
