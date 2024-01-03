import './App.css';
import Header from './components/Header/Header';

export default function App() {
  const headerTitle = 'ADMIN.BIKE - BOOKING.COM';

  return (
    <div className="wrapper">
      <Header title={headerTitle} />
    </div>
  );
}
