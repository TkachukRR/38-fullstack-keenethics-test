import './Notificarion.css';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const DEFAULT_NOTIFICATION_TIME = 3000;
export default function Notification({ notification }) {
  const dialog = useRef();

  useEffect(() => {
    if (notification) {
      dialog.current.showModal();
      const interval = setInterval(() => {
        dialog.current.close();
        notification = null;
      }, notification.duration || DEFAULT_NOTIFICATION_TIME);

      return () => {
        clearInterval(interval);
      };
    }
  }, [notification]);

  return (
    notification &&
    createPortal(
      <dialog ref={dialog} className="modal">
        <div className={notification.type}>{notification.message}</div>
      </dialog>,
      document.getElementById('modal'),
    )
  );
}
