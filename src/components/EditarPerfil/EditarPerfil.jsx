import React from "react";
import "../Styles/EditarPerfil.css";
import avatar from "../../../assets/images/avatar.svg";

function EditarPerfil() {
  return (
    <div className="app-container">
      <div className="sidebar-editar">
          <div className="profile-avatar">
            <img src={avatar} />
            <button className="edit-profile">✏️ Editar Perfil</button>
          </div>
        <nav className="navinha-perfil">
          <ul>
            <li><a href="">📹 Minhas Aulas</a></li>
            <li>📩 Caixa de entrada</li>
            <li>🙍 Minha conta</li>
          </ul>
        </nav>
      </div>
      <div className="profile-form">
        <h2>Meu Perfil</h2>
        <p>Gerenciar e proteger sua conta</p>
        <form>
          <label>
            Nome de usuário
            <input type="text" placeholder="Digite seu nome de usuário" />
            <small>Nome do usuário pode ser alterado apenas uma vez.</small>
          </label>
          <label>
            Email
            <input type="email" placeholder="Digite seu email" />
          </label>
          <div className="gender-section">
            <span>Sexo</span>
            <label>
              <input type="radio" name="gender" value="masculino" /> Masculino
            </label>
            <label>
              <input type="radio" name="gender" value="feminino" /> Feminino
            </label>
            <label>
              <input type="radio" name="gender" value="outro" /> Outro
            </label>
          </div>
          <label>
            CPF/Data de nascimento
            <a href="#!" className="fill-now">
              Preencher agora
            </a>
          </label>
          <button type="submit" className="save-button">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditarPerfil;