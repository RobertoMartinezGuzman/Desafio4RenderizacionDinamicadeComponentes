import { useState } from 'react'
import { BaseColaboradores } from './Colaboradores'

function App() {

  const [listaamostrar, setlistaamostrar] = useState(BaseColaboradores)
  const [nombreColaborador, setNombreColaborador] = useState("")
  const [correoColaborador, setCorreoColaborador] = useState("")
  const [nuevaLista, setNuevalista] = useState(BaseColaboradores)

  const enviarFormulario = (e) => {
    e.preventDefault()
    setlistaamostrar([...listaamostrar, {id: Date.now(), nombre: nombreColaborador, correo: correoColaborador}])
    setNuevalista([...nuevaLista, {id: Date.now(), nombre: nombreColaborador, correo: correoColaborador}])
  }
  

  const capturaInput1 = (e) => {
    setNombreColaborador(e.target.value)
  }

  const capturaInput2 = (e) => {
    setCorreoColaborador(e.target.value)
  }

  const Filtro = (e)=> { 
    e.preventDefault()
    if(e.target.value==="") {
      setlistaamostrar(nuevaLista)
    }
    else {
      let listafiltrada = nuevaLista.filter(c=>c.nombre.includes(e.target.value) || c.correo.includes(e.target.value));
      setlistaamostrar(listafiltrada)
    }

    }
    
  return (
    <div>
      <header>
          Buscador de Colaboradores:
          <input
            type="text"
            onChange={(e) => {
              Filtro(e)
            }}
          /> 
      </header>
      <form action="" onSubmit={enviarFormulario}>
        <label htmlFor="">Nombre del Colaborador</label>
        <input type="text" placeholder='Ingresa el nombre del colaborador' name='nombreColaborador' onChange={capturaInput1} value={nombreColaborador}/>
        <label htmlFor="">Correo del Colaborador</label>
        <input type="text" placeholder='Ingresa correo del colaborador' name='correoColaborador' onChange={capturaInput2} value={correoColaborador}/>
        <button>Agregar Colaborador</button>
      </form>
      <h2>Listado de Colaboradores:</h2>
      <ul>
        {listaamostrar.map((c)=> <li onClick={() => eliminarDatos(c.nombre && c.correo) } key={c.id}>{c.nombre} - {c.correo} </li>)}
      </ul>
    </div>
  )
}

export default App
