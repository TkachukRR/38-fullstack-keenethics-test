import classes from './CreateBikeForm.module.css';
import { useState } from 'react';

const FieldTypeEnum = { number: 'number', text: 'text' };

export default function CreateBikeForm() {
  const initialFormData = {
    id: {
      value: '',
      type: FieldTypeEnum.number,
    },
    name: {
      value: '',
      type: FieldTypeEnum.text,
    },
    type: {
      value: '',
      type: FieldTypeEnum.text,
    },
    color: {
      value: '',
      type: FieldTypeEnum.text,
    },
    wheelSize: {
      value: '',
      type: FieldTypeEnum.number,
    },
    price: {
      value: '',
      type: FieldTypeEnum.number,
    },
    description: {
      value: '',
      type: FieldTypeEnum.text,
    },
  };

  const [formData, setFormData] = useState(initialFormData);

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
            />
          </label>
          <label htmlFor="color">
            <input
              className={classes.form__input}
              type={formData.color.type}
              placeholder="Color"
              id="color"
            />
          </label>
          <label htmlFor="price">
            <input
              className={classes.form__input}
              type={formData.price.type}
              placeholder="Price"
              id="price"
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
            />
          </label>
          <label htmlFor="wheelSize">
            <input
              className={classes.form__input}
              type={formData.wheelSize.type}
              placeholder="Wheel Size"
              id="wheelSize"
            />
          </label>
          <label htmlFor="id">
            <input
              className={classes.form__input}
              type={formData.id.type}
              placeholder="ID (slug): ХХХХХХХХХХХХХ"
              id="id"
            />
          </label>
        </div>
      </div>

      <label htmlFor="description">
        <textarea
          className={classes.form__textarea}
          id="description"
          placeholder="Description"
        />
      </label>
      <div className={classes.form__buttons}>
        <button className={classes.form__button} type="submit">
          Save
        </button>
        <button className={classes.form__button} type="button">
          Reset
        </button>
      </div>
    </form>
  );
}
