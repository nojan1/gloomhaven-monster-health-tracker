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

const EffectIcon = styled.div`
    width: 32px;
    height: 32px;
    background-image: url('images/icons/${props => props.type}.png');
    background-size: contain;
    justify-self: center;
    margin-right: 2px;
`;

const AddEffectButton = styled(TokenButton)`
    margin-right: 10px;
`;

export const Effects = () =>
    <EffectsContainer>
        <AddEffectButton>
            +
        </AddEffectButton>

        <EffectIcon type="poison">

        </EffectIcon>
        <EffectIcon type="immobilize" />
        <EffectIcon type="wound" />
    </EffectsContainer>