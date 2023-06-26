import { styled } from 'styled-components';
import Image from 'next/image';

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 3rem 5.625rem;
    width: auto;
    height: auto;
`;

export const Category = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15rem;
    height: 11.25rem;
    background-color: #8888884D;
    border: 0.0625rem solid #007DFF;
    border-radius: 0.3125rem;
    box-shadow: 0 4px 4px 0 rgba(0, 125, 255, 0.30);
    cursor: pointer;

    &:hover {
        transform: translateY(-0.3125rem);
        transition: transform 300ms;
    }
`;

export const CategoryImage = styled(Image)`
    width: 14.875rem;
    height: 7.5rem;
    border-bottom: 0.0625rem solid #007DFF;
    border-radius: 0.3125rem;
`;

export const CategoryTitle = styled.h2`
    font-size: 1rem;
    color: #333333;
    margin-top: 1.125rem;
`;
