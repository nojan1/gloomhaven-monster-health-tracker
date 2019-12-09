const STORAGE_KEY = 'Gloomhaven_Monster_Tracker_Data';

export const save = (state) => {
    const data = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, data);

    return state;
}

export const load = () => {
    const data = localStorage.getItem(STORAGE_KEY)

    if(!data){
        return false;
    }

    return JSON.parse(data);
}