import React from 'react'
import styled from 'styled-components';

import DamageButtons from './damageButtons';
import { Stat, StatsContainer } from './stat';
import { Attribute, AttributeContainer, AttributeTexts } from './attribute';
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

    @media(max-width: 512px) {
        flex-basis: 100%;
    }
`;

const MonsterImage = styled.div`
    padding:0 20px;
    img {
        width: 100%;
        margin-top:-30px;
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
    position: relative;
    margin-left:-15px;
    margin-top:-5px;
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

const getHpColor = (hp, maxHp) => {
    if(hp === maxHp)
        return 'black';

    const hpPercentage = hp / maxHp;
    if(hpPercentage <= 0.3)
        return 'red';

    return 'orange';
}

const MonsterWidget = ({ monster, onDamage, onEffectRemoved, onEffectAdded }) =>
    <MonsterWidgetContainer>
        <MonsterImage>
            <NumberCircle elite={monster.elite}>{monster.number}</NumberCircle>
            <img src={`images/monsters/Horz-${monster.name}.png`} alt="" />
        </MonsterImage>

        <AttributeContainer>
            {monster.attributes.map((x, i) => <Attribute key={i} attributeText={x} />)}
        </AttributeContainer>

        <AttributeTexts attributes={monster.attributes} />

        <StatsContainer>
            <Stat>
                <img src="images/icons/attack.png" alt=""/>
                <span>{monster.attack}</span>
            </Stat>
            <Stat>
                <img src="images/icons/range.png" alt="" />
                <span>{monster.range}</span>
            </Stat>
            <Stat>
                <img src="images/icons/move.png" alt="" />
                <span>{monster.move}</span>
            </Stat>
        </StatsContainer>

        <HealthDisplay>
            <span style={{color: getHpColor(monster.hp, monster.maxHp)}}>
                {monster.hp} hp
            </span>

            <TokenButton onClick={() => onDamage(-1)} disabled={monster.hp >= monster.maxHp}>
                <img src="images/icons/heal.png" alt="" />
            </TokenButton>
        </HealthDisplay>

        <DamageButtons onDamage={onDamage} />

        <Effects effects={monster.effects || []} onEffectRemoved={onEffectRemoved} onEffectAdded={onEffectAdded}/>
    </MonsterWidgetContainer>

export default MonsterWidget;