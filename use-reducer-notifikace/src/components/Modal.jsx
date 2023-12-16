import './Modal.css';
import { useEffect } from "react";

const Modal = ({notifConten, closeNotif}) => {
    useEffect(() => {
        setTimeout(() => {
            closeNotif();
        }, 2000);     
    });

    return (
       <div>
            <div className="notification">
                {notifConten}
            </div>
       </div>
    );
}

export default Modal;