import classes from './Styles.module.css';
import Skeleton from '../Skeleton/Skeleton';

export default function Stats({ stats }) {
  const formattedAverageCost = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    minimumIntegerDigits: 2,
  }).format(stats.averageBookingPrice);

  return (
    <div className={classes.stats}>
      <h2 className={classes.stats__header}>STATISTICS</h2>
      <p>
        Total Bikes: &nbsp;
        <span className={classes.stats__number}>
          {stats.totalBikesQuantity >= 0 ? (
            stats.totalBikesQuantity
          ) : (
            <Skeleton width={'76px'} />
          )}
        </span>
      </p>
      <p>
        Available Bikes: &nbsp;
        <span className={classes.stats__number}>
          {stats.availableBikesQuantity >= 0 ? (
            stats.availableBikesQuantity
          ) : (
            <Skeleton width={'49px'} />
          )}
        </span>
      </p>
      <p>
        Booked Bikes: &nbsp;
        <span className={classes.stats__number}>
          {stats.bookedBikesQuantity >= 0 ? (
            stats.bookedBikesQuantity
          ) : (
            <Skeleton width={'60px'} />
          )}
        </span>
      </p>
      <p>
        Average bike cost: &nbsp;
        <span className={classes.stats__number}>
          {formattedAverageCost >= 0 ? (
            formattedAverageCost
          ) : (
            <Skeleton width={'80px'} />
          )}
        </span>
        {' UAH / hr.'}
      </p>
    </div>
  );
}
