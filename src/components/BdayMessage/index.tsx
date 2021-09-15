import Typing from 'react-typing-animation'
import styled from 'styled-components'

interface BdayMessageProps {
  person: string
  message: string
}

const Container = styled.div`
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const BdayPerson = styled.div`
  white-space: nowrap;
  font-family: 'Caveat', sans-serif;
  font-weight: 500;
  font-size: 4rem;
  color: #4A6274;
  @media screen and (max-width: 900px) {
    white-space: default;
    font-size: 2rem;
  }
`

const Message = styled.div`
  display: block;
  white-space: nowrap;
  font-family: 'Caveat', sans-serif;
  font-weight: 500;
  font-size: 2rem;
  margin-top: 1rem;
  color: #4A6274;
  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
    white-space: default;
  }
`

const BdayMessage = ({ person, message }: BdayMessageProps) => (
  <Container>
    <BdayPerson>
      Parabéns, { person }!
    </BdayPerson>
    <Typing>
      <Typing.Speed ms={250} />
      <Message>{ message }</Message>
    </Typing>
    <Message>TE AMO ❤</Message>
  </Container>
)

export default BdayMessage