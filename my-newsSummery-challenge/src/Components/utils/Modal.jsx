import React from "react";

const Modal = ({ handleClose, message }) => {

    const showHideClassName = message ? `modal display-block` : `modal display-none`;

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h3>News</h3>
                <p>{message}</p>
                <button className="btn btn-primary" onClick={handleClose}>Close</button>
            </section>
        </div>

    );

};

export default Modal; 