import { createPortal } from 'react-dom';

const Backdrop = (props) => {
  return (
    <div
      className="fixed w-screen h-full bg-zblack/75 top-0 right-0 z-30"
      onClick={props.onClose}
    />
  );
};

const Overlay = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

const portalElement = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(<Overlay className={props.className}>{props.children}</Overlay>, portalElement)}
    </>
  );
};

export default Modal;
