import classes from './ProductCard.module.css';
import { useEffect, useState } from 'react';
import { ADMIN_BIKES_URL } from '../../apiUrls';
import Skeleton from '../Skeleton/Skeleton';

const StatusEnum = {
  AVAILABLE: 'available',
  BUSY: 'busy',
  UNAVAILABLE: 'unavailable',
};

export default function ProductCard({
  product,
  onChangeStatus,
  onDelete,
  showNotification,
}) {
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
        `${ADMIN_BIKES_URL.updateBikeStatus}/${product.ID}/status`,
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
      showNotification({
        message: 'Bike status changed',
        type: 'success',
        duration: 2000,
      });
      onChangeStatus(product.ID, newStatus);
    } catch (error) {
      showNotification({
        message: 'Bike status not changed',
        type: 'error',
        duration: 2000,
      });
      console.error('Changing bike status error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${ADMIN_BIKES_URL.deleteBike}/${product.ID}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error('Deleting bike error');
      }
      showNotification({
        message: 'Bike deleted',
        type: 'success',
        duration: 2000,
      });
      onDelete(product.ID);
    } catch (error) {
      showNotification({
        message: 'Bike not deleted',
        type: 'error',
        duration: 2000,
      });
      console.error('Deleting bike error: ', error);
    }
  };

  useEffect(() => {
    const valueFromBackend = status;
    setSelectedStatus(valueFromBackend);
  }, []);

  return (
    <div className={classes.product}>
      <div className={classes.product__description}>
        <h3 className={classes.product__name}>
          {name || <Skeleton width={'50px'} verticalAlign={'bottom'} />}
        </h3>
        <p>
          &nbsp; -{' '}
          {type || <Skeleton width={'50px'} verticalAlign={'bottom'} />}{' '}
          <span>
            ({color || <Skeleton width={'50px'} verticalAlign={'bottom'} />})
          </span>
        </p>
      </div>
      <p className={classes.product__id}>
        ID: {ID || <Skeleton verticalAlign={'bottom'} />}
      </p>
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
      <div className={classes.product__price}>
        {formattedPrice !== 'NaN' ? (
          formattedPrice
        ) : (
          <Skeleton width={'120px'} verticalAlign={'bottom'} />
        )}{' '}
        UAH/hr.
      </div>
      <button className={classes.product__delete} onClick={handleDelete}>
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
