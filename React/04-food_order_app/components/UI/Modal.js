import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}></div>
  )
}

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const potalEl = document.getElementById('overlays');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, potalEl)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, potalEl)}
    </Fragment>
  )
}

export default Modal;