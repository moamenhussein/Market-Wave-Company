import React from 'react'
import Landing from '../Components/landing/Landing'
import Clients from '../Components/clients/Clients'
import Services from '../Components/services/Services'
import Experience from '../Components/experience/Experience'
import Business from '../Components/business/Business'
import Projects from '../Components/projects/Projects'
import Work from '../Components/work/Work'
import Blog from '../Components/blog/Blog'

const Home = () => {
  return (
    <div>

      <Landing />
      <Clients />
      <Services />
      <Experience />
      <Business />
      <Projects />
      <Work />
      <Blog />

    </div>
  )
}

export default Home
