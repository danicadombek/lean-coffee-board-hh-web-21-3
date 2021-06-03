import styled from 'styled-components/macro'
import Button from './Button'

export default function CreateCard({ onSubmit }) {
  return (
    <Wrapper>
      <ButtonBack>&lt; back</ButtonBack>
      <form onSubmit={handleSubmit}>
        <label>
          Text
          <textarea name="text" rows="4" cols="20"></textarea>
        </label>
        <label>
          Author
          <input name="author" type="text"></input>
        </label>
        <Button>Create card</Button>
      </form>
    </Wrapper>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const textarea = form.elements.text
    const input = form.elements.author
    onSubmit(textarea.value, input.value)
  }
}

const Wrapper = styled.section`
  display: grid;
  gap: 20px;

  form {
    display: grid;
    gap: 20px;
  }

  label {
    display: grid;
    gap: 5px;
  }
`

const ButtonBack = styled(Button)`
  width: fit-content;
  border: 0;
`
