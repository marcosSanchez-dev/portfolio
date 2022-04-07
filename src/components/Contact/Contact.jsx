import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/Animated'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ThreeApp from '../threeJS/three'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(e)
    // these IDs from the previous steps
    emailjs
      .sendForm(
        'service_vk8c5ca',
        'template_vinjzw7',
        form.current,
        '1fowVNIopusD-tvTH'
      )
      .then(
        (result) => {
          alert('Message succesfully sent!')
          console.log(result.text)
        },
        (error) => {
          alert('Message error! Try again please...')
          console.log(error.text)
        }
      )

    const inputs = document.querySelectorAll('.clear')
    inputs.forEach((input) => {
      input.value = ''
    })
  }

  return (
    <>
      <div className="container contact-page">
        <ThreeApp />
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', ' ', 'm', 'e']}
              idx={6}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                    className="clear"
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="clear"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="user_subject"
                    className="clear"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="clear"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="Send" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
