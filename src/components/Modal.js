import "../assets/css/modal.css"


const Modal =(active, setActive) => {
    return(
        <div className={active ? "modal active": "modal"} onClick={() => setActive(false)}>
            <div className="modal-c" onClick={e => e.stopPropagation()}>
            
            </div>
        </div>
    );
};

export default Modal;