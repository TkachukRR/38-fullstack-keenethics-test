import classes from './Footer.module.css';

export default function Footer({ firstName, lastName }) {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <p className={classes.developer}>
          Developer:
          <span className={classes.developer__name}>
            {firstName} {lastName}
          </span>
        </p>
      </div>
    </footer>
  );
}
