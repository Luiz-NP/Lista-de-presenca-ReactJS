import './style.css'

export function Home() {
  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="adicione um texto"/>
      <button type="button">Adicionar</button>
    </div>
  )
}
