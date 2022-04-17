import React from 'react';
import Banner from '../components/main/Banner';
import Recommend from '../components/main/Recommend';

const Main = (props) => {
    return(
        <>
            <Banner />
            <Recommend />
            <div style={{height:"2000px"}} />
        </>
    );
};
            
export default Main;