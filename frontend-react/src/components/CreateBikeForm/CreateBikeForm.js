import classes from './CreateBikeForm.module.css';

export default function CreateBikeForm() {
  return (
    <form className={classes.form}>
      <div className={classes.form__wrapper}>
        <div>
          <label htmlFor="name">
            <input
              className={classes.form__input}
              type="text"
              placeholder="Name"
              id="name"
            />
          </label>
          <label htmlFor="color">
            <input
              className={classes.form__input}
              type="text"
              placeholder="Color"
              id="color"
            />
          </label>
          <label htmlFor="price">
            <input
              className={classes.form__input}
              type="number"
              placeholder="Price"
              id="price"
            />
          </label>
        </div>
        <div>
          <label htmlFor="type">
            <input
              className={classes.form__input}
              type="text"
              placeholder="Type"
              id="type"
            />
          </label>
          <label htmlFor="wheelSize">
            <input
              className={classes.form__input}
              type="number"
              placeholder="Wheel Size"
              id="wheelSize"
            />
          </label>
          <label htmlFor="id">
            <input
              className={classes.form__input}
              type="number"
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
