import { useState } from "react"
import Perfil from "./components/Perfil"
import Formulario from "./components/formulario"
import ReposList from "./components/ReposLIst"

function App() {
  const nome = 'erick'

  function retornaNome() {
    return nome
  }

  const pessoa = {
    nome: 'Maria'
  }

  let estaDeDia = true
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}

    {/* {formularioEstaVisivel && (
      <Formulario/>
      )} 
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">
    toggle form
    </button> */}
    </>
  )
}

export default App
