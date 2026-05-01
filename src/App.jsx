import AshParticles from './components/AshParticles'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <AshParticles />
      <Hero />
      <div className="section-divider" aria-hidden="true" />
      <ProjectGrid />
      <Footer />
    </>
  )
}
