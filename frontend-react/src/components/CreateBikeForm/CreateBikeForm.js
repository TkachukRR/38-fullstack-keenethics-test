import classes from './CreateBikeForm.module.css';
import { useState } from 'react';

const FieldTypeEnum = { number: 'number', text: 'text' };

export default function CreateBikeForm({ bikes, fetchBikes, fetchStatistics }) {
  const initialFormData = {
    id: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.number,
    },
    name: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.text,
    },
    type: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.text,
    },
    color: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.text,
    },
    wheelSize: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.number,
    },
    price: {
      value: '',
      error: true,
      touched: false,
      type: FieldTypeEnum.number,
    },
    description: {
      value: '',
      error: true,
      touched: false,
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

  const handleTouched = (e) => {
    const { id } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: {
        ...prevData[id],
        touched: true,
      },
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBike();
  };

  const addBike = async () => {
    const newBike = {
      ID: +formData.id.value,
      name: formData.name.value,
      type: formData.type.value,
      color: formData.color.value,
      wheelSize: +formData.wheelSize.value,
      price: +formData.price.value,
      description: formData.description.value,
    };

    try {
      const response = await fetch(
        'http://localhost:5000/api/admin/bikes/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBike),
        },
      );

      if (!response.ok) {
        throw new Error('Loading bikes error');
      }

      fetchBikes();
      setFormData(initialFormData);
      fetchStatistics();
    } catch (error) {
      console.error('Loading bikes error: ', error);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
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
              onBlur={handleTouched}
              style={{
                outlineColor:
                  formData.name.touched && formData.name.error
                    ? 'var(--color-form-field-outline-invalid)'
                    : 'transparent',
              }}
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
              onBlur={handleTouched}
              style={{
                outlineColor:
                  formData.color.touched && formData.color.error
                    ? 'var(--color-form-field-outline-invalid)'
                    : 'transparent',
              }}
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
              onBlur={handleTouched}
              style={{
                outlineColor:
                  formData.price.touched && formData.price.error
                    ? 'var(--color-form-field-outline-invalid)'
                    : 'transparent',
              }}
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
              onBlur={handleTouched}
              style={{
                outlineColor:
                  formData.type.touched && formData.type.error
                    ? 'var(--color-form-field-outline-invalid)'
                    : 'transparent',
              }}
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
              onBlur={handleTouched}
              style={{
                outlineColor:
                  formData.wheelSize.touched && formData.wheelSize.error
                    ? 'var(--color-form-field-outline-invalid)'
                    : 'transparent',
              }}
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
              onBlur={handleTouched}
              style={{
                outlineColor:
                  formData.id.touched && formData.id.error
                    ? 'var(--color-form-field-outline-invalid)'
                    : 'transparent',
              }}
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
          onBlur={handleTouched}
          style={{
            outlineColor:
              formData.description.touched && formData.description.error
                ? 'var(--color-form-field-outline-invalid)'
                : 'transparent',
          }}
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
        <button
          className={classes.form__button}
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
