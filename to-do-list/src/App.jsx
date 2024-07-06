import './App.css'
import Tarea from './components/tarea'
import TareaFormulario from './components/tareaFormulario'
import ListaDeTareas from './components/listaDeTareas'

function App() {
  return (
    <article className='aplicacion-tareas'>
      <section className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </section>
    </article>
  )
}

export default App
