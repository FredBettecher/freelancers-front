import { Container, Title, Form, Paragraph, Input, Button } from "@/styles/authForms";

export default function SingUpForm() {
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

export default function LoginForm() {
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
}
