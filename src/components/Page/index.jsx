import { useEffect } from "react";
import { getUrlName } from "../../shared/utils";
import { Header } from "../Header";
import { AppealContent } from "../AppealContent";
import { Counter } from "../Counter";
import { Gamma } from "../Gamma";
import { Map } from "../Map";
import { FeedbackFull } from "../FeedbackFull";
import { useDispatch, useSelector } from "react-redux";
import { getWedding } from "../../store/selectors/wedding.selectors";
import { Menu } from "../Menu/Menu";
import { ProgramDay } from "../ProgramDay";
import { weddingActions } from "../../store/wedding/wedding.actions";
import { CarouselBase } from "../CarouselBase/CarouselBase";
import { Burger } from "../../shared/components/Burger";
import "./style.scss";
import { Details } from "../Details";

const initialMenuGuest = [
  {
    name: "header",
    title: "Главная",
  },
  {
    name: "appeal",
    title: "Пригласительный",
  },
  {
    name: "counter",
    title: "Дней до свадьбы",
  },
  {
    name: "feedback",
    title: "Анкета",
  },
  {
    name: "programDay",
    title: "Тайминг",
  },
  {
    name: "photo",
    title: "Фото",
  },
  {
    name: "gamma",
    title: "Дресс-код",
  },
  {
    name: "guests",
    title: "Локация",
  },
  {
    name: "holiday",
    title: "Место проведения",
  },
];
const initialMenuNoneGuest = [
  {
    name: "header",
    title: "Главная",
  },
  {
    name: "appeal",
    title: "Пригласительный",
  },
  {
    name: "counter",
    title: "Дней до свадьбы",
  },
  {
    name: "programDay",
    title: "Тайминг",
  },
  {
    name: "photo",
    title: "Фото",
  },
  {
    name: "gamma",
    title: "Дресс-код",
  },
  {
    name: "details",
    title: "Детали",
  },
  {
    name: "holiday",
    title: "Место проведения",
  },
  // {
  //   name: "footer",
  //   title: "Контакты"
  // }
];

export const Page = () => {
  const { users, address, currentGuest } = useSelector(getWedding);
  const dispatch = useDispatch();

  useEffect(() => {
    const userName = getUrlName(users);
    dispatch(weddingActions.setGuest(userName));

    if (userName.name === "Гость") {
      dispatch(weddingActions.setMenu(initialMenuNoneGuest));
    }
    if (userName.name !== "Гость") {
      dispatch(weddingActions.setMenu(initialMenuGuest));
    }
  }, [dispatch, users]);

  return (
    <div>
      <Menu />
      <Header />
      <AppealContent />
      <Counter />
      <ProgramDay />
      <CarouselBase />
      <Gamma />
      {currentGuest.name !== "Гость" && <FeedbackFull />}
      <Details />
      {address.map((item, key) => (
        <Map address={item} key={key} />
      ))}
      <Burger />
    </div>
  );
};
