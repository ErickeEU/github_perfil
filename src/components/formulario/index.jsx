import { useState, useEffect } from "react"

const Formulario = () => {

const [materiaA, setMateriaA] = useState(0)
const [materiaB, setMateriaB] = useState(0)
const [materiaC, setMateriaC] = useState(0)
const [nome, setNome] = useState('')

useEffect(() => {
    console.log("O componente iniciou")

    return () => {
        console.log('O componente finalizou')
    }
})

useEffect(() => {
    console.log("O estado nome mudou")
}, [nome])

useEffect(() => {
    console.log("Materia A mudeou para: "+ materiaA)
},[materiaA])

const alteraNome = (event) => {
    setNome(estadoAnterior => {
        return event.target.value
    })
}

const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC
    const media = soma/3

    if (media >= 7) {
        return (
            <p>Olá {nome}, você foi aprovado</p>
        )
    } else {
        return (
            <p>Olá {nome}, você não foi aprovado</p>
        )
    }
}

    return (
        <form action="">
            <ul>
                {[1,2,3,4,5].map(item => <li key={item}>{item}</li>)}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={event => setMateriaA(parseInt(event.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={event => setMateriaB(parseInt(event.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={event => setMateriaC(parseInt(event.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario