'use client';

import { UserContext } from '@/app/contexts/userContext';
import { Container, Title, Form, Paragraph, Input, Button, Redirect, Span } from '@/assets/styles/auth-styles/authForms';
import { login, signUp } from '@/services/auth';
import { useRouter } from 'next/navigation';
import { useState, useContext } from 'react';

export default function SingUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { token, setToken } = useContext(UserContext);
    const router = useRouter();

    function handleSignup(e) {
        e.preventDefault();

        if(password.length < 4 || confirmPassword.length < 4) {
            return alert('A senha deve conter pelo menos 4 dígitos');
        }

        if(password !== confirmPassword) {
            return alert('As senhas devem ser iguais');
        }

        signUp(email, password, confirmPassword)
            .then(res => {
                console.log(res)
                if(res.statusText === "Conflict") {
                    return alert('E-mail já em uso');
                }
                setToken(res.data.token);
                login(email, password).then(router.push('/'));
            })
            .catch(error => {
                alert(error.data.message);
            });
    }

    return(
        <Container>
            <Title>Cadastre-se</Title>
            <Form onSubmit={handleSignup}>
                <Paragraph>E-mail</Paragraph>
                <Input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} required />
                <Paragraph>Senha</Paragraph>
                <Input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} required />
                <Paragraph>Confirme a senha</Paragraph>
                <Input type='password' name='confirmPassword' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                <Button name='button' type='submit'>Cadastrar</Button>
                <Span><Redirect href='/login'>Já possui uma conta? Conecte-se!</Redirect></Span>
            </Form>
        </Container>
    );
}
