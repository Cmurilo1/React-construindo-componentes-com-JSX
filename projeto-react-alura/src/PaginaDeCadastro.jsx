import { useState } from 'react'
import Titulo from './Titulo.jsx'
import CampoDeDigitacao from './styles/CampoDeDigitacao.jsx'
import Botao from './Botao.jsx'
import './styles/PaginaDeLogin.css' /* Reutiliza o mesmo estilo, só muda o conteúdo */

// Imagem da página de cadastro (você tem ela na pasta public/img)
const imagemCadastro = "/img/imagem-cadastro.png"

function PaginaCadastro() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")

  const handleCadastro = (evento) => {
    evento.preventDefault()
    console.log('Cadastro:', { nome, email, senha, confirmarSenha })
  }

  return (
    <div className="pagina-login">
      {/* Área da imagem lateral (agora a do cadastro) */}
      <div className="imagem-lateral">
        <img src={imagemCadastro} alt="Pessoas trabalhando em equipe" />
      </div>

      {/* Área do formulário */}
      <div className="formulario-container">
        <form className="form-login" onSubmit={handleCadastro}>
          
          <Titulo>Crie sua conta</Titulo>

          <CampoDeDigitacao
            label="Nome"
            valor={nome}
            setValor={setNome}
          />

          <CampoDeDigitacao
            label="E-mail"
            valor={email}
            setValor={setEmail}
          />

          <CampoDeDigitacao
            label="Senha"
            valor={senha}
            setValor={setSenha}
            tipo="password"
          />

          <CampoDeDigitacao
            label="Confirmar senha"
            valor={confirmarSenha}
            setValor={setConfirmarSenha}
            tipo="password"
          />

          <Botao type="submit">Cadastrar →</Botao>

          <p className="cadastro-texto">
            Já tem conta? <a href="/" className="link-cadastro">Faça seu login!</a>
          </p>

        </form>
      </div>
    </div>
  )
}

export default PaginaCadastro