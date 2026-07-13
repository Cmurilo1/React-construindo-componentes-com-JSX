import { useState } from 'react'
import Titulo from './Titulo.jsx'
import Subtitulo from './Subtitulo.jsx'
import CampoDeDigitacao from './styles/CampoDeDigitacao.jsx'
import Botao from './Botao.jsx'
import Checkbox from './Checkbox.jsx'
import './styles/PaginaDeLogin.css'
import './styles/styles.css'

// Caminhos corretos das imagens
const github = "/img/Github.svg"
const linkedin = "/img/Linkedin.svg"
const imagemLogin = "/img/imagem-Login.png"

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = (evento) => {
    evento.preventDefault()
    console.log('Login:', email, senha)
  }

  return (
    <div className="pagina-login">
      {/* Área da imagem lateral */}
      <div className="imagem-lateral">
        <img src={imagemLogin} alt="Pessoas usando computador" />
      </div>

      {/* Área do formulário */}
      <div className="formulario-container">
        <form className="form-login" onSubmit={handleSubmit}>
          <Titulo>Acesse sua conta</Titulo>

          <CampoDeDigitacao
            label="E-mail ou usuário"
            valor={email}
            setValor={setEmail}
          />

          <CampoDeDigitacao
            label="Senha"
            valor={senha}
            setValor={setSenha}
            tipo="password"
          />

          <div className="opcoes-form">
            <Checkbox>Lembrar-me</Checkbox>
            <a href="#" className="esqueci-a-senha">Esqueci a senha</a>
          </div>

          <Botao type="submit">Entrar</Botao>

          <div className="container-links_titulo">
            ou entre com outras contas
          </div>

          <div className="container-links">
            <ul>
              <li>
                <a href="https://github.com/Cmurilo1" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="Meu GitHub" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cmurilo1" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="Meu LinkedIn" />
                </a>
              </li>
            </ul>
          </div>

          <p className="link-cadastro-texto">
            Ainda não tem conta? <a href="#" className="link-cadastro">Crie seu cadastro!</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default App
