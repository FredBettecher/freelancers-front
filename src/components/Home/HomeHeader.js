import { Button, AuthContainer, Header, Label, Searchbar, Container } from '@/assets/styles/home-styles/header';
import Image from 'next/image';
import logo from '@/assets/images/logo1.png';
import Link from 'next/link';

export default function HomeHeader(){
    return(
        <Header>
            <AuthContainer>
                <Link href='/sign-up'>
                    <Button>Cadastre-se</Button>
                </Link>
                <Label href='/login'>Conecte-se</Label>
            </AuthContainer>
            <Container>
                <Label href='/#'>Categorias</Label>
                <Searchbar type='text' placeholder='Qual serviço ou freelancer você está procurando?' />
                <Link href='/'>
                    <Image src={logo} alt='logo' height={37.5} />
                </Link>
            </Container>
        </Header>
    );
}
