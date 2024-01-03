import classes from './ProductList.module.css';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductList({ bikes }) {
  return (
    <ul className={classes.bike__list}>
      {bikes.map((bike) => {
        return (
          <li className={classes.bike__item} key={bike.ID}>
            <ProductCard product={bike} />
          </li>
        );
      })}
    </ul>
  );
}
