import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

export default function App() {
  const headerTitle = 'ADMIN.BIKE - BOOKING.COM';
  const authorFirstName = 'Roman';
  const authorLastName = 'Tkachuk';

  return (
    <div className="wrapper">
      <Header title={headerTitle} />
      <Main />
      <Footer firstName={authorFirstName} lastName={authorLastName} />
    </div>
  );
}
