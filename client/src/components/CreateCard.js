import { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import PropTypes from 'prop-types'

CreateCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function CreateCard({ onSubmit }) {
  const textarea = useState(true)
  const [input] = useState(true)

  return (
    <Wrapper>
      <ButtonBack>&lt; back</ButtonBack>
      <form onSubmit={handleSubmit}>
        <label>
          Text
          <textarea onChange name="text" rows="4" cols="20"></textarea>
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
    const text = textarea.value
    const author = input.value
    onSubmit(text, author)
    form.reset()
    textarea.focus()
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
