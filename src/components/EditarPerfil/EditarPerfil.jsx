import React from "react";
import "../Styles/EditarPerfil.css";
import avatar from "../../../assets/images/avatar.svg";
import { Link } from "react-router-dom";

function EditarPerfil() {
  return (
    <div className="app-container">
      <div className="sidebar-editar">
          <div className="profile-avatar">
            <img src={avatar} />
            <button className="edit-profile">✏️ Editar Perfil</button>
          </div>
        <nav className="navinha-perfil">
            <div className="navinhaaaa" style={{display: "flex"}}>
            <img src="assets/images/minhas-aulas.svg" alt="" />
              <Link to="/videoaulas">
                <p>Minhas aulas</p>
              </Link>
            </div>

              
            <div className="navinhaaaa">
            <img src="assets/images/user-login.svg" alt="imagem do usuario" />
              <Link to="/MinhaConta">
                <p>Minha conta</p>
              </Link>
            </div>
            
        </nav>
      </div>
      <div className="profile-form">
        <h2>Meu Perfil</h2>
        <p>Gerenciar e proteger sua conta</p>
        <form>
          <label className="label-perfil">
            Nome de usuário
            <input type="text" placeholder="Digite seu nome de usuário" />
            <small>Nome do usuário pode ser alterado apenas uma vez.</small>
          </label>
          <label className="label-perfil">
            Email
            <input type="email" placeholder="Digite seu email" />
          </label>
          <div className="gender-section">
            <span>Sexo</span>
            <label className="label-perfil">
              <input type="radio" name="gender" value="masculino" /> Masculino
            </label>
            <label className="label-perfil">
              <input type="radio" name="gender" value="feminino" /> Feminino
            </label>
            <label className="label-perfil">
              <input type="radio" name="gender" value="outro" /> Outro
            </label>
          </div>
          <label className="label-perfil">
            CPF/Data de nascimento
            <a href="#!" className="fill-now">
              Preencher agora
            </a>
          </label >
          <button type="submit" className="save-button">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditarPerfil;