import { styled } from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 3rem;
`;

export const Title = styled.h1`
    color: #007DFF;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1.5rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 22.5rem;
    height: auto;
    margin-top: 1.5rem;
    margin-left: 3rem;
`;

export const Paragraph = styled.p`
    color: #007DFF;
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
`;

export const Input = styled.input`
    width: 100%;
    height: 2.25rem;
    border: 0.0625rem solid #888888;
    border-radius: 0.3125rem;
    font-size: 1rem;
    padding-left: 0.625rem;
    margin-bottom: 1.5rem;
`;

export const Button = styled.button`
    font-size: 1.125rem;
    font-weight: bold;
    text-align: center;
    color: #FFFFFF;
    background-color: #FF8200;
    border-radius: 0.625rem;
    border: none;
    width: 9rem;
    height: 3rem;
    margin: 0.5rem 0 0.5rem 6.75rem;
    cursor: pointer;
    
    &:active {
        transform: scale(0.95);
    }
`;

export const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1rem 0;
`;

export const Redirect = styled(Link)`
    color: #888888;
    font-size: 1.125rem;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
`;