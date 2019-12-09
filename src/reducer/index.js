
export const mainReducer = (state, action) => {
    switch (action.type) {
        case 'take_damage':
            let existingMonster = state.monsters[action.payload.id]
            let newMonster = { ...existingMonster, hp: existingMonster.hp - action.payload.damage };

            if (newMonster.hp <= 0) {
                var monsterClone = { ...state.monsters };
                delete monsterClone[newMonster.id]
                return { ...state, monsters: monsterClone };
            } else {
                return { ...state, monsters: { ...state.monsters, [newMonster.id]: newMonster } };
            }
        default:
            return state;
    }
};