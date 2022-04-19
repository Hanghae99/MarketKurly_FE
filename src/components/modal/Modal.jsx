import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, Grid } from '../../elements';
import ModalItem from './ModalItem';
import ModalSum from './ModalSum';
import { setModal } from '../../redux/modules/modal'

const Modal = (props) => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setModal(false));
        // document.getElementById("root").style.position = "static";
    };

    return (
        <ModalBackground>
            <ModalContainer>
                <ModalItem />
                <ModalSum />
                <Grid padding="20px 0 0 0" flex>
                    <Button 
                        onClick={closeModal}
                        type="big"
                        height="54px"
                        width="184px"
                        text="취소"
                        color="black"
                        size="16px"
                        bold="bold"
                    />
                    <Button 
                        type="big"
                        height="54px"
                        width="184px"
                        background="#5f0081"
                        bold="bold"
                        size="16px"
                        text="장바구니 담기"
                    />
            </Grid>
            </ModalContainer>        
        </ModalBackground>
    );
};

const ModalBackground = styled.div`
    /* display: none; */
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
    width: 440px;
    height: 325px;
    max-height: 600px;
    padding: 30px 30px;
    position: fixed;
    z-index: 10000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    background: white;
`;

export default Modal;