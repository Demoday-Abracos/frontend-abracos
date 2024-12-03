import React from 'react';
import '../Styles/Modal.css';

function Modal({ onClose, psicologo }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button">Fechar</button>
                <div className="modal-header">
                    <img src={psicologo.foto} alt={"imagem do psicologo"} className="modal-psicologo-imagem" />
                    <div className="header-text">
                        <h2>Agendamento de Sessão</h2>
                        <p><strong>Consulta - {psicologo.titulo}</strong></p>
                        <span className="modal-rating">⭐⭐⭐⭐⭐ {psicologo.rating}</span>
                    </div>
                </div>

                <div className="modal-body">
                    <form className="modal-form">
                        <label>
                            Nome:
                            <input type="text" placeholder="Digite seu nome" />
                        </label>
                        <label>
                            Idade:
                            <input type="text" placeholder="Ex:18 anos..." />
                        </label>
                        <label>
                            Data disponível:
                            <input type="date" />
                        </label>
                        <label>
                            Horário disponível:
                            <input type="time" />
                        </label>
                        <label>
                            Motivo da consulta:
                            <input type="text" placeholder="Ex: Crises recentes..." />
                        </label>
                        <label>
                            Preferência de consulta:
                            <input type="text" placeholder="Ex: Atendimento em libras..." />
                        </label>

                        <button type="submit" className="modal-button">Confirmar</button>
                    </form>
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