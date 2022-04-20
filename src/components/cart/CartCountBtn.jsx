// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
// import { setCount } from '../../redux/modules/cart';

// const CartCountBtn = (props) => {
//     const dispatch = useDispatch();
//     const [ number, setNumber ] = useState(props.quantity);
 
//     const plusNumber = () => {
//         setNumber(number => number + 1);
//         dispatch(setCount(props.id, number+1));
//     };

//     const minusNumber = () => {
//         if(number > 0){
//             setNumber(number => number - 1);
//             dispatch(setCount(props.id, number-1));
//         };    
//     };

//     return (
//         <Container>
//             <MinusBtn 
//                 onClick={minusNumber}
//             />
//             <NumberCount>{number}</NumberCount>
//             <PlusBtn 
//                 onClick={plusNumber}
//             /> 
//         </Container>
//     )
// }
            
// const Container = styled.div`
//     width: 88px;
//     height: 30px;
//     border: 1px solid #dddfe1;
//     border-radius: 3px;
//     overflow: hidden;
//     display: flex;
//     align-items: center;
//     justify-content: center;

// `;

// const PlusBtn = styled.button`
//     width: 28px;
//     height: 28px;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     margin-left: -1px;
//     background: #fff url('https://res.kurly.com/pc/ico/2010/ico_plus_on.svg') no-repeat 50% 50%;
//     background-size: 30px 30px;
// `;

// const MinusBtn = styled.button`
//     width: 28px;
//     height: 28px;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     margin-left: -1px;
//     background: #fff url('	https://res.kurly.com/pc/ico/2010/ico_minus_on.svg') no-repeat 50% 50%;
//     background-size: 30px 30px;
// `;

// const NumberCount = styled.div`
//     width: 30px;
//     height: 30px;
//     padding: 5px 0 2px;
//     font-weight: 500;
//     border: 0;
//     user-select: none;
//     background-color: #fff;
//     font-size: 14px;
//     color: #000;
//     line-height: 18px;
//     text-align: center;
// `;

// export default CartCountBtn;