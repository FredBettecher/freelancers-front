'use client';

import { Container, Title, Form, Paragraph, Input, Button, Redirect, Span } from '@/assets/styles/auth-styles/authForms';
import { login } from '@/services/auth';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/contexts/userContext';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useContext(UserContext);
    const router = useRouter();

    function handleLogin(e) {
        e.preventDefault();

        login(email, password)
            .then(res => {
                if(res.statusText === "Unauthorized") {
                    alert('E-mail ou senha inválidos');
                }

                if(res.data.token.length !== 0) {
                    setToken(res.data.token);
                    router.push('/');
                }
            })
            .catch(error => {
                console.log(error.data);
            });
    }

    return(
        <Container>
        <Title>Conecte-se</Title>
        <Form onSubmit={handleLogin}>
            <Paragraph>E-mail</Paragraph>
            <Input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} required />
            <Paragraph>Senha</Paragraph>
            <Input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} required />
            <Button name='button' type='submit'>Entrar</Button>
            <Span><Redirect href='/sign-up'>Ainda não possui uma conta? Cadastre-se!</Redirect></Span>
        </Form>
    </Container>
    );
}
