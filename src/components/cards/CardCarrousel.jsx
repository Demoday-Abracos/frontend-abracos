import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../Styles/CardCarrousel.css';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const CardCarousel = () => {
    const navigate = useNavigate();

    const cards = [
        { image: 'assets/images/amizade.gif', label: 'Saudações', alt: 'Saudações', route: '/Saudações' },
        { image: 'assets/images/fazer-compras.gif', label: 'Mercado', alt: 'Mercado', route: '/mercado' },
        { image: 'assets/images/onibus-escolar.gif', label: 'Transporte', alt: 'Transporte', route: '/Transporte' },
        { image: 'assets/images/remedio.gif', label: 'Hospital', alt: 'Hospital', route: '/hospital' },
        { image: null, label: 'Banco', alt: 'Banco', route: '/Banco' },
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
                    style={{ cursor: 'pointer' }}
                >
                    <Card image={card.image} label={card.label} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardCarousel;
