import { styled } from 'styled-components';
import Link from 'next/link';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 99%;
    height: 5rem;
    border-bottom: 0.0625rem solid #888888;
    padding: 0.625rem 1rem;
`;

export const AuthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 18rem;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button`
    height: 2.5rem;
    width: 9rem;
    background-color: #FF8200;
    border: transparent;
    border-radius: 0.625rem;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;

    &:active {
        transform: scale(0.95);
    }
`;

export const Label = styled(Link)`
    color: #007DFF;
    font-size: 1.2rem;
    font-weight: bold;
`;

export const Searchbar = styled.input`
    width: 25rem;
    height: 2.5rem;
    font-size: 1rem;
    margin: 0 15rem 0 5rem;
    padding-left: 0.625rem;
    border: solid 0.0625rem #888888;
    border-radius: 0.3125rem;

    &::placeholder {
        color: #888888;
        text-align: center;
    }
`;
