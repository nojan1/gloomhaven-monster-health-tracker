import React from 'react'
import styled from 'styled-components';

export const TokenButton = styled.button`
    background-color: transparent;
    padding: 3px 5px;
    border: 2px solid black;
    :hover {
        border-color: gray;
        cursor: pointer;
    }

    img {
        height: 20px;
    }
`;