import './SmallScreenModal.css';

const SmallScreenModal = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        
      </div>
    </div>
  );
};

export default SmallScreenModal;
