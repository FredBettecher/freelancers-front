import { Container, Title, Form, Paragraph, Input, Button } from "@/styles/authForms";

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
        </Form>
    </Container>
    );
}

const authForms = {
    SingUp,
    Login,
};

export default authForms;