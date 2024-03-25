import './index.css';
import { MdOutlineCancel } from "react-icons/md";

const Popup = ({ isOpen, onClose, children }) => {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <span className="close" onClick={onClose}><MdOutlineCancel className='cross-red' /></span>
        {children}
      </div>
    </div>
  );
};

export default Popup;