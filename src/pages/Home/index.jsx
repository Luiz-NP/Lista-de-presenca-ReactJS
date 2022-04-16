import React, { useState, useEffect } from 'react';

import './style.css'

import { Card } from '../../components/Card'

export function Home() {
  //Estado que atualiza o nome dos alunos
  const [studentName, setStudentName] = useState("Aluno")
  //Estado que cria Cards para cada aluno
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: ' ', avatar: ' '})

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

  useEffect(() => {
    fetch('https://api.github.com/users/LuizSig')
    .then(Response => Response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>
        
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
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
