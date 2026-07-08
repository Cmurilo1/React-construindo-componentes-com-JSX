import { useState } from 'react'
import Titulo from './Titulo.jsx'
import Subtitulo from './Subtitulo.jsx'
import CampoDeDigitacao from './styles/CampoDeDigitacao.jsx'
import Botao from './Botao.jsx'
import Checkbox from './Checkbox.jsx'
import './styles/PaginaDeLogin.css'
import './styles/styles.css'

// Caminhos exatos das imagens (estão na pasta public/img)
const github = "/img/Github.svg"
const google = "/img/Google.svg"
const imagemLogin = "/public/imagem-login.png"

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = (evento) => {
    evento.preventDefault()
    console.log('Login:', { email, senha })
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
            <Checkbox />
            <a href="#" className="esqueci-senha">Esqueci a senha</a>
          </div>

          <Botao type="submit">Login →</Botao>

          <div className="container-links_titulo">
            ou entre com outras contas
          </div>

          <div className="container-links">
            <ul>
              <li><a href="#"><img src={github} alt="Ícone GitHub" /></a></li>
              <li><a href="#"><img src={google} alt="Ícone Google" /></a></li>
            </ul>
          </div>

          <p className="cadastro-texto">
            Ainda não tem conta? <a href="#" className="link-cadastro">Crie seu cadastro!</a>
          </p>

        </form>
      </div>
    </div>
  )
}

export default App