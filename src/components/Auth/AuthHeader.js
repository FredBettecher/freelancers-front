import { styled } from 'styled-components';
import Image from 'next/image';
import logo from '@/assets/images/logo2.png';

export default function AuthHeader() {
    return(
        <Header>
            <Image src={logo} alt='logo' height={60}/>
        </Header>
    );
}

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 99%;
    height: 5rem;
    border-bottom: 0.0625rem solid #ffffff;
    padding: 0.625rem 0;
`;