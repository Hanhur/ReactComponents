import "./Modal.css";
import { useEffect } from "react";

const Modal = ({ notifContent, closeNotif  }) => {
    useEffect( () => {
        setTimeout( () => {
            closeNotif();
        }, 2000);
    });
    
    return (
        <div>
            <div className="notification"s>
                <p>{notifContent}</p>
            </div>
        </div>
    );
}

export default Modal;