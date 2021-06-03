import styled from 'styled-components/macro'
import Button from './Button'

export default function CreateCard() {
  return (
    <Wrapper>
      <Button>&lt; back</Button>
      <form>
        <label>
          Text
          <input type="textarea"></input>
        </label>
        <label>
          Author
          <input type="text"></input>
        </label>
        <Button>Create card</Button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 20px;
`
