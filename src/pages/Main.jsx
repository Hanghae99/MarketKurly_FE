import React from 'react';
import Banner from '../components/Banner';
import Recommend from '../components/recommend/Recommend';

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