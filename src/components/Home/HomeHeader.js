import { Button, UserContainer, NavContainer, Header, Label, Searchbar, UserImage, Chat, Contacts, Notifications } from '../../assets/styles/home-styles/header';
import Image from 'next/image';
import logo from '../../assets/images/logo1.png';
import Link from 'next/link';
import userIcon from '../../assets/images/user-icon.png'
import { useContext } from 'react';
import { UserContext } from '../../app/contexts/userContext';


export default function HomeHeader(){
    const { token } = useContext(UserContext);
    const isUserOnline = token.length !== 0 ? true:false;

    return(
        <Header>
            <UserContainer>
                {isUserOnline ? (
                    UserLogged()
                ) : (
                    UserUnlogged()
                )}
            </UserContainer>
            <NavContainer>
                <Label href='/categories'>Categorias</Label>
                <Searchbar type='text' placeholder='Qual serviço ou freelancer você está procurando?' />
                <Link href='/'>
                    <Image src={logo} alt='logo' height={37.5} />
                </Link>
            </NavContainer>
        </Header>
    );
}

function UserLogged() {
    return(
        <>
            <UserImage src={userIcon}/>
            <Contacts />
            <Chat />
            <Notifications />
            <Link href='/#'>
                <Button>Novo projeto</Button>
            </Link>
        </>
    );
}

function UserUnlogged() {
    return(
        <>
            <Link href='/sign-up'>
                <Button>Cadastre-se</Button>
            </Link>
            <Label href='/login'>Conecte-se</Label>
        </>
    );
}
