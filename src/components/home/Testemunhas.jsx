import React, { useEffect, useState } from 'react';
import '../Styles/Testemunhas.css';

function Testemunhas() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "David Mwangi",
            image: "assets/images/davidM.svg",
            text: "Este site foi essencial para eu conseguir meus documentos e me estabelecer aqui. As informações são claras e fáceis de entender, e me senti acolhido desde o início.",
            stars: "★★★★★"
        },
        {
            name: "Samuel Okoru",
            image: "assets/images/samuel.svg",
            text: "O site me ajudou não só com a documentação, mas também com o apoio psicológico, que foi fundamental para mim.",
            stars: "★★★★★"
        },
        {
            name: "Amina Yusuf",
            image: "assets/images/mulher-comentario.svg",
            text: "Fiquei impressionada com a atenção aos detalhes e o quanto me ajudaram a entender todo o processo burocrático de forma clara e objetiva.",
            stars: "★★★★★"
        },
        {
            name: "Carla Ali",
            image: "assets/images/mulherColombiana.svg",
            text: "Recebi todo o suporte necessário, desde a documentação até o apoio emocional, o que foi extremamente valioso para mim.",
            stars: "★★★★★"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 2 ? 0 : (prevIndex + 2) % testimonials.length
            );
        }, 3000); 
        return () => clearInterval(interval); 
    }, [testimonials.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 2 : (prevIndex - 2 + testimonials.length) % testimonials.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 2 ? 0 : (prevIndex + 2) % testimonials.length
        );
    };

    return (
        <section className="testimonials-section">
            <h2>Depoimentos</h2>
            <div className="testimonials-carousel">
                <button className="prev-btn" onClick={handlePrev}>{"<"}</button>

                <div className="testimonial">
                    <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="testimonial-img" />
                    <div className="testimonial-content">
                        <h3>{testimonials[currentIndex].name}</h3>
                        <div className="stars">{testimonials[currentIndex].stars}</div>
                        <p>{testimonials[currentIndex].text}</p>
                    </div>
                </div>

                <div className="testimonial">
                    <img src={testimonials[(currentIndex + 1) % testimonials.length].image} alt={testimonials[(currentIndex + 1) % testimonials.length].name} className="testimonial-img" />
                    <div className="testimonial-content">
                        <h3>{testimonials[(currentIndex + 1) % testimonials.length].name}</h3>
                        <div className="stars">{testimonials[(currentIndex + 1) % testimonials.length].stars}</div>
                        <p>{testimonials[(currentIndex + 1) % testimonials.length].text}</p>
                    </div>
                </div>

                <button className="next-btn" onClick={handleNext}>{">"}</button>
            </div>
        </section>
    );
}

export default Testemunhas;
