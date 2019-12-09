import styled from 'styled-components';

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Stat = styled.div`
    flex-grow: 0;
    margin-right: 10px;

    img {
        height: 24px;
        margin-right: 2px;
    }

    span {
        font-family: 'pirata-one';
        font-size: 32px;
    }
`;