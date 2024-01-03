import classes from './Header.module.css';

export default function Header({ title }) {
  return (
    <header className={classes.header}>
      <div className="container">
        <h1 className={classes.header__title}>{title}</h1>
      </div>
    </header>
  );
}
