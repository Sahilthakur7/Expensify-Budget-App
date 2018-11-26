import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return(
        <Modal
         isOpen = {!!props.selectedOption} 
         onRequestClose = {props.handleRemoveSelectedOption}
         contentLabel='Selected Option'
         closeTimeoutMS={200}
         className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            <p className="modal__body">{props.selectedOption}</p>
            <button 
                className="button"
                onClick={props.handleRemoveSelectedOption}>Thank You</button>
        </Modal>
    );
}

export default OptionModal;
