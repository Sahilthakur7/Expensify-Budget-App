import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return(
        <Modal
         isOpen = {!!props.selectedOption} 
         onRequestClose = {props.handleRemoveSelectedOption}
         contentLabel='Selected Option'
        >
            <h3>Selected Option</h3>
            <p>{props.selectedOption}</p>
            <button onClick={props.handleRemoveSelectedOption}>Thank You</button>
        </Modal>
    );
}

export default OptionModal;
