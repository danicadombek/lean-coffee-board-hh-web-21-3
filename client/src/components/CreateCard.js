import styled from 'styled-components/macro'

export default function CreateCard() {
  return (
    <Wrapper>
      <button>&lt; back</button>
      <form>
        <label>
          Text
          <input type="textarea"></input>
        </label>
        <label>
          Author
          <input type="text"></input>
        </label>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 20px;
`
