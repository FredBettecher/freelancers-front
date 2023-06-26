'use client';

import { Body } from '../assets/styles/home-styles/home';
import HomeHeader from '../components/Home/HomeHeader';
import HomeUserUnlogged from '../components/Home/HomeUserUnlogged';

export default function Home() {
    return(
        <Body>
            <HomeHeader />
            <HomeUserUnlogged />
        </Body>
    );
}
