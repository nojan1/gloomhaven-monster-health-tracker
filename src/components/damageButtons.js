import React from 'react'
import styled from 'styled-components';

const DamageButtonContainer = styled.div`
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const DamageButton = styled.img`
    cursor:pointer;
    width: ${props => props.size};
    height: ${props => props.size};

    :hover {
        transform: scale(1.3);
    }
`;

const DamageButtons = ({onDamage}) =>
    <DamageButtonContainer>
        <DamageButton onClick={() => onDamage(1)} src="images/damage-1.png" size="40px"/>
        <DamageButton onClick={() => onDamage(5)} src="images/damage-5.png" size="45px" />
        <DamageButton onClick={() => onDamage(10)} src="images/damage-10.png" size="50px" />
    </DamageButtonContainer>

export default DamageButtons;