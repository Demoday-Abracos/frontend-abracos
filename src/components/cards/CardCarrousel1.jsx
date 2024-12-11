import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../Styles/CardCarrousel.css';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const CardCarousel = () => {

    const navigate = useNavigate();
    const cards = [
        { image: 'assets/images/maca.gif', label: 'Alimentação', alt: 'Alimentação', route: '/Alimentação' },
        { image: 'assets/images/banco.gif', label: 'Banco', alt: 'Banco', route: '/Banco'},
        { image: 'assets/images/policia.gif', label: 'Polícia', alt: 'Polícia', route: '/Polícia' },
        { image: 'assets/images/banco.gif', label: 'Banco', alt: 'Banco', route: '/Banco' }, 
    ];

    const onCardClick = (route, label) => {
        navigate(route, { state: { categoriaSelecionada: label } });
    };

    return (
        <Swiper
        className="custom-swiper"
            spaceBetween={10}
            slidesPerView={3}
            navigation
            loop={true}

            breakpoints={{
                768: {
                    slidesPerView: 3, 
                },
                500: {
                    slidesPerView: 2, 
                },
            }}
        >
            {cards.map((card, index) => (
                <SwiperSlide
                    key={index}
                    onClick={() => onCardClick(card.route, card.label)}
                    style={{cursor: 'pointer'}}
                    >
                    <Card image={card.image} label={card.label} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardCarousel;
