import '../Styles/Voluntarios.css';

function Voluntarios() {
    return (
        <section className="voluntarios-sec">
            <div className="frase_he">
                <h1>Sua experiência pode transformar vidas!</h1>
                <p>Contribua como psicólogo(a) voluntário(a)!</p>
            </div>

            <form className="voluntarios-formulario">
                <h2>Informações pessoais:</h2>
                <label>Nome completo:</label>
                <input type="text" placeholder="Digite seu nome completo" required/>

                <label>Data de nascimento:</label>
                <input type="date" required/>

                <label>Endereço:</label>
                <input type="text" placeholder="Digite seu endereço" required/>

                <label>Telefone para contato:</label>
                <input 
                    type="tel" 
                    placeholder="+55 (XX) XXXXX-XXXX" 
                    pattern="\+55\s\(\d{2}\)\s\d{4,5}-\d{4}" 
                    title="Digite o telefone no formato +55 (XX) XXXXX-XXXX" 
                    required 
                />

                <label>E-mail:</label>
                <input type="email" placeholder="Digite seu e-mail" required/>

                <h2>Formação e Experiência:</h2>
                <label>Formação acadêmica (graduação, especializações):</label>
                <input type="text" placeholder="Digite sua formação acadêmica" required />

                <label>Experiência anterior em voluntariado (se houver):</label>
                <input type="text" placeholder="Descreva sua experiência" required/>

                <h2>Disponibilidade</h2>
                <label>Dias e horários disponíveis para atendimento:</label>
                <input type="text" placeholder="Digite seus dias e horários disponíveis" required/>

                <label>Tipo de serviço que pode oferecer (atendimento individual, grupos, etc.):</label>
                <input type="text" placeholder="Descreva o tipo de serviço" required/>

                <h2>Outras Informações</h2>
                <label>Áreas de interesse (crianças, adolescentes, adultos):</label>
                <input type="text" placeholder="Digite suas áreas de interesse" required/>

                <label>Razões para querer se voluntariar:</label>
                <textarea placeholder="Descreva suas razões" required></textarea>

                <button className='button_voluntario' type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Voluntarios;