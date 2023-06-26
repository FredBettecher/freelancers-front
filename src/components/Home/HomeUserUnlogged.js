import { Card, CardImage, CardTitle, CardsContainer } from '../../assets/styles/home-styles/home';
import { montserrat } from "../../assets/styles/fonts";
import web from '../../assets/images/image-dev-web.png';
import mobile from '../../assets/images/image-dev-mobile.png';
import animation from '../../assets/images/image-animation.png';
import design from '../../assets/images/image-design.png';
import writing from '../../assets/images/image-writing.png';
import more from '../../assets/images/image-more.png';

export default function HomeUserUnlogged() {
    const topCategories = [
        {
            key: 'webDev',
            image: web,
            title: 'Desenvolvimento Web',
        },
        {
            key: 'mobDev',
            image: mobile,
            title: 'Desenvolvimento Mobile',
        },
        {
            key: 'animation',
            image: animation,
            title: 'Animação e Edição de Vídeo',
        }
    ];

    const downCategories = [
        {
            key: 'design',
            image: design,
            title: 'Design',
        },
        {
            key: 'writing',
            image: writing,
            title: 'Escrita e Tradução',
        },
        {
            key: 'more',
            image: more,
            title: 'Mais Serviços',
        }
    ];

    return(
        <>
        <CardsContainer>
            {
                topCategories.map((category) => (
                    <Card key={category.key}>
                        <CardImage src={category.image}/>
                        <CardTitle className={montserrat.className}>{category.title}</CardTitle>
                    </Card>
            ))}
        </CardsContainer>
        <CardsContainer>
            {
                downCategories.map((category) => (
                    <Card key={category.key}>
                        <CardImage src={category.image} />
                        <CardTitle className={montserrat.className}>{category.title}</CardTitle>
                    </Card>
            ))}
        </CardsContainer>
        </>
    );
}
