import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import styled from '@emotion/styled'

const ResultContainer = styled.div`
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    border: 1px solid #26C6DA;
    padding:1rem;
    text-align: center;
    text-transform: uppercase;
    position: relative;
`;

const ResultText = styled.p`
    color: #00838F;
    padding:1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 0; 
`;

const Result = ({total}) => {
    return ( 
        <ResultContainer>
            <TransitionGroup
                component="p"
                className="result"
            >
                <CSSTransition
                    classNames="result"
                    key={total}
                    timeout={{enter:500, exit:500}}
                >
                    <ResultText>
                        Total: {total}
                    </ResultText>
                </CSSTransition>
            </TransitionGroup>
        </ResultContainer>
     );
}
 
export default Result;