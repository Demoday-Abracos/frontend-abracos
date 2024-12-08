import React, { useState, useEffect } from 'react';
import '../Styles/Acolhimento.css';

import venezuela from '../../../public/assets/images/venezu.svg';
import siria from '../../../public/assets/images/siria.svg';
import haiti from '../../../public/assets/images/haiti.svg';

import abrace from '../../../public/assets/images/abrace.svg';
import acolhida from '../../../public/assets/images/acolhida.svg';
import fraternidade from '../../../public/assets/images/fraternidade.svg';

import missao from '../../../assets/images/mission.svg';
import carita from '../../../assets/images/caritan.svg';
import vidan from '../../../assets/images/vidan.svg';

import refugio from '../../../assets/images/refugion.svg';
import adus from '../../../assets/images/adusn.svg';
import caritan from '../../../assets/images/caritans.svg';

function Acolhimento() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [itemsVisible, setItemsVisible] = useState(3);

    const countries = [
        { name: "Venezuela", flag: venezuela },
        { name: "Síria", flag: siria },
        { name: "Haiti", flag: haiti }
    ];

    const shelters = {
        Venezuela: [
            {
                img: acolhida,
                description: "Iniciativa do governo federal com apoio da ONU, que oferece acolhimento temporário em abrigos em Boa Vista e Pacaraima, além de programas de interiorização para outras regiões do Brasil."
            },
            {
                img: abrace,
                description: "Oferece suporte específico para refugiados venezuelanos em regiões com alta demanda de acolhimento."
            },
            {
                img: fraternidade,
                description: "Atua em abrigos em Roraima, oferecendo moradia temporária e apoio humanitário aos refugiados venezuelanos."
            }
        ],
        Síria: [
            {
                img: missao,
                description: "Fornece moradia temporária e apoio integral para haitianos, ajudando com documentação, assistência social e integração no mercado de trabalho."
            },
            {
                img: carita,
                description: " Oferece apoio específico a haitianos, com serviços de moradia temporária e suporte para integração."
            },
            {
                img: vidan,
                description: " Este instituto atende haitianos, oferecendo abrigo temporário, apoio psicológico, orientação social e assistência na busca de emprego."
            }
        ],
        Haiti: [
            {
                img: refugio,
                description: "Focada em refugiados sírios e de outras nacionalidades, oferece moradia temporária, apoio jurídico e assistência social."
            },

            {
                img: adus,
                description: " Trabalha com refugiados sírios, ajudando com moradia temporária, ensino de português e assistência para inserção no mercado de trabalho."
            },

            {
                img: caritan,
                description: " Organização que presta serviços de acolhimento, moradia temporária e integração social para refugiados sírios e outros grupos em situação de vulnerabilidade."
            }
        ]
    };

    useEffect(() => {
        const updateItemsVisible = () => {
            setItemsVisible(window.innerWidth <= 500 ? 2 : 3);
        };

        updateItemsVisible(); // Chamada inicial
        window.addEventListener('resize', updateItemsVisible);

        return () => {
            window.removeEventListener('resize', updateItemsVisible);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + countries.length) % countries.length);
    };

    const getVisibleCountries = () => {
        const start = currentIndex;
        const end = (currentIndex + itemsVisible) % countries.length;
        if (end > start) {
            return countries.slice(start, end);
        } else {
            return [...countries.slice(start), ...countries.slice(0, end)];
        }
    };

    return (
        <section className='sect_acolher'>
            <section className='acolher'>
                <h1>Acolher é um ato de <span><mark>amor!</mark></span></h1>
            </section>

            <section className='sect_acolher2'>
                <div className='naci'>
                    <h1>Escolha sua Nacionalidade:</h1>
                </div>

                <div className='carousel'>
                    <button className='nav-button' onClick={handlePrev}>◀</button>
                    <div className='carousel-container'>
                        {getVisibleCountries().map((country, index) => (
                            <div
                                className='carousel-item'
                                key={index}
                                onClick={() => setSelectedCountry(country.name)}
                            >
                                <img src={country.flag} alt={`Bandeira ${country.name}`} />
                                <h4>{country.name}</h4>
                            </div>
                        ))}
                    </div>
                    <button className='nav-butto ' onClick={handleNext}>▶</button>
                </div>
            </section>

            <section className='sect_acolher3'>
                <div className='abri'>
                    <h1>Abrigos:</h1>
                </div>

                <div className='inf_ongs'>
                    {selectedCountry && shelters[selectedCountry].map((shelter, index) => (
                        <div className='same_inf' key={index}>
                            <img src={shelter.img} alt="Abrigo" />
                            <h6>{shelter.description}</h6>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Acolhimento;
