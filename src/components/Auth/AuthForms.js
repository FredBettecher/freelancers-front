import { Container, Title, Form, Paragraph, Input, Button, Redirect, Span } from "@/styles/authForms";
import { useState } from "react";

function SingUp() {
    return(
        <Container>
            <Title>Cadastre-se</Title>
            <Form>
                <Paragraph>E-mail</Paragraph>
                <Input type='email' name='email' />
                <Paragraph>Senha</Paragraph>
                <Input type='password' name='password'/>
                <Paragraph>Confirme a senha</Paragraph>
                <Input type='password' name='repeat-password'/>
                <Button type='submit'>Cadastrar</Button>
                <Span><Redirect href='/login'>Já possui uma conta? Conecte-se!</Redirect></Span>
            </Form>
        </Container>
    );
}

function Login() {
    return(
        <Container>
        <Title>Conecte-se</Title>
        <Form>
            <Paragraph>E-mail</Paragraph>
            <Input type='email' name='email' />
            <Paragraph>Senha</Paragraph>
            <Input type='password' name='password'/>
            <Button type='submit'>Entrar</Button>
            <Span><Redirect href='/sign-up'>Ainda não possui uma conta? Cadastre-se!</Redirect></Span>
        </Form>
    </Container>
    );
}

const authForms = {
    SingUp,
    Login,
};

export default authForms;
