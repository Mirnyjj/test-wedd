import { useEffect } from "react";

import { Enums } from "../index";

export const FieldText = ({ title, name, updateFormData, formData }) => {
  useEffect(() => {
    updateFormData({
      ...formData,
      [name]: ""
    });
  }, [formData, name, updateFormData]);

  return (
    <div className="fieldText field">
      <div className="field__title">
        <b>{title}</b>
      </div>
      <textarea
        rows="7"
        name={name}
        type="text"
        value={formData[name]}
        onChange={event =>
          updateFormData({
            ...formData,
            [name]: event.currentTarget.value
          })
        }
      />
    </div>
  );
};

export const FieldCheckBox = ({
  title,
  name,
  answers,
  updateFormData,
  formData
}) => {
  useEffect(() => {
    updateFormData({
      ...formData,
      [name]: ""
    });
  }, [updateFormData, name]);

  return (
    <div className="fieldCheckbox field">
      <div className="field__title">
        <b>{title}</b>
      </div>
      {answers.map((answer, key) => (
        <div key={key} className="field__item">
          <label>
            <input
              name={name}
              type="checkbox"
              value={answer}
              onChange={event =>
                updateFormData({
                  ...formData,
                  [name]: {
                    ...formData[name],
                    [key]: event.currentTarget.checked && answer
                  }
                })
              }
            />
            {answer}
          </label>
        </div>
      ))}
    </div>
  );
};

export const FieldRadio = ({
  title,
  name,
  answers,
  updateFormData,
  formData,
  other
}) => {
  useEffect(() => {
    updateFormData({
      ...formData,
      [name]: ""
    });
  }, []);

  return (
    <div className="fieldRadio field">
      <div className="field__title">
        <b>{title}</b>
      </div>
      {answers.map((answer, key) => (
        <div key={key} className="field__item">
          <label>
            <input
              name={`${name}`}
              type="radio"
              value={answer}
              defaultChecked={key === 0 && true}
              onChange={event =>
                updateFormData({
                  ...formData,
                  [name]: event.currentTarget.checked && answer
                })
              }
            />
            {answer}
          </label>
        </div>
      ))}
      {other && formData[name] === "Предпочтения в напитках каждого гостя" && (
       <input
         type="text"
         value={formData.otherBeer}
         placeholder="Для заполнения, если гостей больше одного"
         onChange={event =>
           updateFormData({
             ...formData,
             otherBeer: event.currentTarget.value
           })
         }
       />
      )}
      {/*{other && formData[name] === "Да" && (*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    value={formData.otherChildren}*/}
      {/*    placeholder="сколько детей?"*/}
      {/*    onChange={event =>*/}
      {/*      updateFormData({*/}
      {/*        ...formData,*/}
      {/*        otherChildren: event.currentTarget.value*/}
      {/*      })*/}
      {/*    }*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
};

export const FieldButtonGroup = ({ formData, setIsFormData }) => {
  return (
    <div className="fieldButtonGroup">
      <div className="fieldButtonGroup__title">
        <b>Сможете ли Вы присутствовать ?</b>
      </div>
      <div className="fieldButtonGroup__container">
        <div
          className={`fieldButtonGroup__container__button ${
            formData.consent === Enums.YES
              ? "fieldButtonGroup__container__button-active"
              : ""
          }`}
          onClick={() => setIsFormData({ ...formData, consent: Enums.YES })}
        >
          Да
        </div>
        <div
          className={`fieldButtonGroup__container__button ${
            formData.consent === Enums.NO
              ? "fieldButtonGroup__container__button-active"
              : ""
          }`}
          onClick={() => setIsFormData({ ...formData, consent: Enums.NO })}
        >
          Нет
        </div>
        <div
          className={`fieldButtonGroup__container__button ${
            formData.consent === Enums.LATER
              ? "fieldButtonGroup__container__button-active"
              : ""
          }`}
          onClick={() => setIsFormData({ ...formData, consent: Enums.LATER })}
        >
          Сообщу позже
        </div>
      </div>
    </div>
  );
};
