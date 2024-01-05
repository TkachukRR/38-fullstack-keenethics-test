import classes from './ProductList.module.css';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductList({
  bikes,
  setBikes,
  fetchStatistics,
  showNotification,
}) {
  const handleProductStatusChange = (productId, newStatus) => {
    const updatedBikes = bikes.map((bike) =>
      bike.ID === productId ? { ...bike, status: newStatus } : bike,
    );

    setBikes(updatedBikes);
    fetchStatistics();
  };

  const handleDelete = (productId) => {
    setBikes(bikes.filter((bike) => bike.ID !== productId));
    fetchStatistics();
  };

  return (
    <ul className={classes.bike__list}>
      {bikes.map((bike, index) => {
        return (
          <li
            className={classes.bike__item}
            style={{
              borderColor: bike.status
                ? `var(--color-product-card-border-${bike.status})`
                : '',
              opacity: bike.status === 'unavailable' ? '.5' : '',
            }}
            key={bike.ID || index}
          >
            <ProductCard
              product={bike}
              onChangeStatus={handleProductStatusChange}
              onDelete={handleDelete}
              showNotification={showNotification}
            />
          </li>
        );
      })}
    </ul>
  );
}
