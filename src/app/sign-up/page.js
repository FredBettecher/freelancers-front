'use client';

import AuthHeader from '@/components/Auth/AuthHeader';
import { Body, Container } from '@/styles/signUp';
import authForms from '@/components/Auth/AuthForms';


export default function SignUp() {
    return(
        <Body>
            <AuthHeader />
            <Container>
                <authForms.SingUp />
            </Container>
        </Body>
    );
}
