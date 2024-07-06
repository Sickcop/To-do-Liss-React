import '../style-sheet/Tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <article className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <section 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </section>
      <section 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono'/>
      </section>
    </article>
  )
}

export default Tarea