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
        case 'add_effect':
                const currentEffects = state.monsters[action.payload.id].effects;

                if(currentEffects.indexOf(action.payload.effect) === -1){
                    currentEffects.push(action.payload.effect);
                }

                return save({
                    ...state,
                    monsters: {
                        ...state.monsters,
                        [action.payload.id]: {
                            ...state.monsters[action.payload.id],
                            effects: currentEffects
                        }
                    }
                });
        case 'add_monster':
            const nextId = Object.keys(state.monsters).length > 0
                ? Object.keys(state.monsters).reduce((acc, cur) => Math.max(acc, cur)) + 1
                : 0;

            const newMonsters = {
                ...state.monsters,
                [nextId]: getMonsterObject(
                    nextId,
                    action.payload.name,
                    action.payload.level,
                    action.payload.number,
                    action.payload.isElite
                )
            };

            //newMonsters.sort((a,b) => a.name.localeCompare(b.name));

            return save({
                ...state,
                monsters: newMonsters
            })
        default:
            return state;
    }
};