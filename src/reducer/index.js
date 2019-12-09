import { save } from '../state/persist';
import { getMonsterObject } from '../data/monsters';

export const mainReducer = (state, action) => {
    switch (action.type) {
        case 'take_damage':
            let existingMonster = state.monsters[action.payload.id]
            let newMonster = { ...existingMonster, hp: existingMonster.hp - action.payload.damage };

            if (newMonster.hp <= 0) {
                var monsterClone = { ...state.monsters };
                delete monsterClone[newMonster.id]
                return save({ ...state, monsters: monsterClone });
            } else {
                return save({ ...state, monsters: { ...state.monsters, [newMonster.id]: newMonster } });
            }
        case 'remove_effect':
            return save({
                    ...state, 
                        monsters: {
                            ...state.monsters, 
                            [action.payload.id]: {
                                ...state.monsters[action.payload.id], 
                                effects: state.monsters[action.payload.id].effects.filter(x => x !== action.payload.effect)
                            }
                        }
                    });
        case 'add_monster':
            const nextId = Object.values(state.monsters).length;

            return save({
                ...state,
                monsters: {
                    ...state.monsters,
                    [nextId]: getMonsterObject(
                        nextId,
                        action.payload.name,
                        action.payload.level,
                        action.payload.number,
                        action.payload.isElite
                    )
                }
            })
        default:
            return state;
    }
};