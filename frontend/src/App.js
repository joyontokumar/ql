import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Movies from './containers/movies'
import AddMovie from './components/addMovie'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Movies />
      <AddMovie />
      <Footer />
    </div>
  )
}

export default App
