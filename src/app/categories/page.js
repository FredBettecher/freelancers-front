'use client';

import { Body } from '../../assets/styles/home-styles/home';
import HomeHeader from '../../components/Home/HomeHeader';
import Categories from '../../components/categories/Categories';

export default function CategoriesPage() {
    return(
        <Body>
            <HomeHeader />
            <Categories />
        </Body>
    );
}
