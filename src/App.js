import React from 'react'
import "./App.css"
import { Headers } from './components/headers/Headers'
import { Home } from './components/home/Home'
import { About } from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Services } from './components/services/Services'
import { Project } from './components/project/Project'
import { ContactMe } from './components/contactme/ContactMe'
import {Foooter} from './components/footer/Foooter'



export const App = () => {
  return (
    <div>
        <Headers/>
        <main className='main'>
          <Home/>
          <About/>
          <Skills/>
          <Services/>
          <Project/>       
          <ContactMe/>
          <Foooter/>
        
  
 
        </main>
    </div>
  )
}
