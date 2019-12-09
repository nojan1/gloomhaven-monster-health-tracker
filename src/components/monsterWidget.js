import React from 'react'
import styled from 'styled-components';

import DamageButtons from './damageButtons';
import { Stat, StatsContainer } from './stat';
import { Attribute, AttributeContainer } from './attribute';
import { TokenButton } from './button';
import { Effects } from './effect';

const MonsterWidgetContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 200px;
    margin: 2px;
    padding:5px;
    box-sizing: border-box;

    border-width:2.5px;
    border-style:solid;
    border-image: 
        linear-gradient(
        to bottom, 
        #755E46, 
        rgba(0, 0, 0, 0)
        ) 1 100%;
    border-image-slice: 30 30% 45;

    @media(max-width: 600px) {
        flex-basis: 170px;
    }

    @media(max-width: 350px) {
        flex-basis: 100%;
    }
`;

const MonsterImage = styled.div`
    padding:0 20px;
    img {
        width: 100%;
    }
`;

const NumberCircle = styled.div`
    background-color: black;
    color: white;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    line-height:40px;
    text-align: center;
    vertical-align: middle;
    z-index: 2;
    position: absolute;
    margin-left:-15px;
    border-width: 4px;
    border-style: solid;
    border-color: ${props => props.elite ? '#efb413' : 'white'};
`;

const HealthDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-grow: 1;

    span {
        font-family: 'pirata-one';
        font-size: 2.8em;
        margin-right: 5px;
    }
`;

const MonsterWidget = ({ monster, onDamage }) =>
    <MonsterWidgetContainer>
        <MonsterImage>
            <NumberCircle elite={monster.elite}>{monster.number}</NumberCircle>
            <img src={`images/monsters/Horz-${monster.name}.png`} />
        </MonsterImage>

        <AttributeContainer>
            {monster.attributes.map((x, i) => <Attribute key={i} attributeText={x} />)}
        </AttributeContainer>

        <StatsContainer>
            <Stat>
                <img src="images/icons/attack.png" />
                <span>{monster.attack}</span>
            </Stat>
            <Stat>
                <img src="images/icons/range.png" />
                <span>{monster.range}</span>
            </Stat>
            <Stat>
                <img src="images/icons/move.png" />
                <span>{monster.move}</span>
            </Stat>
        </StatsContainer>

        <HealthDisplay>
            <span>{monster.hp} hp</span>

            <TokenButton onClick={() => onDamage(-1)}>
                <img src="images/icons/heal.png" />
            </TokenButton>
        </HealthDisplay>

        <DamageButtons onDamage={onDamage} />

        <Effects />
    </MonsterWidgetContainer>

export default MonsterWidget;