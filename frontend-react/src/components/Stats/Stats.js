import classes from './Styles.module.css';

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
          {stats.totalBikesQuantity}
        </span>
      </p>
      <p>
        Available Bikes: &nbsp;
        <span className={classes.stats__number}>
          {stats.availableBikesQuantity}
        </span>
      </p>
      <p>
        Booked Bikes: &nbsp;
        <span className={classes.stats__number}>
          {stats.bookedBikesQuantity}
        </span>
      </p>
      <p>
        Average bike cost: &nbsp;
        <span className={classes.stats__number}>
          {formattedAverageCost !== 'NaN' ? formattedAverageCost : ''}
        </span>
        {formattedAverageCost !== 'NaN' ? ' UAH / hr.' : ''}
      </p>
    </div>
  );
}
