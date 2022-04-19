import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button, Grid, Text } from '../../elements';
import { setAlertModal } from '../../redux/modules/modal'

const AlertModal = (props) => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setAlertModal(false));
    };

    return (
        <ModalBackground>
            <ModalContainer>
                <Grid
                    margin="25px"
                >
                    <Text 
                        bold="500"
                        letterSpacing=""
                        color="#5f0080"
                        padding="0 0 20px 0"
                        borderB="1px solid #b2b2b2"
                        margin="0 0 25px 0"
                        text="알림메세지"
                    />
                    <Text 
                        height= "60px"
                        size="13px"
                        lineHeight="60px"
                        width="100%"
                        text="수량은 반드시 1 이상이어야 합니다."
                        textAlign="center"
                    />
                </Grid>
                <Grid 
                    padding="30px 0" 
                    flex
                    justify="center"
                    bg="#f5f5f5"
                >
                    <Button 
                        onClick={closeModal}
                        type="big"
                        height="45px"
                        width="175px"
                        background="#5f0081"
                        bold="500"
                        size="14px"
                        text="확인"
                    />
                </Grid>
            </ModalContainer>        
        </ModalBackground>
    );
};

const ModalBackground = styled.div`
    /* display: none; */
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
    width: 490px;
    position: fixed;
    z-index: 10001;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
`;

export default AlertModal;