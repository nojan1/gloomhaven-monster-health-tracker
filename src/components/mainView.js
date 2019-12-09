import React from 'react';
import styled from 'styled-components';
import MonsterWidget from './monsterWidget';

import { getState } from '../state'

const MainViewContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 10%;
    box-sizing: border-box;

    @media(max-width: 700px) {
        padding: 15%;
    }
`;

const MonsterWidgetsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

const MainView = () => {
    const [{ monsters }, dispatch] = getState();

    const takeDamage = (monster) =>
        (damage) => {
            dispatch({
                type: 'take_damage',
                payload: {
                    id: monster.id,
                    damage
                }
            })
        }

    const onEffectRemoved = (monster) =>
        (effect) => {
            dispatch({
                type: 'remove_effect',
                payload: {
                    id: monster.id,
                    effect
                }
            })
        }

    return <div>
        <MainViewContainer>
            <MonsterWidgetsContainer>
                {Object.values(monsters).map(monster =>
                    <MonsterWidget key={monster.id} monster={monster} onDamage={takeDamage(monster)} onEffectRemoved={onEffectRemoved(monster)} />
                )}
            </MonsterWidgetsContainer>
        </MainViewContainer>
    </div>;
}

export default MainView;