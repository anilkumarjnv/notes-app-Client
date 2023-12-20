import React from 'react'
import Header from './notes/Nav'
import Home from './notes/Home'
import CreateNotes from './notes/CreateNotes'
import EditNotes from './notes/EditNotes'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'





export default function Notes({setIsLogin}) {
  return (
    <Router>
    <div className='notes-page'>
      <Header setIsLogin={setIsLogin}/>
      <section>
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/create" Component={CreateNotes} exact />
          <Route path="/edit/:id" Component={EditNotes} exact />
          </Routes>
      </section>
      

    </div>
    </Router>
  )
}
