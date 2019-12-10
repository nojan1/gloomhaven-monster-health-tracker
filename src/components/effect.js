import React, { useState } from 'react'
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

const AddEffectDialogBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    display:flex;
    justify-content: center;
    align-items: center;
    z-index:9;
`;

const AddEffectDialog = styled.div`
    z-index: 10;
    max-width: 500px;
    height: 50px;
    background-color: rgba(255,255,255, 0.8);
    border: 2px solid black;
    padding: 10px;
`;

export const Effects = ({ onEffectRemoved, onEffectAdded, effects }) => {
    const [addEffectDialogVisible, setAddEffectDialogVisible] = useState(false);

    return (
        <EffectsContainer>
            {addEffectDialogVisible &&
                <AddEffectDialogBackdrop onClick={() => setAddEffectDialogVisible(false)}>
                    <AddEffectDialog>
                        <RemoveEffectButton onClick={() => setAddEffectDialogVisible(false)}>x</RemoveEffectButton>
                        <EffectsContainer>
                            <EffectIconContainer type="poison" onClick={() => onEffectAdded('poison')}/>
                            <EffectIconContainer type="stun" onClick={() => onEffectAdded('stun')}/>
                            <EffectIconContainer type="wound" onClick={() => onEffectAdded('wound')}/>
                            <EffectIconContainer type="immobilize" onClick={() => onEffectAdded('immobilize')}/>
                            <EffectIconContainer type="muddle" onClick={() => onEffectAdded('muddle')}/>
                            <EffectIconContainer type="disarm" onClick={() => onEffectAdded('disarm')}/>
                            <EffectIconContainer type="strengthen" onClick={() => onEffectAdded('strengthen')}/>
                        </EffectsContainer>
                    </AddEffectDialog>
                </AddEffectDialogBackdrop>
            }

            <AddEffectButton onClick={() => setAddEffectDialogVisible(true)}>
                +
            </AddEffectButton>

            {effects.map(x =>
                <EffectIcon key={x} type={x} onRemove={() => onEffectRemoved(x)} />
            )}
        </EffectsContainer>
    );
}

const EffectIcon = ({ type, onRemove }) =>
    <EffectIconContainer type={type} onClick={onRemove}>
        <RemoveEffectButton onClick={onRemove}>X</RemoveEffectButton>
    </EffectIconContainer>