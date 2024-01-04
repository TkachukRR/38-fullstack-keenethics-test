import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Notification from './components/Notification/Notification';
import { useState } from 'react';

export default function App() {
  const headerTitle = 'ADMIN.BIKE - BOOKING.COM';
  const authorFirstName = 'Roman';
  const authorLastName = 'Tkachuk';
  const [notification, setNotification] = useState(null);

  const showNotification = (newNotification) => {
    setNotification(newNotification);
  };

  return (
    <div className="wrapper">
      <Header title={headerTitle} />
      <Main showNotification={showNotification} />
      <Footer firstName={authorFirstName} lastName={authorLastName} />

      <Notification notification={notification} />
    </div>
  );
}
