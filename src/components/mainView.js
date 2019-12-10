import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ViewContainer } from './viewContainer';
import MonsterWidget from './monsterWidget';
import { TextButton } from './button';

import { getState } from '../state'

const MonsterWidgetsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;

const AddButton = styled(TextButton)`
    font-size: 3.5em;
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
    text-align:center;
    position: absolute;
    z-index: 2;
    top:10px;
    left: 10px;
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

    const onEffectAdded = (monster) =>
        (effect) => {
            dispatch({
                type: 'add_effect',
                payload: {
                    id: monster.id,
                    effect
                }
            })
        }
 
    return <div>
        <AddButton to="/add" as={Link}>
            +
        </AddButton>
        <ViewContainer>
            <MonsterWidgetsContainer>
                {Object.values(monsters).map(monster =>
                    <MonsterWidget key={monster.id} monster={monster} onDamage={takeDamage(monster)} onEffectRemoved={onEffectRemoved(monster)} onEffectAdded={onEffectAdded(monster)}/>
                )}
            </MonsterWidgetsContainer>
        </ViewContainer>
    </div>;
}

export default MainView;