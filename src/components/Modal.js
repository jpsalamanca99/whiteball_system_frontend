import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Modal = ({ modalOpen, className, children, noCenterTop }) => {
    return (
        <>
            {modalOpen && (
                <Background>
                    <Content className={className} noCenterTop={noCenterTop}>
                        {children}
                    </Content>
                </Background>
            )}
        </>
    )
}

Modal.propTypes = {

}

export default Modal

const Background = styled.div`
    background-color: rgb(0, 0, 0, 0.8);
    position: fixed;
    z-index: 6;
    width: 100vw;
    height: 100vh;
    right: 0;
    top: 0;
`;

const Content = styled.div`
  position: absolute;
  background: #ffffff;
  max-height: 99vh;
  overflow-y: auto;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-align: left;
  z-index: 7;
  margin-top: 8px;
  border-radius: 8px;

  ${(props) =>
        props.noCenterTop &&
        css`
      top: 0%;
      transform: translate(-50%, -1%);
    `}
`;