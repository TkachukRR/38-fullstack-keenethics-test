import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  const headerTitle = 'ADMIN.BIKE - BOOKING.COM';
  const authorFirstName = 'Roman';
  const authorLastName = 'Tkachuk';

  return (
    <div className="wrapper">
      <Header title={headerTitle} />
      <main style={{ flex: '1' }}></main>
      <Footer firstName={authorFirstName} lastName={authorLastName} />
    </div>
  );
}
