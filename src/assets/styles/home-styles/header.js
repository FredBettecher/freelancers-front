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
    width: 13.5rem;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button`
    height: 1.875rem;
    width: 6.75rem;
    background-color: #FF8200;
    border: transparent;
    border-radius: 0.625rem;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;

    &:active {
        transform: scale(0.95);
    }
`;

export const Label = styled(Link)`
    color: #007DFF;
    font-size: 0.875rem;
    font-weight: bold;
`;

export const Searchbar = styled.input`
    width: 22rem;
    height: 1.875rem;
    font-size: 0.875rem;
    margin: 0 12rem 0 5rem;
    padding-left: 0.625rem;
    border: solid 0.0625rem #888888;
    border-radius: 0.3125rem;

    &::placeholder {
        color: #888888;
        text-align: center;
    }
`;
