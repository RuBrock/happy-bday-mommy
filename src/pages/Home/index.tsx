import { useEffect } from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import BdayData from '../../data'
import BdayMessage from '../../components/BdayMessage'

const Home = () => {
  const { width, height } = useWindowSize()

  useEffect(() => {
    document.body.style.background = '#F9DDD2'
    document.title = `Parabéns, ${BdayData.person}!`
  }, [])

  return (
    <>
      <Confetti
        width={width}
        height={height}
      />
      <BdayMessage person={BdayData.person} message={BdayData.message}/>
    </>
  )
}

export default Home