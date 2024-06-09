import "./Footer.scss";
import { useSelector } from "react-redux";
import { getWedding } from "../../store/selectors/wedding.selectors";

export const Footer = () => {
  const { contacts } = useSelector(getWedding);

  return (
    <div className="footer container" id="footer">
      <div className="footer__title">Контакты</div>
        <div className="footer__body">
          <div className="footer__body__header">
            {contacts.title} {name}
          </div>
          <div className="footer__body__content">
            <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
          </div>
          {/*<div className="footer__body__footer">*/}
          {/*  По всем вопросам, связанным с трансфером, торжеством и сюрпризами*/}
          {/*</div>*/}
        </div>

      <div className="footer__develop">
        <a href="https://vk.com/codernd">
          codernd | <span>разработка</span>
        </a>
      </div>
    </div>
  );
};
