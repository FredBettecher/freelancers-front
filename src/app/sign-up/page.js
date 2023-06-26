'use client';

import AuthHeader from '../../components/Auth/AuthHeader';
import SingUpForm from '../../components/Auth/SignUpForm';
import { Body, Container } from '../../assets/styles/auth-styles/authContainers';

export default function SignUpPage() {
    return(
        <Body>
            <AuthHeader />
            <Container>
                <SingUpForm />
            </Container>
        </Body>
    );
}
