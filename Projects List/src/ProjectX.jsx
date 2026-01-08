import React from 'react'
import { project } from './Data'
import './css/Project.css'

function ProjectX({ project }) {
    const { id, image, title, description, link } = project

    return (
        <div className='project'>

            <img className='image' src={image} />
            <h1 href={link} className='project-title'>{title}</h1>
            <p className='description'>{description}</p>
            <a href={link}>Read more..</a>
        </div >
    )
}

export default ProjectX