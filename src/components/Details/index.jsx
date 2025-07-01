import SurpriseIcon from "../../styles/bg/svg/game-gift-surprise-svgrepo-com.svg";
import BouquetIcon from "../../styles/bg/svg/flowers-bouquet-svgrepo-com.svg";
import PresentIcon from "../../styles/bg/svg/present-svgrepo-com.svg";
import "./style.scss";
const details = [
  {
    title: "Сюрпризы",
    descriptions:
      "Возьмите с собой отличное настроение! Приветствуются ваши поздравления, активное участие в интерактивах творческие выступления! Вы можете обращаться к нашему ведущему для воплащения своих идей! Камиль - 8 (927) 013-40-30 (WhatsApp)",
    src: SurpriseIcon,
  },
  {
    title: "Цветы",
    descriptions:
      "Наш праздник будет окружен изобилием цветов, поэтому приятным комплиментом для нас вместо букета будет бутылка хорошего алкоголя или подарочный сертификат на посещения магазинов или услуг",
    src: BouquetIcon,
  },
  {
    title: "Подарки",
    descriptions:
      "В качестве подарка будем рады вкладу в бюджет нашей семьи. Он точно поможет воплотить нашу мечту в реальность!",
    src: PresentIcon,
  },
];

const Card = ({ img, title, subtitle }) => {
  return (
    <div className="card-custom-detail">
      <table>
        <tbody>
          <tr>
            <td className="td-custom-detail">
              <img src={img} alt="иконка" />
            </td>
            <td className="td-title-detail">
              <strong>{title}</strong>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="td-subtitle-detail">{subtitle}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const Details = () => {
  return (
    <div className="details" id="details">
      <div className="details__title">Детали</div>
      <div className="details__content">
        Мы догадываемся, что после получения приглашения у вас может появится
        ряд вопросов
      </div>
      {details.map((item, index) => (
        <Card
          img={item.src}
          title={item.title}
          subtitle={item.descriptions}
          key={index}
        />
      ))}
    </div>
  );
};
