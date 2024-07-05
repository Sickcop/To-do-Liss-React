import '../style-sheet/Tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Tarea({ texto, completada }) {
  return (
    <article className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <section className='tarea-texto'>
        {texto}
      </section>
      <section className='tarea-contenedor-iconos'>
        <AiOutlineCloseCircle className='tarea-icono'/>
      </section>
    </article>
  )
}

export default Tarea