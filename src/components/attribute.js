import React from 'react'
import styled from 'styled-components';

import {StatsContainer, Stat} from './stat';

export const AttributeContainer = styled(StatsContainer)`

`;

const attributesWithIcon = ['curse', 'retaliate', 'pierce', 'shield', 'immobilize', 'flying', 'poison', 'wound', 'target', 'muddle', 'stun', 'disarm']
export const Attribute = ({attributeText}) => {
    const [attribute, value] = attributeText.toLowerCase().split(' ');

    if(attributesWithIcon.indexOf(attribute) != -1){
        return (
            <Stat>
                <img src={`images/icons/${attribute}.png`} />
                <span>{value}</span>
            </Stat>
        );
    }else{
        return <></>;
    }
}