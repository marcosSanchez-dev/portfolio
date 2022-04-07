import logoTitle from '../../assets/images/logo-m-nuevo.png'
import { Link } from 'react-router-dom'
import './Home.scss'
import AnimatedLetters from '../AnimatedLetters/Animated'
import { useState, useEffect } from 'react'
import Logo from './Logo/Logo'
import ThreeApp from '../threeJS/three'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'a',
    'r',
    'c',
    'o',
    's',
    ' ',
    'S',
    'a',
    'n',
    'c',
    'h',
    'e',
    'z',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 9000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <ThreeApp />
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={logoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={6}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={8}
            />
          </h1>
          <h2>
            Frontend Developer | Electronic music composer | Immersive artist
          </h2>
          <a href="../Contact" className="flat-button">
            Contact Me
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
