import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";
/* import classes from './ErrorModal.module.css'; */

/* const ModalCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const ErrorModal = (props) => {
  return(
    <>
      <div className={classes.backdrop} />
      <ModalCard>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </ModalCard>
    </>
  )
}
 */
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
const Header = styled.header`
  background: #4f005f;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;
const Content = styled.div`
  padding: 1rem;
`;
const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
const ModalCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;


const ErrorModal = (props) => {
  return(
    <>
      <Backdrop onClick={props.onConfirm} />
      <ModalCard>
        <Header>
          <h2>{props.title}</h2>
        </Header>
        <Content>
          <p>{props.message}</p>
        </Content>
        <Footer>
          <Button onClick={props.onConfirm}>Okay</Button>
        </Footer>
      </ModalCard>
    </>
  )
}

export default ErrorModal;