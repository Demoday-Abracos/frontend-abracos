import '../Styles/Cadastro.css'


function Cadastro() {
    return( <>
        <section className='sec_cad'>
            <nav className='h1_cad'>
            <div className='colocar_displa'>
                <h2 className='bem_vindo_cad'>Seja bem vindo!</h2>
                <p className='p1_cad'>Crie a sua primeira conta para continuar</p>
            </div>
                <nav className='nav_cad'> 
                <nav className='div_cad'>
                    <div className='colocar_margin'>


                        <h2 className='h2_cad'>Nome completo:</h2>
                            <input type="text" name="nome" className="input_cad" alt='nome' placeholder='Ex: Victor Ramalho'/>


                        <h2 className='h2_cad'>Email:</h2>
                            <input type="email" name="email" className="input_cad" alt='email' placeholder='Ex: VictorRamalho@hotmail.com'/>


                        <h2 className='h2_cad'>Número de telefone:</h2> 
                        <div className='colocar_display_cad'>


                            <p className='p_cad'>+55</p>
                                <input type="number" name="telefone" className="telefone_cad" maxLength={11} alt='telefone' placeholder='11959520248'/>
                        </div>


                        <h2 className='h2_cad'>Crie uma senha:</h2>
                            <input type="password" name="senha" className="input_cad" alt='senha' placeholder='Sua senha'/>


                        <h2 className='h2_cad'>Confirme a senha:</h2>
                            <input type="password" name="Confirmar_senha" className="input_cad" alt='confirmar_senha' placeholder='Confirme a senha'/><br></br>


                            <div className='colocar_displayy'><input className='botao_cad' type="button" value="Cadastrar-se" alt='Cadastrar'/></div>

                    </div>
                    </nav>
                </nav>
            </nav>
        </section>
        </>
    )
}

export default Cadastro