import './App.css'
import Tarea from './components/tarea'
import TareaFormulario from './components/tareaFormulario'

function App() {
  return (
    <article className='aplicacion-tareas'>
      <section className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <TareaFormulario />
        <Tarea texto='aprender react' />
      </section>
    </article>
  )
}

export default App
