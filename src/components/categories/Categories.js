import { CategoriesContainer, Category, CategoryImage, CategoryTitle } from '../../assets/styles/categories-styles/categories';
import { getCategories } from '../../services/categories';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCategories().then(res => {
            setCategories(res.data);
        });
    }, []);

    return(
        <CategoriesContainer>
            {
                categories.map(category => (
                    <Category key={category.id}>
                        <Image
                            loader={() => category.categoryImage}
                            src=""
                            alt=""
                            width={300}
                            height={200}
                        />
                        <CategoryTitle>{category.name}</CategoryTitle>
                    </Category>
                
            ))}
        </CategoriesContainer>
    );
}
