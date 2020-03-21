import monsterStats from './monster_stats';

export const getMonsters = () =>
    Object.keys(monsterStats.monsters)
        .map(x => ({
            name: x,
            ...monsterStats.monsters[x]
        }));

export const getMonsterObject = (id, name, level, number, elite) => {
    const monster = monsterStats.monsters[name];
    const levelInfo = elite ? monster.level[level].elite : monster.level[level].normal;

    return {
        id,
        name,
        number,
        elite,
        level,
        hp: levelInfo.health,
        maxHp: levelInfo.health,
        move: levelInfo.move,
        attack: levelInfo.attack,
        range: levelInfo.range,
        attributes: levelInfo.attributes,
        effects: []
    };
}