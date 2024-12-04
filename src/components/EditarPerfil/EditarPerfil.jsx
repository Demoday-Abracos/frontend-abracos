import React from 'react';

const EditarPerfil = () => {
  return (
    <div className="perfil-container">
      <aside className="sidebar">
        <div className="user-info">
          <div className="user-avatar">ExemploPessoa_</div>
          <button className="edit-profile">✏️ Editar Perfil</button>
        </div>
        <nav className="menu">
          <ul>
            <li>📚 Minhas Aulas</li>
            <li>📩 Caixa de entrada</li>
            <li>👤 Minha conta</li>
          </ul>
        </nav>
      </aside>

      <main className="profile-form">
        <h1>Meu Perfil</h1>
        <p>Gerenciar e proteger sua conta</p>
        <form>
          <div className="form-group">
            <label>Nome de usuário</label>
            <input type="text" placeholder="Nome de usuário" />
            <small>Nome de usuário pode ser alterado apenas uma vez.</small>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Sexo</label>
            <div className="radio-group">
              <label><input type="radio" name="sexo" value="masculino" /> Masculino</label>
              <label><input type="radio" name="sexo" value="feminino" /> Feminino</label>
              <label><input type="radio" name="sexo" value="outro" /> Outro</label>
            </div>
          </div>
          <div className="form-group">
            <label>CPF/Data de nascimento</label>
            <a href="#!">Preencher agora</a>
          </div>
          <button type="submit" className="save-button">Salvar</button>
        </form>
      </main>
    </div>
  );
};

export default EditarPerfil;