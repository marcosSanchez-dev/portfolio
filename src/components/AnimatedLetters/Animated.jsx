import './Animated.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((letra, i) => (
        <span key={letra + i} className={`${letterClass} _${i + idx}`}>
          {letra}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
