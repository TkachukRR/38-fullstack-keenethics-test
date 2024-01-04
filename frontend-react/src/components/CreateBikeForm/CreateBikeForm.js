import classes from './CreateBikeForm.module.css';
import { useState } from 'react';

const FieldTypeEnum = { number: 'number', text: 'text' };

export default function CreateBikeForm({ bikes }) {
  const initialFormData = {
    id: {
      value: '',
      error: true,
      type: FieldTypeEnum.number,
    },
    name: {
      value: '',
      error: true,
      type: FieldTypeEnum.text,
    },
    type: {
      value: '',
      error: true,
      type: FieldTypeEnum.text,
    },
    color: {
      value: '',
      error: true,
      type: FieldTypeEnum.text,
    },
    wheelSize: {
      value: '',
      error: true,
      type: FieldTypeEnum.number,
    },
    price: {
      value: '',
      error: true,
      type: FieldTypeEnum.number,
    },
    description: {
      value: '',
      error: true,
      type: FieldTypeEnum.text,
    },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevState) => {
      const updatedData = {
        ...prevState,
        [id]: {
          ...prevState[id],
          value,
          error: !validateField(id, value),
        },
      };
      checkFormValidity(updatedData);

      return updatedData;
    });
  };

  const validateField = (fieldId, value) => {
    if (fieldId === 'id') {
      return validateUniqueId(value);
    }

    if (formData[fieldId].type === FieldTypeEnum.text) {
      return validateTextFieldLength(value);
    }

    if (formData[fieldId].type === FieldTypeEnum.number) {
      return validateNumberField(value);
    }

    return value.trim().length > 0;
  };

  const validateTextFieldLength = (val) => {
    return val.trim().length > 5;
  };

  const validateNumberField = (val) => {
    return val > 0;
  };

  const validateUniqueId = (id) => {
    return id > 0 && !bikes.some((bike) => bike.ID === +id);
  };

  const checkFormValidity = (formData) => {
    const isFormValid = Object.keys(formData).every(
      (fieldName) => !formData[fieldName].error,
    );

    setSubmitDisabled(!isFormValid);
  };

  return (
    <form className={classes.form}>
      <div className={classes.form__wrapper}>
        <div>
          <label htmlFor="name">
            <input
              className={classes.form__input}
              type={formData.name.type}
              placeholder="Name"
              id="name"
              value={formData.name.value}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="color">
            <input
              className={classes.form__input}
              type={formData.color.type}
              placeholder="Color"
              id="color"
              value={formData.color.value}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            <input
              className={classes.form__input}
              type={formData.price.type}
              placeholder="Price"
              id="price"
              value={formData.price.value}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="type">
            <input
              className={classes.form__input}
              type={formData.type.type}
              placeholder="Type"
              id="type"
              value={formData.type.value}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="wheelSize">
            <input
              className={classes.form__input}
              type={formData.wheelSize.type}
              placeholder="Wheel Size"
              id="wheelSize"
              value={formData.wheelSize.value}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="id">
            <input
              className={classes.form__input}
              type={formData.id.type}
              placeholder="ID (slug): ХХХХХХХХХХХХХ"
              id="id"
              value={formData.id.value}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <label htmlFor="description">
        <textarea
          className={classes.form__textarea}
          id="description"
          placeholder="Description"
          value={formData.description.value}
          onChange={handleChange}
        />
      </label>
      <div className={classes.form__buttons}>
        <button
          className={classes.form__button}
          type="submit"
          style={{
            background: isSubmitDisabled
              ? 'var(--color-background-tertiary)'
              : null,
          }}
          disabled={isSubmitDisabled}
        >
          Save
        </button>
        <button className={classes.form__button} type="button">
          Reset
        </button>
      </div>
    </form>
  );
}
