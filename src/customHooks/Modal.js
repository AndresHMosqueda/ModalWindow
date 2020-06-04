import React from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay } from './ModalOverlay';
import { ModalWrapper } from './ModalWrapper';

const Modal = ({ isShowing, hideModal, width, height, margin, padding, contentModal }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    {/* <div className="modal-overlay"/> */}
    <ModalOverlay>
    </ModalOverlay>
    <div className="modal-wrapper" aria-modal aria-hidden  role="dialog">
      {/* <div className="modal">  */}
      <ModalWrapper
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      >
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hideModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>
          {contentModal}
        </div>
        </ModalWrapper>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;