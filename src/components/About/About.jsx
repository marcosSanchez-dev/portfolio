import './About.scss'
import AnimatedLetters from '../AnimatedLetters/Animated'
import ThreeApp from '../threeJS/three'
import { useState, useEffect } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }, [])

  return (
    <div className="container about-page">
      <ThreeApp />
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={6}
          />
        </h1>
        <p>
          I'm a self taught web developer with 2 years experience, coding
          multiple types of programs. I have recently achieved more practice in
          the use of Javascript and am seeking employment that will make best
          use of my skills and allow me to develop further determined.
        </p>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['S', 'k', 'i', 'l', 'l', 's']}
            idx={6}
          />
        </h1>
        <ul>
          <li>HTML,CSS & JS</li>
          <li>React</li>
          <li>ThreeJS & WebGL</li>
          <li>NodeJS</li>
          <li>GIT</li>
          <li>Wordpress</li>
          <li>Wordpress</li>
          <li>Gsap</li>
          <li>Pug.js</li>
          <li>Sass</li>
          <li>Vite.js</li>
          <li>WebPack</li>
        </ul>
      </div>
    </div>
  )
}

export default About
