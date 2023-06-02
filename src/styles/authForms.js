import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 3rem;
`;

export const Title = styled.h1`
    color: #007DFF;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30rem;
    height: auto;
    margin-top: 2rem;
    margin-left: 4.5rem;
`;

export const Paragraph = styled.p`
    color: #007DFF;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const Input = styled.input`
    width: 100%;
    height: 3rem;
    border: 0.0625rem solid #888888;
    border-radius: 0.3125rem;
    font-size: 1rem;
    padding-left: 0.625rem;
    margin-bottom: 2rem;
`;

export const Button = styled.button`
    font-size: 1.7rem;
    font-weight: bold;
    text-align: center;
    color: #FFFFFF;
    background-color: #FF8200;
    border-radius: 0.625rem;
    border: none;
    width: 12rem;
    height: 4rem;
    margin: 0.5rem 0 0.5rem 9rem;
    cursor: pointer;
    
    &:active {
        transform: scale(0.95);
    }
`;