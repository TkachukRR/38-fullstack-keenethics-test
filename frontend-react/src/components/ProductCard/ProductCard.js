import classes from './ProductCard.module.css';
import { useEffect, useState } from 'react';

const StatusEnum = {
  AVAILABLE: 'available',
  BUSY: 'busy',
  UNAVAILABLE: 'unavailable',
};

export default function ProductCard({ product, onChangeStatus }) {
  const { name, type, color, ID, status, price } = product;
  const [selectedStatus, setSelectedStatus] = useState('');

  const formattedPrice = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    minimumIntegerDigits: 2,
  }).format(price);

  const handleSelectedStatusChange = async (event) => {
    const newStatus = event.target.value;
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/bikes/${product.ID}/status`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: newStatus }),
        },
      );
      if (!response.ok) {
        throw new Error('Changing bike status error');
      }

      setSelectedStatus(newStatus);
      onChangeStatus(product.ID, newStatus);
    } catch (error) {
      console.error('Changing bike status error:', error);
    }
  };

  useEffect(() => {
    const valueFromBackend = status;
    setSelectedStatus(valueFromBackend);
  }, []);

  return (
    <div className={classes.product}>
      <div className={classes.product__description}>
        <h3 className={classes.product__name}>{name}</h3>
        <p>
          &nbsp; - {type} <span>({color})</span>
        </p>
      </div>
      <p className={classes.product__id}>ID {ID}</p>
      <div className={classes.product__status}>
        <label htmlFor="dropdown">STATUS: </label>
        <select
          id="dropdown"
          value={selectedStatus}
          className={classes.product__select}
          onChange={handleSelectedStatusChange}
        >
          {Object.values(StatusEnum).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
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
