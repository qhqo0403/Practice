import React from "react";
import ReactDOM from "react-dom"
import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";

const StyledBackdrop = styled.div`
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

/* props는 컴포넌트가 먼저! 렌더링 될 때의 props는 컴포넌트에서 설정된 props 를 받기 때문에 연결성 주의하기 */
const Backdrop = props => {
  return(
    <StyledBackdrop onClick={props.onConfirm} />
  )
}
const OverlayModal = props => {
  return(
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
  )
}

const ErrorModal = (props) => {
  return(
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<OverlayModal title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
  )
}

export default ErrorModal;