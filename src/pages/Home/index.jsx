import './style.css'

import { Card } from '../../components/Card'

export function Home() {
  return (
    <div className='container'>
      <Card name="Marcos" time="21:33:54"/>
      
      <h1>Lista de presença</h1>
      <input type="text" placeholder="adicione um texto"/>
      <button type="button">Adicionar</button>

      <Card name="Luiz" time="20:13:34"/>
      <Card name="Marcos" time="21:33:54"/>
      
      

    </div>
  )
}
