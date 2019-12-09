import React from 'react';
import styled from 'styled-components';

export const FormGroup = styled.div`
    margin-bottom: 10px;
`;

export const FormGroupTitle = styled.span`
    font-family: 'pirata-one';
    font-style: italic;
    display: block;
`;

const inputBase = (props) => `
    background-color: rgba(255,255,255, 0.6);
    font-family: 'pirata-one';
    border: 2px solid black;
    color: black;
    width: 100%;

    font-size: 1.2em;
    padding: 4px;
`;

export const Input = styled.input`
    ${inputBase}
`;

export const DropDown = styled.select`
    ${inputBase}
`;


const CheckboxContainer = styled.div`
    display:flex;
    align-items:center;
    font-family: 'pirata-one';
    font-size: 1.2em;
`;

const CheckboxStyle = styled.input`
    appearance: none;
    ${inputBase}
    width: 35px;
    height: 35px;
    margin: 0 10px 0 0;

    :checked {
       :after {
           outline: none;
           content: "x";
           position: relative;
           font-size: 32px;
           top: -10px;
           left: 5px;
       }
    }

`;

export const Checkbox = ({title, checked, onChange}) => {

    return (
        <CheckboxContainer>
            <CheckboxStyle type="checkbox" checked={checked} onChange={onChange}/> <span>{title}</span>
        </CheckboxContainer>
    );
}