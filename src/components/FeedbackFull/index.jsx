import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getWedding } from "../../store/selectors/wedding.selectors";

import { FieldButtonGroup } from "./Fields";
import { FieldRadio } from "./Fields";
import { FieldCheckBox } from "./Fields";
import { FieldText } from "./Fields";

import { Modal } from "antd";

import "./style.scss";
import { sendMessage } from "../../api/telegram";

export const Enums = {
  YES: "Да",
  NO: "Нет",
  LATER: "Сообщу позже"
};

export const FeedbackFull = () => {
  const { feedbackContent, currentGuest } = useSelector(getWedding);

  const sendForm = useRef();
  const [isLoading, setIsloading] = useState(false);

  const [formData, updateFormData] = useState({
    consent: Enums.YES,
    // eat: "Мясные",
    // beer: "Красное вино",
    secondDay: "Да",
    transfer: "Да",
    otherBeer: "",
    // otherChildren: "",
    // apartment: Enums.YES,
    // children: Enums.YES,
    guest: currentGuest?.name
  });

  useEffect(() => {
    if (currentGuest?.name) {
      return updateFormData({ ...formData, guest: currentGuest?.name });
    }
    if (!currentGuest?.name) {
      return updateFormData({ ...formData, guest: "Гость" });
    }
  }, [currentGuest]);

  const ModalLoading = () => {
    return <div className="modal__loading mount">Загрузка...</div>;
  };

  const handleSubmit = event => {
    event.preventDefault();

    setIsloading(true);
    console.log(formData)
    const message = `Получено новое сообщение от ${formData.guest}. /` +
    `Присутствие на свадьбе: ${formData.consent}. /` +
    `Предпочтение в мясных блюдах: ${JSON.stringify(formData.eat)}. /` +
    `Предпочтение в напитках: ${JSON.stringify(formData.beer)}. /` +
    `трансфер инза-ульяновск: ${JSON.stringify(formData.transfer)}. /` +
    `Присутствие на втором дне в городе Инза: ${formData.secondDay} /`
    setTimeout(() => {
      sendMessage(message)
        .then((fetchResTelegram) => {
            if (fetchResTelegram.ok) {
              Modal.success({
                title: currentGuest?.name || "Гость",
                content: "Ваше согласие успешно отравлено!"
              });
            } else {
              Modal.error({
                title: currentGuest?.name || "Гость",
                content: "Ошибка, попробуйте отправить еще раз, спасибо!"
              });
            }
            setIsloading(false);
          }
        );
    }, 2000);
  };

  return (
    <div className="feedbackFull container" id="feedback">
      <div className="feedbackFull__title">Анкета гостя</div>
      <div className="feedbackFull__title-feed-back">Ваши ответы на вопросы помогут нам при организации свадьбы. <br/>Пожалуйста, подтвердите свое присутствие <br/> до 10 июня 2024 г.</div>
      <div className="feedbackFull__form">
        <form onSubmit={event => handleSubmit(event)}>
          <FieldButtonGroup
            formData={formData}
            setIsFormData={updateFormData}
          />
          {feedbackContent.questions.map((item, key) => {
            switch (item.type) {
              case "radio":
                return (
                  <FieldRadio
                    name={item.name}
                    title={item.title}
                    key={key}
                    answers={item.answers}
                    updateFormData={updateFormData}
                    formData={formData}
                    other={item?.other}
                  />
                );

              case "checkbox":
                return (
                  <FieldCheckBox
                    name={item.name}
                    title={item.title}
                    key={key}
                    answers={item.answers}
                    updateFormData={updateFormData}
                    formData={formData}
                  />
                );

              default:
                return (
                  <FieldText
                    name={item.name}
                    title={item.title}
                    key={key}
                    updateFormData={updateFormData}
                    formData={formData}
                  />
                );
            }
          })}
          <div className="feedbackFull__form__center">
            <div
              className="feedbackFull__form__btn feedbackFull__form__btn-done"
              onClick={() => sendForm.current.click()}
            >
              Отправить
            </div>
          </div>
          <button ref={sendForm} onSubmit={() => {}}></button>
        </form>
      </div>
      <Modal />
      {isLoading && <ModalLoading />}
    </div>
  );
};
