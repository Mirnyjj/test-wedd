import point from "../../shared/img/svg/point.svg";

import "./style.scss";

const Card = ({ img, title, subtitle }) => {
  return (
    <div className="card-custom">
      <table>
        <tbody>
          <tr>
            <td className="td-custom">
              <img src={img} alt="иконка" />
            </td>
            <td className="td-title">
              <strong>{title}</strong>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="td-subtitle">{subtitle}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const ProgramDay = () => {
  return (
    <div className="programDay container" id="programDay">
      <div className="programDay__title">Тайминг</div>
      <Card
        img={point}
        title="15:30 - Cбор гостей/фуршет "
        // subtitle="ул. Коммунистическая, 10"
      />
      <Card img={point} title="16:00 - Церемония бракосочетания" subtitle="" />
      <Card
        img={point}
        title="17:00 - Свадебный банкет"
        // subtitle="ул. Салаирский тракт, 10 км, стр. 1"
      />
    </div>
  );
};
