import classes from './Main.module.css';

export default function Main() {
  return (
    <main className={classes.main}>
      <div className={'container ' + classes.container}>
        <section></section>
        <section></section>
      </div>
    </main>
  );
}
