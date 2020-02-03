import React, { useState, useEffect } from 'react'
import axios from 'axios'
import personsService from './services/persons'

const App = (props) => {
  const [persons, setPersons] = useState([])
  /*
    { name: 'Arto Hellas', number: '040 111 2222' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) */

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterCondition, setFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])



  const addNew = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber
    }
    if (false) {
      window.alert(`${newObject.name} is already in the phonebook`)
    } else {
      setPersons(persons.concat(newObject))
    }
    setNewName('')
    setNewNumber('')
  

  personsService
  .create(newObject)
  .then(response => {
    console.log(response)
  })
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    //tänne filtteri personseille
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <input value={filterCondition}
          onChange={handleFilterChange}
        />
      </div>
      <form onSubmit={addNew}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map((person) =>
          <li key={person.name}> {person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App