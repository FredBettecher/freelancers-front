'use client';

import AuthHeader from '@/components/Auth/AuthHeader';
import { Body, Container } from '@/styles/signUp';
import SingUpForm from '@/components/Auth/AuthForms';


export default function SignUp() {
    return(
        <>
        <Body>
            <AuthHeader />
            <Container>
                <SingUpForm />
            </Container>
        </Body>
        </>
    );
}