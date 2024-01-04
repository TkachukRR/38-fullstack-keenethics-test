import classes from './Main.module.css';
import { useCallback, useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import CreateBikeForm from '../CreateBikeForm/CreateBikeForm';
import Stats from '../Stats/Stats';

export default function Main() {
  const [bikes, setBikes] = useState([]);
  const [statistics, setStatistics] = useState({});

  const fetchBikes = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/bikes/all');
      const bikes = await response.json();

      if (!response.ok) {
        throw new Error('Loading bikes error');
      }

      setBikes(bikes);
    } catch (error) {
      console.error('Loading bikes error: ', error);
    }
  }, []);

  const fetchStatistics = useCallback(async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/admin/bikes/stats',
      );
      const statistics = await response.json();

      if (!response.ok) {
        throw new Error('Loading statistics error');
      }

      setStatistics(statistics);
    } catch (error) {
      console.error('Loading statistics error: ', error);
    }
  }, []);

  useEffect(() => {
    fetchBikes();
    fetchStatistics();
  }, [fetchBikes, fetchStatistics]);

  return (
    <main className={classes.main}>
      <div className={'container ' + classes.container}>
        <section className={classes.section__left}>
          <ProductList
            bikes={bikes}
            setBikes={setBikes}
            fetchStatistics={fetchStatistics}
          />
        </section>
        <section className={classes.section__right}>
          <CreateBikeForm
            bikes={bikes}
            fetchBikes={fetchBikes}
            fetchStatistics={fetchStatistics}
          />
          <Stats stats={statistics} bikes={bikes} />
        </section>
      </div>
    </main>
  );
}
