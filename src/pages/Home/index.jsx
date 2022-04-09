import React, { useState } from 'react';

import './style.css'

import { Card } from '../../components/Card'

export function Home() {
  //Estado que atualiza o nome dos alunos
  const [studentName, setStudentName] = useState("Aluno")
  //Estado que cria Cards para cada aluno
  const [students, setStudents] = useState([])

  //Função que cria um novo objeto com nome e hora atualizadas em um Card
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    //Mantendo o conteúdo anterior usando o spread operator, e criando um novo vetor que contém o prevState e o objeto newStudent
    setStudents(prevState => [...prevState, newStudent])
  }

  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>
        
        <div>
          <strong>Luiz Gustavo</strong>
          <img src="https://github.com/LuizSig.png" alt="Foto de perfil" />
        </div>
      
      </header>
      
      <input 
      type="text" 
      placeholder="adicione um texto" 
      onChange={(e) => setStudentName(e.target.value)}/>

      <button type="button" onClick={handleAddStudent}>
        Adicionar
        </button>

      {
        students.map(student => <Card key={student.time} name={student.name} time={student.time}/>)
      }
    </div>
  )
}
