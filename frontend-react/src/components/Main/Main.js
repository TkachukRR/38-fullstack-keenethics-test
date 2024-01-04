import classes from './Main.module.css';
import { useCallback, useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';

export default function Main() {
  const [bikes, setBikes] = useState([]);

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

  useEffect(() => {
    fetchBikes();
  }, [fetchBikes]);

  return (
    <main className={classes.main}>
      <div className={'container ' + classes.container}>
        <section className={classes.section__left}>
          <ProductList bikes={bikes} setBikes={setBikes} />
        </section>
        <section className={classes.section__right}></section>
      </div>
    </main>
  );
}
