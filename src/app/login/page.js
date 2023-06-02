'use client';

import authForms from "@/components/Auth/AuthForms";
import AuthHeader from "@/components/Auth/AuthHeader";
import { Body, Container } from '@/styles/signUp';

export default function Login() {
    return(
        <Body>
            <AuthHeader />
            <Container>
                <authForms.Login />
            </Container>
        </Body>
    );
}
