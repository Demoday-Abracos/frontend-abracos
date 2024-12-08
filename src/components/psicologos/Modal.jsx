import React, { useState } from 'react';
import '../Styles/Modal.css';

function Modal({ onClose, psicologo }) {
    const [formData, setFormData] = useState({
        nome_consulta:'',
        idade_consulta: '',
        data_consulta: '',
        horario_consulta: '',
        motivo_consulta: '',
        preferencias_consulta: ''
    });

    const [successMessage, setSuccessMessage] = useState(''); 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://backend.abracos.tech/consulta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    psicologoId: psicologo.id,
                }),
            });

            if (response.ok) {
                setSuccessMessage('Consulta agendada com sucesso!');
                setFormData({
                    nome_consulta: '',
                    idade_consulta: '',
                    data_consulta: '',
                    horario_consulta: '',
                    motivo_consulta: '',
                    preferencias_consulta: ''
                });
            } else {
                setSuccessMessage('Erro ao agendar consulta. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            setSuccessMessage('Erro ao conectar com o servidor. Por favor, tente novamente.');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button">Fechar</button>
                <div className="modal-header">
                    <img src={psicologo.foto} alt="imagem do psicologo" className="modal-psicologo-imagem" />
                    <div className="header-text">
                        <h2>Agendamento de Sessão</h2>
                        <p><strong>Consulta - {psicologo.titulo}</strong></p>
                        <span className="modal-rating">⭐⭐⭐⭐⭐ {psicologo.rating}</span>
                    </div>
                </div>

                <div className="modal-body">
                    {successMessage ? (
                        <div className="success-message">
                            <h3>{successMessage}</h3>
                            <button onClick={onClose} className="modal-button">
                                Fechar
                            </button>
                        </div>
                    ) : (
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <label>
                                Nome:
                                <input type="text" name="nome_consulta" value={formData.nome_consulta} onChange={handleChange} placeholder="Digite seu nome" required />
                            </label>
                            <label>
                                Idade:
                                <input
                                    type="number"
                                    name="idade_consulta"
                                    value={formData.idade_consulta}
                                    onChange={handleChange}
                                    placeholder="Ex:18 anos..."
                                />
                            </label>
                            <label>
                                Data disponível:
                                <input
                                    type="date"
                                    name="data_consulta"
                                    value={formData.data_consulta}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Horário disponível:
                                <input
                                    type="time"
                                    name="horario_consulta"
                                    value={formData.horario_consulta}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Motivo da consulta:
                                <input
                                    type="text"
                                    name="motivo_consulta"
                                    value={formData.motivo_consulta}
                                    onChange={handleChange}
                                    placeholder="Ex: Crises recentes..."
                                    required
                                />
                            </label>
                            <label>
                                Preferência de consulta:
                                <input
                                    type="text"
                                    name="preferencias_consulta"
                                    value={formData.preferencias_consulta}
                                    onChange={handleChange}
                                    placeholder="Ex: Atendimento em libras..."
                                />
                            </label>

                            <button type="submit" className="modal-button">Confirmar</button>
                        </form>
                    )}
                </div>
                <div className="modal-footer">
                    <h3>Consulta - {psicologo.titulo}</h3>
                    <p>{psicologo.paragrafo}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
