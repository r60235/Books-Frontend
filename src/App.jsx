import { useState } from 'react'
import './App.css'
import Books from './components/Books'
import BooksByTitle from './components/BooksByTitle'
import BooksByAuthor from './components/BooksByAuthor'
import AddBookForm from './components/AddBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AddBookForm/>
      <Books/>
      <BooksByTitle title="The Power of Habit"/>
      <BooksByAuthor author="J.K. Rowling"/>
    </div>
  )
}

export default App
