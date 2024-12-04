import React from "react";
import '../Styles/EditarPerfil.css';


function EditarPerfil() {
  return (
    <div className="Editar-container">
      <header className="becalho">
        <h1>Bem-Estar</h1>
        <nav>
          <ul>
            <li>Início</li>
            <li>Terapeutas</li>
            <li>Workshops</li>
            <li>Recursos</li>
            <li>Documentos</li>
            <li>Contato</li>
          </ul>
        </nav>
        <div className="icone-perfil">👤</div>
      </header>
      <main className="conteudo-principal">
        <aside className="menu-lateral">
          <div className="perfil-usuario">
            <div className="avatar-usuario">UsuarioDemo_</div>
            <button className="botao-editar">Alterar Perfil</button>
          </div>
          <ul>
            <li>Meus Cursos</li>
            <li>Mensagens</li>
            <li>Configurações</li>
          </ul>
        </aside>
        <section className="detalhes-perfil">
          <h2>Perfil do Usuário</h2>
          <form>
            <label>
              Nome de Login
              <input type="text" placeholder="Nome de login" />
              <small>O nome de login só pode ser alterado uma vez.</small>
            </label>
            <label>
              Endereço de Email
              <input type="email" placeholder="Insira seu email" />
            </label>
            <label>
              Gênero
              <div>
                <input type="radio" name="genero" value="masculino" /> Masculino
                <input type="radio" name="genero" value="feminino" /> Feminino
                <input type="radio" name="genero" value="outro" /> Outro
              </div>
            </label>
            <label>
              Documento/Data de Nascimento
              <input type="text" placeholder="Informe os dados" />
            </label>
            <button type="submit">Atualizar</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default EditarPerfil;