import { load } from './persist';

export const getInitialState = () => {
    const savedState = load();
    if (savedState)
        return savedState;

    return {
        monsters: {}
    };
}