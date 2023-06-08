'use client';

import AuthHeader from "@/components/Auth/AuthHeader";
import LoginForm from "@/components/Auth/LoginForm";
import { Body, Container } from '@/assets/styles/authContainers';

export default function LoginPage() {
    return(
        <Body>
            <AuthHeader />
            <Container>
                <LoginForm />
            </Container>
        </Body>
    );
}
