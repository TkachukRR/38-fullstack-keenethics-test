import classes from './ProductList.module.css';

export default function ProductList({ bikes }) {
  return (
    <ul className={classes.bike__list}>
      {bikes.map((bike) => {
        return (
          <li className={classes.bike__item} key={bike.ID}>
            {bike.name}
          </li>
        );
      })}
    </ul>
  );
}
