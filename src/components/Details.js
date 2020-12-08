import React from 'react';
import styled from '@emotion/styled';

import { capitalize } from './../helper';

const DetailsContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top:1rem;
`;

const Details = ({ data}) => {
    return ( 
        <DetailsContainer>
            <h2>Quotes</h2>
            <ul>
                <li>Brand: {capitalize(data.brand)}</li>
                <li>Plan: {capitalize(data.plan)}</li>
                <li>Year: {data.year}</li>
            </ul>

        </DetailsContainer>
     );
}
 
export default Details;