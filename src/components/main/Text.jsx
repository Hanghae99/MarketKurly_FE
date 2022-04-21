import React from 'react';
import styled from 'styled-components';

import { Grid } from '../../elements';

const Text = (props) => {
    return (
        <Grid margin="0 0 27px 0">
            <Span>{props.children}</Span>
        </Grid>
    );
};

const Span = styled.div`
    color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
    padding: 8px;
    text-align: center;
`;

export default Text;