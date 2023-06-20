import { styled } from 'styled-components';
import Link from 'next/link';
import { IoChatbubbleEllipsesSharp, IoNotifications, IoPeopleSharp } from 'react-icons/io5'
import Image from 'next/image';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 99%;
    height: 5rem;
    border-bottom: 0.0625rem solid #888888;
    padding: 0.625rem 1rem;
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 18rem;
`;

export const NavContainer = styled.div`
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
    font-size: 1rem;
    font-weight: bold;
`;

export const Searchbar = styled.input`
    width: 22rem;
    height: 1.875rem;
    font-size: 0.875rem;
    margin: 0 12rem 0 4rem;
    padding-left: 0.625rem;
    border: solid 0.0625rem #888888;
    border-radius: 0.3125rem;

    &::placeholder {
        color: #888888;
        text-align: center;
    }
`;

export const UserImage = styled(Image)`
    border-radius: 50%;
    border: solid 0.0625rem #007DFF;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    background-color: #eeeeee;
`;

const Icon = styled.div`
    font-size: 1.5rem;
    color: #007DFF;
    cursor: pointer;
`;

export const Chat = () => <Icon><IoChatbubbleEllipsesSharp /></Icon>;
export const Notifications = () => <Icon><IoNotifications /></Icon>;
export const Contacts = () => <Icon><IoPeopleSharp /></Icon>;
