import React from 'react'
import styled from 'styled-components';

import {StatsContainer, Stat} from './stat';

const AttributeTextsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const AttributeText = styled.li`
    font-family: 'pirata-one';
    text-align: center;
    padding: 0;
`;

export const AttributeContainer = styled(StatsContainer)`
    margin: 0;
    padding: 0;
`;

const attributesWithIcon = ['curse', 'retaliate', 'pierce', 'shield', 'immobilize', 'flying', 'poison', 'wound', 'target', 'muddle', 'stun', 'disarm']
export const Attribute = ({attributeText}) => {
    const [attribute, value] = attributeText.toLowerCase().split(' ');

    if(attributesWithIcon.indexOf(attribute) !== -1){
        return (
            <Stat>
                <img src={`images/icons/${attribute}.png`}  alt=""/>
                <span>{value}</span>
            </Stat>
        );
    }else{
        return null;
    }
}

export const AttributeTexts = ({attributes}) => {
    const attributeTexts = attributes.filter(x => attributesWithIcon.indexOf(x.toLowerCase().split(' ')[0]) === -1);

    if(attributeTexts.length){
        return (
            <AttributeTextsList>
                {attributeTexts.map((x,i) => <AttributeText key={i}>{x}</AttributeText>)}
            </AttributeTextsList>
        );
    }else{
        return null;
    }
}