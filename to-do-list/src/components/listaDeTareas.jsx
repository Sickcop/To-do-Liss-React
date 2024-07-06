import TareaFormulario from './tareaFormulario.jsx'
import Tarea from './tarea.jsx'
import '../style-sheet/ListaDeTareas.css'
import { useState } from 'react'

function ListaDeTareas() {

  const [tareas, setTareas] = useState([])

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim()

      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas)
    }
  }

  return(
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <section className='tareas-lista-contenedor'>
        {
          tareas.map(tarea => {
            <Tarea 
              texto={tarea.texto}
              completada={tarea.completada} />
          })
        }
      </section>
    </>
  )
}

export default ListaDeTareas