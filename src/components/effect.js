import React from 'react'
import styled from 'styled-components';

import { TokenButton } from './button';

const EffectsContainer = styled.div`
    display:flex;
    margin-top: 5px;
    padding:5px;
    border: 2px solid #B5A596;
    height: 25px;
    align-items: center;
`;

const EffectIconContainer = styled.div`
    width: 32px;
    height: 32px;
    background-image: url('images/icons/${props => props.type}.png');
    background-size: contain;
    justify-self: center;
    margin-right: 2px;

    :hover {
        cursor: pointer;

        button {
            transform: scale(1.1);
        }
    }
`;

const RemoveEffectButton = styled.button`
    border: none;
    background-color: white;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 0.6em;
    padding: 0;
    float:right;
    margin-right: -5px;
    margin-top: -2px;

    :hover {
        cursor: pointer;
    }
`;

const AddEffectButton = styled(TokenButton)`
    display: block;
    margin-right: 10px;
    font-size: 1em;
    height: 30px;
`;

export const Effects = ({onEffectRemoved, effects}) =>
    <EffectsContainer>
        <AddEffectButton>
            +
        </AddEffectButton>

        {effects.map(x => 
            <EffectIcon key={x} type={x} onRemove={() => onEffectRemoved(x)} />     
        )}
    </EffectsContainer>

const EffectIcon = ({type, onRemove}) => 
    <EffectIconContainer type={type} onClick={onRemove}>
        <RemoveEffectButton onClick={onRemove}>X</RemoveEffectButton>
    </EffectIconContainer>