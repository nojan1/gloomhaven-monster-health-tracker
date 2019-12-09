import monsterStats from '../data/monster_stats';
import { load, save } from './persist';

const getMonsterBlock = (id, number, name, elite = false, level = 0) => {
    const stats = monsterStats.monsters[name];

    return {
        id,
        name,
        number,
        elite,
        hp: elite ? stats.level[level].elite.health : stats.level[level].normal.health,
        move: elite ? stats.level[level].elite.move : stats.level[level].normal.move,
        attack: elite ? stats.level[level].elite.attack : stats.level[level].normal.attack,
        range: elite ? stats.level[level].elite.range : stats.level[level].normal.range,
        attributes: elite ? stats.level[level].elite.attributes : stats.level[level].normal.attributes,
        effects: [
            'poison'
        ]
    }
}

export const getInitialState = () => {
    const savedState = load();
    if (savedState)
        return savedState;

    return {
        monsters: {
            0: getMonsterBlock(0, 1, 'Cave Bear'),
            1: getMonsterBlock(1, 2, 'Sun Demon'),
            2: getMonsterBlock(2, 5, 'Night Demon'),
            3: getMonsterBlock(3, 12, 'Bandit Archer'),
            4: getMonsterBlock(4, 3, 'Bandit Guard', true, 4),
            5: getMonsterBlock(5, 3, 'City Archer', true, 1),
        }
    };
}