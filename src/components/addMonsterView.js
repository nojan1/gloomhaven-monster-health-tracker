import React, {useState} from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { ViewContainer } from './viewContainer';
import { TextButton } from  './button';
import { FormGroup, FormGroupTitle, Input, DropDown, Checkbox } from './form';

import { getState } from '../state'
import { getMonsters } from '../data/monsters';

const StepTitle = styled.h1`
    :first-child {
        padding-top: 0;
        margin-top:0;
    }
    font-family: 'pirata-one';
`;

const MonsterSelectionView = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const MonsterSelectionItem = styled.img`
    width:80px;
    border:2px dashed transparent;

    :hover {
        cursor:pointer;
    }

    ${props => 
        props.selected ? `
            border-color: rgba(0,0,100,0.6);
        `
        : ``
    }
`;

const AddButton = styled(TextButton)`
    margin:20px auto 0 auto;
    display: block;
    padding-left: 30px
    padding-right: 30px;
`;

const AddMonsterView = ({history}) => {
    const [selectedMonster, setSelectedMonster] = useState();
    const [monsterLevel, setMonsterLevel] = useState();
    const [monsterNumbers, setMonsterNumbers] = useState('');
    const [isElite, setIsElite] = useState(false);

    const [_, dispatch] = getState();

    const addMonster = () => {
        monsterNumbers.split(',').map(x => x.trim()).forEach(x => {
            dispatch({
                type: 'add_monster',
                payload: {
                    name: selectedMonster.name,
                    level: monsterLevel,
                    number: x,
                    isElite
                }
            });
        });

        history.push('/');
    }

    return (
        <ViewContainer>
            <StepTitle>1. Select monster</StepTitle>
            <MonsterSelectionView>
                {getMonsters().map(monster => 
                    <MonsterSelectionItem key={monster.name} src={`images/monsters/Horz-${monster.name}.png`} selected={selectedMonster && selectedMonster.name === monster.name} onClick={() => setSelectedMonster(monster)}/>
                )}
            </MonsterSelectionView>
                
            {selectedMonster && 
                <>
                    <StepTitle>2. Set attributes</StepTitle>

                    <FormGroup>
                        <FormGroupTitle>Level</FormGroupTitle>
                        <DropDown value={monsterLevel} onChange={e => setMonsterLevel(e.target.value)}>
                            {Object.values(selectedMonster.level).map(x => <option key={x.level}>{x.level}</option>)}
                        </DropDown>
                    </FormGroup>

                    <FormGroup>
                        <FormGroupTitle>Monster numbers (separate with comma to add more then one)</FormGroupTitle>
                        <Input value={monsterNumbers} onChange={e => setMonsterNumbers(e.target.value)}/>
                    </FormGroup>

                    <Checkbox title="Is elite?" checked={isElite} onChange={e => setIsElite(e.target.checked)}/>

                    <AddButton onClick={addMonster} disabled={!monsterLevel || !monsterNumbers}>Add</AddButton>
                </>
            }
            
        </ViewContainer>
    );
}

export default withRouter(AddMonsterView);