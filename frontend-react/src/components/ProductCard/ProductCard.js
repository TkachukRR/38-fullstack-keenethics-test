import classes from './ProductCard.module.css';
export default function ProductCard({ product }) {
  const { name, type, color, ID, status, price } = product;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    minimumIntegerDigits: 2,
  }).format(price);

  return (
    <div className={classes.product}>
      <div className={classes.product__description}>
        <h3 className={classes.product__name}>{name}</h3>
        <p>
          &nbsp; - {type} <span>({color})</span>
        </p>
      </div>
      <p className={classes.product__id}>ID {ID}</p>
      <div className={classes.product__status}>STATUS: {status}</div>
      <div className={classes.product__price}>{formattedPrice} UAH/hr.</div>
      <button className={classes.product__delete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M9 9L1 1M9 1L1 9"
            stroke="inherit"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
