import { useState } from 'react'
import './App.css'
import './css/Project.css'
import Header from './Header'
import Project from "./ProjectX";
import { project } from './Data'


function App() {


  return (
    <div>

      <Header />

      <div className='project-main'>
        {
          project?.map((project) => (
            <Project key={project.id} project={project} />
          ))
        }
      </div>

    </div>
  )
}

export default App
